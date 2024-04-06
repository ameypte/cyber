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
  finishedScreen,
}) {
  console.log(question);
  return (
    <div className="w-100 h-100 ">
      <h4 className="text-center  font-semibold  text-3xl mb-12 text-gray-900 rounded-lg dark:text-white  group">
        {question.question}
      </h4>
      {answer == null ? (
        <Options
          question={question}
          answer={answer}
          correctAnswer={correctAnswer}
          points={points}
          setAnswer={setAnswer}
          totalPoints={totalPoints}
          transfer={true}
          finishedScreen={finishedScreen}
          setCurrentQuestion={setCurrentQuestion}
        />
      ) : (
        <Options
          question={question}
          answer={answer}
          correctAnswer={correctAnswer}
          points={points}
          setAnswer={setAnswer}
          totalPoints={totalPoints}
          transfer={false}
          finishedScreen={finishedScreen}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
    </div>
  );
}
