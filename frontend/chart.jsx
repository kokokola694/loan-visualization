import { XYPlot, XAxis, YAxis, VerticalGridLines,
  HorizontalGridLines, LineSeries } from 'react-vis';
import React from 'react';

const Chart = (props) => {
  // debugger
  const dataArr = props.data.map(loan => {
    let avg;
    if (props.year === "ALL") {
      const sum = loan[2009][0] + loan[2010][0] + loan[2011][0];
      const count = loan[2009][1] + loan[2010][1] + loan[2011][1];
      avg = sum / count;
    } else {
      avg = loan[props.year][0] / loan[props.year][1];
    }

    return {
      x: parseFloat(loan[2011][2]),
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
        <XAxis title="Month"/>
        <YAxis title="Interest Rate"/>
        <LineSeries
          data={dataArr}
          style={{stroke: 'violet', strokeWidth: 3}}/>
      </XYPlot>
  );
}
export default Chart;
