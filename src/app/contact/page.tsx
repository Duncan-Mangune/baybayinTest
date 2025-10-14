"use client";

import { useState, useRef } from "react";
import styles from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [userName, setUserName] = useState("");
  const [nameCount, setNameCount] = useState(0);
  const [emailCount, setEmailCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [warning, setWarning] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const showWarning = (msg: string) => {
    setWarning(msg);
    setTimeout(() => setWarning(""), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    max: number
  ) => {
    const length = e.target.value.length;
    setCount(length);
    if (length >= max) {
      e.target.classList.add(styles.maxReached);
      showWarning("You’ve reached the maximum input!");
    } else {
      e.target.classList.remove(styles.maxReached);
    }
  };

  // ✅ Restrict name field input
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[A-Za-z.\-\s]*$/;
    if (!regex.test(e.target.value)) {
      showWarning("Numbers or Special characters are not allowed.");
      e.target.value = e.target.value.replace(/[^A-Za-z.\-\s]/g, "");
    }
    handleChange(e, setNameCount, 50);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const newErrors: typeof errors = {};

    if (!name) newErrors.name = "Please enter your name.";
    if (!email) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email.";
    if (!message) newErrors.message = "Please enter your message.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setUserName(name);

    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    form.target = "hidden_iframe";
    form.submit();

    setTimeout(() => {
      setIsSent(true);
      form.reset();
      setNameCount(0);
      setEmailCount(0);
      setMessageCount(0);
      setErrors({});
    }, 1000);
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

        {/* Name Field */}
        <label htmlFor="name" className={styles.label}>
          Your Name:
        </label>
        <div className={styles.inputWrapper}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className={styles.input}
            required
            maxLength={50}
            onChange={handleNameInput}
          />
          <span
            className={`${styles.counterInside} ${
              nameCount >= 50 ? styles.counterRed : ""
            }`}
          >
            {nameCount}/50
          </span>
        </div>
        {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}

        {/* Email Field */}
        <label htmlFor="email" className={styles.label}>
          Your Email:
        </label>
        <div className={styles.inputWrapper}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            required
            maxLength={100}
            onChange={(e) => handleChange(e, setEmailCount, 100)}
          />
          <span
            className={`${styles.counterInside} ${
              emailCount >= 100 ? styles.counterRed : ""
            }`}
          >
            {emailCount}/100
          </span>
        </div>
        {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}

        {/* Message Field */}
        <label htmlFor="message" className={styles.label}>
          Your Message:
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            className={styles.textarea}
            required
            maxLength={500}
            onChange={(e) => handleChange(e, setMessageCount, 500)}
          ></textarea>
          <span
            className={`${styles.counterInside} ${
              messageCount >= 500 ? styles.counterRed : ""
            }`}
          >
            {messageCount}/500
          </span>
        </div>
        {errors.message && <p className={styles.errorMsg}>{errors.message}</p>}

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>

      {/* ✅ Centered Success Popup */}
      {isSent && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <img
              src="/images/Title.png"
              alt="Know More Baybayin Logo"
              className={styles.popupLogo}
            />
            <h2>Thanks, {userName || "there"}!</h2>
            <p>Your message was sent successfully. We’ll get back to you soon.</p>
            <button
              className={styles.closeBtn}
              onClick={() => setIsSent(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Toast Warning */}
      {warning && (
        <div className={styles.warningPopup}>
          <p>{warning}</p>
        </div>
      )}
    </div>
  );
}
