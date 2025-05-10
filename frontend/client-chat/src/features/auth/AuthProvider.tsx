import { useState, useEffect, type ReactNode } from "react";
import { login, logout, fetchCurrentUser } from "./authService";
import { AuthContext } from "./AuthContext";
import type { User, AuthContextType } from "./types";
import { Loading } from "../../components/Loading";
import type { AxiosError } from "axios";

// Unified storage handler
const USER_KEY = "user";

const storage = {
    set: (user: User, remember: boolean) => {
        // Clear both first to ensure no duplication
        sessionStorage.removeItem(USER_KEY);
        localStorage.removeItem(USER_KEY);

        const storageType = remember ? localStorage : sessionStorage;
        storageType.setItem(USER_KEY, JSON.stringify(user));
    },
    get: (): User | null => {
        const sessionItem = sessionStorage.getItem(USER_KEY);
        if (sessionItem) return JSON.parse(sessionItem);

        const localItem = localStorage.getItem(USER_KEY);
        if (localItem) return JSON.parse(localItem);

        return null;
    },
    remove: () => {
        sessionStorage.removeItem(USER_KEY);
        localStorage.removeItem(USER_KEY);
    },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Check session on mount
    const checkSession = async () => {
        const storedUser = storage.get();

        if (storedUser) {
            try {
                const response = await fetchCurrentUser();
                setUser(response.data as User);
            } catch (err) {
                const error = err as AxiosError;
                if (error.response?.status === 401) {
                    setUser(null);
                    storage.remove(); // token expired or invalid
                }
            }
        }

        setLoading(false);
    };

    // Login function with rememberMe flag
    const loginUser = async (
        email: string,
        password: string,
        rememberMe: boolean = false
    ): Promise<void> => {
        setLoading(true);
        try {
            const loginResponse = await login(email, password);
            if (loginResponse?.data) {
                const userResponse = await fetchCurrentUser();
                const userData = userResponse.data as User;
                setUser(userData);
                storage.set(userData, rememberMe);
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

    const logoutUser = async (): Promise<void> => {
        setLoading(true);
        try {
            await logout();
            setUser(null);
            storage.remove();
        } catch (error) {
            console.error("Logout failed:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkSession();
    }, []);

    const contextValue: AuthContextType = {
        user,
        isAuthenticated: !!user,
        loading,
        loginUser,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {!loading ? children : <Loading />}
        </AuthContext.Provider>
    );
};
