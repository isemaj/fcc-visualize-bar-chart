import React, { Component } from 'react';
import * as d3 from 'd3';

class Axis extends Component {
  constructor(props) {
    super(props);
    this.createAxis = this.createAxis.bind(this);
  }
  componentDidMount() {
    this.createAxis();
  }

  componentDidUpdate() {
    this.createAxis();
  }

  createAxis() {
    var node = this.refs.axis;
    d3.select(node).call(d3.axisBottom().ticks(5));
  }

  render() {
    return (
      <g ref="axis" transform={this.props.translate}></g>
    )
  }
}

// const Axis = (props) => {
//   return (
//     <g transform={props.translate}></g>
//   )
// }

export default Axis;