import mongoose from "mongoose";
const PhishingQuizSchema = new mongoose.Schema({
  module: String,
  questions: [
    {
      question: String,
      options: [String],
      correctOption: Number,
      points: Number,
    },
  ],
});

export const PhishingQuiz =
  mongoose.models.PhishingQuiz ||
  mongoose.model("PhishingQuiz", PhishingQuizSchema);
