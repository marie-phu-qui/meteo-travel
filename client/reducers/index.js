import { combineReducers } from 'redux'


const INITIAL_METEO_STATE = null
function meteo(state = INITIAL_METEO_STATE, action) {
  switch (action.type) {
    case "REQUEST_DATA":
      return true
    case "RECEIVE_METEO":
      return false
    case "SHOW_ERROR":
      return false
    default:
      return state
  }
}

export default combineReducers({
    meteo
})