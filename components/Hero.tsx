"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage, type Locale } from "@/context/LanguageContext";
import { useCountUp } from "@/hooks/useCountUp";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=90";

const BRACKET_TEXT: Record<Locale, string> = {
  en: "[ PREMIUM FITNESS CLUB WHERE RESULTS MEET INNOVATION ]",
  ru: "[ ПРЕМИУМ ФИТНЕС-КЛУБ, ГДЕ РЕЗУЛЬТАТ ВСТРЕЧАЕТСЯ С ИННОВАЦИЯМИ ]",
  tr: "[ SONUÇLARIN İNOVASYONLA BULUŞTUĞU PREMİUM FİTNESS KULÜBÜ ]",
};

const FREE_BADGE: Record<Locale, string> = {
  en: "FIRST SESSION FREE",
  ru: "ПЕРВАЯ ТРЕНИРОВКА БЕСПЛАТНО",
  tr: "İLK ANTRENMAN ÜCRETSİZ",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

function ProgressRing({
  value,
  max,
  children,
}: {
  value: number;
  max: number;
  children: React.ReactNode;
}) {
  const r = 36;
  const circumference = 2 * Math.PI * r;
  const progress = Math.min(value / max, 1);
  const offset = circumference * (1 - progress);

  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      <svg
        className="absolute h-full w-full -rotate-90"
        viewBox="0 0 96 96"
        aria-hidden
      >
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
        />
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="#7C3AFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="relative z-10 text-center">{children}</div>
    </div>
  );
}

function GlassStatCard({
  value,
  suffix,
  label,
  max,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  max: number;
  delay: number;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="glass-card flex items-center gap-4 p-5"
    >
      <ProgressRing value={count} max={max}>
        <span className="font-display text-2xl font-bold text-white">
          {count}
          {suffix}
        </span>
      </ProgressRing>
      <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
        {label}
      </p>
    </motion.div>
  );
}

export default function Hero() {
  const { t, locale } = useLanguage();
  const headlineFont =
    locale === "en" ? "font-bebas" : "font-display font-bold";

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 gap-4 px-4 pb-10 pt-6 sm:px-6 lg:min-h-screen lg:grid-cols-[1fr_2fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-4 lg:px-10 lg:pb-10 lg:pt-24">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="order-1 text-xs tracking-[0.1em] text-white/40 lg:col-start-3 lg:row-start-1 lg:text-right"
        >
          {BRACKET_TEXT[locale]}
        </motion.p>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative order-2 min-h-[280px] overflow-hidden rounded-[24px] sm:min-h-[360px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:min-h-0"
        >
          <Image
            src={HERO_IMAGE}
            alt="Athletes training in a modern gym"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/70 via-transparent to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-4 left-4 z-10 glass flex max-w-[260px] items-center gap-3 rounded-2xl px-4 py-3">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-neon-green shadow-[0_0_8px_#00FF88]" />
            <span className="text-xs font-semibold uppercase tracking-wide text-white">
              {FREE_BADGE[locale]}
            </span>
          </div>
        </motion.div>

        <div className="order-3 flex flex-col gap-4 lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:pt-12">
          <GlassStatCard
            value={500}
            suffix="+"
            label={t.hero.statMembers}
            max={600}
            delay={2}
          />
          <GlassStatCard
            value={15}
            suffix=""
            label={t.hero.statTrainers}
            max={20}
            delay={3}
          />
          <GlassStatCard
            value={10}
            suffix="+"
            label={t.hero.statYears}
            max={15}
            delay={4}
          />
        </div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-20 order-4 flex flex-col justify-start gap-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center lg:py-4"
        >
          <div>
            <p
              className={`${headlineFont} text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)]`}
            >
              IRON
            </p>
            <p className="text-[clamp(3rem,8vw,6.5rem)] font-display font-bold leading-[0.9] text-gradient-brand drop-shadow-[0_2px_24px_rgba(124,58,255,0.5)]">
              BODY
            </p>
            <p className="text-[clamp(2.5rem,7vw,5rem)] font-display font-bold leading-none text-white/50">
              GYM
            </p>
          </div>

          <div className="mt-2 space-y-5">
            <p className="section-body max-w-sm">{t.hero.subheadline}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="btn-neon-green px-8 py-4 text-sm uppercase"
              >
                {t.hero.getStarted}
              </a>
              <a
                href="#programs"
                className="glass rounded-xl border border-white/20 px-8 py-4 text-sm font-bold uppercase text-white transition-colors hover:border-neon-purple/50"
              >
                {t.hero.seePrograms}
              </a>
            </div>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-neon-blue"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white">
                ▶
              </span>
              {t.hero.seePrograms}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
