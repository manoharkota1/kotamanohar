"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowDownRight, Check } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./project-preview";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const hasDemo = Boolean(project?.demoUrl && project.demoUrl !== "#");
  const hasGithub = Boolean(project?.githubUrl && project.githubUrl !== "#");
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  const handleFocusTrap = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="case-study"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
        >
          <motion.div
            ref={modalRef}
            className="case-study__page"
            onKeyDown={handleFocusTrap}
            tabIndex={-1}
            >
              <header className="case-study__topbar">
                <div><span>Case study</span><b>{project.category}</b></div>
                <div className="case-study__actions">
                  {hasDemo && <a href={project.demoUrl} className="case-study__live" target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> View live</a>}
                  <button type="button" className="case-study__close" onClick={onClose} aria-label="Close case study" autoFocus><X size={18} strokeWidth={1.8} /></button>
                </div>
              </header>

              <main className="case-study__shell">
                <section className="case-study__hero">
                  <div className="case-study__hero-title">
                    <p className="case-study__eyebrow">01 — Project overview</p>
                    <h2>{project.title}</h2>
                  </div>
                  <div className="case-study__preview"><ProjectPreview project={project} /></div>
                  <div className="case-study__summary">
                    <p>{project.longDescription}</p>
                    <a href="#case-study-overview" className="case-study__jump">Explore the build <ArrowDownRight size={16} /></a>
                  </div>
                </section>

                <section id="case-study-overview" className="case-study__content">
                  <aside className="case-study__facts" aria-label="Project details">
                    <div><span>Role</span><p>{project.role}</p></div>
                    <div><span>Timeline</span><p>{project.timeline}</p></div>
                    <div><span>Core stack</span><p>{project.tech.slice(0, 3).join(" · ")}</p></div>
                  </aside>

                  <div className="case-study__story">
                  <section className="case-study__section case-study__section--lead">
                    <p className="case-study__kicker">The challenge</p>
                    <h3>{project.challenges}</h3>
                  </section>

                  <section className="case-study__section">
                    <p className="case-study__kicker">How I approached it</p>
                    <div className="case-study__approach">
                      {project.approach.map((step, index) => (
                        <article key={step.label}>
                          <span>0{index + 1}</span>
                          <h4>{step.label}</h4>
                          <p>{step.detail}</p>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="case-study__section case-study__section--split">
                    <div>
                      <p className="case-study__kicker">What shipped</p>
                      <ul className="case-study__list">
                        {project.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}
                      </ul>
                    </div>
                    <div className="case-study__outcome">
                      <p className="case-study__kicker">Outcome</p>
                      <p>{project.outcome}</p>
                    </div>
                  </section>

                  <section className="case-study__section case-study__section--footer">
                    <div>
                      <p className="case-study__kicker">Built with</p>
                      <div className="project-stack">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    </div>
                    {hasGithub && <div className="case-study__links">
                      <a href={project.githubUrl} className="case-study__source" target="_blank" rel="noopener noreferrer"><Github size={16} /> Source</a>
                    </div>}
                  </section>
                  </div>
                </section>
              </main>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
