import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.wrapper}>
        {/* LEFT – CONVERSATION */}
        <div className={styles.left}>
          <h2 className={styles.heading}>Let’s start a conversation</h2>
          <p className={styles.subText}>
            Whether it’s a job opportunity, freelance work, or a quick chat —
            feel free to reach out. I usually respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your idea…"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={status === "loading"}>
              <FiSend />
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className={styles.success}>✅ Message sent successfully</p>
            )}
            {status === "error" && (
              <p className={styles.error}>❌ Something went wrong</p>
            )}
          </form>
        </div>

        {/* RIGHT – QUICK CONTACT */}
        <div className={styles.right}>
          <div className={styles.quick}>
            <FiMail />
            <span>banavasiprakash7896@gmail.com</span>
          </div>

          <div className={styles.quick}>
            <FiPhone />
            <span>+91 6366908451</span>
          </div>

          <div className={styles.quick}>
            <FiMapPin />
            <span>Anantapur District, India</span>
          </div>

          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/banavasiprakash/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
