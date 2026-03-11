import { articles } from "@/data/articles";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'クレジットカード徹底解説 | ナレッジベース',
    description: '各クレジットカードのスペック、還元率、メリット・デメリットを専門チームが徹底比較・解説。',
    alternates: {
        canonical: '/articles',
    },
};

export default function ArticlesIndexPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 z-50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-[10px] text-white">C</div>
                        Credit Optimizer
                    </Link>
                    <nav className="flex items-center gap-6">
                        <Link href="/" className="text-xs font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Diagnosis
                        </Link>
                        <Link href="/articles" className="text-xs font-bold text-blue-600">
                            Knowledge Base
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-16">
                {/* Hero */}
                <div className="space-y-6 text-center md:text-left max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                        クレジットカード徹底解説
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        専門チームがスペック、還元率、実際の使い勝手まで徹底検証。あなたに最適な一枚を見つけるためのガイド。
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="group block bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black rounded-full uppercase tracking-widest">
                                        {article.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        {article.rating}
                                    </div>
                                </div>
                                <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-3 leading-relaxed">
                                    {article.description}
                                </p>
                                <div className="pt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Read Article</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Newsletter/CTA */}
                <div className="bg-slate-900 dark:bg-blue-600 rounded-[3rem] p-12 text-center space-y-6 relative overflow-hidden group shadow-2xl mt-12">
                    <div className="relative z-10 space-y-4">
                        <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                            自分に最適な「究極の1枚」を<br />30秒で見つけませんか？
                        </h3>
                        <p className="text-white/60 text-sm max-w-md mx-auto">
                            最新の還元率データとあなたのライフスタイルを照らし合わせ、最も得をするカードをAIが診断。
                        </p>
                        <div className="pt-6">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform"
                            >
                                診断を始める
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14m-7-7 7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors"></div>
                </div>
            </main>

            <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 py-12 px-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                <p>© {new Date().getFullYear()} Credit Optimizer Platform</p>
            </footer>
        </div>
    );
}
