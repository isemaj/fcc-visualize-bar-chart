import React, { Component } from 'react';

import Tooltip from './Tooltip';


// replace the <Tooltip> with <div> or any thing else instead. Don't create other component. 


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

//     let tooltipProps = {
//       x: rectProps.x,
//       y: props.styles.height - 150,
//       opacity: 0,
//       fill: 'red',
//       color: 'red',
//     }

//     const showTooltip = () => {
//       tooltipProps = {
//         opacity: 1,
//       }
//     } 

//     return (
//       <React.Fragment>
//         <rect {...rectProps} key={index+100} ref="bar" className="data-bar" onMouseOver={showTooltip}/>
//         {/*<Tooltip {...tooltipProps} key={index} />*/}
//         <foreignObject {...tooltipProps} className="tooltip">
//           <div className="tooltip">
//             {data[1]}
//           </div>
//         </foreignObject>
//       </React.Fragment>
//       );
//   }
// }

// const Bar = (props) => {
//   return (
//     <g transform="translate(45, 0)">
//       {props.data.map(createBar(props))}
//     </g>
//   )
// }


//////////////////////////

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipProps: {
        opacity: 0,
      }
    }
    this.createBar = this.createBar.bind(this);
  }

  // componentDidMount() {

  // }

  // componentDidUpdate() {
  //   this.showTooltip();
  // }

  // showTooltip() {
  //   this.setState({
  //     tooltipProps: {
  //       opacity: 1
  //     }
  //   })
  // }

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

    const tProps = Object.assign({}, this.state, rectProps, this.props)

    return (
      <React.Fragment key={index}>
        <rect {...rectProps} 
          key={index+100} 
          ref="bar" 
          className="data-bar" 
        />
        <Tooltip {...tProps} key={index} />
{/*        <foreignObject 
          x={rectProps.x} 
          y={this.props.styles.height - 150}
        >
          <div className="tooltip">
            {data[1]}
          </div>
        </foreignObject>
*/}      </React.Fragment>
      );
  }
  }


  render() {
    return (
      <g transform="translate(45, 0)">
        {this.props.data.map(this.createBar())}
      </g>
    )
  }
}


export default Bar;