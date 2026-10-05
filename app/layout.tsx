import type { Metadata } from "next";
import "./globals.css";

const appStoreUrl = "https://apps.apple.com/us/app/ai-side-hustle-lab/id6803422848?pt=128677255&ct=site_home_ai_q4_2026&mt=8";

export const metadata: Metadata = {
  title: { default: "AI Side Hustle Lab", template: "%s | AI Side Hustle Lab" },
  description: "AI project guides, seven-day action plans, and delivery templates. US Pro is $29.99/year or $39.99 one-time; no income promises.",
  other: { "apple-itunes-app": "app-id=6803422848, ct=site_home_ai_q4_2026, pt=128677255, mt=8" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "AI Side Hustle Lab",
    description: "Start free and turn one idea into a practical seven-day route; US Pro is $29.99/year or $39.99 one-time.",
    url: "https://wanglei13975.github.io/ai-fuye-lab-site/",
    siteName: "AI Side Hustle Lab",
    images: [{ url: "https://wanglei13975.github.io/ai-fuye-lab-site/og.png", width: 1200, height: 630, alt: "AI Side Hustle Lab" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Side Hustle Lab",
    description: "Start free; US Pro is $29.99/year or $39.99 one-time.",
    images: ["https://wanglei13975.github.io/ai-fuye-lab-site/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<div className="mobilePurchaseBar" aria-label="Pro purchase information"><span><strong>Lifetime Pro $39.99</strong><small>one-time · Annual $29.99/year</small></span><a href={appStoreUrl} target="_blank" rel="noreferrer">Get the app <span aria-hidden="true">↗</span></a></div><script defer src="/campaign-link.js" /></body></html>;
}
