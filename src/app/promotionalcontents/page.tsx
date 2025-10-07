import styles from "./promotionalcontents.module.css";
import Link from "next/link";

export default function PromotionalContents() {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Promotional Contents</h1>
        <Link href="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>

      <p className={styles.introText}>
        Choose where you want to go — explore our Baybayin Awareness Campaign or browse
        cultural Merchandise featuring Baybayin designs.
      </p>

      <div className={styles.buttonGrid}>
        {/* Awareness Campaign Button */}
        <Link href="/awareness-campaign" className={styles.bigButton}>
          <img
            src="/images/Campaign.jpg"
            alt="Baybayin Awareness Campaign"
            className={styles.buttonImage}
          />
          <div className={styles.buttonOverlay}>
            <h2>📢 Awareness Campaign</h2>
            <p>Join and promote Baybayin heritage online.</p>
          </div>
        </Link>

        {/* Merchandise Button */}
        <Link href="/merchandise" className={styles.bigButton}>
          <img
            src="/images/Shirt.jpg"
            alt="Baybayin Merchandise"
            className={styles.buttonImage}
          />
          <div className={styles.buttonOverlay}>
            <h2>🛍️ Merchandise</h2>
            <p>Explore Baybayin-inspired products and designs.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
