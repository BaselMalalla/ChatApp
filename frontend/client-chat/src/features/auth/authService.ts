import axios from "axios";
import { handleRequest } from "../../utils/handleRequest";

const API = import.meta.env.VITE_API_URL;

export const register = async (
    username: string,
    name: string,
    email: string,
    password: string
) => {
    const created_at = new Date().toISOString();

    return handleRequest(() =>
        axios.post(
            `${API}/auth/register`,
            { username, name, email, password, created_at },
            { withCredentials: true }
        )
    );
};

export const login = async (email: string, password: string) => {
    return handleRequest(() =>
        axios.post(`${API}/auth/login`, { email, password }, { withCredentials: true })
    );
};

export const logout = async () => {
    return handleRequest(() =>
        axios.post(`${API}/auth/logout`, {}, { withCredentials: true })
    );
};

export const refreshToken = async () => {
    return handleRequest(() =>
        axios.post(`${API}/auth/refresh`, {}, { withCredentials: true })
    );
};

export const fetchCurrentUser = async () => {
    return handleRequest(() =>
        axios.get(`${API}/user/me`, { withCredentials: true })
    );
};
