// Charts import
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import chartData from "./homeChartData.json";
// Images
import { Box, Button, Grid, Typography } from "@mui/material";
import arrowUp from "../../Images/Home/arrowUp.png";

function HomeFirstRowBoxesChild(e: any) {
  // if (e.whichBox === "istBox" && e.whichPage !== "DealsSec1") {
  //   console.log('dfsdf');
  // } else {
  //   console.log('dddddddd');
  // }
  let stopsColor;
  let seriesColor;
  let lineWidth;
  if (e.whichBox === "istBox") {
    stopsColor = [
      [0, "rgba(101, 155, 235, 0.4) 0%"],
      [1, "rgba(101, 155, 235, 0.0001) 100%)"],
    ];
    seriesColor = "#659BEB";
  } else if (e.whichBox === "secBox") {
    if (e.whichPage === "DealsSec1") {
      stopsColor = [
        [0, "rgba(246, 175, 64, 0.4) 0%"],
        [1, "rgba(246, 175, 64, 0.0001) 100%"],
      ];
      seriesColor = "#F6AF40";
    } else {
      stopsColor = [
        [0, "rgba(150, 100, 255, 0.4) 0%"],
        [1, "rgba(150, 100, 255, 0.0001) 100%"],
      ];
      seriesColor = "#9664FF";
    }
  } else {
    if (e.whichPage === "DealsSec1") {
      stopsColor = [
        [0, "rgba(164, 240, 178, 0.4) 0%"],
        [1, "rgba(164, 240, 178, 0.0001) 100%"],
      ];
      seriesColor = "#A4F0B2";
    } else {
      stopsColor = [
        [0, "rgba(235, 101, 101, 0.4) 0%"],
        [1, "rgba(235, 101, 101, 0.0001) 100%"],
      ];
      seriesColor = "#EB6565";
    }
  }
  if (e.whichPage !== "DealsSec1") {
    lineWidth = 2;
  } else {
    lineWidth = 1;
  }
  const options = {
    chart: {
      zoomType: "x",
      backgroundColor: "transparent",
      height: "175px",
      // spacingTop: 0,
      spacingRight: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      marginRight: "-4",
      marginLeft: "-5",
      marginBottom: 0,
    },
    title: {
      text: "",
      align: "left",
    },
    subtitle: {
      text:
        document.ontouchstart === undefined
          ? // 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
            ""
          : "",
      align: "left",
    },
    xAxis: {
      type: "datetime",
      labels: {
        enabled: false,
      },
      lineColor: "transparent",
      tickLength: 1,
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
      gridLineColor: "transparent",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: stopsColor,
        },
        marker: {
          radius: 2,
        },
        lineWidth: lineWidth,

        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },

    series: [
      {
        type: "area",
        name: "USD to EUR",
        data: chartData,
        color: seriesColor,
      },
    ],
  };
  console.log(e.whichBox);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        border: `1px solid rgba(255, 255, 255, 0.12)`,
        background:
          "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
        backdropFilter: "blur(32px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "12px 16px",
          borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
          height: "80px",
        }}
      >
        <Box sx={{ marginBlock: "auto" }}>
          <Typography
            color="white"
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: "open sans",
            }}
          >
            $86,152,962.86
          </Typography>
          <Typography
            color="white"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 0.6)",
              fontFamily: "open sans",
            }}
          >
            Investment
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              "&.MuiButton-root": {
                textTransform: "none",
                borderColor: "gray",
                color: "white",
                background: "rgba(255, 255, 255, 0.04)",
                p: "4px 8px",
                fontWeight: 600,
                fontSize: "16px",
                borderRadius: `6px`,
                marginRight: "4px",
              },
            }}
          >
            <img src={arrowUp} alt="arrowUp" style={{ marginRight: "8px" }} />
            234.56%
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          gap: "15px",
        }}
      >
        <HighchartsReact highcharts={Highcharts} options={options} />
        {e.whichPage !== "DealsSec1" ? (
          ""
        ) : (
          <center>
            <Button
              sx={{
                "&.MuiButton-root": {
                  textTransform: "none",
                  borderColor: "gray",
                  color: "white",
                  background: "rgba(60, 62, 75, 0.24)",
                  fontWeight: 600,
                  lineHeight: "20px",
                  fontSize: "14px",
                  borderRadius: `6px`,
                  width: "90%",
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  bottom: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderTopLeftRadius: "6px",
                  borderTopRightRadius: "6px",
                  borderBottomLeftRadius: "6px",
                  borderBottomRightRadius: "6px",
                },
              }}
            >
              View Report
            </Button>
          </center>
        )}
      </Box>
    </Box>
  );
}

const StructuredBox = (whichPage: any) => {
  return (
    <Box sx={{ my: "32px", width: "97%" }}>
      <Grid container spacing="24px">
        <Grid item xs={4}>
          <HomeFirstRowBoxesChild
            whichBox="istBox"
            whichPage="whichPage.whichPage"
          />
        </Grid>
        <Grid item xs={4}>
          <HomeFirstRowBoxesChild
            whichBox="secBox"
            whichPage="whichPage.whichPage"
          />
        </Grid>
        <Grid item xs={4}>
          <HomeFirstRowBoxesChild
            whichBox="trdBox"
            whichPage="whichPage.whichPage"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StructuredBox;
