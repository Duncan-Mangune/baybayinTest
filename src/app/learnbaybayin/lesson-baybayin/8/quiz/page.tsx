"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz8.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage8() {
  const questions = [
  { prompt: "“Ako” in Baybayin is…", choices: ["ᜀᜃᜓ", "ᜀᜋᜓ", "ᜀᜐᜓ", "ᜀᜇᜓ"], answer: 0 },
  { prompt: "The sentence “Ako ay bata” is…", choices: ["ᜀᜃᜓ ᜀᜌ᜔ ᜊᜆ", "ᜀᜃᜓ ᜊᜇ᜔ ᜋᜆ", "ᜀᜊᜓ ᜀᜎ᜔ ᜋᜆ", "ᜀᜃᜓ ᜀᜎ᜔ ᜊᜆ"], answer: 0 },
  { prompt: "“Ay” is written as…", choices: ["ᜀᜌ᜔", "ᜀᜎ᜔", "ᜀᜊ", "ᜀᜐ"], answer: 0 },
  { prompt: "“Ako” means…", choices: ["You", "I", "We", "They"], answer: 1 },
  { prompt: "“Bata” means…", choices: ["Child", "Adult", "Friend", "Parent"], answer: 0 },
  { prompt: "True or False: Sentences in Baybayin follow syllable order.", choices: ["True", "False"], answer: 0 },
  { prompt: "Which word means “I am a child”?", choices: ["Ako ay bata", "Lupa ay ako", "Bata ay ganda", "Ako ay ganda"], answer: 0 },
  { prompt: "Which is correct?", choices: ["ᜀᜌ᜔ = ay", "ᜀᜌ = aya", "ᜀᜌᜁ = ayi", "ᜀᜌᜓ = ayo"], answer: 0 },
  { prompt: "“Siya ay maganda” =", choices: ["ᜐᜒᜌ ᜀᜌ᜔ ᜋᜄᜈᜇ", "ᜐᜒᜌᜀᜎ ᜋᜆ", "ᜀᜌ᜔ᜌᜐ", "ᜀᜌ ᜀᜎ"], answer: 0 },
  { prompt: "Which word is the subject?", choices: ["Ako", "Bata", "Ay", "None"], answer: 0 },
  { prompt: "Which Baybayin word is “ay”?", choices: ["ᜀᜌ᜔", "ᜐᜓ", "ᜀᜎ", "ᜀᜇ"], answer: 0 },
  { prompt: "Sentences in Baybayin use…", choices: ["Latin punctuation", "Word spacing", "Numbers", "Colors"], answer: 1 },
  { prompt: "“Maganda” in Baybayin is…", choices: ["ᜋᜄᜈᜇ", "ᜋᜇᜆ", "ᜋᜎ", "ᜋᜊ"], answer: 0 },
  { prompt: "“Ako ay maganda” =", choices: ["ᜀᜃᜓ ᜀᜌ᜔ ᜋᜄᜈᜇ", "ᜀᜆᜓ ᜀᜌ᜔", "ᜀᜌ᜔ ᜋᜆ", "ᜀᜃᜓ ᜇᜌ᜔"], answer: 0 },
  { prompt: "Translation of “Ako ay bata” is…", choices: ["I am a child", "You are a child", "He is a child", "We are children"], answer: 0 },
  { prompt: "What does “guro” mean in English?", choices: ["Child", "Teacher", "Mountain", "Parent"], answer: 1 },
  { prompt: "“Guro” in Baybayin is written as…", choices: ["ᜄᜓᜇᜓ", "ᜄᜆ", "ᜄᜋ", "ᜄᜓᜆ"], answer: 0 },
  { prompt: "The word bundok (mountain) in Baybayin is…", choices: ["ᜊᜓᜈ᜔ᜇᜓᜃ᜔", "ᜊᜓᜇᜓᜈ᜔", "ᜊᜆᜓᜃ᜔", "ᜊᜋ᜔ᜇᜓ"], answer: 0 },
  { prompt: "What is the function of Pamudpod (᜔) in Baybayin sentences?", choices: ["To add vowels", "To cancel vowels", "To repeat sounds", "To change word meaning"], answer: 1 },
  { prompt: "In the sentence “Ako ay guro”, which Baybayin symbols represent guro?", choices: ["ᜄᜓᜇᜓ", "ᜄᜆ", "ᜋᜆ", "ᜊᜓᜆ"], answer: 0 },
  { prompt: "True or False: Word order in Baybayin sentences follows Filipino grammar.", choices: ["True", "False"], answer: 0 },
  { prompt: "Which Baybayin word stands for “ay” in “Ako ay guro”?", choices: ["ᜀᜌ᜔", "ᜀᜎ", "ᜀᜊ", "ᜀᜐ"], answer: 0 },
  { prompt: "What is the correct translation of “Ako ay maganda”?", choices: ["I am beautiful", "You are beautiful", "He is beautiful", "We are beautiful"], answer: 0 },
  { prompt: "How are sentences separated in Baybayin?", choices: ["By commas", "By spacing", "By kudlit marks", "By dots"], answer: 1 },
  { prompt: "Which sentence means “I am a teacher”?", choices: ["ᜀᜃᜓ ᜀᜌ᜔ ᜄᜓᜇᜓ", "ᜀᜌ᜔ ᜀᜃᜓ ᜋᜆ", "ᜀᜆ ᜀᜌ᜔ ᜊᜆ", "ᜀᜃᜓ ᜊᜆ"], answer: 0 }
];


  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [wrongAnswers, setWrongAnswers] = useState<
    { question: string; correct: string; chosen: string }[]
  >([]);

  //Shuffle once on mount
  useEffect(() => {
    setShuffledQuestions(shuffleArray(questions));
  }, []);

  const handleAnswer = (idx: number) => {
    const currentQ = shuffledQuestions[current];
    if (idx === currentQ.answer) {
      setScore(score + 1);
    } else {
      setWrongAnswers([
        ...wrongAnswers,
        {
          question: currentQ.prompt,
          correct: currentQ.choices[currentQ.answer],
          chosen: currentQ.choices[idx],
        },
      ]);
    }

    if (current < shuffledQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const retryQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setShowInstructions(true);
    setWrongAnswers([]);
    setShuffledQuestions(shuffleArray(questions)); // reshuffle on retry
  };

  if (!shuffledQuestions.length) return <p>Loading quiz...</p>;

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 5 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/1" className={styles.backLink}>
          ← Back to Lesson
        </Link>
      </div>

      {showInstructions ? (
        <div className={styles.instructionsBox}>
          <h2>📋 Instructions</h2>
          <p>
            Answer each question about the Lesson you just viewed. Choose the correct
            answer to earn a point. Your score will be shown at the end.
          </p>
          <button className={styles.nextBtn} onClick={() => setShowInstructions(false)}>
            🚀 Start Quiz
          </button>
        </div>
      ) : !finished ? (
        <>
          <p className={styles.questionText}>{shuffledQuestions[current].prompt}</p>
          <div className={styles.choicesStack}>
            {shuffledQuestions[current].choices.map((choice, idx) => (
              <button
                key={idx}
                className={styles.choiceBtn}
                onClick={() => handleAnswer(idx)}
              >
                {choice}
              </button>
            ))}
          </div>
          <p className={styles.questionNumber}>
            Question {current + 1} of {shuffledQuestions.length}
          </p>
        </>
      ) : (
        <>
          <div className={styles.resultsCard}>
            <h2 className={styles.resultsTitle}>Quiz Results</h2>
            <p className={styles.resultsStats}>
              ✅ Correct Answers: <span>{score}</span>
              <br />
              ❌ Wrong Answers: <span>{shuffledQuestions.length - score}</span>
              <br />
              Final Score: <strong>{score}/{shuffledQuestions.length}</strong>
            </p>
            <div className={styles.bottomBtns}>
              <button onClick={retryQuiz} className={styles.retryBtn}>
                Retry Quiz
              </button>
              <Link href="/learnbaybayin/lesson-baybayin/6" className={styles.backBtn}>
                Next Lesson →
              </Link>
            </div>
          </div>

          {wrongAnswers.length > 0 && (
            <div className={styles.wrongAnswersBox}>
              <h3 className={styles.wrongTitle}>Review Your Mistakes</h3>
              {wrongAnswers.map((item, i) => (
                <div key={i} className={styles.wrongItem}>
                  <p className={styles.wrongQuestion}>{item.question}</p>
                  <p className={styles.wrongChosen}>
                    Your Answer: <span>{item.chosen}</span>
                  </p>
                  <p className={styles.wrongCorrect}>
                    Correct Answer: <strong>{item.correct}</strong>
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
