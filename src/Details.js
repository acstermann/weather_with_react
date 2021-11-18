import React from "react";
import "./styles.css";

export default function Details(props) {
  return (
    <div className="row2">
      <div className="col-12">Details for today:</div>
      <br />

      <div className="col-6">
        <strong>Humidity: </strong>
        {props.data.humidity}%<span id="Humidity"></span>
      </div>
      <div className="col-6">
        <strong>Wind: </strong>
        {props.data.wind} km/h<span id="Wind"></span>
      </div>
      <div className="col-6">
        <strong>Min. temp: </strong>
        {Math.round(props.data.minTemp)}°C
        <span id="MinTemperature"></span>
      </div>
      <div className="col-6">
        <strong>Max. temp: </strong>
        {Math.round(props.data.maxTemp)}°C
        <span id="MaxTemperature"></span>
      </div>
      <div className="col-6">
        <strong>Felt temperature: </strong>
        {Math.round(props.data.feltTemperature)}°C
        <span id="FeltTemperature"></span>
      </div>
      <div className="col-6">
        <strong>Description: </strong>
        {props.data.description}
        <span id="description"></span>
      </div>
    </div>
  );
}
