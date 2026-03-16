import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, CheckCircle, XCircle } from 'lucide-react';

const QuizScoreHistory = ({ quizHistory = [], lessons = [] }) => {
  // Merge lesson titles into history
  const enrichedHistory = quizHistory.map(attempt => {
    const lesson = lessons.find(l => l.lessonNumber === attempt.lessonNumber);
    return {
      ...attempt,
      lessonTitle: lesson ? lesson.title : `Lesson ${attempt.lessonNumber}`
    };
  }).sort((a, b) => new Date(b.attemptDate) - new Date(a.attemptDate));

  const getTrendIcon = (score) => {
    if (score >= 90) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (score >= 70) return <Minus className="w-4 h-4 text-gray-400" />;
    return <TrendingDown className="w-4 h-4 text-red-500" />;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-900">Quiz Performance History</CardTitle>
      </CardHeader>
      <CardContent>
        {enrichedHistory.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No quizzes attempted yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lesson</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {enrichedHistory.map((attempt) => (
                  <TableRow key={attempt.id}>
                    <TableCell className="font-medium max-w-[200px] truncate" title={attempt.lessonTitle}>
                      <span className="text-xs text-gray-500 mr-2">L{attempt.lessonNumber}</span>
                      {attempt.lessonTitle}
                    </TableCell>
                    <TableCell className="text-xs text-gray-500">
                      {new Date(attempt.attemptDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <span className={`font-bold ${attempt.quizScore >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                        {attempt.quizScore}%
                      </span>
                    </TableCell>
                    <TableCell>
                      {attempt.passed ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 gap-1">
                          <CheckCircle className="w-3 h-3" /> Pass
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 gap-1">
                          <XCircle className="w-3 h-3" /> Fail
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        {getTrendIcon(attempt.quizScore)}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizScoreHistory;