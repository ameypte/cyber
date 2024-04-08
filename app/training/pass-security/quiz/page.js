"use client";
import React, { useState, useReducer, useEffect, useRouter } from "react";

import Question from "@/components/PhishingQuiz/Question";
import NextButton from "@/components/PhishingQuiz/NextQuestion";
import Progress from "@/components/PhishingQuiz/Progress";

import FinishedScreen from "@/components/PhishingQuiz/FinishedScreen";
// const [loading, setLoading] = useState(false);
const PasswordSecurity = require("./passsecurity.json");

export default function page() {
  const [index, setIndex] = useState(0);
  const [point, setPoints] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [user_id, setUser_id] = useState(null);

  const length = PasswordSecurity?.questions?.length || 0;
  const ResetQuiz = () => {
    setCurrentQuestion(() => 0);
    setAnswer(() => null);
    setPoints(() => 0);
    setShowModal(() => false);
  };
  useEffect(() => {
    setUser_id(localStorage.getItem("user_id"));
    if (!PasswordSecurity || !PasswordSecurity.questions) {
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
              question={PasswordSecurity.questions[currentQuestion]}
              correctAnswer={
                PasswordSecurity.questions[currentQuestion].correctOption
              }
              answer={answer}
              setAnswer={setAnswer}
              totalPoints={setPoints}
              points={PasswordSecurity.questions[currentQuestion].points}
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
        <FinishedScreen correct={point} length={length} ResetQuiz={ResetQuiz} module={"Password Security"}
          userId={user_id}
          PhishingData={PasswordSecurity}
        />
      ) : (
        ""
      )}
    </div>
  );
}
