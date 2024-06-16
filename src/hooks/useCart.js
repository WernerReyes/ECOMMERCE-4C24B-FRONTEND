import { useDispatch, useSelector } from "react-redux";
import { onAddToCart, onRemoveFromCart } from "../store";

export const useCart = () => {
    const { isLoading, cart, totalQuantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const startAddingToCart = (product) => {
        dispatch(onAddToCart(product));
    };

    const startRemovingFromCart = (product) => {
        dispatch(onRemoveFromCart(product));
    };

    return {
        cart,
        totalQuantity,
        isLoading,
        startAddingToCart,
        startRemovingFromCart,
    };

}
