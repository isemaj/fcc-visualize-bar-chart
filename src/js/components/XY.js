import React from 'react';

import Axis from './Axis';

const XY = (props) => {
  const Xaxis = {
    translate: `translate(0, 0)`,
    scale: props.xScale,
    orient: 'Bottom',
  }

  const Yaxis = {
    translate: `translate(${props.styles.padding},  ${props.styles.padding})`,
    scale: props.yScale,
    orient: 'Left',
  }

  return (
    <React.Fragment>
      <Axis {...Xaxis}/>
      <Axis {...Yaxis}/>
    </React.Fragment>
  )
}

export default XY;