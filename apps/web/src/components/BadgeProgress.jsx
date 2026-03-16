import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Trophy, BookOpen, CheckCircle, Star } from 'lucide-react';

const BadgeProgress = ({ progressData }) => {
  if (!progressData) return null;

  const { total, earned, percentage, byType } = progressData;

  const categories = [
    { 
      key: 'lesson_completion', 
      label: 'Lessons Mastered', 
      icon: BookOpen, 
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    { 
      key: 'quiz_completion', 
      label: 'Quizzes Passed', 
      icon: CheckCircle, 
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    { 
      key: 'course_completion', 
      label: 'Course Completion', 
      icon: Trophy, 
      color: 'bg-amber-500',
      textColor: 'text-amber-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Badge Progress</h3>
          <p className="text-sm text-gray-500">Track your achievements</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-blue-600">{earned}/{total}</span>
          <p className="text-xs text-gray-500 uppercase font-semibold">Badges Earned</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-xs font-medium text-gray-600 mb-2">
          <span>Overall Completion</span>
          <span>{percentage}%</span>
        </div>
        <Progress value={percentage} className="h-3" />
      </div>

      <div className="space-y-4">
        {categories.map(cat => {
          const data = byType[cat.key];
          if (!data || data.total === 0) return null;
          
          const catPercent = Math.round((data.earned / data.total) * 100);
          const Icon = cat.icon;

          return (
            <div key={cat.key} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${cat.textColor}`} />
                  <span className="font-medium text-gray-700">{cat.label}</span>
                </div>
                <span className="text-gray-500 text-xs">{data.earned}/{data.total}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${cat.color}`} 
                  style={{ width: `${catPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BadgeProgress;