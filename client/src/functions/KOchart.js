import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class KOchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: '12-31', y: 59.21},
            {x: '1-3', y: 59.3},
            {x: '1-4', y: 60.29},
            {x: '1-5', y: 60.79},
            {x: '1-6', y: 60.47},
            {x: '1-7', y: 60.33},
            {x: '1-10', y: 60.43},
            {x: '1-11', y: 60.45},
            {x: '1-12', y: 60.54},
            {x: '1-13', y: 60.9},
            {x: '1-14', y: 61.39},
            {x: '1-18', y: 60.9},
            {x: '1-19', y: 61},
            {x: '1-20', y: 60.75},
            {x: '1-21', y: 60.45},
            {x: '1-24', y: 59.96},
            {x: '1-25', y: 59.82},
            {x: '1-26', y: 59.6},
            {x: '1-27', y: 59.65},
            {x: '1-28', y: 60.84}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Coca-Cola's Stock Prices Last Month</h1>
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