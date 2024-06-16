import { api } from "../config";

export class CategoryService {
    constructor() {
        this.urlPrefix = "/furniture-categories/";
    }

    async getCategories() {
        try {
            const response = await api.get(this.urlPrefix);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
