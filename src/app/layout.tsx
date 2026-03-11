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

const siteTitle = "【2024最新】クレジットカードおすすめ診断 | あなたに最強の1枚を";
const siteDescription =
  "「クレジットカード おすすめ」で迷っていませんか？5つの質問に答えるだけで、あなたのライフスタイルに最適な最強の1枚を無料診断。還元率・年会費・特典を徹底比較。";

export const metadata: Metadata = {
  metadataBase: new URL("https://credit-optimizer.jp"),
  title: {
    default: siteTitle,
    template: `%s | クレジットカード最適化診断`
  },
  description: siteDescription,
  keywords: [
    "クレジットカード",
    "おすすめ",
    "診断",
    "還元率",
    "比較",
    "最強",
    "ポイント",
    "節約",
    "マイル",
    "ポイ活"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "クレジットカード最適化診断",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@credit_optimizer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
