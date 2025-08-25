import styles from "./promotionalcontents.module.css";

export default function PromotionalContents() {
  const products = [
    {
      title: "Baybayin T-Shirt",
      description: "Wear your heritage with stylish Baybayin designs.",
      imageUrl: "/images/tshirt.jpg",
      link: "https://example.com/tshirt",
    },
    {
      title: "Baybayin Tattoo",
      description: "Temporary and custom Baybayin tattoos for everyone.",
      imageUrl: "/images/tattoo.jpg",
      link: "https://example.com/tattoo",
    },
    {
      title: "Baybayin Signage",
      description: "Beautifully crafted Baybayin signs for businesses or homes.",
      imageUrl: "/images/signage.jpg",
      link: "https://example.com/signage",
    },
    {
      title: "Baybayin Logo",
      description: "Unique Baybayin-inspired logos for your brand.",
      imageUrl: "/images/logo.jpg",
      link: "https://example.com/logo",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Promotional Contents</h1>
      <p className={styles.textBlock}>
        Explore our products featuring Baybayin designs. From T-shirts to tattoos, signage, and logos — click each product to view more. <strong>Disclaimer:</strong> All products lead to external links.
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
