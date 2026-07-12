"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticLink } from "./magnetic-link";

const navigation = ["Home", "About", "Projects", "Experience"];
const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-shell">
        <motion.p className="section-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease }}>04 / Contact</motion.p>
        <motion.div className="contact-main" initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: 0.06, ease }}>
          <h2 id="contact-heading">Let&apos;s build what&apos;s <em>next.</em></h2>
          <p>Have a software challenge, an AI idea, or a data problem worth solving? Let&apos;s talk about what a reliable solution could look like.</p>
          <MagneticLink href="mailto:hello@kotamanohar.com" className="contact-cta" ariaLabel="Send an email to Kota Manohar"><span>Start a conversation</span><ArrowUpRight size={22} strokeWidth={1.8} /></MagneticLink>
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
