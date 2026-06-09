"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const PLANS = [
  { key: "starter" as const, monthly: 49 },
  { key: "pro" as const, monthly: 89, popular: true },
  { key: "elite" as const, monthly: 149 },
];

function CheckIcon({ popular }: { popular?: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${popular ? "text-neon-green" : "text-neon-green"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  const { t } = useLanguage();
  const [annual, setAnnual] = useState(false);

  const calcPrice = (monthly: number) =>
    annual ? Math.round(monthly * 0.8) : monthly;

  return (
    <section id="pricing" className="relative bg-surface-secondary bg-grid-lines py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <p className="section-eyebrow mb-4">PRICING</p>
          <h2 className="section-title">{t.pricing.title}</h2>
          <p className="section-body mx-auto -mt-8 mb-10 max-w-xl">
            {t.pricing.subtitle}
          </p>

          <div className="glass mb-16 inline-flex rounded-full p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-6 py-2 text-sm font-bold uppercase transition-all ${
                !annual
                  ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded-full px-6 py-2 text-sm font-bold uppercase transition-all ${
                annual
                  ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {t.pricing.annual}{" "}
              <span className="text-neon-green">({t.pricing.annualSave})</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:gap-8">
          {PLANS.map(({ key, monthly, popular }, i) => {
            const plan = t.pricing[key];
            const price = calcPrice(monthly);
            const isPro = !!popular;

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card relative flex flex-col p-8 backdrop-blur-[10px] ${
                  isPro
                    ? "scale-105 border-[rgba(124,58,255,0.5)] shadow-neon-purple-lg lg:scale-105"
                    : ""
                }`}
                style={
                  isPro
                    ? {
                        boxShadow:
                          "0 0 60px rgba(124,58,255,0.2), inset 0 0 60px rgba(124,58,255,0.05)",
                      }
                    : undefined
                }
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
                    {t.pricing.popular}
                  </span>
                )}
                <h3 className="font-display text-3xl font-bold tracking-wide text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 font-display text-5xl font-bold leading-none">
                  <span className="text-gradient-price">${price}</span>
                  <span className="text-lg text-white/50">{t.pricing.perMonth}</span>
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckIcon popular={isPro} />
                      <span className="text-white/60">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block rounded-lg py-4 text-center text-sm font-bold uppercase tracking-wide transition-all ${
                    isPro
                      ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90"
                      : "glass border border-white/20 text-white hover:border-neon-purple/50"
                  }`}
                >
                  {t.pricing.getStarted}
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
