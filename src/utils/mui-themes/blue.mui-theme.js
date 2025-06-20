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
    components: {
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    color: "#e3f2fd",
                },
                text: {
                    color: "#e3f2fd",
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "#e3f2fd"
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "&.MuiButton-root.MuiButton-outlinedError": {
                        backgroundColor: "#e3f2fd",
                        color: "#2979ff",
                        borderColor: "#2196f3",
                        "&:hover": {
                            backgroundColor: "#64b5f6",
                            color: "#0d47a1"
                        },
                    },
                    "&.MuiButton-root.MuiButton-containedSuccess": {
                        backgroundColor: "#2979ff",
                        color: "#e3f2fd",
                        borderColor: "#0d47a1",
                        "&:hover": {
                            backgroundColor: "#0d47a1",
                            color: "#ffffff"
                        },
                    },
                },
            },
        },
    },
});

export default BlueMuiTheme;
