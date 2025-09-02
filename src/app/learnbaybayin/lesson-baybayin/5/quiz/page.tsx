"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz5.module.css";

export default function QuizPage5() {
  const questions = [
    { prompt: "1. The word bata in Baybayin is…", choices: ["ᜊᜆ", "ᜋᜆ", "ᜄᜆ", "ᜐᜆ"], answer: 0 },
    { prompt: "2. The word lupa starts with…", choices: ["ᜎ", "ᜋ", "ᜊ", "ᜐ"], answer: 0 },
    { prompt: "3. The word ganda is written as…", choices: ["ᜄᜈᜇ", "ᜊᜋ", "ᜊᜄ", "ᜆᜎ"], answer: 0 },
    { prompt: "4. In Baybayin, words are formed by…", choices: ["Adding letters", "Combining syllables", "Using numbers", "Ignoring vowels"], answer: 1 },
    { prompt: "5. To write ma-ta, use…", choices: ["ᜋᜆ", "ᜊᜆ", "ᜃᜆ", "ᜐᜆ"], answer: 0 },
    { prompt: "6. Which word is correctly written?", choices: ["ᜎᜓᜉ = lupa", "ᜎᜉ = lapi", "ᜊᜈ = bana", "ᜄᜆ = gati"], answer: 0 },
    { prompt: "7. “Ba-ta” is composed of…", choices: ["Two syllables", "Three syllables", "Four syllables", "One syllable"], answer: 0 },
    { prompt: "8. To write “sa-ma”, use…", choices: ["ᜐᜋ", "ᜊᜆ", "ᜋᜎ", "ᜄᜇ"], answer: 0 },
    { prompt: "9. Which symbol combination makes “du”?", choices: ["ᜇ with kudlit below", "ᜆ with kudlit above", "ᜎ with kudlit above", "ᜋ with kudlit above"], answer: 0 },
    { prompt: "10. “LA” is represented by…", choices: ["ᜎ", "ᜋ", "ᜃ", "ᜊ"], answer: 0 },
    { prompt: "11. True or False: Writing words in Baybayin is always letter by letter.", choices: ["True", "False"], answer: 1 },
    { prompt: "12. The Baybayin script “ᜀᜎ” is…", choices: ["Ala", "Ali", "Alo", "Alu"], answer: 0 },
    { prompt: "13. The word puso would be…", choices: ["ᜉᜓᜐᜓ", "ᜉᜐ", "ᜊᜓᜆ", "ᜎᜓᜉ"], answer: 0 },
    { prompt: "14. How do you write “Ga-ma”?", choices: ["ᜄᜋ", "ᜇᜋ", "ᜃᜋ", "ᜊᜋ"], answer: 0 },
    { prompt: "15. Which is NOT a correct Baybayin word?", choices: ["ᜊᜆ = bata", "ᜄᜈᜇ = ganda", "ᜎᜓᜉ = lupa", "ᜄᜎᜂ = mango"], answer: 3 },
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
        <h1 className={styles.title}>Lesson 5 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/5" className={styles.backLink}>
          ← Back to Lesson
        </Link>
      </div>

      <h2 className={styles.subtitle}>Quiz Time! Practice writing Baybayin words.</h2>

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
                    className={`${styles.choiceText} ${correct ? styles.correct : ""} ${
                      wrong ? styles.wrong : ""
                    }`}
                  >
                    {choice}
                  </span>
                </label>
              );
            })}
            {submitted && answers[qIdx] !== questions[qIdx].answer && (
              <p className={styles.feedback}>
                Correct: {q.choices[questions[qIdx].answer]}
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
          <p className={styles.score}>Score: {score} / {questions.length}</p>
          

          <div className={styles.bottomBtns}>
            <Link href="/learnbaybayin/lesson-baybayin/5" className={styles.backBtn}>
            ← Back to Lesson
          </Link>
          
          <button className={styles.retryBtn} onClick={() => window.location.reload()}>
            Retry Quiz
          </button>
        

          <Link href="/learnbaybayin/lesson-baybayin/6" className={styles.backBtn}>
            Next Lesson →
          </Link>
        </div>

         


        </div>
      )}
    </section>
  );
}
