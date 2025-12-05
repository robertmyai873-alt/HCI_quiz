import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ScenarioQuestion = ({ question, onAnswer }) => {
    // question.scenario structure:
    // {
    //   steps: [
    //     {
    //       id: 1,
    //       text: "You are on the homepage. Where do you click to login?",
    //       image: "url/to/mockup.png" (optional),
    //       options: [
    //          { text: "Top right button", isCorrect: true, feedback: "Correct! That's the standard location." },
    //          { text: "Footer link", isCorrect: false, feedback: "Not quite. Check the header." }
    //       ]
    //     }
    //   ]
    // }
    // OR simple scenario (just one step like current MCQs but with more context/visuals)

    // For this implementation, we'll assume a multi-step flow or a rich single step.
    // Let's support a simple multi-step flow.

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [history, setHistory] = useState([]); // Track answers
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState(null);

    const steps = question.steps || [{
        text: question.question,
        options: question.options.map(opt => ({
            text: opt,
            isCorrect: opt === question.correctAnswer,
            feedback: question.explanation
        }))
    }];

    const currentStep = steps[currentStepIndex];

    const handleOptionClick = (option) => {
        if (feedback) return; // Already answered this step

        setSelectedOption(option);
        const isCorrect = option.isCorrect;
        setFeedback({
            isCorrect,
            text: option.feedback || (isCorrect ? "Correct!" : "Incorrect.")
        });

        setHistory([...history, { step: currentStepIndex, correct: isCorrect }]);
    };

    const handleNextStep = () => {
        setFeedback(null);
        setSelectedOption(null);
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        } else {
            // Calculate final score
            const totalCorrect = history.filter(h => h.correct).length;
            const score = totalCorrect / steps.length;
            onAnswer(score === 1, score);
        }
    };



    return (
        <div className="w-full bg-card rounded-xl border border-border overflow-hidden">
            <div className="bg-muted p-4 border-b border-border flex justify-between items-center">
                <span className="font-semibold">Scenario Simulation</span>
                <span className="text-sm text-muted-foreground">Step {currentStepIndex + 1} of {steps.length}</span>
            </div>

            <div className="p-6">
                <div className="mb-6">
                    <p className="text-lg font-medium leading-relaxed">{currentStep.text}</p>
                    {currentStep.image && (
                        <img src={currentStep.image} alt="Scenario context" className="mt-4 rounded-lg border border-border max-w-full h-auto" />
                    )}
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {currentStep.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleOptionClick(option)}
                            disabled={!!feedback}
                            className={`p-4 text-left rounded-lg border-2 transition-all ${feedback
                                ? option.isCorrect
                                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                    : option === selectedOption && !option.isCorrect
                                        ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                        : "border-border opacity-50"
                                : "border-border hover:border-primary hover:bg-accent"
                                }`}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>

                {feedback && (
                    <div className={`mt-6 p-4 rounded-lg animate-in fade-in slide-in-from-bottom-2 ${feedback.isCorrect ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200" : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"}`}>
                        <p className="font-bold">{feedback.isCorrect ? "Correct!" : "Incorrect"}</p>
                        <p>{feedback.text}</p>

                        <button
                            onClick={handleNextStep}
                            className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                        >
                            {currentStepIndex < steps.length - 1 ? "Next Step" : "Next Question"}
                            <ArrowRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScenarioQuestion;
