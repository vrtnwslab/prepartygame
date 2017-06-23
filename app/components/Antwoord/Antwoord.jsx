import React, {Component} from 'react'
import {flipInY} from 'react-animations'
import Radium from 'radium'

export class Antwoord extends Component {
  render () {
    const {
      handleNext,
      uitleg,
      correct
    } = this.props
    const result = correct ? uitleg.juist : uitleg.fout
    const styles = {
      flipInY: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(flipInY, 'flipInY')
      }
    }
    return (
      <div
        id={'antwoord'}
        className={'card'}
        >
        <section
          className={'empty empty-1'}
          >
          <div
            className={'border'}
             />
        </section>
        <section
          className={'empty empty-2'}
          >
          <div
            className={'border'}
             />
        </section>
        <section
          style={styles.flipInY}
          >
          <div
            className={'no-border'}
            >
            {(() => {
              if (correct) {
                return (
                  <h5
                    className={'juist'}
                    >
                    GOED ZO!
                  </h5>
                )
              } else {
                return (
                  <h5
                    className={'fout'}
                    >
                    NIET GOED, SHOTJE DRINKEN!
                  </h5>
                )
              }
            })()}
            <p>
              {result}
            </p>
            <ul>
              <li>
                <button
                  onClick={handleNext}
                  className={'volgende'}
                  >
                  Volgende
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Radium(Antwoord)
