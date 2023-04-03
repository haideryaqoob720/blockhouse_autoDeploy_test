// import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// Local Images Imports

import mainContainerSearchIcon from "../../Images/liquidity/mainContainerSearchIcon.png";


// Local Components
import DealsTable from "./DealsTable";



// const mdTheme = createTheme();
const StructuredBox = () => {

  return (

    <Box
      // className="blockHouseLiquidityContainer"
      component="main"
      sx={{
        height: "100vh",
      }}
    >
      <Toolbar />
      <Box sx={{ width: "100%", margin: "0 auto", mt: "-55px", pr: "30px" }}>
        <Typography variant="body" className="tableHeadingTxt" sx={{ fontWeight: 'normal !important' }}>
          Deals
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
          <DealsTable whichPage={"DealsSec2"} />
        </Box>
      </Box>

      {/* ---------------- here ------------- */}
    </Box>
  );
};

export default StructuredBox;
