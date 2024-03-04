"use client";
import React, { useState } from "react";

export default function Options({ question, answer, dispatch }) {
  const [onclick, setOnClick] = useState(null); // Initialized with null
  console.log(onclick);
  return (
    <>
      {/* console.log(onclick); */}
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
          disabled={answer !== null}
          onClick={() => setOnClick(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
}
