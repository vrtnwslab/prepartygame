import firebase from 'firebase'

const
  firebaseConfig = {
    databaseURL: 'https://api-project-7429617504.firebaseio.com',
    apiKey: 'AIzaSyA8p0xYVlP8PIz0KK-2hab1MC9fKJuChiA'
  }

firebase
.initializeApp(firebaseConfig)

export const fetchRealtime = (projectName) => {
  return dispatch => {
    firebase
      .database()
      .ref(`/${projectName}/`)
      .on('value', function (snapshot) {
        dispatch({
          type: 'FETCH_DATA_FULFILLED',
          payload: snapshot.val()
        })
      })
  }
}

export const fetchOnce = (projectName) => {
  return dispatch => {
    firebase
      .database()
      .ref(`/${projectName}/`)
      .once('value')
      .then(
        function (snapshot) {
          dispatch({
            type: 'FETCH_DATA_FULFILLED',
            payload: snapshot.val()
          })
        }
      )
  }
}

export const fetchFile = (data) => ({
  payload: data,
  type: 'FETCH_FILE'
})

export function nextQuestion (payload) {
  return {
    type: 'GO_TO_NEXT',
    payload
  }
}

export function answerQuestion (payload) {
  return {
    type: 'ANSWER_QUESTION',
    payload
  }
}

export function startGame () {
  return {
    type: 'START_GAME'
  }
}

export function fillShots (payload) {
  return {
    type: 'FILL_SHOTS',
    payload
  }
}
