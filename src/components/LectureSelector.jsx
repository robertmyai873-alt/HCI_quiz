import React from 'react';
import { BookOpen, Brain, Bot, Layers } from 'lucide-react';
import HeuristicNote from './HeuristicNote';

const icons = {
    "lectures-3-5": BookOpen,
    "lectures-6-8": Brain,
    "lectures-10-12": Bot
};

const LectureSelector = ({ sections, onSelect, progress }) => {
    return (
        <div className="relative">
            <div className="absolute -top-8 right-0">
                <HeuristicNote
                    heuristic="Proximity"
                    note="Related items (lectures) are grouped together in a grid, implying they are of the same category."
                    position="bottom"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {sections.map(section => {
                    const Icon = icons[section.id] || Layers;
                    const isCompleted = progress.completedLectures.includes(section.id);

                    return (
                        <button
                            key={section.id}
                            onClick={() => onSelect(section.id)}
                            className={`
                  flex flex-col items-start p-6 rounded-xl border-2 transition-all hover:scale-105 relative group/card
                  ${isCompleted
                                    ? 'border-primary bg-primary/10'
                                    : 'border-border bg-card hover:border-primary'}
                `}
                        >
                            <div className="flex items-center justify-between w-full mb-4">
                                <div className={`p-3 rounded-lg ${isCompleted ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                    <Icon size={24} />
                                </div>
                                {isCompleted && (
                                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                                        COMPLETED
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold mb-2 text-card-foreground text-left">
                                    {section.title}
                                </h3>
                                <div className="opacity-0 group-hover/card:opacity-100 transition-opacity">
                                    <HeuristicNote
                                        heuristic="Recognition"
                                        note="Icons and clear titles help users recognize topics without recalling lecture numbers."
                                    />
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm text-left">
                                {section.description}
                            </p>

                            <div className="mt-4 flex gap-2 text-xs font-medium text-muted-foreground">
                                <span>{section.concepts.length} Concepts</span>
                                <span>•</span>
                                <span>{section.questions.length} Questions</span>
                            </div>
                        </button>
                    );
                })}

                <button
                    onClick={() => onSelect('mixed')}
                    className="flex flex-col items-start p-6 rounded-xl border-2 border-accent bg-accent/10 hover:border-primary transition-all hover:scale-105"
                >
                    <div className="p-3 rounded-lg bg-accent text-accent-foreground mb-4">
                        <Layers size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                        Mixed Review
                    </h3>
                    <p className="text-muted-foreground text-sm text-left">
                        Test your knowledge across all lectures with a randomized set of questions.
                    </p>
                </button>
            </div>
        </div>
    );
};

export default LectureSelector;
