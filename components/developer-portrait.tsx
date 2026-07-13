"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef, type PointerEvent } from "react";

/** A motion-led portrait treatment that keeps the photo secondary to the interface. */
export function DeveloperPortrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 180, damping: 20, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 180, damping: 20, mass: 0.4 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !frameRef.current) return;
    const bounds = frameRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="developer-portrait" ref={frameRef} onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <motion.div className="developer-portrait__card" style={reduceMotion ? undefined : { rotateX, rotateY }}>
        <div className="developer-portrait__photo">
          <Image src="/images/manohar-pixel.png" alt="Kota Manohar" fill sizes="(max-width: 700px) 86vw, 32vw" priority={false} />
        </div>
        <div className="developer-portrait__grid" aria-hidden="true" />
        <span className="developer-portrait__label">KM / Engineering</span>
        <span className="developer-portrait__role">Software engineer<br />&amp; AI/ML engineer</span>
        <span className="developer-portrait__axis developer-portrait__axis--x" aria-hidden="true" />
        <span className="developer-portrait__axis developer-portrait__axis--y" aria-hidden="true" />
      </motion.div>
    </div>
  );
}
