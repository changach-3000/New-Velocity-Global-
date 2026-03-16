import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Trophy, Calendar as CalendarIcon, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProgressTracking } from '@/hooks/useProgressTracking';

const StreakCard = ({ className = '', showCourses = false }) => {
  const { getStreakInfo, getProgressData } = useProgressTracking();
  const streakInfo = getStreakInfo();
  const progressData = getProgressData();
  const coursesStarted = Object.keys(progressData.courses || {}).length;

  const today = new Date();
  const last14Days = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (13 - i));
    return d.toISOString().split('T')[0];
  });

  const activityDates = new Set(streakInfo.activityDates || []);

  return (
    <Card className={`bg-slate-900/80 backdrop-blur-sm border-slate-800 shadow-xl overflow-hidden ${className}`}>
      <CardHeader className="bg-slate-800/50 border-b border-slate-700/50 pb-4">
        <CardTitle className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          Learning Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex flex-col items-center justify-center text-center"
          >
            <Flame className="w-8 h-8 text-orange-500 mb-2" />
            <span className="text-3xl font-bold text-slate-100">{streakInfo.current}</span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Day Streak</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex flex-col items-center justify-center text-center"
          >
            <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
            <span className="text-3xl font-bold text-slate-100">{streakInfo.longest}</span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Best Streak</span>
          </motion.div>

          {showCourses && (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-2 bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex flex-col items-center justify-center text-center"
            >
              <BookOpen className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-2xl font-bold text-slate-100">{coursesStarted}</span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Courses Started</span>
            </motion.div>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-slate-400" />
              Last 14 Days Activity
            </h4>
          </div>
          <div className="flex gap-1.5 justify-between">
            {last14Days.map((dateStr) => {
              const isActive = activityDates.has(dateStr);
              const isToday = dateStr === today.toISOString().split('T')[0];
              
              return (
                <div 
                  key={dateStr}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-sm transition-colors duration-300 ${
                    isActive 
                      ? 'bg-orange-500 shadow-sm shadow-orange-500/20' 
                      : 'bg-slate-800'
                  } ${isToday && !isActive ? 'border-2 border-slate-600' : ''}`}
                  title={dateStr}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-medium px-1">
            <span>14 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakCard;