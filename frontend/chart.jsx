import { XYPlot, XAxis, YAxis, VerticalGridLines,
  HorizontalGridLines, LineSeries } from 'react-vis';
import React from 'react';

const Chart = (props) => {
  const dataArr2009 = [];
  const dataArr2010 = [];
  const dataArr2011 = [];
  const dataArr = [];

  props.data.forEach(loan => {
    dataArr2009.push({x: parseFloat(loan.month), y: parseFloat(loan[2009][0])});
    dataArr2010.push({x: parseFloat(loan.month), y: parseFloat(loan[2010][0])});
    dataArr2011.push({x: parseFloat(loan.month), y: parseFloat(loan[2011][0])});

    const overallSum = loan[2009][0] * loan[2009][1] +
      loan[2010][0] * loan[2010][1] + loan[2011][0] * loan[2011][1];
    const overallCount = loan[2009][1] + loan[2010][1] + loan[2011][1];
    const avg = overallSum / overallCount;
    dataArr.push({x: parseFloat(loan.month), y: parseFloat(avg)});
  });

  const line2009 = props.years[0] ? (
    <LineSeries
      data={dataArr2009}
      style={{stroke: 'brown', strokeWidth: 3}}/>
  ) : null;

  const line2010 = props.years[1] ? (
    <LineSeries
      data={dataArr2010}
      style={{stroke: 'yellow', strokeWidth: 3}}/>
  ) : null;

  const line2011 = props.years[2] ? (
    <LineSeries
      data={dataArr2011}
      style={{stroke: 'salmon', strokeWidth: 3}}/>
  ) : null;


  return (
      <XYPlot
        xType="ordinal"
        width={1000}
        height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Month"/>
        <YAxis title="Interest Rate (%)"/>
        <LineSeries
          data={dataArr}
          style={{stroke: 'violet', strokeWidth: 3}}/>
        {line2009}
        {line2010}
        {line2011}
      </XYPlot>
  );
}
export default Chart;
