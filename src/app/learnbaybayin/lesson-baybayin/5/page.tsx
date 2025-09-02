import styles from "./5.module.css";
import Link from "next/link";

export default function Lesson5() { 
  const baybayinChars = [
    { img: "/images/ba.png", label: "ba" },
    { img: "/images/ta.png", label: "ta" },
    { img: "/images/la.png", label: "la" },
    { img: "/images/ga.png", label: "ga" },
    { img: "/images/na.png", label: "na" },
    { img: "/images/sa.png", label: "sa" },
    { img: "/images/ma.png", label: "ma" },
    { img: "/images/pa.png", label: "pa" },
    { img: "/images/da_ra.png", label: "da/ra" },
    { img: "/images/a.png", label: "a" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Lesson 5: Writing Your First Words</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Lesson Page
        </Link>
      </div>

      <h2 className={styles.subtitle}>Lesson Content:</h2>

      <p className={styles.textBlock}>
        Baybayin is a <strong>syllabic writing system</strong> (abugida), where each character represents a consonant + vowel sound. Words are written syllable by syllable, not letter by letter.
      </p>

      <p className={styles.textBlock}><strong>Key Symbols:</strong></p>

      <div className={styles.chartGrid}>
        {baybayinChars.map((char, idx) => (
          <div key={idx} className={styles.chartButton}>
            <img src={char.img} alt={char.label} className={styles.charImage} />
            <p className={styles.charLabel}>{char.label}</p>
          </div>
        ))}
      </div>

      <p className={styles.textBlock}><strong>Example Applications:</strong></p>
      <p className={styles.textBlock}>
        ᜊᜆ = bata → ba + ta <br />
        ᜎᜓᜉ = lupa → lu + pa <br />
        ᜄᜈᜇ = ganda → ga + na + da <br />
        ᜋᜆ = mata → ma + ta <br />
        ᜐᜋ = sama → sa + ma <br />
        ᜇᜓ = du → da with kudlit below <br />
        ᜉᜓᜐᜓ = puso → pu + so <br />
        ᜄᜋ = gama → ga + ma <br />
        ᜀᜎ = ala → a + la
      </p>

      <p className={styles.textBlock}>
        Quiz: Quiz Time! Read each questionnaire and click on the choice you think is correct. 
        After finishing, review your answers and proceed to the next lesson.
      </p>

      <div className={styles.buttonRow}>
        <Link href="/learnbaybayin/lesson-baybayin/4" className={styles.navButton}>
          ← Previous Lesson
        </Link>
        <Link href="/learnbaybayin/lesson-baybayin/5/quiz" className={styles.quizButton}>
          Take Quiz →
        </Link>
        <Link href="/learnbaybayin/lesson-baybayin/6" className={styles.navButton}>
          Next Lesson →
        </Link>
      </div>

      <p className={styles.textBlock}>
        <strong>References:</strong>
      </p>

      <p className={styles.textBlock}>
       
          Simon Ager
          Link: https://www.omniglot.com/writing/baybayin.htm
          Site: Omniglot – Writing Systems & Languages
          Omniglot.
          "Baybayin Script."
          https://www.omniglot.com/writing/baybayin.htm

      </p>

    </div>
  );
}
