"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz5.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage3() {
  const questions = [
     {
      prompt: "How many vowels are there in Baybayin?",
      choices: ["2", "3", "4", "5"],
      answer: 1,
    },
    {
      prompt: "Which Baybayin vowel comes first in order?",
      choices: ["I/E", "A", "U/O", "E only"],
      answer: 1,
    },
    {
      prompt: "The Baybayin vowel I/E can sound like:",
      choices: ["Only E", "Only I", "Either I or E depending on context", "None of the above"],
      answer: 2,
    },
    {
      prompt: "What is unique about the vowel U/O in Baybayin?",
      choices: ["It only represents O", "It only represents U", "It can represent both U and O sounds", "It is not used in Baybayin"],
      answer: 2,
    },
    {
      prompt: "Compared to English, how many vowels does Baybayin have?",
      choices: ["The same number as English", "More vowels than English", "Fewer vowels than English", "No vowels at all"],
      answer: 2,
    },
    {
      prompt: "Why are vowels considered the foundation of Baybayin?",
      choices: [
        "They can stand alone and combine with consonants to form syllables",
        "They are always written larger than consonants",
        "They appear only at the end of words",
        "They replace consonants in writing",
      ],
      answer: 0,
    },
    {
      prompt: "When combined with consonants, Baybayin vowels form:",
      choices: ["Words only", "Syllables (abugida system)", "Numbers", "Sentences"],
      answer: 1,
    },
    {
      prompt: "Which statement is true about Baybayin vowels?",
      choices: [
        "They are always written separately from consonants",
        "They can appear alone or with consonants",
        "They represent silent sounds",
        "They only appear at the beginning of words",
      ],
      answer: 1,
    },
    {
      prompt: "The vowel A in Baybayin stands for which sound?",
      choices: ["I", "O", "A", "U"],
      answer: 2,
    },
    {
      prompt: "How does the Baybayin vowel system differ from English?",
      choices: [
        "Baybayin vowels represent whole sounds or syllables",
        "Baybayin vowels only appear at the end of words",
        "Baybayin has the same number of vowels as English",
        "Baybayin vowels do not combine with consonants",
      ],
      answer: 0,
    },
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
        <Link href="/learnbaybayin/lesson-baybayin/1" className={styles.backLink}>
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
