import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [

    {
      title: "Real Time IP Network Monitoring Dashboard",
      period: "July 2025 – September 2025",
      overview:
        "Web-based system to monitor IP network availability with secure authentication.",
      tech: ["Java", "Spring Boot", "MySQL", "IIS Web Server"],
      features: [
        "Real-time IP monitoring",
        "Admin & user roles",
        "Secure deployment"
      ],
      previewImages: ["IP-1.png", "IP-2.png"],
      demo: "#"
    },
    {
      title: "Real-Time Ticketing Dashboard",
      period: "September 2025 – November 2025",
      overview:
        "A real-time IT Ticketing Dashboard to monitor, track, and manage support tickets using live API integrations.",
      tech: ["React.js", "Node.js", "Zoho API"],
      features: [
        "Live ticket status tracking",
        "Dynamic filters and UI updates",
        "Responsive dashboard"
      ],
      previewImages: ["Ticket-1.png"],
      demo: "#"
    },
    
    
    {
      title: "Attendance Tracker System Web Application",
      period: "2025",
      overview:
        "An automated attendance tracking system that syncs data between frontend, MySQL database, and Smartsheet using APIs.",
      tech: ["React.js", "Node.js", "MySQL", "Smartsheet API"],
      features: [
        "Date-range based attendance update",
        "Delete attendance records by date range",
        "Auto-sync data from MySQL to Smartsheet",
        "Third-party API integration",
        "Open Smartsheet directly from frontend"
      ],
      previewImages: ["A1.png", "A2.png", "A3.png"],
      demo: "#"
    },
    {
      title: "Personal Portfolio Website",
      period: "2025",
      overview:
        "A responsive personal portfolio website to showcase projects, skills, and experience with a modern UI.",
      tech: ["React.js", "CSS Modules", "JavaScript"],
      features: [
        "Responsive & mobile-first design",
        "Projects showcase with image slider",
        "Clean UI with smooth animations"
      ],
      previewImages: ["Portfolio-1.png", "Portfolio-2.png"],
      demo: "#"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.underline}></div>

        {/* GRID WITH 2 PROJECTS PER ROW */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!project.previewImages?.length) return;

    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % project.previewImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.previewImages]);

  return (
    <div className={styles.card}>
      {/* LEFT CONTENT */}
      <div className={styles.details}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.period}>{project.period}</p>

        <p className={styles.overview}>{project.overview}</p>

        <div className={styles.tech}>
          {project.tech.map((t, i) => (
            <span key={i} className={styles.techChip}>{t}</span>
          ))}
        </div>

        <ul className={styles.features}>
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.demo}
        >
        </a>
      </div>

      {/* RIGHT – IMAGE SLIDER */}
      <div className={styles.iframeMock}>
        <img
          src={project.previewImages[current]}
          alt={`${project.title} preview ${current + 1}`}
        />
      </div>
    </div>
  );
};

export default Projects;
