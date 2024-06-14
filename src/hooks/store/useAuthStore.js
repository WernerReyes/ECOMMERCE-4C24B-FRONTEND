import { useDispatch, useSelector } from "react-redux";
import { onCheking, onLogin, typeMessage } from "../../store";
import { AuthService } from "../../services";
import { setStorage } from "../../utilities";
import { useMessageStore } from "./useMessageStore";

const authService = new AuthService();

export const useAuthStore = () => {
    const { status, authenticatedUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { startSetMessages } = useMessageStore();

    const startChecking = () => dispatch(onCheking());

    const startLogin = async (userData) => {
        await authService.login(userData)
            .then(({ user, token }) => {
                dispatch(onLogin(user));
                setStorage("token", token);
            })
            .catch(console.error);
    }

    const startRegister = async (userData) => {
        await authService.register(userData)
            .then(({ message }) => {
                startSetMessages([message], typeMessage.SUCCESS);
            })
            .catch(console.error);
    }

    return {
        //* Atributes
        status,
        authenticatedUser,

        //* Functions
        startChecking,
        startRegister,
        startLogin,
    };
};