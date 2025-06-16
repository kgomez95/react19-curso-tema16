import { Grid, TextField } from "@mui/material";
import { memo } from "react";

const TextFieldGrid = memo(({ theme, label, required, spacing = 2, size = 12, name, value, onChange }) => {

    return (
        <>
            <Grid container spacing={spacing} size={{ xs: 12, md: size }}>
                <TextField
                    label={label}
                    variant="outlined"
                    required={required}
                    name={name}
                    value={value}
                    onChange={onChange}
                    sx={{
                        "& .MuiInputLabel-animated": {
                            color: theme.palette.text.primary,
                        },
                        width: "100%",
                    }}
                ></TextField>
            </Grid>
        </>
    );
});

export default TextFieldGrid;
