import styles from "./promotionalcontents.module.css";
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
        <h1 className={styles.title}>Promotional Contents</h1>
        <Link href="/" className={styles.backLink}>
          ← Home
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

     

      {/* 🚩 Merchandise Section */}
      <h1 className={styles.title2}>Merchandise</h1>
      <p className={styles.textBlock}>
        Explore products featuring Baybayin designs. From T-shirts to tattoos,
        signage, and logos — click each product to view more.{" "}
      </p>

      {/* 🚩 Disclaimer Box */}
      <div className={styles.disclaimerBox}>
        <strong>Disclaimer:</strong> The merchandise links above lead to external,
        third-party websites. “Know More Baybayin” does not own, sell, or manage
        these products and is not responsible for their quality, availability,
        pricing, or any transactions made. Please direct all purchase-related
        inquiries to the respective vendors.
      </div>


      <div className={styles.catalog}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <img
              src={product.imageUrl}
              alt={product.title}
              className={styles.cardImage}
            />
            <h2 className={styles.subtitle}>{product.title}</h2>
            <p className={styles.textBlock}>{product.description}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              View Product
            </a>
          </div>

         

        ))}
      </div>

      

      
    </div>
  );
}
