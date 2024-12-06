import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GridColumn } from "./shared/ListTable";

interface TableComponentProps {
    cols: GridColumn[]
    list: object[]
}

export const TableComponent: React.FC<TableComponentProps> = ({ cols, list }) => {
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            cols.map(col => (
                                <TableCell sx={{ width: col.width }}>{ col.headerName }</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {
                                cols
                                .map((col) => (
                                    <TableCell sx={{ maxWidth: col.width, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: 'nowrap' }}>{ row[col.field] }</TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}