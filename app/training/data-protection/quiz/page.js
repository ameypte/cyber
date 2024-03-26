"use client";
import React, { useState, useReducer, useEffect, useRouter } from "react";

import Question from "@/components/PhishingQuiz/Question";
import NextButton from "@/components/PhishingQuiz/NextQuestion";
import Progress from "@/components/PhishingQuiz/Progress";

import FinishedScreen from "@/components/PhishingQuiz/FinishedScreen";
// const [loading, setLoading] = useState(false);
const DataProtection = require("./dataprotection.json");

export default function page() {
  const [index, setIndex] = useState(0);
  const [point, setPoints] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const length = DataProtection?.questions?.length || 0;

  const ResetQuiz = () => {
    setCurrentQuestion(() => 0);
    setAnswer(() => null);
    setPoints(() => 0);
    setShowModal(() => false);
  };
  useEffect(() => {
    if (!DataProtection || !DataProtection.questions) {
      setError("Phishing data is missing or invalid");
    }
  }, []);

  return (
    <div className="w-full h-screen max-w-screen-xl m-auto">
      {!showModal ? (
        <div>
          <Progress
            numQuestion={length}
            index={currentQuestion}
            points={point}
            maxPossibleValue={length}
            answer={answer}
          />

          <div style={{ backdropFilter: "inherit" }}>
            <Question
              question={DataProtection.questions[currentQuestion]}
              correctAnswer={
                DataProtection.questions[currentQuestion].correctOption
              }
              answer={answer}
              setAnswer={setAnswer}
              totalPoints={setPoints}
              points={DataProtection.questions[currentQuestion].points}
              setCurrentQuestion={setCurrentQuestion}
            />
            {answer !== null && (
              <NextButton
                currentQuestion={currentQuestion}
                length={length}
                setShowModal={setShowModal}
                setCurrentQuestion={setCurrentQuestion}
                setAnswer={setAnswer}
              />
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      {showModal ? (
        <FinishedScreen correct={point} length={length} ResetQuiz={ResetQuiz} />
      ) : (
        ""
      )}
    </div>
  );
}