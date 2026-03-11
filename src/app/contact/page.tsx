import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'お問い合わせ',
    description: 'Credit Optimizerに関するご意見、ご要望、広告掲載などのご相談はこちらから。',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans">
            {/* Nav */}
            <header className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 z-50">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-[10px] text-white">C</div>
                        Credit Optimizer
                    </Link>
                    <Link href="/" className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        トップへ戻る
                    </Link>
                </div>
            </header>

            <main className="pt-32 pb-24 px-6 max-w-2xl mx-auto space-y-12 text-center">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">Contact</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">お問い合わせ・ご要望はこちら</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800 shadow-sm space-y-8">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        当サイトに関するご意見、ご質問、広告掲載のご相談などがございましたら、以下のメールアドレスまでお問い合わせください。
                    </p>

                    <div className="py-6 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex flex-col items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</span>
                        <a href="mailto:info@credit-card-quiz.example.com" className="text-xl md:text-2xl font-black text-blue-600 hover:underline">
                            info@credit-optimizer.jp
                        </a>
                        <p className="text-[10px] text-slate-400 mt-2">※ 通常3営業日以内に返信いたします</p>
                    </div>

                    <div className="space-y-4 text-left pt-6">
                        <h3 className="font-black text-slate-900 dark:text-white">よくあるお問い合わせ</h3>
                        <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-3">
                            <li>・診断アルゴリズムの仕組みについて</li>
                            <li>・記事情報の誤りの指摘</li>
                            <li>・提携、協業のご提案</li>
                        </ul>
                    </div>
                </div>

                <Link href="/" className="inline-block text-xs font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    診断に戻る
                </Link>
            </main>

            <footer className="w-full py-12 px-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <p>© {new Date().getFullYear()} Credit Optimizer Diagnosis</p>
            </footer>
        </div>
    );
}
