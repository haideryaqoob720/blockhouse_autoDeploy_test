import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// component
import DashboardHeder_Sidebar from "./liquidityComponent/dashboardHeder_Sidebar";
import HomeFirstRowBoxes from "./homeComponents/HomeFirstRowBoxes";
import HomeSecRowBoxes from "./homeComponents/HomeSecRowBoxes";

// Images
// import liquidityTableLastRowDropdown from "../Images/liquidity/liquidityTableLastRowDropdown.png";

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
            // height: "100vh",
            overflow: 'hidden'
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
              Overview
            </Typography>

            <HomeFirstRowBoxes />
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "0 auto",
              mt: "50px",
              px: "50px",
              paddingBottom: "10px",
              // borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            {/* <Typography
              variant="body1"
              className="tableHeadingTxt"
              style={{ fontFamily: "Open Sans", letterSpacing: "-1px", marginTop: '-12px' }}
            >
              Updates
            </Typography> */}

            <HomeSecRowBoxes />
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
