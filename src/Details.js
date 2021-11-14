import React from "react";
import "./styles.css";

export default function Details(props) {
  return (
    <div className="row2">
      <div className="col-12">Details for today:</div>
      <div className="row">
        <div className="col-6">
          Humidity: {props.data.humidity}%<span id="Humidity"></span>
        </div>
        <div className="col-6">
          Wind: {props.data.wind} km/h<span id="Wind"></span>
        </div>
        <div className="col-6">
          Min. temp: {Math.round(props.data.minTemp)}°C
          <span id="MinTemperature"></span>
        </div>
        <div className="col-6">
          Max. temp: {Math.round(props.data.maxTemp)}°C
          <span id="MaxTemperature"></span>
        </div>
        <div className="col-6">
          Felt temperature: {Math.round(props.data.feltTemperature)}°C
          <span id="FeltTemperature"></span>
        </div>
        <div className="col-6">
          Description: {props.data.description}
          <span id="description"></span>
        </div>
      </div>
    </div>
  );
}
