"use client";

import { motion, useReducedMotion } from "framer-motion";

interface MonogramProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

/**
 * A custom continuous-line KM monogram. The K opens into the first stem of the M,
 * creating one compact mark that remains legible at favicon scale.
 */
export function Monogram({ className, size = 48, animated = true }: MonogramProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;

  return (
    <motion.svg className={`monogram ${className ?? ""}`} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" initial={shouldAnimate ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
      <motion.path d="M11 10V38M11 24L22.5 10M11 24L22.5 38M22.5 38V10L29.75 23L37 10V38" initial={shouldAnimate ? { pathLength: 0 } : false} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} />
    </motion.svg>
  );
}
