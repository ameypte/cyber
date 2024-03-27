import React, { useEffect, useState } from "react";

export default function FinishedScreen({ ResetQuiz, correct, length }) {

  const storeScore = async () => {
    const data = {
      user_id: 1,
      module: "Phishing",
      total: length,
      correct: correct,
    };

    const response = await fetch("/api/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Score saved successfully");
    } else {
      console.log("Failed to save score");
    }
  };

  useEffect(() => {
    storeScore();
  }
    , []);




  return (
    <div className={`result-modal `}>
      <p className="result text-center w-75 bg-orange-500">
        You Scored <strong>{correct}</strong> out of {length}
      </p>
      {correct >= length / 2 ? (
        <div
          class="result2 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">Success !</span> You Passed the Round You
          can proceed to next round
        </div>
      ) : (
        <div
          class="result2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">Sorry !</span> You Need Atleast {length / 2}{" "}
          right answers to pass
        </div>
      )}
      {correct < length / 2 ? (
        <button className="btn2 btn-ui" onClick={ResetQuiz}>
          Restart Quiz
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
