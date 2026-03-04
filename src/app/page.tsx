import { QuizApp } from "@/components/quiz/QuizApp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 bg-slate-50 dark:bg-black font-sans selection:bg-primary/30">
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <div className="w-full max-w-4xl max-auto space-y-8">
          <div className="space-y-4 transition-all duration-700">
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

      <footer className="w-full border-t border-slate-200 dark:border-slate-800 mt-20 p-6 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Credit Card Diagnosis. All rights reserved.</p>
      </footer>
    </div>
  );
}
