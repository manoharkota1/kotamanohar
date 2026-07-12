"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./project-preview";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
        >
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              className="project-modal__close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={20} strokeWidth={1.8} />
            </button>

            {/* Preview */}
            <div className="project-modal__preview"><ProjectPreview project={project} /></div>

            {/* Content */}
            <div className="project-modal__content">
              {/* Header */}
              <div className="project-modal__header">
                <span className="project-modal__category">{project.category}</span>
                <h2 className="project-modal__title">{project.title}</h2>
                <p className="project-modal__desc">{project.longDescription}</p>
              </div>

              {/* Features */}
              <div className="project-modal__section">
                <h3>Key Features</h3>
                <ul className="project-modal__list">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="project-modal__section">
                <h3>Tech Stack</h3>
                <div className="project-stack">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="project-modal__section">
                <h3>Challenges</h3>
                <p>{project.challenges}</p>
              </div>

              {/* Role */}
              <div className="project-modal__section">
                <h3>My Role</h3>
                <p>{project.role}</p>
              </div>

              {/* Links */}
              <div className="project-modal__links">
                {project.demoUrl && (
                  <a href={project.demoUrl} className="project-modal__link-btn" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="project-modal__link-btn project-modal__link-btn--secondary" target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
