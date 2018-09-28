import React, { Component } from 'react';

import * as d3 from 'd3';

// const test = (props) => {
//   let rectNode = this.refs.bar;
//   d3.select(rectNode).append('div');
//   console.log(rectNode);
// }

// const createBar = (props) => {
//   return (data, index) => {
//     const rectProps = {
//       key: data,
//       height: (props.styles.height - props.styles.padding)  - props.yScale(data[1]),
//       width: (props.styles.width - (props.styles.padding * 2)) / props.data.length,
//       x: index * ((props.styles.width - (props.styles.padding * 2)) / props.data.length),
//       y: (props.styles.height - props.styles.padding) - ((props.styles.height - props.styles.padding) - props.yScale(data[1])),
//       fill: props.colorRange(index), 
//     };
//     return <rect {...rectProps} ref="bar" className="data-bar" onMouseOver={test}/>;
//   }
// }

// const Bar = (props) => {
//   return (
//     <g transform="translate(45, 0)">
//       {props.data.map(createBar(props))}
//     </g>
//   )
// }


///////////////////

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        visibility: 'hidden',
        height: '40px',
        width: '50px',
      } 
    }
    this.createBar = this.createBar.bind(this);
    this.getChild = this.getChild.bind(this);
  }

  getChild(index) {
    console.log(this.refs.index);
    var node = this.refs.index;
    d3.select(node).append('div');
  }

  createBar() {
    return (data, index) => {
      const rectProps = {
        key: data,
        height: (this.props.styles.height - this.props.styles.padding)  - this.props.yScale(data[1]),
        width: (this.props.styles.width - (this.props.styles.padding * 2)) / this.props.data.length,
        x: index * ((this.props.styles.width - (this.props.styles.padding * 2)) / this.props.data.length),
        y: (this.props.styles.height - this.props.styles.padding) - ((this.props.styles.height - this.props.styles.padding) - this.props.yScale(data[1])),
        fill: this.props.colorRange(index), 
      };
      return (
      <rect {...rectProps} className="data-bar" onMouseOver={(index) => this.getChild(index)}> 
        <div {...this.state.style} ref={index}>

        </div>
      </rect>
      )
    }
  }

  // componentDidMount() {
  //   docu
  // }


  render() {
    return (
      <g transform="translate(45, 0)">
        {this.props.data.map(this.createBar())}
      </g>
    )
  }
}

export default Bar;