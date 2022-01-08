import React from "react";
import "./App.css";
import Weather from "./Weather";




export default function App () {
return <div className="App">
    <div className="container">
 <Weather defaultCity="Bratislava" />
    <footer>
This project was created by Natalia Hertsovska and is {" "} 
<a href="https://github.com/NatMorrigan/ReactWeather" target="_blank" rel="noreferrer">
open-sourced on GitHub
</a> 
   </footer>
    </div>
     </div>
}


