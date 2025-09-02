import styles from "./8.module.css";
import Link from "next/link";

export default function Lesson8() { 
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 8: Reading Sentences in Baybayin</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      <h2 className={styles.subtitle}>Lesson Content:</h2>

      <p className={styles.textBlock}>
        Baybayin is a syllabic script where each symbol represents a consonant followed by a vowel. 
        To write sentences, words are broken into syllables and written with their corresponding symbols. 
        <strong>Kudlit</strong> changes vowel sounds, while the <strong>Pamudpod (᜔)</strong> cancels the vowel, 
        allowing consonants to stand alone.
      </p>

      <p className={styles.textBlock}><strong>Examples:</strong><br />
        bata → ᜊᜆ <br />
        guro → ᜄᜓᜇᜓ <br />
        bundok → ᜊᜓᜈ᜔ᜇᜓᜃ᜔ <br />
      </p>

      <p className={styles.textBlock}><strong>Sentence Examples:</strong><br />
        Ako (I) → ᜀᜃᜓ <br />
        Maganda (beautiful) → ᜋᜄᜈ᜔ᜇ <br />
        Ako ay bata → ᜀᜃᜓ ᜀᜌ᜔ ᜊᜆ <br />
        Ako ay maganda → ᜀᜃᜓ ᜀᜌ᜔ ᜋᜄᜈ᜔ᜇ <br />
      </p>

      <p className={styles.textBlock}>
        Quiz: Quiz Time! Read each questionnaire and click on the choice you think is correct. 
        After finishing, review your answers and proceed to the next lesson.
      </p>

      <div className={styles.buttonRow}>
        <Link href="/learnbaybayin/lesson-baybayin/7" className={styles.navButton}>
          ← Previous Lesson
        </Link>
        <Link href="/learnbaybayin/lesson-baybayin/8/quiz" className={styles.quizButton}>
          Take Quiz →
        </Link>
        <Link href="/learnbaybayin/lesson-baybayin/9" className={styles.navButton}>
          Next Lesson →
        </Link>
      </div>
      
       <p className={styles.textBlock}>
        <strong>References:</strong>
      </p>

      <p className={styles.textBlock}>
       
      Sinaunang Panahon.
      "The Baybayin Writing System."
      https://sinaunangpanahon.com/the-baybayin-writing-system/
      Everything Explained Today.
      "Baybayin Explained."
      https://everything.explained.today/Baybayin/
      Wikipedia Contributors.
      "Baybayin." Wikipedia.
      https://en.wikipedia.org/wiki/Baybayin

      </p>
    </div>
  );
}
