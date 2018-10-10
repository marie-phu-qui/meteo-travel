import React from "react";

const MyWeather = props => {
    return (
      (props.meteo) &&  
      <div>
          <h4>{props.meteo[0].city}, {props.meteo[0].country}</h4>
        <p>
          Weather : {props.meteo[0].weather_condition}, {props.meteo[0].average_temp} *C
        </p>
      </div>
    );
  };

export default MyWeather