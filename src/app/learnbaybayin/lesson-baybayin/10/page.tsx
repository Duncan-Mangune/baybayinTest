import styles from "./10.module.css";
import Link from "next/link";

export default function Lesson10() { 
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 10: Baybayin in the Modern World</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      <h2 className={styles.subtitle}>Lesson Content:</h2>

      <p className={styles.textBlock}>
        Baybayin continues to thrive in the modern era as a cultural symbol and form of identity. 
        Today, it is commonly seen in tattoos, calligraphy, fashion, and even government seals.
      </p>

      <p className={styles.textBlock}>
        Its revival is fueled by <strong>Baybayin activism</strong>, a movement of artists, educators, 
        and advocates who push for its teaching and creative use. 
        Unicode support (ᜀ–᜔) also made Baybayin usable on digital platforms worldwide.
      </p>

      <p className={styles.textBlock}>
        Baybayin is not only history—it is a <strong>living script</strong> that connects Filipinos 
        to their heritage through education, art, and technology.
      </p>

      <p className={styles.textBlock}>
        Quiz: Quiz Time! Read each questionnaire and click on the choice you think is correct. 
        After finishing, review your answers and proceed to the next lesson.
      </p>

      <div className={styles.buttonRow}>
        <Link href="/learnbaybayin/lesson-baybayin/9" className={styles.navButton}>
          ← Previous Lesson
        </Link>
        <Link href="/learnbaybayin/lesson-baybayin/10/quiz" className={styles.quizButton}>
          Take Quiz →
        </Link>

        <Link href="/learnbaybayin" className={styles.navButton}>
          Back to Lessons Page
        </Link>
      </div>

      <p className={styles.textBlock}>
        <strong>References:</strong>
      </p>

      <p className={styles.textBlock}>
        Wikipedia Contributors.&quot;Baybayin.&quot; Wikipedia.{" "}
        <a href="https://en.wikipedia.org/wiki/Baybayin" target="_blank" rel="noopener noreferrer">
          https://en.wikipedia.org/wiki/Baybayin
        </a>
        <br />
        Wikipedia Contributors.&quot;Tagalog (Unicode block).&quot; Wikipedia.{" "}
        <a href="https://en.wikipedia.org/wiki/Tagalog_%28Unicode_block%29" target="_blank" rel="noopener noreferrer">
          https://en.wikipedia.org/wiki/Tagalog_%28Unicode_block%29
        </a>
        <br />
        Esquire Philippines.&quot;10 Modern Baybayin Fonts That Are Free.&quot;{" "}
        <a href="https://www.esquiremag.ph/culture/design/baybayin-fonts-a1926-20190806-lfrm" target="_blank" rel="noopener noreferrer">
          https://www.esquiremag.ph/culture/design/baybayin-fonts-a1926-20190806-lfrm
        </a>
      </p>
    </div>
  );
}
