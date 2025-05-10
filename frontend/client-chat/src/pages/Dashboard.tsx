// src/pages/Dashboard.tsx

import { Loading } from "../components/Loading";
import { useAuth } from "../features/auth/useAuth";

export default function Dashboard() {
    const { user, logoutUser, loading } = useAuth();

    if (loading) {
        <Loading />
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border border-primary-200">
                <h1 className="text-2xl font-bold text-primary-700 mb-4">
                    Welcome, {user?.name}!
                </h1>
                <p className="text-sm text-gray-700 mb-1">
                    <strong>Email:</strong> {user?.email}
                </p>
                <p className="text-sm text-gray-700 mb-6">
                    <strong>Username:</strong> {user?.username}
                </p>
                <button
                    onClick={logoutUser}
                    className="w-full py-2 px-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
