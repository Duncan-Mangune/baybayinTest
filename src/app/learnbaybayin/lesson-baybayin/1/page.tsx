import styles from "./1.module.css";
import Link from "next/link";

export default function Lesson2() {
  const baybayinChars = [
    { img: "/images/ba.png", label: "ba" },
    { img: "/images/ka.png", label: "ka" },
    { img: "/images/da_ra.png", label: "da" },
    { img: "/images/ga.png", label: "ga" },
    { img: "/images/ha.png", label: "ha" },
  ];

  return (
    <div className={styles.container}>
      {/* Top row: title left, back link right */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 1: Discovering Baybayin</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      <h2 className={styles.subtitle}>Lesson Content:</h2>

      <p className={styles.textBlock}>
        Baybayin is an ancient pre-colonial script used in the Philippines before
        the Spanish arrival. It is part of the abugida writing system, where each
        symbol represents a consonant + vowel syllable rather than a single
        letter. The word Baybayin itself comes from the Filipino word baybay,
        meaning &quot;to spell.&quot; Baybayin was widely used in Luzon and
        Visayas during the pre-colonial period as a primary form of writing for
        poetry, personal communication, and record-keeping. Spanish colonizers
        later introduced the Latin alphabet, which eventually replaced Baybayin
        because it competed with Latin letters used in religious and government
        records. Despite this decline, Baybayin remains an important cultural
        heritage and symbol of identity. Today, Baybayin is being revived through
        Unicode integration in modern technology, as well as through schools and
        cultural movements. Its symbols can be compared to other syllabaries such
        as Japanese Kana.
      </p>

      <p className={styles.textBlock}>
        <strong>Examples:</strong>
      </p>

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

      {/* Navigation buttons */}
      <div className={styles.buttonRow}>
        <Link
          href="/learnbaybayin/lesson-baybayin/1/quiz"
          className={styles.quizButton}
        >
          Take Quiz →
        </Link>

        <Link
          href="/learnbaybayin/lesson-baybayin/2"
          className={styles.navButton}
        >
          Next Lesson →
        </Link>
      </div>

      <p className={styles.textBlock}>
        <strong>References:</strong>
      </p>

      <p className={styles.textBlock}>
        National Commission for Culture and the Arts (NCCA). <br />
        <a
          href="https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-cultural-disseminations-scd/cultural-heritage-education-and-information/baybayin-ancient-script-of-the-philippines/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Link: Ancient Script of the Philippines
        </a>
        <br />
        Author: NCCA
        <br />
        <br />
        National Museum of the Philippines. <br />
        <a
          href="https://www.nationalmuseum.gov.ph/baybayin/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Link: A Writing System of Our Own
        </a>
        <br />
        Author: National Museum
      </p>
    </div>
  );
}
