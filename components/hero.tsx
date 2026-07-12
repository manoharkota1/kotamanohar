"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { Monogram } from "./monogram";

const AmbientCanvas = dynamic(() => import("./ambient-canvas").then((module) => module.AmbientCanvas), { ssr: false });

const titleTransition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

export function Hero() {
  const reduceMotion = useReducedMotion();
  const lightMode = useSelector((state: RootState) => state.interface.lightMode);

  useEffect(() => {
    document.documentElement.dataset.theme = lightMode ? "light" : "dark";
  }, [lightMode]);

  return (
    <main id="top" className={`hero-shell ${lightMode ? "is-light" : ""}`}>
      <AmbientCanvas />
      <section className="hero" aria-labelledby="hero-title">
        <motion.div className="hero-brand-mark" initial={reduceMotion ? false : { opacity: 0, scale: 0.82, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} aria-hidden="true"><Monogram size={132} /></motion.div>
        <div className="hero-copy">
          <div className="hero-lockup">
            <motion.h1 id="hero-title" className="hero-title" initial={reduceMotion ? false : "hidden"} animate="visible">
              <motion.span className="title-line kota" variants={{ hidden: { y: "105%" }, visible: { y: 0 } }} transition={titleTransition}>KOTA</motion.span>
              <motion.span className="title-line manohar" variants={{ hidden: { y: "105%" }, visible: { y: 0 } }} transition={{ ...titleTransition, delay: 0.08 }}>MANOHAR</motion.span>
            </motion.h1>

          </div>

          <motion.p
            className="hero-summary"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.55 }}
          >
            Software Engineer <span aria-hidden="true">/</span> AI &amp; ML Engineer<br />
            Building reliable systems and intelligent products.
          </motion.p>
        </div>
        <motion.a href="#about" className="scroll-cue" aria-label="Scroll to about" animate={reduceMotion ? undefined : { y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ChevronDown size={39} strokeWidth={1.6} />
        </motion.a>
      </section>
    </main>
  );
}
