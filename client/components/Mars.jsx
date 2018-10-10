import React from "react";

import { connect } from "react-redux";

import {fetchMars} from '../actions'

const Mars = props => {
    return (
    (props.mars) &&  
      <div>
          <h4>Would I be better of living on {props.mars.name} ?</h4>
        <p>
          {props.mars.weather_condition}, average {props.mars.average_temp} *C 
        </p>
        <p>
          min  {props.mars.min_temp} *C, max  {props.mars.max_temp} *C
        </p>
      </div>
    );
  };

const mapStateToProps = state => ({
mars: state.mars,
})

const mapDispatchToProps = (dispatch) => {
dispatch(fetchMars())
return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Mars);