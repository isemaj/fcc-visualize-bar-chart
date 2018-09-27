import React, { Component } from 'react';

import Plot from './Plot';

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      raw: [], 
      data: [], 
      styles: {
        width: 950,
        height: 500,
        padding: 35,
      }
    }
    this.fetchData = this.fetchData.bind(this);
  } 

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
      .then(res => res.json())
      .then(data => this.setState({
        raw: data,
        data: data.data
      }))
  }

  render() {
    var { data, styles } = this.state;
    return (
      <React.Fragment>
        {
          data ? 
          <Plot data={data} styles={styles} />
          :
          null
        }
      </React.Fragment>
    )
  }
}

export default Chart;
