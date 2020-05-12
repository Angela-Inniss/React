import React, { useState } from "react";

const QuestionBox = ({
  question,
  options,
  correct,
  incrementScore,
  incrementResponse,
  responseClassName
}) => {
  const computeAnswer = answer => {
    if (answer === correct) {
      setResponse("correct");
      incrementScore();
      incrementResponse();
    } else {
      setResponse("sorry wrong!");
      incrementResponse();
    }
  };
  const [response, setResponse] = useState(""); // text to display whether user response is correct or not initially is nothing.
  const [answers, setAnswerFunction] = useState(options); // the answers to each question from the api

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
              setAnswerFunction([answer]); // sends the answer clicked by the user to the state on line 6
              computeAnswer(answer); // sends the answer the user clicks to the computeAnswer function and sets the response to correct or wrong.
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
