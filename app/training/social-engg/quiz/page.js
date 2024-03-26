"use client";
import React, { useState, useReducer, useEffect, useRouter } from "react";

import Question from "@/components/PhishingQuiz/Question";
import NextButton from "@/components/PhishingQuiz/NextQuestion";
import Progress from "@/components/PhishingQuiz/Progress";

import FinishedScreen from "@/components/PhishingQuiz/FinishedScreen";
// const [loading, setLoading] = useState(false);
const SocialEngg = require("./socialengg.json");

export default function page() {
  const [index, setIndex] = useState(0);
  const [point, setPoints] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const length = SocialEngg?.questions?.length || 0;
  const ResetQuiz = () => {
    setCurrentQuestion(() => 0);
    setAnswer(() => null);
    setPoints(() => 0);
    setShowModal(() => false);
  };
  useEffect(() => {
    if (!SocialEngg || !SocialEngg.questions) {
      setError("Phishing data is missing or invalid");
    }
  }, []);
  console.log(
    "Current Question is : ",
    currentQuestion,
    "length is ",
    length,
    "SHowModal Value is ",
    showModal
  );

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
              question={SocialEngg.questions[currentQuestion]}
              correctAnswer={
                SocialEngg.questions[currentQuestion].correctOption
              }
              answer={answer}
              setAnswer={setAnswer}
              totalPoints={setPoints}
              points={SocialEngg.questions[currentQuestion].points}
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
