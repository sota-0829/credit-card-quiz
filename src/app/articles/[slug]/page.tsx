import { articles } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans">
            <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        診断ページに戻る
                    </Link>
                </div>
            </header>

            <main className="pt-32 pb-24 px-6">
                <article className="max-w-3xl mx-auto">
                    <div className="space-y-4 mb-12 text-center">
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            {article.title}
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            最終更新日: {article.updatedAt}
                        </p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        {/* 手動でMarkdown風のパースを行うか、単純にdangerouslySetInnerHTMLを使用（簡易版） */}
                        <div className="whitespace-pre-wrap leading-relaxed text-slate-700 dark:text-slate-300">
                            {article.content.trim().split('\n').map((line, i) => {
                                if (line.startsWith('## ')) {
                                    return <h2 key={i} className="text-2xl font-bold mt-12 mb-6 border-b pb-2 text-slate-900 dark:text-white">{line.replace('## ', '')}</h2>;
                                }
                                if (line.startsWith('### ')) {
                                    return <h3 key={i} className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">{line.replace('### ', '')}</h3>;
                                }
                                if (line.startsWith('- ')) {
                                    return <li key={i} className="ml-4 mb-2">{line.replace('- ', '')}</li>;
                                }
                                if (line.trim() === '') return <br key={i} />;

                                // Bold parsing
                                const parts = line.split(/(\*\*.*?\*\*)/g);
                                return (
                                    <p key={i} className="mb-4">
                                        {parts.map((part, j) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={j} className="text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        })}
                                    </p>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                        >
                            自分に最適なカードを診断する
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </Link>
                    </div>
                </article>
            </main>

            <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-12 px-6 text-center text-sm text-slate-500">
                <p>© {new Date().getFullYear()} クレジットカード最適化診断</p>
            </footer>
        </div>
    );
}
