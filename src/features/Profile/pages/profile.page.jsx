import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../../utils/slices/title.slice";
import { useEffect, useState } from "react";
import { changeTheme } from "../../../utils/slices/theme.slice";
import { Divider, FormControlLabel, Switch } from "@mui/material";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const [currentTheme, setCurrentTheme] = useState(
        useSelector((state) => state.theme.selected === 0)
    );

    const handleTheme = () => {
        setCurrentTheme((x) => !x);
        dispatch(changeTheme());
    };

    useEffect(() => {
        // Asignamos el título de la página.
        dispatch(setTitle("Perfil de configuración"));
    }, []);

    return (
        <div>
            <div>
                <h2>Datos del usuario</h2>
                <p><b>Nombre: </b>Anónimo</p>
                <p><b>Apellidos: </b>Anónimo</p>
                <p><b>Correo electrónico: </b>test@test.es</p>
            </div>

            <Divider />

            <div>
                <h2>Paleta de colores</h2>

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
            </div>
        </div>
    );
};

export default ProfilePage;
