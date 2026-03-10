import { QuizApp } from "@/components/quiz/QuizApp";
import Link from "next/link";
import { Metadata } from "next";
import { results } from "@/data/quiz";

export async function generateMetadata({ searchParams }: { searchParams: { result?: string } }): Promise<Metadata> {
  const resultType = searchParams.result;
  const resultData = resultType && results[resultType as keyof typeof results];

  const ogTitle = resultData
    ? `診断結果：あなたは「${resultData.cardName}」が最適！`
    : "クレジットカード最適化診断 | あなたに最適な1枚を見つけよう";

  const ogImage = resultType ? `/api/og?result=${resultType}` : '/opengraph-image';

  return {
    title: ogTitle,
    openGraph: {
      title: ogTitle,
      images: [ogImage],
    },
    twitter: {
      title: ogTitle,
      images: [ogImage],
    }
  };
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 bg-slate-50 dark:bg-black font-sans selection:bg-primary/30">
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              5つの質問で30秒で完了
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              クレジットカード<br className="sm:hidden" />最適化診断
            </h1>
            <p className="max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-400">
              あなたのライフスタイルや決済額から、最もお得に使える「最強の一枚」を導き出します。
            </p>
          </div>

          <div className="w-full mt-12">
            <QuizApp />
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-slate-200 dark:border-slate-800 mt-20 py-8 px-6 text-center text-sm text-slate-500 dark:text-slate-500 space-y-3">
        <p>当サイトはアフィリエイトプログラムに参加しています。リンク経由で申し込みが行われた場合、運営者に報酬が支払われることがあります。</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          <Link href="/articles" className="hover:text-blue-600 transition-colors underline underline-offset-4">記事一覧</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors underline underline-offset-4">運営者情報</Link>
          <Link href="/privacy" className="hover:text-blue-600 transition-colors underline underline-offset-4">プライバシーポリシー</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors underline underline-offset-4">お問い合わせ</Link>
        </div>
        <p className="text-xs text-slate-400">※ 診断結果はあくまで参考情報です。お申し込み前に各カード会社の公式サイトで最新情報をご確認ください。</p>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} クレジットカード最適化診断</p>
      </footer>
    </div>
  );
}
