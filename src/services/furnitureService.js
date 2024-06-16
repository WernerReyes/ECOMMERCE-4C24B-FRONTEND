import { apiPublic } from "../config";
export class FurnitureService {
    constructor() {
        this.urlPrefix = "/furniture";
    }

    async getFurnitures() {
        try {
            return await apiPublic.get(`${this.urlPrefix}/`);
        } catch (error) {
            throw error;
        }
    }

    async getFurnitureById(id) {
        try {
            const response = await apiPublic.get(`${this.urlPrefix}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}