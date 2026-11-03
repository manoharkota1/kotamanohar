"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DeveloperPortrait } from "./developer-portrait";

const principles = [
  { number: "01", title: "Build full stack", text: "Create responsive web applications and reliable REST APIs from frontend to backend." },
  { number: "02", title: "Apply AI/ML", text: "Turn machine-learning and generative-AI techniques into practical software." },
  { number: "03", title: "Optimize for impact", text: "Measure performance, solve bottlenecks, and improve the experience for users." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-shell">
        <motion.p className="section-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease }}>01 / About</motion.p>
        <motion.h2 id="about-heading" initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: 0.06, ease }}>Engineering systems that are built to <em>last.</em></motion.h2>

        <div className="about-grid">
          <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease }}><DeveloperPortrait /></motion.div>

          <div className="about-content">
            <motion.p className="about-copy" initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6, delay: 0.12, ease }}>I&apos;m Manohar, a Full Stack Developer Intern and M.Tech candidate in AI/ML with hands-on experience building and optimizing web applications. At Farview Global, I cut job-portal API response latency by 35% and improved frontend loading by 20% through AWS-based performance tuning.</motion.p>
            <div className="about-principles">
              {principles.map((principle, index) => (
                <motion.article key={principle.number} className="about-principle" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.18 + index * 0.08, ease }}>
                  <span>{principle.number}</span>
                  <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
