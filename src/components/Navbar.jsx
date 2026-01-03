import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // SCROLL PROGRESS BAR
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* BEAUTIFUL NAME LOGO */}
          <div className={styles.logo}>Banavasi Prakash</div>

          <div className={styles.links}>
            {[
              "home",
              "about",
              "education",
              "skills",
              "projects",
              "experience",
              "contact",
             
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${styles.link} ${
                  activeSection === section ? styles.active : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
