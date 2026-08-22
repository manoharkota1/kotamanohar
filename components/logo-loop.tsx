"use client";

import { CSSProperties, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";

type LogoItem = {
  node: ReactNode;
  title?: string;
  href?: string;
  ariaLabel?: string;
};

type LogoLoopProps = {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: string) => ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
};

const MIN_COPIES = 2;
const COPY_HEADROOM = 2;

export default function LogoLoop({
  logos,
  speed = 42,
  direction = "left",
  width = "100%",
  logoHeight = 28,
  gap = 12,
  pauseOnHover,
  hoverSpeed,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  renderItem,
  className,
  style,
  ariaLabel = "Skills"
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLUListElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const previousTimeRef = useRef<number | null>(null);
  const [sequenceWidth, setSequenceWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const effectiveHoverSpeed = hoverSpeed ?? (pauseOnHover === false ? undefined : 0);

  const updateDimensions = useCallback(() => {
    const width = sequenceRef.current?.getBoundingClientRect().width ?? 0;
    const viewport = containerRef.current?.clientWidth ?? 0;
    if (width > 0) {
      setSequenceWidth(Math.ceil(width));
      setCopyCount(Math.max(MIN_COPIES, Math.ceil(viewport / width) + COPY_HEADROOM));
    }
  }, []);

  useEffect(() => {
    if (!window.ResizeObserver) {
      window.addEventListener("resize", updateDimensions);
      updateDimensions();
      return () => window.removeEventListener("resize", updateDimensions);
    }
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) observer.observe(containerRef.current);
    if (sequenceRef.current) observer.observe(sequenceRef.current);
    updateDimensions();
    return () => observer.disconnect();
  }, [logos, gap, logoHeight, updateDimensions]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    const targetVelocity = (direction === "left" ? 1 : -1) * speed;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (previousTimeRef.current === null) previousTimeRef.current = timestamp;
      const elapsed = Math.min((timestamp - previousTimeRef.current) / 1000, 0.1);
      previousTimeRef.current = timestamp;
      const target = isHovered && effectiveHoverSpeed !== undefined ? effectiveHoverSpeed : targetVelocity;
      velocityRef.current += (target - velocityRef.current) * (1 - Math.exp(-elapsed / 0.18));

      if (sequenceWidth > 0) {
        offsetRef.current = (offsetRef.current + velocityRef.current * elapsed) % sequenceWidth;
        const offset = (offsetRef.current + sequenceWidth) % sequenceWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
      previousTimeRef.current = null;
    };
  }, [direction, effectiveHoverSpeed, isHovered, sequenceWidth, speed]);

  const copies = useMemo(() => Array.from({ length: copyCount }), [copyCount]);

  return (
    <div
      ref={containerRef}
      className={["logo-loop", fadeOut && "logo-loop--fade", scaleOnHover && "logo-loop--scale-hover", className].filter(Boolean).join(" ")}
      style={{ width, "--logo-loop-gap": `${gap}px`, "--logo-loop-logo-height": `${logoHeight}px`, "--logo-loop-fade-color": fadeOutColor, ...style } as CSSProperties}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => effectiveHoverSpeed !== undefined && setIsHovered(true)}
      onMouseLeave={() => effectiveHoverSpeed !== undefined && setIsHovered(false)}
    >
      <div ref={trackRef} className="logo-loop__track">
        {copies.map((_, copyIndex) => (
          <ul key={copyIndex} ref={copyIndex === 0 ? sequenceRef : undefined} className="logo-loop__list" aria-hidden={copyIndex > 0}>
            {logos.map((logo, index) => {
              const key = `${copyIndex}-${index}`;
              const content = renderItem ? renderItem(logo, key) : <span className="logo-loop__node">{logo.node}</span>;
              return (
                <li key={key} className="logo-loop__item">
                  {logo.href && !renderItem ? <a href={logo.href} target="_blank" rel="noreferrer noopener" aria-label={logo.ariaLabel ?? logo.title ?? "Technology link"}>{content}</a> : content}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}
