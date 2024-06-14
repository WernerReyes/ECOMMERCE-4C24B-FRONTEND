import { typeMessage } from "../store";
import { toast } from "sonner";

export const showMessage = (type, message=[]) => {
    switch (type) {
        case typeMessage.SUCCESS:
            successMessage(message);
            break;

        case typeMessage.ERROR:
            errorMessage(message);
            break;

        case typeMessage.INFO:
            infoMessage(message);
            break;

        case typeMessage.WARNING:
            warningMessage(message);
            break;

        default:
            break;
    }
};

export const successMessage = (message) => {
    message.forEach((msg) => toast.success(msg));
};

export const errorMessage = (message) => {
    message.forEach((msg) => toast.error(msg));
};

export const infoMessage = (message) => {
    message.forEach((msg) => toast.info(msg));
};

export const warningMessage = (message) => {
    message.forEach((msg) => toast.warning(msg));
};

