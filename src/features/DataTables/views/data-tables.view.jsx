import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import DataTableHead from "../components/data-table-head.component";
import { fetchData, transformData } from "../services/data-tables.service";
import { memo, useEffect, useState } from "react";
import DataTableBody from "../components/data-table-body.component";
import DataTablePagination from "../components/data-table-pagination.component";
import DataTableFilters from "../components/data-table-filters.component";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const DataTable = memo(({
    url = "",
    fieldsInfo = [{ name: "", key: [] }],
    filterSimple = { name: "", key: "", value: "" },
    topActions = [{ name: "", icon: undefined, onClick: undefined }],
    rowActions = [
        { name: "", icon: "", path: "", parameters: [], onClick: undefined },
    ],
}) => {
    // Generamos los datos de la cabecera.
    const headers = fieldsInfo.map((x) => x.name);
    if (rowActions && rowActions.length > 0) {
        // Si tenemos acciones a nivel de fila, añadimos una cabecera sin título.
        headers.push("");
    }

    // Almacena el valor del filtro.
    const [filterValue, setFilterValue] = useState(filterSimple.value || "");

    // Almacena los datos de la paginación.
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    // Almacena la configuración para mostrar los datos en la tabla.
    const bodySettings = fieldsInfo.map((x) => x.key);
    const bodyDisplaySettings = fieldsInfo.map((x) => x.key.join("."));

    // Almacena los datos de la tabla.
    const [body, setBody] = useState([]);

    // Consulta para obtener los datos de la tabla.
    const fetch = async () => {
        const response = await fetchData(url, { page, rowsPerPage }, { filterKey: filterSimple.key, filterValue });
        setTotalCount(response.totalCount);
        setBody(transformData(response.data, bodySettings));
    };

    // Realiza la primera obtención de datos al cargar la vista.
    useEffect(() => {
        fetch();
    }, [page, rowsPerPage, filterValue]);

    // Cambia la página.
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Cambia la cantidad de elementos por página.
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        handleChangePage(event, 0);
    };

    // Cambia el valor del filtro.
    const changeFilterValue = (value) => {
        setFilterValue(value);
    };

    return (
        <div>
            <DataTableFilters name={filterSimple.name} filterValue={filterValue} changeFilterValue={changeFilterValue} topActions={topActions} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <DataTableHead headers={headers} />
                    <DataTableBody
                        body={body}
                        displaySettings={bodyDisplaySettings}
                        rowActions={rowActions}
                    />
                </Table>
                <DataTablePagination
                    totalCount={totalCount}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
        </div>
    );
});

export default DataTable;
