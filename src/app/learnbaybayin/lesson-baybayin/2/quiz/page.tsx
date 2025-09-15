"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz2.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage2() {
 const questions = [
  { prompt: "Which symbol represents A?", choices: ["ᜀ", "ᜁ", "ᜂ", "ᜊ"], answer: 0 },
  { prompt: "Which character is read as I/E?", choices: ["ᜀ", "ᜁ", "ᜂ", "ᜐ"], answer: 1 },
  { prompt: "The character ᜂ sounds like…", choices: ["O or U", "A", "I or E", "NG"], answer: 0 },
  { prompt: "Baybayin vowels represent…", choices: ["Letters only", "Whole sounds", "Numbers", "Consonants"], answer: 1 },
  { prompt: "Which vowel comes first in Baybayin order?", choices: ["ᜂ", "ᜀ", "ᜁ", "ᜊ"], answer: 1 },
  { prompt: "The symbol ᜁ is pronounced…", choices: ["A", "E/I", "O", "U"], answer: 1 },
  { prompt: "Which vowel can be both “O” and “U”?", choices: ["ᜂ", "ᜀ", "ᜁ", "ᜊ"], answer: 0 },
  { prompt: "How many vowel characters are there in Baybayin?", choices: ["2", "3", "4", "5"], answer: 1 },
  { prompt: "The Baybayin vowel system is simpler than…", choices: ["English alphabet", "Japanese Kana", "Chinese characters", "Roman numerals"], answer: 0 },
  { prompt: "ᜀ can stand for which sound?", choices: ["A", "O", "I", "E"], answer: 0 },
  { prompt: "In Baybayin, vowels are…", choices: ["Optional", "Always written", "Only used at the start of words", "Replaced with numbers"], answer: 1 },
  { prompt: "Which word begins with ᜁ?", choices: ["araw", "ilaw", "ulam", "baybay"], answer: 1 },
  { prompt: "Which vowel symbol is shaped like a hook?", choices: ["ᜀ", "ᜁ", "ᜂ", "ᜐ"], answer: 2 },
  { prompt: "The combination of vowels and consonants creates…", choices: ["Abugida syllables", "Alphabet", "Pictographs", "Codes"], answer: 0 },
  { prompt: "Which of the following is NOT a Baybayin vowel?", choices: ["ᜀ", "ᜁ", "ᜂ", "ᜎ"], answer: 3 },
  { prompt: "The vowel A is considered…", choices: ["The foundation of Baybayin order", "The rarest vowel", "A consonant symbol", "A modern addition"], answer: 0 },
  { prompt: "When reading Baybayin, the vowel I/E can sound like “E” when…", choices: ["It appears alone", "Context suggests the “E” sound", "It follows U/O", "It’s paired with kudlit"], answer: 1 },
  { prompt: "The vowel U/O is often described as…", choices: ["Square-shaped", "Hook-shaped", "Star-like", "Circular"], answer: 1 },
  { prompt: "Compared to English vowels, Baybayin vowels are…", choices: ["More numerous", "Fewer", "Identical in number", "Completely unrelated"], answer: 1 },
  { prompt: "In Baybayin, vowels can function…", choices: ["Only at the end of words", "Alone or combined with consonants", "Only as silent markers", "As punctuation"], answer: 1 },
  { prompt: "The example word “ilaw” demonstrates the vowel…", choices: ["U/O", "I/E", "A", "L"], answer: 1 },
  { prompt: "The example word “ulam” begins with which vowel?", choices: ["I/E", "U/O", "A", "B"], answer: 1 },
  { prompt: "Baybayin vowels represent…", choices: ["Single consonant letters", "Whole syllabic sounds", "Accents", "Word endings"], answer: 1 },
  { prompt: "The small number of vowels in Baybayin makes the script…", choices: ["Harder to learn", "Easier to memorize", "Equivalent to Latin script", "Less consistent"], answer: 1 },
  { prompt: "Understanding Baybayin vowels is important because they…", choices: ["Are rarely used", "Form the base for all abugida syllables", "Replace all consonants", "Are used only in modern fonts"], answer: 1 }
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
        <h1 className={styles.title}>Lesson 2 Quiz</h1>
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
              <Link href="/learnbaybayin/lesson-baybayin/3" className={styles.backBtn}>
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
