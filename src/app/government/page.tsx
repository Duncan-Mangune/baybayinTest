import styles from "./govern.module.css";
import Link from "next/link";

export default function GovernmentPage() {
  
  return (
    <div className={styles.container}>
        {/* Title & Back Button */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Government Efforts</h1>
        <Link href="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>

       {/* 🚩 Government Efforts Section */}
      <h2 className={`${styles.subtitle} ${styles.govSection}`}>National Writing System Act</h2>
      <p className={styles.textBlock}>
        The Philippine government has taken steps to revive and preserve
        Baybayin as part of the nation’s cultural identity. In the Senate,
        Senate Bill No. 1866 – The National Writing System Act seeks to promote,
        protect, and conserve Baybayin as a tool for cultural development.
        Meanwhile, in the House of Representatives, the House Committee on Basic
        Education and Culture has approved the proposal to declare Baybayin as
        the national writing system of the Philippines, reinforcing its
        importance as a symbol of heritage and pride.
      </p>

      <div className={styles.govCard}>
        <h3 className={styles.govTitle}>Senate Bill No. 1866</h3>
        <p className={styles.govText}>
          <strong>National Writing System Act</strong> — An Act promoting the
          use of Baybayin as a tool for cultural development of the Philippines,
          filed on <em>February 13, 2023</em> by Senator{" "}
          <strong>Loren Legarda</strong>. Currently pending in the Committee.
        </p>
        <a
          href="https://web.senate.gov.ph/lis/bill_res.aspx?congress=19&q=SBN-1866"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.govLink}
        >
          📜 View Proposed Bill
        </a>
      </div>

    </div>
  );
}
