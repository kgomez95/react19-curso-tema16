import { useDispatch } from "react-redux";
import { setTitle } from "../../../utils/slices/title.slice";
import { useEffect } from "react";
import DataTable from "../../DataTables/views/data-tables.view";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const SearchUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Asignamos el título de la página.
        dispatch(setTitle("Búsqueda de usuarios"));
    }, []);

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
            { name: "Actualizar", icon: <EditIcon />, path: "/users/update/{0}", parameters: ["id"] },
            { name: "Eliminar", icon: <DeleteForeverIcon />, onClick: () => console.log("TODO: Poner algún popup o algo para mostrar que se ha eliminado.") }
        ]
    };

    return (
        <div>
            <DataTable {...dataTableInfo} />
        </div>
    );
};

export default SearchUsers;
