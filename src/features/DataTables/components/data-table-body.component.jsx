import { Button, ListItemText, Stack, TableBody } from "@mui/material";
import StyledTableRow from "../mui-styles/table-row.styled";
import StyledTableCell from "../mui-styles/table-cell.styled";
import { Link } from "react-router-dom";

const DataTableBody = ({
    body = [],
    displaySettings = [""],
    rowActions = [
        { name: "", icon: "", path: "", parameters: [], onClick: undefined },
    ],
}) => {

    const formatUrlParameters = (str, data, ...parameters) => {
        let values = parameters.map(parameter => data[parameter]);

        return str.replace(/{(\d+)}/g, function (match, index) {
            return typeof values[index] !== "undefined" ? values[index] : match;
        });
    };

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
                                    {rowActions.map((rowAction, index) =>
                                        rowAction.path ? (
                                            <Link
                                                key={index}
                                                to={formatUrlParameters(rowAction.path, row, ...rowAction.parameters)}
                                                style={{
                                                    width: "inherit",
                                                    color: "#fafafa",
                                                }}
                                            >
                                                <Button
                                                    title={rowAction.name}
                                                    key={index}
                                                >
                                                    {rowAction.icon ? (
                                                        rowAction.icon
                                                    ) : (
                                                        <ListItemText
                                                            primary={
                                                                rowAction.name
                                                            }
                                                        />
                                                    )}
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button
                                                title={rowAction.name}
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
                                        )
                                    )}
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
