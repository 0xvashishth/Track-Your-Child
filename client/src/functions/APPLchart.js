import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class APPLchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: '12-31', y: 177.57},
            {x: '1-3', y: 182.1},
            {x: '1-4', y: 179.7},
            {x: '1-5', y: 174.92},
            {x: '1-6', y: 172},
            {x: '1-7', y: 172.17},
            {x: '1-10', y: 172.19},
            {x: '1-11', y: 175.08},
            {x: '1-12', y: 175.53},
            {x: '1-13', y: 172.19},
            {x: '1-14', y: 173.07},
            {x: '1-18', y: 169.8},
            {x: '1-19', y: 166.23},
            {x: '1-20', y: 164.51},
            {x: '1-21', y: 162.41},
            {x: '1-24', y: 161.62},
            {x: '1-25', y: 159.78},
            {x: '1-26', y: 159.69},
            {x: '1-27', y: 159.22},
            {x: '1-28', y: 170.33}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Apple's Stock Prices Last Month</h1>
        <VictoryChart >
          <VictoryLine
            data={this.state.data}
            fixLabelOverlap={true}
            style={{
              data: {
                stroke: "#02B875",
                strokeWidth: 10,
                ticks: {stroke: "grey", size: 1}
              }
            }}
          />
          <VictoryAxis 
            tickCount={6}
            label = "Date"
            />
            <VictoryAxis 
            dependentAxis
            tickCount={6}
            />

        </VictoryChart>
      </div>
    );
  }
}