import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_SC({ variable: "--font-noto", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: { default: "AI副业实验室", template: "%s｜AI副业实验室" },
  description: "AI 项目落地指南、7 天行动计划与交付模板。提供方法与风险提示，不承诺收入结果。",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "AI副业实验室",
    description: "把想法变成可执行的 7 天路线",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AI副业实验室" }],
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={noto.variable}>{children}</body></html>;
}
