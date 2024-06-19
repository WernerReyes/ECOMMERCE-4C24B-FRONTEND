import { useDispatch, useSelector } from "react-redux";
import { onCheking, onLogin, onLogout, typeMessage } from "../../store";
import { AuthService } from "../../services";
import { getStorage, removeStorage, setStorage } from "../../utilities";
import { useMessageStore } from "./useMessageStore";

const authService = new AuthService();

export const useAuthStore = () => {
    const { status, authenticatedUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { startSetMessages } = useMessageStore();

    const startChecking = () => dispatch(onCheking());

    const startLogin = async (userData) => {
        startChecking();

        await authService.login(userData)
            .then(({ user, token }) => {
                dispatch(onLogin(user));
                setStorage("token", token);
            })
            .catch((error) => {
                throw error;
            });
    }

    const startRegister = async (userData) => {
        startChecking();

        await authService.register(userData)
            .then(({ message }) => {
                startSetMessages([message], typeMessage.SUCCESS);
            })
            .catch(console.error);
    }

    const startRevalidateToken = async () => {
        startChecking();

        const token = getStorage("token");
        if (!token || token?.length < 5) return dispatch(onLogout());

        await authService.revalidateToken()
            .then(({ user, token }) => {
                dispatch(onLogin(user));
                setStorage("token", token);
            })
            .catch(error => {
                console.error(error);
                dispatch(onLogout());
            });
    };

    const startLogout = () => {
        dispatch(onLogout());
        removeStorage("token");
    }

    return {
        //* Atributes
        status,
        authenticatedUser,

        //* Functions
        startChecking,
        startRegister,
        startRevalidateToken,
        startLogin,
        startLogout,
    };
};