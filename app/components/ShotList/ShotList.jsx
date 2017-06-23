import React, {Component} from 'react'
import Radium from 'radium'
import SvgContainer from 'components/SvgContainer/SvgContainer'

export class ShotList extends Component {
  render () {
    const {
      score,
      aantalVragen,
      status,
      vraagNummer,
      current
    } = this.props
    const downKeyframes = Radium.keyframes({
      '0%': {y: current * 250},
      '100%': {y: status * 250}
    }, 'pulse')
    const styles = {
      inner: {
        // Use a placeholder animation name in `animation`
        animation: 'x 2s ease 0s forwards',
        // Assign the result of `keyframes` to `animationName`
        animationName: downKeyframes
      },
      trans: {
        transform: `translateY(${status * 250})`,
        transition: 'all 2s'
      }
    }
    return (
      <div
        className={`shot`}
        >
        <SvgContainer
          width={200}
          height={250}
          >
          <g>
            <defs>
              <rect
                className={`shot-${status}`}
                id={`CLIP-${vraagNummer}`}
                width={200}
                height={350}
                y={status * 250}
                style={status === 1 ? styles.inner : {}}
                />
            </defs>
            <clipPath
              id={`SVGID-${vraagNummer}`}
              >
              <use
                xlinkHref={`#CLIP-${vraagNummer}`}
                overflow={'visible'}
                />
            </clipPath>
            <polygon
              clipPath={`url(#SVGID-${vraagNummer})`}
              fill={'#7FC242'}
              points={'165,200 35,200 15,50 185,50'}
              />
          </g>
          <g>
            <polygon
              fill={'none'}
              stroke={'#ffffff'}
              strokeWidth={10}
              points={'170,200 30,200 10,10 190,10'}
              />
          </g>
          <g>
            <text
              x={100}
              y={160}
              fontFamily={'Roboto'}
              fontSize={100}
              textAnchor={'middle'}
              fill={'#ffffff'}
              >
              {vraagNummer + 1}
            </text>
          </g>
        </SvgContainer>
      </div>
    )
  }
}

export default Radium(ShotList)
