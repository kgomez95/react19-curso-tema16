import { createTheme } from "@mui/material";

const DarkMuiTheme = createTheme({
    palette: {
        primary: {
            main: "#424242",
        },
        secondary: {
            main: "#f44336",
        },
        background: {
            default: "#fafafa",
            paper: "#212121",
        },
        text: {
            primary: "#212121",
            secondary: "#fafafa",
            disabled: "#757575",
        },
        divider: "#424242",
        action: {
            hover: "#616161",
            active: "#00000",
        },
        tables: {
            header: {
                primary: "#212121",
            },
            body: {
                primary: "#f5f5f5",
                secondary: "#e0e0e0",
            },
        },
    },
});

export default DarkMuiTheme;
