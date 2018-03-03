import React from 'react'
import { bb } from "billboard.js"
import "./billboard.css"
// require("./billboard.css")

class SplineChart extends React.PureComponent<Props> {
  componentDidMount() {
    this.drawChart(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.drawChart(nextProps)
  }

  drawChart(props) {
    const { chartArgument } = props
    bb.generate({
    bindto: "#chart",
    data: {
        columns: [
            ["data1", 30, 200, 100, 170, 150, 250],
            ["data2", 130, 100, 140, 35, 110, 50]
        ],
        types: {
          data1: "spline",
          data2: "area-spline"
        },
        colors: {
          data1: "red",
          data2: "green"
        }
    }
});
  }

  render() {
    return (
      <div id="chart">dd</div>
    )
  }
}

export default SplineChart
