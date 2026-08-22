"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Search, Workflow } from "lucide-react";
import LogoLoop from "./logo-loop";
import {
  SiDocker,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const featuredSkills = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <BrainCircuit />, title: "LLMs", href: "https://platform.openai.com/docs" },
  { node: <Workflow />, title: "MCP", href: "https://modelcontextprotocol.io" },
  { node: <Search />, title: "RAG", href: "https://www.pinecone.io/learn/retrieval-augmented-generation/" },
  { node: <SiLangchain />, title: "LangChain", href: "https://www.langchain.com" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="skills-shell">
        <motion.p className="section-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease }}>02 / Technical Skills</motion.p>
        <motion.div className="skills-intro" initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65, delay: 0.06, ease }}>
          <h2 id="skills-heading">Built for reliable systems and <em>intelligent products.</em></h2>
          <p>Backend engineering, distributed infrastructure, and practical AI systems—from API contracts and caching to retrieval-augmented generation and LLM integration.</p>
        </motion.div>
        <motion.div className="skills-logo-showcase" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.12, ease }}>
          <LogoLoop
            logos={featuredSkills}
            speed={100}
            direction="left"
            logoHeight={42}
            gap={22}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="var(--color-surface-1)"
            ariaLabel="Technical skills"
            renderItem={(item) => (
              <a className="skill-logo" href={item.href} target="_blank" rel="noreferrer noopener" aria-label={item.title}>
                {item.node}
                <span>{item.title}</span>
              </a>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}
