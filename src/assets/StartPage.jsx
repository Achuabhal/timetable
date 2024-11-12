import React from 'react';
import './StartPage.css';

const StartPage = ({ startQuiz }) => {
  return (
    <div className="start-page">
      <h1>Welcome to the Quiz</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default StartPage;
