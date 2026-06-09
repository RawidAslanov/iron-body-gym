"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage, type Locale } from "@/context/LanguageContext";

const SECTION_TAG: Record<Locale, string> = {
  en: "THE COACHES",
  ru: "ТРЕНЕРЫ",
  tr: "ANTRENÖRLER",
};

const trainers = [
  {
    key: "alex" as const,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    clients: 120,
    years: 12,
  },
  {
    key: "sara" as const,
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    clients: 95,
    years: 8,
  },
  {
    key: "diego" as const,
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
    clients: 80,
    years: 10,
  },
];

export default function Trainers() {
  const { t, locale } = useLanguage();

  return (
    <section id="trainers" className="relative py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow mb-4">{SECTION_TAG[locale]}</p>
          <h2 className="section-title">{t.trainers.title}</h2>
          <p className="section-body -mt-8 mb-12 max-w-2xl">{t.trainers.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {trainers.map(({ key, image, clients, years }, i) => {
            const trainer = t.trainers[key];
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card group overflow-hidden p-6 backdrop-blur-[10px]"
              >
                <div className="relative h-[400px] overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a12]/90 to-transparent"
                    aria-hidden
                  />
                </div>
                <div
                  className="mt-4 h-1 w-16 bg-gradient-to-r from-neon-purple to-neon-blue"
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-3xl font-bold tracking-wide text-white">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-neon-blue">
                  {trainer.title}
                </p>
                <p className="mt-2 text-sm text-neon-purple">{trainer.specialty}</p>
                <p className="section-body mt-3 text-sm">{trainer.bio}</p>
                <div className="mt-4 flex gap-6 text-sm font-semibold text-white/70">
                  <span>
                    {clients}+ {t.trainers.clients}
                  </span>
                  <span>
                    {years} {t.trainers.yearsExp}
                  </span>
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-block rounded-lg border border-neon-purple px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-neon-purple"
                >
                  {t.trainers.bookSession}
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
