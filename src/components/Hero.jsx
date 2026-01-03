import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>👋 Hello, I’m</span>

          <h1 className={styles.name}>
            Banavasi <span>Prakash</span>
          </h1>

          <h2 className={styles.role}>Java Full Stack Web Developer</h2>

          <p className={styles.description}>
            Building real-time dashboards and secure web applications using
            Java, Spring Boot, React, and MySQL.
          </p>

          <div className={styles.actions}>
            <a
              href="/Resume.pdf"
              download
              className={styles.primary}
            >
              📄 Download Resume
            </a>

            <a href="#projects" className={styles.secondary}>
              View Projects
            </a>

            <a href="#contact" className={styles.ghost}>
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <img
            src="/Profile.png"
            alt="Banavasi Prakash"
            className={styles.profileImg}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
