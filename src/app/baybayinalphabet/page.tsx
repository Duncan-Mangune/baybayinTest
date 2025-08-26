import styles from "./baybayinalphabet.module.css";
import Link from "next/link";
export default function baybayinalphabet() {
  return (
    <div className={styles.container}>

      {/* Top row: title left, back link right */}
      <div className={styles.headerRow}>
       <h1 className={styles.title}>The Baybayin Alphabet </h1>
          <Link href="/" className={styles.backLink}>
          ← Home
           </Link>
       </div>

       <div className={styles.imageWrapper}>
        <img 
          src="/images/BaybayinChart.jpg" 
          alt="Baybayin Alphabet" 
          className={styles.image}
        />
      </div>
       
      <h2 className={styles.subtitle}>Description</h2>
      <p className={styles.textBlock}>
        The Baybayin Alphabet
        
      </p>

        

     
    </div>
  );
}
