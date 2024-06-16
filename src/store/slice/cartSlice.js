import { createSlice } from "@reduxjs/toolkit";
import { getStorage, setStorage } from "../../utilities";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        cart: getStorage("cart") || [],
        quantity: getStorage("cart")?.length || 0,
    },
    reducers: {

        onAddToCart: (state, { payload }) => {
            const cart = [...state.cart, payload];
            setStorage("cart", cart);
            return {
                ...state,
                quantity: cart.length,
                cart,
            };
        },

        onRemoveFromCart: (state, { payload }) => {
            const cart = state.cart.filter((item) => item.id !== payload.id);
            setStorage("cart", cart);
            return {
                ...state,
                quantity: cart.length,
                cart,
            };
        },

        onLoadingCart: (state) => {
            return {
                ...state,
                isLoading: true,
            };
        },

    }

});

// Action creators are generated for each case reducer function
export const {
    onAddToCart,
    onRemoveFromCart,
    onLoadingCart,
} = cartSlice.actions;
