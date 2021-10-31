import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="card">
        <div className="card-body">
          <span id="tomorrow"></span>
          <span id="info-tomorrow">22°C / 12°C</span>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <span id="twoDays"></span> <span id="info-twoDays">23°C / 13°C </span>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <span id="threeDays"></span>{" "}
          <span id="info-threeDays">23°C / 14°C</span>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <span id="fourDays"></span>
          <span id="info-fourDays">22°C / 14°C</span>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <span id="fiveDays"></span>
          <span id="info-fiveDays">21°C / 14°C</span>
        </div>
      </div>
    </div>
  );
}
