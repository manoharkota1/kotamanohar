"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { ProjectModal } from "./project-modal";
import { ProjectPreview } from "./project-preview";
import { useState } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

function ProjectLinks({ project, onViewDetails, featured = false }: { project: Project; onViewDetails: (project: Project) => void; featured?: boolean }) {
  return (
    <div className={`project-links ${featured ? "project-links--featured" : ""}`}>
      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link project-link--primary" aria-label={`Open live demo for ${project.title}`}>
        <ExternalLink size={15} /> Live Demo
      </a>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Open GitHub repository for ${project.title}`}>
        <Github size={15} /> GitHub
      </a>
      <button type="button" className="project-link" onClick={() => onViewDetails(project)} aria-label={`View details for ${project.title}`}>
        <ArrowUpRight size={15} /> View Details
      </button>
    </div>
  );
}

function ProjectMeta({ project, number }: { project: Project; number: string }) {
  return (
    <div className="project-meta">
      <span>{number} / {project.category}</span>
      <span className="project-meta__status"><i />{project.status}</span>
    </div>
  );
}

function ProjectStack({ tech }: { tech: string[] }) {
  return (
    <div className="project-stack" aria-label={`Technology stack: ${tech.join(", ")}`}>
      {tech.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}

function ProjectStory({ project, index, onViewDetails }: { project: Project; index: number; onViewDetails: (project: Project) => void }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const previewY = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [26, 0, -26]);
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      ref={ref}
      id={`project-${project.id}`}
      className={`project-story ${index % 2 === 0 ? "project-story--reverse" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: easing }}
    >
      <motion.div className="project-story__visual" style={{ y: previewY }}>
        <ProjectPreview project={project} />
      </motion.div>
      <div className="project-story__content">
        <ProjectMeta project={project} number={number} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ProjectStack tech={project.tech} />
        <ProjectLinks project={project} onViewDetails={onViewDetails} />
      </div>
    </motion.article>
  );
}

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay, ease: easing }}>{children}</motion.div>;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const featured = projects[0];
  const supportingProjects = projects.slice(1);

  return (
    <>
      <section ref={sectionRef} id="projects" className="projects-section" aria-labelledby="projects-heading">
        <motion.div className="projects-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
        <div className="projects-shell">
          <div className="projects-header">
            <Reveal><p className="section-eyebrow">02 / Selected Work</p></Reveal>
            <Reveal delay={0.08}><h2 id="projects-heading" className="projects-title">Systems built to <em>learn</em> and scale.</h2></Reveal>
            <Reveal delay={0.16} className="projects-header__bottom">
              <p className="projects-intro">Selected work across full-stack engineering, applied AI, data products, and the infrastructure that makes intelligent software dependable.</p>
              <a className="projects-scroll-cue" href="#project-knowledge-copilot"><span>Explore the work</span><ArrowDownRight size={17} /></a>
            </Reveal>
          </div>

          <article id={`project-${featured.id}`} className="project-featured">
            <motion.div className="project-featured__copy" initial={{ opacity: 0, x: -26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease: easing }}>
              <ProjectMeta project={featured} number="01" />
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <ProjectStack tech={featured.tech} />
              <ProjectLinks project={featured} onViewDetails={setSelectedProject} featured />
            </motion.div>
            <motion.div className="project-featured__visual" initial={{ opacity: 0, scale: 0.96, y: 24 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, delay: 0.08, ease: easing }}>
              <ProjectPreview project={featured} featured />
            </motion.div>
            <span className="project-featured__index" aria-hidden="true">01</span>
          </article>

          <div className="projects-index" aria-label="Project index">
            <span>More selected work</span>
            <div>{projects.map((project, index) => <a key={project.id} href={`#project-${project.id}`} aria-label={`Jump to ${project.title}`}>{String(index + 1).padStart(2, "0")}</a>)}</div>
          </div>

          <div className="projects-stories">
            {supportingProjects.map((project, index) => <ProjectStory key={project.id} project={project} index={index + 1} onViewDetails={setSelectedProject} />)}
          </div>
        </div>
      </section>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
