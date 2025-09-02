"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz2.module.css"; // reuse CSS

export default function QuizPage2() {
  const questions = [
    {
      prompt: "1. How many vowels are there in Baybayin?",
      choices: ["2", "3", "4", "5"],
      answer: 1,
    },
    {
      prompt: "2. Which Baybayin vowel comes first in order?",
      choices: ["I/E", "A", "U/O", "E only"],
      answer: 1,
    },
    {
      prompt: "3. The Baybayin vowel I/E can sound like:",
      choices: ["Only E", "Only I", "Either I or E depending on context", "None of the above"],
      answer: 2,
    },
    {
      prompt: "4. What is unique about the vowel U/O in Baybayin?",
      choices: ["It only represents O", "It only represents U", "It can represent both U and O sounds", "It is not used in Baybayin"],
      answer: 2,
    },
    {
      prompt: "5. Compared to English, how many vowels does Baybayin have?",
      choices: ["The same number as English", "More vowels than English", "Fewer vowels than English", "No vowels at all"],
      answer: 2,
    },
    {
      prompt: "6. Why are vowels considered the foundation of Baybayin?",
      choices: [
        "They can stand alone and combine with consonants to form syllables",
        "They are always written larger than consonants",
        "They appear only at the end of words",
        "They replace consonants in writing",
      ],
      answer: 0,
    },
    {
      prompt: "7. When combined with consonants, Baybayin vowels form:",
      choices: ["Words only", "Syllables (abugida system)", "Numbers", "Sentences"],
      answer: 1,
    },
    {
      prompt: "8. Which statement is true about Baybayin vowels?",
      choices: [
        "They are always written separately from consonants",
        "They can appear alone or with consonants",
        "They represent silent sounds",
        "They only appear at the beginning of words",
      ],
      answer: 1,
    },
    {
      prompt: "9. The vowel A in Baybayin stands for which sound?",
      choices: ["I", "O", "A", "U"],
      answer: 2,
    },
    {
      prompt: "10. How does the Baybayin vowel system differ from English?",
      choices: [
        "Baybayin vowels represent whole sounds or syllables",
        "Baybayin vowels only appear at the end of words",
        "Baybayin has the same number of vowels as English",
        "Baybayin vowels do not combine with consonants",
      ],
      answer: 0,
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
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 2 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/2" className={styles.backLink}>
          ← Back to Lesson
        </Link>
      </div>

      <div className={styles.description}>
        <h1 className={styles.subtitle}>
          Quiz Time! Read each question and click on the choice you think is correct. 
          After finishing, review your answers and you can click back to Lesson.
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
          <p className={styles.score}>
            Score: {score} / {questions.length}
          </p>

          <div className={styles.bottomBtns}>
            <Link href="/learnbaybayin/lesson-baybayin/2" className={styles.backBtn}>
              ← Back to Lesson
            </Link>

            <button className={styles.retryBtn} onClick={() => window.location.reload()}>
              Retry Quiz
            </button>

            <Link href="/learnbaybayin/lesson-baybayin/3" className={styles.backBtn}>
              Next Lesson →
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
