import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "クレジットカード最適化診断 | あなたに最適な1枚を見つけよう";
const siteDescription =
  "5つの質問に答えるだけで、あなたのライフスタイルに最適なクレジットカードが見つかる無料診断。還元率重視・ステータス重視・旅行特化型、それぞれの最強カードを提案します。";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "クレジットカード",
    "おすすめ",
    "診断",
    "還元率",
    "比較",
    "最適",
    "ポイント",
    "マイル",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "ja_JP",
    siteName: "クレジットカード最適化診断",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
