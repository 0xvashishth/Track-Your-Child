import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class chart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
        ]
      };
    }
    componentDidMount() {
        const fs = require('fs')
        fs.readFile('./companies/APPL.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            console.log('File data:', jsonString) 
        })
        // this.setState({data: })
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Apple Stock Prices Past Month</h1>
        <VictoryChart >
          <VictoryLine
            data={this.state.data}
            fixLabelOverlap={true}
            style={{
              data: {
                stroke: "#02B875",
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