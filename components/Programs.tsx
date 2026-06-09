"use client";

import { motion } from "framer-motion";
import { useLanguage, type Locale } from "@/context/LanguageContext";

const SECTION_TAG: Record<Locale, string> = {
  en: "WHAT WE OFFER",
  ru: "ЧТО МЫ ПРЕДЛАГАЕМ",
  tr: "NE SUNUYORUZ",
};

const EXPLORE: Record<Locale, string> = {
  en: "Explore →",
  ru: "Подробнее →",
  tr: "Keşfet →",
};

const programs = [
  {
    key: "strength" as const,
    icon: "💪",
    gradient: "linear-gradient(90deg, #7C3AFF, #00C2FF)",
  },
  {
    key: "hiit" as const,
    icon: "🔥",
    gradient: "linear-gradient(90deg, #00C2FF, #7C3AFF)",
  },
  {
    key: "yoga" as const,
    icon: "🧘",
    gradient: "linear-gradient(90deg, #7C3AFF, #00FF88)",
  },
  {
    key: "boxing" as const,
    icon: "🥊",
    gradient: "linear-gradient(90deg, #00FF88, #00C2FF)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Programs() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-surface-secondary bg-grid-lines py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow mb-4">{SECTION_TAG[locale]}</p>
          <h2 className="section-title">{t.programs.title}</h2>
          <p className="section-body -mt-8 mb-12 max-w-2xl">{t.programs.subtitle}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {programs.map(({ key, icon, gradient }) => {
            const p = t.programs[key];
            return (
              <motion.article
                key={key}
                variants={item}
                className="glass-card group flex min-h-[380px] flex-col overflow-hidden backdrop-blur-[10px]"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="h-1 w-full neon-border-pulse"
                  style={{ background: gradient }}
                />
                <div className="flex flex-1 flex-col p-8">
                  <span
                    className="mb-4 text-4xl drop-shadow-[0_0_8px_#7C3AFF]"
                    aria-hidden
                  >
                    {icon}
                  </span>
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="section-body mt-3 flex-1">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                    <span>{p.duration}</span>
                    <span className="text-neon-blue">•</span>
                    <span className="text-white/80">{p.difficulty}</span>
                  </div>
                  <a
                    href="#pricing"
                    className="mt-8 inline-flex self-start text-sm font-bold text-gradient-link transition-opacity hover:opacity-80"
                  >
                    {EXPLORE[locale]}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
