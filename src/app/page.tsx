"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css"; // 👈 import CSS

export default function HomePage() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      window.location.href = `/results?query=${encodeURIComponent(query)}`;
    }
  };

  return (
    <section className={styles.section}>
      {/* Title */}
      <h1 className={styles.title}>
        Know More<br />Baybayin
      </h1>
      <p className={styles.subtitle}>
        "Reviving our Script, Preserving our Identity."
      </p>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anything related to Baybayin"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      {/* Big Buttons */}
      <div className={styles.buttonGroup}>
        <Link href="/baybayinhistory" className={`${styles.bigButton} ${styles.history}`}>
          History
        </Link>
        <Link href="/learnbaybayin" className={`${styles.bigButton} ${styles.learn}`}>
          Learn Baybayin
        </Link>
        <Link href="/translator" className={`${styles.bigButton} ${styles.translator}`}>
          Baybayin Translator
        </Link>
      </div>


      <body>
        
      </body>


    </section>

   

  );
}
