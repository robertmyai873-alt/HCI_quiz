import React, { useState, useEffect } from 'react';
import { Check, X, Bookmark, ArrowRight, RefreshCw } from 'lucide-react';
import HeuristicNote from './HeuristicNote';
import MatchingQuestion from './MatchingQuestion';
import ScenarioQuestion from './ScenarioQuestion';
import { useQuizProgress } from '../hooks/useQuizProgress';

const QuizInterface = ({ questions, onComplete, onExit, toggleBookmark, bookmarks }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const { updateSpacedRepetition } = useQuizProgress();

    useEffect(() => {
        // Fisher-Yates shuffle for better randomization
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
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
            updateSpacedRepetition(currentQuestion.id, true);
        } else {
            updateSpacedRepetition(currentQuestion.id, false);
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

    // Handle Matching Questions
    if (currentQuestion.type === 'matching') {
        return (
            <div className="max-w-3xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-medium text-muted-foreground">
                        Question {currentIndex + 1} of {shuffledQuestions.length}
                    </div>
                    <button onClick={onExit} className="text-muted-foreground hover:text-foreground">Exit</button>
                </div>

                <h3 className="text-xl font-bold mb-6">{currentQuestion.question}</h3>

                <MatchingQuestion
                    key={currentQuestion.id}
                    question={currentQuestion}
                    onAnswer={(isCorrect, points) => {
                        if (isCorrect) setScore(s => s + 1); // Or partial points
                        updateSpacedRepetition(currentQuestion.id, isCorrect);
                        handleNext();
                    }}
                />
            </div>
        );
    }

    // Handle Scenario Questions
    if (currentQuestion.type === 'scenario') {
        return (
            <div className="max-w-3xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-medium text-muted-foreground">
                        Question {currentIndex + 1} of {shuffledQuestions.length}
                    </div>
                    <button onClick={onExit} className="text-muted-foreground hover:text-foreground">Exit</button>
                </div>

                <ScenarioQuestion
                    key={currentQuestion.id}
                    question={currentQuestion}
                    onAnswer={(isCorrect, points) => {
                        if (isCorrect) setScore(s => s + 1);
                        updateSpacedRepetition(currentQuestion.id, isCorrect);
                        handleNext();
                    }}
                />
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="text-sm font-medium text-muted-foreground">
                    Question {currentIndex + 1} of {shuffledQuestions.length}
                </div>
                <div className="flex gap-4 items-center">
                    <button
                        onClick={() => toggleBookmark(currentQuestion.id)}
                        className={`p-2 rounded-full transition-colors ${isBookmarked ? 'bg-accent text-accent-foreground' : 'hover:bg-muted text-muted-foreground'}`}
                    >
                        <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
                    </button>
                    <div className="flex items-center">
                        <button onClick={onExit} className="text-muted-foreground hover:text-foreground mr-2">
                            Exit
                        </button>
                        <HeuristicNote
                            heuristic="User Control"
                            note="Users can exit the quiz at any time (Emergency Exit)."
                            position="bottom"
                        />
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex) / shuffledQuestions.length) * 100}%` }}
                />
            </div>
            <div className="flex justify-end mb-8">
                <HeuristicNote
                    heuristic="Visibility"
                    note="Progress bar keeps users informed about their status in the quiz."
                    position="top"
                />
            </div>

            {/* Question Card */}
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground mb-4 uppercase tracking-wide">
                    {currentQuestion.type === 'scenario' ? 'Scenario' : 'Multiple Choice'}
                </span>

                <h3 className="text-xl font-bold text-card-foreground mb-6 leading-relaxed">
                    {currentQuestion.question}
                </h3>

                <div className="space-y-3">
                    {currentQuestion.options.map((option, idx) => {
                        let buttonStyle = "border-border hover:border-primary hover:bg-accent/50";
                        let icon = null;

                        if (isAnswered) {
                            if (option === currentQuestion.correctAnswer) {
                                buttonStyle = "border-primary bg-primary/20 text-primary";
                                icon = <Check size={20} />;
                            } else if (option === selectedOption) {
                                buttonStyle = "border-destructive bg-destructive/20 text-destructive";
                                icon = <X size={20} />;
                            } else {
                                buttonStyle = "border-border opacity-50";
                            }
                        } else if (selectedOption === option) {
                            buttonStyle = "border-primary bg-primary/10";
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleOptionClick(option)}
                                disabled={isAnswered}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all flex justify-between items-center text-card-foreground ${buttonStyle}`}
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
                    <div className={`p-4 rounded-lg mb-6 ${selectedOption === currentQuestion.correctAnswer ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'}`}>
                        <p className="font-bold mb-1">
                            {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                        </p>
                        <p className="text-sm opacity-90">
                            {currentQuestion.explanation}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <button
                            onClick={handleNext}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            {currentIndex === shuffledQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                            <ArrowRight size={20} />
                        </button>
                        <HeuristicNote
                            heuristic="Error Prevention"
                            note="Next button only appears after answering, preventing accidental skips."
                            position="top"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizInterface;
