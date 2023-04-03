import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";

// component
import DASHBOARDHEADER_SIDEBAR from "./liquidityComponent/dashboardHeder_Sidebar";
import DepositBox from "./DepositBox";

// Images
import placeOrderArrowUp from "../Images/placeOrder/placeOrderArrowUp.png";
import placeOrderQuestion from "../Images/placeOrder/placeOrderQuestion.png";
import singaporIcon from "../Images/structured/singapore.png";

const mdTheme = createTheme();

const DealsBox = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />

        <DASHBOARDHEADER_SIDEBAR />

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
              <Grid container spacing="24px">
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "12px",
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      background: "#23252F",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "12px 16px",
                        borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
                        height: "108px",
                      }}
                    >
                      <Box sx={{ marginBlock: "auto" }}>
                        <Typography
                          color="white"
                          sx={{
                            fontSize: "36px",
                            fontWeight: "700",
                            fontFamily: "open sans",
                            marginTop: "-5px",
                          }}
                        >
                          SGB-ETF
                        </Typography>
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
                          Sovereign Bond
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
                      <Box>
                        <img
                          src={singaporIcon}
                          alt="singaporIcon"
                          style={{ marginLeft: "-15px" }}
                          width="46px"
                          height="46px"
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: "15px",
                        padding: "12px 16px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6);"
                          fontSize="14px"
                        >
                          Current Deposits
                        </Typography>
                        <Typography
                          color="white"
                          fontWeight="600"
                          fontSize="14px"
                        >
                          5,941.2 ETH
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          "& .MuiLinearProgress-root": {
                            borderRadius: "2px !important",
                            background: "rgba(9, 13, 20, 0.48)",
                            height: "6px",
                          },
                          "& .MuiLinearProgress-bar1Determinate": {
                            borderRadius: "2px !important",
                            background: "white",
                          },
                        }}
                      >
                        <LinearProgress variant="determinate" value={50} />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "6px",
                        }}
                      >
                        <Typography
                          fontSize="14px"
                          color="rgba(255, 255, 255, 0.6)"
                        >
                          Max Capacity
                        </Typography>
                        <Typography
                          color="white"
                          fontWeight="600"
                          fontSize="14px"
                        >
                          20k ETH
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <DepositBox />
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      marginTop: "-130px",
                    }}
                  >
                    <Typography
                      component="h1"
                      variant="h6"
                      padding={"24px"}
                      color="white"
                      fontSize={"17px"}
                      noWrap
                    >
                      <b>It is okay that it is repeated</b>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="rgba(255, 255, 255, 0.6)"
                      padding={"24px"}
                      mt="-40px"
                      fontSize={"15px"}
                      lineHeight="24px"
                      mb="5px"
                    >
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English
                      <br />
                      <br />
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English
                    </Typography>
                    <hr
                      style={{
                        border: "none",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                    }}
                  >
                    <Box padding={"22px 24px"}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "6px",
                        }}
                      >
                        <Typography
                          color="white"
                          fontWeight="600"
                          fontSize="16px"
                        >
                          ETF Details
                        </Typography>
                        <Box>
                          <Typography
                            fontSize="14px"
                            color="white"
                            display={"inline"}
                            mr="20px"
                          >
                            Product Page{" "}
                            <img
                              src={placeOrderArrowUp}
                              alt="placeOrderArrowUp"
                              style={{
                                position: "relative",
                                top: "7px",
                                width: "20px",
                                marginLeft: "5px",
                              }}
                            />
                          </Typography>
                          <Typography
                            fontSize="14px"
                            color="white"
                            display={"inline"}
                          >
                            Fact Sheet{" "}
                            <img
                              src={placeOrderArrowUp}
                              alt="placeOrderArrowUp"
                              style={{
                                position: "relative",
                                top: "7px",
                                width: "20px",
                                marginLeft: "5px",
                              }}
                            />
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body1"
                        mt="-10px"
                        color="rgba(255, 255, 255, 0.6)"
                      >
                        Last updated on jan 24, 2023
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                          mt: "20px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Estimated Yield Maturity
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          7.89%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          30 Day SEC Yield
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          7.55%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Total Assets
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          $18.5b
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Liquidity
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          $2.7b of daily trading volume
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Weighted Average Maturity
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          5.09 years
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "0px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Credit Quality (S&P)
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
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
                        sx={{ float: "right", width: "98px", height: "30px" }}
                      >
                        {/* <Typography color="white" fontSize="14px" fontWeight={"bold"} align="end" pb="0px" mt="-10px">
                          51.48% - BB
                        </Typography> */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pb: "0px",
                            mt: "-12px",
                          }}
                        >
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            51.48%{" "}
                            <span
                              style={{
                                margin: "0 3px",
                                fontSize: "21px",
                                color: "rgba(255, 255, 255, 0.6)",
                              }}
                            >
                              .
                            </span>
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                            mt="8px"
                          >
                            BB
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pb: "8px",
                            mt: "-12px",
                          }}
                        >
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            37.68%{" "}
                            <span
                              style={{
                                margin: "0 3px",
                                fontSize: "21px",
                                color: "rgba(255, 255, 255, 0.6)",
                              }}
                            >
                              .
                            </span>
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                            mt="8px"
                          >
                            B
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        color="rgba(255, 255, 255, 0.6)"
                        fontSize="14px"
                        fontWeight={"bold"}
                        align="right"
                        pb="8px"
                        mt="42px"
                        sx={{ textDecoration: "underline" }}
                      >
                        Show all 7 holdings
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Standard Deviation (Annualized)
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          10.92%
                        </Typography>
                      </Box>
                    </Box>
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
