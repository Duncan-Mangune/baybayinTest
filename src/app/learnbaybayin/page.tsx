"use client";

import Link from "next/link";
import styles from "./learnbaybayin.module.css";

export default function LearnBaybayinPage() {
  // Custom lesson titles
  const lessons = [
    "Lesson 1: Discovering Baybayin",
    "Lesson 2: The Baybayin Alphabet",
    "Lesson 3: Kudlit Vowel Marks",
    "Lesson 4: Consonant Clusters",
    "Lesson 5: Writing Simple Words",
    "Lesson 6: Names in Baybayin",
    "Lesson 7: Sentences in Baybayin",
    "Lesson 8: Historical Usage",
    "Lesson 9: Modern Applications",
    "Lesson 10: Practice & Mastery",
  ];

   const baybayinChars = [
    { img: "/images/a.png", label: "A" },
    { img: "/images/ei.png", label: "E / I" },
    { img: "/images/ou.png", label: "O / U" },
    { img: "/images/ba.png", label: "Ba" },
    { img: "/images/ka.png", label: "Ka" },
    { img: "/images/da_ra.png", label: "Da / Ra" },
    { img: "/images/ga.png", label: "Ga" },
    { img: "/images/ha.png", label: "Ha" },
    { img: "/images/la.png", label: "La" },
    { img: "/images/ma.png", label: "Ma" },
    { img: "/images/na.png", label: "Na" },
    { img: "/images/nga.png", label: "Nga" },
    { img: "/images/pa.png", label: "Pa" },
    { img: "/images/sa.png", label: "Sa" },
    { img: "/images/ta.png", label: "Ta" },
    { img: "/images/wa.png", label: "Wa" },
    { img: "/images/ya.png", label: "Ya" },
  ];

  return (
    <section className={styles.container}>
      {/* Title & Back Button*/}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Learn Baybayin</h1>
        <Link href="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>

      

      {/* Title + Description + Tips + Goal */}
      <div className={styles.textBlock}>


        <h2 className={styles.title}>The Baybayin Chart</h2>
        <div className={styles.chartGrid}>
          {baybayinChars.map((char, idx) => (
            <div key={idx} className={styles.chartButton}>
              <img src={char.img} alt={char.label} className={styles.charImage} />
              <p className={styles.charLabel}>{char.label}</p>
            </div>
          ))}
        </div>

        
        {/* Big Buttons */}
       {/*  <div className={styles.buttonGroup}> */}


          {/* <Link
            href="/translator"
            className={`${styles.bigButton} ${styles.translator}`}
          >
            Baybayin Translator
          </Link> */}

         
      {/*   </div> */}

        <h1 className={styles.title}>Baybayin Lessons:</h1>
        <p>
          Welcome to your Baybayin learning journey! This course is divided into
          10 lessons that will guide you step by step, from discovering
          Baybayin’s history to writing full words and sentences in the script.
        </p>
        <p>
          Start from Lesson 1 and move forward in order. Each lesson builds on
          the previous one.
        </p>
        <p>Read the explanations carefully and take your time with the examples.</p>
        <p>
          Look at the Baybayin characters closely. Notice how the shapes change
          with different marks.
        </p>
        <p className={styles.spacing}>
          Practice mentally by saying the characters out loud while reading.
          This helps with memory.
        </p>

        {/* Lesson Buttons */}
        <div className={styles.lessonList}>
          {lessons.map((title, idx) => (
            <Link
              key={idx}
              href={`/learnbaybayin/lesson-baybayin/${idx + 1}`}
              className={styles.lessonBtn}
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Tips */}
        <h2 className={styles.subtitle}>Tips for Learning</h2>
        <ul>
          <li>Repeat the characters and sounds as often as you can.</li>
          <li>
            Try to spot similarities (e.g., kudlit marks work the same across
            different consonants).
          </li>
          <li>
            Imagine writing your own name or favorite word in Baybayin — this
            makes the script feel more personal.
          </li>
          <li>Don’t rush. Take one lesson at a time.</li>
        </ul>

        {/* Goal */}
        <h2 className={styles.subtitle}>Goal of the Course</h2>
        <ul>
          <li>Recognize and read Baybayin characters.</li>
          <li>Write simple words, names, and sentences.</li>
          <li>Appreciate Baybayin as a living part of Filipino culture.</li>
        </ul>
      </div>
    </section>
  );
}
