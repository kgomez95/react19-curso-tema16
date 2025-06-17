import { BorderColor } from "@mui/icons-material";
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
    components: {
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    color: "#fafafa",
                },
                text: {
                    color: "#fafafa",
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "#fafafa",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "&.MuiButton-root.MuiButton-outlinedError": {
                        backgroundColor: "#eeeeee",
                        color: "#424242",
                        borderColor: "#9e9e9e",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                            color: "#212121"
                        },
                    },
                    "&.MuiButton-root.MuiButton-containedSuccess": {
                        backgroundColor: "#424242",
                        color: "#f5f5f5",
                        borderColor: "#212121",
                        "&:hover": {
                            backgroundColor: "#212121",
                            color: "#fafafa"
                        },
                    },
                },
            },
        },
    },
});

export default DarkMuiTheme;
