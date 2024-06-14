export const getEnvs = () => {
    return {
        VITE_API_URL: import.meta.env.VITE_API_URL,
    };
};