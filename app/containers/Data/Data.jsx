import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from 'actions'
import Layout from 'components/layout/layout'
import SpelHeader from 'components/SpelHeader/SpelHeader'

let datafile = null

// uncomment for local data
// datafile = require("data/data.json");

class Data extends Component {
  constructor (props) {
    super(props)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleStart = this.handleStart.bind(this)
  }

  componentWillMount () {
    const {
            settings,
            dispatch
        } = this.props

    if (datafile) {
      dispatch(actions.fetchFile(datafile))
    } else {
      if (settings.realtime) {
        dispatch(actions.fetchRealtime(settings.projectName))
      } else {
        dispatch(actions.fetchOnce(settings.projectName))
      }
    }
  }

  handleAnswer (correct) {
    const {
      dispatch,
      game
    } = this.props

    if (correct) {
      dispatch(actions.answerQuestion({
        score: game.score,
        correct: true
      }))
    } else {
      const newShots = game.shots.map((s, i) => {
        if (i === game.vraag) {
          return 1
        } else {
          return s
        }
      })
      dispatch(actions.answerQuestion({
        score: game.score + 1,
        correct: false
      }))
      dispatch(actions.fillShots(newShots))
    }
  }

  handleStart () {
    const {
      dispatch,
      data
    } = this.props
    const shots = data.vragen.map(() => 0)

    dispatch(actions.fillShots(shots))
    dispatch(actions.startGame())
  }

  handleNext () {
    const {
      dispatch,
      game
    } = this.props
    dispatch(actions.nextQuestion(game.vraag + 1))
  }

  render () {
    const {
      settings,
      data,
      game
    } = this.props

    if (!settings.fetched) {
      return <div className='loading' />
    }

    return (
      <div>
        <SpelHeader />
        <Layout
          data={data}
          game={game}
          onStart={this.handleStart}
          onNext={this.handleNext}
          onAnswer={this.handleAnswer}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  'data': store.data,
  'settings': store.settings,
  'game': store.game
})

export default connect(mapStateToProps)(Data)
