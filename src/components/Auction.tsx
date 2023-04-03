import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid, Button, Typography } from "@mui/material";

// component
import { HomeHR } from "./landingPageComponents/CustomComponents";
import DashboardHeder_Sidebar from "./liquidityComponent/dashboardHeder_Sidebar";
import AuctionSecSection from "./auctionComponents/AuctionSecSection";

// Images
// import liquidityTableLastRowDropdown from "../Images/liquidity/liquidityTableLastRowDropdown.png";
import ethIcon from "../Images/liquidity/ethereumToken.png";
import tethIcon from "../Images/liquidity/tetherToken.png";
import bicoinIcon from "../Images/liquidity/bitcoinIcon.png";
const mdTheme = createTheme();

const CustomAuctionFirstRowBox = (e: any) => {
  //   console.log(e);
//   console.log(window.screen.width);
  

  return (
    <Box
      className="featuredAuctionBox"
      style={{
        background:
          "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "12px",
        width: "100%",
        minHeight: "132px",
        maxHeight: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "16px",
        }}
      >
        <Typography
          style={{
            fontSize: "20px",
            lineHeight: "27px",
            color: "white",
          }}
        >
          <b>{e.firstRowHeadign}</b>
        </Typography>
        {/* <p
          style={{
            fontSize: "20px",
            lineHeight: "27px",
            color: "white",
          }}
        >
          <b>{e.firstRowHeadign}</b>
        </p> */}
        <Button
          sx={{
            "&.MuiButton-root": {
              textTransform: "none",
              color: "white",
              background: "rgba(255, 255, 255, 0.04)",
              p: "4px 8px",
              fontWeight: 600,
              fontSize: "13px",
              borderRadius: `6px`,
              marginTop: "-2px",
            },
          }}
        >
          {e.firstRowTime}
        </Button>
      </Box>
      <HomeHR style={{ marginTop: "-5px" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "16px",
          paddingTop: "10px",
        }}
      >
        <Box>
          <Typography
            style={{
              fontSize: "14px",
              lineHeight: "27px",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            {e.secRowPercet}%{" "}
            <span
              style={{ fontSize: "28px", position: "relative", top: "-3px" }}
            >
              .
            </span>{" "}
            {e.secRowTime} year
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              color: "white",
              marginTop: "2px",
            }}
          >
            <b>${e.secRowAmount}</b>
          </Typography>
        </Box>
        <Box sx={{ position: "relative", top: "7px", marginRight: "-10px" }}>
          <img
            src={ethIcon}
            alt="Second Icon"
            style={{ width: "44px", height: "44px" }}
          />
          <img
            src={e.bitcoinOrTether === "bitcoin" ? bicoinIcon : tethIcon}
            alt="Second Icon"
            style={{
              width: "47px",
              height: "47px",
              position: "relative",
              left: "-10px",
              top: "2px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

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
              Featured Auctions
            </Typography>

            <Box sx={{ my: "32px", width: "97%" }}>
              <Grid
                container
                spacing={window.screen.width >= 1420 ? "24px" : "12px"}
              >
                {/* <Grid container spacing="24px"> */}
                <Grid item xs={3}>
                  <CustomAuctionFirstRowBox
                    firstRowHeadign="SGD / USD"
                    firstRowTime="5h 24m 02s"
                    secRowPercet="3"
                    secRowTime="1"
                    secRowAmount="2,832,247.72"
                    bitcoinOrTether="tether"
                  />
                </Grid>
                <Grid item xs={3}>
                  <CustomAuctionFirstRowBox
                    firstRowHeadign="BTC / USD"
                    firstRowTime="5h 24m 02s"
                    secRowPercet="3"
                    secRowTime="1"
                    secRowAmount="834,572.82"
                    bitcoinOrTether="bitcoin"
                  />
                </Grid>
                <Grid item xs={3}>
                  <CustomAuctionFirstRowBox
                    firstRowHeadign="USDT / BTC"
                    firstRowTime="5h 24m 02s"
                    secRowPercet="3"
                    secRowTime="1"
                    secRowAmount="5,813,901.63"
                    bitcoinOrTether="tether"
                  />
                </Grid>
                <Grid item xs={3}>
                  <CustomAuctionFirstRowBox
                    firstRowHeadign="SGD / USD"
                    firstRowTime="5h 24m 02s"
                    secRowPercet="3"
                    secRowTime="1"
                    secRowAmount="4,715,562.25"
                    bitcoinOrTether="bitcoin"
                  />
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
            <AuctionSecSection />
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
