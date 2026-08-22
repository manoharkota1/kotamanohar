"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const chapters = [
  {
    period: "Apr 2025 — Jul 2025",
    title: "Full Stack Developer Intern",
    kind: "Farview Global · Hyderabad, Telangana",
    highlights: [
      "Engineered high-throughput RESTful microservices and responsive interfaces using Next.js, Node.js, Express.js, and AWS, cutting API response latency by 35% across core production endpoints.",
      "Architected a modular RBAC authorization framework and token-based session management system using Next.js and Context API, reducing developer onboarding time by 25% while enforcing zero-trust access control.",
      "Implemented event-driven file-processing infrastructure using AWS Lambda, S3, and Amazon RDS, automating background ingestion pipelines and increasing processing throughput by 40% under peak loads.",
    ],
    focus: ["Node.js", "Express.js", "REST APIs", "AWS", "RBAC"],
  },
  {
    period: "May 2023 — Jul 2023",
    title: "Data Science Intern",
    kind: "ArchOver Solutions · Khammam, Telangana",
    highlights: [
      "Designed and deployed predictive analytics pipelines using Python, Scikit-learn, and TensorFlow, optimizing hyperparameter-tuning routines to achieve an 18% increase in predictive accuracy.",
      "Constructed automated data-cleaning and feature-extraction modules for large datasets, eliminating data-ingestion bottlenecks by 30% and stabilizing downstream model inputs.",
      "Validated complex predictive models using k-fold cross-validation and delivered automated analytical dashboards that streamlined decision-making for cross-functional teams.",
    ],
    focus: ["Python", "TensorFlow", "Scikit-learn", "ML Pipelines"],
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
          <motion.p className="section-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease }}>04 / Experience</motion.p>
          <motion.h2 id="experience-heading" initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: 0.06, ease }}>Experience building <em>useful software.</em></motion.h2>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, delay: 0.14, ease }}>Backend engineering and AI/ML experience across production APIs, cloud infrastructure, data pipelines, and model delivery.</motion.p>
        </div>

        <div className="experience-ledger">
          <div className="experience-rail" aria-hidden="true"><span style={{ transform: `translateY(${activeChapter * 100}%)` }} /></div>
          <div className="experience-list">
            {chapters.map((chapter, index) => (
              <motion.article key={chapter.period} className={`experience-entry ${activeChapter === index ? "is-active" : ""}`} onViewportEnter={() => setActiveChapter(index)} initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.48 }} transition={{ duration: 0.6, ease }}>
                <div className="experience-entry__meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{chapter.period}</span></div>
                <div className="experience-entry__body"><p>{chapter.kind}</p><h3>{chapter.title}</h3><ul>{chapter.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div>{chapter.focus.map((item) => <span key={item}>{item}</span>)}</div></div>
                <span className="experience-entry__number" aria-hidden="true">0{index + 1}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
