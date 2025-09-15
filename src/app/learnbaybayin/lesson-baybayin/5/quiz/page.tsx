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
  { prompt: "The word bata in Baybayin is…", choices: ["ᜋᜆ", "ᜊᜆ", "ᜄᜆ", "ᜐᜆ"], answer: 1 },
  { prompt: "The word lupa starts with…", choices: ["ᜊ", "ᜋ", "ᜎ", "ᜐ"], answer: 2 },
  { prompt: "The word ganda is written as…", choices: ["ᜊᜋ", "ᜄᜈᜇ", "ᜊᜄ", "ᜆᜎ"], answer: 1 },
  { prompt: "In Baybayin, words are formed by…", choices: ["Adding letters", "Combining syllables", "Using numbers", "Ignoring vowels"], answer: 1 },
  { prompt: "To write ma-ta, use…", choices: ["ᜊᜆ", "ᜋᜆ", "ᜃᜆ", "ᜐᜆ"], answer: 1 },
  { prompt: "Which word is correctly written?", choices: ["ᜊᜈ = bana", "ᜎᜉ = lapi", "ᜄᜆ = gati", "ᜎᜓᜉ = lupa"], answer: 3 },
  { prompt: "“Ba-ta” is composed of…", choices: ["Four syllables", "Three syllables", "Two syllables", "One syllable"], answer: 2 },
  { prompt: "To write “sa-ma”, use…", choices: ["ᜐᜋ", "ᜊᜆ", "ᜋᜎ", "ᜄᜇ"], answer: 0 },
  { prompt: "Which symbol combination makes “du”?", choices: ["ᜎ with kudlit above", "ᜇ with kudlit below", "ᜆ with kudlit above", "ᜋ with kudlit above"], answer: 1 },
  { prompt: "“LA” is represented by…", choices: ["ᜋ", "ᜃ", "ᜊ", "ᜎ"], answer: 3 },
  { prompt: "True or False: Writing words in Baybayin is always letter by letter.", choices: ["True", "False"], answer: 1 },
  { prompt: "The Baybayin script “ᜀᜎ” is…", choices: ["Ala", "Ali", "Alo", "Alu"], answer: 0 },
  { prompt: "The word puso would be…", choices: ["ᜉᜐ", "ᜉᜓᜐᜓ", "ᜊᜓᜆ", "ᜎᜓᜉ"], answer: 1 },
  { prompt: "How do you write “Ga-ma”?", choices: ["ᜄᜋ", "ᜇᜋ", "ᜃᜋ", "ᜊᜋ"], answer: 0 },
  { prompt: "Which is NOT a correct Baybayin word?", choices: ["ᜊᜆ = bata", "ᜄᜈᜇ = ganda", "ᜄᜎᜂ = mango", "ᜎᜓᜉ = lupa"], answer: 2 },
  { prompt: "In Baybayin, the word “mata” is written as…", choices: ["ᜎᜆ", "ᜋᜆ", "ᜊᜆ", "ᜈᜆ"], answer: 1 },
  { prompt: "Which Baybayin word means “sama”?", choices: ["ᜊᜆ", "ᜐᜋ", "ᜎᜓ", "ᜄᜈ"], answer: 1 },
  { prompt: "The Baybayin character ᜀ represents which sound?", choices: ["Ma", "Ba", "A", "Ra"], answer: 2 },
  { prompt: "The Baybayin word ala is correctly written as…", choices: ["ᜇᜎ", "ᜊᜎ", "ᜀᜎ", "ᜋᜎ"], answer: 2 },
  { prompt: "Which Baybayin script stands for “ganda”?", choices: ["ᜎᜈᜄ", "ᜇᜈᜄ", "ᜄᜈᜇ", "ᜊᜄᜈ"], answer: 2 },
  { prompt: "To write the word “puso”, which combination is correct?", choices: ["ᜉᜓᜐᜓ", "ᜊᜐ", "ᜋᜆ", "ᜎᜓ"], answer: 0 },
  { prompt: "Which Baybayin word means “bata”?", choices: ["ᜋᜈ", "ᜄᜋ", "ᜊᜆ", "ᜎᜆ"], answer: 2 },
  { prompt: "The Baybayin word “gama” is formed from…", choices: ["Ga + Na", "Ga + Ma", "Ga + Ta", "Ga + Pa"], answer: 1 },
  { prompt: "Baybayin writing is considered an abugida because…", choices: ["Each symbol represents a consonant only", "Each symbol represents a consonant + vowel sound", "Vowels are written alone always", "It removes consonants completely"], answer: 1 },
  { prompt: "Which of the following is NOT a Baybayin word example from this lesson?", choices: ["ᜊᜆ (bata)", "ᜎᜓᜉ (lupa)", "ᜄᜈᜇ (ganda)", "ᜄᜎᜂ (mango)"], answer: 3 },
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
        <Link href="/learnbaybayin/lesson-baybayin/5" className={styles.backLink}>
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
