import { TablePagination, useTheme } from "@mui/material";

const DataTablePagination = ({ totalCount = 0, page = 0, rowsPerPage = 0, handleChangePage, handleChangeRowsPerPage }) => {
    const theme = useTheme();

    return (
        <>
            <TablePagination
                theme={theme}
                rowsPerPageOptions={[3, 6, 10]}
                component="div"
                count={totalCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Elementos por página:"
                labelDisplayedRows={({ from, to, count }) => `${from}–${to} de ${count !== -1 ? count : `más de ${to}`}`}
            />
        </>
    );
};

export default DataTablePagination;
