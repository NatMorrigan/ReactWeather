
import React from "react";
import "./App.css";

import GitHubLink from "./GitHubLink";

export default function App() {
  return (
    <div className="App">   
   <div className="Links">
        <footer>
          This project is created by {" "} <a href="https://www.linkedin.com/in/natalie-hertsovska-70976721a/" target="_blank">Natalia Hertsovska</a> {" "} and is {" "}open-sourced on <GitHubLink />
        </footer>
        </div>
      </div>
  );
}
