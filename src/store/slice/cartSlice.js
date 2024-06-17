import { createSlice } from "@reduxjs/toolkit";
import { getStorage, setStorage } from "../../utilities";

const cartAdapter = (data) => ({
    id: data.id,
    name: data.name,
    price: data.price,
    image: data.image,
    stock: data.stock,
    quantity: 1,
});

const totalQuantity = (cart) => cart.reduce((acc, item) => acc + item.quantity, 0);

const totalAmount = (cart) => cart.reduce((acc, item) => acc + item.quantity * Number(item.price), 0);

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        cart: getStorage("cart") || [],
        totalQuantity: totalQuantity(getStorage("cart") || []),
        totalAmount: totalAmount(getStorage("cart") || []),
    },
    reducers: {

        onAddToCart: (state, { payload }) => {
            const isExist = state.cart.find((item) => item.id === payload.id);
            if (!isExist) {
                const cart = [...state.cart, cartAdapter(payload)];
                setStorage("cart", cart);
                return {
                    ...state,
                    totalQuantity: totalQuantity(cart),
                    totalAmount: totalAmount(cart),
                    cart,
                };

            } else {
                const cart = state.cart.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });
                setStorage("cart", cart);
                return {
                    ...state,
                    totalQuantity: totalQuantity(cart),
                    totalAmount: totalAmount(cart),
                    cart,
                };
            }


        },

        onRemoveFromCart: (state, { payload }) => {
            const cart = state.cart.map((item) => {
                if (item.id === payload.id) {
                    if (item.quantity > 0) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                }
                return item;

            }).filter((item) => item.quantity > 0);

            setStorage("cart", cart);
            return {
                ...state,
                totalQuantity: totalQuantity(cart),
                totalAmount: totalAmount(cart),
                cart,
            };
        },

        onDeleteFromCart: (state, { payload }) => {
            const cart = state.cart.filter((item) => item.id !== payload);
            setStorage("cart", cart);
            return {
                ...state,
                totalQuantity: totalQuantity(cart),
                totalAmount: totalAmount(cart),
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
    onDeleteFromCart,
    onLoadingCart,
} = cartSlice.actions;
