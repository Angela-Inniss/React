import React from "react";
import "./../assets/style.css";

const ResultCard = ({
  score,
  playAgain,
  getQuestions,
  questions,
  userAnswer,
  correctAnswer,
  qbank
}) => {
  return (
    <div>
      <div>You scored {score} out of 5! </div>

      <div className="playBtnBox">
        <button className="playBtn" type="button" onClick={getQuestions}>
          Play again
        </button>
      </div>

      <div>
        {qbank.map(({question,correct}) => {
          return (
            <div>
              <div className="questionBox"> {question}</div>
               <div className="questionBox"> {correct}</div>
            </div>
          );
        })}
        {questions.map((question,index) => {
          return (
            <div>
              <div className="questionBox"> {question}</div>
              <div className="questionBox"> {correctAnswer[index]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultCard;
// pass state .q bank here and iterate over it.
