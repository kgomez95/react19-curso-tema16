import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "../utils/slices/title.slice";
import themeSlice from "../utils/slices/theme.slice";

export const store = configureStore({
    reducer: {
        title: titleSlice,
        theme: themeSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
