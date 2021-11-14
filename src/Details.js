import React, { useState } from "react";
import "./styles.css";
import Search from "./Search";

export default function Details(props) {
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [mintemp, setMintemp] = useState(null);
  let [maxtemp, setMaxtemp] = useState(null);
  let [felttemperature, setFelttemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState("");
  let [date, setDate] = useState(null);

  function showTemperature(response) {
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setMintemp(response.data.main.temp_min);
    setMaxtemp(response.data.main.temp_max);
    setFelttemperature(response.data.main.feels_like);
    setDescription(response.data.weather[0].description);
    setDate({
      date: new Date(response.data.dt * 1000),
    });
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  return (
    <div className="row2">
      <div className="col-12">Details for today:</div>
      <div className="row">
        <div className="col-6">
          Humidity: {humidity}%<span id="Humidity"></span>
        </div>
        <div className="col-6">
          Wind: {wind} km/h<span id="Wind"></span>
        </div>
        <div className="col-6">
          Min. temp: {Math.round(mintemp)}°C<span id="MinTemperature"></span>
        </div>
        <div className="col-6">
          Max. temp: {Math.round(maxtemp)}°C<span id="MaxTemperature"></span>
        </div>
        <div className="col-6">
          Felt temperature: {Math.round(felttemperature)}°C
          <span id="FeltTemperature"></span>
        </div>
        <div className="col-6">
          Description: {description}
          <span id="description"></span>
        </div>
      </div>
    </div>
  );
}
