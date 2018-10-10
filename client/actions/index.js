import request from 'superagent'

// Actions to show news data
export const requestDATA = () => {
  return {
    type: "REQUEST_DATA"
  }
}


export const showError = (errorMessage) => {
  return {
    type: "SHOW_ERROR",
    errorMessage: errorMessage
  }
}

export const receiveMeteo = (meteo) => {
  return {
    type: "RECEIVE_METEO",
    meteo: meteo
  }
}

export const receiveMars = (mars) => {
  return {
    type: "RECEIVE_MARS",
    mars: mars
  }
}

// Fetching from WEATHER API
export function fetchMeteo() {
  return (dispatch) => {
    dispatch(requestDATA())
    return request
      .get('/api/v2.5/earth-meteo')
      .then(res => {
        return dispatch(receiveMeteo(JSON.parse(res.text)))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

// Fetching from MARS API
export function fetchMars() {
    return (dispatch) => {
      dispatch(requestDATA())
      return request
        .get('/api/mars-meteo')
        .then(res => {
          return dispatch(receiveMars(JSON.parse(res.text)[0]))
        })
        .catch(err => {
          console.log(err)
          dispatch(showError(err.message))
        })
    }
  }