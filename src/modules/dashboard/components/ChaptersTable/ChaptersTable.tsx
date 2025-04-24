// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Image from "../../assets/chapterImage.svg";

import { useGetLastUploadedChaptersQuery } from "../../data/dashboard";
import { formatDate } from "../../../Wallet/helpers/formatDate";
function createData(
  image: string,
  title: string,
  duration: number,
  date: string,
  teacher: string
) {
  return { image, title, duration, date, teacher };
}

export default function ChaptersTable() {
  const { data: lastChapters, isLoading: loadingLastChapters } =
    useGetLastUploadedChaptersQuery();
  if (!lastChapters) return;
  let rows = [];
  if (lastChapters) {
    rows = lastChapters?.map((item) =>
      createData(
        "./assets/chapters/1.png",
        item.chapter_name,
        item.duration,
        formatDate(item.created_at),
        item.teachers.fullname
      )
    );
  }

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
                        <p>{row?.title}</p>
                        <span>2 videos . {row?.duration} Hours</span>
                      </div>
                    </div>
                    <div className="date_and_teacher">
                      <p>{row?.date}</p>
                      <span>
                        By <span className="teacher-name">{row?.teacher}</span>
                      </span>
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
