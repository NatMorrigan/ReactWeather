
import React from "react";
import "./App.css";



import WeatherSearch from "./Weather";
import GitHubLink from "./GitHubLink";

export default function App() {
  return (
    <div className="App">   
    <div className = "container">
    <div className="input-group mb-3">
        {" "}
        <WeatherSearch />{" "}
    </div>
    </div><div className="Links">
        <footer>
          This project is created by {" "} <a href="https://www.linkedin.com/in/natalie-hertsovska-70976721a/" target="_blank">Natalia Hertsovska</a> {" "} and is {" "}open-sourced on <GitHubLink />
        </footer>
        </div>
      </div>
  );

}
