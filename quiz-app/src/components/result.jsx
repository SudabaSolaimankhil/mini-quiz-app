import { useState } from "react";

function Results({ userAnswers, questionBank, restartQuizFunction }) {
  //   console.log(questionBank);

  function getScore() {
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });
    return finalScore;
  }

  const userFinalScore = getScore();
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {userFinalScore}/{questionBank.length}
      </p>
      <button className="restart-button" onClick={restartQuizFunction}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
