import React from 'react'
import { connect } from "react-redux";

import {fetchMeteo} from '../actions'
import MyWeather from './MyWeather'


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

    
    <div>

    <form className="form-inline"> 
    <label className="sr-only" htmlFor="inlineFormInput">city</label> 
    <input className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="City"/> 
    <label className="sr-only" htmlFor="inlineFormInputGroup">country</label> 
    
    <div className="input-group mb-2 mr-sm-2 mb-sm-0"> 
    <div className="input-group-addon">in
    </div> 
    <input className="form-control" id="inlineFormInputGroup" placeholder="Country"/>
    </div> 

    <div className="btn-group" data-toggle="buttons"> 
    
    <label className="btn btn-primary active"> 
    <input type="radio" name="unit" value="metric" checked=""/>metric 
    </label> 
    <label className="btn btn-primary"> 
    <input type="radio" name="unit" value="imperial"/> imperial 
    </label> 

    <input className='btn btn-primary btn-lg btn-block' type='button' value='submit'/>
    </div>
    </form>
    </div>

    <p>
      Your weather condition :
    </p>
    {(this.props.meteo) &&
    <MyWeather city={this.props.meteo[0].city} country={this.props.meteo[0].country} weather={this.props.meteo[0].weather_condition} temperature={this.props.meteo[0].temperature} humidity={this.props.meteo[0].humidity} pressure={this.props.meteo[0].pressure}/>
    }
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