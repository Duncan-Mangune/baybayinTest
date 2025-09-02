import styles from "./2.module.css";
import Link from "next/link";

export default function Lesson2() {
  const baybayinChars = [
    { img: "/images/a.png", label: "A" },
    { img: "/images/ei.png", label: "E / I" },
    { img: "/images/ou.png", label: "O / U" },
  ];

  return (
    <div className={styles.container}>
      {/* Top row: title left, back link right */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 2: The Vowels – A, I/E, U/O</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      <h2 className={styles.subtitle}>Lesson Content:</h2>
      <p className={styles.textBlock}>Baybayin uses three vowels:</p>

      <div className={styles.chartGrid}>
        {baybayinChars.map((char, idx) => (
          <div key={idx} className={styles.chartButton}>
            <img
              src={char.img}
              alt={char.label}
              className={styles.charImage}
            />
            <p className={styles.charLabel}>{char.label}</p>
          </div>
        ))}
      </div>

      <p className={styles.textBlock}>
        These vowels are fewer than in the English alphabet, which has five (A,
        E, I, O, U). Instead of representing letters individually, Baybayin
        vowels represent whole sounds (syllables). The vowel ᜀ (A) comes first
        in Baybayin order and stands for the &quot;A&quot; sound. The vowel ᜁ
        (I/E) is pronounced as &quot;I&quot; or &quot;E&quot; depending on
        context. The vowel ᜂ (U/O) is unique because it can sound like
        &quot;U&quot; or &quot;O.&quot; It is often shaped like a small hook.
        Vowels in Baybayin can stand alone or combine with consonants to form
        abugida syllables. This makes them the foundation of the script.
      </p>

      {/* Navigation buttons */}
      <div className={styles.buttonRow}>
        <Link
          href="/learnbaybayin/lesson-baybayin/1"
          className={styles.navButton}
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/learnbaybayin/lesson-baybayin/2/quiz"
          className={styles.quizButton}
        >
          Take Quiz →
        </Link>

        <Link
          href="/learnbaybayin/lesson-baybayin/3"
          className={styles.navButton}
        >
          Next Lesson →
        </Link>
      </div>

      <p className={styles.textBlock}>
        <strong>References:</strong>
      </p>

      <ul className={styles.textBlock}>
        <li>
          National Commission for Culture and the Arts (NCCA). &quot;Baybayin:
          Ancient Script of the Philippines.&quot; –{" "}
          <a
            href="https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-cultural-disseminations-scd/cultural-heritage-education-and-information/baybayin-ancient-script-of-the-philippines/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </li>
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
          Cabuay, Christian. &quot;Baybayin Vowels and Writing System.&quot; –{" "}
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
