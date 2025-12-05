import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book } from 'lucide-react';
import HeuristicNote from './HeuristicNote';

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
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Concept Review</h2>
                    <HeuristicNote
                        heuristic="Match with Real World"
                        note="Uses familiar study concepts like 'Definition' and 'Example' that match student mental models."
                    />
                </div>
                <button
                    onClick={onStartQuiz}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors"
                >
                    Start Quiz
                </button>
            </div>

            <div className="space-y-4">
                <div className="flex justify-end">
                    <HeuristicNote
                        heuristic="Flexibility"
                        note="Accordion design allows users to quickly scan topics and only dive deep when needed."
                        position="bottom"
                    />
                </div>
                {concepts.map(concept => (
                    <div
                        key={concept.id}
                        className="bg-card rounded-lg border border-border overflow-hidden"
                    >
                        <button
                            onClick={() => setExpandedId(expandedId === concept.id ? null : concept.id)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <Book size={20} className="text-primary" />
                                <span className="font-semibold text-lg text-card-foreground">
                                    {concept.term}
                                </span>
                            </div>
                            {expandedId === concept.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>

                        {expandedId === concept.id && (
                            <div className="p-4 pt-0 bg-muted/20 border-t border-border">
                                <div className="mb-3">
                                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Definition</h4>
                                    <p className="text-card-foreground leading-relaxed">
                                        {concept.definition}
                                    </p>
                                </div>

                                <div className="mb-3">
                                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Example</h4>
                                    <p className="text-muted-foreground italic">
                                        "{concept.example}"
                                    </p>
                                </div>

                                {concept.related && (
                                    <div>
                                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Related</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {concept.related.map(tag => (
                                                <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
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
