"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {



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

     

      {/* Big Buttons */}
      <div className={styles.buttonGroup}>
       
        <Link
          href="/learnbaybayin"
          className={`${styles.bigButton} ${styles.learn}`}
        >
          Learn Baybayin
        </Link>
        
      </div>
    </section>
  );
}
