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

  const [selectedOption, setSelectedOptoin] = useState("none");

  function handleSelectOption(opt) {
    // console.log(opt);
    // selectedOption = opt;
    setSelectedOptoin(opt);
  }

  return (
    <div>
      <h2>question1</h2>
      <p className="question">{questionBank[0].question}</p>

      {questionBank[0].options.map((option) => (
        <button className="option" onClick={() => handleSelectOption(option)}>
          {option}
        </button>
      ))}

      <p>{selectedOption}</p>
      <div className="nav-buttons">
        <button className="">Previous</button>
        <button className="">Next</button>
      </div>
    </div>
  );
}

export default Quiz;
