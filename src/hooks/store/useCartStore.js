import { useDispatch, useSelector } from "react-redux";
import { onAddToCart, onClearCart, onDeleteFromCart, onRemoveFromCart, typeMessage } from "../../store";
import { useMessageStore } from "./useMessageStore";

export const useCartStore = () => {
    const { isLoading, cart, totalQuantity, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { startSetMessages } = useMessageStore();


    const startAddingToCart = (product) => {
        if (totalQuantity >= 20) {
            startSetMessages(
                ["You can add up to 20 items to the cart"],
                typeMessage.ERROR,
            );
            return;
        }
        dispatch(onAddToCart(product));
    };

    const startRemovingFromCart = (product) => {
        dispatch(onRemoveFromCart(product));
    };

    const startDeletingFromCart = (id) => {
        dispatch(onDeleteFromCart(id));
    }

    const startClearingCart = () => {
        dispatch(onClearCart());
    }

    return {
        cart,
        totalQuantity,
        totalAmount,
        isLoading,
        startAddingToCart,
        startClearingCart,
        startRemovingFromCart,
        startDeletingFromCart,
    };

}
