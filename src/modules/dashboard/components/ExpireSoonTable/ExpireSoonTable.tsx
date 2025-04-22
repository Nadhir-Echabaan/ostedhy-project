import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetExpireSoonQuery } from "../../data/dashboard";
import { formatDate } from "../../../Wallet/helpers/formatDate";

function createData(type: string, name: string, date: string) {
  return { type, name, date };
}

export default function ExpireSoonTable() {
  const { data, isLoading } = useGetExpireSoonQuery();
  if (!data) return;
  let purchasedItems = [...data?.recordings, ...data?.subjects];

  purchasedItems.sort((a: any, b) => {
    let dateA = new Date(a.expiration_date);
    let dateB = new Date(b.expiration_date);
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    return 0;
  });


  purchasedItems = purchasedItems.slice(0, 4);

  let rows = [];
  if (purchasedItems) {
    rows = purchasedItems.map((purchasedItem) =>
      createData(
        purchasedItem.subject_name === undefined
          ? "Recorded session"
          : "subject",
        purchasedItem?.subject_name || purchasedItem?.session_title,
        formatDate(purchasedItem.expiration_date)
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
          <div className="empty-library">
            There is no chapter in your library
          </div>
        )}
      </TableContainer>
    </>
  );
}
