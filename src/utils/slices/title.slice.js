import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
};

export const titleSlice = createSlice({
    name: "title",
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setTitle } = titleSlice.actions;
export default titleSlice.reducer;
