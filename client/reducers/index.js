import { combineReducers } from 'redux'

const INITIAL_METEO_STATE = [{}]
function meteo(state = INITIAL_METEO_STATE, action) {
  switch (action.type) {
    case "RECEIVE_METEO":
      return action.meteo
    default:
      return state
  }
}

const INITIAL_MARS_STATE = [{}]
function mars(state = INITIAL_MARS_STATE, action) {
  switch (action.type) {
    case "RECEIVE_MARS":
      return action.mars
    default:
      return state
  }
}

const LOADING = false
function loading(state = LOADING, action) {
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
    meteo,
    mars,
    loading
})