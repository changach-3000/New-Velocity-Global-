import React, { useState, useEffect } from 'react';
import { useMobileAuth } from '@/contexts/MobileAuthContext';
import { useMobileSettings } from '@/contexts/MobileSettingsContext';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Award, TrendingUp, Clock, Target, CheckCircle2, Download, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const MobileProgressScreen = () => {
  const { currentUser } = useMobileAuth();
  const { darkMode } = useMobileSettings();
  const [stats, setStats] = useState({
    overallProgress: 0,
    totalTime: 0,
    avgQuizScore: 0,
    lessonsCompleted: 0,
    totalLessons: 5
  });
  const [lessonProgress, setLessonProgress] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      loadProgressData();
    }
  }, [currentUser]);

  const loadProgressData = async () => {
    try {
      // Fetch lesson progress
      const progressRecords = await pb.collection('vendor_leasing_progress_tracking').getFullList({
        filter: `studentId="${currentUser.id}"`,
        $autoCancel: false
      });

      // Fetch quiz history
      const quizRecords = await pb.collection('vendor_leasing_quiz_history').getFullList({
        filter: `studentId="${currentUser.id}"`,
        $autoCancel: false
      });

      // Fetch offline content count
      const offlineRecords = await pb.collection('mobile_offline_content').getFullList({
        filter: `userId="${currentUser.id}"`,
        $autoCancel: false
      });

      // Calculate Stats
      const completedLessons = progressRecords.filter(p => p.completionStatus === 'completed').length;
      const totalTime = progressRecords.reduce((acc, curr) => acc + (curr.timeSpentMinutes || 0), 0);
      const avgScore = quizRecords.length > 0 
        ? Math.round(quizRecords.reduce((acc, curr) => acc + curr.quizScore, 0) / quizRecords.length) 
        : 0;

      setStats({
        overallProgress: Math.round((completedLessons / 5) * 100),
        totalTime: Math.round(totalTime / 60 * 10) / 10, // Hours
        avgQuizScore: avgScore,
        lessonsCompleted: completedLessons,
        totalLessons: 5
      });

      // Map Lesson Progress
      const lessons = [1, 2, 3, 4, 5].map(num => {
        const record = progressRecords.find(p => p.lessonNumber === num);
        return {
          id: num,
          title: `Lesson ${num}`,
          progress: record?.completionStatus === 'completed' ? 100 : record?.completionStatus === 'in_progress' ? 50 : 0,
          status: record?.completionStatus || 'not_started'
        };
      });
      setLessonProgress(lessons);

      // Calculate Achievements
      const newAchievements = [];
      if (completedLessons >= 1) newAchievements.push({ id: 'first_lesson', title: 'First Lesson', desc: 'Complete your first lesson', icon: '🚀', earned: true });
      if (completedLessons === 5) newAchievements.push({ id: 'course_complete', title: 'Course Complete', desc: 'Finish the entire course', icon: '🎓', earned: true });
      if (quizRecords.some(q => q.quizScore === 100)) newAchievements.push({ id: 'perfect_score', title: 'Perfect Score', desc: 'Score 100% on a quiz', icon: '💯', earned: true });
      if (offlineRecords.length >= 3) newAchievements.push({ id: 'offline_learner', title: 'Offline Learner', desc: 'Download 3+ items', icon: '💾', earned: true });
      
      // Add locked achievements for display
      if (completedLessons < 5) newAchievements.push({ id: 'course_complete_locked', title: 'Course Complete', desc: 'Finish the entire course', icon: '🎓', earned: false });
      if (!quizRecords.some(q => q.quizScore === 100)) newAchievements.push({ id: 'perfect_score_locked', title: 'Perfect Score', desc: 'Score 100% on a quiz', icon: '💯', earned: false });

      setAchievements(newAchievements.sort((a, b) => (a.earned === b.earned ? 0 : a.earned ? -1 : 1)));

    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMotivationalMessage = () => {
    if (stats.overallProgress === 100) return "Incredible! You've mastered the course!";
    if (stats.overallProgress >= 75) return "Almost there! Finish strong!";
    if (stats.overallProgress >= 50) return "Halfway through! Keep the momentum going.";
    if (stats.overallProgress >= 25) return "Great start! You're building a solid foundation.";
    return "Every expert was once a beginner. Start your journey today!";
  };

  if (loading) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center", darkMode ? "bg-slate-900" : "bg-gray-50")}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen pb-20 p-4 space-y-6 transition-colors duration-300", darkMode ? "bg-slate-900 text-slate-100" : "bg-gray-50 text-slate-900")}>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">My Progress</h1>
        <Button variant="ghost" size="icon" className={darkMode ? "text-slate-300" : "text-gray-500"}>
          <Share2 className="w-5 h-5" />
        </Button>
      </div>

      {/* Motivational Message */}
      <div className={cn("p-4 rounded-lg border-l-4", darkMode ? "bg-slate-800 border-blue-500" : "bg-blue-50 border-blue-500")}>
        <p className={cn("font-medium italic", darkMode ? "text-blue-300" : "text-blue-800")}>"{getMotivationalMessage()}"</p>
      </div>

      {/* Overall Circle */}
      <div className="flex justify-center py-4">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className={darkMode ? "text-slate-800" : "text-gray-200"} />
            <circle 
              cx="96" cy="96" r="80" 
              stroke="currentColor" 
              strokeWidth="12" 
              fill="transparent" 
              strokeDasharray="502" 
              strokeDashoffset={502 - (502 * stats.overallProgress / 100)} 
              className="text-blue-600 transition-all duration-1000 ease-out" 
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-center">
            <span className="text-4xl font-bold">{stats.overallProgress}%</span>
            <p className={cn("text-sm", darkMode ? "text-slate-400" : "text-gray-500")}>Completed</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Card className={darkMode ? "bg-slate-800 border-slate-700" : "bg-white"}>
          <CardContent className="p-4 text-center">
            <Clock className="w-6 h-6 mx-auto text-blue-500 mb-2" />
            <div className={cn("text-xl font-bold", darkMode ? "text-slate-100" : "text-slate-900")}>{stats.totalTime}h</div>
            <p className={cn("text-xs", darkMode ? "text-slate-400" : "text-gray-500")}>Total Time</p>
          </CardContent>
        </Card>
        <Card className={darkMode ? "bg-slate-800 border-slate-700" : "bg-white"}>
          <CardContent className="p-4 text-center">
            <Target className="w-6 h-6 mx-auto text-green-500 mb-2" />
            <div className={cn("text-xl font-bold", darkMode ? "text-slate-100" : "text-slate-900")}>{stats.avgQuizScore}%</div>
            <p className={cn("text-xs", darkMode ? "text-slate-400" : "text-gray-500")}>Avg Quiz Score</p>
          </CardContent>
        </Card>
      </div>

      {/* Lesson Progress */}
      <div>
        <h3 className="font-bold text-lg mb-3">Lesson Breakdown</h3>
        <div className="space-y-3">
          {lessonProgress.map((lesson) => (
            <Card key={lesson.id} className={darkMode ? "bg-slate-800 border-slate-700" : "bg-white"}>
              <CardContent className="p-4">
                <div className="flex justify-between mb-2">
                  <span className={cn("font-medium text-sm", darkMode ? "text-slate-200" : "text-slate-900")}>{lesson.title}</span>
                  <span className={cn("text-xs", darkMode ? "text-slate-400" : "text-gray-500")}>{lesson.progress}%</span>
                </div>
                <Progress value={lesson.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="font-bold text-lg mb-3">Achievements</h3>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((badge, index) => (
            <Card key={index} className={cn("border-none", 
              badge.earned 
                ? "bg-gradient-to-br from-yellow-50 to-orange-50 border border-orange-100" 
                : darkMode ? "bg-slate-800 opacity-50" : "bg-gray-100 opacity-50"
            )}>
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className={cn("font-bold text-sm", badge.earned ? "text-orange-900" : darkMode ? "text-slate-300" : "text-gray-600")}>{badge.title}</p>
                <p className={cn("text-xs mt-1", badge.earned ? "text-orange-700" : darkMode ? "text-slate-500" : "text-gray-500")}>{badge.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button variant="outline" className="w-full gap-2 mt-4">
        <Download className="w-4 h-4" /> Export Progress Report
      </Button>
    </div>
  );
};

export default MobileProgressScreen;