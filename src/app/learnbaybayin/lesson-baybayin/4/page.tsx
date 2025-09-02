import styles from "./4.module.css";
import Link from "next/link";

export default function Lesson4() { 
  const baybayinChars = [
    { img: "/images/ta.png", label: "ta" },
    { img: "/images/ba.png", label: "ba" },
    { img: "/images/ma.png", label: "ma" },
  ];

  const baybayinChars2 = [
    { img: "/images/ba.png", label: "bu" },
    { img: "/images/la.png", label: "li" },
    { img: "/images/pa.png", label: "pi" },
  ];

  return (
    <div className={styles.container}>
      {/* Top row: title left, back link right */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 4: The Kudlit – Changing Sounds</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      <h2 className={styles.subtitle}>Lesson Content:</h2>

      <p className={styles.textBlock}>
        In Baybayin, <strong>kudlit</strong> are small marks placed above or below a consonant to change its vowel sound. <br />
        By default, consonants end with <strong>A</strong> (e.g., ᜆ = ta, ᜊ = ba). <br />
        A kudlit <em>above</em> the character changes the vowel to <strong>I</strong> or <strong>E</strong> (e.g., ᜋ → ᜋᜒ = me/mi). <br />
        A kudlit <em>below</em> the character changes the vowel to <strong>U</strong> or <strong>O</strong> (e.g., ᜋ → ᜋᜓ = mu/mo). <br />
        Kudlit marks therefore change the vowel sounds, not the consonants themselves.
      </p>

      <p className={styles.textBlock}>
        This system makes Baybayin an <strong>abugida</strong>, where consonant-vowel combinations are created by using diacritic marks.
      </p>

      <p className={styles.textBlock}><strong>Examples:</strong></p>

      <div className={styles.chartGrid}>
        {baybayinChars.map((char, idx) => (
          <div key={idx} className={styles.chartButton}>
            <img src={char.img} alt={char.label} className={styles.charImage} />
            <p className={styles.charLabel}>{char.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.chartGrid}>
        {baybayinChars2.map((char, idx) => (
          <div key={idx} className={styles.chartButton}>
            <img src={char.img} alt={char.label} className={styles.charImage} />
            <p className={styles.charLabel}>{char.label}</p>
          </div>
        ))}
      </div>

      <p className={styles.textBlock}>
        Examples: <br />
        ᜊᜓᜐ (busa) = foam → ᜊ (ba) with kudlit below becomes bu. <br />
        ᜇᜎᜒ (dali) = quick → ᜎ (la) with kudlit above becomes li. <br />
        ᜉᜎᜒᜎ (pili) = choose → ᜉ (pa) with kudlit above becomes pi.
      </p>

      <p className={styles.textBlock}>
        Quiz: Quiz Time! Read each questionnaire and click on the choice you think is correct. 
        After finishing, review your answers and proceed to the next lesson.
      </p>

      {/* Navigation buttons */}
      <div className={styles.buttonRow}>
        <Link href="/learnbaybayin/lesson-baybayin/3" className={styles.navButton}>
          ← Previous Lesson
        </Link>
        <Link href="/learnbaybayin/lesson-baybayin/4/quiz" className={styles.quizButton}>
          Take Quiz →
        </Link>
        <Link href="/learnbaybayin/lesson-baybayin/5" className={styles.navButton}>
          Next Lesson →
        </Link>
      </div>



    <p className={styles.textBlock}>
        <strong>References:</strong>
      </p>

      <p className={styles.textBlock}>
       
      "Baybayin: A Writing System of Our Own."
      https://www.nationalmuseum.gov.ph/baybayin/
      Cabuay, Christian.
      "Baybayin Script and Kudlit Marks." (Baybayin.com)
      http://www.baybayin.com
      </p>

    </div>
  );
}
