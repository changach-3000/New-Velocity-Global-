import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, CalendarDays, Zap } from 'lucide-react';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const StudyTimeAnalytics = ({ studyData }) => {
  const data = {
    labels: ['Video Lectures', 'Study Guides', 'Quizzes', 'Case Studies', 'Reading'],
    datasets: [
      {
        data: [
          studyData.videoTime || 45, 
          studyData.guideTime || 25, 
          studyData.quizTime || 15, 
          studyData.caseTime || 10, 
          studyData.readingTime || 5
        ],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(107, 114, 128, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        }
      }
    }
  };

  return (
    <Card className="h-full shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">Study Time Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] flex items-center justify-center relative">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-bold text-slate-800">{studyData.totalHours || 0}h</span>
            <span className="text-xs text-gray-500">Total Time</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="bg-blue-50 p-3 rounded-lg text-center">
            <Clock className="w-4 h-4 text-blue-500 mx-auto mb-1" />
            <div className="text-xs text-gray-500">Daily Avg</div>
            <div className="font-semibold text-slate-700">{studyData.dailyAverage || '0m'}</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg text-center">
            <CalendarDays className="w-4 h-4 text-green-500 mx-auto mb-1" />
            <div className="text-xs text-gray-500">Active Days</div>
            <div className="font-semibold text-slate-700">{studyData.activeDays || 0}</div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg text-center">
            <Zap className="w-4 h-4 text-purple-500 mx-auto mb-1" />
            <div className="text-xs text-gray-500">Streak</div>
            <div className="font-semibold text-slate-700">{studyData.streak || 0} days</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyTimeAnalytics;