"use client";

import { motion, useReducedMotion } from "framer-motion";

const certifications = [
  { title: "Introduction to Git and GitHub", issuer: "Google (Coursera)", year: "2023" },
  { title: "Introduction to Front-End Development", issuer: "Meta (Coursera)", year: "2023" },
  { title: "AWS Educate Machine Learning Foundations", issuer: "AWS · Training Badge", year: "2025" },
];

export function Certifications() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="certifications-section" aria-labelledby="certifications-heading">
      <div className="certifications-shell">
        <motion.p className="section-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>06 / Certifications</motion.p>
        <motion.div className="certifications-header" initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65 }}>
          <h2 id="certifications-heading">Learning with <em>intention.</em></h2>
        </motion.div>
        <div className="certifications-grid">{certifications.map((certification, index) => <motion.article key={certification.title} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.08 }}><span>0{index + 1}</span><h3>{certification.title}</h3><p>{certification.issuer}</p><strong>{certification.year}</strong></motion.article>)}</div>
      </div>
    </section>
  );
}
