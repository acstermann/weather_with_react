import "./App.css";
import React from "react";
import "./styles.css";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <Search />
      <Forecast />
      <p>
        <a
          href="https://github.com/acstermann/Weather_App_with_React"
          className="ending"
        >
          Open-source code{" "}
        </a>
        by Ann-Christin Stermann
      </p>
    </div>
  );
}

export default App;
