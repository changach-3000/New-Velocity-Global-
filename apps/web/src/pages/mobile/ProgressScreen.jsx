import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award, TrendingUp, Clock, Target } from 'lucide-react';

const ProgressScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 p-4 space-y-6">
      <h1 className="font-bold text-2xl text-slate-900">My Progress</h1>

      {/* Overall Circle */}
      <div className="flex justify-center py-4">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-gray-200" />
            <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray="440" strokeDashoffset="308" className="text-blue-600" />
          </svg>
          <div className="absolute text-center">
            <span className="text-3xl font-bold text-slate-900">30%</span>
            <p className="text-xs text-gray-500">Completed</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-6 h-6 mx-auto text-blue-500 mb-2" />
            <div className="text-xl font-bold">12.5h</div>
            <p className="text-xs text-gray-500">Total Time</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-6 h-6 mx-auto text-green-500 mb-2" />
            <div className="text-xl font-bold">85%</div>
            <p className="text-xs text-gray-500">Avg Quiz Score</p>
          </CardContent>
        </Card>
      </div>

      {/* Lesson Progress */}
      <div>
        <h3 className="font-bold text-lg mb-3">Lesson Breakdown</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-sm">Lesson {i}</span>
                  <span className="text-xs text-gray-500">{i <= 2 ? '100%' : i === 3 ? '45%' : '0%'}</span>
                </div>
                <Progress value={i <= 2 ? 100 : i === 3 ? 45 : 0} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div>
        <h3 className="font-bold text-lg mb-3">Milestones</h3>
        <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold">Fundamentals Master</p>
              <p className="text-xs text-purple-100">Complete first 3 lessons</p>
              <div className="mt-2 h-1.5 bg-black/20 rounded-full w-full">
                <div className="h-full bg-white rounded-full w-2/3"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressScreen;