export default function reducer (
  state = {
    projectName: 'prepartygame',
    realtime: true,
    fetched: false
  }, action) {
  switch (action.type) {
    case 'FETCH_FILE':
    case 'FETCH_DATA_FULFILLED': {
      return {
        ...state,
        fetched: true
      }
    }
    default: {
      return state
    }
  }
}
