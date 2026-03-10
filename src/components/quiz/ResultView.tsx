"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ResultData, ResultType } from "@/data/quiz";
import { cn } from "@/lib/utils";

const typeConfig: Record<ResultType, { color: string; bgClass: string; iconPath: React.ReactNode }> = {
    REWARD: {
        color: "text-amber-600 dark:text-amber-500",
        bgClass: "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/40 dark:to-orange-900/40",
        iconPath: <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    },
    STATUS: {
        color: "text-slate-800 dark:text-slate-200",
        bgClass: "bg-gradient-to-br from-slate-100 to-zinc-200 dark:from-slate-900 dark:to-zinc-800",
        iconPath: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    },
    TRAVEL: {
        color: "text-blue-600 dark:text-blue-500",
        bgClass: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/40 dark:to-indigo-900/40",
        iconPath: <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5.3-2.9 2.9c-1 1-2.2 1.2-3.6 1.1L2 17l4.6 4.6.6.6c.1 1.4-.1 2.6-1.1 3.6l2.9-2.9L16 21l1.2.8c.4.2.7-.2.6-.6Z" />
    },
    CONVENIENCE: {
        color: "text-emerald-600 dark:text-emerald-500",
        bgClass: "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/40 dark:to-teal-900/40",
        iconPath: <><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></>
    },
    AMAZON: {
        color: "text-rose-600 dark:text-rose-500",
        bgClass: "bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-950/40 dark:to-pink-900/40",
        iconPath: <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>
    },
    PAYPAY: {
        color: "text-red-500 dark:text-red-400",
        bgClass: "bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950/40 dark:to-rose-900/40",
        iconPath: <><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></>
    }
};

interface ResultViewProps {
    results: ResultData[];
    onReset: () => void;
}

export function ResultView({ results, onReset }: ResultViewProps) {
    useEffect(() => {
        // Load A8.net base script if we have any adScripts
        if (results.some(r => r.adScript)) {
            const script = document.createElement("script");
            script.src = "https://ad-verification.a8.net/ad/js/brandsafe.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [results]);

    useEffect(() => {
        // Evaluate embedded brand safe scripts
        results.forEach(r => {
            if (r.adScript && typeof window !== 'undefined') {
                const checkAndRun = setInterval(() => {
                    // @ts-ignore
                    if (window.brandsafe_js_async) {
                        clearInterval(checkAndRun);
                        // @ts-ignore
                        window.brandsafe_js_async(
                            '//ad-verification.a8.net/ad',
                            `_site=${r.adScript!.site}&_article=${r.adScript!.article}&_link=${r.adScript!.link}&_image=${r.adScript!.image}&_ns=${r.adScript!.ns}&sad=${r.adScript!.sad}`,
                            r.adScript!.code1,
                            r.adScript!.code2
                        );
                    }
                }, 100);
                setTimeout(() => clearInterval(checkAndRun), 5000); // give up after 5s
            }
        });
    }, [results]);

    if (!results || results.length === 0) return null;

    const primary = results[0];
    const secondaryList = results.slice(1, 3);
    const { color, bgClass, iconPath } = typeConfig[primary.type];

    return (
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 pb-24 transition-all duration-700">
            {/* Primary Result */}
            <div className={cn("rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-all mb-12", bgClass)}>
                <div className="absolute -top-24 -right-24 opacity-10 animate-[spin_50s_linear_infinite]">
                    <svg className="w-96 h-96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {iconPath}
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-white/80 dark:bg-black/30 shadow-lg backdrop-blur-sm transition-all duration-500">
                        <svg className={cn("w-10 h-10", color)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {iconPath}
                        </svg>
                    </div>

                    <span className={cn("text-sm font-bold tracking-widest uppercase mb-3 transition-opacity duration-500", color)}>
                        {primary.title}
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white leading-tight transition-all duration-500">
                        あなたの最適解は<br />
                        <span className={cn("block mt-2", color)}>{primary.cardName}</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed transition-opacity duration-500">
                        {primary.description}
                    </p>

                    <div className="w-full max-w-md bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-2xl p-6 mb-10 text-left shadow-inner border border-white/20 dark:border-white/10 transition-all duration-500">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            </svg>
                            選ばれた3つの理由
                        </h3>
                        <ul className="space-y-3">
                            {primary.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-emerald-500 mr-2 font-bold select-none">✓</span>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col w-full max-w-md transition-all duration-500 items-center">
                        {primary.campaignText && (
                            <div className="mb-3 px-4 py-2 bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 rounded-full font-bold text-sm border border-red-200 dark:border-red-800 animate-pulse">
                                {primary.campaignText}
                            </div>
                        )}
                        <a
                            href={primary.affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full group relative flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-8 py-5 text-white dark:text-slate-900 font-bold transition-all hover:scale-105 hover:shadow-xl overflow-hidden shadow-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            <span className="text-lg">公式サイトで詳細を見る</span>
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>

                        <p className="text-xs text-slate-500 mt-3">※ 上記は広告リンクです</p>

                        {primary.adScript && (
                            <div id={primary.adScript.id} className="hidden" />
                        )}
                        {primary.adPixel && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={primary.adPixel} width="1" height="1" alt="" className="hidden" />
                        )}

                        <Link
                            href={
                                primary.type === 'REWARD' || primary.type === 'TRAVEL'
                                    ? '/articles/rakuten-premium-card-review'
                                    : primary.type === 'STATUS'
                                        ? '/articles/epos-card-travel-insurance'
                                        : primary.type === 'CONVENIENCE'
                                            ? '/articles/smbc-card-nl-review'
                                            : primary.type === 'AMAZON'
                                                ? '/articles/jcb-card-w-review'
                                                : primary.type === 'PAYPAY'
                                                    ? '/articles/paypay-card-review'
                                                    : '#'
                            }
                            className="mt-6 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors underline underline-offset-4"
                        >
                            このカードの徹底解説記事を読む
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sub Recommendations */}
            {secondaryList.length > 0 && (
                <div className="w-full max-w-3xl mx-auto space-y-6 mb-12">
                    <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-6 flex items-center justify-center gap-2">
                        <svg className="w-6 h-6 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                        僅差でこちらのカードもおすすめです
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {secondaryList.map((subResult, index) => {
                            const subConfig = typeConfig[subResult.type];
                            return (
                                <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800", subConfig.color)}>
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {subConfig.iconPath}
                                            </svg>
                                        </div>
                                        <div>
                                            <span className={cn("text-xs font-bold uppercase", subConfig.color)}>{subResult.title}</span>
                                            <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{subResult.cardName}</h4>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                        {subResult.description.substring(0, 80)}...
                                    </p>
                                    <a
                                        href={subResult.affiliateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center block py-3 px-4 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
                                    >
                                        詳細を見る
                                    </a>

                                    <Link
                                        href={
                                            subResult.type === 'REWARD' || subResult.type === 'TRAVEL'
                                                ? '/articles/rakuten-premium-card-review'
                                                : subResult.type === 'STATUS'
                                                    ? '/articles/epos-card-travel-insurance'
                                                    : subResult.type === 'CONVENIENCE'
                                                        ? '/articles/smbc-card-nl-review'
                                                        : subResult.type === 'AMAZON'
                                                            ? '/articles/jcb-card-w-review'
                                                            : subResult.type === 'PAYPAY'
                                                                ? '/articles/paypay-card-review'
                                                                : '#'
                                        }
                                        className="mt-4 text-center text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        解説を読む
                                    </Link>

                                    {subResult.adScript && (
                                        <div id={subResult.adScript.id} className="hidden" />
                                    )}
                                    {subResult.adPixel && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={subResult.adPixel} width="1" height="1" alt="" className="hidden" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Comparison Table Section */}
            <div className="w-full max-w-4xl mx-auto mt-16 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-center mb-8">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
                        スペックを一括比較
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        あなたに特におすすめのカードを並べて比較しました
                    </p>
                </div>

                <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                    <table className="w-full border-collapse min-w-[600px] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50">
                                <th className="p-6 text-left text-[10px] font-black uppercase tracking-widest text-slate-400 w-1/4">比較項目</th>
                                <th className="p-6 text-center w-1/3">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="px-2 py-0.5 bg-blue-600 text-white text-[8px] font-black rounded-full uppercase">1位: {primary.cardName}</span>
                                    </div>
                                </th>
                                {secondaryList.map((res, i) => (
                                    <th key={res.type} className="p-6 text-center w-1/3 border-l border-slate-100 dark:border-slate-800">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[8px] font-black rounded-full uppercase">{i + 2}位: {res.cardName}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-t border-slate-100 dark:border-slate-800">
                                <td className="p-6 font-bold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/20">年会費</td>
                                <td className="p-6 text-center font-black text-slate-900 dark:text-white">{primary.specs.annualFee}</td>
                                {secondaryList.map(res => (
                                    <td key={res.type} className="p-6 text-center font-bold text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">{res.specs.annualFee}</td>
                                ))}
                            </tr>
                            <tr className="border-t border-slate-100 dark:border-slate-800">
                                <td className="p-6 font-bold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/20">還元率</td>
                                <td className="p-6 text-center font-black text-blue-600 dark:text-blue-400">{primary.specs.rewardRate}</td>
                                {secondaryList.map(res => (
                                    <td key={res.type} className="p-6 text-center font-bold text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">{res.specs.rewardRate}</td>
                                ))}
                            </tr>
                            <tr className="border-t border-slate-100 dark:border-slate-800">
                                <td className="p-6 font-bold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/20">ブランド</td>
                                <td className="p-6 text-center font-black text-slate-900 dark:text-white">
                                    <div className="flex flex-wrap justify-center gap-1">
                                        {primary.specs.brands.map(b => (
                                            <span key={b} className="text-[10px] px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 leading-none">{b}</span>
                                        ))}
                                    </div>
                                </td>
                                {secondaryList.map(res => (
                                    <td key={res.type} className="p-6 text-center border-l border-slate-100 dark:border-slate-800">
                                        <div className="flex flex-wrap justify-center gap-1">
                                            {res.specs.brands.map(b => (
                                                <span key={b} className="text-[10px] px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 leading-none opacity-80">{b}</span>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-t border-slate-100 dark:border-slate-800">
                                <td className="p-6 font-bold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/20">付帯保険</td>
                                <td className="p-6 text-center font-black text-slate-900 dark:text-white">{primary.specs.insurance}</td>
                                {secondaryList.map(res => (
                                    <td key={res.type} className="p-6 text-center font-bold text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">{res.specs.insurance}</td>
                                ))}
                            </tr>
                            <tr className="border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/10">
                                <td className="p-6"></td>
                                <td className="p-6 text-center">
                                    <a
                                        href={primary.affiliateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block py-3 px-6 rounded-xl bg-blue-600 text-white font-black text-[13px] hover:scale-105 transition-transform shadow-md"
                                    >
                                        申し込む
                                    </a>
                                </td>
                                {secondaryList.map(res => (
                                    <td key={res.type} className="p-6 text-center border-l border-slate-100 dark:border-slate-800">
                                        <a
                                            href={res.affiliateLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block py-3 px-6 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-black text-[11px] hover:scale-105 transition-transform"
                                        >
                                            詳細へ
                                        </a>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bonus Monetization: DMM FX Sponsor Banner */}
            <div className="w-full max-w-3xl mx-auto mt-12 mb-8 animate-in fade-in duration-1000 delay-500">
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-red-500 text-white text-xs font-black px-4 py-1 rounded-full shadow-md z-10 whitespace-nowrap">
                        SPONSORED
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-[14px] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 relative z-0">
                        <div className="relative shrink-0 w-[165px] h-[120px] rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
                            <a href="https://px.a8.net/svt/ejp?a8mat=4AZ8K8+1PX3OY+1WP2+6F9M9" rel="nofollow" target="_blank">
                                <img width="165" height="120" alt="" src="https://www27.a8.net/svt/bgt?aid=260304920104&wid=001&eno=01&mid=s00000008903001079000&mc=1" className="w-full h-full object-cover" />
                            </a>
                            <img width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AZ8K8+1PX3OY+1WP2+6F9M9" alt="" className="hidden" />
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
                                クレカを作ったら、次は「投資デビュー」しませんか？
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                DMM FXなら初心者でも最短1時間で取引スタート！キャッシュバックキャンペーンも実施中。審査待ちの今のうちにチェック👇
                            </p>
                            <a
                                href="https://px.a8.net/svt/ejp?a8mat=4AZ8K8+1PX3OY+1WP2+6F9M9"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-block bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all active:scale-95 text-sm"
                            >
                                キャンペーンの詳細を見る
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bonus Monetization 2: GMO / Onamae.com */}
            <div className="w-full max-w-3xl mx-auto mt-6 mb-8 animate-in fade-in duration-1000 delay-700">
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 hover:shadow-xl transition-all hover:scale-[1.02]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-black px-4 py-1 rounded-full shadow-md z-10 whitespace-nowrap">
                        SPONSORED
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-[14px] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 relative z-0">
                        <div className="relative shrink-0 w-[120px] rounded-xl overflow-hidden shadow-inner flex justify-center bg-white border border-slate-100 dark:border-slate-800">
                            <a href="https://px.a8.net/svt/ejp?a8mat=4AZ8K8+1R3YWI+50+2HGLCX" rel="nofollow" target="_blank" className="block w-full max-h-[160px] overflow-hidden">
                                <img width="120" height="600" alt="" src="https://www21.a8.net/svt/bgt?aid=260304920106&wid=001&eno=01&mid=s00000000018015026000&mc=1" className="w-full object-cover object-top" />
                            </a>
                            <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AZ8K8+1R3YWI+50+2HGLCX" alt="" className="hidden" />
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
                                お得な体験を「ブログで発信」しませんか？
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                国内シェアNo.1の「お名前.com」。たった数分で独自ドメインが取得でき、すぐに副業ブログを開設できます！まずは空きをチェック👇
                            </p>
                            <a
                                href="https://px.a8.net/svt/ejp?a8mat=4AZ8K8+1R3YWI+50+2HGLCX"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all active:scale-95 text-sm"
                            >
                                \ 1円〜！/ ドメインを探す
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* SNS Share & Reset */}
            <div className="flex flex-col items-center gap-4 mt-8">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">診断結果をシェアする</p>
                <div className="flex gap-3">
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`クレジットカード診断の結果、私の最適解は「${primary.cardName}」でした！\nあなたも試してみて👇`)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white font-bold text-sm hover:bg-neutral-800 transition-all hover:scale-105 shadow"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zM17.083 20.25l-10.875-14.5H4.56l10.915 14.5h2.607z" /></svg>
                        X でシェア
                    </a>
                    <a
                        href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(`クレジットカード診断の結果、私の最適解は「${primary.cardName}」でした！`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#06C755] text-white font-bold text-sm hover:bg-green-600 transition-all hover:scale-105 shadow"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.522 10.087c0-4.524-4.535-8.203-10.107-8.203-5.575 0-10.109 3.679-10.109 8.203 0 4.054 3.595 7.449 8.452 8.097.329.07.776.217.889.499.102.256.067.657.033.916l-.144.862c-.044.256-.203.999.876.545 1.08-.455 5.824-3.43 7.946-5.874 1.466-1.608 2.164-3.24 2.164-5.045z" /></svg>
                        LINE でシェア
                    </a>
                </div>
                <button
                    onClick={onReset}
                    className="mt-2 px-8 py-3 rounded-xl font-bold border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-all hover:scale-105 text-sm"
                >
                    最初から診断をやり直す
                </button>
            </div>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 flex justify-center z-50 animate-in slide-in-from-bottom-24 duration-700 md:hidden block shadow-2xl">
                <a
                    href={primary.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-sm relative flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-white font-bold transition-all active:scale-95 shadow-lg overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                    【最適解】を公式サイトで見る
                </a>
            </div>
        </div>
    );
}
