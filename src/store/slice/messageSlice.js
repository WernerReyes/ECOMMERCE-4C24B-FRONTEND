import { createSlice } from "@reduxjs/toolkit";

export const typeMessage = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info",
};

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    type: "",
    messages: []
  },
  reducers: {
    setMessages: (
      state,
      action,
    ) => {
      return { ...state, 
        messages: action.payload.messages, 
        type: action.payload.type
       };
    },

    clearMessages: (state) => {
      return { ...state, messages: [] };
    },
  },
});

export const { setMessages, clearMessages } = messageSlice.actions;
