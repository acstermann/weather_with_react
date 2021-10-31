import React, { useState } from "react";
import "./styles.css";

export default function Details() {
  return (
    <div className="row2">
      <div className="col-12">Details for today:</div>
      <div className="row">
        <div className="col-6">
          Humidity: <span id="Humidity"></span>
        </div>
        <div className="col-6">
          Wind: <span id="Wind"></span>
        </div>
        <div className="col-6">
          Min. temp: <span id="MinTemperature"></span>
        </div>
        <div className="col-6">
          Max. temp: <span id="MaxTemperature"></span>
        </div>
        <div className="col-6">
          Felt temperature: <span id="FeltTemperature"></span>
        </div>
        <div className="col-6">
          Description: <span id="description"></span>
        </div>
      </div>
    </div>
  );
}
