import { createSlice } from "@reduxjs/toolkit";

export const authStatus = {
    CHECKING: "checking",
    AUTHENTICATE: "authenticate",
    NOT_AUTHENTICATE: "notAuthenticate",
}


export const userEmptyState = {
    id: 0,
    name: "",
    lastname: "",
    email: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: authStatus.CHECKING,
        authenticatedUser: userEmptyState,
    },
    reducers: {
        onCheking: (state) => {
            return {
                ...state,
                status: authStatus.CHECKING,
                authenticatedUser: userEmptyState
            };
        },

        onLogin: (state, { payload }) => {
            return { ...state, authenticatedUser: payload, status: authStatus.AUTHENTICATE };
        },

        onLogout: (state) => {
            return {
                ...state,
                authenticatedUser: userEmptyState,
                status: authStatus.NOT_AUTHENTICATE,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { onCheking, onLogin, onLogout } = authSlice.actions;
