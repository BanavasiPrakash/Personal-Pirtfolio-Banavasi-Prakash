import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      role: "IT Intern Trainee",
      company: "Suprajit Engineering Limited",
      period: "Jul 2025 – Dec 2025",
      tag: "Recent",
      logo: "Suprajit.jpeg",
      metrics: [
        { value: "4", label: "Live Applications" },
        { value: "5+", label: "APIs Integrated" }
      ],
      points: [
        "Developed a real-time IT Ticketing Dashboard, IP Network Monitoring system and Attendance Tracker System Web Application.",
        "Built backend services using Java, Spring Boot and Node.js with React.js frontend.",
        "Integrated Zoho Desk APIs, managed data using MySQL, and deployed apps on IIS Server."
      ]
    },
    {
      role: "Java Full Stack Developer Intern",
      company: "Vstand4U Solutions",
      period: "Jan 2025 – Jul 2025",
      tag: "Previous",
      logo: "Vstand4U.jpeg",
      metrics: [
        { value: "6+", label: "Mini Projects" },
        { value: "10+", label: "Technologies" },
        { value: "100%", label: "Hands-on Training" }
      ],
      points: [
        "Completed intensive training in Java, JDBC, Spring Boot, HTML, CSS, JavaScript, SQL, and Git.",
        "Built multiple mini-projects following full-stack development practices.",
        "Worked with Git/GitHub and real-world development workflows."
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.underline}></div>

        <div className={styles.horizontalTrack}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <p className={styles.period}>{exp.period}</p>
                </div>

                <div className={styles.logoWrap}>
                  <img src={exp.logo} alt={exp.company} />
                  <span className={styles.badge}>{exp.tag}</span>
                </div>
              </div>

              <div className={styles.metrics}>
                {exp.metrics.map((m, i) => (
                  <div key={i} className={styles.metric}>
                    <span className={styles.metricValue}>{m.value}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>

              <ul className={styles.points}>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
