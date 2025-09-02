import styles from "./3.module.css";
import Link from "next/link";

export default function Lesson2() {
  const baybayinChars = [
    { img: "/images/ba.png", label: "ba" },
    { img: "/images/ka.png", label: "ka" },
    { img: "/images/ga.png", label: "ga" },
    { img: "/images/da_ra.png", label: "da" },
    { img: "/images/ha.png", label: "ma" },
    { img: "/images/ha.png", label: "ra" },
    { img: "/images/ha.png", label: "sa" },
  ];

  const baybayinChars2 = [
    { img: "/images/ba.png", label: "ba" },
    { img: "/images/ma.png", label: "ma" },
    { img: "/images/ka.png", label: "ka" },
    { img: "/images/da_ra.png", label: "da" },
    { img: "/images/sa.png", label: "sa" },
  ];

  return (
    <div className={styles.container}>
      {/* Top row: title left, back link right */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 3: Consonants Made Simple</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      <h2 className={styles.subtitle}>Lesson Content:</h2>

      <p className={styles.textBlock}>
        In Baybayin, consonants always carry an inherent vowel sound unless
        modified by kudlit (diacritics). By default, each consonant is read as
        CV (Consonant + A).
      </p>

      <p className={styles.textBlock}>For example:</p>

      <div className={styles.chartGrid}>
        {baybayinChars.map((char, idx) => (
          <div key={idx} className={styles.chartButton}>
            <img src={char.img} alt={char.label} className={styles.charImage} />
            <p className={styles.charLabel}>{char.label}</p>
          </div>
        ))}
      </div>

      <p className={styles.textBlock}>
        The consonant ᜅ = NGA is special, as it represents the nasal sound
        &quot;NG,&quot; unique to many Philippine languages.
      </p>

      <p className={styles.textBlock}>Without diacritics:</p>

      <div className={styles.chartGrid}>
        {baybayinChars2.map((char, idx) => (
          <div key={idx} className={styles.chartButton}>
            <img src={char.img} alt={char.label} className={styles.charImage} />
            <p className={styles.charLabel}>{char.label}</p>
          </div>
        ))}
      </div>

      {/* Quiz */}
      <p className={styles.textBlock}>
        <strong>Quiz:</strong> Quiz Time! Read each questionnaire and click on
        the choice you think is correct. After finishing, review your answers
        and proceed to the next lesson.
      </p>

      {/* Navigation buttons */}
      <div className={styles.buttonRow}>
        <Link
          href="/learnbaybayin/lesson-baybayin/2"
          className={styles.navButton}
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/learnbaybayin/lesson-baybayin/3/quiz"
          className={styles.quizButton}
        >
          Take Quiz →
        </Link>

        <Link
          href="/learnbaybayin/lesson-baybayin/4"
          className={styles.navButton}
        >
          Next Lesson →
        </Link>
      </div>

      {/* References */}
      <p className={styles.textBlock}>
        <strong>References:</strong>
      </p>

      <ul className={styles.textBlock}>
        <li>
          National Museum of the Philippines. &quot;Baybayin: A Writing System
          of Our Own.&quot; –{" "}
          <a
            href="https://www.nationalmuseum.gov.ph/baybayin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </li>
        <li>
          Cabuay, Christian. &quot;Introduction to Baybayin Consonants and
          Syllables.&quot; –{" "}
          <a
            href="http://www.baybayin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baybayin.com
          </a>
        </li>
      </ul>
    </div>
  );
}
