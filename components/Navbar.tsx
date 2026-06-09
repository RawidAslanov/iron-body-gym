"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { id: "home", key: "home" as const },
  { id: "programs", key: "programs" as const },
  { id: "trainers", key: "trainers" as const },
  { id: "pricing", key: "pricing" as const },
  { id: "contact", key: "contact" as const },
];

export default function Navbar() {
  const { t } = useLanguage();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (id: string) =>
    `relative font-sans text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
      active === id ? "text-white" : "text-white/60 hover:text-white"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[rgba(10,10,18,0.8)] backdrop-blur-[20px] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.3)]" : ""
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wider"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-white">IRON </span>
            <span className="text-gradient-logo">BODY</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map(({ id, key }) => (
              <li key={id}>
                <a href={`#${id}`} className={linkClass(id)}>
                  {t.nav[key]}
                  {active === id && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-neon-purple to-neon-blue" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            <LanguageSwitcher />
            <a href="#pricing" className="btn-gradient px-5 py-2 text-sm">
              {t.nav.joinNow}
            </a>
          </div>

          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] flex flex-col bg-surface-base/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pt-20">
              {navLinks.map(({ id, key }, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`font-display text-2xl font-bold uppercase tracking-widest ${
                    active === id ? "text-gradient-logo" : "text-white/60"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[key]}
                </motion.a>
              ))}
              <LanguageSwitcher />
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="btn-gradient mt-4 px-10 py-4 text-sm"
              >
                {t.nav.joinNow}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
