import {combineReducers} from 'redux'
import data from './reducer_data'
import settings from './reducer_settings'
import game from './reducer_game'

export default combineReducers({
  data,
  settings,
  game
})
