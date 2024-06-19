import { apiPrivate } from "../config";

export class PaymentService {
    constructor() {
        this.urlPrefix = "/payment"   
    }

    async createPayment(data) {
        try {
            const response = await apiPrivate.post(`${this.urlPrefix}/create`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}