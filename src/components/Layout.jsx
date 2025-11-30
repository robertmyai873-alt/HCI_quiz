import React from 'react';
import { GraduationCap, BarChart2, Moon, Sun } from 'lucide-react';

const Layout = ({ children, currentView, onViewChange, theme, onToggleTheme }) => {
    return (
        <div className={`min-h-screen transition-colors duration-200 ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            <div className="dark:text-white min-h-screen flex flex-col">
                {/* Navbar */}
                <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                        <div
                            className="flex items-center gap-2 font-bold text-xl text-blue-600 cursor-pointer"
                            onClick={() => onViewChange('home')}
                        >
                            <GraduationCap size={28} />
                            <span>HCI Master</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => onViewChange('dashboard')}
                                className={`p-2 rounded-lg transition-colors ${currentView === 'dashboard' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                title="Dashboard"
                            >
                                <BarChart2 size={20} />
                            </button>

                            <button
                                onClick={onToggleTheme}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
                                title="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-6">
                    {children}
                </main>

                {/* Footer */}
                <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500">
                    <p>© 2024 HCI Quiz Platform. Built for Tilburg University.</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
