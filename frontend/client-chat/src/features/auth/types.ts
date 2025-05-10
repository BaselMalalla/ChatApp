// features/auth/types

export type User = {
    id: string;
    username: string;
    name: string;
    email: string;
    created_at: string;
};

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => Promise<void>;
}
