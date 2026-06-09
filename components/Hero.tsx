"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage, type Locale } from "@/context/LanguageContext";
import { useCountUp } from "@/hooks/useCountUp";

const HERO_IMAGE = "/hero.png";

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

const CENTER_OPEN: Record<Locale, string> = {
  en: "OPEN 24/7",
  ru: "ОТКРЫТО 24/7",
  tr: "7/24 AÇIK",
};

const CENTER_TAGLINE: Record<Locale, string> = {
  en: "Train anytime. No limits.",
  ru: "Тренируйся когда угодно. Без ограничений.",
  tr: "İstediğin zaman antrenman. Sınır yok.",
};

const CENTER_CLASSES: Record<Locale, string> = {
  en: "120+ weekly classes",
  ru: "120+ занятий в неделю",
  tr: "Haftada 120+ ders",
};

const CENTER_PROGRAMS: Record<Locale, readonly string[]> = {
  en: ["Strength", "HIIT", "CrossFit"],
  ru: ["Сила", "HIIT", "Кроссфит"],
  tr: ["Güç", "HIIT", "CrossFit"],
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
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Modern gym interior with neon lighting"
          fill
          priority
          className="object-cover object-[55%_center] lg:object-[58%_center]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a0a12]/95 via-[#0a0a12]/45 to-[#0a0a12]/25 lg:from-[#0a0a12]/92 lg:via-[#0a0a12]/30 lg:to-[#0a0a12]/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-[#0a0a12]/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(124,58,255,0.12),transparent)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 gap-6 px-4 pb-10 pt-6 sm:px-6 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr_0.85fr] lg:items-center lg:gap-6 xl:gap-8 lg:px-10 lg:pb-10 lg:pt-24">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="order-2 flex flex-col justify-center gap-6 lg:order-1"
        >
          <p className="text-xs tracking-[0.1em] text-white/40 lg:max-w-md">
            {BRACKET_TEXT[locale]}
          </p>

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

          <p className="section-body max-w-md">{t.hero.subheadline}</p>

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

          <div className="glass inline-flex max-w-[280px] items-center gap-3 rounded-2xl px-4 py-3">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-neon-green shadow-[0_0_8px_#00FF88]" />
            <span className="text-xs font-semibold uppercase tracking-wide text-white">
              {FREE_BADGE[locale]}
            </span>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="order-3 hidden flex-col justify-center gap-5 lg:order-2 lg:flex"
        >
          <div className="glass-card relative overflow-hidden rounded-[24px] border border-white/10 p-6">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-neon-purple/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-10 left-4 h-24 w-24 rounded-full bg-neon-blue/15 blur-3xl"
              aria-hidden
            />
            <div className="relative flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-green opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-neon-green shadow-[0_0_12px_#00FF88]" />
              </span>
              <p className="font-display text-3xl font-bold tracking-wide text-white">
                {CENTER_OPEN[locale]}
              </p>
            </div>
            <p className="relative mt-3 text-sm text-white/65">
              {CENTER_TAGLINE[locale]}
            </p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {CENTER_PROGRAMS[locale].map((program) => (
                <span
                  key={program}
                  className="rounded-full border border-neon-purple/35 bg-neon-purple/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/85"
                >
                  {program}
                </span>
              ))}
            </div>
            <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <div>
                <p className="font-display text-2xl font-bold text-neon-blue">
                  120+
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                  {CENTER_CLASSES[locale]}
                </p>
              </div>
              <a
                href="#programs"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:border-neon-purple/50 hover:bg-white/10"
              >
                {t.hero.seePrograms}
              </a>
            </div>
          </div>
        </motion.div>

        <div className="order-1 flex flex-col gap-4 lg:order-3 lg:items-end lg:pt-8">
          <GlassStatCard
            value={500}
            suffix="+"
            label={t.hero.statMembers}
            max={600}
            delay={1}
          />
          <GlassStatCard
            value={15}
            suffix=""
            label={t.hero.statTrainers}
            max={20}
            delay={2}
          />
          <GlassStatCard
            value={10}
            suffix="+"
            label={t.hero.statYears}
            max={15}
            delay={3}
          />
        </div>
      </div>
    </section>
  );
}
