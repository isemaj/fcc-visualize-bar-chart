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
    let node = this.refs.axis;
    let axisType = `axis${this.props.orient}`;
    const axis = d3[axisType]()
      .scale(this.props.scale)
    d3.select(node).call(axis);
  }

  render() {
    return (
      <g ref="axis" transform={this.props.translate}></g>
    )
  }
}

export default Axis;