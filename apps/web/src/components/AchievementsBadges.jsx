import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Award, BookOpen, Zap, Target, Star, Shield, Trophy, Flame, GraduationCap, Medal, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const BADGES = [
  { id: 'first_lesson', icon: BookOpen, title: 'First Steps', description: 'Complete your first lesson', color: 'text-blue-500 bg-blue-100' },
  { id: 'quiz_master', icon: Target, title: 'Quiz Master', description: 'Score 100% on a quiz', color: 'text-red-500 bg-red-100' },
  { id: 'study_warrior', icon: Shield, title: 'Study Warrior', description: 'Complete 5 study guides', color: 'text-green-500 bg-green-100' },
  { id: 'consistent', icon: Flame, title: 'On Fire', description: 'Maintain a 3-day streak', color: 'text-orange-500 bg-orange-100' },
  { id: 'speed_learner', icon: Zap, title: 'Speed Learner', description: 'Complete a lesson in one sitting', color: 'text-yellow-500 bg-yellow-100' },
  { id: 'perfect_score', icon: Star, title: 'Perfectionist', description: 'Get 100% on 3 quizzes', color: 'text-purple-500 bg-purple-100' },
  { id: 'dedicated', icon: Clock, title: 'Dedicated', description: 'Study for 10+ hours total', color: 'text-indigo-500 bg-indigo-100' },
  { id: 'champion', icon: Trophy, title: 'Champion', description: 'Finish the entire course', color: 'text-amber-500 bg-amber-100' },
  { id: 'scholar', icon: GraduationCap, title: 'Scholar', description: 'Read all reading materials', color: 'text-cyan-500 bg-cyan-100' },
  { id: 'expert', icon: Medal, title: 'Expert', description: 'Pass the final exam', color: 'text-emerald-500 bg-emerald-100' },
];

const AchievementsBadges = ({ earnedBadges = [] }) => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800 flex items-center justify-between">
          <span>Achievements</span>
          <span className="text-sm font-normal text-gray-500">{earnedBadges.length} / {BADGES.length} Unlocked</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <TooltipProvider>
            {BADGES.map((badge) => {
              const isUnlocked = earnedBadges.includes(badge.id);
              const Icon = badge.icon;
              
              return (
                <Tooltip key={badge.id}>
                  <TooltipTrigger asChild>
                    <div className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300",
                      isUnlocked 
                        ? "border-transparent bg-white shadow-md scale-100 opacity-100" 
                        : "border-dashed border-gray-200 bg-gray-50 opacity-60 grayscale hover:grayscale-0 hover:opacity-80"
                    )}>
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center mb-3",
                        isUnlocked ? badge.color : "bg-gray-200 text-gray-400"
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-center text-slate-700">{badge.title}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-semibold">{badge.title}</p>
                    <p className="text-xs text-gray-500">{badge.description}</p>
                    {!isUnlocked && <p className="text-xs text-red-400 mt-1">Locked</p>}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsBadges;