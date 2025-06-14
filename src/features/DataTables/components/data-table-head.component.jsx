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
                    {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    <StyledTableCell align="right">Calories</StyledTableCell>
                    <StyledTableCell align="right">
                        Fat&nbsp;(g)
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        Carbs&nbsp;(g)
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        Protein&nbsp;(g)
                    </StyledTableCell> */}
                </TableRow>
            </TableHead>
        </>
    );
});

export default DataTableHead;
