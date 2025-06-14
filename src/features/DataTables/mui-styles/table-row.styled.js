import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&": {
        backgroundColor: theme.palette.tables.body.secondary,
    },
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.tables.body.primary,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default StyledTableRow;
