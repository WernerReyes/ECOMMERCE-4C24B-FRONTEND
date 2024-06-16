import axios from "axios";
import { getEnvs } from "../utilities";
import { setupInterceptors } from ".";

const { VITE_API_URL } = getEnvs();


export const apiPrivate = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiPublic = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

setupInterceptors(apiPrivate);

