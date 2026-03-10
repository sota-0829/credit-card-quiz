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

    // Helper to render stars
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        return (
            <div className="flex items-center gap-1 text-amber-400">
                {[...Array(fullStars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
                {hasHalfStar && (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                )}
                <span className="ml-2 text-slate-500 dark:text-slate-400 font-bold">{rating} / 5.0</span>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Nav */}
            <header className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 z-50">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/articles" className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        記事一覧
                    </Link>
                    <div className="hidden md:block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        Expert Review: {article.category}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="flex-1 space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-tighter">
                                    {article.category}
                                </span>
                                {renderStars(article.rating)}
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                                {article.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                                {article.description}
                            </p>
                        </div>
                        <div className="w-full md:w-80 shrink-0">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-slate-200 dark:ring-white/10"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 pt-4 text-xs font-bold text-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600"></div>
                            <span>Credit Optimizer Team</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                        <span>Updated: {article.updatedAt}</span>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto pt-16 pb-32 px-6 flex flex-col lg:flex-row gap-12">
                {/* Content */}
                <div className="flex-1 space-y-12">
                    {/* Pros & Cons Card */}
                    <div className="grid md:grid-cols-2 gap-6 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800 shadow-sm">
                        <div className="space-y-4">
                            <h3 className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-black text-sm uppercase">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                メリット
                            </h3>
                            <ul className="space-y-3">
                                {article.pros.map((pro, i) => (
                                    <li key={i} className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                        {pro}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-black text-sm uppercase">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                                デメリット
                            </h3>
                            <ul className="space-y-3">
                                {article.cons.map((con, i) => (
                                    <li key={i} className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></div>
                                        {con}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <div className="whitespace-pre-wrap leading-relaxed text-slate-700 dark:text-slate-300">
                            {article.content.trim().split('\n').map((line, i) => {
                                if (line.startsWith('## ')) {
                                    return <h2 key={i} className="text-2xl md:text-3xl font-black mt-16 mb-8 text-slate-900 dark:text-white tracking-tight">{line.replace('## ', '')}</h2>;
                                }
                                if (line.startsWith('### ')) {
                                    return <h3 key={i} className="text-xl font-black mt-10 mb-6 text-slate-900 dark:text-white">{line.replace('### ', '')}</h3>;
                                }
                                if (line.trim() === '') return <div key={i} className="h-4" />;

                                const parts = line.split(/(\*\*.*?\*\*)/g);
                                return (
                                    <p key={i} className="mb-6 text-lg/relaxed md:text-xl/relaxed">
                                        {parts.map((part, j) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={j} className="text-slate-900 dark:text-white font-black">{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        })}
                                    </p>
                                );
                            })}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="mt-20 p-10 bg-slate-900 dark:bg-blue-600 rounded-[3rem] text-center space-y-6 shadow-2xl overflow-hidden relative group">
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl md:text-3xl font-black text-white">このカードをお得に申し込む</h3>
                            <p className="text-slate-400 dark:text-white/80 text-sm max-w-md mx-auto">公式サイトへ移動して、現在のキャンペーンを確認しましょう。</p>
                            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href={article.affiliateUrl}
                                    target="_blank"
                                    className="w-full sm:w-auto bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-transform hover:scale-105 shadow-xl"
                                >
                                    公式サイトで詳細を見る
                                </a>
                                <Link
                                    href="/"
                                    className="w-full sm:w-auto text-white flex items-center justify-center gap-2 font-black text-lg hover:underline underline-offset-8"
                                >
                                    もう一度診断する
                                </Link>
                            </div>
                        </div>
                        {/* Decorative Gradient */}
                        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-600/30 blur-[120px] rounded-full group-hover:bg-blue-400/40 transition-colors duration-1000"></div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:w-80 shrink-0">
                    <div className="sticky top-28 space-y-8">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800 space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Other Cards</h4>
                            <div className="space-y-4">
                                {articles.filter(a => a.slug !== article.slug).slice(0, 3).map((item) => (
                                    <Link key={item.slug} href={`/articles/${item.slug}`} className="group block space-y-2">
                                        <h5 className="text-sm font-black text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {item.title}
                                        </h5>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] uppercase font-bold text-slate-400">{item.category}</span>
                                            <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                                            <span className="text-[10px] font-bold text-slate-400">{item.rating}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <Link href="/articles" className="block w-full py-3 text-center text-xs font-black text-blue-600 border border-blue-100 dark:border-blue-900/50 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                記事一覧を見る
                            </Link>
                        </div>

                        {/* Social/Bio */}
                        <div className="p-6 text-center space-y-4">
                            <p className="text-xs text-slate-400 font-medium">当サイトはアフィリエイト報酬により運営されており、中立かつ公平な視点で専門チームが情報を精査しています。</p>
                        </div>
                    </div>
                </aside>
            </main>

            <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-12 px-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <p>© {new Date().getFullYear()} Credit Optimizer Diagnosis</p>
            </footer>
        </div>
    );
}
