import { combineReducers } from 'redux'

const INITIAL_METEO_STATE = null
function meteo(state = INITIAL_METEO_STATE, action) {
  switch (action.type) {
    case "GET_METEO":
      return action.meteo
    default:
      return state
  }
}

export default combineReducers({
    meteo
})