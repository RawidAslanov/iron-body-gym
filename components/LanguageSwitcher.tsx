"use client";

import { useLanguage, type Locale } from "@/context/LanguageContext";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "tr", label: "TR" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-3" role="group" aria-label="Language">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`text-sm font-bold uppercase transition-colors duration-200 ${
            locale === code
              ? "text-neon-blue"
              : "text-white/40 hover:text-white"
          }`}
          aria-pressed={locale === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
