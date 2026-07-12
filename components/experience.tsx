"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const chapters = [
  {
    period: "Build",
    title: "Production software",
    kind: "Software engineering",
    copy: "Building well-structured applications from the interface to the backend, with APIs, databases, and services designed to be clear, secure, and maintainable.",
    focus: ["TypeScript", "Backend APIs", "Cloud-ready systems"],
  },
  {
    period: "Model",
    title: "Applied intelligence",
    kind: "AI & machine learning",
    copy: "Taking models from experimentation to useful product capabilities: data preparation, evaluation, retrieval, inference, and trustworthy user-facing experiences.",
    focus: ["Python", "LLM systems", "Model evaluation"],
  },
  {
    period: "Operate",
    title: "Reliable delivery",
    kind: "Systems that keep improving",
    copy: "Treating deployment, observability, testing, and iteration as part of the build—so software remains fast, understandable, and dependable after launch.",
    focus: ["Testing", "Observability", "Performance"],
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
          <motion.h2 id="experience-heading" initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: 0.06, ease }}>From robust code to <em>useful intelligence.</em></motion.h2>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, delay: 0.14, ease }}>The work is about turning difficult problems into software people can depend on—then using data and AI where it creates real leverage.</motion.p>
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
