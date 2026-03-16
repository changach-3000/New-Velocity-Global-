import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Award, BookOpen, BarChart2, Activity } from 'lucide-react';

// Import sub-components
import LessonProgressCard from '@/components/LessonProgressCard';
import QuizPerformanceChart from '@/components/QuizPerformanceChart';
import StudyTimeAnalytics from '@/components/StudyTimeAnalytics';
import AchievementsBadges from '@/components/AchievementsBadges';
import MilestoneTracker from '@/components/MilestoneTracker';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import EngagementMetrics from '@/components/EngagementMetrics';
import PersonalizedRecommendations from '@/components/PersonalizedRecommendations';

const StudentProgressDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Try to fetch dashboard for current user
        let records = [];
        if (pb.authStore.isValid) {
          records = await pb.collection('student_progress_dashboards').getList(1, 1, {
            filter: `student_id="${pb.authStore.model.id}"`,
            expand: 'student_id',
            $autoCancel: false
          });
        }

        // Fallback to demo data if no user record found (for demonstration purposes)
        if (!records.items || records.items.length === 0) {
          records = await pb.collection('student_progress_dashboards').getList(1, 1, {
            sort: '-created',
            expand: 'student_id',
            $autoCancel: false
          });
        }

        if (records.items.length > 0) {
          setDashboardData(records.items[0]);
        }
      } catch (error) {
        console.error("Error fetching dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading dashboard...</div>;
  }

  // Mock data for charts/components if not fully populated in DB
  const mockLessonData = [
    { id: 1, number: 1, title: 'Fundamentals of Leasing', status: 'Completed', progress: 100, timeSpent: '45m', lastAccessed: '2023-10-15' },
    { id: 2, number: 2, title: 'Depreciation Strategies', status: 'Completed', progress: 100, timeSpent: '55m', lastAccessed: '2023-10-16' },
    { id: 3, number: 3, title: 'Interest Deduction', status: 'Completed', progress: 100, timeSpent: '50m', lastAccessed: '2023-10-18' },
    { id: 4, number: 4, title: 'Lease Classification', status: 'In Progress', progress: 65, timeSpent: '30m', lastAccessed: '2023-10-20' },
    { id: 5, number: 5, title: 'Sale-Leaseback', status: 'Not Started', progress: 0, timeSpent: '0m', lastAccessed: null },
    { id: 6, number: 6, title: 'Pass-Through Entities', status: 'Not Started', progress: 0, timeSpent: '0m', lastAccessed: null },
    { id: 7, number: 7, title: 'Compliance & Audit', status: 'Not Started', progress: 0, timeSpent: '0m', lastAccessed: null },
    { id: 8, number: 8, title: 'Advanced Strategies', status: 'Not Started', progress: 0, timeSpent: '0m', lastAccessed: null },
  ];

  const mockQuizData = [
    { lesson: 1, score: 85, average: 78 },
    { lesson: 2, score: 92, average: 75 },
    { lesson: 3, score: 78, average: 72 },
    { lesson: 4, score: 65, average: 70 }, // Current weak area
  ];

  const mockStudyData = {
    totalHours: dashboardData?.total_hours_spent || 12.5,
    dailyAverage: '45m',
    activeDays: 14,
    streak: 5,
    videoTime: 45,
    guideTime: 25,
    quizTime: 15,
    caseTime: 10,
    readingTime: 5
  };

  const mockMetrics = {
    avgQuizScore: 80,
    studyGuideCompletion: 75,
    caseStudyScore: 88,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Helmet>
        <title>Student Dashboard - Tax Optimization Course</title>
      </Helmet>

      {/* Header Section */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-blue-100">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${dashboardData?.id || 'student'}`} />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Welcome back, Student!</h1>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Tax Optimization Course</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Enrolled: Oct 2023</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">View Profile</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Resume Learning</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="bg-white p-1 border shadow-sm rounded-lg grid grid-cols-3 md:grid-cols-6 h-auto">
            <TabsTrigger value="overview" className="py-2">Overview</TabsTrigger>
            <TabsTrigger value="lessons" className="py-2">Lessons</TabsTrigger>
            <TabsTrigger value="performance" className="py-2">Performance</TabsTrigger>
            <TabsTrigger value="analytics" className="py-2">Analytics</TabsTrigger>
            <TabsTrigger value="achievements" className="py-2">Achievements</TabsTrigger>
            <TabsTrigger value="engagement" className="py-2">Engagement</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8 animate-in fade-in-50 duration-500">
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-blue-100 font-medium">Overall Progress</p>
                      <h3 className="text-4xl font-bold mt-1">{dashboardData?.overall_progress_percentage || 45}%</h3>
                    </div>
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <Progress value={dashboardData?.overall_progress_percentage || 45} className="h-2 bg-blue-900/30" indicatorClassName="bg-white" />
                  <p className="text-xs text-blue-100 mt-3">4/8 Lessons Completed</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 font-medium">Current Grade</p>
                      <h3 className="text-4xl font-bold text-slate-800 mt-1">{dashboardData?.current_grade || 'B+'}</h3>
                    </div>
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Top 15%</Badge>
                    <span className="text-gray-500">of class</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 font-medium">Study Time</p>
                      <h3 className="text-4xl font-bold text-slate-800 mt-1">{dashboardData?.total_hours_spent || 12}h</h3>
                    </div>
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Avg. {dashboardData?.average_daily_engagement_minutes || 45}m / day</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <MilestoneTracker currentMilestone={3} />
                <PerformanceMetrics metrics={mockMetrics} />
                
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Lessons</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {mockLessonData.slice(0, 4).map(lesson => (
                      <LessonProgressCard key={lesson.id} lesson={lesson} onClick={() => {}} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <PersonalizedRecommendations />
                <AchievementsBadges earnedBadges={['first_lesson', 'consistent', 'speed_learner']} />
                <EngagementMetrics />
              </div>
            </div>
          </TabsContent>

          {/* Lessons Tab */}
          <TabsContent value="lessons" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">Course Curriculum Progress</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Filter: All</Button>
                <Button variant="outline" size="sm">Sort: Number</Button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockLessonData.map(lesson => (
                <LessonProgressCard key={lesson.id} lesson={lesson} onClick={() => {}} />
              ))}
            </div>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <QuizPerformanceChart data={mockQuizData} />
              <StudyTimeAnalytics studyData={mockStudyData} />
            </div>
            <PerformanceMetrics metrics={mockMetrics} />
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <StudyTimeAnalytics studyData={mockStudyData} />
              <EngagementMetrics />
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <AchievementsBadges earnedBadges={['first_lesson', 'consistent', 'speed_learner']} />
          </TabsContent>

          {/* Engagement Tab */}
          <TabsContent value="engagement">
            <EngagementMetrics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentProgressDashboard;