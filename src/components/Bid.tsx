import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid, Typography } from "@mui/material";

// component
// import { HomeHR } from "./landingPageComponents/CustomComponents";
import DASHBOARDHEADER_SIDEBAR from "./liquidityComponent/dashboardHeder_Sidebar";
import BidSecSection from "./bidComponents/BidSecSection";

// Images
// import liquidityTableLastRowDropdown from "../Images/liquidity/liquidityTableLastRowDropdown.png";
import bidBlueCircle from "../Images/placeOrder/bidBlueCircle.png";
import tethIcon from "../Images/liquidity/tetherToken.png";
import placeOrderQuestion from "../Images/placeOrder/placeOrderQuestion.png";

const mdTheme = createTheme();

function DashboardContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <DASHBOARDHEADER_SIDEBAR />

        <Box
          component="main"
          className="blockHouseLiquidityContainer"
          sx={{
            // height: "100vh",
            overflow: "hidden",
          }}
        >
          <Toolbar />
          {/* <LiquidityTable /> */}
          <Box
            sx={{
              width: "100%",
              margin: "0 auto",
              mt: "50px",
              px: "50px",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <Typography
              variant="body1"
              className="tableHeadingTxt"
              style={{ fontFamily: "Open Sans", letterSpacing: "-1px" }}
            >
              Auction
            </Typography>

            <Box sx={{ my: "32px", width: "97%" }}>
              <Grid
                container
                spacing={"0px"}
                // spacing={window.screen.width >= 1420 ? "24px" : "12px"}
              >
                <Grid item xs={2.4}>
                  <Box
                    className="bidAuctionBox"
                    style={{
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderTopLeftRadius: "12px",
                      borderBottomLeftRadius: "12px",
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "13px 16px",
                      }}
                    >
                      <Box>
                        <Typography
                          style={{
                            fontSize: "20px",
                            color: "white",
                            fontFamily: "Open Sans",
                            fontWeight: "bold",
                          }}
                        >
                          0.06534{" "}
                          <span
                            style={{
                              fontSize: "13px",
                              color: "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            ETH
                          </span>
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "16px",
                            color: "rgba(255, 255, 255, 0.6)",
                            marginTop: "-2px",
                          }}
                        >
                          Auctioned
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "relative",
                          top: "7px",
                          marginRight: "-10px",
                        }}
                      >
                        <img
                          src={tethIcon}
                          alt="Second Icon"
                          style={{
                            width: "47px",
                            height: "47px",
                            position: "relative",
                            left: "-10px",
                            top: "-4px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2.4}>
                  <Box
                    className="bidAuctionBox"
                    style={{
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderLeft: "none",
                      borderRight: "none",
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                      padding: "13px 16px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      }}
                    >
                      1,862
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginTop: "0px",
                      }}
                    >
                      Total lots
                      <img
                        src={placeOrderQuestion}
                        alt="placeOrderQuestion"
                        style={{
                          position: "relative",
                          top: "4px",
                          width: "16px",
                          marginLeft: "5px",
                        }}
                      />
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2.4}>
                  <Box
                    className="bidAuctionBox"
                    style={{
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "13px 16px",
                      }}
                    >
                      <Box>
                        <Typography
                          style={{
                            fontSize: "20px",
                            color: "white",
                            fontFamily: "Open Sans",
                            fontWeight: "bold",
                          }}
                        >
                          5
                          <span
                            style={{
                              fontSize: "13px",
                              marginRight: "3px",
                              marginLeft: "2px",
                            }}
                          >
                            d
                          </span>
                          11
                          <span
                            style={{
                              fontSize: "13px",
                              marginRight: "3px",
                              marginLeft: "2px",
                            }}
                          >
                            h
                          </span>
                          50
                          <span
                            style={{
                              fontSize: "13px",
                              marginRight: "3px",
                              marginLeft: "2px",
                            }}
                          >
                            m
                          </span>
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "16px",
                            color: "rgba(255, 255, 255, 0.6)",
                            marginTop: "-2px",
                          }}
                        >
                          Ends in
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "relative",
                          top: "7px",
                          marginRight: "-10px",
                        }}
                      >
                        <img
                          src={bidBlueCircle}
                          alt="Second Icon"
                          style={{
                            width: "47px",
                            height: "47px",
                            position: "relative",
                            left: "-10px",
                            top: "-4px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2.4}>
                  <Box
                    className="bidAuctionBox"
                    style={{
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderLeft: "none",
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                      padding: "13px 16px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      }}
                    >
                      0.06534{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgba(255, 255, 255, 0.6)",
                        }}
                      >
                        ETH per ETH
                      </span>
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginTop: "0px",
                      }}
                    >
                      Current price
                      <img
                        src={placeOrderQuestion}
                        alt="placeOrderQuestion"
                        style={{
                          position: "relative",
                          top: "4px",
                          width: "16px",
                          marginLeft: "5px",
                        }}
                      />
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2.4}>
                  <Box
                    className="bidAuctionBox"
                    style={{
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderLeft: "none",
                      borderTopRightRadius: '12px',
                      borderBottomRightRadius: '12px',
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                      padding: "13px 16px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      }}
                    >
                      0.05273{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgba(255, 255, 255, 0.6)",
                        }}
                      >
                        ETH per ETH
                      </span>
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginTop: "0px",
                      }}
                    >
                      Minimum price
                      <img
                        src={placeOrderQuestion}
                        alt="placeOrderQuestion"
                        style={{
                          position: "relative",
                          top: "4px",
                          width: "16px",
                          marginLeft: "5px",
                        }}
                      />
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "0 auto",
              mt: "50px",
              px: "50px",
              paddingBottom: "10px",
            }}
          >
            <BidSecSection />
          </Box>
          {/* ---------------- here ------------- */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
