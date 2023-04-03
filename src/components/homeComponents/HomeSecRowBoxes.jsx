// Images
// MainContainer
// import liquidityToken from "../../Images/liquidity/liquidityToken.png";
// import liquidityTokenBitcoin from "../../Images/liquidity/liquidityTokenBitcoin.png";
// import singapore from "../../Images/liquidity/singapore.png";
import ethIcon from "../../Images/liquidity/ethereumToken.png";
import { Box, Button, Grid, Typography } from "@mui/material";

// Local Images Imports
// import singaporIcon from "../../Images/structured/singapore.png";
import arrowUp from "../../Images/Home/arrowUp.png";
import singaporeIcon from "../../Images/landingPage/liquidity/singapore.png";
import usFlag from "../../Images/Home/usFlag.png";
import japanFlag from "../../Images/Home/japanFlag.png";


// import { HomeHR } from '../landingPageComponents/CustomComponents'

// Local Components
import TradingHistoryTable from './TradingHistoryTable'

import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

const StructuredBox = () => {
  let investmentValue = 50.72
  let gainValue = 24.28
  let profitValue = 25

  const daughnutChartData = {
    labels: [
      'SGB',
      'USGB',
      'JPB',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [investmentValue, gainValue, profitValue],
      backgroundColor: [
        '#659BEB',
        '#F6AF40',
        '#A4F0B2'
      ],
      hoverOffset: 14
    }]
  }
  return (
    <Box sx={{ my: "32px", width: "97%" }}>
      <Grid container spacing="24px">
        <Grid item xs={4}>
          <Typography
            className="tableHeadingTxt"
            variant="body1"
            style={{ fontFamily: "Open Sans", letterSpacing: "-1px", marginTop: '-12px', marginBottom: '25px' }}
          >
            Your Position
          </Typography>
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
                padding: "14px 16px",
                borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
                height: "80px",
              }}
            >
              <Box>
                <Typography color="white" fontWeight="bold">
                  SIGB 2 2/01/24
                  <Button
                    sx={{
                      "&.MuiButton-root": {
                        textTransform: "none",
                        borderColor: "gray",
                        color: "white",
                        background: "rgba(255, 255, 255, 0.04)",
                        p: "2px 8px",
                        fontWeight: 600,
                        fontSize: "13px",
                        borderRadius: `6px`,
                        marginLeft: "8px",
                      },
                    }}
                  >
                    <img src={arrowUp} alt="arrowUp" style={{ marginRight: "8px" }} />
                    2.10%
                  </Button>
                </Typography>
                <Typography
                  color="rgba(255, 255, 255, 0.6);"
                  fontSize="14px"
                  lineHeight="22px"
                >
                  Singapore Government Bond
                </Typography>
              </Box>
              <Box>
                <img
                  src={singaporeIcon}
                  alt="singaporeIcon"
                  style={{ marginLeft: "-15px", marginTop: '5px' }}
                  width="40px"
                  height="40px"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "14px 16px",
                borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
                height: "80px",
              }}
            >
              <Box>
                <Typography color="white" fontWeight="bold">
                  USGB 5 3/28/27
                  <Button
                    sx={{
                      "&.MuiButton-root": {
                        textTransform: "none",
                        borderColor: "gray",
                        color: "white",
                        background: "rgba(255, 255, 255, 0.04)",
                        p: "2px 8px",
                        fontWeight: 600,
                        fontSize: "13px",
                        borderRadius: `6px`,
                        marginLeft: "8px",
                      },
                    }}
                  >
                    <img src={arrowUp} alt="arrowUp" style={{ marginRight: "8px" }} />
                    2.10%
                  </Button>
                </Typography>
                <Typography
                  color="rgba(255, 255, 255, 0.6);"
                  fontSize="14px"
                  lineHeight="22px"
                >
                  US Government Bond
                </Typography>
              </Box>
              <Box>
                <img
                  src={usFlag}
                  alt="usFlag"
                  style={{ marginTop: '-4px', position: 'relative', left: '7px' }}
                  width="60px"
                  height="60px"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "14px 16px",
                borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
                height: "80px",
              }}
            >
              <Box>
                <Typography color="white" fontWeight="bold">
                  JPB 10 4/12/33
                  <Button
                    sx={{
                      "&.MuiButton-root": {
                        textTransform: "none",
                        borderColor: "gray",
                        color: "white",
                        background: "rgba(255, 255, 255, 0.04)",
                        p: "2px 8px",
                        fontWeight: 600,
                        fontSize: "13px",
                        borderRadius: `6px`,
                        marginLeft: "8px",
                      },
                    }}
                  >
                    <img src={arrowUp} alt="arrowUp" style={{ marginRight: "8px" }} />
                    0.40%
                  </Button>
                </Typography>
                <Typography
                  color="rgba(255, 255, 255, 0.6);"
                  fontSize="14px"
                  lineHeight="22px"
                >
                  Japan Government Bond
                </Typography>
              </Box>
              <Box>
                <img
                  src={japanFlag}
                  alt="japanFlag"
                  style={{ marginLeft: "-15px", marginTop: '5px' }}
                  width="40px"
                  height="40px"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "14px 16px",
                borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
                height: "80px",
              }}
            >
              <Box>
                <Typography color="white" fontWeight="bold">
                  SIGB 4 8/01/26
                  <Button
                    sx={{
                      "&.MuiButton-root": {
                        textTransform: "none",
                        borderColor: "gray",
                        color: "white",
                        background: "rgba(255, 255, 255, 0.04)",
                        p: "2px 8px",
                        fontWeight: 600,
                        fontSize: "13px",
                        borderRadius: `6px`,
                        marginLeft: "8px",
                      },
                    }}
                  >
                    <img src={arrowUp} alt="arrowUp" style={{ marginRight: "8px" }} />
                    2.10%
                  </Button>
                </Typography>
                <Typography
                  color="rgba(255, 255, 255, 0.6);"
                  fontSize="14px"
                  lineHeight="22px"
                >
                  Singapore Government Bond
                </Typography>
              </Box>
              <Box>
                <img
                  src={singaporeIcon}
                  alt="singaporeIcon"
                  style={{ marginLeft: "-15px", marginTop: '5px' }}
                  width="40px"
                  height="40px"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="body1"
            className="tableHeadingTxt"
            style={{ fontFamily: "Open Sans", letterSpacing: "-1px", marginTop: '-12px', marginBottom: '25px', color: 'transparent' }}
          >
            .
          </Typography>
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
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                gap: "15px",
                padding: "12px 16px",
                marginTop: '25px'
              }}
            >
              <Chart
                type="doughnut"
                data={daughnutChartData}
                options={{
                  cutout: 65,
                  elements: {
                    arc: {
                      borderWidth: 0
                    }
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                style={{ height: '150px', maxHeight: '150px', minHeight: '150px', border: 'none' }}
              />
              <Box className="absoluteBoxOfHomeChartPie">
                <Typography fontSize="20px" color="white" fontWeight={"bold"}>
                  <img src={arrowUp} alt="arrowUp" style={{ marginRight: "8px" }} width={"12px"} /> 34.61%
                </Typography>
                <Typography fontSize="16px" color="rgba(255, 255, 255, 0.6)">
                  Total
                </Typography>
              </Box>
              <br />
              <br />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", pb: "0px", marginBottom: '-6px' }}
              >
                <Box>
                  <Box sx={{ width: '16px', height: '16px', background: '#659BEB', display: 'inline-block', marginRight: '12px', borderRadius: '2px', position: 'relative', top: '5px' }}>.</Box>
                  <Typography fontSize="14px" color="white" sx={{ display: 'inline' }}>
                    SGB
                  </Typography>
                </Box>
                <Typography color="white" fontWeight="600" fontSize="14px">
                  {investmentValue}%
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", pb: "0px", marginBottom: '-6px' }}
              >
                <Box>
                  <Box sx={{ width: '16px', height: '16px', background: '#F6AF40', display: 'inline-block', marginRight: '12px', borderRadius: '2px', position: 'relative', top: '5px' }}>.</Box>
                  <Typography fontSize="14px" color="white" sx={{ display: 'inline' }}>
                    USGB
                  </Typography>
                </Box>
                <Typography color="white" fontWeight="600" fontSize="14px">
                  {gainValue}%
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", pb: "0px", marginBottom: '0px' }}
              >
                <Box>
                  <Box sx={{ width: '16px', height: '16px', background: '#A4F0B2', display: 'inline-block', marginRight: '12px', borderRadius: '2px', position: 'relative', top: '5px' }}>.</Box>
                  <Typography fontSize="14px" color="white" sx={{ display: 'inline' }}>
                    JPB
                  </Typography>
                </Box>
                <Typography color="white" fontWeight="600" fontSize="14px">
                  {profitValue}%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography
            className="tableHeadingTxt"
            variant="body1"
            style={{ fontFamily: "Open Sans", letterSpacing: "-1px", marginTop: '-12px', marginBottom: '25px' }}
          >
            Blotter
          </Typography>
          {/* <Box
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
                height: "56px",
              }}
            >
              <Box sx={{ marginBlock: "auto" }}>
                <Typography
                  color="white"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "open sans",
                  }}
                >
                  Top Stories
                </Typography>
              </Box>

            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "15px",
                height: '262px',
                overflowY: 'scroll',
                paddingBottom: '30px'
              }}
            >
              <Box className="topStoriesHomeRowIst" sx={{
                display: "flex", justifyContent: "space-between",
                padding: "12px 16px 0px 16px",
                // padding: "0px 16px",
                height: '30px'

              }}>
                <Typography color="white" fontSize="13px" marginRight='10px'>
                  US economy delivers modest gains
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.6)" whiteSpace={"nowrap"} fontWeight="600" fontSize="13px">
                  14:00 - EN
                </Typography>
              </Box>
              <HomeHR />
              <Box className="topStoriesHomeRow" sx={{
                display: "flex", justifyContent: "space-between",
                padding: "0px 16px 0px 16px",
                height: '20px',
                marginTop: '0px'

              }}>
                <Typography color="white" fontSize="13px" marginRight='10px'>
                  JPMorgan Results Eclipse Feds Living
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.6)" whiteSpace={"nowrap"} fontWeight="600" fontSize="13px">
                  12:38 - EN
                </Typography>
              </Box>
              <HomeHR />
              <Box className="topStoriesHomeRow" sx={{
                display: "flex", justifyContent: "space-between",
                padding: "0px 16px 0px 16px",
                height: '20px',
                marginTop: '0px'

              }}>
                <Typography color="white" fontSize="13px" marginRight='10px'>
                  US economy delivers modest gains
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.6)" whiteSpace={"nowrap"} fontWeight="600" fontSize="13px">
                  14:00 - EN
                </Typography>
              </Box>
              <HomeHR />
              <Box className="topStoriesHomeRow" sx={{
                display: "flex", justifyContent: "space-between",
                padding: "0px 16px 0px 16px",
                height: '20px',
                marginTop: '0px'

              }}>
                <Typography color="white" fontSize="13px" marginRight='10px'>
                  JPMorgan Results Eclipse Feds Living
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.6)" whiteSpace={"nowrap"} fontWeight="600" fontSize="13px">
                  12:38 - EN
                </Typography>
              </Box>
              <HomeHR />
              <Box className="topStoriesHomeRow" sx={{
                display: "flex", justifyContent: "space-between",
                padding: "0px 16px 0px 16px",
                height: '20px',
                marginTop: '0px'

              }}>
                <Typography color="white" fontSize="13px" marginRight='10px'>
                  US economy delivers modest gains
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.6)" whiteSpace={"nowrap"} fontWeight="600" fontSize="13px">
                  14:00 - EN
                </Typography>
              </Box>
              <HomeHR />
              <Box className="topStoriesHomeRow" sx={{
                display: "flex", justifyContent: "space-between",
                padding: "0px 16px 0px 16px",
                height: '20px',
                marginTop: '0px'

              }}>
                <Typography color="white" fontSize="13px" marginRight='10px'>
                  JPMorgan Results Eclipse Feds Living
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.6)" whiteSpace={"nowrap"} fontWeight="600" fontSize="13px">
                  12:38 - EN
                </Typography>
              </Box>
              <HomeHR />
              <Box className="topStoriesHomeRow" sx={{
                display: "flex", justifyContent: "space-between",
                padding: "0px 16px 0px 16px",
                height: '20px',
                marginTop: '0px'

              }}>
                <Typography color="white" fontSize="13px" marginRight='10px'>
                  US economy delivers modest gains
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.6)" whiteSpace={"nowrap"} fontWeight="600" fontSize="13px">
                  14:00 - EN
                </Typography>
              </Box>
              <HomeHR />
              <Box className="topStoriesHomeRow" sx={{
                display: "flex", justifyContent: "space-between",
                padding: "0px 16px 0px 16px",
                height: '20px',
                marginTop: '0px'

              }}>
                <Typography color="white" fontSize="13px" marginRight='10px'>
                  JPMorgan Results Eclipse Feds Living
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.6)" whiteSpace={"nowrap"} fontWeight="600" fontSize="13px">
                  12:38 - EN
                </Typography>
              </Box>
              <HomeHR />
              <Box className="topStoriesHomeRow" sx={{
                display: "flex", justifyContent: "space-between",
                padding: "0px 16px 0px 16px",
                height: '20px',
                marginTop: '0px'

              }}>
                <Typography color="white" fontSize="13px" marginRight='10px'>
                  US economy delivers modest gains
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.6)" whiteSpace={"nowrap"} fontWeight="600" fontSize="13px">
                  14:00 - EN
                </Typography>
              </Box>
            </Box>
          </Box> */}

          <TradingHistoryTable />

        </Grid>
      </Grid>
    </Box>
  );
};

export default StructuredBox;
