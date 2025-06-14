import { useState } from "react";
import Sidebar from "./features/Navegations/views/sidebar.view";
import Topbar from "./features/Navegations/views/topbar.view";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerHeader from "./utils/mui-styles/drawer-header.styled";
import Main from "./utils/mui-styles/main.styled";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

const App = () => {
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const theme = useSelector((state) => state.theme.themes[state.theme.selected]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
                <Topbar handleDrawerOpen={handleDrawerOpen} open={open} />
                <Main open={open}>
                    <DrawerHeader />
                    <Outlet />
                </Main>
            </Box>
        </ThemeProvider>
    );
};

export default App;
