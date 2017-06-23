/* eslint-disable no-else-return */
import React, {Component} from 'react'
import SvgContainer from 'components/SvgContainer/SvgContainer'

export class Resultaat extends Component {
  render () {
    const {
      handleStart,
      score,
      resultaten
    } = this.props
    const resultaat = n =>
        [resultaten[n].promille, resultaten[n].tekst, resultaten[n].naam]
    return (
      <div
        className={'card'}
        id={'resultaat'}
        >
        <div
          className={'border'}
          >
          <section>
            <div
              className={'links'}
              >
              <h5
                className={'promille-naam'}
                >
                {resultaat(score)[2]}
              </h5>
              <h5
                className={'promille'}
                >
                je dronk {score} shots en hebt {resultaat(score)[0]} promille alcohol in je bloed.
              </h5>
              <p>
                {resultaat(score)[1]}
              </p>
              <p
                className={'duiding'}
                >
                De effecten van alcohol op je lichaam zijn dezelfde bij elke alcoholische drank. 2 shotjes tequila of andere sterke drank bevatten evenveel alcohol en is dus even schadelijk als 2 pintjes of 2 glazen wijn.
              </p>
              <ul>
                <li>
                  <a
                    className={'fb'}
                    title={'Preparty drinkspel, speel mee met pano'}
                    href={`https://www.facebook.com/dialog/feed?app_id=550214761852843&display=page&description=Ik dronk ${score} shotjes en heb ${resultaat(score)[0]} promille alcohol in mijn bloed&name=Ik ben een ${resultaat(score)[2]}, speel ook het drinkspel op deredactie.be&picture=http://deredactie.be/static/2016/interactief/161117_drinkspel_pano/drinkspel_fb_${score}.png&link=http://deredactie.be/p/1.2820764&redirect_uri=http://deredactie.be/p/1.2820764`}
                    target={'_blank'}
                    >
                    <i
                      className={'fa fa-facebook-official'}
                      aria-hidden
                       />
                    deel op facebook
                  </a>
                </li>
                <li>
                  <a
                    className={'pano fb'}
                    href={`https://www.een.be/pano/deze-week-in-pano`}
                    target={'_blank'}
                    >
                    <i
                      className={'fa fa-youtube-play'}
                      aria-hidden
                       />
                    <div
                      className={'play-link'}
                      >
                      <SvgContainer
                        width={104.8}
                        height={30.3}
                        >
                        <g>
                          <path
                            fill='#FFFFFF'
                            d='M0,0.7h6.8v2.7h0.1c1.5-2,3.7-3.4,6.7-3.4c5.9,0,9.5,5.1,9.5,11.8c0,7.2-3.9,11.8-9.7,11.8
                            c-2.9,0-4.9-1.1-6.3-3H7.1v9.7H0V0.7z M16,12.1c0-3.8-1.4-6.4-4.5-6.4c-3.1,0-4.7,2.7-4.7,6.4c0,3.6,1.7,6.1,4.8,6.1
                            C14.4,18.2,16,15.8,16,12.1'
                            />
                          <path
                            fill='#FFFFFF'
                            d='M24.1,16.7c0-4.9,3.9-6.4,8.5-7c4.2-0.5,5.7-1,5.7-2.5c0-1.4-0.9-2.4-3-2.4c-2.3,0-3.4,1-3.6,2.9h-6.5
                            C25.3,3.6,28.5,0,35.2,0c3.4,0,5.6,0.6,7.2,1.8c1.9,1.4,2.8,3.6,2.8,6.4v11.2c0,1.8,0.2,2.8,0.8,3.2v0.3h-6.9
                            c-0.3-0.5-0.6-1.3-0.7-2.5h-0.1c-1.3,1.9-3.3,3-6.6,3C27.3,23.5,24.1,21.1,24.1,16.7 M38.5,15v-2.7c-0.9,0.5-2.2,0.8-3.7,1.2
                            c-2.7,0.6-3.9,1.3-3.9,3c0,1.8,1.3,2.5,3,2.5C36.7,19,38.5,17.4,38.5,15'
                            />
                          <path
                            fill='#FFFFFF'
                            d='M48.3,0.7h6.8v3h0.1C56.9,1.3,59,0,62.1,0c4.9,0,7.7,3.5,7.7,8.4v14.5h-7.1V9.9c0-2.4-1.2-4-3.5-4
                            c-2.4,0-3.9,2-3.9,4.7v12.3h-7.1V0.7z'
                            />
                          <path
                            fill='#FFFFFF'
                            d='M71.7,11.8C71.7,5.1,76.4,0,83.6,0c7.2,0,11.9,5.1,11.9,11.8c0,6.7-4.7,11.8-11.9,11.8
                            C76.4,23.6,71.7,18.5,71.7,11.8 M88.3,11.8c0-4-1.7-6.8-4.7-6.8c-3.1,0-4.7,2.7-4.7,6.8c0,4,1.6,6.7,4.7,6.7
                            C86.6,18.6,88.3,15.9,88.3,11.8'
                            />
                          <path
                            fill='#FFFFFF'
                            d='M96.6,20.1v2.7h8.3v-8.3h-2.7C99.1,14.5,96.6,17,96.6,20.1'
                            />
                        </g>
                      </SvgContainer>
                    </div>
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleStart}
                    >
                    <i
                      className={'fa fa-arrow-circle-right'}
                      aria-hidden
                       />
                    speel opnieuw
                  </button>
                </li>
              </ul>
            </div>
            <div
              className={'rechts'}
              >
              {this.props.children}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

Resultaat.propTypes = {
  handleStart: React.PropTypes.func,
  score: React.PropTypes.number,
  resultaten: React.PropTypes.array,
  children: React.PropTypes.any
}

export default Resultaat
