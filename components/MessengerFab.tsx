"use client";

import { getTelegramUrl, getWhatsAppUrl } from "@/lib/site";

export default function MessengerFab() {
  const telegram = getTelegramUrl();

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 sm:right-6">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xs font-bold text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition hover:scale-105"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        WA
      </a>
      {telegram ? (
        <a
          href={telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#229ED9] text-xs font-bold text-white shadow-[0_4px_24px_rgba(34,158,217,0.45)] transition hover:scale-105"
          aria-label="Telegram"
          title="Telegram"
        >
          TG
        </a>
      ) : null}
    </div>
  );
}
