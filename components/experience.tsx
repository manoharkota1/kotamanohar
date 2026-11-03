"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const chapters = [
  {
    period: "Apr 2025 — Jul 2025",
    title: "Full Stack Developer Intern",
    kind: "Farview Global · Hyderabad, Telangana",
    highlights: [
      "Reduced job-portal API response latency from 200 ms to 130 ms (35%) by optimizing DynamoDB data access and adding Redis caching for frequently accessed job data.",
      "Reduced Largest Contentful Paint from 3.0 s to 2.4 s (20%) using CDN delivery, caching, and lazy loading of images and content.",
      "Built an event-driven, serverless ingestion pipeline on AWS S3, Lambda, and Amazon RDS with asynchronous background processing, raising file-throughput capacity from 100 files/min to 140 files/min (40%) to handle peak loads.",
    ],
    focus: ["Python", "JavaScript", "AWS", "DynamoDB", "Redis", "Amazon RDS"],
    metrics: ["35% faster API response", "20% faster LCP", "40% higher throughput"],
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
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, delay: 0.14, ease }}>Full-stack development experience across production APIs, cloud infrastructure, performance optimization, and data pipelines.</motion.p>
        </div>

        <div className="experience-ledger">
          <div className="experience-rail" aria-hidden="true"><span style={{ transform: `translateY(${activeChapter * 100}%)` }} /></div>
          <div className="experience-list">
            {chapters.map((chapter, index) => (
              <motion.article key={chapter.period} className={`experience-entry ${activeChapter === index ? "is-active" : ""}`} onViewportEnter={() => setActiveChapter(index)} initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.48 }} transition={{ duration: 0.6, ease }}>
                <div className="experience-entry__meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{chapter.period}</span></div>
                <div className="experience-entry__body"><p>{chapter.kind}</p><h3>{chapter.title}</h3><div className="experience-metrics">{chapter.metrics.map((metric) => <strong key={metric}>{metric}</strong>)}</div><ul>{chapter.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div>{chapter.focus.map((item) => <span key={item}>{item}</span>)}</div></div>
                <span className="experience-entry__number" aria-hidden="true">0{index + 1}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
