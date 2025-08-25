import styles from "./1.module.css";
import Link from "next/link";

export default function Lesson1() {
  return (
    <div className={styles.container}>

      {/* Top row: title left, back link right */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 1: Discovering Baybayin</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Back
        </Link>
      </div>
      
      <h2 className={styles.subtitle}>Overview:</h2>
      <p className={styles.textBlock}>
        Baybayin is an ancient Philippine script used before Spanish colonization.  
        It comes from the word baybay meaning “to spell.”
      </p>

      <div className={styles.textBlock}>
        <strong>Key Points:</strong>
        <ul>
          <li>Baybayin is a syllabary, not an alphabet.</li>
          <li>Widely used in Luzon and Visayas before Latin letters replaced it.</li>
          <li>Important cultural symbol of identity.</li>
        </ul>
      </div>
    </div>
  );
}
