"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz6.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage6() {
  const questions = [
  { prompt: "If your name is Marco, how would you syllabify it for Baybayin?", choices: ["Mar-co", "M-ar-co", "Ma-ro-co", "Mar-ko"], answer: 0 },
  { prompt: "Which Baybayin character represents RA?", choices: ["ᜇ (da/ra)", "ᜎ", "ᜐ", "ᜊ"], answer: 0 },
  { prompt: "The name “Ana” in Baybayin is…", choices: ["ᜀᜈ", "ᜀᜈᜀ", "ᜋᜈ", "ᜇᜀ"], answer: 1 },
  { prompt: "“Juan” can be written as…", choices: ["ᜑᜓᜀᜈ", "ᜇᜓᜀᜈ", "ᜋᜀᜈ", "ᜊᜓᜀ"], answer: 0 },
  { prompt: "The name “Liza” is broken into syllables as…", choices: ["Li-za", "Liz-a", "L-i-za", "Li-zaa"], answer: 0 },
  { prompt: "Which symbol represents MA?", choices: ["ᜋ", "ᜎ", "ᜐ", "ᜊ"], answer: 0 },
  { prompt: "The name “Rosa” is written as…", choices: ["ᜇᜓᜐ", "ᜇᜓᜐᜀ", "ᜇᜊᜐ", "ᜎᜓᜐ"], answer: 1 },
  { prompt: "The name “Pedro” → syllables?", choices: ["Pe-d-ro", "P-e-d-ro", "Ped-ro", "Pe-dar-o"], answer: 0 },
  { prompt: "Which Baybayin letter can be used for Ra?", choices: ["ᜇ", "ᜋ", "ᜎ", "ᜐ"], answer: 0 },
  { prompt: "The name “Maria” =", choices: ["ᜋᜇᜒᜀ", "ᜋᜇᜀ", "ᜋᜐᜀ", "ᜊᜇᜀ"], answer: 0 },
  { prompt: "Which part of Baybayin makes name writing unique?", choices: ["Letter by letter", "Syllable by syllable", "Sound by sound", "Silent writing"], answer: 1 },
  { prompt: "“Jose” in Baybayin =", choices: ["ᜑᜓᜐᜒ", "ᜑᜓᜐ", "ᜑᜐ", "ᜑᜀᜐ"], answer: 0 },
  { prompt: "Which of these is the correct spelling?", choices: ["Juan → ᜑᜓᜀᜈ", "Juan → ᜋᜓᜀ", "Juan → ᜇᜓᜀ", "Juan → ᜎᜓᜀ"], answer: 0 },
  { prompt: "True or False: You must always adjust modern names to syllables.", choices: ["True", "False"], answer: 0 },
  { prompt: "The name “Luna” →", choices: ["ᜎᜓᜈᜀ", "ᜎᜓᜈ", "ᜎᜋ", "ᜎᜊ"], answer: 0 },
  { prompt: "The word bata in Baybayin is…", choices: ["ᜊᜆ", "ᜋᜆ", "ᜄᜆ", "ᜐᜆ"], answer: 0 },
  { prompt: "The word lupa starts with…", choices: ["ᜎ", "ᜋ", "ᜊ", "ᜐ"], answer: 0 },
  { prompt: "The word ganda is written as…", choices: ["ᜄᜈᜇ", "ᜊᜋ", "ᜊᜄ", "ᜆᜎ"], answer: 0 },
  { prompt: "In Baybayin, words are formed by…", choices: ["Adding letters", "Combining syllables", "Using numbers", "Ignoring vowels"], answer: 1 },
  { prompt: "To write ma-ta, use…", choices: ["ᜋᜆ", "ᜊᜆ", "ᜃᜆ", "ᜐᜆ"], answer: 0 },
  { prompt: "Which word is correctly written?", choices: ["ᜎᜓᜉ = lupa", "ᜎᜉ = lapi", "ᜊᜈ = bana", "ᜄᜆ = gati"], answer: 0 },
  { prompt: "“Ba-ta” is composed of…", choices: ["Two syllables", "Three syllables", "Four syllables", "One syllable"], answer: 0 },
  { prompt: "To write “sa-ma”, use…", choices: ["ᜐᜋ", "ᜊᜆ", "ᜋᜎ", "ᜄᜇ"], answer: 0 },
  { prompt: "Which symbol combination makes “du”?", choices: ["ᜇ with kudlit below", "ᜆ with kudlit above", "ᜎ with kudlit above", "ᜋ with kudlit above"], answer: 0 },
  { prompt: "“LA” is represented by…", choices: ["ᜎ", "ᜋ", "ᜃ", "ᜊ"], answer: 0 }
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
