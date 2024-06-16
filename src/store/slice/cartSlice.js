import { createSlice } from "@reduxjs/toolkit";
import { getStorage, setStorage } from "../../utilities";

const cartAdapter = (data) => ({
    id: data.id,
    name: data.name,
    price: data.price,
    image: data.image,
    quantity: 0,
});

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        cart: getStorage("cart") || [],
        totalQuantity: getStorage("cart")?.length || 0,
    },
    reducers: {

        onAddToCart: (state, { payload }) => {
            const isExist = state.cart.find((item) => item.id === payload.id);
            if (!isExist) {
                const cart = [...state.cart, cartAdapter(payload)];
                setStorage("cart", cart);
                return {
                    ...state,
                    totalQuantity: cart.length,
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
                    totalQuantity: cart.length,
                    cart,
                };
            }


        },

        onRemoveFromCart: (state, { payload }) => {
            const cart = state.cart.map((item) => {
                if (item.id === payload.id) {
                    if (item.quantity > 0) {
                        console.log(item.quantity);
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                }
                return item;
            
            });

            console.log(cart);

            setStorage("cart", cart);
            return {
                ...state,
                totalQuantity: cart.length,
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
