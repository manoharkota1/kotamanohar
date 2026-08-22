"use client";

import { motion, useReducedMotion } from "framer-motion";

const coursework = [
  "Advanced Data Structures & Algorithms",
  "Distributed Systems",
  "Database Systems",
  "Machine Learning",
  "Deep Learning",
  "Agentic AI Systems",
  "LLM Engineering",
  "Retrieval-Augmented Generation",
  "AI Agent Design & Orchestration",
  "MLOps & AI Deployment",
];
const ease = [0.22, 1, 0.36, 1] as const;

export function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" className="education-section" aria-labelledby="education-heading">
      <div className="education-shell">
        <motion.p className="section-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease }}>05 / Education</motion.p>
        <motion.div className="education-card" initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65, delay: 0.06, ease }}>
          <div><p>SRM University AP</p><h2 id="education-heading">Master of Technology in <em>AI &amp; ML.</em></h2></div>
          <div className="education-details"><p>Expected graduation <strong>2027</strong></p><p>CGPA <strong>9.0 / 10.0</strong></p></div>
          <div className="education-coursework"><span>Relevant coursework</span><div>{coursework.map((course) => <p key={course}>{course}</p>)}</div></div>
        </motion.div>
      </div>
    </section>
  );
}
