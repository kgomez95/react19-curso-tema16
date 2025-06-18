import { Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const DataTableFilters = ({
    name,
    filterValue,
    changeFilterValue,
    topActions = [{ name: "", icon: undefined, onClick: undefined }],
}) => {
    const theme = useTheme();
    const [filter, setFilter] = useState(filterValue);

    const changeFilter = (event) => {
        setFilter(event.target.value);
    };

    const doSearch = () => {
        changeFilterValue(filter);
    };

    return (
        <div style={{ marginBottom: "15px" }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 10 }}>
                    <TextField
                        label={name}
                        variant="outlined"
                        value={filter}
                        onChange={changeFilter}
                        sx={{
                            width: "30%",
                            "& .MuiOutlinedInput-root": {
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                            },
                            "& .MuiInputLabel-animated": {
                                color: theme.palette.text.primary,
                            },
                        }}
                    ></TextField>
                    <Button
                        variant="contained"
                        style={{
                            padding: "16px 14px",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                        }}
                        onClick={doSearch}
                    >
                        <SearchIcon />
                    </Button>
                </Grid>
                {topActions?.length > 0 && (
                    <Grid
                        size={{ xs: 12, md: 2, lg: 2 }}
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                        }}
                    >
                        {topActions.map((action, index) => (
                            <Button
                                key={index}
                                variant="contained"
                                color="success"
                                onClick={action.onClick}
                                style={{height: "100%"}}
                            >
                                {action.icon}
                            </Button>
                        ))}
                    </Grid>
                )}
            </Grid>

            <Typography
                variant="caption"
                gutterBottom
                sx={{ display: "block" }}
            >
                * Se debe utilizar el nombre completo para realizar la búsqueda,
                ya que <b>jsonplaceholder</b> solo filtra mediante el operador
                igual (=).
            </Typography>
        </div>
    );
};

export default DataTableFilters;
