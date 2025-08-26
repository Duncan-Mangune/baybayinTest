"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

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
      {/* <h1 className={styles.title}>
        Know More
        <br />
        Baybayin
      </h1> */}

       <div className={styles.titleImage}>
        <Image
          src= "/images/Title.png"
          alt="Know More Baybayin"
          width={600}     // adjust width
          height={180}    // adjust height
          priority
        />
      </div>


      <p className={styles.subtitle}>
        &quot;Promoting National Identity in the Digital Age&quot;
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
        <Link
          href="/baybayinalphabet"
          className={`${styles.bigButton} ${styles.history}`}
        >
          Baybayin Alphabet
        </Link>
        <Link
          href="/learnbaybayin"
          className={`${styles.bigButton} ${styles.learn}`}
        >
          Learn Baybayin
        </Link>
        <Link
          href="/translator"
          className={`${styles.bigButton} ${styles.translator}`}
        >
          Baybayin Translator
        </Link>
      </div>
    </section>
  );
}
