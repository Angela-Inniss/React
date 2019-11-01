import React from "react";


const ResultCard  = ({score, playAgain, getQuestions} ) => {
  return (
    <div>
      <div>You scored {score} out of 5! </div>
      <button className="playBtn" type="button"
        onClick={getQuestions}>Play again</button>
    </div>

  );
}

export default ResultCard;
