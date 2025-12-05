import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Check, X } from 'lucide-react';

const SortableItem = ({ id, content, disabled, isCorrect, isIncorrect }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id, disabled });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    let bgClass = "bg-white dark:bg-gray-800";
    let borderClass = "border-gray-200 dark:border-gray-700";

    if (isCorrect) {
        bgClass = "bg-green-50 dark:bg-green-900/20";
        borderClass = "border-green-500";
    } else if (isIncorrect) {
        bgClass = "bg-red-50 dark:bg-red-900/20";
        borderClass = "border-red-500";
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`p-4 mb-2 rounded-lg border-2 shadow-sm cursor-grab active:cursor-grabbing touch-none ${bgClass} ${borderClass}`}
        >
            {content}
        </div>
    );
};

const MatchingQuestion = ({ question, onAnswer }) => {
    // Pairs are expected to be [{term: "A", definition: "B"}, ...]
    // We need to split them into left (static) and right (draggable) sides.
    const [items, setItems] = useState([]);
    const [definitions, setDefinitions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [results, setResults] = useState(null);

    useEffect(() => {
        // Initialize state
        const terms = question.pairs.map(p => ({ id: `term-${p.term}`, content: p.term }));
        // Shuffle definitions
        const defs = question.pairs.map(p => ({ id: `def-${p.definition}`, content: p.definition, originalTerm: p.term }));

        // Fisher-Yates shuffle for definitions
        for (let i = defs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [defs[i], defs[j]] = [defs[j], defs[i]];
        }

        setItems(terms);
        setDefinitions(defs);
        setIsSubmitted(false);
        setResults(null);
    }, [question]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setDefinitions((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    const handleSubmit = () => {
        let correctCount = 0;
        const newResults = definitions.map((def, index) => {
            const correspondingTerm = items[index];
            // Check if this definition belongs to the term at the same index
            // The term at index i is items[i].content
            // The definition at index i is def.content
            // We need to check if they form a valid pair from the original question.pairs

            // Actually, we stored originalTerm in the definition object for easy checking
            const isCorrect = def.originalTerm === correspondingTerm.content;
            if (isCorrect) correctCount++;
            return { ...def, isCorrect };
        });

        setResults(newResults);
        setIsSubmitted(true);
        // Calculate score (e.g., percentage or just pass/fail)
        // For now, let's say all must be correct to get the point, or partial credit?
        // Let's give partial credit: score = correctCount / totalPairs
        const score = correctCount / items.length;
        onAnswer(score >= 1, score); // Pass if 100% correct, pass score value
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                    <h4 className="font-semibold text-center mb-2 text-muted-foreground">Terms</h4>
                    {items.map((item, idx) => (
                        <div key={item.id} className="p-4 mb-2 h-[64px] flex items-center rounded-lg border-2 border-transparent bg-muted/50 font-medium">
                            {item.content}
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    <h4 className="font-semibold text-center mb-2 text-muted-foreground">Definitions (Drag to Match)</h4>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={definitions.map(d => d.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            {definitions.map((def, idx) => (
                                <SortableItem
                                    key={def.id}
                                    id={def.id}
                                    content={def.content}
                                    disabled={isSubmitted}
                                    isCorrect={isSubmitted && results && results[idx].isCorrect}
                                    isIncorrect={isSubmitted && results && !results[idx].isCorrect}
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
            </div>

            {!isSubmitted && (
                <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Check Matches
                </button>
            )}

            {isSubmitted && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="font-bold text-center">
                        {results.every(r => r.isCorrect) ? "Perfect Match!" : "Some matches are incorrect."}
                    </p>
                </div>
            )}
        </div>
    );
};

export default MatchingQuestion;
