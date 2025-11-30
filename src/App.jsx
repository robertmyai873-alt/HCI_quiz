import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LectureSelector from './components/LectureSelector';
import ConceptReview from './components/ConceptReview';
import QuizInterface from './components/QuizInterface';
import ResultsDashboard from './components/ResultsDashboard';
import { courseData } from './data/courseData';
import { useQuizProgress } from './hooks/useQuizProgress';

function App() {
  const [view, setView] = useState('home'); // home, review, quiz, dashboard
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [theme, setTheme] = useState('light');

  const { progress, saveScore, toggleBookmark, recordIncorrect } = useQuizProgress();

  // Load theme from local storage or system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const handleLectureSelect = (id) => {
    setSelectedSectionId(id);
    // If mixed, go straight to quiz? Or maybe review all? 
    // Let's go to review first for specific lectures, straight to quiz for mixed.
    if (id === 'mixed') {
      setView('quiz');
    } else {
      setView('review');
    }
  };

  const handleStartQuiz = () => {
    setView('quiz');
  };

  const handleQuizComplete = (score, total) => {
    if (selectedSectionId === 'mixed') {
      // For mixed, we might want to attribute score to "mixed" or distribute it?
      // For simplicity, let's just save it as 'mixed' lecture
      saveScore('mixed', score, total);
    } else {
      saveScore(selectedSectionId, score, total);
    }
    setView('dashboard');
  };

  const getQuestions = () => {
    if (selectedSectionId === 'mixed') {
      // Combine all questions
      return courseData.sections.flatMap(s => s.questions);
    }
    const section = courseData.sections.find(s => s.id === selectedSectionId);
    return section ? section.questions : [];
  };

  const getConcepts = () => {
    if (selectedSectionId === 'mixed') return [];
    const section = courseData.sections.find(s => s.id === selectedSectionId);
    return section ? section.concepts : [];
  };

  return (
    <Layout
      currentView={view}
      onViewChange={setView}
      theme={theme}
      onToggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
    >
      {view === 'home' && (
        <div className="animate-in fade-in duration-500">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Master Human-Computer Interaction
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Review concepts, test your knowledge, and track your progress across all course modules.
            </p>
          </div>
          <LectureSelector
            sections={courseData.sections}
            onSelect={handleLectureSelect}
            progress={progress}
          />
        </div>
      )}

      {view === 'review' && (
        <ConceptReview
          concepts={getConcepts()}
          onStartQuiz={handleStartQuiz}
          onBack={() => setView('home')}
        />
      )}

      {view === 'quiz' && (
        <QuizInterface
          questions={getQuestions()}
          onComplete={handleQuizComplete}
          onExit={() => setView('home')}
          toggleBookmark={toggleBookmark}
          bookmarks={progress.bookmarks}
        />
      )}

      {view === 'dashboard' && (
        <ResultsDashboard
          progress={progress}
          courseData={courseData}
          onBack={() => setView('home')}
        />
      )}
    </Layout>
  );
}

export default App;
