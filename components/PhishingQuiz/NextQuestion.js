import React from "react";

export default function NextButton({ setCurrentQuestion, setAnswer }) {
  function ChangeStates() {
    setCurrentQuestion((question) => question + 1);
    setAnswer(() => null);
  }
  return (
    <button className="btn btn-ui" onClick={() => ChangeStates()}>
      Next Question
    </button>
  );
}
