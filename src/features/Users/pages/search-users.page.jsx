import { useDispatch } from "react-redux";
import { setTitle } from "../../../utils/slices/title.slice";
import { useEffect, useState } from "react";
import DataTable from "../../DataTables/views/data-tables.view";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeletePopup from "../../../components/Popups/delete-popup.component";

const SearchUsers = () => {
    const dispatch = useDispatch();
    const [showCancelPopup, setShowCancelPopup] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        // Asignamos el título de la página.
        dispatch(setTitle("Búsqueda de usuarios"));
    }, []);

    const clicOnDelete = (user) => {
        console.log(user);
        setUser(user);

        openCancelPopup();
    };

    const openCancelPopup = () => {
        setShowCancelPopup(true);
    };

    const closeCancelPopup = () => {
        setShowCancelPopup(false);
    };

    // Datos para la tabla de productos.
    const dataTableInfo = {
        url: "https://jsonplaceholder.typicode.com/users",
        fieldsInfo: [
            { key: ["id"], name: "#" },
            { key: ["name"], name: "Nombre" },
            { key: ["email"], name: "Correo electrónico" },
            { key: ["address", "street"], name: "Dirección" },
        ],
        filterSimple: { key: "name", name: "Nombre" },
        topActions: [
            { name: "Crear", icon: "", path: "/users/create" }
        ],
        rowActions: [
            { name: "Ver", icon: <ArrowOutwardIcon />, path: "/users/details/{0}", parameters: ["id"] },
            { name: "Editar", icon: <EditIcon />, path: "/users/update/{0}", parameters: ["id"] },
            { name: "Eliminar", icon: <DeleteForeverIcon />, onClick: clicOnDelete }
        ]
    };

    return (
        <div>
            <DeletePopup open={showCancelPopup}
                handleClose={closeCancelPopup}
                title={`¿Desea eliminar al usuario "${user.name}"?`}
                message="El usuario se eliminará permanentemente del sistema."
                successMessage={`Simulación realizada correctamente. El usuario con identificador "${user.id}" quedaría eliminado en un entorno real.`} />
            <DataTable {...dataTableInfo} />
        </div>
    );
};

export default SearchUsers;
