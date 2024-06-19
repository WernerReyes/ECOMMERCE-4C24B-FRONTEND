import { PaymentService } from "../services/";
import { typeMessage } from "../store";
import { removeStorage } from "../utilities";
import { useMessageStore } from "./store/useMessageStore";

const paymentService = new PaymentService();

export const usePayment = () => {
    const { startSetMessages } = useMessageStore();

    const startCreatePayment = async (data) => {
        try {
            const response = await paymentService.createPayment(data);
            startSetMessages(["Product purchased successfully!"], typeMessage.SUCCESS);
            removeStorage("cart");
            return response;
        } catch (error) {
            startSetMessages(["Error purchasing product"], typeMessage.ERROR);
            throw error;
        }
    };

    return {
        startCreatePayment
    };
}