import React from 'react';
import * as d3 from 'd3';

import Bar from './Bar';
import XY from './XY';

// const ymax = (data) => d3.max(data, (d) => {
//   return d[1];
// });
const ymin = (data) => d3.min(data, (d) => d[1]);
const ymax = (data) => d3.max(data, (d) => d[1]);
const xmin = (data) => d3.min(data, (d) => d[0]);
const xmax = (data) => d3.max(data, (d) => d[0]);

const xScale = (props) => {
  return d3.scaleLinear()
    .domain([xmin(props.data), xmax(props.data)])
    .range([props.styles.padding, props.styles.width + props.styles.padding])
}

const yScale = (props) => {
  return d3.scaleLinear()
    .domain([ymin(props.data), ymax(props.data)])
    .range([props.styles.height - (props.styles.padding * 2), props.styles.padding])
}

const colorRange = (props) => {
  return d3.scaleLinear()
    .domain([0, props.data.length])
    .range(["#008B74", "#845EC2"])
}

const aggregator = (props) => {
  const scales = { 
    yScale: yScale(props), 
    xScale: xScale(props),
    colorRange: colorRange(props),
  }
  return Object.assign({}, props, scales);
}

const svgContainer = (props) => {
  const style = {
    width: props.styles.width - ( props.styles.padding * 2),
    height: props.styles.height - (props.styles.padding * 2) 
  }
  return style;
}

const Plot = (props) => {
  const plotProps = aggregator(props);
  const svgStyle = svgContainer(props);
  return (
    <div className="plot">
      <svg {...svgStyle}>
        <Bar {...plotProps}/>
        <XY {...plotProps}/> 
      </svg>
    </div>
  )
}

export default Plot;