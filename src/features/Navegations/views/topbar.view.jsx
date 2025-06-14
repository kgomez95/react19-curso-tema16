import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "../../../utils/mui-styles/app-bar.styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { ListItemButton, ListItemIcon } from "@mui/material";

const Topbar = ({ handleDrawerOpen, open }) => {
    const title = useSelector((state) => state.title.value);
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="fixed" open={open}>
                <Toolbar className={`${open && "kgc-pl-0"}`} >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                mr: 0,
                            },
                            open && { display: "none" },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <ListItemIcon>
                        <ListItemButton onClick={() => navigate(-1)}>
                            <ArrowCircleLeftIcon
                                style={{ fontSize: "xx-large" }}
                            />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate(1)}>
                            <ArrowCircleRightIcon
                                style={{ fontSize: "xx-large" }}
                            />
                        </ListItemButton>
                    </ListItemIcon>
                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Topbar;
