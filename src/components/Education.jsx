import React, { useState } from "react";
import styles from "./Education.module.css";

const Education = () => {
  const [activeCert, setActiveCert] = useState(null);

  const education = [
    {
      degree: "Bachelor of Technology – Civil Engineering",
      institution:
        "Srinivasa Ramanujan Institute of Technology, Anantapur District",
      period: "2021 – 2025",
      cgpa: "9.30",
      highlights: [
        "Relevant Coursework: Java Full-Stack Development",
        "Academic Topper Award (Gold Medalist)"
      ]
    },
    {
      degree: "Intermediate – M.P.C",
      institution:
        "Government Junior College for Boys, New Town, Anantapur District",
      period: "2019 – 2021",
      cgpa: "9.31",
      highlights: ["Academic Topper Award (2020–2021)"]
    },
    {
      degree: "Secondary School Certificate",
      institution: "Z P High School, Vidapanakal, Anantapur District",
      period: "2018 – 2019",
      cgpa: "9.8",
      highlights: [
        "SSC Topper Award (2019)",
        "Dr. A.P.J. Abdul Kalam Vidya Puraskar Award"
      ]
    }
  ];

  const certifications = [
    {
      title: "Java Full-Stack Development – Vstand4U Solutions (2025)",
      file: "/certificates/Java Full-Stack.jpg"
    },
    {
      title: "Linguaskill Cambridge English Certification (2024)",
      file: "/certificates/LinguaSkill.jpg"
    },
    {
      title: "Data Structures & Web Development – Prep Leaf Masai (2023)",
      file: "/certificates/Masai.jpg"
    }
  ];

  const isPDF = (file) => file.toLowerCase().endsWith(".pdf");

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education & Certifications</h2>

        <div className={styles.layout}>
          {/* TIMELINE */}
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.year}>{edu.period}</div>

                <div className={styles.card}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <p className={styles.institution}>{edu.institution}</p>

                  <p className={styles.cgpa}>
                    CGPA <span>{edu.cgpa}</span>
                  </p>

                  <ul className={styles.highlights}>
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <aside className={styles.certs}>
            <h3 className={styles.certTitle}>Certifications</h3>
            <ul className={styles.certList}>
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className={styles.certLink}
                  onClick={() => setActiveCert(cert)}
                >
                  {cert.title}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {/* MODAL */}
      {activeCert && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveCert(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h4>{activeCert.title}</h4>
              <button onClick={() => setActiveCert(null)}>✕</button>
            </div>

            <div className={styles.certViewer}>
              {isPDF(activeCert.file) ? (
                <iframe src={activeCert.file} title="Certificate PDF" />
              ) : (
                <img src={activeCert.file} alt={activeCert.title} />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
