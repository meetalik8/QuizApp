import React, { useState } from "react";
import "./Styling/NameInput.css";

const NameInput = ({ handleStartQuiz }) => {
  const [name, setName] = useState("");

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };

  const startQuiz = () => {
    if (name.trim() !== "") {
      handleStartQuiz(name);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      startQuiz();
    }
  };

  return (
    <div className="name-section">
      <label id="label-text">
        Enter your name
        <input
          id="input-field"
          type="text"
          value={name}
          onChange={handleNameInputChange}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button id="enter-button" onClick={startQuiz} disabled={!name.trim()}>
        Start
      </button>
    </div>
  );
};

export default NameInput;
