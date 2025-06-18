import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../../utils/slices/title.slice";
import { useEffect, useState } from "react";
import {
    changeArrowNavigation,
    changeTheme,
} from "../../../utils/slices/theme.slice";
import { FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import ItemGridDetails from "../../../components/ItemGridDetails/item-grid-details.component";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const [currentTheme, setCurrentTheme] = useState(
        useSelector((state) => state.theme.selected === 0)
    );
    const [arrowNavigation, setArrowNavigation] = useState(
        useSelector((state) => state.theme.showArrowNavigation)
    );

    const handleTheme = () => {
        setCurrentTheme((x) => !x);
        dispatch(changeTheme());
    };

    const handleArrowNavigation = () => {
        setArrowNavigation((x) => !x);
        dispatch(changeArrowNavigation());
    };

    useEffect(() => {
        // Asignamos el título de la página.
        dispatch(setTitle("Perfil de configuración"));
    }, []);

    // Datos del usuario.
    const basicUserData = [
        [
            { name: "Nombre", value: "Anónimo" },
            { name: "Apellidos", value: "Anónimo1 Anónimo2" },
            { name: "Género", value: "Cos@" },
            { name: "Edad", value: 65 },
        ],
        [
            { name: "Correo electrónico", value: "anonimo@test.es" },
            { name: "NIF", value: "XXXXXXXX-X" },
            { name: "Teléfono", value: "9XXXXXXXX" },
            { name: "Teléfono móvil", value: "6XXXXXXXX" },
        ],
    ];

    // Datos de la configuración.
    const configData = [
        [
            {
                name: "Paleta de colores",
                value: (
                    <FormControlLabel
                        control={
                            <Switch
                                checked={currentTheme}
                                onChange={handleTheme}
                                name="theme"
                            />
                        }
                        label={currentTheme ? "Oscuro" : "Azul"}
                    />
                ),
            },
            {
                name: "Flechas de navegación",
                value: (
                    <FormControlLabel
                        control={
                            <Switch
                                checked={arrowNavigation}
                                onChange={handleArrowNavigation}
                                name="theme"
                            />
                        }
                        label={arrowNavigation ? "Visibles" : "No visibles"}
                    />
                ),
            },
        ],
    ];

    const aboutData = [
        [
            { name: "", value: (
                <span>Esta es una aplicación web de prueba, desarrollada con la finalidad de poner en práctica gran parte de lo aprendido en el curso <b>React 19</b> (<a href="https://imaginaformacion.com/" target="_blank">Imagina Formación</a>).</span>
            ) },
            { name: "", value: (
                <span>Se ha utilizado la fake API <a href="https://jsonplaceholder.typicode.com/" target="_blank">https://jsonplaceholder.typicode.com/</a> para poder obtener datos ficticios de cara a visualizarlo en las diferentes pantallas de la aplicación.</span>
            ) },
            { name: "", value: (
                <span>Se ha utilizado <a href="https://mui.com/material-ui/" target="_blank">Material UI</a> para el diseño de la aplicación.</span>
            ) },
            { name: "", value: (
                <span>Se ha utilizado <a href="https://react-leaflet.js.org/" target="_blank">React Leaflet</a> para el uso del mapa con coordenadas en la pantalla del detalle de usuario.</span>
            ) },
            { name: "", value: (
                <span>Otros componentes utilizados: axios, reduxjs, react-router-dom, styled-components, eslint, vite.</span>
            ) },
            { name: "", value: (
                <span>Enlace al <a href="https://github.com/kgomez95/react19-curso-tema16" target="_blank">Proyecto en Github</a> para ver el código de la aplicación.</span>
            ) },
        ]
    ];

    const infoData = [
        [
            { name: "", value: (
                <span>En la pantalla <b><i>Perfil</i></b> podemos visualizar datos del usuario identificado (que son datos fijos), y además, tenemos la posibilidad de cambiar en tiempo real dos configuraciones visuales de la propia página.</span>
            ) },
            { name: "", value: (
                <span>En la pantalla <b><i>Usuarios</i></b> podemos realizar búsquedas por usuario, y sobre cada uno de ellos aparecerán tres acciones: ver, editar y eliminar. La acción <b>ver</b> abre una nueva página para mostrar la información detallada del usuario. La acción <b>editar</b> abre una nueva página para modificar la información del usuario. La acción <b>eliminar</b> muestra un mensaje preguntando si quieres eliminar o no el usuario.</span>
            ) },
        ]
    ];

    return (
        <div>
            <Grid container spacing={2}>
                <ItemGridDetails
                    title="Tus datos"
                    values={basicUserData}
                    size={{ xs: 12, md: 12, lg: 7 }}
                />
                <ItemGridDetails
                    title="Configuración"
                    values={configData}
                    size={{ xs: 12, md: 12, lg: 5 }}
                />
                <ItemGridDetails
                    title="Información acerca de la aplicación"
                    values={aboutData}
                    size={{ xs: 12, md: 12, lg: 12 }}
                />
                <ItemGridDetails
                    title="¿Qué podemos hacer en esta aplicación?"
                    values={infoData}
                    size={{ xs: 12, md: 12, lg: 12 }}
                />
            </Grid>
        </div>
    );
};

export default ProfilePage;
