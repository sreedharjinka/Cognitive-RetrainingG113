// QuizPage.js
import React, { useState } from "react";
import "./QuizPage.css";

const questionsData = [
  {
    question: "Do you often feel nervous?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Do you often panic?",
    options: ["Yes", "No"],
    // correctAnswer: "No",
  },
  {
    question: "Do you breathe rapidly during periods of anxiety?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Do you sweat excessively when anxious?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Do you have trouble concentrating due to racing thoughts?",
    options: ["Yes", "No"],
    // correctAnswer: "No",
  },
  {
    question: "Do you struggle to fall asleep due to worry?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "Are you facing challenges or finding it hard to perform well at work/school?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Have you been experiencing feelings of hopelessness recently?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Do you find yourself getting unusually angry over minor issues?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Have you noticed yourself overreacting to situations lately?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "Have there been changes in your eating habits, like eating more or less than usual?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Have you been having thoughts about suicide or self-harm?",
    options: ["Yes", "No"],
    // correctAnswer: "No",
  },
  {
    question: "Do you feel constantly fatigued or excessively tired?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "Are you spending a lot of time on social media to the detriment of other activities?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Have you noticed a significant weight gain or loss recently?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Would you describe yourself as more of an introvert lately?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Do you often have stressful memories unexpectedly popping up?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Are you experiencing frequent nightmares?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "Do you find yourself avoiding people or activities more than usual?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Are you generally feeling more negative about things recently?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "Have you had difficulty concentrating on tasks that used to be easy for you?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Do you tend to blame yourself excessively for things?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "Have you experienced any hallucinations or sensory experiences that others don't seem to?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "Do you find yourself engaging in repetitive behaviors beyond your control?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "Have you noticed these symptoms occurring in specific seasons or times of the year?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "Have you felt an unusual increase in energy or restlessness recently?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  // Add more questions as needed
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questionsData.length).fill(null)
  );
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct and update the score
    if (
      selectedOptions[currentQuestion] ===
      questionsData[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    // Move to the previous question
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="quiz-container">
      {/* Apply styles to the main container */}
      {currentQuestion < questionsData.length ? (
        <div className="question-container">
          {/* Apply styles to the question container */}
          <h1>{questionsData[currentQuestion].question}</h1>
          <div>
            {questionsData[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={option}
                  name={`question${currentQuestion}`} // unique name for each question's options
                  value={option}
                  checked={selectedOptions[currentQuestion] === option}
                  onChange={() => handleOptionSelect(option)}
                />
                <label htmlFor={option} className="text">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={selectedOptions[currentQuestion] === null}
          >
            {currentQuestion === questionsData.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div className="result-container">
          {/* Apply styles to the result container */}
          <h1>Quiz completed!</h1>
          {/* <p>{questionsData}</p> */}
          {/* <p>{selectedOptions}</p> */}
        </div>
      )}
    </div>
  );
  // console.log(questionsData);
};

export default QuizPage;
