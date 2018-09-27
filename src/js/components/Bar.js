import React from 'react';

const createBar = (props) => {
  return (data, index) => {
    const rectProps = {
      key: data,
      // height: props.yScale(data[1]),                       // done
      // y: props.styles.height - props.yScale(data[1]),      // done 
      height: (props.styles.height - props.styles.padding) - props.yScale(data[1]),                       // done
      y: props.yScale(data[1]) + props.styles.padding,      // done 
      width: props.styles.width / props.data.length,       // done
      x: props.xScale(index),
      fill: props.colorRange(index), 
    };
    return <rect {...rectProps} />;
  }
}

const Bar = (props) => {
  return (
    <React.Fragment>
      {props.data.map(createBar(props))}
    </React.Fragment>
  )
}

export default Bar;