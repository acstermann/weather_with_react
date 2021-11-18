import React from "react";
import "./styles.css";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="card">
      <div className="card-body">
        <div id="tomorrow">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div id="info-tomorrow">
          {maxTemperature()} / {minTemperature()}
        </div>
      </div>
    </div>
  );
}
