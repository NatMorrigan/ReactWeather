
import React from "react";
import "./App.css";


import "bootstrap/dist/css/bootstrap.css";
import WeatherSearch from "./WeatherSearch";
import GitHubLink from "./GitHubLink";

export default function App() {
  return (
    <><div className="App">   
    <div className="input-group mb-3">
        {" "}
        <WeatherSearch />{" "}
    </div>
    </div><div className="Links">
        <footer>
          <GitHubLink />
        </footer>
      </div></>
  );

}
