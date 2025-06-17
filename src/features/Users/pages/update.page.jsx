import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setTitle } from "../../../utils/slices/title.slice";
import { fetchUser } from "../services/users.service";
import { Alert, Button, Grid, useTheme } from "@mui/material";
import ItemGridContainer from "../../../components/ItemGrids/item-grid-container.component";
import TextFieldGrid from "../../../components/Forms/text-field-grid.component";
import userModel from "../models/user.model";
import {
    changeAddressCity,
    changeAddressGeoLat,
    changeAddressGeoLng,
    changeAddressStreet,
    changeAddressSuite,
    changeAddressZipcode,
    changeCompanyCatchPhrase,
    changeCompanyName,
    changeEmail,
    changeName,
    changePhone,
    changeUsername,
    changeWebsite,
    validateUser,
} from "../services/update-user.service";
import CancelPopup from "../../../components/Popups/cancel-popup.component";

const Update = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { idUsuario } = useParams();
    const [user, setUser] = useState(userModel);
    const [showCancelPopup, setShowCancelPopup] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const getUser = async () => {
        // Obtenemos los datos del usuario.
        const data = await fetchUser(idUsuario);

        // Guardamos el usuario.
        setUser(data);

        dispatch(setTitle(`Modificar datos de "${data.name}"`));
    };

    useEffect(() => {
        getUser();
    }, []);

    const openCancelPopup = () => {
        setShowCancelPopup(true);
    };

    const closeCancelPopup = () => {
        setShowCancelPopup(false);
    };

    const sendForm = () => {
        const errors = validateUser(user);

        if (errors && errors.length > 0) {
            setShowSuccessMessage(false);
            setErrorMessages(errors);
        } else {
            setErrorMessages([]);
            setShowSuccessMessage(true);
        }
    };

    return (
        <>
            {showSuccessMessage && (
                <Alert
                    severity="success"
                    style={{ marginBottom: "10px" }}
                >
                    Simulación realizada con éxito.
                </Alert>
            )}

            {errorMessages.length > 0 &&
                errorMessages.map((error, index) => (
                    <Alert
                        key={index}
                        severity="error"
                        style={{ marginBottom: "10px" }}
                    >
                        {error}
                    </Alert>
                ))}

            <CancelPopup
                open={showCancelPopup}
                handleClose={closeCancelPopup}
                title="¿Desea cancelar la operación?"
                message="Todos los cambios realizados se perderán."
                path="/users"
            />

            <Grid container spacing={2}>
                <Grid container spacing={2} size={{ xs: 12, md: 12, lg: 7 }}>
                    <ItemGridContainer title="Datos básicos" size={12}>
                        <Grid container spacing={2}>
                            <TextFieldGrid
                                size={6}
                                label="Nombre"
                                required={true}
                                theme={theme}
                                name="name"
                                value={user.name}
                                onChange={changeName(setUser)}
                            />
                            <TextFieldGrid
                                size={6}
                                label="Nombre de usuario"
                                required={true}
                                theme={theme}
                                name="username"
                                value={user.username}
                                onChange={changeUsername(setUser)}
                            />
                            <TextFieldGrid
                                size={12}
                                label="Correo electrónico"
                                required={true}
                                theme={theme}
                                name="email"
                                value={user.email}
                                onChange={changeEmail(setUser)}
                            />
                            <TextFieldGrid
                                size={6}
                                label="Teléfono"
                                required={false}
                                theme={theme}
                                name="phone"
                                value={user.phone}
                                onChange={changePhone(setUser)}
                            />
                            <TextFieldGrid
                                size={6}
                                label="Web"
                                required={false}
                                theme={theme}
                                name="website"
                                value={user.website}
                                onChange={changeWebsite(setUser)}
                            />
                        </Grid>
                    </ItemGridContainer>

                    <ItemGridContainer title="Datos de la compañía" size={12}>
                        <Grid container spacing={2}>
                            <TextFieldGrid
                                size={12}
                                label="Nombre"
                                required={true}
                                theme={theme}
                                name="company.name"
                                value={user.company.name}
                                onChange={changeCompanyName(setUser)}
                            />
                            <TextFieldGrid
                                size={12}
                                label="Eslogan"
                                required={false}
                                theme={theme}
                                name="company.catchPhrase"
                                value={user.company.catchPhrase}
                                onChange={changeCompanyCatchPhrase(setUser)}
                            />
                        </Grid>
                    </ItemGridContainer>
                </Grid>
                <Grid container spacing={2} size={{ xs: 12, md: 12, lg: 5 }}>
                    <ItemGridContainer title="Dirección" size={12}>
                        <Grid container spacing={2}>
                            <TextFieldGrid
                                size={12}
                                label="Calle"
                                required={true}
                                theme={theme}
                                name="address.street"
                                value={user.address.street}
                                onChange={changeAddressStreet(setUser)}
                            />
                            <TextFieldGrid
                                size={12}
                                label="Suite"
                                required={false}
                                theme={theme}
                                name="address.suite"
                                value={user.address.suite}
                                onChange={changeAddressSuite(setUser)}
                            />
                            <TextFieldGrid
                                size={12}
                                label="Ciudad"
                                required={true}
                                theme={theme}
                                name="address.city"
                                value={user.address.city}
                                onChange={changeAddressCity(setUser)}
                            />
                            <TextFieldGrid
                                size={12}
                                label="Código postal"
                                required={true}
                                theme={theme}
                                name="address.zipcode"
                                value={user.address.zipcode}
                                onChange={changeAddressZipcode(setUser)}
                            />
                            <TextFieldGrid
                                size={6}
                                label="Latitud"
                                required={false}
                                theme={theme}
                                name="address.geo.lat"
                                value={user.address.geo.lat}
                                onChange={changeAddressGeoLat(setUser)}
                            />
                            <TextFieldGrid
                                size={6}
                                label="Longitud"
                                required={false}
                                theme={theme}
                                name="address.geo.lng"
                                value={user.address.geo.lng}
                                onChange={changeAddressGeoLng(setUser)}
                            />
                        </Grid>
                    </ItemGridContainer>
                </Grid>
            </Grid>
            <Grid container spacing={1} paddingTop={2} justifyContent="end">
                <Grid size={{ xs: 12, md: 2, lg: 1 }}>
                    <Button
                        variant="outlined"
                        color="error"
                        style={{ width: "100%" }}
                        onClick={openCancelPopup}
                    >
                        Cancelar
                    </Button>
                </Grid>

                <Grid size={{ xs: 12, md: 2, lg: 1 }}>
                    <Button
                        variant="contained"
                        color="success"
                        style={{ width: "100%" }}
                        onClick={sendForm}
                    >
                        Aceptar
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Update;
