import React, { useState, useEffect } from "react";
import quizData from "./quizData";
import "./Styling/QuestionPage.css";

const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const QuestionPage = ({ level, handleQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledQuizData, setShuffledQuizData] = useState([]);

  useEffect(() => {
    if (shuffledQuizData.length === 0) {
      const shuffledData = shuffleArray(quizData);
      setShuffledQuizData(shuffledData);
    }
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  }, [level, shuffledQuizData]);

  const handleAnswerClick = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);

      if (option === shuffledQuizData[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      setTimeout(() => {
        if (currentQuestion < 11) {
          setSelectedOption(null);
          setCurrentQuestion(currentQuestion + 1);
        } else {
          handleQuizComplete(score);
        }
      }, 1000);
    }
  };

  if (shuffledQuizData.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="question-container">
          <h2>{shuffledQuizData[currentQuestion].question}</h2>
          <div className="options-container">
            {shuffledQuizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption === option
                    ? option === shuffledQuizData[currentQuestion].correctAnswer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
