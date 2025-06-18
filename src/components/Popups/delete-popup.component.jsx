import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, Button, Grid } from "@mui/material";
import { useState } from "react";

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

const DeletePopup = ({ open, handleClose, title, message, successMessage }) => {
    const [messageInfo, setMessageInfo] = useState("");

    const doDelete = () => {
        setMessageInfo(successMessage);
    };

    const doClose = () => {
        handleClose();
        setMessageInfo("");
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={doClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2}>
                        {!messageInfo ? (
                            <>
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
                            </>
                        ) : (
                            <Grid
                                container
                                spacing={2}
                                size={{ xs: 12, md: 12, lg: 12 }}
                            >
                                <Alert
                                    severity="info"
                                    style={{ marginBottom: "10px" }}
                                >
                                    {messageInfo}
                                </Alert>
                            </Grid>
                        )}
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
                                onClick={doClose}
                            >
                                Cancelar
                            </Button>
                        </Grid>

                        {!messageInfo && (
                            <Grid size={{ xs: 12, md: 5, lg: 5 }}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    style={{ width: "100%" }}
                                    onClick={doDelete}
                                >
                                    Aceptar
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
};

export default DeletePopup;
