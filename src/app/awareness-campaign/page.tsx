import styles from "./awareness.module.css";
import Link from "next/link";

export default function PromotionalContents() {
  return (
    <div className={styles.container}>
      {/* Title & Back Button */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Awareness Campaign</h1>
        <Link href="/promotionalcontents" className={styles.backLink}>
          ← Back
        </Link>
      </div>

      {/* 🚩 Campaign 1 */}
      <div className={styles.campaignCard}>
        <h2 className={styles.campaignTitle}>📢 Baybayin Awareness Campaign</h2>
        <p className={styles.campaignText}>
          Baybayin is more than just a script — it is a symbol of Filipino
          identity and pride. Join the movement to preserve and promote our
          cultural heritage by sharing this campaign with your friends and
          community on Facebook.
        </p>
        <img
          src="/images/Campaign.jpg"
          alt="Baybayin Awareness Campaign"
          className={styles.campaignImage}
        />
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/share/p/16LamA7QEz/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareBtn}
        >
          📤 Share on Facebook
        </a>
      </div>

      {/*  Campaign 2 - Learn Baybayin */}
     <div className={styles.campaignCard}>
        <h2 className={styles.campaignTitle}>
           Balik Baybayin: Rekindling Our Ancient Script
        </h2>

        <p className={styles.campaignText}>
          In August, as we observe National Language Month and History Month,
          it is vital that we revisit Baybayin — not merely as a relic, but as
          a living thread connecting us to our Filipino roots. During the
          pre-colonial era, Baybayin was used for record-keeping,
          correspondence, trade, and even rituals.
        </p>

        <p className={styles.campaignText}>
          Baybayin literally means “to syllabicate,” and like other Asian
          scripts (such as Kanji, Hangul, or Thai script), it reflects a
          culture’s unique development of written language. Unfortunately,
          during Spanish colonization, the Latin alphabet was imposed, leading
          to Baybayin’s decline.
        </p>

        <p className={styles.campaignText}>
          Perhaps one of the most famous early printed works using Baybayin is
          the <em>Doctrina Cristiana</em> (1593), which used both Spanish and
          Baybayin characters. This shows how deeply Baybayin was integrated
          into early Filipino society — not just in informal use but also in
          formal religious and educational texts.
        </p>

        <p className={styles.campaignText}>
          Today, efforts are underway in both government and civil society to
          protect and revive Baybayin. Proposals include incorporating it into
          school curricula, offering it as an elective subject in universities,
          and integrating its characters into official logos, design elements,
          and public signage. Local artists and overseas Filipino communities
          also promote Baybayin through murals, workshops, and cultural events,
          inspiring younger generations to embrace it once more.
        </p>


        {/* 📚 Citation */}
        <p className={styles.citation}>
          Source: <a href="https://www.pna.gov.ph/opinion/pieces/733-preserving-our-cultural-heritage-the-revival-of-baybayin?utm_source=chatgpt.com" 
          target="_blank" rel="noopener noreferrer">National Commission for Culture and the Arts (NCCA)</a>
        </p>

        {/* 🔗 Button to Learn Page */}
        <Link href="/learnbaybayin" className={styles.learnBtn}>
          ✍️ Start Learning Baybayin Now
        </Link>
      </div>
    </div>
  );
}
