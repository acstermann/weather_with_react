import React from "react";
import "./styles.css";

export default function Hourly() {
  return (
    <div className="row">
      <div className="col">
        <span id="now"> Now </span>
        <span> o'clock</span>
        <span id="tempNow">19°C</span>
      </div>
      <div className="col">
        <span id="oneHour">9pm </span>
        <span> o'clock</span>
        <span id="tempOneHour">19°C</span>
      </div>
      <div className="col">
        <span id="twoHours">10pm </span>
        <span> o'clock</span>
        <span id="tempTwoHours">19°C</span>
      </div>
      <div className="col">
        <span id="threeHours">11pm </span>
        <span> o'clock</span>
        <span id="tempThreeHours">19°C</span>
      </div>
      <div className="col">
        <span id="fourHours">12am </span>
        <span> o'clock</span>
        <span id="tempFourHours">19°C</span>
      </div>
      <div className="col">
        <span id="fiveHours">1am </span>
        <span> o'clock</span>
        <span id="tempFiveHours">19°C</span>
      </div>
    </div>
  );
}
