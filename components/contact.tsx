"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticLink } from "./magnetic-link";

const navigation = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Certifications"];
const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-shell">
        <motion.p className="section-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease }}>06 / Contact</motion.p>
        <motion.div className="contact-main" initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: 0.06, ease }}>
          <h2 id="contact-heading">Let&apos;s build what&apos;s <em>next.</em></h2>
          <p>Have a full-stack challenge or AI idea worth solving? Let&apos;s talk about a reliable solution.</p>
          <MagneticLink href="mailto:manoharkota.in@gmail.com" className="contact-cta" ariaLabel="Send an email to Kota Manohar"><span>Start a conversation</span><ArrowUpRight size={22} strokeWidth={1.8} /></MagneticLink>
          <div className="contact-details"><a href="tel:+917396107241">+91 7396107241</a><span>Vijayawada, India</span><a href="https://www.linkedin.com/in/kotamanohar-in" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/manoharkota1" target="_blank" rel="noopener noreferrer">GitHub</a></div>
        </motion.div>
        <footer className="contact-footer">
          <span>© {new Date().getFullYear()} Kota Manohar</span>
          <nav aria-label="Footer navigation">{navigation.map((item) => <a key={item} href={`#${item === "Home" ? "top" : item.toLowerCase()}`}>{item}</a>)}</nav>
          <a href="#top" className="contact-top">Back to top <ArrowUpRight size={14} /></a>
        </footer>
      </div>
    </section>
  );
}
