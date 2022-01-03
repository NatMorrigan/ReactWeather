
import React from "react";
import "./App.css";



import Weather from "./Weather";
import GitHubLink from "./GitHubLink";

export default function App() {
  return (
    <div className="App">   
    <div className = "container">
    <div className="col-6">

    <div className="input-group mb-3">
        {" "}
        <Weather />{" "}
    </div>
    </div>
    <div className="row">
        <div className="container-left-side col-5">
            <div className="row">
              <div className="city" id="searchedCity"></div>
            </div>
            <div className="row">
              <h5 id="date"></h5>
            </div>
            <span id="weather-description"> </span>
            <div className ="clearfix weather-temperature">
              <img src="" 
              alt="weatherCondition"
              id="icon"
              className="float-left"/>
            </div>
       <i className="fas fa-thermometer-half">
              Temperature: <span id="mainTemperature"> </span>°C   
            </i>
            <br />
            <i className="fas fa-tint">Humidity: <span id="humidity"></span> % </i>
            <br />
            <i className="fas fa-wind">Wind speed: <span id="wind"></span> km/h </i>
            <br />
            <br />
            <br />
        </div>
        <div className="col-7 city_right_side" id="forecast">
          <div className="container-header-side">
          </div>
      </div>
    

    </div><div className="Links">
        <footer>
          This project is created by {" "} <a href="https://www.linkedin.com/in/natalie-hertsovska-70976721a/" target="_blank">Natalia Hertsovska</a> {" "} and is {" "}open-sourced on <GitHubLink />
        </footer>
        </div>
      </div>
      </div>
  );

}
