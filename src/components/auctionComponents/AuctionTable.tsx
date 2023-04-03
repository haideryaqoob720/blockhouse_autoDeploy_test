import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, Grid, TableFooter } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

// Local Images Import
import ethIcon from "../../Images/liquidity/ethereumToken.png";
import tethIcon from "../../Images/liquidity/tetherToken.png";
import liquidityTokenDropdown from "../../Images/liquidity/liquidityTokenDropdown.png";
import liquidityTableLastRowDropdown from "../../Images/liquidity/liquidityTableLastRowDropdown.png";
import singaporIcon from "../../Images/structured/singapore.png";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  // const { row } = props;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.10) !important",
          },
        }}
      >
        <TableCell
          className="liqudityTableIconBox DealsTableIconBox"
          sx={{ width: "9%", pr: "0 !important", borderBottom: "grey" }}
        >
          <Box sx={{ position: "relative", top: "2px" }}>
            <img
              src={ethIcon}
              alt="Second Icon"
              style={{ width: "40px", height: "40px" }}
            />
            <img
              src={tethIcon}
              alt="Second Icon"
              style={{
                width: "43px",
                height: "43px",
                position: "relative",
                left: "-10px",
                top: "2px",
              }}
            />
          </Box>
        </TableCell>
        <TableCell sx={{ borderBottom: "grey" }}>
          <Box>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "rgba(156, 156, 156)",
              }}
            >
              Symbol
            </p>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "white",
                fontWeight: 700,
              }}
            >
              SGD / USD
            </p>
          </Box>
        </TableCell>
        <TableCell
          sx={{
            borderBottom: "grey",
          }}
        >
          <Box>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "rgba(156, 156, 156)",
                textAlign: "start",
              }}
            >
              Interest
            </p>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "white",
                fontWeight: 700,
                textAlign: "start",
              }}
            >
              3.2%
            </p>
          </Box>
        </TableCell>
        <TableCell
          sx={{
            borderBottom: "grey",
            position: "relative",
            left: "-40px",
          }}
        >
          <Box>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "rgba(156, 156, 156)",
                textAlign: "center",
              }}
            >
              Tenor
            </p>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "white",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              1 year
            </p>
          </Box>
        </TableCell>
        <TableCell
          sx={{
            borderBottom: "grey",
            position: "relative",
            left: "-10px",
          }}
        >
          <Box>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "rgba(156, 156, 156)",
                textAlign: "center",
              }}
            >
              Status
            </p>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "white",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Upcoming
            </p>
          </Box>
        </TableCell>
        <TableCell
          sx={{
            borderBottom: "grey",
            position: "relative",
            left: "20px",
          }}
        >
          <Box>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "rgba(156, 156, 156)",
                textAlign: "center",
              }}
            >
              Time left
            </p>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "white",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              5h 24m 02s
            </p>
          </Box>
        </TableCell>
        <TableCell
          sx={{
            borderBottom: "grey",
            position: "relative",
            left: "20px",
          }}
        >
          <Box>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "rgba(156, 156, 156)",
                textAlign: "end",
              }}
            >
              Quantity
            </p>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "white",
                fontWeight: 700,
                textAlign: "end",
              }}
            >
              5000 lots
            </p>
          </Box>
        </TableCell>
        <TableCell
          className="liquidityTableLastArrow dealsTableLastArrow"
          sx={{
            width: "10%",
            position: "relative",
            left: "40px",
            top: "5px",
            borderBottom: "grey",
          }}
        >
          {/* <img src={rightArrow} alt="" /> */}
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
              navigate("/CompletedAuction");
            }}
            sx={{ cursor: "pointer", zIndex: "9" }}
          >
            {open ? (
              <Box className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                <KeyboardArrowUpIcon
                  sx={{ marginTop: "7px", color: "white" }}
                />
              </Box>
            ) : (
              <Box className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                <img
                  src={liquidityTokenDropdown}
                  alt="liquidityTokenDropdown"
                  style={{ paddingLeft: "0px" }}
                />
              </Box>
            )}
          </IconButton>
          {/* <Box className="siderBarNavItemRightBox liquidityTokenDropdownBox">
            <img src={liquidityTokenDropdown} alt="liquidityTokenDropdown" />
          </Box> */}
        </TableCell>
        {/* <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
        {/* <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          colSpan={7}
        ></TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
];

export default function CollapsibleTable(whichPage: any) {
  function tableBodyMapTimes() {
    return rows.map((row) => <Row key={row.name} row={row} />);
  }
  return (
    <Box
      sx={{
        background:
          "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
        border: "1px solid rgba(255, 255, 255, 0.12) !important",
        marginBlock: "28px",
        marginInline: "0px",
        width: "100%",
        // height: "645px",
        borderRadius: "10px",
        padding: "0px 15px",
        paddingBottom: "75px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          background: "transparent !important",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Table aria-label="collapsible table">
          <TableBody>{tableBodyMapTimes()}</TableBody>
          <TableFooter>
            <Box
              className="tableFooterWidth dealsFooterWidth"
              sx={{
                position: "absolute",
                padding: "15px",
                width: "77%",
                // backgroundColor: 'red'
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
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
                    Item Per Page: 4
                    <img
                      src={liquidityTableLastRowDropdown}
                      alt="liquidityTableLastRowDropdown"
                    />
                  </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: "1px" }}>
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
                        <span style={{ marginTop: "5px" }}>Prev 4</span>
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
                        padding: "9px 15px 32px 15px",
                        position: "relative",
                        top: "-2px",
                      }}
                      className="liquidityTableLastRowFlexLeftItem"
                    >
                      1
                    </span>
                    <span
                      style={{
                        padding: "12px 12px 8px 12px",
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
                        padding: "0px 12px 8px 12px",
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
                        padding: "1px 12px 8px 12px",
                        borderRadius: "5px",
                      }}
                      className="liquidityTableLastRowFlexLeftItem"
                    >
                      ...
                    </span>
                    <span
                      style={{
                        padding: "12px 12px 8px 12px",
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
                      <span style={{ marginTop: "6px" }}>Next 4</span>
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
  );
}
