import styles from "./awareness.module.css";
import Link from "next/link";

export default function PromotionalContents() {
  const products = [
    {
      title: "Baybayin T-Shirt",
      description: "Wear your heritage with stylish Baybayin designs.",
      imageUrl: "/images/Shirt.jpg",
      link: "https://monsterry.com/au/products/philippines-1521-alibata-baybayin-script-proud-filipino-long-t-shirt-pDuRU4ZimZCH",
    },
    {
      title: "Baybayin Long Sleeve",
      description: "Unique Baybayin-inspired logos for your brand.",
      imageUrl: "/images/LongSleeve.jpg",
      link: "https://shop.coolpinoy.com/products/filipino-in-baybayin-script-mens-jersey-long-sleeve-t-shirt",
    },
    {
      title: "Baybayin Tattoo",
      description: "Temporary and custom Baybayin tattoos for everyone.",
      imageUrl: "/images/Tattoo.jpg",
      link: "https://www.facebook.com/profile.php?id=61551760809531&sk=reels_tab",
    },
    {
      title: "Baybayin Signage",
      description: "Beautifully crafted Baybayin signs for businesses or homes.",
      imageUrl: "/images/Signage.png",
      link: "https://www.facebook.com/profile.php?id=100064168561363",
    },
    {
      title: "Baybayin Logo",
      description: "Unique Baybayin-inspired logos for your brand.",
      imageUrl: "/images/Logo.jpg",
      link: "https://www.facebook.com/profile.php?id=100064168561363",
    },
  ];

  return (
    <div className={styles.container}>
        {/* Title & Back Button */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Awareness Campaign</h1>
        <Link href="/promotionalcontents" className={styles.backLink}>
          ← Back
        </Link>
      </div>

    
      {/* 🚩 Campaign Card */}
      <div className={styles.campaignCard}>
        <h2 className={styles.campaignTitle}>📢 Baybayin Awareness Campaign</h2>
        <p className={styles.campaignText}>
          Baybayin is more than just a script — it is a symbol of Filipino
          identity and pride. Join the movement to preserve and promote our
          cultural heritage by sharing this campaign with your friends and
          community on Facebook.
        </p>
        <img
          src="/images/Campaign.jpg" // 📌 local image
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

    
      
    </div>
  );
}