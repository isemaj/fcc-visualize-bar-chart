import React from 'react';

const createBar = (props) => {
  return (data, index) => {
    const rectProps = {
      key: data,
      height: (props.styles.height - props.styles.padding)  - props.yScale(data[1]),
      width: (props.styles.width - (props.styles.padding * 2)) / props.data.length,
      x: index * ((props.styles.width - (props.styles.padding * 2)) / props.data.length),
      y: (props.styles.height - props.styles.padding) - ((props.styles.height - props.styles.padding) - props.yScale(data[1])),
      fill: props.colorRange(index), 
    };
    return <rect {...rectProps} />;
  }
}

const Bar = (props) => {
  return (
    <g transform="translate(45, 0)">
      {props.data.map(createBar(props))}
    </g>
  )
}

export default Bar;