import { useState, useEffect } from 'react';

const STORAGE_KEY = 'hci_quiz_progress_v1';

export const useQuizProgress = () => {
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {
            scores: [], // { lectureId, score, total, timestamp }
            completedLectures: [], // lectureId
            bookmarks: [], // questionId
            incorrectAnswers: [] // { questionId, timestamp }
        };
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

            return {
                ...prev,
                scores: [...prev.scores, newScore],
                completedLectures: newCompleted
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
    };

    const resetProgress = () => {
        if (confirm("Are you sure you want to reset all progress?")) {
            setProgress({
                scores: [],
                completedLectures: [],
                bookmarks: [],
                incorrectAnswers: []
            });
        }
    };

    return {
        progress,
        saveScore,
        toggleBookmark,
        recordIncorrect,
        resetProgress
    };
};
