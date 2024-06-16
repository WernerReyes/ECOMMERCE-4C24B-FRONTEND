import { createSlice } from "@reduxjs/toolkit";

export const furnitureEmptyState = {
    furniture_id: 0,
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
};

const furnitureAdapter = (data) => ({
    id: data.furniture_id,
    name: data.name,
    description: data.description,
    price: data.price,
    stock: data.stock,
    category: data.category,
    image: data.image,
});

export const furnitureSlice = createSlice({
    name: "furniture",
    initialState: {
        isLoading: false,
        furniture: [],
        furnitureDetail: furnitureEmptyState,
    },
    reducers: {
        onLoadFurnitures: (state, { payload }) => {
            return {
                ...state,
                furniture: payload.map(furnitureAdapter),
                isLoading: false,
            };
        },

        onLoadingFurniture: (state) => {
            return {
                ...state,
                isLoading: true,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { 
    onLoadFurnitures,
    onLoadingFurniture,
 } = furnitureSlice.actions;
