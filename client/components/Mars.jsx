import React from "react";

import { connect } from "react-redux";

import {fetchMars} from '../actions'

const Mars = props => {
    console.log('mars : ',props.mars)
    return (
      <div>
          <h4>Would I be better of living on Mars ?</h4>
        <p>
          {props.mars.name && props.mars.name}
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