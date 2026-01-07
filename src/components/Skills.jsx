import React from "react";
import styles from "./Skills.module.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaGitAlt
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiSpringboot } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="fa-html5" /> },
    { name: "CSS3", icon: <FaCss3Alt className="fa-css3-alt" /> },
    { name: "JavaScript", icon: <SiJavascript className="si-javascript" /> },
    { name: "Java", icon: <FaJava className="fa-java" /> },
    { name: "React", icon: <FaReact className="fa-react" /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql className="si-mysql" /> },
    { name: "Git", icon: <FaGitAlt /> }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.underline}></div>

        <div className={styles.flowWrapper}>
          <div className={styles.flow}>
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className={styles.skill}>
                <div className={styles.icon}>{skill.icon}</div>
                <span className={styles.label}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
