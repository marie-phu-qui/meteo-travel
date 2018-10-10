import React from 'react'
import { connect } from "react-redux";
import {fetchMeteo} from '../actions'

import MyWeather from './MyWeather'
import Form from './Form'


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
    
    {/* <Form /> */}

    <p>
      Your weather condition :
    </p>
    {(this.props.meteo) &&
    <MyWeather meteo={this.props.meteo}/>
    }
    <p>
      You should go : 
    </p>

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