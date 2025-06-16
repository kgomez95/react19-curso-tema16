import { Box, Divider, Grid } from "@mui/material";
import Item from "../../utils/mui-styles/item.styled";

const ItemGridContainer = ({ title, size, children }) => {
    return (
        <Grid size={size} spacing={2}>
            <Item style={{ height: "100%" }}>
                {title && (
                    <>
                        <Box
                            sx={{
                                textTransform: "uppercase",
                                fontWeight: "bold",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                paddingLeft: "2.5px",
                            }}
                        >
                            {title}
                        </Box>
                        <Divider style={{ marginBottom: "15px" }} />
                    </>
                )}
                
                {children}
            </Item>
        </Grid>
    );
};

export default ItemGridContainer;
