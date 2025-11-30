import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book } from 'lucide-react';

const ConceptReview = ({ concepts, onStartQuiz, onBack }) => {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={onBack}
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    ← Back
                </button>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Concept Review</h2>
                <button
                    onClick={onStartQuiz}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                    Start Quiz
                </button>
            </div>

            <div className="space-y-4">
                {concepts.map(concept => (
                    <div
                        key={concept.id}
                        className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                        <button
                            onClick={() => setExpandedId(expandedId === concept.id ? null : concept.id)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <Book size={20} className="text-blue-500" />
                                <span className="font-semibold text-lg text-gray-900 dark:text-white">
                                    {concept.term}
                                </span>
                            </div>
                            {expandedId === concept.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>

                        {expandedId === concept.id && (
                            <div className="p-4 pt-0 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                                <div className="mb-3">
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Definition</h4>
                                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                        {concept.definition}
                                    </p>
                                </div>

                                <div className="mb-3">
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Example</h4>
                                    <p className="text-gray-600 dark:text-gray-400 italic">
                                        "{concept.example}"
                                    </p>
                                </div>

                                {concept.related && (
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Related</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {concept.related.map(tag => (
                                                <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConceptReview;
