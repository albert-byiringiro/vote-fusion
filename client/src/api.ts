const baseApiUrl = `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}`

interface APIError {
    messages: string[];
    statusCode?: number;
}

interface MakeRequestResponse<T> {
    data: T | Record<string, never>;
    error?: APIError;
}