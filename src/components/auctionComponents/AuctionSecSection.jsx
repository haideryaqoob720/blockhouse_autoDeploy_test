import { Box, Button, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Local Images Imports
import mainContainerSearchIcon from "../../Images/liquidity/mainContainerSearchIcon.png";


// Local Components
import AuctionTable from "./AuctionTable";



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
          Auctions
        </Typography>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{
              width: '82%', '@media (max-width: 1530px)': {
                width: '79%'
              }
            }} className="mainContainerSearchDiv">
              <span>
                <img
                  src={mainContainerSearchIcon}
                  alt="mainContainerSearchIcon"
                />
              </span>
              <input
                type="search"
                placeholder="Search"
              />
            </Box>
            <Button
              sx={{
                "&.MuiButton-root": {
                  textTransform: "none",
                  color: "white",
                  background: "rgba(255, 255, 255, 0.04)",
                  p: "4px 8px",
                  height: '37px',
                  fontWeight: 400,
                  fontSize: "14px",
                  borderRadius: `6px`,
                  marginTop: "25px",
                  whiteSpace: 'nowrap',
                  width: '16%', '@media (max-width: 1530px)': {
                    width: '19%'
                  }
                },
              }}
            >
              Upcoming Auctions <KeyboardArrowDownIcon style={{ marginLeft: '9px' }} />
            </Button>
          </Box>
          <AuctionTable />
        </Box>
      </Box>

      {/* ---------------- here ------------- */}
    </Box>
  );
};

export default StructuredBox;
