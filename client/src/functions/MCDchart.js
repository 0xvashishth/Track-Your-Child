import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class MCDchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: '12-31', y: 268.07},
            {x: '1-3', y: 268.58},
            {x: '1-4', y: 268.51},
            {x: '1-5', y: 267.19},
            {x: '1-6', y: 269.69},
            {x: '1-7', y: 267.06},
            {x: '1-10', y: 264.41},
            {x: '1-11', y: 262.12},
            {x: '1-12', y: 260.92},
            {x: '1-13', y: 261.41},
            {x: '1-14', y: 257.71},
            {x: '1-18', y: 256.48},
            {x: '1-19', y: 255.22},
            {x: '1-20', y: 253.13},
            {x: '1-21', y: 254.59},
            {x: '1-24', y: 253.61},
            {x: '1-25', y: 250.68},
            {x: '1-26', y: 249.85},
            {x: '1-27', y: 248.74},
            {x: '1-28', y: 256.09}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>McDonald's Stock Prices Last Month</h1>
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