import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DrawerHeader from "../../../utils/mui-styles/drawer-header.styled";
import * as constants from "../../../constants";
import { ListSubheader, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import ShopIcon from "@mui/icons-material/Shop";

// NOTE: Este es el listado de elementos de navegación.
const navItems = [
    {
        text: "Usuarios",
        icon: <ShopIcon />,
        path: "/users",
    },
    {
        text: "Perfil",
        icon: <SettingsIcon />,
        path: "/profile",
    },
];

const Sidebar = ({ handleDrawerClose, open }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer
                sx={{
                    width: constants.DRAWER_WIDTH,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: constants.DRAWER_WIDTH,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <ListSubheader>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            style={{ fontSize: "smaller" }}
                        >
                            {constants.APP_NAME}
                        </Typography>
                    </ListSubheader>
                    <IconButton
                        onClick={handleDrawerClose}
                        style={{ color: theme.palette.text.secondary }}
                    >
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {navItems.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <Link
                                to={item.path}
                                style={{ width: "inherit", color: "#fafafa" }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
