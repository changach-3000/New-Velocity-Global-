import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, LayoutDashboard, BookOpen, CheckSquare, Clock, Award } from 'lucide-react';

import LessonProgressCard from './LessonProgressCard';
import ProgressChart from './ProgressChart';
import StudyStreakTracker from './StudyStreakTracker';
import QuizScoreHistory from './QuizScoreHistory';
import TimeSpentTracker from './TimeSpentTracker';
import BadgeShowcase from './BadgeShowcase';
import useVendorLeasingBadgeTracker from '@/hooks/useVendorLeasingBadgeTracker';

const ProgressTrackingBoard = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [lessons, setLessons] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [quizHistory, setQuizHistory] = useState([]);
  const [activityData, setActivityData] = useState([]);
  
  // Badge hook
  const { earnedBadges, badgeMetadata } = useVendorLeasingBadgeTracker();

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;

      try {
        const [lessonsRes, progressRes, quizRes, activityRes] = await Promise.all([
          pb.collection('vendor_leasing_lessons').getFullList({ sort: 'lessonNumber', $autoCancel: false }),
          pb.collection('vendor_leasing_progress_tracking').getFullList({ 
            filter: `studentId="${currentUser.id}"`,
            $autoCancel: false 
          }),
          pb.collection('vendor_leasing_quiz_history').getFullList({ 
            filter: `studentId="${currentUser.id}"`,
            sort: '-attemptDate',
            $autoCancel: false 
          }),
          pb.collection('vendor_leasing_study_activity').getFullList({ 
            filter: `studentId="${currentUser.id}"`,
            sort: '-activityDate',
            $autoCancel: false 
          })
        ]);

        setLessons(lessonsRes);
        setProgressData(progressRes);
        setQuizHistory(quizRes);
        setActivityData(activityRes);
      } catch (error) {
        console.error("Error fetching progress data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  // Merge lesson data with progress
  const mergedLessons = lessons.map(lesson => {
    const progress = progressData.find(p => p.lessonNumber === lesson.lessonNumber);
    return {
      ...lesson,
      progress: progress || {
        completionStatus: 'not_started',
        quizScore: 0,
        timeSpentMinutes: 0,
        resourcesDownloaded: 0
      }
    };
  });

  // Calculate overall stats
  const completedLessons = mergedLessons.filter(l => l.progress.completionStatus === 'completed').length;
  const overallProgress = Math.round((completedLessons / lessons.length) * 100) || 0;
  
  const lessonCompletionRates = mergedLessons.map(l => ({
    lessonNumber: l.lessonNumber,
    completionPercentage: l.progress.completionStatus === 'completed' ? 100 : l.progress.completionStatus === 'in_progress' ? 50 : 0
  }));

  const timeData = mergedLessons.map(l => ({
    lessonNumber: l.lessonNumber,
    timeSpentMinutes: l.progress.timeSpentMinutes
  }));

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Top Stats Row */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ProgressChart overallProgress={overallProgress} lessonCompletionRates={lessonCompletionRates} />
        </div>
        <div className="md:col-span-1">
          <StudyStreakTracker activityData={activityData} />
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="overview" className="gap-2"><LayoutDashboard className="w-4 h-4" /> Overview</TabsTrigger>
          <TabsTrigger value="lessons" className="gap-2"><BookOpen className="w-4 h-4" /> Lessons</TabsTrigger>
          <TabsTrigger value="quizzes" className="gap-2"><CheckSquare className="w-4 h-4" /> Quizzes</TabsTrigger>
          <TabsTrigger value="time" className="gap-2"><Clock className="w-4 h-4" /> Time</TabsTrigger>
          <TabsTrigger value="badges" className="gap-2"><Award className="w-4 h-4" /> Badges</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Current Module Progress</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mergedLessons.map(lesson => (
              <LessonProgressCard 
                key={lesson.id} 
                lesson={lesson} 
                progress={lesson.progress} 
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="lessons">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {mergedLessons.map(lesson => (
                  <div key={lesson.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-12 rounded-full ${
                        lesson.progress.completionStatus === 'completed' ? 'bg-green-500' : 
                        lesson.progress.completionStatus === 'in_progress' ? 'bg-blue-500' : 'bg-gray-300'
                      }`} />
                      <div>
                        <h4 className="font-bold text-gray-900">{lesson.title}</h4>
                        <p className="text-sm text-gray-500">Module {lesson.lessonNumber}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lesson.progress.completionStatus === 'completed' ? 'bg-green-100 text-green-700' : 
                        lesson.progress.completionStatus === 'in_progress' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {lesson.progress.completionStatus === 'completed' ? 'Completed' : 
                         lesson.progress.completionStatus === 'in_progress' ? 'In Progress' : 'Not Started'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quizzes">
          <QuizScoreHistory quizHistory={quizHistory} lessons={lessons} />
        </TabsContent>

        <TabsContent value="time">
          <TimeSpentTracker timeData={timeData} />
        </TabsContent>

        <TabsContent value="badges">
          <BadgeShowcase earnedBadges={earnedBadges} allBadges={badgeMetadata} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressTrackingBoard;