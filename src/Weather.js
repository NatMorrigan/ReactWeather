import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const form = (
    <form>
            <input
              type="text"
              class="form-control"
              placeholder="Enter a city"
              aria-label="Searched city"
              aria-describedby="button-addon2"
              autocomplete="off"
              autofocus="on"
              id="city-input"
              onChange={getCity}
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="search-button-head"
              input
              type="submit"
              value="search"
              onClick={handleSubmit}
            >
              Search
            </button>
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="currentCityHead"
            >
              Current city
            </button>                                        
        </form>
    
  );
  function getCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (city !== "") {
      const apiKey = `ab8e7ef210556986d1c9a75d6007b825`;
      const units = "metric";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(showWeather);
    } else {
      alert(`Please enter a city`);
    }
  }
  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setWindSpeed(Math.round(response.data.wind.speed));
    setHumidity(response.data.main.humidity);
  }
  if (temperature) {
    return (
      <div>
        {form}
        <ul className="Weather">
          <li>Tempurature : {temperature}°C</li>
          <li>Description : {description}</li>
          <li>Wind : {windSpeed} km/h </li>
          <li>Humidity : {humidity}% </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}