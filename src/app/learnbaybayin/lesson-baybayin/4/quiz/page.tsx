"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz4.module.css";

export default function QuizPage4() {
  const questions = [
    {
      prompt: "1. What does a kudlit above a character change the vowel to?",
      choices: ["A", "I/E", "U/O", "None"],
      answer: 1,
    },
    {
      prompt: "2. ᜊ with a kudlit below sounds like…",
      choices: ["Ba", "Bi", "Bu", "Bo"],
      answer: 2,
    },
    {
      prompt: "3. Kudlit marks are used to…",
      choices: ["Cancel vowels", "Change vowel sounds", "Add consonants", "Add numbers"],
      answer: 1,
    },
    {
      prompt: "4. The default sound without kudlit is…",
      choices: ["I", "U", "A", "O"],
      answer: 2,
    },
    {
      prompt: "5. Kudlit above =",
      choices: ["I/E", "A", "U/O", "Silent"],
      answer: 0,
    },
    {
      prompt: "6. Kudlit below =",
      choices: ["A", "I/E", "U/O", "Double consonant"],
      answer: 2,
    },
    {
      prompt: "7. ᜋ (ma) with kudlit above =",
      choices: ["Me", "Mo", "Mu", "Ma"],
      answer: 0,
    },
    {
      prompt: "8. ᜋ with kudlit below =",
      choices: ["Ma", "Me", "Mu", "Mi"],
      answer: 2,
    },
    {
      prompt: "9. What symbol changes consonants’ vowels in Baybayin?",
      choices: ["Virama", "Kudlit", "Accent", "Number"],
      answer: 1,
    },
    {
      prompt: "10. ᜃ (ka) → with kudlit above =",
      choices: ["Ku", "Ko", "Ki", "Ka"],
      answer: 2,
    },
    {
      prompt: "11. ᜃ with kudlit below =",
      choices: ["Ka", "Ki", "Ku", "Ko"],
      answer: 2,
    },
    {
      prompt: "12. Kudlit can represent how many vowels?",
      choices: ["1", "2", "3", "4"],
      answer: 1,
    },
    {
      prompt: "13. Which word is correct?",
      choices: ["ᜊ = ba", "ᜊ́ = bo", "ᜊ̀ = bi", "ᜊ = bu"],
      answer: 0,
    },
    {
      prompt: "14. Kudlit is like a…",
      choices: ["Diacritic mark", "Number", "Code", "Letter"],
      answer: 0,
    },
    {
      prompt: "15. Without kudlit, every consonant ends with…",
      choices: ["O", "I", "A", "U"],
      answer: 2,
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
        <h1 className={styles.title}>Lesson 4 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/4" className={styles.backLink}>
          ← Back to Lesson
        </Link>
      </div>

      <h2 className={styles.subtitle}>Test your knowledge about Kudlit in Baybayin!</h2>

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
            <Link href="/learnbaybayin/lesson-baybayin/4" className={styles.backBtn}>
            ← Back to Lesson
          </Link>
          
          <button className={styles.retryBtn} onClick={() => window.location.reload()}>
            Retry Quiz
          </button>
        

          <Link href="/learnbaybayin/lesson-baybayin/5" className={styles.backBtn}>
            Next Lesson →
          </Link>
        </div>

        </div>
      )}
    </section>
  );
}
