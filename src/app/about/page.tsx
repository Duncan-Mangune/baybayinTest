import styles from "./about.module.css";
import Link from "next/link";

export default function About() {
  return (
      <div className={styles.container}>
    <div className={styles.headerRow}>
          <h1 className={styles.title}>About</h1>
          <Link href="/" className={styles.backLink}>
            ← Home
          </Link>
       </div>
        {/* Logo section */}
      
      <div className={styles.logoContainer}>
        <img
          src="/images/Title.png" // replace with your actual logo path
          alt="Know More Baybayin Logo"
          className={styles.logo}
        />
      </div>

      <h2 className={styles.subtitle}>Goal</h2>
      <p className={styles.textBlock}>
        “Know More Baybayin” is a digital learning platform dedicated to the education and preservation of Baybayin,
        the ancient pre-colonial script of the Philippines. Its primary objective is to promote Filipino cultural
        heritage by providing an accessible, structured, and interactive environment for learning Baybayin.
        Through comprehensive lessons, assessments, and curated digital resources, the platform seeks to foster
        cultural awareness, historical appreciation, and linguistic competence among learners of all ages. By bridging
        traditional heritage with modern technology, “Know More Baybayin” aims to ensure the continued relevance and
        transmission of this significant aspect of Philippine history.
      </p>
    </div>
  );
}
