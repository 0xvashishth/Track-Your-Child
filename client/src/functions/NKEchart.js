import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class NKEchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: '12-31', y: 166.67},
            {x: '1-3', y: 164.67},
            {x: '1-4', y: 166.39},
            {x: '1-5', y: 162.25},
            {x: '1-6', y: 161.04},
            {x: '1-7', y: 156.97},
            {x: '1-10', y: 150.44},
            {x: '1-11', y: 150.3},
            {x: '1-12', y: 152.21},
            {x: '1-13', y: 149.59},
            {x: '1-14', y: 148.18},
            {x: '1-18', y: 146.95},
            {x: '1-19', y: 145.11},
            {x: '1-20', y: 142.73},
            {x: '1-21', y: 142.95},
            {x: '1-24', y: 146},
            {x: '1-25', y: 145.48},
            {x: '1-26', y: 143.99},
            {x: '1-27', y: 144.64},
            {x: '1-28', y: 145.91}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Nike's Stock Prices Last Month</h1>
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