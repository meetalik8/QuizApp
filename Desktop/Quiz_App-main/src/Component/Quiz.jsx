// Quiz.js
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import NameInput from "./NameInput";
import LevelSelection from "./LevelSelection";
import QuestionPage from "./QuestionPage";
import QuizResult from "./QuizResult";
import { Route, Routes } from "react-router-dom";

const Quiz = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [nameFilled, setNameFilled] = useState(false);
  const [levelSelected, setLevelSelected] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleStartQuiz = (enteredName) => {
    setName(enteredName);
    setNameFilled(true);
    navigate("/select-level");
  };

  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel);
    setLevelSelected(true);
    navigate("/questions");
  };

  const handleQuizComplete = (userScore) => {
    setScore(userScore);
    navigate("/result");
  };

  return (
    <div className="quiz-container">
      <Routes>

          <Route path="/" element={<NameInput handleStartQuiz={handleStartQuiz} />} />
          <>
            <Route
              path="/select-level"
              element={<LevelSelection handleLevelSelect={handleLevelSelect} name={name} />}
            />
            {levelSelected ? (
              <Route
                path="/questions"
                element={
                  <QuestionPage
                    level={level}
                    handleQuizComplete={handleQuizComplete}
                  />
                }
              />
            ) : (
              <Route path="/questions" element={<Navigate to="/select-level" />} />
            )}
            <Route
              path="/result"
              element={<QuizResult score={score} name={name} quizData={[]} />}
            /> 
          </>
      </Routes>
    </div>
  );
};

export default Quiz;
