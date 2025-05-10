import axios from "axios";

export const handleRequest = async <T>(requestFn: () => Promise<{ data: T } | { error: string | null }>) => {
    try {
        const response = await requestFn();
        if ('data' in response) {
            return { data: response.data, error: null as string | null }; // Successful response
        } else {
            return { data: null, error: response.error || "Unexpected error" }; // Error response
        }
    } catch (error: unknown) {
        let message = "Unexpected error";
        if (axios.isAxiosError(error) && error.response?.data?.message) {
            message = error.response.data.message;
        } else if (error instanceof Error) {
            message = error.message;
        }
        return { data: null, error: message };
    }
};
