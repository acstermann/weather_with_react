import "./App.css";
import React from "react";
import "./styles.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Hamburg" />

        <p>
          <a
            href="https://github.com/acstermann/weather_with_react"
            className="ending"
          >
            Open-source code{" "}
          </a>
          by Ann-Christin Stermann
        </p>
      </div>
    </div>
  );
}

export default App;
