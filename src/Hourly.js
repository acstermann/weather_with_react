import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import HourlyData from "./HourlyData";

export default function Hourly(props) {
  let [loaded, setLoaded] = useState(false);
  let [hourly, setHourly] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showHourlyForecast(response) {
    setHourly(response.data.hourly);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Hourly">
        <span className="row">
          {hourly.map(function (hourlyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <HourlyData data={hourlyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </span>
      </div>
    );
  } else {
    let apiKey = "c4c19c451f8b4a9b91d9624a7cb81259";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showHourlyForecast);
    return null;
  }
}
