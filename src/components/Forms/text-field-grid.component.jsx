import { Grid, TextField } from "@mui/material";

const TextFieldGrid = ({ theme, label, required, spacing = 2, size = 12, name, value, onChange }) => {

    return (
        <>
            <Grid container spacing={spacing} size={size}>
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
};

export default TextFieldGrid;
