import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Share from "@mui/icons-material/Share";
import Close from "@mui/icons-material/Close";
// import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

// Local Images
import tradingHistoryArrowUp from "../../Images/Home/tradingHistoryArrowUp.png";
import mainContainerSearchIcon from "../../Images/liquidity/mainContainerSearchIcon.png";
import liquidityTableLastRowDropdown from "../../Images/liquidity/liquidityTableLastRowDropdown.png";

// interface TablePaginationActionsProps {
//   count: number;
//   page: number;
//   rowsPerPage: number;
//   onPageChange: (
//     event: React.MouseEvent<HTMLButtonElement>,
//     newPage: number
//   ) => void;
// }

// function TablePaginationActions(props: TablePaginationActionsProps) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       {/* <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton> */}
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight />
//         ) : (
//           <Button
//             sx={{
//               "&.MuiButton-root": {
//                 textTransform: "none",
//                 borderColor: "gray",
//                 color: "rgba(255, 255, 255, 0.5)",
//                 background: "rgba(255, 255, 255, 0.04)",
//                 p: "8px 14px",
//                 fontWeight: "bold",
//                 borderRadius: "6px",
//               },
//             }}
//           >
//             <KeyboardArrowLeftOutlinedIcon
//               sx={{ position: "relative", left: "-10px" }}
//             />
//             <span> Prev 5</span>
//           </Button>
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft />
//         ) : (
//           //   <KeyboardArrowRight />
//           <Button
//             sx={{
//               "&.MuiButton-root": {
//                 textTransform: "none",
//                 borderColor: "gray",
//                 color: "white",
//                 background: "rgba(255, 255, 255, 0.04)",
//                 p: "8px 14px",
//                 fontWeight: "bold",
//               },
//             }}
//           >
//             <span>Next 5</span>
//             <KeyboardArrowRightOutlinedIcon
//               sx={{ position: "relative", left: "12px" }}
//             />
//           </Button>
//         )}
//       </IconButton>
//       {/* <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton> */}
//     </Box>
//   );
// }

function createData(
  status: string,
  security: string,
  buyNumber: number,
  side: string,
  price: number,
  Yield: number,
  ISIN: string,
  quantity: string
) {
  return { status, security, buyNumber, side, price, Yield, ISIN, quantity };
}

const rows = [
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    1,
    "Buy",
    99.697,
    3.9999,
    "SG31A8000003",
    "$5"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    2,
    "Sell",
    99.697,
    3.9999,
    "SG31A8000003",
    "$2"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    1,
    "Buy",
    99.697,
    3.9999,
    "SG31A8000003",
    "$1"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    1,
    "Sell",
    99.697,
    3.9999,
    "SG31A8000003",
    "$4"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    2,
    "Sell",
    99.697,
    3.9999,
    "SG31A8000003",
    "$8"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    1,
    "Buy",
    99.697,
    3.9999,
    "SG31A8000003",
    "$5"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    2,
    "Sell",
    99.697,
    3.9999,
    "SG31A8000003",
    "$2"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    1,
    "Buy",
    99.697,
    3.9999,
    "SG31A8000003",
    "$1"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    2,
    "Sell",
    99.697,
    3.9999,
    "SG31A8000003",
    "$4"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    2,
    "Sell",
    99.697,
    3.9999,
    "SG31A8000003",
    "$8"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    1,
    "Buy",
    99.697,
    3.9999,
    "SG31A8000003",
    "$5"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    2,
    "Sell",
    99.697,
    3.9999,
    "SG31A8000003",
    "$2"
  ),
  createData(
    "0xdc...4b75",
    "SIGB 2 2/01/24",
    1,
    "Buy",
    99.697,
    3.9999,
    "SG31A8000003",
    "$1"
  ),
].sort((a, b) => (a.quantity < b.quantity ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [openAllTransactionPopup, setOpenAllTransactionPopup] =
    React.useState(false);
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(7);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // const handleChangePage = (
  //   event: React.MouseEvent<HTMLButtonElement> | null,
  //   newPage: number
  // ) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <>
      {openAllTransactionPopup ? (
        <Box className="tradinghistoryBlotterpopup">
          {/* popup */}
          <Box className="tradinghistoryBlotterpopupSec">
            <Typography
              variant="body1"
              sx={{
                fontWeight: "normal !important",
                color: "white",
                fontSize: "25px !important",
              }}
            >
              Trading History
            </Typography>
            <Box className="tradingHistoryPopupBtns" sx={{ cursor: "pointer" }}>
              <Share />
              <Close
                sx={{ fontSize: "25px", marginLeft: "15px" }}
                onClick={() => setOpenAllTransactionPopup(false)}
              />
            </Box>
            <Box className="mainContainerSearchDiv">
              <span>
                <img
                  src={mainContainerSearchIcon}
                  alt="mainContainerSearchIcon"
                />
              </span>
              <input
                type="search"
                className="mainContainerSearch"
                placeholder="Search"
              />
            </Box>
            <br />
            <br />

            <TableContainer
              component={Paper}
              sx={{
                borderRadius: "12px",
                border: `1px solid rgba(255, 255, 255, 0.12)`,
                background: "#1F2231",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pt: "30px",
                  pb: "18px",
                  px: "12px",
                }}
              >
                <Typography
                  fontSize="20px"
                  color="white"
                  sx={{ display: "inline" }}
                >
                  <b>Trading History</b>
                </Typography>
                <Typography
                  fontWeight="600"
                  fontSize="18px"
                  color="#659BEB"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() =>
                    setOpenAllTransactionPopup(!openAllTransactionPopup)
                  }
                >
                  All Transactions
                </Typography>
              </Box>
              <Table
                sx={{ minWidth: 200 }}
                aria-label="custom pagination table"
              >
                <TableHead>
                  <TableRow style={{ color: "white" }}>
                    <TableCell sx={{ fontSize: "16px" }}>
                      <b>Status</b>
                    </TableCell>
                    <TableCell sx={{ fontSize: "16px" }}>
                      <b>Security</b>
                    </TableCell>
                    <TableCell sx={{ fontSize: "16px" }}>
                      <b>Side</b>
                    </TableCell>
                    <TableCell sx={{ fontSize: "16px" }}>
                      <b>Price</b>
                    </TableCell>
                    <TableCell sx={{ fontSize: "16px" }}>
                      <b>Yield</b>
                    </TableCell>
                    <TableCell sx={{ fontSize: "16px" }}>
                      <b>ISIN</b>
                    </TableCell>
                    <TableCell sx={{ fontSize: "16px" }}>
                      <b>QTY</b>
                    </TableCell>
                    <TableCell sx={{ fontSize: "16px" }}>
                      <b>View</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : rows
                  ).map((row) => (
                    //   return { status, security, side, quantity };

                    <TableRow
                      key={row.status}
                      sx={{
                        borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "white" }}
                      >
                        {row.status}
                      </TableCell>
                      {/* <TableCell style={{ width: 160 }} align="right"> */}
                      <TableCell
                        style={{
                          color: "#E0E0FF",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.security}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {/* {row.buyNumber === 1 ? <h1>hello</h1> : <h1>Jo</h1>} {row.side} */}
                        <Box
                          sx={{
                            backgroundColor: "rgba(101, 155, 235, 0.06)",
                            textAlign: "center",
                            fontWeight: "bold",
                            borderRadius: "2px",
                            display: "inline",
                            padding: "3px 7px",
                            marginRight: "2px",
                            fontSize: "12px",
                            fontFamily: "Open Sans",
                          }}
                        >
                          {row.buyNumber === 1 ? (
                            <span style={{ color: "#659BEB" }}>
                              <b>1</b>
                            </span>
                          ) : (
                            <span style={{ color: "#A4F0B2" }}>2</span>
                          )}
                        </Box>{" "}
                        {row.side}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.quantity}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.price}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.ISIN}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.Yield}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Tx{" "}
                        <img
                          style={{ marginLeft: "5px", width: "10.5px" }}
                          src={tradingHistoryArrowUp}
                          alt="tradingHistoryArrowUp"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <br />
                <br />
                <br />
                {/* <TableFooter sx={{ position: "relative", top: "-62px" }}>
                  <TableRow sx={{ marginBottom: "100px" }}>
                    <TablePagination
                      className="tableFooter"
                      sx={{
                        color: "white",
                        border: "none",
                        position: "absolute",
                        right: "30px",
                      }}
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      colSpan={3}
                      labelRowsPerPage={<b>Item Per Page:</b>}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter> */}

                <TableFooter sx={{ position: "relative", top: "-72px" }}>
                  <Box
                    className=""
                    sx={{
                      position: "absolute",
                      padding: "15px",
                      width: "74%",
                      // backgroundColor: 'red'
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "137%",
                      }}
                    >
                      <Box className="liquidityTableLastRowFlexLeftItem">
                        <Button
                          sx={{
                            "&.MuiButton-root": {
                              textTransform: "none",
                              borderColor: "gray",
                              color: "white",
                              background: "rgba(255, 255, 255, 0.04)",
                              p: "8px 16px",
                              ml: "-12px",
                            },
                          }}
                        >
                          Item Per Page: 5
                          <img
                            src={liquidityTableLastRowDropdown}
                            alt="liquidityTableLastRowDropdown"
                          />
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: "-2px",
                        }}
                      >
                        <Box>
                          <Box className="liquidityTableLastRowFlexLeftItem">
                            <Button
                              sx={{
                                "&.MuiButton-root": {
                                  textTransform: "none",
                                  borderColor: "gray",
                                  color: "rgba(255, 255, 255, 0.5)",
                                  background: "rgba(255, 255, 255, 0.04)",
                                  p: "8px 14px",
                                  fontWeight: "bold",
                                  borderRadius: "6px",
                                },
                              }}
                            >
                              <KeyboardArrowLeftOutlinedIcon
                                sx={{ position: "relative", left: "-10px" }}
                              />
                              <span style={{ marginTop: "6px" }}>Prev 5</span>
                            </Button>
                          </Box>
                        </Box>
                        <Box
                          style={{
                            color: "#fff",
                            display: "flex",
                            marginInline: "18px",
                            fontWeight: "bold",
                          }}
                          className="liquidityTableLastRowFlexLeftItem"
                        >
                          <span
                            style={{
                              background: "rgba(255, 255, 255, 0.04)",
                              borderRadius: "12px",
                              padding: "8px 15px 32px 15px",
                              position: "relative",
                              top: "-1px",
                            }}
                            className="liquidityTableLastRowFlexLeftItem"
                          >
                            1
                          </span>
                          <span
                            style={{
                              padding: "15px 12px 8px 12px",
                              color: "rgba(255, 255, 255, 0.6)",
                              borderRadius: "5px",
                            }}
                            className="liquidityTableLastRowFlexLeftItem"
                          >
                            2
                          </span>
                          <span
                            style={{
                              marginBlock: "auto",
                              color: "rgba(255, 255, 255, 0.6)",
                              padding: "4px 12px 8px 12px",
                              borderRadius: "5px",
                            }}
                            className="liquidityTableLastRowFlexLeftItem"
                          >
                            3
                          </span>
                          <span
                            style={{
                              marginBlock: "auto",
                              color: "rgba(255, 255, 255, 0.6)",
                              padding: "3px 12px 8px 12px",
                              borderRadius: "5px",
                            }}
                            className="liquidityTableLastRowFlexLeftItem"
                          >
                            ...
                          </span>
                          <span
                            style={{
                              padding: "16px 12px 8px 12px",
                              color: "rgba(255, 255, 255, 0.6)",
                              borderRadius: "5px",
                            }}
                            className="liquidityTableLastRowFlexLeftItem"
                          >
                            8
                          </span>
                        </Box>
                        <Box className="liquidityTableLastRowFlexLeftItem">
                          <Button
                            sx={{
                              "&.MuiButton-root": {
                                textTransform: "none",
                                borderColor: "gray",
                                color: "white",
                                background: "rgba(255, 255, 255, 0.04)",
                                p: "8px 14px",
                                fontWeight: "bold",
                              },
                            }}
                          >
                            <span style={{ marginTop: "6px" }}>Next 5</span>
                            <KeyboardArrowRightOutlinedIcon
                              sx={{ position: "relative", left: "12px" }}
                            />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </TableFooter>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      ) : (
        ""
      )}

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "12px",
          border: `1px solid rgba(255, 255, 255, 0.12)`,
          background: "#23252F",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: "18px",
            pb: "11px",
            px: "12px",
          }}
        >
          <Typography fontSize="15px" color="white" sx={{ display: "inline" }}>
            <b>Trading History</b>
          </Typography>
          <Typography
            fontWeight="600"
            fontSize="14px"
            color="#659BEB"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => setOpenAllTransactionPopup(!openAllTransactionPopup)}
          >
            All Transactions
          </Typography>
        </Box>
        <Table sx={{ minWidth: 200 }} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0 ? rows.slice(page * 5, page * 5 + 5) : rows).map(
              (row) => (
                //   return { status, security, side, quantity };

                <TableRow
                  key={row.status}
                  sx={{ borderBottom: "2px solid rgba(255, 255, 255, 0.1)" }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "white" }}>
                    {row.status}
                  </TableCell>
                  {/* <TableCell style={{ width: 160 }} align="right"> */}
                  <TableCell
                    style={{
                      color: "#E0E0FF",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.security}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {/* {row.buyNumber === 1 ? <h1>hello</h1> : <h1>Jo</h1>} {row.side} */}
                    <Box
                      sx={{
                        backgroundColor: "rgba(101, 155, 235, 0.06)",
                        textAlign: "center",
                        fontWeight: "bold",
                        borderRadius: "2px",
                        display: "inline",
                        padding: "3px 7px",
                        marginRight: "2px",
                        fontSize: "12px",
                        fontFamily: "Open Sans",
                      }}
                    >
                      {row.buyNumber === 1 ? (
                        <span style={{ color: "#659BEB" }}>
                          <b>1</b>
                        </span>
                      ) : (
                        <span style={{ color: "#A4F0B2" }}>2</span>
                      )}
                    </Box>{" "}
                    {row.side}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.quantity}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Tx{" "}
                    <img
                      style={{ marginLeft: "5px", width: "10.5px" }}
                      src={tradingHistoryArrowUp}
                      alt="tradingHistoryArrowUp"
                    />
                  </TableCell>
                </TableRow>
              )
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
