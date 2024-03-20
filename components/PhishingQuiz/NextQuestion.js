import React from "react";

export default function NextButton({
  setShowModal,
  length,
  currentQuestion,
  setCurrentQuestion,
  setAnswer,
}) {
  function ChangeStates() {
    if (length == currentQuestion) {
      setShowModal((prev) => true);
    }
    setCurrentQuestion((question) => question + 1);
    setAnswer(() => null);
  }
  return (
    <button className="btn btn-ui" onClick={() => ChangeStates()}>
      Next
    </button>
  );
}
