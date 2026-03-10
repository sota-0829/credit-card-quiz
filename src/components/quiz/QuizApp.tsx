"use client";

import { useState } from "react";
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
                // Calculate final results (ranked)
                const rankedTypes = Object.entries(newScores)
                    .sort(([, a], [, b]) => b - a)
                    .map(([type]) => type as ResultType);

                setResult(rankedTypes.map(type => results[type]));
            }
        }, 400); // 400ms delay to show the "checked" animation
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
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="w-full flex items-center justify-center min-h-[60vh]">
            {result ? (
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
