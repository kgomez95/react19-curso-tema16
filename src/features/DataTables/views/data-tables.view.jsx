import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import StyledTableCell from "../mui-styles/table-cell.styled";
import StyledTableRow from "../mui-styles/table-row.styled";
import DataTableHead from "../components/data-table-head.component";
import { fetchData, transformData } from "../services/data-tables.service";
import { useEffect, useState } from "react";
import DataTableBody from "../components/data-table-body.component";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const DataTable = ({
    url = "",
    fieldsInfo = [{ name: "", key: [] }],
    filtersInfo = [{ name: "", key: "", filterType: "", fieldType: "" }],
    topActions = [{ name: "", icon: "", path: "" }],
    rowActions = [
        { name: "", icon: "", path: "", parameters: [], onClick: undefined },
    ],
}) => {
    // Generamos los datos de la cabecera.
    const headers = fieldsInfo.map(x => x.name);
    if (rowActions && rowActions.length > 0) {
        // Si tenemos acciones a nivel de fila, añadimos una cabecera sin título.
        headers.push("");
    }

    const bodySettings = fieldsInfo.map(x => x.key);
    const bodyDisplaySettings = fieldsInfo.map(x => x.key.join("."));

    // Almacena los datos de la tabla.
    const [body, setBody] = useState([]);

    // Consulta para obtener los datos de la tabla.
    const fetch = async () => {
        const data = await fetchData(url, bodySettings);
        setBody(transformData(data, bodySettings));
    };

    // Realiza la primera obtención de datos al cargar la vista.
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div>
            <h1>DataTables</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <DataTableHead headers={headers} />
                    <DataTableBody body={body} displaySettings={bodyDisplaySettings} rowActions={rowActions} />
                </Table>
            </TableContainer>
        </div>
    );
};

export default DataTable;
