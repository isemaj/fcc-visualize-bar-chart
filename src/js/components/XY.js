import React from 'react';

import Axis from './Axis'

const XY = (props) => {
  const Xaxis = {
    translate: 'translate(0, 30)',
  }

  return (
    <g className="xy">
      <Axis {...Xaxis}/>
      <Axis/>
    </g>
  )
}

export default XY;