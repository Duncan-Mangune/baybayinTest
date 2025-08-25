import Link from "next/link";
import styles from "./app/components/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>KMB</h1>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/baybayinhistory">History</Link>
        <Link href="/learnbaybayin">Learn</Link>
        <Link href="/promotionalcontents">Promotions</Link>
      </div>
    </nav>
  );
}
