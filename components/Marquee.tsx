"use client";

const TICKER =
  "STRENGTH · CARDIO · BOXING · YOGA · HIIT · NUTRITION · RECOVERY · ";

export default function Marquee() {
  const content = TICKER.repeat(4);

  return (
    <div className="overflow-hidden border-y border-white/10 bg-surface-secondary/80 py-3 backdrop-blur-sm">
      <div className="flex w-max animate-marquee">
        <p className="font-display whitespace-nowrap px-4 text-xl font-bold tracking-wide text-gradient-logo">
          {content}
        </p>
        <p
          className="font-display whitespace-nowrap px-4 text-xl font-bold tracking-wide text-gradient-logo"
          aria-hidden
        >
          {content}
        </p>
      </div>
    </div>
  );
}
