import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Use BrowserRouter from react-router-dom
import Quiz from "./Component/Quiz";

ReactDOM.render(
  <Router>
    <Quiz />
  </Router>,
  document.getElementById("root")
);
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:", error);
    });
}
