import styles from "./baybayinalphabet.module.css";
import Link from "next/link";

export default function BaybayinAlphabet() {
  const baybayinChars = [
    { img: "/images/a.png", label: "A" },
    { img: "/images/ei.png", label: "E / I" },
    { img: "/images/ou.png", label: "O / U" },
    { img: "/images/ba.png", label: "Ba" },
    { img: "/images/ka.png", label: "Ka" },
    { img: "/images/da_ra.png", label: "Da / Ra" },
    { img: "/images/ga.png", label: "Ga" },
    { img: "/images/ha.png", label: "Ha" },
    { img: "/images/la.png", label: "La" },
    { img: "/images/ma.png", label: "Ma" },
    { img: "/images/na.png", label: "Na" },
    { img: "/images/nga.png", label: "Nga" },
    { img: "/images//pa.png", label: "Pa" },
    { img: "/images/sa.png", label: "Sa" },
    { img: "/images/ta.png", label: "Ta" },
    { img: "/images/wa.png", label: "Wa" },
    { img: "/images/ya.png", label: "Ya" },
  ];

  return (
    <div className={styles.container}>
      {/* Top row: title left, back link right */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>The Baybayin Chart</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Back
        </Link>
      </div>

      {/* Chart grid */}
      <div className={styles.chartGrid}>
        {baybayinChars.map((char, idx) => (
          <div key={idx} className={styles.chartButton}>
            <img src={char.img} alt={char.label} className={styles.charImage} />
            <p className={styles.charLabel}>{char.label}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.subtitle}>Description</h2>
      <p className={styles.textBlock}>
        This is the standard Baybayin chart with 17 characters: 
        14 basic consonant-vowel syllables and 3 vowels. Each consonant 
        carries an inherent <strong>“a”</strong> sound, and vowel changes are 
        made by adding diacritics above (for “e/i”) or below (for “o/u”).
      </p>
    </div>
  );
}
