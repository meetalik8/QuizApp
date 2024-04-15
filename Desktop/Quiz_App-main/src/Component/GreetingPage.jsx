// GreetingPage.js
import React from "react";
import "./Styling/GreetingPage.css";

const GreetingPage = ({ navigateToQuiz }) => {
  return (
    <div className="greetContainer">
      <h1>Welcome to our Quiz App!</h1>
      <p>
        Made by&nbsp;
        <a href="https://github.com/meetalik8">Meetali</a>,
        <a href="https://github.com/YashSKalia">Yash</a> &
        <a href="https://github.com/HarshM2318"> Harsh</a><br></br>
        for our <em>MAD & PWA Lab!</em>
      </p>
      <button className="getButton" onClick={navigateToQuiz}>Get Started!</button>
    </div>
  );
};

export default GreetingPage;
