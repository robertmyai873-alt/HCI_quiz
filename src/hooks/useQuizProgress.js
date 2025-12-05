import { useState, useEffect } from 'react';

const STORAGE_KEY = 'hci_quiz_progress_v1';

export const useQuizProgress = () => {
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        const defaultState = {
            scores: [], // { lectureId, score, total, timestamp }
            completedLectures: [], // lectureId
            bookmarks: [], // questionId
            incorrectAnswers: [], // { questionId, timestamp }
            difficultyLevel: 1, // 1 (Beginner) to 3 (Advanced)
            spacedRepetition: {} // { questionId: nextReviewDate (ISO string) }
        };
        return saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }, [progress]);

    const saveScore = (lectureId, score, total) => {
        const newScore = {
            lectureId,
            score,
            total,
            timestamp: new Date().toISOString()
        };

        setProgress(prev => {
            const isCompleted = (score / total) >= 0.7; // 70% to complete
            const newCompleted = isCompleted && !prev.completedLectures.includes(lectureId)
                ? [...prev.completedLectures, lectureId]
                : prev.completedLectures;

            // Adaptive Difficulty Logic
            // If they score > 80%, increase difficulty. If < 50%, decrease.
            let newDifficulty = prev.difficultyLevel || 1;
            const percentage = score / total;
            if (percentage > 0.8 && newDifficulty < 3) newDifficulty++;
            else if (percentage < 0.5 && newDifficulty > 1) newDifficulty--;

            return {
                ...prev,
                scores: [...prev.scores, newScore],
                completedLectures: newCompleted,
                difficultyLevel: newDifficulty
            };
        });
    };

    const toggleBookmark = (questionId) => {
        setProgress(prev => {
            const isBookmarked = prev.bookmarks.includes(questionId);
            return {
                ...prev,
                bookmarks: isBookmarked
                    ? prev.bookmarks.filter(id => id !== questionId)
                    : [...prev.bookmarks, questionId]
            };
        });
    };

    const recordIncorrect = (questionId) => {
        setProgress(prev => ({
            ...prev,
            incorrectAnswers: [...prev.incorrectAnswers, { questionId, timestamp: new Date().toISOString() }]
        }));
        updateSpacedRepetition(questionId, false);
    };

    const updateSpacedRepetition = (questionId, isCorrect) => {
        setProgress(prev => {
            const spacedRepetition = prev.spacedRepetition || {};
            const currentNextReview = spacedRepetition[questionId] ? new Date(spacedRepetition[questionId]) : new Date();
            let nextDate = new Date();

            if (isCorrect) {
                // If correct, push it further. Simple exponential backoff or fixed intervals.
                // Let's add 3 days for now.
                nextDate.setDate(nextDate.getDate() + 3);
            } else {
                // If incorrect, review tomorrow.
                nextDate.setDate(nextDate.getDate() + 1);
            }

            return {
                ...prev,
                spacedRepetition: {
                    ...spacedRepetition,
                    [questionId]: nextDate.toISOString()
                }
            };
        });
    };

    const resetProgress = () => {
        if (confirm("Are you sure you want to reset all progress?")) {
            setProgress({
                scores: [],
                completedLectures: [],
                bookmarks: [],
                incorrectAnswers: [],
                difficultyLevel: 1,
                spacedRepetition: {}
            });
        }
    };

    return {
        progress,
        saveScore,
        toggleBookmark,
        recordIncorrect,
        updateSpacedRepetition,
        resetProgress
    };
};
