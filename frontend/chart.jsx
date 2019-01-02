import { XYPlot, XAxis, YAxis, VerticalGridLines,
  HorizontalGridLines, LineSeries } from 'react-vis';
import React from 'react';

const Chart = ({years, data}) => {

  const line2008 = years[0] ? (
    <LineSeries
      data={data[0]}
      style={{stroke: '#b12b2b', strokeWidth: 3}}/>
  ) : null;

  const line2009 = years[1] ? (
    <LineSeries
      data={data[1]}
      style={{stroke: '#37dc3c', strokeWidth: 3}}/>
  ) : null;

  const line2010 = years[2] ? (
    <LineSeries
      data={data[2]}
      style={{stroke: 'yellow', strokeWidth: 3}}/>
  ) : null;

  const line2011 = years[3] ? (
    <LineSeries
      data={data[3]}
      style={{stroke: 'salmon', strokeWidth: 3}}/>
  ) : null;


  return (
      <XYPlot
        xType="ordinal"
        width={1000}
        height={500}
        yDomain={[10.5, 13.5]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Month"/>
        <YAxis title="Interest Rate (%)"/>
        <LineSeries
          data={data[4]}
          style={{stroke: 'violet', strokeWidth: 3}}/>
        {line2008}
        {line2009}
        {line2010}
        {line2011}
      </XYPlot>
  );
}
export default Chart;
