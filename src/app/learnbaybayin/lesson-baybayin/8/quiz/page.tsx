"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz8.module.css"; // reuse CSS

export default function QuizPage8() {
  const questions = [
    {
      prompt: "1. “Ako” in Baybayin is…",
      choices: ["ᜀᜃᜓ", "ᜀᜋᜓ", "ᜀᜐᜓ", "ᜀᜇᜓ"],
      answer: 0,
    },
    {
      prompt: "2. The sentence “Ako ay bata” is…",
      choices: ["ᜀᜃᜓ ᜀᜌ᜔ ᜊᜆ", "ᜀᜃᜓ ᜊᜇ᜔ ᜋᜆ", "ᜀᜊᜓ ᜀᜎ᜔ ᜋᜆ", "ᜀᜃᜓ ᜀᜎ᜔ ᜊᜆ"],
      answer: 0,
    },
    {
      prompt: "3. “Ay” is written as…",
      choices: ["ᜀᜌ᜔", "ᜀᜎ᜔", "ᜀᜊ", "ᜀᜐ"],
      answer: 0,
    },
    {
      prompt: "4. “Ako” means…",
      choices: ["You", "I", "We", "They"],
      answer: 1,
    },
    {
      prompt: "5. “Bata” means…",
      choices: ["Child", "Adult", "Friend", "Parent"],
      answer: 0,
    },
    {
      prompt: "6. True or False: Sentences in Baybayin follow syllable order.",
      choices: ["True", "False"],
      answer: 0,
    },
    {
      prompt: "7. Which word means “I am a child”?",
      choices: ["Ako ay bata", "Lupa ay ako", "Bata ay ganda", "Ako ay ganda"],
      answer: 0,
    },
    {
      prompt: "8. Which is correct?",
      choices: ["ᜀᜌ᜔ = ay", "ᜀᜌ = aya", "ᜀᜌᜁ = ayi", "ᜀᜌᜓ = ayo"],
      answer: 0,
    },
    {
      prompt: "9. “Siya ay maganda” =",
      choices: [
        "ᜐᜒᜌ ᜀᜌ᜔ ᜋᜄᜈᜇ",
        "ᜐᜒᜌᜀᜎ ᜋᜆ",
        "ᜀᜌ᜔ᜌᜐ",
        "ᜀᜌ ᜀᜎ",
      ],
      answer: 0,
    },
    {
      prompt: "10. Which word is the subject?",
      choices: ["Ako", "Bata", "Ay", "None"],
      answer: 0,
    },
    {
      prompt: "11. Which Baybayin word is “ay”?",
      choices: ["ᜀᜌ᜔", "ᜐᜓ", "ᜀᜎ", "ᜀᜇ"],
      answer: 0,
    },
    {
      prompt: "12. Sentences in Baybayin use…",
      choices: ["Latin punctuation", "Word spacing", "Numbers", "Colors"],
      answer: 1,
    },
    {
      prompt: "13. “Maganda” in Baybayin is…",
      choices: ["ᜋᜄᜈᜇ", "ᜋᜇᜆ", "ᜋᜎ", "ᜋᜊ"],
      answer: 0,
    },
    {
      prompt: "14. “Ako ay maganda” =",
      choices: [
        "ᜀᜃᜓ ᜀᜌ᜔ ᜋᜄᜈᜇ",
        "ᜀᜆᜓ ᜀᜌ᜔",
        "ᜀᜌ᜔ ᜋᜆ",
        "ᜀᜃᜓ ᜇᜌ᜔",
      ],
      answer: 0,
    },
    {
      prompt: "15. Translation of “Ako ay bata” is…",
      choices: ["I am a child", "You are a child", "He is a child", "We are children"],
      answer: 0,
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
        <h1 className={styles.title}>Lesson 8 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/8" className={styles.backLink}>
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
              <p className={styles.feedback}>Correct: {q.choices[q.answer]}</p>
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
            <Link href="/learnbaybayin/lesson-baybayin/8" className={styles.backBtn}>
            ← Back to Lesson
          </Link>
          
          <button className={styles.retryBtn} onClick={() => window.location.reload()}>
            Retry Quiz
          </button>
        

          <Link href="/learnbaybayin/lesson-baybayin/9" className={styles.backBtn}>
            Next Lesson →
          </Link>
        </div>

        </div>
      )}
    </section>
  );
}
