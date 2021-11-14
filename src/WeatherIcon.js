import React from "react";

export default function WeatherIcon(props) {
  return <img src={props.data.icon} alt="icon" />;
}
