import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar, Typography } from "@mui/material";

// component
import DashboardHeder_Sidebar from "./liquidityComponent/dashboardHeder_Sidebar";
import mainContainerSearchIcon from "../Images/liquidity/mainContainerSearchIcon.png";
import StructuredBox from "./structuredComponents/structuredBox";

// Images
import liquidityTableLastRowDropdown from "../Images/liquidity/liquidityTableLastRowDropdown.png";

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <DashboardHeder_Sidebar />

        <Box
          component="main"
          className="blockHouseLiquidityContainer"
          sx={{
            height: "110vh !important",
          }}
        >
          <Toolbar />
          {/* <LiquidityTable /> */}
          <Box sx={{ width: "100%", margin: "0 auto", mt: "50px", px: '50px' }}>
            <Typography variant="body1" className="tableHeadingTxt" style={{ fontFamily: 'Open Sans', letterSpacing: '-1px' }}>
              Overview
            </Typography>

            <Box sx={{
              display: "flex",
              width: '100%',
            }}>
              <Box sx={{ flex: '0 0 72.5%', maxWidth: '72.5%' }} className="inputSearchWidthMeida">
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
              </Box>
              <Box sx={{ flex: '0 0 9%', maxWidth: '9%', ml: '24px', mr: '24px' }} className="mainContainerSearchDiv2">
                <center>
                  <Box className="rightSearchBoxStructured" style={{ float: 'right' }}>
                    ETH Type
                    <img
                      src={liquidityTableLastRowDropdown}
                      alt="liquidityTableLastRowDropdown"
                    />
                  </Box>
                </center>
              </Box>
              <Box sx={{ flex: '0 0 15%', maxWidth: '15%' }} className="mainContainerSearchDiv3">
                <center>
                  <Box className="rightSearchBoxStructured" style={{ float: 'right' }}>
                    Sort By: Newest first
                    <img
                      src={liquidityTableLastRowDropdown}
                      alt="liquidityTableLastRowDropdown"
                    />
                  </Box>
                </center>
              </Box>
            </Box>
            <StructuredBox />
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
