import React from 'react';
import { BookOpen, Brain, Bot, Layers } from 'lucide-react';

const icons = {
    "lectures-3-5": BookOpen,
    "lectures-6-8": Brain,
    "lectures-10-12": Bot
};

const LectureSelector = ({ sections, onSelect, progress }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {sections.map(section => {
                const Icon = icons[section.id] || Layers;
                const isCompleted = progress.completedLectures.includes(section.id);

                return (
                    <button
                        key={section.id}
                        onClick={() => onSelect(section.id)}
                        className={`
              flex flex-col items-start p-6 rounded-xl border-2 transition-all hover:scale-105
              ${isCompleted
                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500'}
            `}
                    >
                        <div className="flex items-center justify-between w-full mb-4">
                            <div className={`p-3 rounded-lg ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                <Icon size={24} />
                            </div>
                            {isCompleted && (
                                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                    COMPLETED
                                </span>
                            )}
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-left">
                            {section.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm text-left">
                            {section.description}
                        </p>

                        <div className="mt-4 flex gap-2 text-xs font-medium text-gray-500">
                            <span>{section.concepts.length} Concepts</span>
                            <span>•</span>
                            <span>{section.questions.length} Questions</span>
                        </div>
                    </button>
                );
            })}

            <button
                onClick={() => onSelect('mixed')}
                className="flex flex-col items-start p-6 rounded-xl border-2 border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800 hover:border-purple-500 transition-all hover:scale-105"
            >
                <div className="p-3 rounded-lg bg-purple-100 text-purple-600 mb-4">
                    <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Mixed Review
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-left">
                    Test your knowledge across all lectures with a randomized set of questions.
                </p>
            </button>
        </div>
    );
};

export default LectureSelector;
