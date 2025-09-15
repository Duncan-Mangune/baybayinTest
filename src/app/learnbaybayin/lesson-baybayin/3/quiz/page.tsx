"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz3.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage3() {
   const questions = [
  { prompt: "What sound does ᜊ represent?", choices: ["Ka", "Ba", "La", "Ma"], answer: 1 },
  { prompt: "Which character represents “Ma”?", choices: ["ᜋ", "ᜐ", "ᜎ", "ᜇ"], answer: 0 },
  { prompt: "Which character represents “Ka”?", choices: ["ᜃ", "ᜄ", "ᜊ", "ᜇ"], answer: 0 },
  { prompt: "By default, Baybayin consonants end with…", choices: ["E", "I", "A", "U"], answer: 2 },
  { prompt: "Which character is read as “DA/RA”?", choices: ["ᜇ", "ᜎ", "ᜋ", "ᜊ"], answer: 0 },
  { prompt: "True or False: Each Baybayin consonant has a built-in vowel.", choices: ["True", "False"], answer: 0 },
  { prompt: "The sound of ᜄ is…", choices: ["Ka", "Sa", "Ga", "Ma"], answer: 2 },
  { prompt: "Which is the symbol for SA?", choices: ["ᜋ", "ᜐ", "ᜎ", "ᜊ"], answer: 1 },
  { prompt: "Baybayin consonants are more like…", choices: ["Alphabets", "Syllables", "Numbers", "Marks"], answer: 1 },
  { prompt: "Which character would you use for “Ra”?", choices: ["ᜎ", "ᜇ", "ᜋ", "ᜃ"], answer: 1 },
  { prompt: "The sound “Ba” is always…", choices: ["ᜊ", "ᜁ", "ᜂ", "ᜄ"], answer: 0 },
  { prompt: "Which pair is correct?", choices: ["ᜊ – Ka", "ᜃ – Ka", "ᜄ – Ba", "ᜐ – Ga"], answer: 1 },
  { prompt: "In Baybayin, to write “MA”, you use…", choices: ["ᜋ", "ᜆ", "ᜂ", "ᜈ"], answer: 0 },
  { prompt: "The symbol ᜇ can mean…", choices: ["Da", "Ra", "Both Da and Ra", "None"], answer: 2 },
  { prompt: "Which is NOT a consonant symbol in Baybayin?", choices: ["ᜊ", "ᜃ", "ᜄ", "ᜀ"], answer: 3 },
  { prompt: "What does the symbol ᜅ represent?", choices: ["Ma", "Sa", "Nga", "Ga"], answer: 2 },
  { prompt: "Which Baybayin character is unique because it represents the nasal sound “NG”?", choices: ["ᜊ", "ᜐ", "ᜅ", "ᜄ"], answer: 2 },
  { prompt: "The Baybayin symbol ᜊ by default is pronounced as…", choices: ["Ba", "Be", "Bi", "Bo"], answer: 0 },
  { prompt: "In Baybayin, consonants are read with what built-in vowel if no kudlit is added?", choices: ["U", "A", "I", "O"], answer: 1 },
  { prompt: "Which Baybayin character would you use to begin the word “kabayo”?", choices: ["ᜋ", "ᜃ", "ᜄ", "ᜅ"], answer: 1 },
  { prompt: "Which character is paired with “Ba” in the Baybayin word ᜃᜊᜌ (kabayo)?", choices: ["ᜐ", "ᜃ", "ᜊ", "ᜅ"], answer: 2 },
  { prompt: "The word ᜅᜊᜓ (ngubo = cough) begins with which symbol?", choices: ["ᜄ", "ᜅ", "ᜊ", "ᜐ"], answer: 1 },
  { prompt: "Which consonant symbol in Baybayin can serve as two sounds in one (Da/Ra)?", choices: ["ᜎ", "ᜐ", "ᜇ", "ᜅ"], answer: 2 },
  { prompt: "True or False: Baybayin consonants can stand alone without a vowel sound.", choices: ["True", "False"], answer: 1 },
  { prompt: "What makes Baybayin consonants different from English consonants?", choices: ["They are silent", "They represent syllables", "They change by tone", "They only mean vowels"], answer: 1 }
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
        <h1 className={styles.title}>Lesson 3 Quiz</h1>
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
              <Link href="/learnbaybayin/lesson-baybayin/4" className={styles.backBtn}>
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
