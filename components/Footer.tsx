"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioUrl, getTelegramUrl, getWhatsAppUrl } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";

const socials = [
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "TikTok", href: "#" },
];

export default function Footer() {
  const { t } = useLanguage();
  const telegram = getTelegramUrl();
  const portfolio = getPortfolioUrl();

  return (
    <footer
      id="contact"
      className="border-t border-white/[0.06] bg-surface-footer text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-4xl font-bold tracking-wide">
              <span className="text-white">IRON </span>
              <span className="text-gradient-brand">BODY</span>
            </p>
            <p className="mt-4 max-w-sm text-white/60">{t.footer.tagline}</p>
            <div className="mt-8 space-y-2 text-white/60">
              <p>{t.footer.address}</p>
              <p>
                <a
                  href={`tel:${t.footer.phone}`}
                  className="transition-colors hover:text-neon-purple"
                >
                  {t.footer.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="transition-colors hover:text-neon-purple"
                >
                  {t.footer.email}
                </a>
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#25D366] transition hover:bg-[#25D366]/20"
              >
                WhatsApp
              </a>
              {telegram ? (
                <a
                  href={telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[#229ED9]/40 bg-[#229ED9]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#229ED9] transition hover:bg-[#229ED9]/20"
                >
                  Telegram
                </a>
              ) : null}
            </div>
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-widest text-white">
                {t.footer.hoursTitle}
              </p>
              <p className="mt-2 text-white/60">{t.footer.weekdays}</p>
              <p className="text-white/60">{t.footer.weekend}</p>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest">
                {t.footer.followUs}
              </p>
              <div className="flex gap-4">
                {socials.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="glass flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold text-white/70 transition-all hover:border-neon-purple/50 hover:text-neon-purple hover:shadow-neon-purple"
                    aria-label={name}
                  >
                    {name.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[320px] w-full overflow-hidden rounded-2xl border border-white/10 lg:h-[360px]">
            <iframe
              title="IRON BODY GYM location"
              src="https://www.google.com/maps?q=2847+Iron+Street,+Brooklyn,+NY+11201&hl=en&z=15&output=embed"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/40">{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <LanguageSwitcher />
            {portfolio ? (
              <a
                href={portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-widest text-neon-blue transition hover:text-white"
              >
                {t.footer.portfolioLink} ↗
              </a>
            ) : null}
            <span className="rounded-lg border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/45">
              {t.footer.demoBadge}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
