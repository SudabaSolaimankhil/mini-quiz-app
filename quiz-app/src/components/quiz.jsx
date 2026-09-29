import { useState } from "react";

function Quiz() {
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

  //   const [selectedOption, setSelectedOptoin] = useState("none");

  const [userResponse, setResponse] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleSelectOption(opt) {
    if (opt !== "") {
      setResponse((prevResponses) => {
        const updatedResponses = [...prevResponses];
        updatedResponses[currentQuestion] = opt;
        return updatedResponses;
      });
    }
  }

  function GoToNextQuestion() {
    console.log(userResponse);

    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function GoToPreviouseQuestion() {
    console.log(userResponse);

    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }
  return (
    <div>
      <h2>question {currentQuestion + 1}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          className={
            "option" +
            (userResponse[currentQuestion] === option ? " selected" : "")
          }
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <p>currentQuestion: {userResponse}</p>
      <div className="nav-buttons">
        <button
          onClick={GoToPreviouseQuestion}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          onClick={GoToNextQuestion}
          disabled={
            !userResponse[currentQuestion] ||
            currentQuestion === questionBank.length - 1
          }
        >
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
