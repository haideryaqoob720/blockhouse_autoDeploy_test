import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function CustomPaginationActionsTable() {
  let tableBodyRow = (
    <TableRow
      className="compAucTableHeight"
      sx={{ borderBottom: "2px solid transparent" }}
    >
      <TableCell component="td" scope="row" sx={{ color: "white" }}>
        1
      </TableCell>
      {/* <TableCell style={{ width: 160 }} align="right"> */}
      <TableCell
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          whiteSpace: "nowrap",
        }}
      >
        6,638.03
      </TableCell>
      <TableCell
        align="center"
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          whiteSpace: "nowrap",
        }}
      >
        0.06534
      </TableCell>
      <TableCell
        align="right"
        style={{
          color: "white",
          whiteSpace: "nowrap",
        }}
      >
        0.05728
      </TableCell>
    </TableRow>
  );
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "12px",
          border: `1px solid rgba(255, 255, 255, 0.12)`,
          borderBottom: "none",
          background: "#23252F",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Table
          sx={{
            minWidth: 200,
          }}
          aria-label="custom pagination table"
        >
          <TableHead>
            <TableRow
              className="compAucTableHeight"
              // sx={{ borderBottom: "2px solid rgba(255, 255, 255, 0.1)" }}
              sx={{ borderBottom: "2px solid transparent" }}
            >
              <TableCell component="th" scope="row" sx={{ color: "white" }}>
                #
              </TableCell>
              <TableCell
                style={{
                  color: "#E0E0FF",
                  whiteSpace: "nowrap",
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                Price (ETH)
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                Tx (ETH)
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
