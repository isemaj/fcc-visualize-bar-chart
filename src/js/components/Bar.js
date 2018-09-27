import React from 'react';

const createBar = (props) => {
  return (data, index) => {
    const rectProps = {
      key: data,
      height: props.yScale(data[1]),                       // done
      width: props.styles.width / props.data.length,       // done
      x: index * (props.styles.width / props.data.length) ,
      y: props.styles.height - props.yScale(data[1]),      // done 
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