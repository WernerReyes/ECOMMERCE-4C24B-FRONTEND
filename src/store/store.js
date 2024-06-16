import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";
import { messageSlice } from "./slice/messageSlice";
import { furnitureSlice } from "./slice/furnitureSlice";
import { cartSlice } from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      message: messageSlice.reducer,
      furniture: furnitureSlice.reducer,
      cart: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  