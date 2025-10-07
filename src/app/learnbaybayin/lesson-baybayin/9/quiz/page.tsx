"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz9.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage9() {
  const questions = [
    { prompt: "Baybayin was used by early Filipinos to…", choices: ["Write poetry", "Do math", "Trade with China", "Create maps"], answer: 0 },
    { prompt: "Baybayin use declined during…", choices: ["The Spanish period", "American period", "Pre-colonial era", "Japanese occupation"], answer: 0 },
    { prompt: "Baybayin is considered a symbol of…", choices: ["Western culture", "Filipino identity", "Spanish heritage", "Globalization"], answer: 1 },
    { prompt: "Early Filipinos signed documents in…", choices: ["Latin", "Baybayin", "English", "Arabic"], answer: 1 },
    { prompt: "Baybayin was discouraged by…", choices: ["Japanese", "Spanish colonizers", "Americans", "Chinese traders"], answer: 1 },
    { prompt: "Which cultural form is often used by Baybayin?", choices: ["Poetry", "Cartography", "Architecture", "Music"], answer: 0 },
    { prompt: "Baybayin is best described as…", choices: ["A living script", "Dead language", "Number system", "Secret code"], answer: 0 },
    { prompt: "Baybayin was mainly used in…", choices: ["Mindanao", "Luzon and Visayas", "Cordillera only", "Palawan only"], answer: 1 },
    { prompt: "The decline of Baybayin was due to…", choices: ["War", "Latin alphabet", "No paper", "Low literacy"], answer: 1 },
    { prompt: "Baybayin was preserved in…", choices: ["Colonial archives", "Oral tradition", "Spanish missionary records", "Maps"], answer: 2 },
    { prompt: "The script reflects…", choices: ["Filipino identity", "Western influence", "Japanese culture", "American politics"], answer: 0 },
    { prompt: "Which of these is NOT true?", choices: ["Baybayin was once common", "It is used today in tattoos", "It declined in Spanish period", "It was invented in Europe"], answer: 3 },
    { prompt: "The cultural role of Baybayin was…", choices: ["Communication", "Sports", "Weaponry", "Food"], answer: 0 },
    { prompt: "“Baybayin” today symbolizes…", choices: ["Modern art and identity", "Only religion", "Only trade", "Only secrecy"], answer: 0 },
    { prompt: "Which group influenced Baybayin’s decline?", choices: ["Spaniards", "Americans", "Japanese", "Filipinos"], answer: 0 },
    { prompt: "Baybayin is part of which type of writing system?", choices: ["Alphabet", "Abugida", "Hieroglyphs", "Syllabary"], answer: 1 },
    { prompt: "Which modern use shows Baybayin as a symbol of cultural pride?", choices: ["Tattoos", "Banking", "Computer coding", "Farming"], answer: 0 },
    { prompt: "Spanish priests preserved Baybayin by…", choices: ["Teaching it in schools", "Writing it in missionary records", "Using it for trade", "Translating Latin books into Baybayin"], answer: 1 },
    { prompt: "What does the Baybayin word “bahay” mean?", choices: ["Sun", "House", "Water", "Night"], answer: 1 },
    { prompt: "The Baybayin word ᜆᜓᜊᜒᜄ᜔ means…", choices: ["Tree", "Water", "Star", "Stone"], answer: 1 },
    { prompt: "Why is Baybayin important today?", choices: ["It represents Filipino identity", "It replaces the Latin alphabet", "It is used only for numbers", "It is practiced only in Mindanao"], answer: 0 },
    { prompt: "What caused Baybayin’s replacement by the Latin alphabet?", choices: ["Colonization", "Natural disaster", "Low literacy rate", "Lack of paper"], answer: 0 },
    { prompt: "Which region was NOT a major center of Baybayin use?", choices: ["Luzon", "Visayas", "Mindanao", "Manila"], answer: 2 },
    { prompt: "Baybayin shows that early Filipinos were…", choices: ["Illiterate", "Creative and literate", "Dependent on colonizers", "Only oral storytellers"], answer: 1 },
    { prompt: "Today, Baybayin is often featured in…", choices: ["Street signs and art", "Farming tools", "Foreign textbooks", "Banking codes"], answer: 0 },
  ];

  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [wrongAnswers, setWrongAnswers] = useState<
    { question: string; correct: string; chosen: string }[]
  >([]);

  // Shuffle once on mount and select 10 random questions
  useEffect(() => {
    const tenRandom = shuffleArray(questions).slice(0, 10);
    setShuffledQuestions(tenRandom);
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
    const tenRandom = shuffleArray(questions).slice(0, 10); // reshuffle and pick new 10
    setShuffledQuestions(tenRandom);
  };

  if (!shuffledQuestions.length) return <p>Loading quiz...</p>;

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 9 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/9" className={styles.backLink}>
          ← Back to Lesson
        </Link>
      </div>

      {showInstructions ? (
        <div className={styles.instructionsBox}>
          <h2>📋 Instructions</h2>
          <p>
            Select the correct answer for each question about the Lesson you just viewed.
            There will be 10 questions displayed and is randomized each time you retry.
            Good Luck!
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
              <Link href="/learnbaybayin/lesson-baybayin/10" className={styles.backBtn}>
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
