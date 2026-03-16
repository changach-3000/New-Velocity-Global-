import React from 'react';
import { motion } from 'framer-motion';
import { Flame, BookOpen, Trophy, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProgressTracking } from '@/hooks/useProgressTracking';

const ProgressStats = ({ className = '' }) => {
  const { getStreakInfo, getProgressData } = useProgressTracking();
  
  const streakInfo = getStreakInfo();
  const progressData = getProgressData();
  
  const coursesStarted = Object.keys(progressData.courses || {}).length;
  
  let totalLessonsCompleted = 0;
  let totalLessonsStarted = 0;
  Object.values(progressData.courses || {}).forEach(course => {
    const lessons = Object.values(course.lessons || {});
    totalLessonsStarted += lessons.length;
    totalLessonsCompleted += lessons.filter(l => l.completed).length;
  });
  const overallProgress = totalLessonsStarted > 0 ? Math.round((totalLessonsCompleted / totalLessonsStarted) * 100) : 0;

  return (
    <Card className={`bg-slate-900/80 backdrop-blur-md border-slate-800 shadow-xl overflow-hidden ${className}`}>
      <CardHeader className="bg-slate-800/50 border-b border-slate-700/50 pb-4">
        <CardTitle className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex flex-col items-center justify-center text-center"
          >
            <Flame className="w-8 h-8 text-orange-500 mb-2" />
            <span className="text-2xl font-bold text-slate-100">{streakInfo.current}</span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Day Streak</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex flex-col items-center justify-center text-center"
          >
            <Trophy className="w-8 h-8 text-emerald-500 mb-2" />
            <span className="text-2xl font-bold text-slate-100">{streakInfo.longest}</span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Best Streak</span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex flex-col items-center justify-center text-center"
          >
            <BookOpen className="w-8 h-8 text-purple-500 mb-2" />
            <span className="text-2xl font-bold text-slate-100">{coursesStarted}</span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Courses Started</span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex flex-col items-center justify-center text-center"
          >
            <Target className="w-8 h-8 text-blue-500 mb-2" />
            <span className="text-2xl font-bold text-slate-100">{overallProgress}%</span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Overall Progress</span>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressStats;