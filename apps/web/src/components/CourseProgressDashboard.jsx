import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Clock, BookOpen, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const CourseProgressDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>My Progress - Tax Optimization</title>
      </Helmet>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Course Progress</h1>
            <p className="text-gray-600">Tax Optimization in Equipment Leasing</p>
          </div>
          <Button asChild>
            <Link to="/course/tax-optimization/lessons">
              Continue Learning <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Overall Completion</span>
                <Target className="w-4 h-4 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-slate-900">12%</div>
              <Progress value={12} className="h-2 mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Time Spent</span>
                <Clock className="w-4 h-4 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-slate-900">45m</div>
              <p className="text-xs text-gray-500 mt-1">of 7.5 hours total</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Quizzes Passed</span>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-slate-900">1/8</div>
              <p className="text-xs text-gray-500 mt-1">Avg. Score: 85%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Badges Earned</span>
                <Trophy className="w-4 h-4 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-slate-900">0</div>
              <p className="text-xs text-gray-500 mt-1">Next: "First Steps"</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { id: 1, title: "Fundamentals of Equipment Leasing", status: "Completed", score: 85 },
                  { id: 2, title: "Depreciation Strategies", status: "In Progress", score: null },
                  { id: 3, title: "Interest Deduction Optimization", status: "Locked", score: null },
                  { id: 4, title: "Lease Classification", status: "Locked", score: null },
                  { id: 5, title: "Sale-Leaseback Transactions", status: "Locked", score: null },
                ].map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                        ${lesson.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                          lesson.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 
                          'bg-gray-100 text-gray-400'}
                      `}>
                        {lesson.id}
                      </div>
                      <div>
                        <h4 className={`font-medium ${lesson.status === 'Locked' ? 'text-gray-400' : 'text-slate-900'}`}>
                          {lesson.title}
                        </h4>
                        <span className="text-xs text-gray-500">{lesson.status}</span>
                      </div>
                    </div>
                    {lesson.score && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Quiz: {lesson.score}%
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" /> Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Tax Scholar</p>
                    <p className="text-xs text-gray-400">Complete all lessons</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Perfect Score</p>
                    <p className="text-xs text-gray-400">100% on any quiz</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-800 font-medium mb-1">Review Lesson 1 Quiz</p>
                  <p className="text-xs text-blue-600">You missed questions on ASC 842. Review the study guide.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgressDashboard;