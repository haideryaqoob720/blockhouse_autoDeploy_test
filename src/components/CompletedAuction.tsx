import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";

// component
import { HomeHR } from "./landingPageComponents/CustomComponents";
import DashboardHeder_Sidebar from "./liquidityComponent/dashboardHeder_Sidebar";
import CompAuctionSecSection from "./completedAuction/CompAuctionSecSection";

// Images
// import liquidityTableLastRowDropdown from "../Images/liquidity/liquidityTableLastRowDropdown.png";
import bidBlueCircle from "../Images/placeOrder/bidBlueCircle.png";
import tethIcon from "../Images/liquidity/tetherToken.png";
import bicoinIcon from "../Images/liquidity/bitcoinIcon.png";
import placeOrderQuestion from "../Images/placeOrder/placeOrderQuestion.png";

const mdTheme = createTheme();

function DashboardContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <DashboardHeder_Sidebar />

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
              Completed Auction
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Open Sans",
                fontSize: "16px",
                color: "white",
                marginTop: "32px",
              }}
            >
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                Status:{" "}
              </span>{" "}
              Concluded on Mar 23, spm
            </Typography>

            <Box
              sx={{
                mb: "32px",
                mt: "18px",
                width: "97%",
                background:
                  "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
              }}
            >
              <Grid
                container
                spacing={"0px"}
                className="compAuctionFirstRow"
              >
                <Grid item xs={2.5}>
                  <Box
                    style={{
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
                      <Box
                        sx={{
                          position: "relative",
                          top: "7px",
                          marginRight: "-10px",
                        }}
                      >
                        <img
                          src={bicoinIcon}
                          alt="bicoinIcon"
                          style={{
                            width: "47px",
                            height: "47px",
                            position: "relative",
                            top: "-4px",
                          }}
                        />
                        <img
                          src={tethIcon}
                          alt="Second Icon"
                          style={{
                            width: "47px",
                            height: "47px",
                            position: "relative",
                            left: "-15px",
                            top: "-4px",
                          }}
                        />
                      </Box>
                      <Box sx={{ position: "relative", left: "-30px" }}>
                        <Typography
                          style={{
                            fontSize: "13px",
                            color: "rgba(255, 255, 255, 0.6)",
                            fontFamily: "Open Sans",
                            fontWeight: "bold",
                          }}
                        >
                          Issuer
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "20px",
                            color: "white",
                            fontFamily: "Open Sans",
                            fontWeight: "bold",
                          }}
                        >
                          SGD / USD
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={1.58}>
                  <Box
                    style={{
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                      padding: "13px 16px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginTop: "0px",
                      }}
                    >
                      Assets Type
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      }}
                    >
                      Gov Bonds
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1.58}>
                  <Box
                    style={{
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                      padding: "13px 16px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginTop: "0px",
                      }}
                    >
                      Interest Rate
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      }}
                    >
                      2.85%
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1.58}>
                  <Box
                    style={{
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                      padding: "13px 16px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginTop: "0px",
                      }}
                    >
                      TVL
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      }}
                    >
                      20M
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1.58}>
                  <Box
                    style={{
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                      padding: "13px 16px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginTop: "0px",
                      }}
                    >
                      Quantity
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      }}
                    >
                      6000 lots
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1.58}>
                  <Box
                    style={{
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                      padding: "13px 16px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginTop: "0px",
                      }}
                    >
                      Filled
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      }}
                    >
                      100%
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1.58}>
                  <Box
                    style={{
                      width: "100%",
                      minHeight: "80px",
                      maxHeight: "auto",
                      padding: "13px 16px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginTop: "0px",
                      }}
                    >
                      Clearing Price
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      }}
                    >
                      4.215
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
            <CompAuctionSecSection />
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
