import React from 'react';

const Tooltip = (props) => {
  return (
    <React.Fragment>
{/*      <rect{...divStyle} className="tooltip">
        <text color="white">{props[1]}</text>
      </rect>
*/}   
      <foreignObject
        x={props.x}
        y={props.styles.height - 150}
      >
        <div className="tooltip">
          {props[1]}
        </div>
      </foreignObject>
    </React.Fragment>
  )
}

export default Tooltip;