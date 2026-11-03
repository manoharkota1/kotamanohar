"use client";

import { motion, useReducedMotion } from "framer-motion";

const degrees = [
  { school: "SRM University AP", degree: "M.Tech in Artificial Intelligence and Machine Learning", period: "2025 — present · Expected May 2027", grade: "9.00 / 10" },
  { school: "PSCMR College of Engineering and Technology", degree: "B.Tech in Computer Science and Engineering (AI & ML)", period: "2021 — 2025", grade: "8.11 / 10" },
];
const ease = [0.22, 1, 0.36, 1] as const;

export function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" className="education-section" aria-labelledby="education-heading">
      <div className="education-shell">
        <motion.p className="section-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease }}>05 / Education</motion.p>
        <motion.div className="education-card" initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65, delay: 0.06, ease }}>
          <div className="education-list">{degrees.map((degree, index) => <article key={degree.school}><p>{degree.school}</p><h2 id={index === 0 ? "education-heading" : undefined}>{degree.degree}</h2><div className="education-details"><p>{degree.period}</p><p>CGPA <strong>{degree.grade}</strong></p></div></article>)}</div>
        </motion.div>
      </div>
    </section>
  );
}
