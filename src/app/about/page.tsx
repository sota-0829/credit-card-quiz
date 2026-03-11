import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '運営者情報',
    description: 'クレジットカード最適化診断「Credit Optimizer」の運営目的、専門性、中立性について紹介します。',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-blue-100 selection:text-blue-900">
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

            <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto space-y-12">
                <section className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                        About Us
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        「Credit Optimizer」は、溢れる情報の中からあなたに最適な「究極の1枚」を見つけ出すための、クレジットカード診断プラットフォームです。
                    </p>
                </section>

                <section className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white">運営の目的</h2>
                        <p>
                            現代社会においてクレジットカードは単なる決済手段ではなく、ライフスタイルを豊かにする重要なツールです。しかし、数百種類以上あるカードの中から自分に最適なものを選ぶのは容易ではありません。
                        </p>
                        <p>
                            私たちは、独自のアルゴリズムと最新の還元率データを活用し、誰もが客観的かつ簡単に最適なカードを見つけられる体験を提供することを目指しています。
                        </p>
                    </div>

                    <div className="space-y-4 border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-2xl">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white">専門性と中立性</h2>
                        <p>
                            当サイトの診断結果は、アフィリエイト報酬の高さのみを優先するのではなく、各カードのスペック、還元率、ユーザーレビューを総合的に分析した結果に基づいています。ユーザーの皆様の利益を第一に考え、透明性の高い情報発信を心がけています。
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white">運営体制</h2>
                        <p>
                            クレジット・最適化プロジェクトチームによって運営されています。金融、テクノロジー、UI/UXデザインの専門知識を組み合わせ、日々情報の更新とツールの改善を行っています。
                        </p>
                    </div>
                </section>

                <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
                    <Link href="/" className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black transition-transform hover:scale-105 shadow-xl">
                        診断を試してみる
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </main>

            <footer className="w-full py-12 px-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <p>© {new Date().getFullYear()} Credit Optimizer Diagnosis</p>
            </footer>
        </div>
    );
}
