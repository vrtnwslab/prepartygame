import React, {Component} from 'react'
import './svgcontainer.scss'

export default class SvgContainer extends Component {
  render () {
    const {width, height} = this.props
    return (
      <div
        className='svg-container'
        style={{
          paddingTop: `${height / width * 100}%`
        }}
        >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio={'xMidYMid meet'}
          >
          {this.props.children}
        </svg>
      </div>
    )
  }
}
