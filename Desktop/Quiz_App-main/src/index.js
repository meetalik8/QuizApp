import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Quiz from "./Component/Quiz";

ReactDOM.render(
  <Router>
    <Quiz />
  </Router>,
  document.getElementById("root")
);

