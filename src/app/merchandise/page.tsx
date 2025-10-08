"use client";

import { useState, MouseEvent } from "react";
import styles from "./merchandise.module.css";
import Link from "next/link";

interface Product {
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  link: string;
}

export default function PromotionalContents() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      title: "Baybayin T-Shirt",
      shortDescription: "Wear your heritage with stylish Baybayin designs.",
      fullDescription:
        "Baybayin T-Shirts feature elegant, culturally inspired designs that promote Filipino identity. Each shirt is made with soft, breathable fabric, perfect for daily wear or as a meaningful gift to share our heritage proudly.",
      imageUrl: "/images/Shirt.jpg",
      link: "https://shopee.ph/Rated-Cinco-Classics-Inhinyero-Baybayin-Shirt-Minimalist-Casual-Unisex-Tshirt-i.572848318.23904781854",
    },
    {
      title: "Baybayin Long Sleeve",
      shortDescription: "Comfort and heritage combined.",
      fullDescription:
        "Baybayin Long Sleeve blends comfort and culture with its unique Baybayin typography design. Crafted for casual wear or outdoor rides, it’s stylish, breathable, and showcases Filipino identity with pride.",
      imageUrl: "/images/LongSleeve.jpg",
      link: "https://shopee.ph/Motorcycle-Jersey-shirt-rider-LongSleeve-cycling-for-men-New-style-Bike-Rider-sports-rider-i.678063568.23239051675",
    },
    {
      title: "Baybayin Tattoo",
      shortDescription: "Temporary and custom Baybayin tattoos for everyone.",
      fullDescription:
        "Show your love for Baybayin through customizable tattoo designs. Each piece celebrates Filipino artistry and tradition — available in temporary or permanent styles for cultural expression.",
      imageUrl: "/images/Tattoo.jpg",
      link: "https://www.facebook.com/profile.php?id=61551760809531&sk=reels_tab",
    },
    {
      title: "Baybayin Signage",
      shortDescription: "Decorate with meaning and culture.",
      fullDescription:
        "Baybayin Signage brings culture into your space. Perfect for homes, cafes, or businesses, each piece is beautifully handcrafted with traditional Baybayin characters that express identity and pride.",
      imageUrl: "/images/Signage.png",
      link: "https://www.facebook.com/profile.php?id=100064168561363",
    },
    {
      title: "Baybayin Logo",
      shortDescription: "Stand out with Baybayin-inspired branding.",
      fullDescription:
        "Baybayin Logo service offers creative designs that merge tradition with modern branding. Perfect for individuals or businesses who want a culturally grounded yet stylish logo identity.",
      imageUrl: "/images/Logo.jpg",
      link: "https://www.facebook.com/profile.php?id=100064168561363",
    },
  ];

  const handleOverlayClick = () => setSelectedProduct(null);
  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Merchandise</h1>
        <Link href="/promotionalcontents" className={styles.backLink}>
          ← Back
        </Link>
      </div>

      <p className={styles.textBlock}>
        Explore products featuring Baybayin designs. From T-shirts to tattoos,
        signage, and logos — click each product to view more.
      </p>

      <div className={styles.disclaimerBox}>
        <strong>Disclaimer:</strong> The merchandise links below lead to external,
        third-party websites. “Know More Baybayin” does not own, sell, or manage
        these products and is not responsible for their quality, availability,
        pricing, or any transactions made. Please direct all purchase-related
        inquiries to the respective vendors.
      </div>

      {/* Product Cards */}
      <div className={styles.catalog}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <img
              src={product.imageUrl}
              alt={product.title}
              className={styles.cardImage}
            />
            <h2 className={styles.subtitle}>{product.title}</h2>
            <p className={styles.textBlock}>{product.shortDescription}</p>
            <button
              onClick={() => setSelectedProduct(product)}
              className={styles.btn}
            >
              View Product
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modal} onClick={handleModalClick}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.title}
              className={styles.modalImage}
            />
            <h2>{selectedProduct.title}</h2>

            <p className={styles.modalDescription}>
              {selectedProduct.fullDescription}
            </p>
            <span></span>

            <a
              href={selectedProduct.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitBtn}
            >
              Visit Site
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
