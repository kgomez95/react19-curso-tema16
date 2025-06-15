import { Box, Divider, Grid, Paper, styled } from "@mui/material";
import { memo } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: (theme.vars ?? theme).palette.text.primary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

const ItemGridMap = memo(({ title, coordinates, size }) => {
    return (
        <>
            <Grid size={size}>
                <Item style={{ height: "100%" }}>
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
                    <Divider />
                    <Grid container spacing={1}>
                        <Grid
                            size={{
                                xs: 12,
                                md: 12,
                                lg: 12,
                            }}
                        >
                            <Box component="ul" sx={{ pl: 2 }}></Box>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
        </>
    );
});

export default ItemGridMap;
