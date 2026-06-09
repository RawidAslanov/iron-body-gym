"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section
      className="border-y border-[rgba(124,58,255,0.3)] py-20"
      style={{
        background:
          "linear-gradient(135deg, rgba(124,58,255,0.3) 0%, rgba(0,194,255,0.2) 100%)",
        borderBottomColor: "rgba(0,194,255,0.2)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl px-4 text-center sm:px-6"
      >
        <h2 className="font-display text-5xl font-bold leading-none tracking-tight text-white md:text-7xl">
          {t.cta.headline}
        </h2>
        <p className="mt-6 text-lg text-white/80">{t.cta.subtext}</p>
        <a href="#pricing" className="btn-neon-green mt-10 inline-block px-12 py-4 text-lg uppercase">
          {t.cta.button} →
        </a>
      </motion.div>
    </section>
  );
}
