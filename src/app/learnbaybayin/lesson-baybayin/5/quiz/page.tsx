"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz5.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage5() {
  const questions = [
  { prompt: "The word bata in Baybayin is…", choices: ["ᜊᜆ", "ᜋᜆ", "ᜄᜆ", "ᜐᜆ"], answer: 0 },
  { prompt: "The word lupa starts with…", choices: ["ᜎ", "ᜋ", "ᜊ", "ᜐ"], answer: 0 },
  { prompt: "The word ganda is written as…", choices: ["ᜄᜈᜇ", "ᜊᜋ", "ᜊᜄ", "ᜆᜎ"], answer: 0 },
  { prompt: "In Baybayin, words are formed by…", choices: ["Adding letters", "Combining syllables", "Using numbers", "Ignoring vowels"], answer: 1 },
  { prompt: "To write ma-ta, use…", choices: ["ᜋᜆ", "ᜊᜆ", "ᜃᜆ", "ᜐᜆ"], answer: 0 },
  { prompt: "Which word is correctly written?", choices: ["ᜎᜓᜉ = lupa", "ᜎᜉ = lapi", "ᜊᜈ = bana", "ᜄᜆ = gati"], answer: 0 },
  { prompt: "“Ba-ta” is composed of…", choices: ["Two syllables", "Three syllables", "Four syllables", "One syllable"], answer: 0 },
  { prompt: "To write “sa-ma”, use…", choices: ["ᜐᜋ", "ᜊᜆ", "ᜋᜎ", "ᜄᜇ"], answer: 0 },
  { prompt: "Which symbol combination makes “du”?", choices: ["ᜇ with kudlit below", "ᜆ with kudlit above", "ᜎ with kudlit above", "ᜋ with kudlit above"], answer: 0 },
  { prompt: "“LA” is represented by…", choices: ["ᜎ", "ᜋ", "ᜃ", "ᜊ"], answer: 0 },
  { prompt: "True or False: Writing words in Baybayin is always letter by letter.", choices: ["True", "False"], answer: 1 },
  { prompt: "The Baybayin script “ᜀᜎ” is…", choices: ["Ala", "Ali", "Alo", "Alu"], answer: 0 },
  { prompt: "The word puso would be…", choices: ["ᜉᜓᜐᜓ", "ᜉᜐ", "ᜊᜓᜆ", "ᜎᜓᜉ"], answer: 0 },
  { prompt: "How do you write “Ga-ma”?", choices: ["ᜄᜋ", "ᜇᜋ", "ᜃᜋ", "ᜊᜋ"], answer: 0 },
  { prompt: "Which is NOT a correct Baybayin word?", choices: ["ᜊᜆ = bata", "ᜄᜈᜇ = ganda", "ᜎᜓᜉ = lupa", "ᜄᜎᜂ = mango"], answer: 3 },
  { prompt: "In Baybayin, the word “mata” is written as…", choices: ["ᜋᜆ", "ᜊᜆ", "ᜎᜆ", "ᜈᜆ"], answer: 0 },
  { prompt: "Which Baybayin word means “sama”?", choices: ["ᜊᜆ", "ᜐᜋ", "ᜎᜓ", "ᜄᜈ"], answer: 1 },
  { prompt: "The Baybayin character ᜀ represents which sound?", choices: ["Ma", "Ba", "A", "Ra"], answer: 2 },
  { prompt: "The Baybayin word ala is correctly written as…", choices: ["ᜀᜎ", "ᜊᜎ", "ᜇᜎ", "ᜋᜎ"], answer: 0 },
  { prompt: "Which Baybayin script stands for “ganda”?", choices: ["ᜄᜈᜇ", "ᜇᜈᜄ", "ᜊᜄᜈ", "ᜎᜈᜄ"], answer: 0 },
  { prompt: "To write the word “puso”, which combination is correct?", choices: ["ᜉᜓᜐᜓ", "ᜊᜐ", "ᜋᜆ", "ᜎᜓ"], answer: 0 },
  { prompt: "Which Baybayin word means “bata”?", choices: ["ᜊᜆ", "ᜋᜈ", "ᜄᜋ", "ᜎᜆ"], answer: 0 },
  { prompt: "The Baybayin word “gama” is formed from…", choices: ["Ga + Ma", "Ga + Na", "Ga + Ta", "Ga + Pa"], answer: 0 },
  { prompt: "Baybayin writing is considered an abugida because…", choices: ["Each symbol represents a consonant only", "Each symbol represents a consonant + vowel sound", "Vowels are written alone always", "It removes consonants completely"], answer: 1 },
  { prompt: "Which of the following is NOT a Baybayin word example from this lesson?", choices: ["ᜊᜆ (bata)", "ᜎᜓᜉ (lupa)", "ᜄᜋ (gama)", "ᜐᜋᜎ (samala)"], answer: 3 }
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
