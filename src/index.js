import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga4"

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


ReactGA.initialize("G-WGBFV4EW3T");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
