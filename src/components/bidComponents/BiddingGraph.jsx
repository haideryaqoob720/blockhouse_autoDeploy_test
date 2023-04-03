import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box, Button, Typography } from "@mui/material";
import arrowUp from "../../Images/Home/arrowUp.png";

function returnSameTxtMultipleFunc(isttxt, sectxt, trdtxt, frthtxt, fifthtxt, times) {
  let result = [];
  for (let index = 0; index < times; index++) {
    result.push(isttxt)
  } for (let index = 0; index < times; index++) {
    result.push(sectxt)
  } for (let index = 0; index < times; index++) {
    result.push(trdtxt)
  } for (let index = 0; index < times; index++) {
    result.push(frthtxt)
  } for (let index = 0; index < times; index++) {
    result.push(fifthtxt)
  }
  return result;
}

// Point of interest options
var poiTime = Date.UTC(2023, 1, 1);
var options = {};
options = {
  chart: {
    type: 'spline',
    zoomType: 'x',
    backgroundColor: 'transparent',
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: '12px',
    height: '310px',
    // spacingTop: 0,
    spacingRight: 30,
    // spacingBottom: 0,
    spacingLeft: 40,
    // marginRight: '-4',
    // marginLeft: '-5',
    // marginBottom: 0,
  },
  title: {
    text: '',
  },
  subtitle: {
    text: ''
  },
  yAxis: {
    showEmpty: true,
    min: 5,
    max: 700000,
    tickInterval: 120000,
    title: {
      text: ''
    },
    gridLineColor: 'rgba(255, 255, 255, 0.12)',
    labels: {
      style: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '12px'
      }
    },
  },
  xAxis: {
    // type: 'datetime',
    // plotLines: [{
    //   value: 4.2,
    //   dashStyle: 'solid',
    //   width: 2,
    //   color: '#fff'
    // }],
    // labels: {
    //   style: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     fontSize: '12px',
    //   }
    // },

    // type: 'datetime',
    plotLines: [{
      value: 28,
      dashStyle: 'solid',
      width: 2,
      color: '#fff'
    }],
    // showEmpty: true,
    gridLineWidth: 1,
    gridLineColor: 'rgba(255, 255, 255, 0.12)',
    // lineWidth: 0,
    // tickWidth: 0,
    // minPadding: 0,
    // maxPadding: 0,
    min: 0,
    max: 45,
    // opposite: false,
    labels: {
      formatter: function () {
        // var labels = ['1:04 PM', '4:04 PM', '7:04 PM', '10:04 PM', 'oct7' ]
        var labels = returnSameTxtMultipleFunc('1:04 PM', '4:04 PM', '7:04 PM', '10:04 PM', 'oct7', 9)

        return labels[this.value];
      },
      style: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '12px',
      }
    },
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false
      },
      cursor: 'pointer',
    }
  },
  series: [
    {
      // data: [10000, 700000, 30000, 500000, 700000,],
      data: [10000, 700000, 30000, 500000, 700000, 300000, 10000, 600000, 400000, 42200, 300000, 80000, 300000, 400000, 100000, 40000, 700000, 200000, 300000, 80000, 300000, 400000, 100000, 40000, 700000, 200000, 300000, 80000, 300000, 400000, 100000, 40000, 700000, 200000, 300000, 80000, 300000, 400000, 100000, 40000, 700000, 200000, 700000, 30000, 500000, 700000],
      color: '#A4F0B2',
    },
    {
      data: [15652, 31304, 45000, 60000, 75000, 90000, 105000, 120000, 135000, 150000, 165000, 180000, 195000, 210000, 225000, 240000, 255000, 270000, 285000, 300000, 315652, 331304, 345000, 360000, 375000, 390000, 405000, 420000, 435000, 450000, 465000, 480000, 495000, 510000, 525000, 540000, 555000, 570000, 585000, 600000, 615000, 630000, 645000, 662000, 679000, 700000],
      color: '#DD6F6F'
    }
  ]
};

const App = () => (
  <Box
    sx={{
      borderRadius: "12px",
      border: `1px solid rgba(255, 255, 255, 0.12)`,
      background:
        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
      backdropFilter: "blur(32px)",
    }}
  >
    <Typography
      color="white"
      variant='h6'
      sx={{
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "open sans",
        padding: '24px'
      }}
    >
      <b>Bidding Graph</b>
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
            marginLeft: "8px",
          },
        }}
      >
        <img src={arrowUp} alt="arrowUp" style={{ marginRight: "8px" }} />
        234.56%
      </Button>
    </Typography>

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
    </Box>
  </Box>
);

export default App;
