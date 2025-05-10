import { useState, useEffect, type ReactNode } from "react";
import { login, logout, fetchCurrentUser, refreshToken } from "./authService";
import { AuthContext } from "./AuthContext";
import type { User, AuthContextType } from "./types";
import { Loading } from "../../components/Loading";
import type { AxiosError } from "axios";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Function to check for an existing session from localStorage
    const checkSession = async (): Promise<boolean> => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Instant update
        }

        try {
            const userResponse = await fetchCurrentUser(); // Silent revalidate
            setUser(userResponse.data as User);
            localStorage.setItem("user", JSON.stringify(userResponse.data));
            return true;
        } catch (err) {
            const error = err as AxiosError;

            if (error.response?.status === 401) {
                try {
                    await refreshToken();
                    const userResponse = await fetchCurrentUser();
                    setUser(userResponse.data as User);
                    localStorage.setItem("user", JSON.stringify(userResponse.data));
                    return true;
                } catch {
                    setUser(null);
                    localStorage.removeItem("user");
                    return false;
                }
            }

            console.error("Session check failed:", error);
            return false;
        } finally {
            setLoading(false);
        }
    };


    // Login function
    const loginUser = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        try {
            const loginResponse = await login(email, password);
            if (loginResponse?.data) {
                // Successfully logged in, fetch current user details
                const userResponse = await fetchCurrentUser();
                setUser(userResponse.data as User);
                localStorage.setItem("user", JSON.stringify(userResponse.data)); // Persist user data in localStorage
            } else {
                throw new Error("Login failed");
            }
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Logout function
    const logoutUser = async (): Promise<void> => {
        setLoading(true);
        try {
            await logout();
            setUser(null);
            localStorage.removeItem("user"); // Remove user from storage on logout
        } catch (error) {
            console.error("Logout failed:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Check session once on mount
    useEffect(() => {
        checkSession();
    }, []); // Empty dependency array ensures this runs only once on mount

    const contextValue: AuthContextType = {
        user,
        isAuthenticated: !!user,
        loading,
        loginUser,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {!loading ? children : <Loading />} {/* Optionally display a loading state */}
        </AuthContext.Provider>
    );
};
