import { apiPrivate } from "../config";
export class AuthService {

    constructor() {
        this.urlPrefix = "/auth"
    }

    async register(data) {
        try {
            const response = await apiPrivate.post(`${this.urlPrefix}/register`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async login(data) {
        try {
            const response = await apiPrivate.post(`${this.urlPrefix}/login`, data);
            return response.data;
        } catch (error) {
            throw error;
        }

    }

    async revalidateToken() {
        try {
            const response = await apiPrivate.get(`${this.urlPrefix}/revalidate-token`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}