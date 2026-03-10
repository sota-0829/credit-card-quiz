import { articles } from "@/data/articles";
import Link from "next/link";

export default function ArticlesIndexPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans">
            <header className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        トップに戻る
                    </Link>
                    <h1 className="text-lg font-black text-slate-900 dark:text-white">カード解説記事一覧</h1>
                </div>
            </header>

            <main className="max-w-4xl mx-auto py-16 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] font-bold rounded-full uppercase tracking-widest mb-4">
                                {article.category}
                            </span>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-6">
                                {article.description}
                            </p>
                            <div className="flex items-center text-blue-600 dark:text-blue-400 text-xs font-bold">
                                記事を読む
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Placeholder for missing articles to show "Coming Soon" or similar if needed for SEO */}
                <div className="mt-12 p-8 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
                    <p className="text-slate-400 text-sm italic">他のカードの解説記事も順次追加予定です。</p>
                </div>
            </main>

            <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-12 px-6 text-center text-sm text-slate-500 mt-auto">
                <p>© {new Date().getFullYear()} クレジットカード最適化診断</p>
            </footer>
        </div>
    );
}
