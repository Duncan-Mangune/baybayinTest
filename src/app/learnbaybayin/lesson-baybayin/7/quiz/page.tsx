"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz7.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage7() {
  const questions = [
    { prompt: "What does the Virama (᜔) do?", choices: ["Add a vowel", "Cancel the vowel", "Double the consonant", "None"], answer: 1 },
    { prompt: "ᜊ᜔ represents…", choices: ["Ba", "B", "Bu", "Be"], answer: 1 },
    { prompt: "Virama is also called…", choices: ["Kudlit", "Punctuation", "Pamudpod", "Accent"], answer: 2 },
    { prompt: "Which is the “silent mark” of Baybayin?", choices: ["Kudlit", "Virama", "Period", "Dash"], answer: 1 },
    { prompt: "“ᜄ᜔” is read as…", choices: ["Ga", "G", "Go", "Ge"], answer: 1 },
    { prompt: "True or False: Virama is used to remove vowels in consonants.", choices: ["True", "False"], answer: 0 },
    { prompt: "The Virama was introduced mainly during…", choices: ["Pre-colonial times", "Spanish period", "American period", "Japanese period"], answer: 1 },
    { prompt: "“DA” without a vowel =", choices: ["ᜇ᜔", "ᜇ", "ᜇᜁ", "ᜇᜓ"], answer: 0 },
    { prompt: "Why is Virama important?", choices: ["To shorten words", "To write final consonants", "To change vowels", "To add accents"], answer: 1 },
    { prompt: "“ᜋ᜔” is read as…", choices: ["Ma", "M", "Mu", "Me"], answer: 1 },
    { prompt: "The Virama mark looks like…", choices: ["Dot below", "Slash", "Circle", "Hook"], answer: 0 },
    { prompt: "Which word would use Virama?", choices: ["Bundok (ᜊᜓᜈ᜔ᜇᜓᜃ᜔)", "Ana", "Lupa", "Ganda"], answer: 0 },
    { prompt: "The Virama is NOT used for…", choices: ["Silent consonants", "Ending consonants", "Changing vowels", "Removing vowels"], answer: 2 },
    { prompt: "Which pair is correct?", choices: ["ᜊ = Ba", "ᜊ᜔ = B", "Both", "None"], answer: 2 },
    { prompt: "Virama makes Baybayin writing…", choices: ["More flexible", "Harder only", "Useless", "Obsolete"], answer: 0 },
    { prompt: "The Virama cancels the vowel in Baybayin. What does “ᜎ᜔” become?", choices: ["La", "L", "Lo", "Lu"], answer: 1 },
    { prompt: "In the word bundok (ᜊᜓᜈ᜔ᜇᜓᜃ᜔), which letters use the Virama?", choices: ["ᜊ, ᜓ", "ᜈ, ᜃ", "ᜇ, ᜎ", "ᜋ, ᜐ"], answer: 1 },
    { prompt: "The Virama was introduced to help Baybayin adapt to which type of syllables?", choices: ["Open syllables (ending in vowels)", "Closed syllables (ending in consonants)", "Reduplicated syllables", "Silent syllables"], answer: 1 },
    { prompt: "Without the Virama, how would “ᜐ” normally be read?", choices: ["Sa", "S", "So", "Su"], answer: 0 },
    { prompt: "What is the main difference between Kudlit and Virama?", choices: ["Kudlit changes vowels, Virama removes them", "Kudlit removes vowels, Virama adds them", "Both are the same", "Kudlit is modern, Virama is ancient"], answer: 0 },
    { prompt: "Which Baybayin form is correct for the final consonant “d” in “gand”?", choices: ["ᜄᜈᜇ", "ᜄᜈᜇ᜔", "ᜄᜈᜇᜓ", "ᜄᜈ"], answer: 1 },
    { prompt: "Which of the following shows Virama used twice?", choices: ["ᜊᜓᜈ᜔ᜇᜓᜃ᜔", "ᜎᜓᜉ", "ᜐᜋ", "ᜊᜆ"], answer: 0 },
    { prompt: "The Virama makes Baybayin closer to…", choices: ["Alphabetic writing", "Pictographs", "Numbers", "Hieroglyphs"], answer: 0 },
    { prompt: "Virama is necessary in words with…", choices: ["Vowel endings", "Final consonants", "Repeated vowels", "Double kudlit"], answer: 1 },
    { prompt: "Which of these is NOT true about Virama?", choices: ["It is also called Pamudpod", "It cancels the vowel", "It makes Baybayin more flexible", "It adds a new vowel"], answer: 3 }
  ];

  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [wrongAnswers, setWrongAnswers] = useState<
    { question: string; correct: string; chosen: string }[]
  >([]);

  // Shuffle & select 10 questions on mount
  useEffect(() => {
    const selected = shuffleArray(questions).slice(0, 10);
    setShuffledQuestions(selected);
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
    const selected = shuffleArray(questions).slice(0, 10); // reshuffle and reselect 10
    setShuffledQuestions(selected);
  };

  if (!shuffledQuestions.length) return <p>Loading quiz...</p>;

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 7 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/7" className={styles.backLink}>
          ← Back to Lesson
        </Link>
      </div>

      {showInstructions ? (
        <div className={styles.instructionsBox}>
          <h2>📋 Instructions</h2>
          <p>
            Select the correct answer for each question about the Lesson you just viewed. 
            There will be 10 questions displayed and is randomized each time you retry. Good Luck!
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
              <Link href="/learnbaybayin/lesson-baybayin/8" className={styles.backBtn}>
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
