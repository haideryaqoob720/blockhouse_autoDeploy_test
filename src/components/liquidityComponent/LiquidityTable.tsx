import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TableFooter from "@mui/material/TableFooter";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Close from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";

// Local Images Import
import ethIcon from "../../Images/liquidity/ethereumToken.png";
import tethIcon from "../../Images/liquidity/tetherToken.png";
import liquidityTokenDropdown from "../../Images/liquidity/liquidityTokenDropdown.png";
import liquidityTableLastRowDropdown from "../../Images/liquidity/liquidityTableLastRowDropdown.png";
import singaporIcon from "../../Images/structured/singapore.png";
import metamaskIcon from "../../Images/metamask-icon.png";
import keplerIcon from "../../Images/keplerIcon.png";

//components
import { HomeHR } from "../landingPageComponents/CustomComponents";
import AddLiquidityGraph from './AddLiquidityGraph'

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
  const [removeLiquPressed, setRemoveLiquPressed] = useState(false);
  const [addLiquPressed, setAddLiquPressed] = useState(false);
  let [addLiquidityMax, setAddLiquidityMax] = useState<any>(1.3943);
  let [addLiquidityMin, setAddLiquidityMin] = useState<any>(1.3943);
  let [remLiquidity, setRemLiquidity] = useState<any>(21.20349);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {removeLiquPressed !== false ? (
        <Box
          sx={{
            backgroundColor: "#1E2131",
            width: "400px",
            height: "350px",
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, 0)",
            zIndex: "1 !important",
            // display: "flex",
            // justifyContent: "space-between",
            boxShadow: "0 0 10px #fff",
            padding: "30px 50px",
            borderRadius: "12px",
          }}
        >
          <Close
            sx={{
              position: "absolute",
              right: "15px",
              top: "11px",
              fontSize: "30px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setRemoveLiquPressed(false)}
          />
          <Typography
            component="h1"
            variant="h6"
            color="white"
            noWrap
            style={{ marginTop: "20px" }}
          >
            <b>Remove Liquidity</b>
          </Typography>
          <Box
            sx={{
              border: "1px solid #393a42",
              width: "100%",
              marginTop: "20px",
              borderRadius: "12px",
              textAlign: "center",
              color: "white",
              cursor: "pointer",
              padding: "25px 15px",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              noWrap
              style={{ marginBottom: "20px" }}
            >
              Enter Amount
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <AddCircleOutlineIcon
                onClick={() => setRemLiquidity(remLiquidity + 5)}
              />
              <input
                type="number"
                placeholder="21.20349"
                value={remLiquidity}
                style={{
                  // background: "red",
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: "14px",
                  outline: "none",
                  width: "40%",
                  fontWeight: "bold",
                  padding: "0",
                  marginTop: "-5px",
                  // borderBottom: '1px solid #393a42',
                  textAlign: "center",
                }}
                onChange={(v) => setRemLiquidity(v.target.value)}
              />
              <RemoveCircleOutlineIcon
                onClick={() => setRemLiquidity(remLiquidity - 5)}
              />
            </Box>
          </Box>
          {/* <Button
            onClick={() => setRemoveLiquPressed(false)}
            sx={{
              "&.MuiButton-root": {
                textTransform: "none",
                color: "white",
                lineHeight: "28px",
                fontSize: "16px",
                borderRadius: `6px`,
                width: "80%",
                height: "44px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                marginTop: "20px",
                borderWidth: "2px",
                borderStyle: "solid",
                borderTopColor: "transparent",
                backgroundImage:
                  "linear-gradient(blue, blue), linear-gradient(101deg, #131bd3, #6195eb)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                WebkitBoxShadow: "2px 1000px 1px #202228 inset",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%,0)",
                bottom: "30px",
              },
            }}
          >
            Remove Liquidity
          </Button> */}
          <center>
            <Button
              sx={{
                "&.MuiButton-root": {
                  textTransform: "none",
                  borderColor: "gray",
                  color: "white",
                  background: "rgba(255, 255, 255, 0.04)",
                  width: "73%",
                  height: "40px",
                  fontWeight: 600,
                  fontSize: "16px",
                  borderRadius: `8px 0 0 8px`,
                  marginRight: "4px",
                  marginTop: '40px'
                },
              }}
            >
              Remove Liquidity
            </Button>
            <Button
              sx={{
                "&.MuiButton-root": {
                  textTransform: "none",
                  borderColor: "gray",
                  color: "white",
                  background: "#659BEB",
                  width: "25%",
                  height: "40px",
                  p: "4px 8px",
                  fontWeight: 600,
                  fontSize: "16px",
                  borderRadius: `0 8px 8px 0`,
                  minWidth: "32px",
                  marginTop: '40px'
                },
              }}
            >
              Max
            </Button>
          </center>
        </Box>
      ) : (
        ""
      )}

      {addLiquPressed !== false ? (
        <Box
          sx={{
            backgroundColor: "#1E2131",
            width: "700px",
            height: "auto",
            position: "absolute",
            left: "50%",
            top: "5%",
            transform: "translate(-50%, 0)",
            zIndex: "9999 !important",
            // display: "flex",
            // justifyContent: "space-between",
            boxShadow: "0 0 10px #fff",
            padding: "30px 50px",
            borderRadius: "12px",
          }}
        >
          <Close
            sx={{
              position: "absolute",
              right: "30px",
              top: "28px",
              fontSize: "30px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setAddLiquPressed(false)}
          />
          <Typography
            component="h1"
            variant="h6"
            color="white"
            fontSize={"22px"}
            noWrap
            style={{ marginTop: "0px" }}
          >
            <b>Supply Liquidity</b>
          </Typography>

          <Typography
            variant="h6"
            color="white"
            noWrap
            fontSize={"17px"}
            style={{ marginTop: "30px", marginBottom: "6px" }}
          >
            <b>Select a token pair</b>
          </Typography>

          <center>
            <Button
              sx={{
                "&.MuiButton-root": {
                  textTransform: "none",
                  borderColor: "gray",
                  color: "white",
                  background: "rgba(255, 255, 255, 0.1)",
                  // p: "20px 30px",
                  width: "45%",
                  height: "40px",
                  fontWeight: 600,
                  fontSize: "18px",
                  borderRadius: `20px`,
                  fontFamily: "Open Sans",
                },
              }}
            >
              <img
                src={ethIcon}
                alt="ethIcon"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />{" "}
              SGD
            </Button>
            <SwapHorizontalCircleIcon
              sx={{
                color: "white",
                m: "0px 10px 0px 7px",
                fontSize: "30px",
                position: "relative",
                top: "10px",
              }}
            />
            <Button
              sx={{
                "&.MuiButton-root": {
                  textTransform: "none",
                  borderColor: "gray",
                  color: "white",
                  background: "#659BEB",
                  width: "45%",
                  height: "40px",
                  // p: "4px 8px",
                  fontWeight: 600,
                  fontSize: "18px",
                  borderRadius: `20px`,
                  fontFamily: "Open Sans",
                },
              }}
            >
              <img
                src={tethIcon}
                alt="tethIcon"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />{" "}
              USDC
            </Button>
          </center>

          <Typography
            variant="h6"
            color="white"
            noWrap
            fontSize={"17px"}
            style={{ marginTop: "30px", marginBottom: "6px" }}
          >
            <b>Select the Amount Range</b>
          </Typography>
          <Typography
            color="white"
            fontWeight="600"
            fontSize={"14px"}
            textAlign={"right"}
          >
            Currenct Price: 1.1588{" "}
            <Typography
              color="rgba(255, 255, 255, 0.6);"
              style={{ display: "inline" }}
              fontWeight="600"
            >
              USDC per SGD
            </Typography>
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <Box
              sx={{
                border: "1px solid #393a42",
                width: "49%",
                marginTop: "20px",
                borderRadius: "12px",
                textAlign: "center",
                color: "white",
                cursor: "pointer",
                padding: "25px 15px",
              }}
            >
              <Typography
                variant="body1"
                color="rgba(255, 255, 255, 0.6)"
                noWrap
                style={{ marginBottom: "12px" }}
              >
                Max Amount
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <AddCircleOutlineIcon
                  sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                  onClick={() => setAddLiquidityMax(addLiquidityMax + 2)}
                />
                <input
                  type="number"
                  placeholder="21.20349"
                  value={addLiquidityMax}
                  style={{
                    // background: "red",
                    background: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "18px",
                    outline: "none",
                    width: "40%",
                    fontWeight: "bold",
                    padding: "0",
                    marginTop: "-5px",
                    // borderBottom: '1px solid #393a42',
                    textAlign: "center",
                    marginLeft: "12px",
                  }}
                  onChange={(v) => setAddLiquidityMax(v.target.value)}
                />
                <RemoveCircleOutlineIcon
                  sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                  onClick={() => setAddLiquidityMax(addLiquidityMax - 2)}
                />
              </Box>

              <Typography
                variant="body1"
                color="rgba(255, 255, 255, 0.6)"
                noWrap
                style={{ marginTop: "12px" }}
              >
                USDC per SGD
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #393a42",
                width: "49%",
                marginTop: "20px",
                borderRadius: "12px",
                textAlign: "center",
                color: "white",
                cursor: "pointer",
                padding: "25px 15px",
              }}
            >
              <Typography
                variant="body1"
                color="rgba(255, 255, 255, 0.6)"
                noWrap
                style={{ marginBottom: "12px" }}
              >
                Min Amount
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <AddCircleOutlineIcon
                  sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                  onClick={() => setAddLiquidityMin(addLiquidityMin + 2)}
                />
                <input
                  type="number"
                  placeholder="1.3943"
                  value={addLiquidityMin}
                  style={{
                    // background: "red",
                    background: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "18px",
                    outline: "none",
                    width: "40%",
                    fontWeight: "bold",
                    padding: "0",
                    marginTop: "-5px",
                    // borderBottom: '1px solid #393a42',
                    textAlign: "center",
                    marginLeft: "12px",
                  }}
                  onChange={(v) => setAddLiquidityMin(v.target.value)}
                />
                <RemoveCircleOutlineIcon
                  sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                  onClick={() => setAddLiquidityMin(addLiquidityMin - 2)}
                />
              </Box>

              <Typography
                variant="body1"
                color="rgba(255, 255, 255, 0.6)"
                noWrap
                style={{ marginTop: "12px" }}
              >
                USDC per SGD
              </Typography>
            </Box>
          </Box>
          <HomeHR />
          <Box
            sx={{
              marginBottom: "70px",
              marginTop: "-10px",
            }}
          >
            <AddLiquidityGraph />
          </Box>

          <Button
            onClick={() => setAddLiquPressed(false)}
            sx={{
              "&.MuiButton-root": {
                textTransform: "none",
                color: "white",
                lineHeight: "28px",
                fontSize: "16px",
                borderRadius: `6px`,
                width: "80%",
                height: "44px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                marginTop: "20px",
                borderWidth: "2px",
                borderStyle: "solid",
                borderTopColor: "transparent",
                backgroundImage:
                  "linear-gradient(blue, blue), linear-gradient(101deg, #131bd3, #6195eb)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                WebkitBoxShadow: "2px 1000px 1px #202228 inset",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%,0)",
                bottom: "30px",
              },
            }}
          >
            Add Liquidity
          </Button>
        </Box>
      ) : (
        ""
      )}
      <TableRow
        sx={{
          "& > *": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.10) !important",
          },
        }}
      >
        <TableCell
          className="liqudityTableIconBox"
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
        <TableCell sx={{ borderBottom: "grey" }}>
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
            left: "70px",
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
              Rating
            </p>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "white",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              AA
            </p>
          </Box>
        </TableCell>
        <TableCell
          sx={{
            borderBottom: "grey",
            position: "relative",
            left: "50px",
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
              Expiry
            </p>
            <p
              className="customTxtForLiqTable"
              style={{
                color: "white",
                fontWeight: 700,
                textAlign: "end",
              }}
            >
              04/12/23
            </p>
          </Box>
        </TableCell>
        <TableCell
          className="liquidityTableLastArrow"
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
            onClick={() => setOpen(!open)}
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
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            {open ? <Box className="boxActiveLiqudityRow">.</Box> : ""}
            <Box sx={{ marginBottom: "25px" }}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginLeft: "20px",
                        marginRight: "20px",
                        marginTop: "12px",
                      }}
                    >
                      <Typography color="rgba(255, 255, 255, 0.6);">
                        <img
                          src={singaporIcon}
                          alt="singaporIcon"
                          style={{
                            marginRight: "8px",
                            width: "22px",
                            position: "relative",
                            top: "6px",
                          }}
                        />
                        Total pooled SGB
                      </Typography>
                      <Typography color="white" fontWeight="600" mt="4px">
                        5,941.22
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginLeft: "20px",
                        marginRight: "20px",
                        marginTop: "6px",
                      }}
                    >
                      <Typography color="rgba(255, 255, 255, 0.6);">
                        <img
                          src={singaporIcon}
                          alt="singaporIcon"
                          style={{
                            marginRight: "8px",
                            width: "22px",
                            position: "relative",
                            top: "6px",
                          }}
                        />
                        Your pooled SGB
                      </Typography>
                      <Typography color="white" fontWeight="600" mt="4px">
                        82,826.92
                      </Typography>
                    </Box>
                    <center>
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            textTransform: "none",
                            color: "white",
                            lineHeight: "28px",
                            fontSize: "16px",
                            borderRadius: `6px`,
                            width: "90%",
                            height: "44px",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            marginTop: "20px",
                            borderWidth: "2px",
                            borderStyle: "solid",
                            borderTopColor: "transparent",
                            backgroundImage:
                              "linear-gradient(blue, blue), linear-gradient(101deg, #131bd3, #6195eb)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "content-box, border-box",
                            WebkitBoxShadow: "2px 1000px 1px #202228 inset",
                          },
                        }}
                        onClick={() => setAddLiquPressed(true)}
                      >
                        Add liquidity
                      </Button>
                    </center>
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginLeft: "20px",
                        marginRight: "20px",
                        marginTop: "12px",
                      }}
                    >
                      <Typography color="rgba(255, 255, 255, 0.6);">
                        <img
                          src={singaporIcon}
                          alt="singaporIcon"
                          style={{
                            marginRight: "8px",
                            width: "22px",
                            position: "relative",
                            top: "6px",
                          }}
                        />
                        Total pooled USD
                      </Typography>
                      <Typography color="white" fontWeight="600" mt="4px">
                        72,91.60
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginLeft: "20px",
                        marginRight: "20px",
                        marginTop: "6px",
                      }}
                    >
                      <Typography color="rgba(255, 255, 255, 0.6);">
                        <img
                          src={singaporIcon}
                          alt="singaporIcon"
                          style={{
                            marginRight: "8px",
                            width: "22px",
                            position: "relative",
                            top: "6px",
                          }}
                        />
                        Your pooled USD
                      </Typography>
                      <Typography color="white" fontWeight="600" mt="4px">
                        18,742.92
                      </Typography>
                    </Box>
                    <center>
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            textTransform: "none",
                            borderColor: "gray",
                            color: "white",
                            background: "rgba(60, 62, 75, 0.24)",
                            fontWeight: 600,
                            lineHeight: "28px",
                            fontSize: "14px",
                            marginTop: "22px",
                            borderRadius: `6px`,
                            width: "90%",
                            height: "44px",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderTopRadius: "6px",
                            borderBottomRadius: "6px",
                          },
                        }}
                        onClick={() => setRemoveLiquPressed(true)}
                      >
                        Remove all liquidity
                      </Button>
                    </center>
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginLeft: "20px",
                        marginRight: "20px",
                        marginTop: "12px",
                      }}
                    >
                      <Typography color="rgba(255, 255, 255, 0.6);">
                        Price
                      </Typography>
                      <Typography color="white" fontWeight="600">
                        1{" "}
                        <Typography
                          color="rgba(255, 255, 255, 0.6);"
                          style={{ display: "inline" }}
                          fontWeight="600"
                        >
                          SGB
                        </Typography>{" "}
                        = 11,82628{" "}
                        <Typography
                          color="rgba(255, 255, 255, 0.6);"
                          style={{ display: "inline" }}
                          fontWeight="600"
                        >
                          USD
                        </Typography>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginLeft: "20px",
                        marginRight: "20px",
                        marginTop: "12px",
                      }}
                    >
                      <Typography color="rgba(255, 255, 255, 0.6);">
                        Your pool share
                      </Typography>
                      <Typography color="white" fontWeight="600">
                        62,9263.01
                      </Typography>
                    </Box>
                    <center>
                      <Button 
                      onClick={() => navigate("/BlockhouseDeals")}
                        sx={{
                          "&.MuiButton-root": {
                            textTransform: "none",
                            borderColor: "gray",
                            color: "white",
                            background: "rgba(60, 62, 75, 0.24)",
                            fontWeight: 600,
                            lineHeight: "28px",
                            fontSize: "14px",
                            marginTop: "25px",
                            borderRadius: `6px`,
                            width: "90%",
                            height: "44px",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderTopRadius: "6px",
                            borderBottomRadius: "6px",
                          },
                        }}
                      >
                        View Deal
                      </Button>
                    </center>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
];

export default function CollapsibleTable(whichPage: any) {
  console.log(whichPage.whichPage);
  // console.log(DealsSec2);

  function tableBodyMapTimes() {
    if (whichPage.whichPage === "DealsSec2") {
      return rows.slice(0, 4).map((row) => <Row key={row.name} row={row} />);
    } else {
      return rows.map((row) => <Row key={row.name} row={row} />);
    }
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
              className="tableFooterWidth"
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
                    Item Per Page: {whichPage.whichPage === "DealsSec2" ? 4 : 5}
                    <img
                      src={liquidityTableLastRowDropdown}
                      alt="liquidityTableLastRowDropdown"
                    />
                  </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: "-2px" }}>
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
                        <span>
                          {" "}
                          Prev {whichPage.whichPage === "DealsSec2" ? 4 : 5}
                        </span>
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
                        padding: "10px 15px 32px 15px",
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
                      <span>
                        Next {whichPage.whichPage === "DealsSec2" ? 4 : 5}
                      </span>
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
