import { api } from "../config";

export class CategoryService {
    constructor() {
        this.categoryUrlPrefix = "/furniture-categories/";
        this.productUrlPrefix = "/furniture-category/";
    }

    async getCategories() {
        try {
            const response = await api.get(this.categoryUrlPrefix);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getProductsByCategory(categoryId) {
        try {
            const response = await api.get(`/furniture-category/${categoryId}/`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
}
export default CategoryService;
