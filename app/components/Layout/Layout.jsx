import React, { Component } from 'react'
import Radium from 'radium'
import ShotList from 'components/ShotList/ShotList'
import Welkom from 'components/Welkom/Welkom'
import Antwoord from 'components/Antwoord/Antwoord'
import Vraag from 'components/Vraag/Vraag'
import Resultaat from 'components/Resultaat/Resultaat'
import Score from 'components/Score/Score'

require('font-awesome-sass-loader')

class Layout extends Component {
  constructor (props) {
    super(props)
    this.handleTrue = this.handleTrue.bind(this)
    this.handleFalse = this.handleFalse.bind(this)
  }

  handleTrue () {
    const {
      onAnswer
    } = this.props
    onAnswer(true)
  }

  handleFalse () {
    const {
      onAnswer
    } = this.props
    onAnswer(false)
  }

  render () {
    const {
      game,
      data,
      onStart,
      onNext
    } = this.props

    const shots = game.shots.map((d, i) => {
      return (
        <ShotList
          status={d}
          key={i}
          score={game.score}
          aantalVragen={data.vragen.length}
          vraagNummer={i}
          current={i >= game.vraag ? 0 : 1}
          />
      )
    })

    const margin = game.vraag < data.vragen.length ? game.vraag : data.vragen.length - 1
    const styles = {
      currentLine: {
        marginLeft: `${margin * 6.75}%`,
        transition: 'all 0.5s'
      }
    }
    if (game.score !== false) {
      if (game.antwoord) {
        return (
          <div>
            <div
              id={'shotlist'}
              >
              <div
                className={'shots'}
                >
                {shots}
              </div>
              <div
                className={'line-current'}
                style={styles.currentLine}
              />
            </div>
            <Antwoord
              correct={game.correct}
              uitleg={data.vragen[game.vraag].uitleg}
              handleNext={onNext}
              />
            <Score
              score={game.score}
            />
          </div>
        )
      } else {
        if (game.vraag < data.vragen.length) {
          return (
            <div>
              <div
                id={'shotlist'}
                >
                <div
                  className={'shots'}
                  >
                  {shots}
                </div>
                <div
                  className={'line-current'}
                  style={styles.currentLine}
                   />
              </div>
              <Vraag
                score={game.score}
                vraag={data.vragen[game.vraag].vraag}
                antwoorden={data.vragen[game.vraag].antwoorden}
                handleTrue={this.handleTrue}
                handleFalse={this.handleFalse}
                />
              <Score
                score={game.score}
                />
            </div>
          )
        } else {
          return (
            <div>
              <div
                id={'shotlist'}
                >
                <div
                  className={'shots'}
                  >
                  {shots}
                </div>
                <div
                  className={'line-current'}
                  style={styles.currentLine}
                   />
              </div>
              <Resultaat
                resultaten={data.resultaten}
                handleStart={onStart}
                score={game.score}
                aantalVragen={data.vragen.length}
                >
                <Score
                  score={game.score}
                  />
              </Resultaat>
            </div>
          )
        }
      }
    } else {
      return (
        <div>
          <Welkom
            handleStart={onStart}
          />
        </div>
      )
    }
  }
}

export default Radium(Layout)
