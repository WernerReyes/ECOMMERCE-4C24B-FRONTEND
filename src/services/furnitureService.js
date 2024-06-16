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
            return await apiPublic.get(`${this.urlPrefix}/${id}/`);
        } catch (error) {
            throw error;
        }
    }
}