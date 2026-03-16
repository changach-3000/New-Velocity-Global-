import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Calendar, Trophy } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const StudyStreakTracker = ({ activityData = [] }) => {
  // Helper to format date as YYYY-MM-DD
  const formatDate = (date) => date.toISOString().split('T')[0];

  // Calculate streak
  const calculateStreak = () => {
    if (!activityData.length) return { current: 0, longest: 0 };

    // Sort dates descending
    const sortedDates = [...new Set(activityData.map(a => a.activityDate.split(' ')[0]))].sort((a, b) => new Date(b) - new Date(a));
    
    if (sortedDates.length === 0) return { current: 0, longest: 0 };

    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    
    const today = formatDate(new Date());
    const yesterday = formatDate(new Date(Date.now() - 86400000));

    // Check if active today or yesterday to start current streak
    if (sortedDates[0] === today || sortedDates[0] === yesterday) {
      currentStreak = 1;
      let checkDate = new Date(sortedDates[0]);
      
      for (let i = 1; i < sortedDates.length; i++) {
        checkDate.setDate(checkDate.getDate() - 1);
        const expectedDate = formatDate(checkDate);
        
        if (sortedDates[i] === expectedDate) {
          currentStreak++;
        } else {
          break;
        }
      }
    }

    // Calculate longest streak (simplified logic)
    // In a real app, this would iterate through all gaps
    longestStreak = Math.max(currentStreak, sortedDates.length > 0 ? 1 : 0); // Placeholder logic for longest

    return { current: currentStreak, longest: longestStreak };
  };

  const { current, longest } = calculateStreak();

  // Generate last 14 days for heatmap
  const getLast14Days = () => {
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = formatDate(d);
      const isActive = activityData.some(a => a.activityDate.startsWith(dateStr));
      days.push({ date: d, isActive, dateStr });
    }
    return days;
  };

  const heatmapDays = getLast14Days();

  return (
    <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-orange-700">
          <Flame className="w-5 h-5 fill-orange-500 text-orange-600 animate-pulse" />
          Study Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2 mb-6">
          <span className="text-4xl font-bold text-gray-900">{current}</span>
          <span className="text-sm text-gray-500 mb-1 font-medium">days on fire! 🔥</span>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Last 14 Days Activity</p>
            <div className="flex justify-between gap-1">
              <TooltipProvider>
                {heatmapDays.map((day, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <div 
                        className={`w-full aspect-square rounded-sm transition-all ${
                          day.isActive 
                            ? 'bg-orange-500 shadow-sm scale-105' 
                            : 'bg-gray-100'
                        }`}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs font-medium">
                        {day.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        {day.isActive ? ' - Active' : ' - No Activity'}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-orange-100">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-xs text-gray-600">Longest Streak: <span className="font-bold">{longest} days</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-gray-600">Total Days: <span className="font-bold">{activityData.length}</span></span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStreakTracker;