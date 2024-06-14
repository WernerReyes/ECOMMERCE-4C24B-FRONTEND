import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";
import { messageSlice } from "./slice/messageSlice";

export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      message: messageSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  