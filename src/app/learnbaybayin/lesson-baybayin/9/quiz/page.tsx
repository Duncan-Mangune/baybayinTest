"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz9.module.css"; // reuse CSS

export default function QuizPage9() {
  const questions = [
    {
      prompt: "1. Baybayin was used by early Filipinos to…",
      choices: ["Write poetry", "Do math", "Trade with China", "Create maps"],
      answer: 0,
    },
    {
      prompt: "2. Baybayin use declined during…",
      choices: ["The Spanish period", "American period", "Pre-colonial era", "Japanese occupation"],
      answer: 0,
    },
    {
      prompt: "3. Baybayin is considered a symbol of…",
      choices: ["Western culture", "Filipino identity", "Spanish heritage", "Globalization"],
      answer: 1,
    },
    {
      prompt: "4. Early Filipinos signed documents in…",
      choices: ["Latin", "Baybayin", "English", "Arabic"],
      answer: 1,
    },
    {
      prompt: "5. Baybayin was discouraged by…",
      choices: ["Japanese", "Spanish colonizers", "Americans", "Chinese traders"],
      answer: 1,
    },
    {
      prompt: "6. Which cultural form is often used by Baybayin?",
      choices: ["Poetry", "Cartography", "Architecture", "Music"],
      answer: 0,
    },
    {
      prompt: "7. Baybayin is best described as…",
      choices: ["A living script", "Dead language", "Number system", "Secret code"],
      answer: 0,
    },
    {
      prompt: "8. Baybayin was mainly used in…",
      choices: ["Mindanao", "Luzon and Visayas", "Cordillera only", "Palawan only"],
      answer: 1,
    },
    {
      prompt: "9. The decline of Baybayin was due to…",
      choices: ["War", "Latin alphabet", "No paper", "Low literacy"],
      answer: 1,
    },
    {
      prompt: "10. Baybayin was preserved in…",
      choices: ["Colonial archives", "Oral tradition", "Spanish missionary records", "Maps"],
      answer: 2,
    },
    {
      prompt: "11. The script reflects…",
      choices: ["Filipino identity", "Western influence", "Japanese culture", "American politics"],
      answer: 0,
    },
    {
      prompt: "12. Which of these is NOT true?",
      choices: [
        "Baybayin was once common",
        "It is used today in tattoos",
        "It declined in Spanish period",
        "It was invented in Europe",
      ],
      answer: 3,
    },
    {
      prompt: "13. The cultural role of Baybayin was…",
      choices: ["Communication", "Sports", "Weaponry", "Food"],
      answer: 0,
    },
    {
      prompt: "14. “Baybayin” today symbolizes…",
      choices: ["Modern art and identity", "Only religion", "Only trade", "Only secrecy"],
      answer: 0,
    },
    {
      prompt: "15. Which group influenced Baybayin’s decline?",
      choices: ["Spaniards", "Americans", "Japanese", "Filipinos"],
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
        <h1 className={styles.title}>Lesson 9 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/9" className={styles.backLink}>
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
            <Link href="/learnbaybayin/lesson-baybayin/9" className={styles.backBtn}>
            ← Back to Lesson
          </Link>
          
          <button className={styles.retryBtn} onClick={() => window.location.reload()}>
            Retry Quiz
          </button>
        

          <Link href="/learnbaybayin/lesson-baybayin/10" className={styles.backBtn}>
            Next Lesson →
          </Link>
        </div>

        </div>
      )}
    </section>
  );
}
