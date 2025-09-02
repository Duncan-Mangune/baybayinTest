import styles from "./9.module.css";
import Link from "next/link";

export default function Lesson9() { 
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 9: Baybayin in History and Culture</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      <h2 className={styles.subtitle}>Lesson Content:</h2>

      <p className={styles.textBlock}>
        Baybayin is more than just a writing system—it is deeply tied to Filipino history and cultural identity. 
        Early Filipinos used Baybayin in poetry, communication, and signing documents. 
        It was widely practiced in Luzon and the Visayas.
      </p>

      <p className={styles.textBlock}>
        Its use declined during the Spanish period because colonizers discouraged it and promoted the Latin alphabet. 
        Fortunately, Baybayin was preserved in Spanish missionary records, allowing modern scholars to study it.
      </p>

      <p className={styles.textBlock}>
        Today, Baybayin is regarded as a <strong>living script</strong> and a <strong>symbol of identity</strong>. 
        It appears in tattoos, art, and literature, reflecting cultural pride and historical creativity.
      </p>

      <p className={styles.textBlock}>
        Quiz: Quiz Time! Read each questionnaire and click on the choice you think is correct. 
        After finishing, review your answers and proceed to the next lesson.
      </p>

      <div className={styles.buttonRow}>
        <Link href="/learnbaybayin/lesson-baybayin/8" className={styles.navButton}>
          ← Previous Lesson
        </Link>
        <Link href="/learnbaybayin/lesson-baybayin/9/quiz" className={styles.quizButton}>
          Take Quiz →
        </Link>
        <Link href="/learnbaybayin/lesson-baybayin/10" className={styles.navButton}>
          Next Lesson →
        </Link>
      </div>
      <p className={styles.textBlock}>
        <strong>References:</strong>
      </p>

      <p className={styles.textBlock}>
       
      Fluent Filipino.	“The Evolution of Filipino Writing Scripts.” https://fluentfilipino.com/the-evolution-of-
      filipino-writing-scripts/ HAPI Humanist.“Baybayin: How This Ancient Pinoy Script’s Legacy Lives On.” https://
      hapihumanist.org/2022/08/18/baybayin-legacy/ Wikipedia Contributors.	“Baybayin.” Wikipedia. 				
      https://en.wikipedia.org/wiki/Baybayin

      </p>

    </div>
  );
}
