import React from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import Box from "@mui/material/Box";

import { Typography } from "@mui/material";

class ApexChart extends React.Component {
  formatingInGraphData(res) {

    let graphFormatedArray = [];
    let graphAllOpenValues = res.data["o"];
    let graphAllHighValues = res.data["h"];
    let graphAllLowValues = res.data["l"];
    let graphAllCloseValues = res.data["c"];
    let graphAllTime = res.data["t"];

    graphAllTime.forEach(function (val, index) {
      // eslint-disable-next-line
      let emptyObj = new Object({ x: '', y: [] });
      graphFormatedArray.push(emptyObj);
      graphFormatedArray[index].x = new Date(val * 1000);
    });

    graphAllOpenValues.forEach(function (val, index) {
      graphFormatedArray[index].y.push(parseFloat(val));
    });

    graphAllHighValues.forEach(function (val, index) {
      graphFormatedArray[index].y.push(parseFloat(val));
    });

    graphAllLowValues.forEach(function (val, index) {
      graphFormatedArray[index].y.push(parseFloat(val));
    });

    graphAllCloseValues.forEach(function (val, index) {
      graphFormatedArray[index].y.push(parseFloat(val));
    });

    this.setState({ GraphFormatedData: graphFormatedArray });
    // console.log(this.state.GraphFormatedData);
    this.setState({ loading: false });
  }

  graphDataGetterReq() {
    const date = new Date();

    // 👇️ timestamp in seconds (Unix timestamp)
    let currentTimestampInSeconds = Math.floor(date.getTime() / 1000);
    // console.log("currentTimestampInSeconds", currentTimestampInSeconds);

    let selectedTimePeriod;
    setTimeout(() => {
      selectedTimePeriod = this.state.selectedTimePeriod;
      let selectedTimePeriodSecs = this.state.selectedTimePeriodSecs;

      if (selectedTimePeriod === "1day") {
        selectedTimePeriodSecs =
          currentTimestampInSeconds - this.state.oneDaySeconds;
      } else if (selectedTimePeriod === "2day") {
        selectedTimePeriodSecs =
          currentTimestampInSeconds - this.state.twoDaySeconds;
      } else if (selectedTimePeriod === "3day") {
        selectedTimePeriodSecs =
          currentTimestampInSeconds - this.state.threeDaySeconds;
      } else if (selectedTimePeriod === "7day") {
        selectedTimePeriodSecs =
          currentTimestampInSeconds - this.state.sevenDaySeconds;
      } else if (selectedTimePeriod === "30day") {
        selectedTimePeriodSecs =
          currentTimestampInSeconds - this.state.thirtyDaySeconds;
      }
      this.setState({ selectedTimePeriodSecs });
      // console.log("selectedTimePeriodSecs", selectedTimePeriodSecs);

      axios
        .get(
          `https://api.latoken.com/v2/tradingview/history?symbol=FTP%2FUSDT&resolution=60&from=${selectedTimePeriodSecs}&to=${currentTimestampInSeconds}`
        )
        .then((res) => {
          this.formatingInGraphData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100);
  }

  coinDetailHandle() {
    axios
      .get(
        "https://ftpDetail.fairtrader.org/",
        // axios.get('/ticker/FTP/USDT',
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
        }
      )
      .then((res) => {
        // console.log(res);
        this.setState({ coinDetail: res.data });
        // console.log(this.state.coinDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.graphDataGetterReq();
    this.coinDetailHandle();

    setInterval(() => {
      this.graphDataGetterReq();
    }, 25000);
    // }, 22222000);

    setInterval(() => {
      this.coinDetailHandle();
    }, 10000);
  }

  constructor(props) {
    super(props);

    this.state = {
      showCoinDetail: false,
      fromWhichPage: props.fromWhichPage,
      GraphFormatedData: [],
      timestampInSeconds: "",
      coinDetail: "",
      oneDaySeconds: 1 * 86400,
      twoDaySeconds: 2 * 86400,
      threeDaySeconds: 3 * 86400,
      sevenDaySeconds: 7 * 86400,
      thirtyDaySeconds: 30 * 86400,
      // "1day"
      // "2day"
      // "3day"
      // "7day"
      // "30day"
      selectedTimePeriod: "1day",
      selectedTimePeriodSecs: "",

      options: {
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: "BlockHouse Token",
          align: "left",
          style: {
            color: 'white',
          }
        },
        xaxis: {
          type: "datetime",
          labels: {
            style: {
              colors: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
            }
          }
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          labels: {
            style: {
              colors: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
              fontSize: '12px'
            }
          }
        },
        colors: ["#447b40", "#cc7870", "#e74ce4"]

      },
    };
  }

  render() {

    return (
      <>
        <Typography
          variant="body1"
          align="right"
          sx={{
            color: "#659BEB",
            fontSize: "14px",
            fontWeight: "bold",
            marginRight: "22px",
            cursor: 'pointer',
            mb: '10px',
            fontFamily: 'Open Sans'
          }}
        >

          <span style={{ marginLeft: '10px' }}>Select Period:</span>
          <span style={{ marginLeft: '10px' }}
            onClick={() => {
              this.setState({ selectedTimePeriod: "1day" });
              this.graphDataGetterReq();
            }}
          >
            1D
          </span>
          <span style={{ marginLeft: '10px' }}
            onClick={() => {
              this.setState({ selectedTimePeriod: "2day" });
              this.graphDataGetterReq();
            }}
          >
            2D
          </span>
          <span style={{ marginLeft: '10px' }}
            onClick={() => {
              this.setState({ selectedTimePeriod: "3day" });
              this.graphDataGetterReq();
            }}
          >
            3D
          </span>
          <span style={{ marginLeft: '10px' }}
            onClick={() => {
              this.setState({ selectedTimePeriod: "7day" });
              this.graphDataGetterReq();
            }}
          >
            7D
          </span>
          <span style={{ marginLeft: '10px' }}
            onClick={() => {
              this.setState({ selectedTimePeriod: "30day" });
              this.graphDataGetterReq();
            }}
          >
            1M
          </span>

        </Typography>

        <Box id="chart" style={{ width: "98%" }}>
          <ReactApexChart
            options={this.state.options}
            series={[{ data: this.state.GraphFormatedData, color: 'red' }]}
            type="candlestick"
            // height={"320px"}
            height={this.state.fromWhichPage === "blockHouseDeals" ? "320px" : "320px"}
          />
        </Box>
      </>
    );
  }
}

export default ApexChart;
