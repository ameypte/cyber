import React from "react";

export default function FinishedScreen({ correct = 0, length = 4 }) {
  return (
    <div className={`result-modal `}>
      <p className="result text-center w-75 bg-orange-500">
        You Scored <strong>{correct}</strong> out of {length}
      </p>
      <p className="highscore text-center">
        (Highscore : {/* Placeholder for highscore logic */})
      </p>
      <button className="btn btn-ui">Restart Quiz</button>
    </div>
  );
}
