import React from 'react';
import * as d3 from 'd3';

import Bar from './Bar';
import XY from './XY';

const ymax = (data) => d3.max(data, (d) => d[1]);
// const xmax = (data) => d3.max(data, (d) => )
// const ymin = (data) => d3.max(data, (d) => d[1]);

// const xScale = (props) => {
//   return d3.scaleOrdinal()
//     .domain()
// }

const yScale = (props) => {
  return d3.scaleLinear()
    .domain([0, ymax(props.data)])
    .range([0, props.styles.height])
}

const aggregator = (props) => {
  const scales = { yScale: yScale(props) }
  return Object.assign({}, props, scales);
}

const Plot = (props) => {
  const plotProps = aggregator(props);
  return (
    <svg width={props.styles.width} height={props.styles.height}>
      <Bar {...plotProps}/>
      {/* <XY {...plotProps}/> */}
    </svg>
  )
}

export default Plot;