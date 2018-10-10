import React from "react";

const MyWeather = props => {
    console.log('meteo : ',props.meteo)
    return (
      <div>
          <h4>{props.city}, {props.country}</h4>
        <p>
          hello, hello, hello
        </p>
      </div>
    );
  };

export default MyWeather