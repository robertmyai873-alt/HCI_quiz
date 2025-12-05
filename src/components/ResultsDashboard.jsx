import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, AlertCircle, CheckCircle } from 'lucide-react';
import HeuristicNote from './HeuristicNote';

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
                <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Progress</h2>
                    <HeuristicNote
                        heuristic="Visibility"
                        note="Immediate feedback on performance helps users assess their current state."
                    />
                </div>
                <button onClick={onBack} className="text-primary hover:underline">Back to Menu</button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg">
                            <Trophy size={24} />
                        </div>
                        <h3 className="font-semibold text-muted-foreground">Overall Accuracy</h3>
                    </div>
                    <p className="text-3xl font-bold text-card-foreground">{overallAccuracy}%</p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <CheckCircle size={24} />
                        </div>
                        <h3 className="font-semibold text-muted-foreground">Lectures Completed</h3>
                    </div>
                    <p className="text-3xl font-bold text-card-foreground">
                        {progress.completedLectures.length} / {courseData.sections.length}
                    </p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-sm border border-border relative">
                    <div className="absolute top-2 right-2">
                        <HeuristicNote
                            heuristic="Recognize Errors"
                            note="Highlighting weakest areas helps users identify and recover from knowledge gaps."
                            position="bottom"
                        />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                            <AlertCircle size={24} />
                        </div>
                        <h3 className="font-semibold text-muted-foreground">Weakest Area</h3>
                    </div>
                    <p className="text-lg font-bold text-card-foreground truncate">
                        {chartData.sort((a, b) => a.score - b.score)[0]?.name || "N/A"}
                    </p>
                </div>
            </div>

            {/* Chart */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border mb-8">
                <h3 className="text-xl font-bold mb-6 text-card-foreground">Performance by Section</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--card))',
                                    borderColor: 'hsl(var(--border))',
                                    borderRadius: 'var(--radius)',
                                    color: 'hsl(var(--card-foreground))'
                                }}
                                cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
                            />
                            <Bar dataKey="score" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recommendations */}
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Study Recommendations</h3>
                <ul className="space-y-2">
                    {chartData.filter(d => d.score < 70).map(d => (
                        <li key={d.name} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-2 h-2 bg-destructive rounded-full"></span>
                            Review <strong className="text-foreground">{d.name}</strong> to improve your score (Current: {d.score}%)
                        </li>
                    ))}
                    {chartData.every(d => d.score >= 70) && chartData.length > 0 && (
                        <li className="text-green-600 font-medium">Great job! You are doing well across all sections. Try the Mixed Review to test your retention.</li>
                    )}
                    {chartData.length === 0 && (
                        <li className="text-muted-foreground">Complete a quiz to get recommendations.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ResultsDashboard;
