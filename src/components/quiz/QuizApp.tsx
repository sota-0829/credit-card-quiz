"use client";

import { useState, useEffect } from "react";
import { Option, Question, questions, results, ResultData, ResultType } from "@/data/quiz";
import { QuestionView } from "./QuestionView";
import { ResultView } from "./ResultView";

export function QuizApp() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState({
        REWARD: 0,
        STATUS: 0,
        TRAVEL: 0,
        CONVENIENCE: 0,
        AMAZON: 0,
        PAYPAY: 0
    });
    const [history, setHistory] = useState<{ index: number; scores: typeof scores }[]>([]);
    const [result, setResult] = useState<ResultData[] | null>(null);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const initialResult = params.get('result') as ResultType;
        if (initialResult && results[initialResult]) {
            const rankedTypes = [initialResult, ...Object.keys(results).filter(t => t !== initialResult)] as ResultType[];
            setResult(rankedTypes.map(type => results[type]));
        }
    }, []);

    const handleSelectOption = (option: Option) => {
        setSelectedOption(option);

        // Briefly show selection, then advance
        setTimeout(() => {
            // Store current state in history before updating
            setHistory([...history, { index: currentQuestionIndex, scores: { ...scores } }]);

            // Accumulate score
            const newScores = {
                REWARD: scores.REWARD + option.points.REWARD,
                STATUS: scores.STATUS + option.points.STATUS,
                TRAVEL: scores.TRAVEL + option.points.TRAVEL,
                CONVENIENCE: scores.CONVENIENCE + option.points.CONVENIENCE,
                AMAZON: scores.AMAZON + option.points.AMAZON,
                PAYPAY: scores.PAYPAY + option.points.PAYPAY,
            };
            setScores(newScores);

            const nextIndex = currentQuestionIndex + 1;

            if (nextIndex < questions.length) {
                setCurrentQuestionIndex(nextIndex);
                setSelectedOption(null);
            } else {
                // Trigger calculation animation
                setIsCalculating(true);

                // Calculate final results (ranked)
                const rankedTypes = Object.entries(newScores)
                    .sort(([, a], [, b]) => b - a)
                    .map(([type]) => type as ResultType);

                // Simulate "valuable" processing time
                setTimeout(() => {
                    setResult(rankedTypes.map(type => results[type]));
                    setIsCalculating(false);
                }, 2500);
            }
        }, 400);
    };

    const handleBack = () => {
        if (history.length === 0) return;

        const previousState = history[history.length - 1];
        setCurrentQuestionIndex(previousState.index);
        setScores(previousState.scores);
        setHistory(history.slice(0, -1));
        setSelectedOption(null);
    };

    const handleReset = () => {
        setCurrentQuestionIndex(0);
        setScores({
            REWARD: 0,
            STATUS: 0,
            TRAVEL: 0,
            CONVENIENCE: 0,
            AMAZON: 0,
            PAYPAY: 0
        });
        setHistory([]);
        setResult(null);
        setSelectedOption(null);

        // Clear result param from URL
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.delete('result');
            window.history.pushState({}, '', url.toString());
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="w-full flex items-center justify-center min-h-[60vh]">
            {isCalculating ? (
                <div className="flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-500">
                    <div className="relative w-24 h-24">
                        <div className="absolute inset-0 border-4 border-blue-100 dark:border-blue-900/30 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-10 h-10 text-blue-600 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">診断結果を詳しく計算中...</h2>
                        <div className="flex flex-col items-center space-y-1">
                            <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse text-sm">あなたのライフスタイルに最適なカードを分析しています</p>
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : result ? (
                <ResultView results={result} onReset={handleReset} />
            ) : (
                <QuestionView
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={questions.length}
                    title={currentQuestion.title}
                    options={currentQuestion.options}
                    onSelect={handleSelectOption}
                    onBack={handleBack}
                    selectedOption={selectedOption}
                />
            )}
        </div>
    );
}
