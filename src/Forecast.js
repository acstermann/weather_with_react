import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showForecast(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0) {
              return (
                <div className="col-12" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "c4c19c451f8b4a9b91d9624a7cb81259";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showForecast);
    return null;
  }
}
