import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Know More Baybayin</h1>
      
      <h2 className={styles.subtitle}>Description</h2>
      <p className={styles.textBlock}>
        The Know More Baybayin is designed to promote awareness and education about Baybayin, the 
        ancient pre-colonial script of the Philippines. This website serves as a platform to introduce, 
        preserve, and celebrate Baybayin as an important part of Filipino heritage while making it 
        relevant in today’s modern context.
      </p>

      <p className={styles.textBlock}>
        Our goal is to educate Filipinos and future generations about Baybayin’s historical and 
        cultural significance, as well as highlight its evolving role in different fields of society.
      </p>



      <h2 className={styles.subtitle}>Government Efforts</h2>
      <p className={styles.textBlock}>
        The Philippine government has taken steps to revive and preserve Baybayin as part of the 
        nation’s cultural identity. In the Senate, Senate Bill No. 1866 – The National Writing 
        System Act seeks to promote, protect, and conserve Baybayin as a tool for cultural
         development. Meanwhile, in the House of Representatives, the House Committee on Basic 
         Education and Culture has approved the proposal to declare Baybayin as the national writing 
         system of the Philippines, reinforcing its importance as a symbol of heritage and pride.
      </p>

      {/* Government Efforts Card */}
      <div className={styles.govCard}>
        <h3 className={styles.govTitle}>Senate Bill No. 1866</h3>
        <p className={styles.govText}>
          <strong>National Writing System Act</strong> — An Act promoting the use of Baybayin as a 
          tool for cultural development of the Philippines, filed on <em>February 13, 2023</em> by 
          Senator <strong>Loren Legarda</strong>. Currently pending in the Committee.
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

      <h2 className={styles.subtitle}>Social Media</h2>
      <p className={styles.textBlock}>
       With the rise of digital platforms, social media campaigns have played a big role in raising 
       awareness and teaching people how to read and write Baybayin. Through this platform, learners can 
       easily practice and share their knowledge, further contributing to the growing online movement 
       to preserve and promote the script.
      </p>
    </div>
  );
}
