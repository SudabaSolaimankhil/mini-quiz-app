// Results component displays the user's final quiz score
// and provides an option to restart the quiz.

function Results({ userAnswers, questionBank, restartQuizFunction }) {
  // Calculate how many answers are correct.
  function getScore() {
    // Start the score at 0.
    let finalScore = 0;

    // Loop through all answers selected by the user.
    userAnswers.forEach((answer, index) => {
      // Compare the user's answer with the correct answer
      // from the question bank.
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });

    // Return the total number of correct answers.
    return finalScore;
  }

  // Call getScore() to calculate the user's final score.
  const userFinalScore = getScore();

  return (
    <div>
      {/* Display a message when the quiz is completed. */}
      <h2>Quiz Completed!</h2>

      {/* Display the user's score and the total number of questions. */}
      <p>
        Your Score: {userFinalScore}/{questionBank.length}
      </p>

      {/* 
        Call restartQuizFunction when the user clicks the button.
        The function is received from the Quiz component through props.
      */}
      <button className="restart-button" onClick={restartQuizFunction}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
