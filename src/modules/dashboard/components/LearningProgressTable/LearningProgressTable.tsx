import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProgressBar from "../ProgressBar/ProgressBar";


function createData(subject: string, progress: Number) {
  return { subject, progress };
}

const rows = [
  createData("Math", 75),
  createData("Science", 50),
  createData("History", 90),
  createData("Geography", 60),
  createData("English", 80),
];

export default function LearningProgressTable() {
  return (
    <>
      <TableContainer component={Paper} className="expire_soon_section">
        <Table sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ width: 180 }}
                align="left"
                className="dashboard-table-title subject-th"
                style={{ width: "30%" }}
              >
                Subject
              </TableCell>
              <TableCell
                style={{ width: 180 }}
                align="left"
                className="dashboard-table-title"
              >
                Progress
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.progress}>
                <TableCell
                  style={{ width: 180 }}
                  align="left"
                  className="dashboard-table-fs"
                >
                  {row.subject}
                </TableCell>
                <TableCell
                  style={{ width: 180 }}
                  align="left"
                  className="dashboard-table-fs"
                >
                    {<ProgressBar />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {rows.length === 0 && (
          <div className="empty-library">
            There is no chapter in your library
          </div>
        )}
      </TableContainer>
    </>
  );
}
