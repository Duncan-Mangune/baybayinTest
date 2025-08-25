"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import styles from "./results.module.css";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryParam = searchParams?.get("query") ?? "";
  const [query, setQuery] = useState(queryParam);

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  const sampleResults = [
    "Baybayin History",
    "Baybayin Alphabet",
    "Baybayin in Modern Use",
    "Learn Baybayin",
  ];

  const filteredResults = query
    ? sampleResults.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/results?query=${encodeURIComponent(query)}`);
  };

  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>

      <h1>
        Search Results for:{" "}
        <span className={styles.resultsHighlight}>
          {query ? `“${query}”` : "Nothing yet"}
        </span>
      </h1>

      {query ? (
        filteredResults.length > 0 ? (
          <ul className="space-y-4 w-full max-w-2xl">
            {filteredResults.map((result, index) => (
              <li key={index} className={styles.resultItem}>
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )
      ) : (
        <p>Type something in the search bar first.</p>
      )}
    </section>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<p>Loading search...</p>}>
      <ResultsContent />
    </Suspense>
  );
}
