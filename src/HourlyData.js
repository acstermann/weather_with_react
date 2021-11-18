import React from "react";
import "./styles.css";
import WeatherIcon from "./WeatherIcon";

export default function HourlyDate(props) {
  function temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}°C`;
  }
  function hour() {
    let hour = new Date(props.data.dt * 1000);
    let clock = hour.getHours();
    if (clock < 10) {
      clock = `0${clock}`;
    }
    return `${clock}:00`;
  }
  return (
    <div className="hourlyData">
      <div>
        <span id="now"> {hour()} </span>
        <span> o'clock</span>
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div id="tempNow">{temperature()}</div>
    </div>
  );
}
