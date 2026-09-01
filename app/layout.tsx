import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_SC({ variable: "--font-noto", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: { default: "AI Side Hustle Lab", template: "%s | AI Side Hustle Lab" },
  description: "AI project guides, seven-day action plans, and delivery templates. US Lifetime Pro is $5.99 through September 25, then $39.99; annual Pro is $29.99/year; no income promises.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "AI Side Hustle Lab",
    description: "Start free and turn one idea into a practical seven-day route; US Lifetime Pro is $5.99 through September 25, then $39.99.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AI Side Hustle Lab" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={noto.variable}>{children}</body></html>;
}
