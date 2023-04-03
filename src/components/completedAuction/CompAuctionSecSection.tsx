import { Box, Grid, Typography } from "@mui/material";

// component
import CompAucTable from "./CompAucTable";
import ExchangeChart from "../ExchangeChart";
// import BiddingGraph from "../bidComponents/BiddingGraph";

// Images

const DealsBox = () => {
  return (
    <Box sx={{ width: "100%", mt: "50px", pr: "30px", paddingBottom: "100px" }}>
      <Typography
        variant="body1"
        className="tableHeadingTxt"
        sx={{ fontWeight: "normal !important" }}
      >
        Summary
      </Typography>

      <Box sx={{ my: "32px", width: "100%" }}>
        <Grid container spacing="24px">
          <Grid item xs={7}>
            <Box
              sx={{
                borderRadius: "12px",
                border: `1px solid rgba(255, 255, 255, 0.12)`,
                background:
                  "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                padding: "20px 15px 10px 10px",
              }}
            >
              <ExchangeChart fromWhichPage={"BidSection"} />
            </Box>
          </Grid>
          <Grid item xs={5}>
          <CompAucTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default DealsBox;
