"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const testimonialKeys = ["t1", "t2", "t3"] as const;

type TestimonialItem = {
  name: string;
  duration: string;
  quote: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#FFD700]" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="glass-card relative border-l-4 border-l-neon-purple py-6 pl-6 pr-6 backdrop-blur-[10px]">
      <span
        className="font-display text-[80px] leading-none text-gradient-logo opacity-20"
        aria-hidden
      >
        &ldquo;
      </span>
      <div className="-mt-8 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple to-neon-blue text-sm font-bold text-white">
          {initials(item.name)}
        </div>
        <div>
          <p className="font-bold text-white">{item.name}</p>
          <p className="text-sm text-muted">{item.duration}</p>
        </div>
      </div>
      <div className="mt-3">
        <Stars />
      </div>
      <p className="mt-4 text-lg italic leading-relaxed text-white/70">
        {item.quote}
      </p>
    </article>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const items = testimonialKeys.map((key) => t.testimonials[key]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section className="relative py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <p className="section-eyebrow mb-4">TESTIMONIALS</p>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-body mx-auto -mt-8 mb-10 max-w-xl">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="hidden gap-6 md:grid md:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard item={items[active]} />
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === active ? "bg-neon-purple" : "bg-white/20"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
