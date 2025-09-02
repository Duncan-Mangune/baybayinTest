"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz7.module.css"; // reuse CSS

export default function QuizPage7() {
  const questions = [
    {
      prompt: "1. What does the Virama (᜔) do?",
      choices: ["Add a vowel", "Cancel the vowel", "Double the consonant", "None"],
      answer: 1,
    },
    {
      prompt: "2. ᜊ᜔ represents…",
      choices: ["Ba", "B", "Bu", "Be"],
      answer: 1,
    },
    {
      prompt: "3. Virama is also called…",
      choices: ["Kudlit", "Punctuation", "Pamudpod", "Accent"],
      answer: 2,
    },
    {
      prompt: "4. Which is the “silent mark” of Baybayin?",
      choices: ["Kudlit", "Virama", "Period", "Dash"],
      answer: 1,
    },
    {
      prompt: "5. “ᜄ᜔” is read as…",
      choices: ["Ga", "G", "Go"],
      answer: 1,
    },
  ];

  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, cIdx: number) => {
    if (submitted) return;
    const newAns = [...answers];
    newAns[qIdx] = cIdx;
    setAnswers(newAns);
  };

  let score = 0;
  if (submitted) {
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].answer) score++;
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 7 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/7" className={styles.backLink}>
          ← Back to Lesson
        </Link>
      </div>

      <div className={styles.description}>
        <h1 className={styles.subtitle}>
          Quiz Time! Read each question and click on the choice you think is correct.
        </h1>
      </div>

      <ol>
        {questions.map((q, qIdx) => (
          <li key={qIdx} className={styles.question}>
            <p>{q.prompt}</p>
            {q.choices.map((choice, cIdx) => {
              const chosen = answers[qIdx] === cIdx;
              const correct = submitted && cIdx === q.answer;
              const wrong = submitted && chosen && cIdx !== q.answer;

              return (
                <label key={cIdx} className={styles.choice}>
                  <input
                    type="radio"
                    name={`q-${qIdx}`}
                    checked={chosen}
                    onChange={() => handleSelect(qIdx, cIdx)}
                  />
                  <span
                    className={`${styles.choiceText} ${
                      correct ? styles.correct : ""
                    } ${wrong ? styles.wrong : ""}`}
                  >
                    {choice}
                  </span>
                </label>
              );
            })}
            {submitted && answers[qIdx] !== questions[qIdx].answer && (
              <p className={styles.feedback}>
                Correct: {q.choices[q.answer]}
              </p>
            )}
          </li>
        ))}
      </ol>

      {!submitted ? (
        <button
          className={styles.submitBtn}
          disabled={answers.includes(null)}
          onClick={() => setSubmitted(true)}
        >
          Submit Quiz
        </button>
      ) : (
        <div>
          <p className={styles.score}>
            Score: {score} / {questions.length}
          </p>
          
          <div className={styles.bottomBtns}>
            <Link href="/learnbaybayin/lesson-baybayin/7" className={styles.backBtn}>
            ← Back to Lesson
          </Link>
          
          <button className={styles.retryBtn} onClick={() => window.location.reload()}>
            Retry Quiz
          </button>
        

          <Link href="/learnbaybayin/lesson-baybayin/8" className={styles.backBtn}>
            Next Lesson →
          </Link>
        </div>

        </div>
      )}
    </section>
  );
}
