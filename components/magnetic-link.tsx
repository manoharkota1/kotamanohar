"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

interface MagneticLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export function MagneticLink({ href, className, children, ariaLabel }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.25 });

  const handlePointerMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.14);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.14);
  };

  return <motion.a ref={ref} href={href} className={className} aria-label={ariaLabel} style={{ x: springX, y: springY }} onMouseMove={handlePointerMove} onMouseLeave={() => { x.set(0); y.set(0); }} whileTap={reduceMotion ? undefined : { scale: 0.96 }}>{children}</motion.a>;
}
