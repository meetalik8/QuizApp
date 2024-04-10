import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from React Router
import "./Styling/Quiz.css";

const QuizResult = ({ score, name }) => {
  return (
    <div className="result-section">
      <p>Hello, {name}! Here's your quiz result:</p>
      <p>You scored: {score} out of 12</p>
      <Link to="/">
        <button>Play Again</button>
      </Link>
    </div>
  );
};

export default QuizResult;
