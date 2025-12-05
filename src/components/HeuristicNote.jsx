import React, { useState } from 'react';
import { Info } from 'lucide-react';

const HeuristicNote = ({ heuristic, note, position = 'top' }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative inline-flex items-center ml-2 group z-50"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <div className="bg-secondary text-secondary-foreground text-[10px] px-1.5 py-0.5 rounded-full border border-border cursor-help flex items-center gap-1 transition-colors hover:bg-secondary/80">
                <span className="font-medium">HCI: {heuristic}</span>
                <Info size={10} />
            </div>

            {isVisible && (
                <div
                    className={`absolute ${position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
                        } left-1/2 -translate-x-1/2 w-48 bg-popover text-popover-foreground text-xs p-2 rounded shadow-lg z-50 pointer-events-none animate-in fade-in zoom-in duration-200 border border-border`}
                >
                    {note}
                    <div className={`absolute ${position === 'top' ? 'top-full border-t-popover' : 'bottom-full border-b-popover'
                        } left-1/2 -translate-x-1/2 border-4 border-transparent`} />
                </div>
            )}
        </div>
    );
};

export default HeuristicNote;
