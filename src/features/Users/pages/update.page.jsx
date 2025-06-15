import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setTitle } from "../../../utils/slices/title.slice";
import { fetchUser } from "../services/users.service";
import { Button, Divider, Grid } from "@mui/material";
import ItemGridContainer from "../../../components/ItemGrids/item-grid-container.component";

const Update = () => {
    const dispatch = useDispatch();
    const { idUsuario } = useParams();

    const getUser = async () => {
        // Obtenemos los datos del usuario.
        const data = await fetchUser(idUsuario);

        dispatch(setTitle(`Modificar datos de "${data.name}"`));
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <p>TODO: En la parte superior hay que mostrar los mensajes de validación.</p>
            <Grid container spacing={2}>
                <Grid container spacing={2} size={7}>
                    <ItemGridContainer title="Datos básicos" size={12}>
                        <h1>Prueba</h1>
                    </ItemGridContainer>

                    <ItemGridContainer title="Datos de la compañía" size={12}>
                        <h1>Prueba</h1>
                    </ItemGridContainer>
                </Grid>
                <Grid container spacing={2} size={5}>
                    <ItemGridContainer title="Dirección" size={12}>
                        <h1>Prueba</h1>
                    </ItemGridContainer>
                </Grid>
            </Grid>
            <div
                style={{
                    paddingTop: "20px",
                    textAlign: "right",
                    display: "flex",
                    justifyContent: "end",
                }}
            >
                <Button variant="outlined" color="error">
                    Cancelar
                </Button>

                <Button
                    variant="contained"
                    color="success"
                    style={{ marginLeft: "10px" }}
                >
                    Aceptar
                </Button>
            </div>
        </>
    );
};

export default Update;
