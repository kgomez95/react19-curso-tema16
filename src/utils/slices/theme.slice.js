import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_THEME_KEY } from "../../constants";
import DarkMuiTheme from "../mui-themes/dark.mui-theme";
import BlueMuiTheme from "../mui-themes/blue.mui-theme";

const initialState = {
    // Recogemos el tema seleccionado desde el localStorage.
    selected: Number(localStorage.getItem(STORAGE_THEME_KEY)) || 0,
    themes: [
        // Tema oscuro
        DarkMuiTheme,

        // Tema azul
        BlueMuiTheme,
    ],
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            if (state.selected === 0) state.selected = 1;
            else state.selected = 0;

            // Nos guardamos el tema seleccionado en el localStorage.
            localStorage.setItem(STORAGE_THEME_KEY, state.selected);
        },
    },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
