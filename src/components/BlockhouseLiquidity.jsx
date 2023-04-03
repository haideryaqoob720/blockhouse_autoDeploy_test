import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// component
import DashboardHeder_Sidebar from "./liquidityComponent/dashboardHeder_Sidebar";
import LiquidityTable from "./liquidityComponent/LiquidityTable";
import mainContainerSearchIcon from "../Images/liquidity/mainContainerSearchIcon.png";

// Images

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{
        display: "flex"
      }}>
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
            <Typography variant="body" className="tableHeadingTxt" sx={{ fontWeight: 'normal !important' }}>
              Provide Liquidity
            </Typography>

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
              <LiquidityTable />
            </Box>
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
