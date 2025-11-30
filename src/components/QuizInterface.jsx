import React, { useState, useEffect } from 'react';
import { Check, X, Bookmark, ArrowRight, RefreshCw } from 'lucide-react';

const QuizInterface = ({ questions, onComplete, onExit, toggleBookmark, bookmarks }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    useEffect(() => {
        // Shuffle questions on mount
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffled);
    }, [questions]);

    const currentQuestion = shuffledQuestions[currentIndex];
    const isBookmarked = currentQuestion && bookmarks.includes(currentQuestion.id);

    const handleOptionClick = (option) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);

        if (option === currentQuestion.correctAnswer) {
            setScore(s => s + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < shuffledQuestions.length - 1) {
            setCurrentIndex(c => c + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            onComplete(score, shuffledQuestions.length);
        }
    };

    if (!currentQuestion) return <div className="p-8 text-center">Loading quiz...</div>;

    // Skip matching questions for now if not implemented
    if (currentQuestion.type === 'matching') {
        // Auto-skip or handle differently. For now, let's just show a placeholder or skip.
        // Better: Filter them out in the parent or handle them.
        // I'll just render a "Not supported" message and auto-advance for this MVP if encountered,
        // but ideally I should have filtered them.
        // Let's just implement a simple view for them: "Self Check"
        return (
            <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Matching Question (Self Check)</h3>
                <p className="mb-4">{currentQuestion.question}</p>
                <div className="grid grid-cols-1 gap-2 mb-6">
                    {currentQuestion.pairs.map((pair, idx) => (
                        <div key={idx} className="p-3 border rounded bg-gray-50 dark:bg-gray-700">
                            <strong>{pair.term}</strong>: {pair.definition}
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="w-full py-3 bg-blue-600 text-white rounded-lg">Next</button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="text-sm font-medium text-gray-500">
                    Question {currentIndex + 1} of {shuffledQuestions.length}
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => toggleBookmark(currentQuestion.id)}
                        className={`p-2 rounded-full transition-colors ${isBookmarked ? 'bg-yellow-100 text-yellow-600' : 'hover:bg-gray-100 text-gray-400'}`}
                    >
                        <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
                    </button>
                    <button onClick={onExit} className="text-gray-500 hover:text-red-500">
                        Exit
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex) / shuffledQuestions.length) * 100}%` }}
                />
            </div>

            {/* Question Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4 uppercase tracking-wide">
                    {currentQuestion.type === 'scenario' ? 'Scenario' : 'Multiple Choice'}
                </span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
                    {currentQuestion.question}
                </h3>

                <div className="space-y-3">
                    {currentQuestion.options.map((option, idx) => {
                        let buttonStyle = "border-gray-200 hover:border-blue-500 hover:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-700";
                        let icon = null;

                        if (isAnswered) {
                            if (option === currentQuestion.correctAnswer) {
                                buttonStyle = "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400";
                                icon = <Check size={20} />;
                            } else if (option === selectedOption) {
                                buttonStyle = "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400";
                                icon = <X size={20} />;
                            } else {
                                buttonStyle = "border-gray-200 opacity-50";
                            }
                        } else if (selectedOption === option) {
                            buttonStyle = "border-blue-500 bg-blue-50";
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleOptionClick(option)}
                                disabled={isAnswered}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all flex justify-between items-center ${buttonStyle}`}
                            >
                                <span>{option}</span>
                                {icon}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Feedback & Next */}
            {isAnswered && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className={`p-4 rounded-lg mb-6 ${selectedOption === currentQuestion.correctAnswer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        <p className="font-bold mb-1">
                            {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                        </p>
                        <p className="text-sm opacity-90">
                            {currentQuestion.explanation}
                        </p>
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                        {currentIndex === shuffledQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        <ArrowRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizInterface;
