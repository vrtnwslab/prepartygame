import React, {Component} from 'react'
import SvgContainer from '../SvgContainer/SvgContainer'

export default class Welkom extends Component {
  render () {
    const {handleStart} = this.props
    return (
      <div
        className={'card'}
        id={'welkom'}
        >
        <div
          className={'border'}
          >
          <section>
            <header>
              <h2>
                Ben jij een drankorgel?
              </h2>
            </header>
            <p>
              {`Ben je jong en ga je vaak stappen? Of heb je tieners in huis? Dan ken je "bingedrinken" en het "preparty" fenomeen vast wel: een quiz of een spelletje spelen om in de sfeer te komen. Bij elk fout antwoord moet je een shot drinken. Dat levert op korte tijd heel wat alcohol op.`}
            </p>
            <ul>
              <li>
                <button
                  onClick={handleStart}
                  className={'welkom-knop'}
                  >
                  START
                </button>
              </li>
            </ul>
            <p
              className={'meer-pano'}
              >
              {`BINGEDRINKEN BIJ TIENERS`}
            </p>
            <p
              className={'meer-pano'}
              >
              {`vanavond in`}
            </p>
            <a
              href={'https://www.een.be/pano/deze-week-in-pano'}
              target={'_blank'}
              >
              <div
                className={'logo-link'}
                >
                <SvgContainer
                  width={104.8}
                  height={30.3}
                  >
                  <g>
                    <path
                      fill='#1B2935'
                      d='M0,0.7h6.8v2.7h0.1c1.5-2,3.7-3.4,6.7-3.4c5.9,0,9.5,5.1,9.5,11.8c0,7.2-3.9,11.8-9.7,11.8
                      c-2.9,0-4.9-1.1-6.3-3H7.1v9.7H0V0.7z M16,12.1c0-3.8-1.4-6.4-4.5-6.4c-3.1,0-4.7,2.7-4.7,6.4c0,3.6,1.7,6.1,4.8,6.1
                      C14.4,18.2,16,15.8,16,12.1'
                      />
                    <path
                      fill='#1B2935'
                      d='M24.1,16.7c0-4.9,3.9-6.4,8.5-7c4.2-0.5,5.7-1,5.7-2.5c0-1.4-0.9-2.4-3-2.4c-2.3,0-3.4,1-3.6,2.9h-6.5
                      C25.3,3.6,28.5,0,35.2,0c3.4,0,5.6,0.6,7.2,1.8c1.9,1.4,2.8,3.6,2.8,6.4v11.2c0,1.8,0.2,2.8,0.8,3.2v0.3h-6.9
                      c-0.3-0.5-0.6-1.3-0.7-2.5h-0.1c-1.3,1.9-3.3,3-6.6,3C27.3,23.5,24.1,21.1,24.1,16.7 M38.5,15v-2.7c-0.9,0.5-2.2,0.8-3.7,1.2
                      c-2.7,0.6-3.9,1.3-3.9,3c0,1.8,1.3,2.5,3,2.5C36.7,19,38.5,17.4,38.5,15'
                      />
                    <path
                      fill='#1B2935'
                      d='M48.3,0.7h6.8v3h0.1C56.9,1.3,59,0,62.1,0c4.9,0,7.7,3.5,7.7,8.4v14.5h-7.1V9.9c0-2.4-1.2-4-3.5-4
                      c-2.4,0-3.9,2-3.9,4.7v12.3h-7.1V0.7z'
                      />
                    <path
                      fill='#1B2935'
                      d='M71.7,11.8C71.7,5.1,76.4,0,83.6,0c7.2,0,11.9,5.1,11.9,11.8c0,6.7-4.7,11.8-11.9,11.8
                      C76.4,23.6,71.7,18.5,71.7,11.8 M88.3,11.8c0-4-1.7-6.8-4.7-6.8c-3.1,0-4.7,2.7-4.7,6.8c0,4,1.6,6.7,4.7,6.7
                      C86.6,18.6,88.3,15.9,88.3,11.8'
                      />
                    <path
                      fill='#1B2935'
                      d='M96.6,20.1v2.7h8.3v-8.3h-2.7C99.1,14.5,96.6,17,96.6,20.1'
                      />
                  </g>
                </SvgContainer>
              </div>
            </a>
            <p
              className={'meer-pano'}
              >
              {`om 21.30 uur.`}
            </p>
          </section>
        </div>
      </div>
    )
  }
}
