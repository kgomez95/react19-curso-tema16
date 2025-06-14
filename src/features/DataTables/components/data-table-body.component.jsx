import {
    Button,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    TableBody,
} from "@mui/material";
import StyledTableRow from "../mui-styles/table-row.styled";
import StyledTableCell from "../mui-styles/table-cell.styled";

const DataTableBody = ({
    body = [],
    displaySettings = [""],
    rowActions = [
        { name: "", icon: "", path: "", parameters: [], onClick: undefined },
    ],
}) => {
    return (
        <>
            <TableBody>
                {body.map((row) => (
                    <StyledTableRow key={row.id}>
                        {displaySettings.map((item, index) => (
                            <StyledTableCell key={index}>
                                {row[item]}
                            </StyledTableCell>
                        ))}

                        {/* TODO: Hacer que las acciones funcionen. */}
                        {rowActions && (
                            <StyledTableCell>
                                <Stack direction="row" spacing={2}>
                                    {rowActions.map((rowAction, index) => (
                                        <Button
                                            key={index}
                                            onClick={rowAction.onClick}
                                        >
                                            {rowAction.icon ? (
                                                rowAction.icon
                                            ) : (
                                                <ListItemText
                                                    primary={rowAction.name}
                                                />
                                            )}
                                        </Button>
                                    ))}
                                </Stack>
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                ))}
            </TableBody>
        </>
    );
};

export default DataTableBody;
