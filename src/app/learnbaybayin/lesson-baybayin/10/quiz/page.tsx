"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./quiz10.module.css";

// 🔀 Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage10() {
  const questions = [
    { prompt: "Today, Baybayin is often seen in…", choices: ["Tattoos", "Newspapers", "Street signs everywhere", "TV subtitles"], answer: 0 },
    { prompt: "Baybayin is included in modern digital systems because of…", choices: ["Unicode", "Morse code", "Binary", "Braille"], answer: 0 },
    { prompt: "Unicode assigned Baybayin a range from…", choices: ["ᜀ–᜔", "A–Z", "1–9", "100–200"], answer: 0 },
    { prompt: "Modern uses of Baybayin include…", choices: ["Calligraphy", "Banking", "Coding", "Stock trading"], answer: 0 },
    { prompt: "Which movement helps revive Baybayin?", choices: ["Baybayin activism", "Spanish colonization", "Americanization", "Industrialization"], answer: 0 },
    { prompt: "Baybayin is visible today in…", choices: ["Tattoos", "Ancient ruins only", "Maps only", "No longer used"], answer: 0 },
    { prompt: "Baybayin revival connects to…", choices: ["National identity", "Business only", "Sports", "Food"], answer: 0 },
    { prompt: "Which is correct about Baybayin in modern use?", choices: ["Only historians know it", "It is part of digital Unicode", "It cannot be typed", "It is illegal"], answer: 1 },
    { prompt: "Baybayin appears in…", choices: ["Government seals", "U.S. dollars", "Foreign textbooks", "TV subtitles"], answer: 0 },
    { prompt: "Baybayin in fashion appears as…", choices: ["T-shirt prints", "Shoes only", "Cars", "Glasses"], answer: 0 },
    { prompt: "Which group promotes Baybayin education?", choices: ["Activists & artists", "Only Spanish priests", "Americans", "None"], answer: 0 },
    { prompt: "Baybayin can be typed in…", choices: ["Unicode keyboards", "Only handwriting", "Morse code", "Roman numerals"], answer: 0 },
    { prompt: "Which phrase is TRUE?", choices: ["Baybayin is forgotten forever", "Baybayin is revived today", "Baybayin is only math", "Baybayin is European"], answer: 1 },
    { prompt: "Digital Baybayin fonts exist because of…", choices: ["Unicode", "Braille", "Binary", "Morse"], answer: 0 },
    { prompt: "The modern role of Baybayin is…", choices: ["Cultural revival", "Economic tool", "Math system", "Scientific formula"], answer: 0 },
    { prompt: "Baybayin’s survival today is linked to…", choices: ["Unicode and activism", "Decline during Spanish rule", "Lack of use in schools", "Only oral tradition"], answer: 0 },
    { prompt: "The Baybayin Unicode block allows…", choices: ["Writing Baybayin digitally", "Translating into Spanish", "Removing Baybayin from use", "Turning Baybayin into numbers"], answer: 0 },
    { prompt: "Baybayin keyboards are available in…", choices: ["Computers and smartphones", "Only old typewriters", "Calculators", "None"], answer: 0 },
    { prompt: "The cultural revival of Baybayin is seen in…", choices: ["Education, art, and technology", "Farming and fishing", "Medicine only", "Sports tournaments"], answer: 0 },
    { prompt: "A symbol of heritage often used in design and clothing is…", choices: ["Baybayin", "Latin alphabet", "Binary code", "Braille"], answer: 0 },
    { prompt: "Baybayin activism shows that Baybayin is…", choices: ["A living script", "Dead language", "Only for tattoos", "European in origin"], answer: 0 },
    { prompt: "Modern art with Baybayin includes…", choices: ["Murals and posters", "Only government records", "Ancient stone carvings only", "Foreign logos"], answer: 0 },
    { prompt: "Baybayin’s digital presence makes it…", choices: ["Accessible worldwide", "Limited only to the Philippines", "Illegal in schools", "Used only for math"], answer: 0 },
    { prompt: "The inclusion of Baybayin in Unicode means…", choices: ["It can be shared globally online", "It cannot be used in computers", "It was erased from history", "It is exclusive to Spanish texts"], answer: 0 },
    { prompt: "Why does Baybayin matter in the modern world?", choices: ["It connects Filipinos to ancestral identity", "It replaces English completely", "It is only decorative", "It has no real purpose"], answer: 0 },
  ];

  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [wrongAnswers, setWrongAnswers] = useState<
    { question: string; correct: string; chosen: string }[]
  >([]);

  // Shuffle and pick only 10 questions
  useEffect(() => {
    const selected = shuffleArray(questions).slice(0, 10);
    setShuffledQuestions(selected);
  }, []);

  const handleAnswer = (idx: number) => {
    const currentQ = shuffledQuestions[current];
    if (idx === currentQ.answer) {
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => [
        ...prev,
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
    setShuffledQuestions(shuffleArray(questions).slice(0, 10)); // reshuffle and pick new 10
  };

  if (!shuffledQuestions.length) return <p>Loading quiz...</p>;

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 10 Quiz</h1>
        <Link href="/learnbaybayin/lesson-baybayin/10" className={styles.backLink}>
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
                ← Back to Lesson
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
