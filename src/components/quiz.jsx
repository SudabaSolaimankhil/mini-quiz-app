import { useState } from "react";
import Results from "./result";

function Quiz() {
  // Store all quiz questions, answer options, and correct answers.
  const questionBank = [
    {
      question: "What does JSX allow you to write in React?",
      options: ["HTML-like syntax", "SQL queries", "CSS only"],
      answer: "HTML-like syntax",
    },
    {
      question: "Which command creates a new Vite project?",
      options: ["npm start vite", "npx create-vite", "node create-vite"],
      answer: "npx create-vite",
    },
    {
      question: "What is Node.js?",
      options: ["A JavaScript runtime", "A CSS framework", "A database"],
      answer: "A JavaScript runtime",
    },
    {
      question: "What does npm primarily manage?",
      options: ["HTML pages", "JavaScript packages", "Images"],
      answer: "JavaScript packages",
    },
    {
      question: "Which function is used to display React content in the DOM?",
      options: ["root.render()", "root.display()", "root.show()"],
      answer: "root.render()",
    },
  ];

  // Store the user's selected answers.
  // Initially, the array is empty.
  const [userResponse, setResponse] = useState([]);

  // Store the index of the question currently being displayed.
  // The first question has index 0.
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Track whether the quiz has been completed.
  // false = show the quiz
  // true = show the results page
  const [isQuizFinish, setQuizFinish] = useState(false);

  // Reset the quiz so the user can start again.
  function restartQuiz() {
    setQuizFinish(false);
    setCurrentQuestion(0);
    setResponse([]);
  }

  // Handle the user's selection of an answer.
  function handleSelectOption(opt) {
    if (opt !== "") {
      // Use the previous state to create a new array.
      // React state should not be modified directly.
      setResponse((prevResponses) => {
        const updatedResponses = [...prevResponses];

        // Store the selected answer at the current question's index.
        updatedResponses[currentQuestion] = opt;

        // Return the updated array to React.
        return updatedResponses;
      });
    }
  }

  // Move to the next question.
  function GoToNextQuestion() {
    // If there are more questions, move to the next one.
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If this is the last question, finish the quiz.
      setQuizFinish(true);
    }
  }

  // Move to the previous question.
  function GoToPreviouseQuestion() {
    // Make sure we don't go before the first question.
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  // If the quiz is finished, display the Results component
  // instead of the questions.
  if (isQuizFinish) {
    return (
      <Results
        userAnswers={userResponse}
        questionBank={questionBank}
        restartQuizFunction={restartQuiz}
      />
    );
  }

  return (
    <div className="app-container">
      {/* Display the question number. */}
      <p className="question-number">
        Question {currentQuestion + 1} of {questionBank.length}
      </p>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${((currentQuestion + 1) / questionBank.length) * 100}%`,
          }}
        ></div>
      </div>
      {/* Display the current question. */}
      <p className="question">{questionBank[currentQuestion].question}</p>

      {/* 
        Display all answer options for the current question.
        map() creates one button for each option.
      */}
      {questionBank[currentQuestion].options.map((option) => (
        <button
          key={option}
          className={
            "option" +
            // Add the "selected" class if this option
            // is the user's current answer.
            (userResponse[currentQuestion] === option ? " selected" : "")
          }
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        {/* 
          Disable Previous on the first question because
          there is no question before it.
        */}
        <button
          onClick={GoToPreviouseQuestion}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        {/* 
          Disable Next until the user selects an answer
          for the current question.
        */}
        <button
          onClick={GoToNextQuestion}
          disabled={!userResponse[currentQuestion]}
        >
          {/* 
            Change the button text to "Finish Quiz"
            when the user reaches the last question.
          */}
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
