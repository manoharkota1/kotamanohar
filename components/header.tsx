"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu, toggleTheme } from "@/store/interface-slice";
import type { RootState } from "@/store";
import { Monogram } from "./monogram";

const navigation = [
  { label: "Home", id: "top" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const menuTransition = { duration: 0.55, ease: [0.76, 0, 0.24, 1] as const };

export function Header() {
  const dispatch = useDispatch();
  const reduceMotion = useReducedMotion();
  const { menuOpen, lightMode } = useSelector((state: RootState) => state.interface);
  const [activeSection, setActiveSection] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    const updateHeader = () => setIsScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") dispatch(closeMenu());
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [dispatch, menuOpen]);

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    dispatch(closeMenu());
  };

  return (
    <>
      <motion.div className="site-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${menuOpen ? "is-menu-open" : ""}`}>
        <a className="home-mark" href="#top" aria-label="Kota Manohar — Home" onClick={() => handleNavigation("top")}><Monogram size={30} /></a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(({ label, id }) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? "is-active" : ""} aria-current={activeSection === id ? "page" : undefined} onClick={() => handleNavigation(id)}>
              <span>{label}</span>
              {activeSection === id && <motion.i layoutId="desktop-nav-active" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
            </a>
          ))}
        </nav>

        <div className="site-header__controls">
          <button type="button" className={`theme-switch ${lightMode ? "is-light" : ""}`} onClick={() => dispatch(toggleTheme())} aria-label={lightMode ? "Switch to dark theme" : "Switch to light theme"} aria-pressed={lightMode}>
            <span>{lightMode ? <Sun size={14} strokeWidth={2} /> : <Moon size={14} strokeWidth={2} />}</span>
          </button>
          <button className={`menu-button ${menuOpen ? "is-open" : ""}`} type="button" onClick={() => dispatch(toggleMenu())} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">
            <span className="menu-button__icon">{menuOpen ? <X size={19} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}</span>
            <span className="menu-button__label">{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav id="mobile-navigation" className="navigation-panel" aria-label="Mobile navigation" initial={reduceMotion ? false : { clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }} animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }} exit={reduceMotion ? undefined : { clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }} transition={menuTransition}>
            <div className="menu-links">
              {navigation.map(({ label, id }, index) => (
                <motion.a key={id} href={`#${id}`} onClick={() => handleNavigation(id)} initial={reduceMotion ? false : { y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.14 + index * 0.06, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
                  <span>0{index + 1}</span>{label}
                </motion.a>
              ))}
            </div>
            <motion.p className="menu-note" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>Software engineering, AI, and machine learning.</motion.p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
