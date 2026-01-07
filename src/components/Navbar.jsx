import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);

    const el = document.getElementById(section);
    if (el) {
      const yOffset = -90; // navbar height offset
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const sections = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "experience",
    "contact"
  ];

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* LOGO */}
          <div className={styles.logo}>Banavasi Prakash</div>

          {/* DESKTOP LINKS */}
          <div className={styles.links}>
            {sections.map((section) => (
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

          {/* HAMBURGER */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${styles.mobileLink} ${
                  activeSection === section ? styles.mobileActive : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
