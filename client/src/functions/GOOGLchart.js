import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class GOOGLchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: '12-31', y: 2897.04},
            {x: '1-3', y: 2899.83},
            {x: '1-4', y: 2887.99},
            {x: '1-5', y: 2755.5},
            {x: '1-6', y: 2754.95},
            {x: '1-7', y: 2740.34},
            {x: '1-10', y: 2773.39},
            {x: '1-11', y: 2794.72},
            {x: '1-12', y: 2828.61},
            {x: '1-13', y: 2771.74},
            {x: '1-14', y: 2789.61},
            {x: '1-18', y: 2719.96},
            {x: '1-19', y: 2702.33},
            {x: '1-20', y: 2666.15},
            {x: '1-21', y: 2607.03},
            {x: '1-24', y: 2616.08},
            {x: '1-25', y: 2538.7},
            {x: '1-26', y: 2584.66},
            {x: '1-27', y: 2580.1},
            {x: '1-28', y: 2667.02}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Google's Stock Prices Last Month</h1>
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