import React from 'react';

import Axis from './Axis'

const XY = (props) => {
  const Xaxis = {
    translate: `translate(0, ${props.styles.height})`,
    scale: props.xScale,
    orient: 'Bottom',
  }

  const Yaxis = {
    translate: `translate(${props.styles.padding},  ${props.styles.padding})`,
    scale: props.yScale,
    orient: 'Left',
  }

  return (
    <g className="xy">
      <Axis {...Xaxis}/>
      <Axis {...Yaxis}/>
    </g>
  )
}

export default XY;