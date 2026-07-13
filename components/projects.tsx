"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { ProjectModal } from "./project-modal";
import { ProjectPreview } from "./project-preview";

const easing = [0.22, 1, 0.36, 1] as const;

function ProjectCard({ project, index, onViewDetails }: { project: Project; index: number; onViewDetails: (project: Project) => void }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      id={`project-${project.id}`}
      className="project-card"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : (index % 3) * 0.07, ease: easing }}
    >
      <div className="project-card__preview"><ProjectPreview project={project} /></div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-stack" aria-label={`Technology stack: ${project.tech.join(", ")}`}>
          {project.tech.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
          {project.tech.length > 4 && <span>+{project.tech.length - 4}</span>}
        </div>
        <div className="project-card__actions">
          <button type="button" className="project-card__details" onClick={() => onViewDetails(project)}>
            Open case study <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section id="projects" className="projects-section" aria-labelledby="projects-heading">
        <div className="projects-shell">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: easing }} className="projects-header">
            <p className="section-eyebrow">02 / Selected Work</p>
            <h2 id="projects-heading" className="projects-title">A few things I&apos;ve <em>built.</em></h2>
            <p className="projects-intro">Two selected builds across real-time full-stack engineering and deep-learning research.</p>
          </motion.div>
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onViewDetails={setSelectedProject} />)}
          </div>
        </div>
      </section>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
