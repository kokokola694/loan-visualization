import { XYPlot, XAxis, YAxis, VerticalGridLines,
  HorizontalGridLines, LineSeries } from 'react-vis';
import React from 'react';

const Chart = (props) => {

  const line2009 = props.years[0] ? (
    <LineSeries
      data={props.data[0]}
      style={{stroke: 'brown', strokeWidth: 3}}/>
  ) : null;

  const line2010 = props.years[1] ? (
    <LineSeries
      data={props.data[1]}
      style={{stroke: 'yellow', strokeWidth: 3}}/>
  ) : null;

  const line2011 = props.years[2] ? (
    <LineSeries
      data={props.data[2]}
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
          data={props.data[3]}
          style={{stroke: 'violet', strokeWidth: 3}}/>
        {line2009}
        {line2010}
        {line2011}
      </XYPlot>
  );
}
export default Chart;
