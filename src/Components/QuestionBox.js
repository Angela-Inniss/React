
import React, {useState}  from "react";

// options is the array of answers from the api
const QuestionBox = ({question, options, questionId, correct, selected}) => {
  // using react Hooks
  const [answers, setAnswerFunction ] = useState(options);
  // basically saying that answers is equal to the options array (which are the answers array) that I passed to useState
  return (
    <div className="questionBox">
      <div className="question"> {question} </div>
      {answers.map((answer,index) => {
        return(
          <button key={index} className="answerBtn" type="button" onClick={() => {
            setAnswerFunction([answer]);
            selected(answer);
          }} >{answer}</button>
        );
      })}

    </div>
  )
};
export default QuestionBox;

// every item that you render in a list should have a key this time we have assigned key the index
// on click calls a function that triggers the setAnswerFunction and updates the state to show just the Answer clicked on.
// now we want to see if the selected answer by the user is the same as the correct answer in our api and set a score

