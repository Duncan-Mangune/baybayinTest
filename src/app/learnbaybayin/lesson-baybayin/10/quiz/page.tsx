"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz10.module.css"; // reuse CSS

export default function QuizPage10() {
  const questions = [
    {
      prompt: "1. Today, Baybayin is often seen in…",
      choices: ["Tattoos", "Newspapers", "Street signs everywhere", "TV subtitles"],
      answer: 0,
    },
    {
      prompt: "2. Baybayin is included in modern digital systems because of…",
      choices: ["Unicode", "Morse code", "Binary", "Braille"],
      answer: 0,
    },
    {
      prompt: "3. Unicode assigned Baybayin a range from…",
      choices: ["ᜀ–᜔", "A–Z", "1–9", "100–200"],
      answer: 0,
    },
    {
      prompt: "4. Modern uses of Baybayin include…",
      choices: ["Calligraphy", "Banking", "Coding", "Stock trading"],
      answer: 0,
    },
    {
      prompt: "5. Which movement helps revive Baybayin?",
      choices: ["Baybayin activism", "Spanish colonization", "Americanization", "Industrialization"],
      answer: 0,
    },
    {
      prompt: "6. Baybayin is visible today in…",
      choices: ["Tattoos", "Ancient ruins only", "Maps only", "No longer used"],
      answer: 0,
    },
    {
      prompt: "7. Baybayin revival connects to…",
      choices: ["National identity", "Business only", "Sports", "Food"],
      answer: 0,
    },
    {
      prompt: "8. Which is correct about Baybayin in modern use?",
      choices: ["Only historians know it", "It is part of digital Unicode", "It cannot be typed", "It is illegal"],
      answer: 1,
    },
    {
      prompt: "9. Baybayin appears in…",
      choices: ["Government seals", "U.S. dollars", "Foreign textbooks", "TV subtitles"],
      answer: 0,
    },
    {
      prompt: "10. Baybayin in fashion appears as…",
      choices: ["T-shirt prints", "Shoes only", "Cars", "Glasses"],
      answer: 0,
    },
    {
      prompt: "11. Which group promotes Baybayin education?",
      choices: ["Activists & artists", "Only Spanish priests", "Americans", "None"],
      answer: 0,
    },
    {
      prompt: "12. Baybayin can be typed in…",
      choices: ["Unicode keyboards", "Only handwriting", "Morse code", "Roman numerals"],
      answer: 0,
    },
    {
      prompt: "13. Which phrase is TRUE?",
      choices: ["Baybayin is forgotten forever", "Baybayin is revived today", "Baybayin is only math", "Baybayin is European"],
      answer: 1,
    },
    {
      prompt: "14. Digital Baybayin fonts exist because of…",
      choices: ["Unicode", "Braille", "Binary", "Morse"],
      answer: 0,
    },
    {
      prompt: "15. The modern role of Baybayin is…",
      choices: ["Cultural revival", "Economic tool", "Math system", "Scientific formula"],
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
        <h1 className={styles.title}>Lesson 10 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/10" className={styles.backLink}>
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
            <Link href="/learnbaybayin/lesson-baybayin/10" className={styles.backBtn}>
            ← Back to Lesson
          </Link>
          
          <button className={styles.retryBtn} onClick={() => window.location.reload()}>
            Retry Quiz
          </button>
        

        </div>

        </div>
      )}
    </section>
  );
}
