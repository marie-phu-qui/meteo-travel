import React from "react";

const MyWeather = props => {
    console.log(props)
    return (
      <div>
          <h4>{props[0].city}, {props[0].country}</h4>
        <p>
          {props}
        </p>
      </div>
    );
  };

export default MyWeather