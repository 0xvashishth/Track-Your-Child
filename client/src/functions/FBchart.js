import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class FBchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: '12-31', y: 336.35},
            {x: '1-3', y: 338.54},
            {x: '1-4', y: 336.53},
            {x: '1-5', y: 324.17},
            {x: '1-6', y: 332.46},
            {x: '1-7', y: 331.79},
            {x: '1-10', y: 328.07},
            {x: '1-11', y: 334.37},
            {x: '1-12', y: 333.26},
            {x: '1-13', y: 326.48},
            {x: '1-14', y: 331.9},
            {x: '1-18', y: 318.15},
            {x: '1-19', y: 319.59},
            {x: '1-20', y: 316.56},
            {x: '1-21', y: 303.17},
            {x: '1-24', y: 308.71},
            {x: '1-25', y: 300.15},
            {x: '1-26', y: 294.63},
            {x: '1-27', y: 294.64},
            {x: '1-28', y: 31.71}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Facebook's Stock Prices Last Month</h1>
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