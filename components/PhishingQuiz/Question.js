import React from "react";
import Options from "./Options";
import NextButton from "./NextQuestion";

export default function Question({
  question,
  answer,
  totalPoints,
  points,
  correctAnswer,
  setAnswer,
  setCurrentQuestion,
}) {
  console.log(question);
  return (
    <div className="w-100 h-100 ">
      <h4 className="text-center  font-semibold  text-3xl mb-12 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        {question.question}
      </h4>
      <Options
        question={question}
        answer={answer}
        correctAnswer={correctAnswer}
        points={points}
        setAnswer={setAnswer}
        totalPoints={totalPoints}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
}
