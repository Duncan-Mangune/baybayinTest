import styles from "./6.module.css";
import Link from "next/link";

export default function Lesson6() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 6: Writing Your Name in Baybayin</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      {/* Lesson Content */}
      <h2 className={styles.subtitle}>Lesson Content:</h2>

      <p className={styles.textBlock}>
        Baybayin is a <strong>syllabic script</strong>, which means names are
        written by breaking them into syllables, not letter by letter. Each
        symbol represents a consonant with an inherent vowel, and{" "}
        <strong>kudlit</strong> marks change the vowel.
      </p>

      <p className={styles.textBlock}>
        The character ᜇ (da/ra) is important when writing names because it can
        represent both “da” and “ra.”
      </p>

      <p className={styles.textBlock}>
        <strong>Examples:</strong>
      </p>
      <p className={styles.textBlock}>
        Maria → Ma-ri-a → ᜋᜇᜀ <br />
        Pedro → Pe-dro → ᜉᜇᜓ <br />
        Liza → Li-za → ᜎᜒᜐ <br />
        ᜊ → ᜊᜒ → ᜊᜓ <br />
        ᜐ → ᜐᜒ → ᜐᜓ
      </p>

      <p className={styles.textBlock}>
        Writing names requires: <br />
        • Breaking into syllables <br />
        • Choosing the correct symbol <br />
        • Adding kudlit marks for vowel changes
      </p>

      <p className={styles.textBlock}>
        <strong>Quiz:</strong> Quiz Time! Read each questionnaire and click on
        the choice you think is correct. After finishing, review your answers
        and proceed to the next lesson.
      </p>

      {/* Navigation */}
      <div className={styles.buttonRow}>
        <Link
          href="/learnbaybayin/lesson-baybayin/5"
          className={styles.navButton}
        >
          ← Previous Lesson
        </Link>
        <Link
          href="/learnbaybayin/lesson-baybayin/6/quiz"
          className={styles.quizButton}
        >
          Take Quiz →
        </Link>
        <Link
          href="/learnbaybayin/lesson-baybayin/7"
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
          National Museum of the Philippines.{" "}
          <a
            href="https://www.nationalmuseum.gov.ph/baybayin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baybayin: A Writing System of Our Own
          </a>
        </li>
        <li>
          Cabuay, Christian.{" "}
          <a
            href="http://www.baybayin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Baybayin Consonants and Syllables
          </a>{" "}
          (Baybayin.com)
        </li>
        <li>
          Omniglot.{" "}
          <a
            href="https://www.omniglot.com/writing/baybayin.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baybayin Script
          </a>
        </li>
        <li>
          Wikipedia Contributors.{" "}
          <a
            href="https://en.wikipedia.org/wiki/Baybayin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baybayin
          </a>
        </li>
      </ul>
    </div>
  );
}
