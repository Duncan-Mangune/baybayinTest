"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz4.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage3() {
  const questions = [
  { prompt: "What does a kudlit above a character change the vowel to?", choices: ["A", "I/E", "U/O", "None"], answer: 1 },
  { prompt: "ᜊ with a kudlit below sounds like…", choices: ["Ba", "Bi", "Bu", "Bo"], answer: 2 },
  { prompt: "Kudlit marks are used to…", choices: ["Cancel vowels", "Change vowel sounds", "Add consonants", "Add numbers"], answer: 1 },
  { prompt: "The default sound without kudlit is…", choices: ["I", "U", "A", "O"], answer: 2 },
  { prompt: "Kudlit above =", choices: ["I/E", "A", "U/O", "Silent"], answer: 0 },
  { prompt: "Kudlit below =", choices: ["A", "I/E", "U/O", "Double consonant"], answer: 2 },
  { prompt: "ᜋ (ma) with kudlit above =", choices: ["Me", "Mo", "Mu", "Ma"], answer: 0 },
  { prompt: "ᜋ with kudlit below =", choices: ["Ma", "Me", "Mu", "Mi"], answer: 2 },
  { prompt: "What symbol changes consonants’ vowels in Baybayin?", choices: ["Virama", "Kudlit", "Accent", "Number"], answer: 1 },
  { prompt: "ᜃ (ka) → with kudlit above =", choices: ["Ku", "Ko", "Ki", "Ka"], answer: 2 },
  { prompt: "ᜃ with kudlit below =", choices: ["Ka", "Ki", "Ku", "Ko"], answer: 2 },
  { prompt: "Kudlit can represent how many vowels?", choices: ["1", "2 (I/E and U/O)", "3", "4"], answer: 1 },
  { prompt: "Which word is correct?", choices: ["ᜊ = ba", "ᜊ́ = bo", "ᜊ̀ = bi", "ᜊ = bu"], answer: 0 },
  { prompt: "Kudlit is like a…", choices: ["Diacritic mark", "Number", "Code", "Letter"], answer: 0 },
  { prompt: "Without kudlit, every consonant ends with…", choices: ["O", "I", "A", "U"], answer: 2 },
  { prompt: "In Baybayin, kudlit changes the…", choices: ["Consonant", "Vowel", "Word meaning", "Sentence"], answer: 1 },
  { prompt: "Which kudlit placement makes the sound “I” or “E”?", choices: ["Above", "Below", "Beside", "None"], answer: 0 },
  { prompt: "Which kudlit placement makes the sound “U” or “O”?", choices: ["Above", "Below", "Side", "None"], answer: 1 },
  { prompt: "The symbol ᜇ (da/ra) with a kudlit above is pronounced…", choices: ["Do", "Di", "Da", "Du"], answer: 1 },
  { prompt: "The symbol ᜇ (da/ra) with a kudlit below is pronounced…", choices: ["De", "Do", "Di", "Da"], answer: 1 },
  { prompt: "The Baybayin word ᜊᜓᜐ (busa = foam) shows that the kudlit…", choices: ["Adds a consonant", "Turns “ba” into “bu”", "Removes a vowel", "Doubles the sound"], answer: 1 },
  { prompt: "In the word ᜇᜎᜒ (dali = quick), which letter has the kudlit?", choices: ["ᜇ", "ᜎ", "ᜊ", "ᜉ"], answer: 1 },
  { prompt: "Which of the following is an example of kudlit above?", choices: ["ᜋᜒ", "ᜋᜓ", "ᜋ", "ᜇᜓ"], answer: 0 },
  { prompt: "Which of the following is an example of kudlit below?", choices: ["ᜋᜒ", "ᜋᜓ", "ᜊ", "ᜎ"], answer: 1 },
  { prompt: "Kudlit makes Baybayin an abugida because…", choices: ["Each consonant stands alone", "Vowels are written separately", "Consonant + vowel sounds are formed with diacritics", "It cancels consonants"], answer: 2 }
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
        <h1 className={styles.title}>Lesson 4 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/4" className={styles.backLink}>
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
              <Link href="/learnbaybayin/lesson-baybayin/5" className={styles.backBtn}>
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
