import React from 'react';

import Axis from './Axis';

const XY = (props) => {
  const Xaxis = {
    translate: `translate(0, ${props.styles.height - props.styles.padding})`,
    scale: props.xScale,
    orient: 'Bottom',
  }

  const Yaxis = {
    translate: `translate(${props.styles.padding},  0)`,
    scale: props.yScale,
    orient: 'Left',
  }

  return (
    <React.Fragment>
      <Axis {...Yaxis}/>
      <Axis {...Xaxis}/>
    </React.Fragment>
  )
}

export default XY;