import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_THEME_KEY, STORAGE_ARROW_NAVIGATION_KEY } from "../../constants";
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
    showArrowNavigation: (Number(localStorage.getItem(STORAGE_ARROW_NAVIGATION_KEY)) || 0) === 1
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
        changeArrowNavigation: (state) => {
            state.showArrowNavigation = !state.showArrowNavigation;

            // Nos guardamos la configuración en el localStorage.
            localStorage.setItem(STORAGE_ARROW_NAVIGATION_KEY, (state.showArrowNavigation ? 1 : 0));
        }
    },
});

export const { changeTheme, changeArrowNavigation } = themeSlice.actions;
export default themeSlice.reducer;
