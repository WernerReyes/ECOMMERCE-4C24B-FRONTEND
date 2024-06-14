import axios from "axios";
import { getEnvs } from "../utilities";
import { setupInterceptors } from ".";

const { VITE_API_URL } = getEnvs();


export const api = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

setupInterceptors(api);

