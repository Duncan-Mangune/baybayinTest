import styles from "./7.module.css";
import Link from "next/link";

export default function Lesson7() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>
          Lesson 7: Advanced Marks – The Virama
        </h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      {/* Lesson Content */}
      <h2 className={styles.subtitle}>Lesson Content:</h2>

      <p className={styles.textBlock}>
        The Virama (᜔), also known as <strong>Pamudpod</strong>, is a special
        diacritical mark in Baybayin. Its role is to{" "}
        <strong>cancel the inherent vowel</strong> (a, i/e, o/u) that usually
        follows a consonant. Without it, characters always carry a vowel; with
        it, the consonant is pronounced alone.
      </p>

      <p className={styles.textBlock}>
        This feature was introduced during the Spanish period to adapt Baybayin
        for words with closed syllables, common in Filipino and Spanish. <br />
        Example: <br />
        <em>bundok</em> → ᜊᜓᜈ᜔ᜇᜓᜃ᜔
      </p>

      <p className={styles.textBlock}>
        <strong>Examples:</strong>
        <br />
        ᜊ = ba → ᜊ᜔ = b <br />
        ᜐ = sa → ᜐ᜔ = s <br />
        ᜎ = la → ᜎ᜔ = l <br />
        ᜇ = da → ᜇ᜔ = d <br />
      </p>

      <p className={styles.textBlock}>
        The Virama is also called the &quot;silent mark&quot; because it removes
        the vowel sound and leaves only the consonant.
      </p>

      <p className={styles.textBlock}>
        <strong>Quiz:</strong> Quiz Time! Read each question and click on the
        choice you think is correct. After finishing, review your answers and
        proceed to the next lesson.
      </p>

      {/* Navigation */}
      <div className={styles.buttonRow}>
        <Link
          href="/learnbaybayin/lesson-baybayin/6"
          className={styles.navButton}
        >
          ← Previous Lesson
        </Link>
        <Link
          href="/learnbaybayin/lesson-baybayin/7/quiz"
          className={styles.quizButton}
        >
          Take Quiz →
        </Link>
        <Link
          href="/learnbaybayin/lesson-baybayin/8"
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
          LuffyKudō.{" "}
          <a
            href="https://luffykudo.wordpress.com/2020/08/10/how-to-read-and-write-baybayin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Traditional Way and the Reformed Way
          </a>
        </li>
        <li>
          Wikipedia Contributors.{" "}
          <a
            href="https://en.wikipedia.org/wiki/Hanunoo_script"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hanunó&apos;o Script
          </a>
        </li>
      </ul>
    </div>
  );
}
