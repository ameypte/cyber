"use client";
import React, { useState, useReducer } from "react";
// import StartScreen from "@/components/PhishingQuiz/StartScreen";
import PhisingData from "./phishing.json";
import Question from "@/components/PhishingQuiz/Question";
import NextButton from "@/components/PhishingQuiz/NextQuestion";
console.log(PhisingData);
const question = PhisingData;
export default function page() {
  // const [{ points, answer, questions, status, index, totalPoints }, dispatch] =
  const [index, setIndex] = useState(0);
  const [point, setPoints] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  console.log(answer, point, currentQuestion, index);
  return (
    <div className="w-full h-screen max-w-screen-xl mx-auto">
      <Question
        question={question.questions[currentQuestion]}
        correctAnswer={question.questions[currentQuestion].correctOption}
        answer={answer}
        setAnswer={setAnswer}
        totalPoints={setPoints}
        points={question.questions[currentQuestion].points}
        setCurrentQuestion={setCurrentQuestion}
      />
      <NextButton
        setCurrentQuestion={setCurrentQuestion}
        setAnswer={setAnswer}
      />
    </div>
  );
}
