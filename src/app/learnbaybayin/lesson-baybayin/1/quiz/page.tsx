"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz1.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage1() {
  const questions = [
    { prompt: "Baybayin is…", choices: ["An alphabet", "A syllabary", "A number system", "A secret code"], answer: 1 },
    { prompt: "The word “Baybayin” comes from…", choices: ["Bayan", "Baybay", "Babaylan", "Bayani"], answer: 1 },
    { prompt: "Baybayin was used during…", choices: ["Pre-colonial Philippines", "Spanish colonization only", "American occupation", "Japanese period"], answer: 0 },
    { prompt: "Baybayin characters represent…", choices: ["Single letters", "Syllables", "Numbers", "Symbols"], answer: 1 },
    { prompt: "Which region was Baybayin most used?", choices: ["Luzon and Visayas", "Mindanao only", "Cordillera only", "Palawan only"], answer: 0 },
    { prompt: "Baybayin served as a form of…", choices: ["Oral tradition", "Writing", "Music", "Dance"], answer: 1 },
    { prompt: "Baybayin is related to the word meaning…", choices: ["To sing", "To spell", "To write", "To count"], answer: 1 },
    { prompt: "True or False: Baybayin is the same as Alibata.", choices: ["True", "False"], answer: 1 },
    { prompt: "The Spanish discouraged Baybayin because…", choices: ["It was too easy", "It competed with Latin letters", "It was secret writing", "It had no vowels"], answer: 1 },
    { prompt: "What type of script is Baybayin?", choices: ["Alphabet", "Abugida", "Hieroglyphics", "Pictogram"], answer: 1 },
    { prompt: "Early Filipinos used Baybayin for…", choices: ["Shopping lists", "Poetry and communication", "Mathematics", "Maps"], answer: 1 },
    { prompt: "Which modern movement promotes Baybayin revival?", choices: ["Unicode integration", "Braille", "Binary code", "ASCII"], answer: 0 },
    { prompt: "Baybayin symbols can be compared to…", choices: ["Roman numerals", "Japanese Kana", "Egyptian hieroglyphics", "Morse code"], answer: 1 },
    { prompt: "Which is NOT true about Baybayin?", choices: ["It is ancient", "It is part of Filipino culture", "It is a syllabary", "It was invented by Spain"], answer: 3 },
    { prompt: "Baybayin is important…", choices: ["Cultural heritage", "Currency", "Weapon", "Sports"], answer: 0 },
    { prompt: "The primary purpose of Baybayin in pre-colonial society was…", choices: ["Decorative art", "Communication and record-keeping", "Religious chanting", "Trading currency"], answer: 1 },
    { prompt: "Baybayin letters are modified using…", choices: ["Accents called kudlit", "Extra consonants", "Dashes only", "Dots under the line"], answer: 0 },
    { prompt: "When a kudlit is placed above a Baybayin character, it…", choices: ["Adds a consonant sound", "Changes the vowel sound to “e” or “i”", "Removes the vowel", "Duplicates the consonant"], answer: 1 },
    { prompt: "Baybayin writing traditionally did NOT include…", choices: ["Vowels", "Consonants", "Final consonant markers", "Syllables"], answer: 2 },
    { prompt: "The arrival of Spanish colonizers led to…", choices: ["The widespread use of Baybayin", "The decline of Baybayin writing", "The creation of new Baybayin characters", "The banning of all languages"], answer: 1 },
    { prompt: "Baybayin is an example of a writing system in Southeast Asia that was influenced by…", choices: ["Latin scripts", "Brahmic scripts", "Cyrillic scripts", "Greek alphabets"], answer: 1 },
    { prompt: "Modern Baybayin revival is often seen in…", choices: ["Digital fonts and tattoos", "Road signs only", "Secret societies", "Currency design"], answer: 0 },
    { prompt: "One reason Baybayin is taught today is to…", choices: ["Replace English entirely", "Preserve Filipino cultural identity", "Compete with modern keyboards", "Abandon Latin letters"], answer: 1 },
    { prompt: "Which of the following BEST describes Baybayin’s structure?", choices: ["Consonant-vowel pairs", "Vowel-only script", "Consonant-only script", "Picture-based writing"], answer: 0 },
    { prompt: "Baybayin’s reintroduction into popular culture is supported by…", choices: ["Artists and historians", "Foreign governments", "Space agencies", "Maritime traders"], answer: 0 }
  ];

  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [wrongAnswers, setWrongAnswers] = useState<
    { question: string; correct: string; chosen: string }[]
  >([]);

  // Shuffle and select only 10 random questions
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
    // Re-shuffle and reselect 10 random questions
    const selected = shuffleArray(questions).slice(0, 10);
    setShuffledQuestions(selected);
  };

  if (!shuffledQuestions.length) return <p>Loading quiz...</p>;

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 1 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/1" className={styles.backLink}>
          ← Back to Lesson
        </Link>
      </div>

      {showInstructions ? (
        <div className={styles.instructionsBox}>
          <h2>📋 Instructions</h2>
          <p>
            Select the correct asnwer for each question about the Lesson you just viewed. There will be 10 questions displayed and is randomized each time you retry. Good Luck!
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
              <Link href="/learnbaybayin/lesson-baybayin/2" className={styles.backBtn}>
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
