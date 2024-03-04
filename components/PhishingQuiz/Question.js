import React from "react";
import Options from "./Options";

export default function Question({ question, answer, dispatch }) {
  console.log(question);
  return (
    <div className="w-100 h-full">
      <h4 className="text-center  font-semibold  text-2xl mb-12 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        {question.question}
      </h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
