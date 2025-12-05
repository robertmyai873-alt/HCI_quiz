import React from 'react';
import { GraduationCap, BarChart2, Moon, Sun } from 'lucide-react';
import HeuristicNote from './HeuristicNote';

const Layout = ({ children, currentView, onViewChange, theme, onToggleTheme }) => {
    return (
        <div className={`min-h-screen transition-colors duration-200 ${theme === 'dark' ? 'dark' : ''} bg-background text-foreground`}>
            <div className="min-h-screen flex flex-col">
                {/* Navbar */}
                <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer"
                                onClick={() => onViewChange('home')}
                            >
                                <GraduationCap size={28} />
                                <span>HCI Master</span>
                            </div>
                            <HeuristicNote
                                heuristic="Consistency"
                                note="Consistent navigation bar across all pages helps users predict where to find controls."
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => onViewChange('dashboard')}
                                className={`p-2 rounded-lg transition-colors ${currentView === 'dashboard' ? 'bg-accent text-accent-foreground' : 'hover:bg-muted text-muted-foreground hover:text-foreground'}`}
                                title="Dashboard"
                            >
                                <BarChart2 size={20} />
                            </button>

                            <button
                                onClick={onToggleTheme}
                                className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                                title="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <HeuristicNote
                                heuristic="User Control"
                                note="Users can freely switch between light and dark modes."
                                position="bottom"
                            />
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-6 relative">
                    {children}
                </main>

                {/* Footer */}
                <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground flex justify-center items-center gap-2">
                    <p>© 2024 HCI Quiz Platform. Built for Tilburg University.</p>
                    <HeuristicNote
                        heuristic="Aesthetic & Minimalist"
                        note="Footer contains only essential info, keeping the interface clean."
                        position="top"
                    />
                </footer>
            </div>
        </div>
    );
};

export default Layout;
