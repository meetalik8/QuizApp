  // LevelSelection.js
  import React from "react";
  import "./Styling/LevelSelection.css";

  const LevelSelection = ({ handleLevelSelect, name }) => {
    return (
      <div className="level-section">
        <p id="Text">Hello, {name}! Select a level:</p>
        <div className="button-container">
          <button onClick={() => handleLevelSelect("easy")}>Easy</button>
          <button onClick={() => handleLevelSelect("medium")}>Medium</button>
          <button onClick={() => handleLevelSelect("hard")}>Hard</button>
        </div>
      </div>
    );
  };

  export default LevelSelection;
