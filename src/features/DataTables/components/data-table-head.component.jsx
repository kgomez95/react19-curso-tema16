import { TableHead, TableRow } from "@mui/material";
import StyledTableCell from "../mui-styles/table-cell.styled";
import { memo } from "react";

const DataTableHead = memo(({ headers = [""] }) => {
    return (
        <>
            <TableHead>
                <TableRow>
                    {headers.map((item, index) => (
                        <StyledTableCell key={index}>{item}</StyledTableCell>
                    ))}
                </TableRow>
            </TableHead>
        </>
    );
});

export default DataTableHead;
