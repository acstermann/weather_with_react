import React, { useState } from "react";
import "./styles.css";

export default function TemperatureUnit(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit == "celsius") {
    return (
      <div className="TemperatureUnit">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <a id="celsiusUnit" href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureUnit">
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="unit">
          <a id="fahrenheitUnit" href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          |°F
        </span>
      </div>
    );
  }
}
