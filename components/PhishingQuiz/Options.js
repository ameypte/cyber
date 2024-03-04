"use client";
import React from "react";

export default function Options({
  question,
  answer,
  totalPoints,
  points,
  correctAnswer,
  setAnswer,
  setCurrentQuestion,
}) {
  function ChangeStates(index) {
    totalPoints((preVal) => preVal + points);
    setAnswer(() => index);
  }
  return (
    <div className="options text-center">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${
            answer !== null && index === question.correctOption ? "answer" : ""
          } ${
            answer !== null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : " "
          }`}
          key={option}
          onClick={() =>
            index == correctAnswer
              ? ChangeStates(index)
              : setAnswer(() => index)
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
