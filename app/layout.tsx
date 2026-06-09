import type { Metadata } from "next";
import { Bebas_Neue, Inter, Oswald } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-oswald",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "IRON BODY GYM | Premium Fitness Club",
  description:
    "Elite training, world-class coaches, and programs built for real results. Push your limits at IRON BODY GYM.",
  keywords: [
    "gym",
    "fitness",
    "HIIT",
    "strength training",
    "Brooklyn",
    "personal training",
  ],
  openGraph: {
    title: "IRON BODY GYM | Premium Fitness Club",
    description: "Push your limits. Transform your body.",
    type: "website",
    url: siteUrl,
    siteName: "IRON BODY GYM",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRON BODY GYM | Premium Fitness Club",
    description: "Push your limits. Transform your body.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${bebas.variable} ${inter.variable}`}
    >
      <body>
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
