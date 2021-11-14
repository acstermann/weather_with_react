import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import Hourly from "./Hourly";
import FormattedDate from "./FormattedDate";

export default function Search() {
  let [city, setCity] = useState("");
  let [sentence, setSentence] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [mintemp, setMintemp] = useState(null);
  let [maxtemp, setMaxtemp] = useState(null);
  let [felttemperature, setFelttemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState("");
  let [datum, setDatum] = useState("");

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setMintemp(response.data.main.temp_min);
    setMaxtemp(response.data.main.temp_max);
    setFelttemperature(response.data.main.feels_like);
    setDescription(response.data.weather[0].description);
    setSentence(`${city}`);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setDatum({
      datum: new Date(response.data.dt * 1000),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c524de42a382642a117a494851a42046";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function showCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <img src={icon} alt="icon" />
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Change city"
          id="search-text-input"
          onChange={showCity}
        />
        <input type="submit" value="Search" />
      </form>
      <button>Current location</button>
      <h1 className="city" id="city">
        {sentence}
      </h1>
      <h2>
        <span id="temperature">{Math.round(temperature)}</span>
        <span>
          <a href="/" id="celsiusUnit" className="active">
            °C |
          </a>
        </span>
        <span>
          {" "}
          <a href="/" id="fahrenheitUnit">
            °F
          </a>
        </span>
      </h2>
      <h4>Last updated on:</h4>
      <FormattedDate date={setDatum.datum} />
      <Hourly />
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
    </div>
  );
}
