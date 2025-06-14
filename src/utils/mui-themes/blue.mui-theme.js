import { createTheme } from "@mui/material";

const BlueMuiTheme = createTheme({
    palette: {
        primary: {
            main: "#1565c0",
        },
        secondary: {
            main: "#f44336",
        },
        background: {
            default: "#e3f2fd",
            paper: "#0d47a1",
        },
        text: {
            primary: "#0d47a1",
            secondary: "#e3f2fd",
            disabled: "#90caf9",
        },
        divider: "#1565c0",
        action: {
            hover: "#42a5f5",
            active: "#00000",
        },
        tables: {
            header: {
                primary: "#0d47a1",
            },
            body: {
                primary: "#bbdefb",
                secondary: "#64b5f6",
            },
        },
    },
});

export default BlueMuiTheme;
