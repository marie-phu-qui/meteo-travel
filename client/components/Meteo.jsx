import React from 'react'
import { connect } from "react-redux";

import {fetchMeteo} from '../actions'


class Meteo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

render() {
  return (
  <div className='meteo-container'>
    <p>
        Meteo
    </p>
    <form>
      <input className='user-input' type='text' name='unit' placeholder='unit'></input>
      <input className='user-input' type='text' name='city' placeholder='city'></input>
      <input className='btn' type='button' value='submit'></input>
    </form>
    <p>
      You should go : 
    </p>
    {/* {this.props.meteo && JSON.parse(this.props.meteo).map((meteo, i) => {
      return (
      <div key={i++} temperature={(this.props.language)? this.props.meteo(meteo.temperature) : (article.temperature)} url={article.url} >
      </div>
      )
    }) } */}
  </div>
  )}
}


const mapStateToProps = state => ({
  meteo: state.meteo,
})

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchMeteo())
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Meteo);