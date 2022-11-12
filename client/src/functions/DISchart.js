import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class DISchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: '12-31', y: 154.89},
            {x: '1-3', y: 156.76},
            {x: '1-4', y: 155.73},
            {x: '1-5', y: 155.19},
            {x: '1-6', y: 156.9},
            {x: '1-7', y: 157.83},
            {x: '1-10', y: 156.6},
            {x: '1-11', y: 157.89},
            {x: '1-12', y: 157.8},
            {x: '1-13', y: 155.44},
            {x: '1-14', y: 151.94},
            {x: '1-18', y: 152.27},
            {x: '1-19', y: 150.11},
            {x: '1-20', y: 147.62},
            {x: '1-21', y: 137.38},
            {x: '1-24', y: 137.46},
            {x: '1-25', y: 136.51},
            {x: '1-26', y: 133.6},
            {x: '1-27', y: 135.42},
            {x: '1-28', y: 138.63}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Disney's Stock Prices Last Month</h1>
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