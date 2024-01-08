// MChatRTest.js
import React, { useState } from 'react';

const MChatRTest = ({ onSave }) => {
  const [responses, setResponses] = useState({});
  const questions = [
    'Does your child enjoy playing peek-a-boo/hide-and-seek?',
    'Does your child pretend, for example, to make a cup of tea using a toy cup and teapot or pretend other things?',
    'Does your child respond to their name when you call it?',
    'Does your child point at objects with their index finger?',
    'Does your child play with other children or engage in parallel play?',
    'Does your child show interest in other children?',
    'Does your child bring objects to show or share with you?',
    'Does your child respond to your facial expressions or emotions?',
    'Does your child use gestures, like waving or shaking their head?',
    'Does your child look at you when you talk to them?',
    'Does your child play with toys in a variety of ways (e.g., rolling a car on the floor, pretending to feed a doll)?',
    'Does your child imitate actions or words?',
    'Does your child use words to communicate, even if they are not clear?',
    'Does your child enjoy being swung, bounced on your knee, etc.?',
    'Does your child show an interest in music?',
    'Does your child point to pictures in books when you name them?',
    'Does your child enjoy playing games like peek-a-boo or patty-cake?',
    'Does your child engage in pretend play, such as feeding a doll or pretending to cook?',
    'Does your child follow your gaze or point to objects you are looking at?',
    'Does your child engage in repetitive behaviors, such as hand-flapping or rocking?',
  ];

  const handleResponseChange = (questionIndex, isChecked) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionIndex]: isChecked,
    }));
  };
  const calculateScore = () => {
    let score = 20;

    for (const response of Object.values(responses)) {
      if (response) {
        // For every "Yes" answer, reduce the score by 1
        score -= 1;
      }
    }

    return score;
  };

  const handleSave = () => {
    // Call onSave prop to pass the responses and score to the parent component
    onSave({
      responses,
      score: calculateScore(),
    });
  };

  return (
    <div>
      <h2>M-CHAT-R Test</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleResponseChange(index, e.target.checked)}
            />
            Yes
          </label>
        </div>
      ))}
      <button onClick={handleSave}>Save Test</button>
    </div>
  );
};

export default MChatRTest;
