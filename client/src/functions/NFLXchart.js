import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class NFLXchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: '12-31', y: 602.44},
            {x: '1-3', y: 597.37},
            {x: '1-4', y: 591.15},
            {x: '1-5', y: 567.52},
            {x: '1-6', y: 553.29},
            {x: '1-7', y: 541.06},
            {x: '1-10', y: 539.85},
            {x: '1-11', y: 540.84},
            {x: '1-12', y: 537.22},
            {x: '1-13', y: 519.2},
            {x: '1-14', y: 525.69},
            {x: '1-18', y: 510.8},
            {x: '1-19', y: 515.86},
            {x: '1-20', y: 508.25},
            {x: '1-21', y: 397.5},
            {x: '1-24', y: 387.15},
            {x: '1-25', y: 366.42},
            {x: '1-26', y: 359.7},
            {x: '1-27', y: 386.7},
            {x: '1-28', y: 384.36}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Netflix's Stock Prices Last Month</h1>
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