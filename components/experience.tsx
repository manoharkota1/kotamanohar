"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const chapters = [
  {
    period: "Apr 2025 — Jul 2025",
    title: "Full Stack Developer Intern",
    kind: "Farview Global · Hyderabad, Telangana",
    copy: "Developed and shipped full-stack web features with React, Next.js, Node.js, Express, MongoDB, and DynamoDB. Built reusable UI with Redux and Context API, implemented JWT-based access control, and deployed AWS services using Lambda, S3, RDS, EC2, Elastic Beanstalk, and CloudFront.",
    focus: ["React", "Next.js", "Node.js", "AWS", "MongoDB"],
  },
  {
    period: "May 2023 — Jul 2023",
    title: "Data Science Intern",
    kind: "ArchOver Solutions · Khammam, Telangana",
    copy: "Developed and evaluated machine-learning and deep-learning models for predictive analytics. Performed data preprocessing, exploratory analysis, feature engineering, and visualization; then presented findings through dashboards to support informed decisions.",
    focus: ["Python", "Machine Learning", "Deep Learning", "Data Analysis"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  const [activeChapter, setActiveChapter] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <div className="experience-shell">
        <div className="experience-intro">
          <motion.p className="section-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease }}>03 / Experience</motion.p>
          <motion.h2 id="experience-heading" initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: 0.06, ease }}>Experience building <em>useful software.</em></motion.h2>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, delay: 0.14, ease }}>Full-stack engineering and data science experience across product development, cloud deployment, analytics, and machine learning.</motion.p>
        </div>

        <div className="experience-ledger">
          <div className="experience-rail" aria-hidden="true"><span style={{ transform: `translateY(${activeChapter * 100}%)` }} /></div>
          <div className="experience-list">
            {chapters.map((chapter, index) => (
              <motion.article key={chapter.period} className={`experience-entry ${activeChapter === index ? "is-active" : ""}`} onViewportEnter={() => setActiveChapter(index)} initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.48 }} transition={{ duration: 0.6, ease }}>
                <div className="experience-entry__meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{chapter.period}</span></div>
                <div className="experience-entry__body"><p>{chapter.kind}</p><h3>{chapter.title}</h3><p>{chapter.copy}</p><div>{chapter.focus.map((item) => <span key={item}>{item}</span>)}</div></div>
                <span className="experience-entry__number" aria-hidden="true">0{index + 1}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
