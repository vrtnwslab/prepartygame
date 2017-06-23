/* eslint-disable no-unreachable */
export default function reducer (
  state = {
    vraag: false,
    antwoord: false,
    score: false,
    correct: false,
    shots: []
  },
  action) {
  switch (action.type) {
    case 'FILL_SHOTS': {
      return {
        ...state,
        shots: action.payload
      }
    }
    case 'GO_TO_NEXT': {
      return {
        ...state,
        vraag: action.payload,
        antwoord: false
      }
    }
    case 'ANSWER_QUESTION': {
      return {
        ...state,
        score: action.payload.score,
        correct: action.payload.correct,
        antwoord: true
      }
    }
    case 'START_GAME': {
      return {
        ...state,
        vraag: 0,
        antwoord: false,
        score: 0
      }
    }
    default: {
      return state
    }
  }
}
