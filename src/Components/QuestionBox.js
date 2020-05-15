import React, { useState } from "react";

const QuestionBox = ({
  question,
  options,
  correct,
  incrementScore,
  incrementResponse,
  userAnswer

}) => {
  const [response, setResponse] = useState(""); // text to display whether user response is correct or not initially is nothing.
  const [answers, setAnswerFunction] = useState(options); // the answers to each question from the api

  const computeAnswer = answer => {
    if (answer === correct) {
      setResponse("correct");
      incrementScore();
      incrementResponse();
      userAnswer(answer);
    } else {
      setResponse("sorry wrong!");
      incrementResponse();
      userAnswer(answer);
    }
  };

  return (
    <div className="questionBox">
      <div className="question"> {question} </div>
      {answers.map((answer, index) => {
        return (
          <button
            key={index}
            className="answerBtn"
            type="button"
            onClick={() => {
              setAnswerFunction([answer]); // sends the answer clicked by the user to the state
              computeAnswer(answer); // sends the answer the user clicks to the computeAnswer function and sets the response to correct or wrong.
              userAnswer(answer)
            }}
          >
            {answer}
          </button>
        );
      })}
      {response === "correct" ? (
        <div className="correctResponse"> {response} </div>
      ) : (
        <div className="wrongResponse"> {response} </div>
      )}
    </div>
  );
};
export default QuestionBox;

// every item that you render in a list should have a key this time we have assigned key the index
// on click calls a function that triggers the setAnswerFunction and updates the state to show just the Answer clicked on and checks if it was right or wrong
// now we want to see if the selected answer by the user is the same as the correct answer in our api and set a score
// the incrementScore prop is a prop that this component offers, it can be used to keep track of the score and called in the component above which uses the componenet.

// want to share answers state with another component.
