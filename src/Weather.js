import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState ({ready: false})
  ;
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.mail.humidity,
      date: "Tuesday  18:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
         <form>
           <div className="row">
             <div className="col-9">
      <input
        type="search"
        placeholder="Enter a city"
        className="form-control"
        autofocus="on"
      />
      </div>
      <div className="col-3"></div>
      <input
      type="submit"
      value="search"
      className="btn btn-primary" />
           </div>                                       
  </form>
        <div className="container-left-side col-5">
            <div className="row">
              <div className="city">{weatherData.city}</div>
            </div>
            <div class="row">
              <h5 className="date"> {weatherData.date} </h5>
            </div>
            <span className="weather-description">{weatherData.description} </span>
            <div className="clearfix weather-temperature">
              <img src="{weatherData.description}" 
              alt="weatherCondition"
              className="float-left"/>
            </div>
       <i className="fas fa-thermometer-half">
              Temperature: <span className="temperature">{Math.round(weatherData.temperature)} </span>°C   
            </i>
            <br />
            <i className="fas fa-tint">Humidity:{weatherData.humidity} <span id="humidity"></span> % </i>
            <br />
            <i className="fas fa-wind">Wind speed: {weatherData.wind} <span id="wind"></span> km/h </i>
            <br />
            <br />
            <br />
        </div>
        </div>
    )
  } else {
    const apiKey = "ab8e7ef210556986d1c9a75d6007b825";
    let city = "Nitra";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading" ;
  }
}

  


  