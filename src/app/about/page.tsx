import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Baybayin App</h1>
      
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

      <h2 className={styles.subtitle}>Education</h2>
      <p className={styles.textBlock}>
        Baybayin is being reintroduced into classrooms, especially in Filipino and Araling Panlipunan 
        subjects, to strengthen national identity and cultural appreciation among students. 
        The website supports this effort by offering interactive lessons and quizzes to make learning Baybayin accessible and engaging.

      </p>

      <h2 className={styles.subtitle}>Design and Fashion</h2>
      <p className={styles.textBlock}>
        From t-shirts, tattoos, signage, to logos, Baybayin has become a growing trend in design and 
        fashion. The script adds cultural depth and creativity, giving modern art and lifestyle 
        products a unique Filipino identity.
      </p>

      <h2 className={styles.subtitle}>Government Efforts</h2>
      <p className={styles.textBlock}>
        There are ongoing government initiatives and proposed bills pushing for the inclusion of 
        Baybayin in official communication and public signage. These efforts emphasize the 
        importance of reviving the script as a symbol of Filipino heritage and pride.
      </p>

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
