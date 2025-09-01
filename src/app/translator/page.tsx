"use client";

import { useState } from "react";
import styles from "./translator.module.css";
import Link from "next/link";

// Baybayin character mapping
const baybayinMap: Record<string, string> = {
  a: "ᜀ",
  b: "ᜊ",
  k: "ᜃ",
  d: "ᜇ",
  g: "ᜄ",
  h: "ᜑ",
  i: "ᜁ",
  l: "ᜎ",
  m: "ᜋ",
  n: "ᜈ",
  ng: "ᜅ",
  o: "ᜂ",
  p: "ᜉ",
  s: "ᜐ",
  t: "ᜆ",
  u: "ᜂ",
  w: "ᜏ",
  y: "ᜌ",
  // spaces and punctuation
  " ": " ",
  ".": ".",
  ",": ",",
};

// Function to translate text
const translateToBaybayin = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ng/g, "ŋ") // handle "ng" as one character
    .split("")
    .map((char: string) => {
      if (char === "ŋ") return baybayinMap["ng"];
      return baybayinMap[char] || char;
    })
    .join("");
};

export default function TranslatorPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleTranslate = () => {
    setOutput(translateToBaybayin(input));
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Baybayin Translator</h1>
        <Link href="/learnbaybayin" className={styles.backLink}>
          ← Back
        </Link>
      </div>

      <h2 className={styles.subtitle}>Description</h2>
      <p className={styles.textBlock}>
        Translate texts into Baybayin script instantly.
      </p>

      {/* Translator box */}
      <textarea
        className={styles.inputBox}
        placeholder="Type text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className={styles.translateButton} onClick={handleTranslate}>
        Translate
      </button>

      {output && (
        <div className={styles.outputBox}>
          <h3>Result:</h3>
          <p className={styles.baybayinText}>{output}</p>
        </div>
      )}
    </div>
  );
}
