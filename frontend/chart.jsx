import { XYPlot, XAxis, YAxis, VerticalGridLines,
  HorizontalGridLines, LineSeries } from 'react-vis';
import React from 'react';

const Chart = (props) => {
  const dataArr = props.data.map(loan => {
    let avg;
    if (loan[1] !== 0) {
      avg = loan[0] / loan[1];
    } else {
      avg = 0;
    }
    return {
      x: parseFloat(loan[2]),
      y: parseFloat(avg)
    }
  });
  return (
      <XYPlot
        xType="ordinal"
        width={1000}
        height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Month of 2011"/>
        <YAxis title="Interest Rate"/>
        <LineSeries
          data={dataArr}
          style={{stroke: 'violet', strokeWidth: 3}}/>
      </XYPlot>
  );
}
export default Chart;
