import React from "react";
import "./../assets/style.css";

const ResultCard = ({ score, getQuestions, qbank, userAnswer }) => {
  return (
    <div>
      <div>You scored {score} out of 5! </div>

      <div className="playBtnBox">
        <button className="playBtn" type="button" onClick={getQuestions}>
          Play again
        </button>
      </div>

      <div>
        {qbank.map(questionObject => {
          return (
            <div>
              <div className="questionBox"> {questionObject.question}</div>
              <div className="resultCardCorrect">
                Correct Answer: {questionObject.correct}
              </div>
              <div className="resultCardCorrect">Your Answer: {userAnswer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultCard;
