import { Box, Divider, Grid, Skeleton, Typography } from "@mui/material";
import { memo } from "react";
import Item from "../../utils/mui-styles/item.styled";

const ItemGridDetails = memo(({ title, values, size, children }) => {
    const totalValues = values ? values.length : 1;

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
                    <Grid container spacing={totalValues}>
                        {values &&
                            values.map((value, index) => (
                                <Grid
                                    key={index}
                                    size={{
                                        xs: 12,
                                        md: 12,
                                        lg: 12 / totalValues,
                                    }}
                                >
                                    <Box component="ul" sx={{ pl: 2 }}>
                                        {value.map((itemValue, indexValue) => (
                                            <li key={indexValue}>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    {itemValue.name && (
                                                        <b>{itemValue.name}:</b>
                                                    )}

                                                    <Typography
                                                        variant="span"
                                                        style={{
                                                            width: !itemValue.value
                                                                ? "100%"
                                                                : "auto",
                                                            paddingLeft: "5px",
                                                        }}
                                                    >
                                                        {!itemValue.value ? (
                                                            <Skeleton />
                                                        ) : (
                                                            itemValue.value
                                                        )}
                                                    </Typography>
                                                </div>
                                            </li>
                                        ))}
                                    </Box>
                                </Grid>
                            ))}
                        {!values && children}
                    </Grid>
                </Item>
            </Grid>
        </>
    );
});

export default ItemGridDetails;
