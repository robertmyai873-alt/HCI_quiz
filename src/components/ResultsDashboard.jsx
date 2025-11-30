import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, AlertCircle, CheckCircle } from 'lucide-react';

const ResultsDashboard = ({ progress, courseData, onBack }) => {
    // Prepare data for chart
    const chartData = courseData.sections.map(section => {
        const sectionScores = progress.scores.filter(s => s.lectureId === section.id);
        const avgScore = sectionScores.length > 0
            ? Math.round((sectionScores.reduce((acc, curr) => acc + (curr.score / curr.total), 0) / sectionScores.length) * 100)
            : 0;

        return {
            name: section.title.split(':')[0], // Short name
            score: avgScore,
            attempts: sectionScores.length
        };
    });

    const totalQuestionsAnswered = progress.scores.reduce((acc, curr) => acc + curr.total, 0);
    const totalCorrect = progress.scores.reduce((acc, curr) => acc + curr.score, 0);
    const overallAccuracy = totalQuestionsAnswered > 0 ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) : 0;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Progress</h2>
                <button onClick={onBack} className="text-blue-600 hover:underline">Back to Menu</button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <Trophy size={24} />
                        </div>
                        <h3 className="font-semibold text-gray-500">Overall Accuracy</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{overallAccuracy}%</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <CheckCircle size={24} />
                        </div>
                        <h3 className="font-semibold text-gray-500">Lectures Completed</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                        {progress.completedLectures.length} / {courseData.sections.length}
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                            <AlertCircle size={24} />
                        </div>
                        <h3 className="font-semibold text-gray-500">Weakest Area</h3>
                    </div>
                    <p className="text-lg font-bold text-gray-900 dark:text-white truncate">
                        {chartData.sort((a, b) => a.score - b.score)[0]?.name || "N/A"}
                    </p>
                </div>
            </div>

            {/* Chart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Performance by Section</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                cursor={{ fill: 'transparent' }}
                            />
                            <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Study Recommendations</h3>
                <ul className="space-y-2">
                    {chartData.filter(d => d.score < 70).map(d => (
                        <li key={d.name} className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Review <strong>{d.name}</strong> to improve your score (Current: {d.score}%)
                        </li>
                    ))}
                    {chartData.every(d => d.score >= 70) && chartData.length > 0 && (
                        <li className="text-green-600 font-medium">Great job! You are doing well across all sections. Try the Mixed Review to test your retention.</li>
                    )}
                    {chartData.length === 0 && (
                        <li className="text-gray-500">Complete a quiz to get recommendations.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ResultsDashboard;
