import styles from "./merchandise.module.css";
import Link from "next/link";

export default function PromotionalContents() {
  const products = [
    {
      title: "Baybayin T-Shirt",
      description: "Wear your heritage with stylish Baybayin designs.",
      imageUrl: "/images/Shirt.jpg",
      link: "https://shopee.ph/Rated-Cinco-Classics-Inhinyero-Baybayin-Shirt-Minimalist-Casual-Unisex-Tshirt-i.572848318.23904781854?sp_atk=fe75b6d3-c4e0-4625-933a-a7aa2f308659&xptdk=fe75b6d3-c4e0-4625-933a-a7aa2f308659",
    },
    {
      title: "Baybayin Long Sleeve",
      description: "Unique Baybayin-inspired logos for your brand.",
      imageUrl: "/images/LongSleeve.jpg",
      link: "https://shopee.ph/Motorcycle-Jersey-shirt-rider-LongSleeve-cycling-for-men-New-style-Bike-Rider-sports-rider-i.678063568.23239051675?sp_atk=382916bc-a79a-401d-8464-b63b9d5bf4bd&xptdk=382916bc-a79a-401d-8464-b63b9d5bf4bd",
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
        <h1 className={styles.title}>Merchandise</h1>
        <Link href="/promotionalcontents" className={styles.backLink}>
          ← Back
        </Link>
      </div>


      {/* 🚩 Merchandise Section */}
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