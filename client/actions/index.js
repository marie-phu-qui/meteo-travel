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
    type: "RECEIVE_Meteo",
    meteo: meteo
  }
}

// Fetching from API
export function fetchMeteo() {
console.log('hello 0')
  return (dispatch) => {
    console.log('hello 1')
    dispatch(requestDATA())
    return request
      .get('/api/v2.5/earth-meteo')
      .then(res => {
        console.log("hello 2")
        setTimeout(() => dispatch(receiveMeteo(res)), 4000)
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}