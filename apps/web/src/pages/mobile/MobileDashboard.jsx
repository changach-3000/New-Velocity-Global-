import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMobileAuth } from '@/contexts/MobileAuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import { BookOpen, CheckCircle, Clock, Search, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress.jsx';

const MobileDashboard = () => {
  const { currentUser } = useMobileAuth();
  const [lessons, setLessons] = useState([]);
  const [progress, setProgress] = useState({});
  const [overallProgress, setOverallProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      loadDashboardData();
    }
  }, [currentUser]);

  const loadDashboardData = async () => {
    try {
      // Load lessons
      const lessonRecords = await pb.collection('vendor_leasing_lessons').getFullList({
        sort: 'lessonNumber',
        $autoCancel: false
      });
      setLessons(lessonRecords);

      // Load progress for each lesson
      const progressRecords = await pb.collection('vendor_leasing_progress_tracking').getFullList({
        filter: `studentId = "${currentUser.id}"`,
        $autoCancel: false
      });

      const progressMap = {};
      progressRecords.forEach(record => {
        progressMap[record.lessonNumber] = record;
      });
      setProgress(progressMap);

      // Calculate overall progress
      const completedLessons = progressRecords.filter(p => p.completionStatus === 'completed').length;
      const totalLessons = lessonRecords.length;
      const overall = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
      setOverallProgress(overall);
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lesson.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getLessonProgress = (lessonNumber) => {
    const lessonProgress = progress[lessonNumber];
    if (!lessonProgress) return { status: 'not_started', percentage: 0 };
    
    return {
      status: lessonProgress.completionStatus || 'not_started',
      percentage: lessonProgress.completionStatus === 'completed' ? 100 : 50
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'in_progress':
        return 'text-blue-600';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    if (status === 'completed') {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
    return <BookOpen className="w-5 h-5 text-gray-400" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Vendor Leasing Course</h1>
        <p className="text-blue-100 text-sm mb-4">Mastering Creative Financing to Close Bigger Deals</p>
        
        {/* Overall Progress */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-lg font-bold">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-2 bg-white/20" />
          <div className="flex items-center gap-2 mt-2 text-xs text-blue-100">
            <TrendingUp className="w-4 h-4" />
            <span>{lessons.filter(l => getLessonProgress(l.lessonNumber).status === 'completed').length} of {lessons.length} lessons completed</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
          />
        </div>
      </div>

      {/* Lessons List */}
      <div className="px-4 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Course Lessons</h2>
        {filteredLessons.map((lesson) => {
          const lessonProgress = getLessonProgress(lesson.lessonNumber);
          return (
            <Link
              key={lesson.id}
              to={`/mobile/lesson/${lesson.id}`}
              className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  lessonProgress.status === 'completed' ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {getStatusIcon(lessonProgress.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      Lesson {lesson.lessonNumber}: {lesson.title}
                    </h3>
                    <span className={`text-xs font-medium ${getStatusColor(lessonProgress.status)}`}>
                      {lessonProgress.percentage}%
                    </span>
                  </div>
                  
                  {lesson.description && (
                    <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                      {lesson.description}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    {lesson.duration && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{lesson.duration} min</span>
                      </div>
                    )}
                    <span className="capitalize">{lessonProgress.status.replace('_', ' ')}</span>
                  </div>
                  
                  {lessonProgress.percentage > 0 && lessonProgress.percentage < 100 && (
                    <Progress value={lessonProgress.percentage} className="h-1 mt-2" />
                  )}
                </div>
              </div>
            </Link>
          );
        })}

        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No lessons found</p>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="px-4 mt-6 grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {lessons.filter(l => getLessonProgress(l.lessonNumber).status === 'completed').length}
          </div>
          <div className="text-xs text-gray-600">Lessons Completed</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {lessons.filter(l => getLessonProgress(l.lessonNumber).status === 'in_progress').length}
          </div>
          <div className="text-xs text-gray-600">In Progress</div>
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;