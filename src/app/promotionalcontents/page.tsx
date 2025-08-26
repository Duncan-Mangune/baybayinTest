import styles from "./promotionalcontents.module.css";
import Link from "next/link";

export default function PromotionalContents() {
  const products = [
    {
      title: "Baybayin T-Shirt",
      description: "Wear your heritage with stylish Baybayin designs.",
      imageUrl: "/images/Shirt.jpg",
      link: "https://example.com/tshirt",
    },
    {
      title: "Baybayin Shirt 2",
      description: "Unique Baybayin-inspired logos for your brand.",
      imageUrl: "/images/LongSleeve.jpg",
      link: "https://example.com/logo",
    },
    {
      title: "Baybayin Tattoo",
      description: "Temporary and custom Baybayin tattoos for everyone.",
      imageUrl: "/images/Tattoo.jpg",
      link: "https://example.com/tattoo",
    },
    {
      title: "Baybayin Signage",
      description: "Beautifully crafted Baybayin signs for businesses or homes.",
      imageUrl: "/images/Signage.png",
      link: "https://example.com/signage",
    },
    {
      title: "Baybayin Logo",
      description: "Unique Baybayin-inspired logos for your brand.",
      imageUrl: "/images/Logo.jpg",
      link: "https://example.com/logo",
    },
  ];

  return (
    <div className={styles.container}>
       {/* 🚩 Government Efforts Section */}
      <h2 className={`${styles.subtitle} ${styles.govSection}`}>Government Efforts</h2>
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
          href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
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
        <strong>Disclaimer:</strong> All products lead to external links.
      </p>

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
