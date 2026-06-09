export function getPortfolioUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_PORTFOLIO_URL?.trim();
  return url || null;
}

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const SITE = {
  name: "IRON BODY GYM",
  phone: "+15550102030",
  phoneDisplay: "+1 (555) 010-2030",
  email: "info@ironbodygym.com",
  address: "2847 Iron Street, Brooklyn, NY 11201",
};

export function getWhatsAppUrl(text = "Hi! I'd like to learn about membership."): string {
  return `https://wa.me/${SITE.phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

export function getTelegramUrl(): string | null {
  const user = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME?.trim().replace(/^@/, "");
  if (!user) return null;
  return `https://t.me/${user}`;
}
