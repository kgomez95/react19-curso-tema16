import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.default",
    boxShadow: 24,
    p: 4,
    borderRadius: "5px",
};

const CancelPopup = ({ open, handleClose, title, message, path }) => {
    const navigate = useNavigate();

    const doCancel = () => {
        navigate(path);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Grid
                            container
                            spacing={2}
                            size={{ xs: 12, md: 12, lg: 12 }}
                        >
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                {title}
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            spacing={2}
                            size={{ xs: 12, md: 12, lg: 12 }}
                        >
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                            >
                                {message}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        spacing={1}
                        paddingTop={2}
                        justifyContent="end"
                    >
                        <Grid size={{ xs: 12, md: 5, lg: 5 }}>
                            <Button
                                variant="outlined"
                                color="error"
                                style={{ width: "100%" }}
                                onClick={handleClose}
                            >
                                Cancelar
                            </Button>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5, lg: 5 }}>
                            <Button
                                variant="contained"
                                color="success"
                                style={{ width: "100%" }}
                                onClick={doCancel}
                            >
                                Aceptar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
};

export default CancelPopup;
