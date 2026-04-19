import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DarkLight from "./darklight";
import Lilia from "./Lilia";
import reportWebVitals from "./reportWebVitals";

const liliaBTN = document.getElementById("lilia");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkLight />
    <Lilia />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
