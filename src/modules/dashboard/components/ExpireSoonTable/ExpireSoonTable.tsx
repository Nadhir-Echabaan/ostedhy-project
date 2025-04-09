import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(type: string, name: string, date: string) {
  return { type, name, date };
}

const rows = [
  createData("#--", "hassen", "28/12/2020"),
  createData("#37560980", "omar", "18/03/2025"),
  createData("#37560980", "omar", "18/03/2025"),
  createData("#37560980", "omar", "18/03/2025"),
];

export default function ExpireSoonTable() {
  return (
    <>
      <TableContainer component={Paper} className="expire_soon_section">
        <Table sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ width: 180 }}
                align="left"
                className="dashboard-table-title"
              >
                Purchased type
              </TableCell>
              <TableCell
                style={{ width: 180 }}
                align="left"
                className="dashboard-table-title"
              >
                Purchased name
              </TableCell>
              <TableCell
                style={{ width: 180 }}
                align="left"
                className="dashboard-table-title"
              >
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  style={{ width: 180 }}
                  align="left"
                  className="dashboard-table-fs"
                >
                  {row.type}
                </TableCell>
                <TableCell
                  style={{ width: 180 }}
                  align="left"
                  className="dashboard-table-fs"
                >
                  {row.name}
                </TableCell>
                {
                  <TableCell
                    style={{ width: 180 }}
                    align="left"
                    className="dashboard-table-fs"
                  >
                    <button className="expire-btn">Expire on {row.date}</button>
                  </TableCell>
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {rows.length === 0 && (
          <div className="empty-library">There is no chapter in your library</div>
        )}
      </TableContainer>
    </>
  );
}
