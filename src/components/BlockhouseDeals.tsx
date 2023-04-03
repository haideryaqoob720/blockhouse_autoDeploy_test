import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

// component
import DashboardHeder_Sidebar from "./liquidityComponent/dashboardHeder_Sidebar";
import LiquidityTable from "./liquidityComponent/LiquidityTable";
import TradingHistoryTable from "./homeComponents/TradingHistoryTable";
import PlaceOrderBox from "./PlaceOrderBox";
import ExchangeChart from "./ExchangeChart";

// Images
import placeOrderEth from "../Images/placeOrder/placeOrderEth.png";
import placeOrderTether from "../Images/placeOrder/placeOrderTether.png";
import placeOrderArrowUp from "../Images/placeOrder/placeOrderArrowUp.png";
import placeOrderQuestion from "../Images/placeOrder/placeOrderQuestion.png";
import { HomeHR } from "./landingPageComponents/CustomComponents";

import SwapCallsIcon from "@mui/icons-material/SwapCalls";
const mdTheme = createTheme();

const DealsBox = () => {
  const [bondOrYield, setBondOrYield] = React.useState("bond");
  const [spreadDropdown, SetSpreadDropdown] =
    React.useState("T 0 5/8 08/31/17");
  const [yeildDropdown, SetYeildDropdown] = React.useState("Wst");
  const [yieldCalcEquiv, SetYieldCalcEquiv] = React.useState("1");
  const [riskConvexity, SetRiskConvexity] = React.useState("01");
  const [yieldCalcMmkt, SetYieldCalcMmkt] = React.useState("360");
  const [yieldCalcTrueYield, SetYieldCalcTrueYield] =
    React.useState("True Yield");
  const [yeildDropdown2nd, SetYeildDropdown2nd] = React.useState("S/A");

  const handleChange = (event: SelectChangeEvent) => {
    SetSpreadDropdown(event.target.value as string);
  };
  const handleChangeYieldDropdown = (event: SelectChangeEvent) => {
    SetYeildDropdown(event.target.value as string);
  };
  const handleChangeYieldDropdownSnd = (event: SelectChangeEvent) => {
    SetYeildDropdown2nd(event.target.value as string);
  };
  const handleChangeyieldCalcEquiv = (event: SelectChangeEvent) => {
    SetYieldCalcEquiv(event.target.value as string);
  };
  const handleChangeyieldCalcMmkt = (event: SelectChangeEvent) => {
    SetYieldCalcMmkt(event.target.value as string);
  };
  const handleChangeyieldTrueYield = (event: SelectChangeEvent) => {
    SetYieldCalcTrueYield(event.target.value as string);
  };
  const handleChangeRiskConvexity = (event: SelectChangeEvent) => {
    SetRiskConvexity(event.target.value as string);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />

        <DashboardHeder_Sidebar />

        <Box
          component="main"
          className="blockHouseLiquidityContainer"
          sx={{
            height: "100vh",
          }}
        >
          <Toolbar />
          {/* <LiquidityTable /> */}
          <Box sx={{ width: "93%", margin: "0 auto", mt: "50px", pr: "30px" }}>
            <Typography
              variant="body1"
              className="tableHeadingTxt"
              sx={{ fontWeight: "normal !important", fontFamily: "Open Sans" }}
            >
              Overview
            </Typography>

            <Box sx={{ my: "32px", width: "100%" }}>
              <Grid
                container
                spacing="24px"
                sx={{
                  "@media (max-width: 1340px)": {
                    display: "block !important",
                  },
                }}
              >
                <Grid item xs={6}>
                  <Box
                    sx={{
                      "@media (max-width: 1455px)": {
                        width: "90%",
                      },
                      "@media (max-width: 1340px)": {
                        width: "210%",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        borderRadius: "12px",
                        border: `1px solid rgba(255, 255, 255, 0.12)`,
                        background:
                          "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                        padding: "16px",
                      }}
                    >
                      <Typography
                        component="h1"
                        variant="h4"
                        color="white"
                        noWrap
                      >
                        <b>SGB</b>
                      </Typography>
                      <Typography
                        variant="body1"
                        color="rgba(255, 255, 255, 0.6)"
                        noWrap
                        mt="12px"
                        mb="16px"
                      >
                        Singaporean Sovereign Bonds
                      </Typography>
                      <Box>
                        <Button
                          sx={{
                            "&.MuiButton-root": {
                              textTransform: "none",
                              borderColor: "gray",
                              color: "white",
                              background: "rgba(255, 255, 255, 0.04)",
                              p: "4px 8px",
                              fontWeight: 600,
                              fontSize: "13px",
                              borderRadius: `8px 0 0 8px`,
                              marginRight: "4px",
                            },
                          }}
                        >
                          7.89% Yield
                        </Button>
                        <Button
                          sx={{
                            "&.MuiButton-root": {
                              textTransform: "none",
                              borderColor: "gray",
                              color: "white",
                              background: "#659BEB",
                              p: "4px 8px",
                              fontWeight: 600,
                              fontSize: "13px",
                              borderRadius: `0 8px 8px 0`,
                              minWidth: "32px",
                            },
                          }}
                        >
                          AA
                        </Button>
                      </Box>
                    </Box>
                    <Box sx={{ marginTop: "24px" }}>
                      <PlaceOrderBox />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        borderRadius: "12px",
                        border: `1px solid rgba(255, 255, 255, 0.12)`,
                        background:
                          "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                        marginTop: "24px",
                        borderBottom: "none",
                      }}
                    >
                      <Typography
                        component="h1"
                        variant="h6"
                        padding={"16px"}
                        color="white"
                        noWrap
                      >
                        <b>Overview</b>
                      </Typography>
                      <Typography
                        variant="body1"
                        color="rgba(255, 255, 255, 0.6)"
                        padding={"16px"}
                        mt="-19px"
                        fontSize={"15px"}
                        lineHeight="24px"
                        mb="5px"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English
                      </Typography>
                      {/* <hr
                      style={{
                        border: "none",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    /> */}

                      <ExchangeChart fromWhichPage={"blockHouseDeals"} />
                      <br />
                      <TradingHistoryTable />
                      {/* ******************************************************************* */}

                      {/* <Box padding={"16px"}>

                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "6px", mt: '8px' }}
                      >
                        <Typography color="white" fontWeight="600" fontSize="16px">
                          ETF Details
                        </Typography>
                        <Box>
                          <Typography fontSize="14px" color="white" display={"inline"} mr="20px">
                            Product Page <img src={placeOrderArrowUp} alt="placeOrderArrowUp" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                          </Typography>
                          <Typography fontSize="14px" color="white" display={"inline"}>
                            Fact Sheet <img src={placeOrderArrowUp} alt="placeOrderArrowUp" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body1"
                        mt="-10px"
                        color="rgba(255, 255, 255, 0.6)">
                        Last updated on jan 24, 2023
                      </Typography>

                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px", mt: '20px' }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Estimated Yield Maturity
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          7.89%
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          30 Day SEC Yield
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          7.55%
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Total Assets
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          $18.5b
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Liquidity
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          $2.7b of daily trading volume
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Weighted Average Maturity
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          5.09 years
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "0px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Credit Quality (S&P)
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"} mt="-3px">
                          0.91% <span style={{ margin: '0 3px', fontSize: '21px', color: 'rgba(255, 255, 255, 0.6)' }}>.</span> BBB
                        </Typography>
                      </Box>
                      <Box sx={{ float: 'right', width: '98px', height: '30px' }}>
                        {/* <Typography color="white" fontSize="14px" fontWeight={"bold"} align="end" pb="0px" mt="-10px">
                          51.48% - BB
                        </Typography> *}
                        <Box
                          sx={{ display: "flex", justifyContent: "space-between", pb: "0px", mt: "-12px" }}>
                          <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                            51.48% <span style={{ margin: '0 3px', fontSize: '21px', color: 'rgba(255, 255, 255, 0.6)' }}>.</span>
                          </Typography>
                          <Typography color="white" fontSize="14px" fontWeight={"bold"} mt="8px">
                            BB
                          </Typography>
                        </Box>

                        <Box
                          sx={{ display: "flex", justifyContent: "space-between", pb: "8px", mt: '-12px' }}>
                          <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                            37.68% <span style={{ margin: '0 3px', fontSize: '21px', color: 'rgba(255, 255, 255, 0.6)' }}>.</span>
                          </Typography>
                          <Typography color="white" fontSize="14px" fontWeight={"bold"} mt="8px">
                            B
                          </Typography>
                        </Box>
                      </Box>
                      <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px" fontWeight={"bold"} align="right" pb="8px" mt="42px" sx={{ textDecoration: 'underline' }}>
                        Show all 7 holdings
                      </Typography>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Standard Deviation (Annualized)
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          10.92%
                        </Typography>
                      </Box>
                    </Box> */}
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={6} style={{ marginTop: "-29px" }}>
                  <Box
                    sx={{
                      "@media (max-width: 1455px)": {
                        width: "110%",
                        marginLeft: "-10%",
                      },
                      "@media (max-width: 1340px)": {
                        width: "210%",
                        marginLeft: "0%",
                        marginTop: "50px",
                      },
                    }}
                  >
                    {/* <TradingHistoryTable /> */}
                    <Typography
                      color="white"
                      fontWeight="600"
                      display={"inline"}
                      fontSize="15px"
                      marginLeft={"5px"}
                    >
                      {bondOrYield === "bond"
                        ? "Bond Description"
                        : "Yield And Spread"}
                    </Typography>
                    {bondOrYield === "bond" ? (
                      <Box
                        sx={{
                          borderRadius: "12px",
                          border: `1px solid rgba(255, 255, 255, 0.12)`,
                          background:
                            "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                          marginTop: "5px",
                        }}
                      >
                        <Box padding={"22px 24px"}>
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="15px"
                            onClick={() => setBondOrYield("bond")}
                            sx={{ textDecoration: "underline", color: "white" }}
                          >
                            Bond Description
                          </Typography>
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="15px"
                            marginLeft={"40px"}
                            onClick={() => setBondOrYield("yield")}
                            sx={{
                              textDecoration: "underline",
                              color: "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            Yield and Spread
                          </Typography>
                          <br />
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="15px"
                            style={{ position: "relative", top: "8px" }}
                          >
                            Issuer Information
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                              mt: "14px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="15px"
                            >
                              Name
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="15px"
                              fontWeight={"bold"}
                            >
                              SINGAPOREAN GOVERNMENT
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="15px"
                            >
                              Type
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="15px"
                              fontWeight={"bold"}
                            >
                              SGS BONDS
                            </Typography>
                          </Box>
                        </Box>
                        <HomeHR />

                        <Box padding={"22px 24px"}>
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="17px"
                            style={{ position: "relative", top: "8px" }}
                          >
                            Security Information
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                              mt: "14px",
                              width: "45%",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="15px"
                            >
                              Market Issue
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="15px"
                              fontWeight={"bold"}
                            >
                              7.89%
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Country
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              >
                                US
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Currency
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              >
                                7.89%
                              </Typography>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Rank
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              >
                                Unsecured
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Series
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              ></Typography>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Coupon
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              >
                                2.75%
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Type
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              >
                                {" "}
                                Fixed
                              </Typography>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Cpn Freq
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              >
                                S/A
                              </Typography>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Day Cnt
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              >
                                30/360
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Iss Price
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              ></Typography>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                Maturity
                              </Typography>
                              <Typography
                                color="white"
                                fontSize="15px"
                                fontWeight={"bold"}
                              >
                                05/15/2016
                              </Typography>
                            </Box>
                          </Box>

                          <Typography
                            color="white"
                            fontSize="15px"
                            fontWeight={"bold"}
                          >
                            MAKE WHOLE @50 until 05/15/16/BULLET
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="15px"
                          >
                            Iss Sprd
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="15px"
                            >
                              Calc Type
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="15px"
                              fontWeight={"bold"}
                            >
                              (1)STREET CONVENTION
                            </Typography>
                            <span>.</span>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="15px"
                            >
                              Announcement Date
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="15px"
                              fontWeight={"bold"}
                            >
                              12/23/2013
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="15px"
                            >
                              Interest Accrual Date
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="15px"
                              fontWeight={"bold"}
                            >
                              11/15/2013
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="15px"
                            >
                              Ist Settle Date
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="15px"
                              fontWeight={"bold"}
                            >
                              01/31/2014
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="15px"
                            >
                              Ist Coupon Date
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="15px"
                              fontWeight={"bold"}
                            >
                              05/15/2014
                            </Typography>
                          </Box>
                        </Box>
                        <HomeHR />

                        <Box padding={"22px 24px"}>
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="18px"
                            style={{ position: "relative", top: "8px" }}
                          >
                            Identifiers
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                              mt: "14px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="16px"
                            >
                              ID Number
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              EK0024290
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="16px"
                            >
                              CUSIP
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              37045XAG1
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="16px"
                            >
                              ISIN
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              US37045XAG16
                            </Typography>
                          </Box>
                        </Box>

                        <HomeHR />

                        <Box padding={"22px 24px"}>
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="18px"
                            style={{ position: "relative", top: "8px" }}
                          >
                            Bond Ratings
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                              mt: "14px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="16px"
                            >
                              Moody's
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="14px"
                              fontWeight={"bold"}
                              mt="-3px"
                            >
                              0.91%{" "}
                              <span
                                style={{
                                  margin: "0 3px",
                                  fontSize: "21px",
                                  color: "rgba(255, 255, 255, 0.6)",
                                }}
                              >
                                .
                              </span>{" "}
                              BBB
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="16px"
                            >
                              S&P
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="14px"
                              fontWeight={"bold"}
                              mt="-3px"
                            >
                              51.48%{" "}
                              <span
                                style={{
                                  margin: "0 3px",
                                  fontSize: "21px",
                                  color: "rgba(255, 255, 255, 0.6)",
                                  marginRight: "12px",
                                }}
                              >
                                .
                              </span>{" "}
                              BB
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontSize="16px"
                            >
                              Fitch
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="14px"
                              fontWeight={"bold"}
                              mt="-3px"
                            >
                              37.68%{" "}
                              <span
                                style={{
                                  margin: "0 3px",
                                  fontSize: "21px",
                                  color: "rgba(255, 255, 255, 0.6)",
                                  marginRight: "22px",
                                }}
                              >
                                .
                              </span>{" "}
                              B
                            </Typography>
                          </Box>
                        </Box>

                        <HomeHR />

                        <Box padding={"22px 24px"}>
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="18px"
                            style={{ position: "relative", top: "8px" }}
                          >
                            Issuance & Trading
                          </Typography>

                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                            marginTop={"12px"}
                          >
                            Amt Issued/Outanding
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                              mt: "5px",
                            }}
                          >
                            <Typography color="white" fontSize="16px">
                              USD
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              999,646.00 (M) /
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                            }}
                          >
                            <Typography color="white" fontSize="16px">
                              USD
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              999,646.00 (M)
                            </Typography>
                          </Box>

                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                            marginTop={"12px"}
                          >
                            Min Piece/Increment
                          </Typography>

                          <Typography
                            color="white"
                            fontSize="16px"
                            marginTop={"12px"}
                            align="center"
                          >
                            2,000.00 / 1,000.00
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                              mt: "5px",
                            }}
                          >
                            <Typography color="white" fontSize="16px">
                              Par Amount
                            </Typography>
                            <Typography
                              color="white"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              1,000.00
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                              mt: "5px",
                            }}
                          >
                            <Typography color="white" fontSize="16px">
                              Book Runner
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "2px",
                              mt: "5px",
                            }}
                          >
                            <Typography color="white" fontSize="16px">
                              Reporting
                            </Typography>
                            <Typography
                              color="red"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              TRACE
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          borderRadius: "12px",
                          border: `1px solid rgba(255, 255, 255, 0.12)`,
                          background:
                            "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                          marginTop: "5px",
                        }}
                      >
                        <Box padding={"22px 24px"}>
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="15px"
                            onClick={() => setBondOrYield("bond")}
                            sx={{
                              textDecoration: "underline",
                              color: "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            Bond Description
                          </Typography>
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="15px"
                            marginLeft={"40px"}
                            onClick={() => setBondOrYield("yield")}
                            sx={{ textDecoration: "underline", color: "white" }}
                          >
                            Yield and Spread
                          </Typography>
                          <br />
                          <Typography
                            color="white"
                            fontWeight="600"
                            display={"inline"}
                            fontSize="15px"
                            style={{ position: "relative", top: "8px" }}
                          >
                            SIGB 2 3\4 01/07/2023 (SG3260987684)
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mt: "25px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography color="white" fontSize="15px">
                                Spread
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="43.19"
                                style={{
                                  width: "45%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                }}
                              />
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                fontWeight={"bold"}
                              >
                                bp
                              </Typography>
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                fontWeight={"bold"}
                                sx={{ marginLeft: "12px" }}
                              >
                                vs
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                              >
                                2y
                              </Typography>
                              <FormControl
                                fullWidth
                                // sx={{ m: 1, minWidth: 150, marginTop: "-5px" }}
                                sx={{ m: 1, marginTop: "-5px" }}
                                size="small"
                              >
                                <InputLabel
                                  id="demo-select-small"
                                  sx={{
                                    fontSize: "14px",
                                    marginTop: "-5px",
                                    color: "white",
                                  }}
                                >
                                  Spread
                                </InputLabel>
                                <Select
                                  labelId="demo-select-small"
                                  id="demo-select-small"
                                  value={spreadDropdown}
                                  label="Spread"
                                  onChange={handleChange}
                                  sx={{
                                    color: "white",
                                    fontSize: "14px",
                                    ".MuiOutlinedInput-notchedOutline": {
                                      borderColor: "rgba(228, 219, 233, 0.25)",
                                      height: "38px",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                      },
                                    "&:hover .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                      },
                                    ".MuiSvgIcon-root ": {
                                      fill: "white !important",
                                    },
                                  }}
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={"T 0 5/8 08/31/17"}>
                                    T 0 5/8 08/31/17
                                  </MenuItem>
                                  <MenuItem value={"T 0 4/2 18/21/18"}>
                                    T 0 4/2 18/21/18
                                  </MenuItem>
                                  <MenuItem value={"T 0 7/1 28/01/19"}>
                                    T 0 7/1 28/01/19
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mt: "2px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <Typography color="white" fontSize="15px">
                                Price
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="101.1"
                                style={{
                                  width: "60%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                pb: "2px",
                                width: "45%",
                              }}
                            >
                              <SwapCallsIcon sx={{ color: "white" }} />
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="99-27+"
                                style={{
                                  width: "50%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "3px",
                                }}
                              />
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                fontWeight={"bold"}
                                style={{
                                  textAlign: "right",
                                  paddingRight: "10px",
                                  width: "40%",
                                }}
                              >
                                12:33:53
                              </Typography>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mt: "18px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                pb: "2px",
                                width: "55%",
                              }}
                            >
                              <Typography color="white" fontSize="15px">
                                Yield
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="1.128172"
                                style={{
                                  width: "60%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                              <FormControl
                                // fullWidth
                                // sx={{ m: 1, marginTop: "-5px" }}
                                sx={{ m: 1, minWidth: 80, marginTop: "-5px" }}
                                size="small"
                              >
                                <InputLabel
                                  id="demo-select-small"
                                  sx={{
                                    fontSize: "14px",
                                    marginTop: "-5px",
                                    color: "white",
                                  }}
                                >
                                  Yield
                                </InputLabel>
                                <Select
                                  labelId="demo-select-small"
                                  id="demo-select-small"
                                  value={yeildDropdown}
                                  label="Yield"
                                  onChange={handleChangeYieldDropdown}
                                  sx={{
                                    color: "white",
                                    fontSize: "14px",
                                    ".MuiOutlinedInput-notchedOutline": {
                                      borderColor: "rgba(228, 219, 233, 0.25)",
                                      height: "38px",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                      },
                                    "&:hover .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                      },
                                    ".MuiSvgIcon-root ": {
                                      fill: "white !important",
                                    },
                                  }}
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={"Wst"}>Wst</MenuItem>
                                  <MenuItem value={"Est"}>Est</MenuItem>
                                  <MenuItem value={"Nrt"}>Nrt</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                pb: "2px",
                                width: "44%",
                              }}
                            >
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="0.696309"
                                style={{
                                  width: "60%",
                                  height: "30px",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                              <FormControl
                                // fullWidth
                                // sx={{ m: 1, marginTop: "-5px" }}
                                sx={{ m: 1, minWidth: 80, marginTop: "-5px" }}
                                size="small"
                              >
                                <InputLabel
                                  id="demo-select-small"
                                  sx={{
                                    fontSize: "14px",
                                    marginTop: "-5px",
                                    color: "white",
                                  }}
                                >
                                  S/A
                                </InputLabel>
                                <Select
                                  labelId="demo-select-small"
                                  id="demo-select-small"
                                  value={yeildDropdown2nd}
                                  label="S/A"
                                  onChange={handleChangeYieldDropdownSnd}
                                  sx={{
                                    color: "white",
                                    fontSize: "14px",
                                    ".MuiOutlinedInput-notchedOutline": {
                                      borderColor: "rgba(228, 219, 233, 0.25)",
                                      height: "38px",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                      },
                                    "&:hover .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                      },
                                    ".MuiSvgIcon-root ": {
                                      fill: "white !important",
                                    },
                                  }}
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={"S/A"}>S/A</MenuItem>
                                  <MenuItem value={"A/S"}>A/S</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "4px",
                              width: "100%",
                              marginTop: "-5px",
                            }}
                          >
                            <Typography
                              color="rgba(255, 255, 255, 0.6)"
                              fontWeight="600"
                              display={"inline"}
                              fontSize="15px"
                              sx={{ width: "20%" }}
                            >
                              Wkout
                            </Typography>
                            <Typography
                              color="white"
                              fontWeight="600"
                              display={"inline"}
                              fontSize="15px"
                              sx={{ width: "50%" }}
                            >
                              05/15/2016{" "}
                              <span
                                style={{ color: "rgba(255, 255, 255, 0.6)" }}
                              >
                                @
                              </span>{" "}
                              100.00{" "}
                              <span
                                style={{ color: "rgba(255, 255, 255, 0.6)" }}
                              >
                                Consensus
                              </span>
                            </Typography>
                            <Box>
                              <Typography
                                color="white"
                                fontWeight="600"
                                display={"inline"}
                                fontSize="15px"
                              >
                                Yld
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="6"
                                style={{
                                  width: "25px",
                                  height: "30px",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "center",
                                  padding: "0 5px",
                                  marginLeft: "6px",
                                }}
                              />
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="6"
                                style={{
                                  width: "25px",
                                  height: "30px",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "center",
                                  padding: "0 5px",
                                }}
                              />
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mt: "2px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                // justifyContent: "space-between",
                                width: "45%",
                              }}
                            >
                              <Typography color="white" fontSize="15px">
                                Settle
                              </Typography>

                              <input
                                type="date"
                                defaultValue="2017-05-24"
                                style={{
                                  height: "30px",
                                  width: "150px",
                                  borderRadius: "4px",
                                  margin: "0 14px",
                                  color: "white",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  filter: "invert(0.3)",
                                  padding: "0 5px",
                                  marginLeft: "17px",
                                  marginTop: "-2px",
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                // justifyContent: "space-between",
                                width: "45%",
                              }}
                            >
                              <input
                                type="date"
                                defaultValue="2015-09-04"
                                style={{
                                  height: "30px",
                                  width: "150px",
                                  borderRadius: "4px",
                                  margin: "0 14px",
                                  color: "white",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  filter: "invert(0.3)",
                                  padding: "0 5px",
                                  marginLeft: "30px",
                                  marginTop: "-2px",
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                        <HomeHR />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            padding={"22px 24px"}
                            sx={{
                              pt: "30px",
                              width: "35%",
                            }}
                          >
                            <Typography
                              color="white"
                              fontSize="17px"
                              sx={{ marginLeft: "-2px" }}
                            >
                              <b>Spreads</b>
                            </Typography>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "15px",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                width={"40%"}
                                sx={{ whiteSpace: "nowrap" }}
                              >
                                G-Sprd
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="85.2"
                                style={{
                                  width: "55%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "12px",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                width={"40%"}
                                sx={{ whiteSpace: "nowrap" }}
                              >
                                I-Sprd
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="85.2"
                                style={{
                                  width: "55%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "12px",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                width={"40%"}
                                sx={{ whiteSpace: "nowrap" }}
                              >
                                Basic
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="-4.7"
                                style={{
                                  width: "55%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "12px",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                width={"40%"}
                                sx={{ whiteSpace: "nowrap" }}
                              >
                                Z-Sprd
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="68.5"
                                style={{
                                  width: "55%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "12px",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                width={"40%"}
                                sx={{ whiteSpace: "nowrap" }}
                              >
                                ASW
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="68.3"
                                style={{
                                  width: "55%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "12px",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                width={"40%"}
                                sx={{ whiteSpace: "nowrap" }}
                              >
                                OAS
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="86.5"
                                style={{
                                  width: "55%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "12px",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                width={"40%"}
                                sx={{ whiteSpace: "nowrap" }}
                              >
                                TED
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="-68.3"
                                style={{
                                  width: "55%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>
                          </Box>
                          <Box
                            padding={"22px 24px"}
                            sx={{
                              pt: "30px",
                              width: "65%",
                              borderLeft: "1px solid rgba(228, 219, 233, 0.25)",
                            }}
                          >
                            <Box>
                              <Typography color="white" fontSize="17px" noWrap>
                                <b>Yield Calculations</b>
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "15px",
                                width: "100%",
                              }}
                            >
                              <Typography
                                color="rgba(255, 255, 255, 0.6)"
                                fontSize="15px"
                                width={"60%"}
                              >
                                Street Convention
                              </Typography>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="1.128172"
                                style={{
                                  width: "30%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "24px",
                                width: "100%",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography
                                  color="rgba(255, 255, 255, 0.6)"
                                  fontSize="15px"
                                  width={"40%"}
                                >
                                  Equiv
                                </Typography>

                                <FormControl
                                  // fullWidth
                                  // sx={{ m: 1, marginTop: "-5px" }}
                                  sx={{ m: 1, minWidth: 80, marginTop: "-5px" }}
                                  size="small"
                                >
                                  <InputLabel
                                    id="demo-select-small"
                                    sx={{
                                      fontSize: "14px",
                                      marginTop: "-5px",
                                      color: "white",
                                    }}
                                  >
                                    Equiv
                                  </InputLabel>
                                  <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={yieldCalcEquiv}
                                    label="Equiv"
                                    onChange={handleChangeyieldCalcEquiv}
                                    sx={{
                                      color: "white",
                                      fontSize: "14px",
                                      ".MuiOutlinedInput-notchedOutline": {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                        height: "38px",
                                      },
                                      "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                          borderColor:
                                            "rgba(228, 219, 233, 0.25)",
                                        },
                                      "&:hover .MuiOutlinedInput-notchedOutline":
                                        {
                                          borderColor:
                                            "rgba(228, 219, 233, 0.25)",
                                        },
                                      ".MuiSvgIcon-root ": {
                                        fill: "white !important",
                                      },
                                    }}
                                  >
                                    <MenuItem value="">
                                      <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"1"}>1</MenuItem>
                                    <MenuItem value={"2"}>2</MenuItem>
                                    <MenuItem value={"3"}>3</MenuItem>
                                  </Select>
                                </FormControl>
                                <Typography
                                  color="rgba(255, 255, 255, 0.6)"
                                  fontSize="15px"
                                  width={"40%"}
                                >
                                  / Yr
                                </Typography>
                              </Box>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="1.131354"
                                style={{
                                  width: "30%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "15px",
                                width: "100%",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography
                                  color="rgba(255, 255, 255, 0.6)"
                                  fontSize="15px"
                                  width={"60%"}
                                  style={{ whiteSpace: "nowrap" }}
                                >
                                  Mmkt (Act /
                                </Typography>

                                <FormControl
                                  // fullWidth
                                  // sx={{ m: 1, marginTop: "-5px" }}
                                  sx={{ m: 1, minWidth: 80, marginTop: "-5px" }}
                                  size="small"
                                >
                                  <InputLabel
                                    id="demo-select-small"
                                    sx={{
                                      fontSize: "14px",
                                      marginTop: "-5px",
                                      color: "white",
                                    }}
                                  >
                                    Mmkt
                                  </InputLabel>
                                  <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={yieldCalcMmkt}
                                    label="Mmkt"
                                    onChange={handleChangeyieldCalcMmkt}
                                    sx={{
                                      color: "white",
                                      fontSize: "14px",
                                      ".MuiOutlinedInput-notchedOutline": {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                        height: "38px",
                                      },
                                      "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                          borderColor:
                                            "rgba(228, 219, 233, 0.25)",
                                        },
                                      "&:hover .MuiOutlinedInput-notchedOutline":
                                        {
                                          borderColor:
                                            "rgba(228, 219, 233, 0.25)",
                                        },
                                      ".MuiSvgIcon-root ": {
                                        fill: "white !important",
                                      },
                                    }}
                                  >
                                    <MenuItem value="">
                                      <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"360"}>360</MenuItem>
                                    <MenuItem value={"180"}>180</MenuItem>
                                    <MenuItem value={"90"}>90</MenuItem>
                                  </Select>
                                </FormControl>
                                <Typography
                                  color="rgba(255, 255, 255, 0.6)"
                                  fontSize="15px"
                                >
                                  {")"}
                                </Typography>
                              </Box>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="1.111223"
                                style={{
                                  width: "30%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "15px",
                                width: "100%",
                              }}
                            >
                              <FormControl
                                fullWidth
                                sx={{ m: 1, marginTop: "-5px", ml: "-0px" }}
                                // sx={{ m: 1, minWidth: 80, marginTop: "-5px" }}
                                size="small"
                              >
                                <InputLabel
                                  id="demo-select-small"
                                  sx={{
                                    fontSize: "14px",
                                    marginTop: "-5px",
                                    color: "white",
                                  }}
                                >
                                  True Yield
                                </InputLabel>
                                <Select
                                  labelId="demo-select-small"
                                  id="demo-select-small"
                                  value={yieldCalcTrueYield}
                                  label="True Yield"
                                  onChange={handleChangeyieldTrueYield}
                                  sx={{
                                    color: "white",
                                    fontSize: "14px",
                                    ".MuiOutlinedInput-notchedOutline": {
                                      borderColor: "rgba(228, 219, 233, 0.25)",
                                      height: "38px",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                      },
                                    "&:hover .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor:
                                          "rgba(228, 219, 233, 0.25)",
                                      },
                                    ".MuiSvgIcon-root ": {
                                      fill: "white !important",
                                    },
                                  }}
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={"True Yield"}>
                                    True Yield
                                  </MenuItem>
                                  <MenuItem value={"True"}>True</MenuItem>
                                  <MenuItem value={"Yield"}>Yield</MenuItem>
                                </Select>
                              </FormControl>
                              <input
                                type="text"
                                className="dealsInput"
                                placeholder="1.123546"
                                style={{
                                  width: "45%",
                                  height: "30px",
                                  // background: "rgba(255, 255, 255, 0.3)",
                                  background: "transparent",
                                  border: "1px solid rgba(228, 219, 233, 0.25)",
                                  color: "white",
                                  fontSize: "15px",
                                  borderRadius: "4px",
                                  outline: "none",
                                  fontWeight: "bold",
                                  margin: "0 5px",
                                  textAlign: "right",
                                  padding: "0 5px",
                                  marginTop: "-5px",
                                  marginLeft: "21px",
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                        <HomeHR />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            padding={"22px 24px"}
                            sx={{
                              pt: "30px",
                              width: "100%",
                            }}
                          >
                            <Typography
                              color="white"
                              fontSize="17px"
                              sx={{ marginLeft: "-2px" }}
                            >
                              <b>Risk</b>
                            </Typography>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "15px",
                              }}
                            >
                              <Box sx={{ width: "45%" }}>
                                <FormControl>
                                  <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    sx={{
                                      color: "white",
                                      width: "120%",
                                      "& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)":
                                        {
                                          color: "white",
                                        },
                                      // "& .MuiSvgIcon-root + .MuiSvgIcon-root": {
                                      //   color: "blue",
                                      // },
                                    }}
                                  >
                                    <FormControlLabel
                                      value="Mod Dur"
                                      control={<Radio />}
                                      label="Mod Dur"
                                    />
                                    <FormControlLabel
                                      value="Dur"
                                      control={<Radio />}
                                      label="Dur"
                                    />
                                  </RadioGroup>
                                </FormControl>
                                <Typography
                                  color="rgba(255, 255, 255, 0.6)"
                                  fontSize="16px"
                                >
                                  Risk
                                </Typography>
                                <Typography
                                  color="rgba(255, 255, 255, 0.6)"
                                  fontSize="16px"
                                >
                                  Convexity
                                </Typography>

                                <Box
                                  sx={{
                                    display: "flex",
                                    pt: "10px",
                                  }}
                                >
                                  <input
                                    type="text"
                                    className="dealsInput"
                                    placeholder="DV"
                                    style={{
                                      width: "44px",
                                      height: "32px",
                                      background: "transparent",
                                      border:
                                        "1px solid rgba(228, 219, 233, 0.25)",
                                      color: "white",
                                      fontSize: "15px",
                                      borderRadius: "4px",
                                      outline: "none",
                                      fontWeight: "bold",
                                      margin: "0 5px",
                                      textAlign: "right",
                                      padding: "0 5px",
                                      marginTop: "-5px",
                                      marginLeft: "-2px",
                                    }}
                                  />
                                  <FormControl
                                    // fullWidth
                                    // sx={{ m: 1, marginTop: "-5px" }}
                                    sx={{
                                      m: 1,
                                      minWidth: 80,
                                      marginTop: "-5px",
                                    }}
                                    size="small"
                                  >
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      value={riskConvexity}
                                      label=""
                                      onChange={handleChangeRiskConvexity}
                                      sx={{
                                        color: "white",
                                        fontSize: "14px",
                                        ".MuiOutlinedInput-notchedOutline": {
                                          borderColor:
                                            "rgba(228, 219, 233, 0.25)",
                                          height: "38px",
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                          {
                                            borderColor:
                                              "rgba(228, 219, 233, 0.25)",
                                          },
                                        "&:hover .MuiOutlinedInput-notchedOutline":
                                          {
                                            borderColor:
                                              "rgba(228, 219, 233, 0.25)",
                                          },
                                        ".MuiSvgIcon-root ": {
                                          fill: "white !important",
                                        },
                                      }}
                                    >
                                      <MenuItem value="">
                                        <em>None</em>
                                      </MenuItem>
                                      <MenuItem value={"01"}>01</MenuItem>
                                      <MenuItem value={"02"}>02</MenuItem>
                                    </Select>
                                  </FormControl>
                                  <Typography
                                    color="rgba(255, 255, 255, 0.6)"
                                    fontSize="16px"
                                    sx={{ whiteSpace: "nowrap" }}
                                  >
                                    on 1MM
                                  </Typography>
                                </Box>

                                <Typography
                                  color="rgba(255, 255, 255, 0.6)"
                                  fontSize="16px"
                                  sx={{ marginTop: "-5px" }}
                                >
                                  Benchmark Risk
                                </Typography>

                                <Typography
                                  color="rgba(255, 255, 255, 0.6)"
                                  fontSize="16px"
                                >
                                  Risk Hedge
                                </Typography>

                                <Typography
                                  color="rgba(255, 255, 255, 0.6)"
                                  fontSize="16px"
                                >
                                  Proceeds Hedge
                                </Typography>
                              </Box>

                              <Box sx={{ width: "55%", mt: "-25px" }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Typography
                                    color="white"
                                    fontSize="16px"
                                    sx={{
                                      marginLeft: "-2px",
                                      backgroundColor: "#202432",
                                      p: "3px 7px 3px 35px",
                                    }}
                                  >
                                    <b>Workout</b>
                                  </Typography>
                                  <Typography
                                    color="white"
                                    fontSize="16px"
                                    sx={{
                                      marginLeft: "-2px",
                                      backgroundColor: "#202432",
                                      p: "3px 7px 3px 55px",
                                    }}
                                  >
                                    <b>OAS</b>
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pl: "60px",
                                    pt: "5px",
                                    pb: "10px",
                                  }}
                                >
                                  <Typography color="white" fontSize="16px">
                                    0.673
                                  </Typography>
                                  <Typography color="white" fontSize="16px">
                                    0.671
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pl: "60px",
                                  }}
                                >
                                  <Typography color="white" fontSize="16px">
                                    0.686
                                  </Typography>
                                  <Typography color="white" fontSize="16px">
                                    0.685
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pl: "60px",
                                  }}
                                >
                                  <Typography color="white" fontSize="16px">
                                    0.008
                                  </Typography>
                                  <Typography color="white" fontSize="16px">
                                    0.008
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pl: "60px",
                                    m: "7px 0px",
                                  }}
                                >
                                  <input
                                    type="text"
                                    className="dealsInput"
                                    placeholder="68.61"
                                    style={{
                                      width: "43%",
                                      height: "30px",
                                      // background: "rgba(255, 255, 255, 0.3)",
                                      background: "transparent",
                                      border:
                                        "1px solid rgba(228, 219, 233, 0.25)",
                                      color: "white",
                                      fontSize: "15px",
                                      borderRadius: "4px",
                                      outline: "none",
                                      fontWeight: "bold",
                                      margin: "0 5px",
                                      textAlign: "right",
                                      padding: "0 5px",
                                      marginTop: "-5px",
                                      marginLeft: "-58px",
                                    }}
                                  />
                                  <Typography color="white" fontSize="16px">
                                    68.45
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pl: "60px",
                                    pt: "5px",
                                  }}
                                >
                                  <Typography color="white" fontSize="16px">
                                    1.970
                                  </Typography>
                                  <Typography color="white" fontSize="16px">
                                    1.976
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pl: "60px",
                                  }}
                                >
                                  <Typography color="white" fontSize="16px">
                                    348 M
                                  </Typography>
                                  <Typography color="white" fontSize="16px">
                                    346 M
                                  </Typography>
                                </Box>
                                <Typography
                                  color="white"
                                  fontSize="16px"
                                  align="center"
                                >
                                  1,021 M
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default DealsBox;
