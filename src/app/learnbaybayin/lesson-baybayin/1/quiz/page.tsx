"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz1.module.css"; // reuse CSS

export default function QuizPage1() {
  const questions = [
    {
      prompt: "1. Baybayin is…",
      choices: ["An alphabet", "A syllabary", "A number system", "A secret code"],
      answer: 1,
    },
    {
      prompt: "2. The word “Baybayin” comes from…",
      choices: ["Bayan", "Baybay", "Babaylan", "Bayani"],
      answer: 1,
    },
    {
      prompt: "3. Baybayin was used during…",
      choices: [
        "Pre-colonial Philippines",
        "Spanish colonization only",
        "American occupation",
        "Japanese period",
      ],
      answer: 0,
    },
    {
      prompt: "4. Baybayin characters represent…",
      choices: ["Single letters", "Syllables", "Numbers", "Symbols"],
      answer: 1,
    },
    {
      prompt: "5. Which region was Baybayin most used?",
      choices: ["Luzon and Visayas", "Mindanao only", "Cordillera only", "Palawan only"],
      answer: 0,
    },
    {
      prompt: "6. Baybayin served as a form of…",
      choices: ["Oral tradition", "Writing", "Music", "Dance"],
      answer: 1,
    },
    {
      prompt: "7. Baybayin is related to the word meaning…",
      choices: ["To sing", "To spell", "To write", "To count"],
      answer: 1,
    },
    {
      prompt: "8. True or False: Baybayin is the same as Alibata.",
      choices: ["True", "False"],
      answer: 1,
    },
    {
      prompt: "9. The Spanish discouraged Baybayin because…",
      choices: [
        "It was too easy",
        "It competed with Latin letters",
        "It was secret writing",
        "It had no vowels",
      ],
      answer: 1,
    },
    {
      prompt: "10. What type of script is Baybayin?",
      choices: ["Alphabet", "Abugida", "Hieroglyphics", "Pictogram"],
      answer: 1,
    },
    {
      prompt: "11. Early Filipinos used Baybayin for…",
      choices: ["Shopping lists", "Poetry and communication", "Mathematics", "Maps"],
      answer: 1,
    },
    {
      prompt: "12. Which modern movement promotes Baybayin revival?",
      choices: ["Unicode integration", "Braille", "Binary code", "ASCII"],
      answer: 0,
    },
    {
      prompt: "13. Baybayin symbols can be compared to…",
      choices: ["Roman numerals", "Japanese Kana", "Egyptian hieroglyphics", "Morse code"],
      answer: 1,
    },
    {
      prompt: "14. Which is NOT true about Baybayin?",
      choices: [
        "It is ancient",
        "It is part of Filipino culture",
        "It is a syllabary",
        "It was invented by Spain",
      ],
      answer: 3,
    },
    {
      prompt: "15. Baybayin is important…",
      choices: ["Cultural heritage", "Currency", "Weapon", "Sports"],
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
        <h1 className={styles.title}>Lesson 1 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/1" className={styles.backLink}>
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
            <Link href="/learnbaybayin/lesson-baybayin/1" className={styles.backBtn}>
            ← Back to Lesson
          </Link>
          
          <button className={styles.retryBtn} onClick={() => window.location.reload()}>
            Retry Quiz
          </button>
        

          <Link href="/learnbaybayin/lesson-baybayin/2" className={styles.backBtn}>
            Next Lesson →
          </Link>
        </div>




      </div>

      )}
    </section>
  );
}
