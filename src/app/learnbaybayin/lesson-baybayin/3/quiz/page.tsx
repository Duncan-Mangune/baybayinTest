"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz3.module.css"; // reuse CSS

export default function QuizPage3() {
  const questions = [
    {
      prompt: "1. What sound does ᜊ represent?",
      choices: ["Ka", "Ba", "La", "Ma"],
      answer: 1,
    },
    {
      prompt: "2. Which character represents “Ma”?",
      choices: ["ᜋ", "ᜐ", "ᜎ", "ᜇ"],
      answer: 0,
    },
    {
      prompt: "3. Which character represents “Ka”?",
      choices: ["ᜃ", "ᜄ", "ᜊ", "ᜇ"],
      answer: 0,
    },
    {
      prompt: "4. By default, Baybayin consonants end with…",
      choices: ["E", "I", "A", "U"],
      answer: 2,
    },
    {
      prompt: "5. Which character is read as “DA/RA”?",
      choices: ["ᜇ", "ᜎ", "ᜋ", "ᜊ"],
      answer: 0,
    },
    {
      prompt: "6. True or False: Each Baybayin consonant has a built-in vowel.",
      choices: ["True", "False"],
      answer: 0,
    },
    {
      prompt: "7. The sound of ᜄ is…",
      choices: ["Ka", "Sa", "Ga", "Ma"],
      answer: 2,
    },
    {
      prompt: "8. Which is the symbol for SA?",
      choices: ["ᜋ", "ᜐ", "ᜎ", "ᜊ"],
      answer: 1,
    },
    {
      prompt: "9. Baybayin consonants are more like…",
      choices: ["Alphabets", "Syllables", "Numbers", "Marks"],
      answer: 1,
    },
    {
      prompt: "10. Which character would you use for “Ra”?",
      choices: ["ᜎ", "ᜇ", "ᜋ", "ᜃ"],
      answer: 1,
    },
    {
      prompt: "11. The sound “Ba” is always…",
      choices: ["ᜊ", "ᜁ", "ᜂ", "ᜄ"],
      answer: 0,
    },
    {
      prompt: "12. Which pair is correct?",
      choices: ["ᜊ – Ka", "ᜃ – Ka", "ᜄ – Ba", "ᜐ – Ga"],
      answer: 1,
    },
    {
      prompt: "13. In Baybayin, to write “MA”, you use…",
      choices: ["ᜋ", "ᜆ", "ᜂ", "ᜈ"],
      answer: 0,
    },
    {
      prompt: "14. The symbol ᜇ can mean…",
      choices: ["Da", "Ra", "Both Da and Ra", "None"],
      answer: 2,
    },
    {
      prompt: "15. Which is NOT a consonant symbol in Baybayin?",
      choices: ["ᜊ", "ᜃ", "ᜄ", "ᜀ"],
      answer: 3,
    },
  ];

  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, cIdx: number) => {
    if (submitted) return; // lock answers after submit
    const newAns = [...answers];
    newAns[qIdx] = cIdx;
    setAnswers(newAns);
  };

  // Calculate score
  let score = 0;
  if (submitted) {
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].answer) {
        score++;
      }
    }
  }

  return (
    <section className={styles.container}>
      {/* Header */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 3 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/3" className={styles.backLink}>
          ← Back to Lesson
        </Link>
      </div>

      <div className={styles.description}>
        <h1 className={styles.subtitle}>
          Quiz Time! Read each question and click on the choice you think is correct. 
          After finishing, review your answers and you can click back to Lesson.
        </h1>
      </div>

      {/* Quiz questions */}
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

            {/* Feedback when wrong */}
            {submitted && answers[qIdx] !== questions[qIdx].answer && (
              <p className={styles.feedback}>
                Correct: {q.choices[questions[qIdx].answer]}
              </p>
            )}
          </li>
        ))}
      </ol>

      {/* Buttons */}
      {!submitted ? (
        <button
          className={styles.submitBtn}
          disabled={answers.includes(null)} // disable if not all answered
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
            <Link href="/learnbaybayin/lesson-baybayin/3" className={styles.backBtn}>
            ← Back to Lesson
          </Link>
          
          <button className={styles.retryBtn} onClick={() => window.location.reload()}>
            Retry Quiz
          </button>
        

          <Link href="/learnbaybayin/lesson-baybayin/4" className={styles.backBtn}>
            Next Lesson →
          </Link>
        </div>

        </div>
      )}
    </section>
  );
}
