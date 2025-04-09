import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Image from "../../assets/chapterImage.svg";
function createData(
  image: string,
  title: string,
  duration: number,
  date: string,
  teacher: string
) {
  return { image, title, duration, date, teacher };
}

const rows = [
  createData("./assets/chapters/1.png", "Chapter 1", 60, "18/03/2025", "Omar"),
  createData("./assets/chapters/1.png", "Chapter 1", 60, "18/03/2025", "Omar"),
  createData("./assets/chapters/1.png", "Chapter 1", 60, "18/03/2025", "Omar"),
  createData("./assets/chapters/1.png", "Chapter 1", 60, "18/03/2025", "Omar"),
  // createData("#37560980", "omar", "18/03/2025"),
  // createData("#37560980", "omar", "18/03/2025"),
  // createData("#37560980", "omar", "18/03/2025"),
];

export default function ChaptersTable() {
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
                Chapter
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.title}>
                <TableCell
                  style={{ width: 180 }}
                  align="left"
                  className="dashboard-table-fs"
                >
                  <div className="chapter_item">
                    <div className="_flex-container">
                      <img src={Image} />
                      <div className="title_and_stats">
                        <p>24-01-2023||séance 2 :maths</p>
                        <span>2 videos . 2.7 Hours</span>
                      </div>
                    </div>
                    <div className="date_and_teacher">
                      <p>04/02/2024</p>
                      <span>By <span className="teacher-name">Adouma</span></span>
                    </div>
                  </div>
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
