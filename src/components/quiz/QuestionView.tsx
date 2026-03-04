"use client";

import { Option } from "@/data/quiz";
import { cn } from "@/lib/utils";

interface QuestionViewProps {
    questionNumber: number;
    totalQuestions: number;
    title: string;
    options: Option[];
    onSelect: (option: Option) => void;
    selectedOption: Option | null;
}

export function QuestionView({
    questionNumber,
    totalQuestions,
    title,
    options,
    onSelect,
    selectedOption,
}: QuestionViewProps) {
    return (
        <div className="w-full max-w-2xl mx-auto p-6 transition-all duration-500">
            <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Question {questionNumber} of {totalQuestions}
                </span>
                <div className="h-2 flex-1 mx-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-600 transition-all duration-500 ease-out"
                        style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
                    />
                </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                {title}
            </h2>

            <div className="space-y-4">
                {options.map((option, index) => {
                    const isSelected = selectedOption === option;

                    return (
                        <button
                            key={index}
                            onClick={() => onSelect(option)}
                            className={cn(
                                "w-full text-left p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden group",
                                isSelected
                                    ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transform scale-[1.02]"
                                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:bg-slate-50/50 dark:hover:bg-slate-800/80 hover:-translate-y-1"
                            )}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center justify-between">
                                <span
                                    className={cn(
                                        "text-lg font-bold transition-all duration-300",
                                        isSelected
                                            ? "text-blue-700 dark:text-blue-300 translate-x-2"
                                            : "text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1"
                                    )}
                                >
                                    {option.text}
                                </span>

                                {isSelected && (
                                    <div className="text-blue-600 dark:text-blue-400 transform transition-transform duration-300 scale-100 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
