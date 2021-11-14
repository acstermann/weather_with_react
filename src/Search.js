import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import Hourly from "./Hourly";
import FormattedDate from "./FormattedDate";
import Details from "./Details";
import TemperatureUnit from "./TemperatureUnit";
import WeatherIcon from "./WeatherIcon";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      feltTemperature: response.data.main.feels_like,
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "c524de42a382642a117a494851a42046";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function showCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Search">
        <span>
          <WeatherIcon code={weatherData.icon} />
        </span>
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
          {weatherData.city}
        </h1>
        <TemperatureUnit celsius={weatherData.temperature} />
        <h4>Last updated on:</h4>
        <FormattedDate date={weatherData.date} />
        <Hourly />
        <Details data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
