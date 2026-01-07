import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.underline}></div>

        <div className={styles.content}>
          {/* TEXT */}
          <div className={styles.text}>
            <h3 className={`${styles.question} ${show ? styles.q1 : ""}`}>
              Who am I?
            </h3>
            <p className={`${styles.answer} ${show ? styles.a1 : ""}`}>
              I am <strong>Banavasi Prakash</strong>, a
              <strong> Java Full Stack Developer</strong> and a
              <strong> 2025 B.Tech (Civil Engineering)</strong> graduate who
              transitioned into software development with a strong interest in
              building scalable applications.
            </p>

            <h3 className={`${styles.question} ${show ? styles.q2 : ""}`}>
              What skills do I bring?
            </h3>
            <p className={`${styles.answer} ${show ? styles.a2 : ""}`}>
              I work with
              <strong> Java, Spring Boot, REST APIs, React.js, HTML5, CSS3, JavaScript and MySQL</strong>,
              focusing on backend logic, API development, database integration,
              and responsive user interfaces.
            </p>

            <h3 className={`${styles.question} ${show ? styles.q3 : ""}`}>
              What have I worked on?
            </h3>
            <p className={`${styles.answer} ${show ? styles.a3 : ""}`}>
              During internships at
              <strong> Suprajit Engineering Limited</strong> and
              <strong> Vstand4U Solutions</strong>, I worked on
              <strong> Real Time IT Ticketing Dashboard</strong>,
              <strong> Real Time IP Network Monitoring Dashboard</strong>,
              <strong> Personal Portfolio</strong> and
              <strong> Attendance Tracker Web Application</strong>.
            </p>

            <h3 className={`${styles.question} ${show ? styles.q4 : ""}`}>
              What am I looking for?
            </h3>
            <p className={`${styles.answer} ${show ? styles.a4 : ""}`}>
              I am looking for an
              <strong> entry-level Java / Full Stack Developer / Backend / Frontend roles</strong>
              where I can contribute to real-world projects and grow professionally.
            </p>
          </div>

          {/* STATS */}
          <div className={`${styles.stats} ${show ? styles.statsShow : ""}`}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>2</div>
              <div className={styles.statLabel}>Internships</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>2025</div>
              <div className={styles.statLabel}>Pass Out</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
