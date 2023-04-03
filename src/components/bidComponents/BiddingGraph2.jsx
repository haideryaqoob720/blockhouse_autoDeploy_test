import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
require('highcharts/modules/sonification')(Highcharts);

var poiTime = Date.UTC(2018, 4, 6),
  poiEarcon = {
    // Define the earcon we want to play for the point of interest
    earcon: new Highcharts.sonification.Earcon({
      instruments: [{
        instrument: 'squareMajor',
        playOptions: {
          // Play a quick rising frequency
          frequency: function (time) {
            return time * 1760 + 440;
          },
          volume: 0.1,
          duration: 200
        }
      }]
    }),
    // Play this earcon if we hit the point of interest
    condition: function (point) {
      return point.x === poiTime;
    }
  };

const options = {
  chart: {
    type: "spline"
  },
  title: {
    text: "My chart"
  },
  xAxis: {
    type: 'datetime',
    plotLines: [{
      value: poiTime,
      dashStyle: 'dash',
      width: 1,
      color: '#d33'
    }]
  },
  // tooltip: {
  //     split: true,
  //     valueDecimals: 0,
  //     valueSuffix: '°F'
  // },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 1, 2, 1, 4, 3, 6, 1, 2, 1, 4, 3, 6, 1, 2, 1, 4, 3, 6, 1, 2, 1, 4, 3, 6, 1, 2, 1, 4, 3, 6, 1, 2, 1, 4, 3, 6,]
    },
    {
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]
    }
  ]
};

const App = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default App;
