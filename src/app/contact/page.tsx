"use client";

import { useState, useRef } from "react";
import styles from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (form) {
      const iframe = document.createElement("iframe");
      iframe.name = "hidden_iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      form.target = "hidden_iframe";
      form.submit();

      setTimeout(() => {
        setIsSent(true);
        form.reset();
      }, 1000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Contact Us</h1>
        <Link href="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>

      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <img
          src="/images/Title.png"
          alt="Know More Baybayin Logo"
          className={styles.logo}
        />
      </div>

      {/* Contact Form */}
      <form
        ref={formRef}
        action="https://formsubmit.co/manguneduncan08@gmail.com"
        method="POST"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="." />

        <label htmlFor="email" className={styles.label}>
          Your Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className={styles.input}
          required
        />

        <label htmlFor="message" className={styles.label}>
          Your Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
          className={styles.textarea}
          required
        ></textarea>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>

      {/* Success Popup */}
      {isSent && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <img
              src="/images/Title.png"
              alt="Know More Baybayin Logo"
              className={styles.popupLogo}
            />
            <h2>Message Sent Successfully!</h2>
            <p>We’ll get back to you as soon as possible through your email.</p>
            <button
              className={styles.closeBtn}
              onClick={() => setIsSent(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
