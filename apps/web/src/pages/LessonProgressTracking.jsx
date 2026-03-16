import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
// import pb from '@/lib/pocketbaseClient';
import PocketBase from 'pocketbase';
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
import { ChevronDown, ChevronUp, CheckCircle, Circle, Clock, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const LessonProgressTracking = () => {
  const { currentUser } = useAuth();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedLesson, setExpandedLesson] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      if (!currentUser) return;
      
      try {
        const records = await pb.collection('lesson_progress_tracking').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          sort: 'lesson_number',
          $autoCancel: false
        });
        
        setLessons(records);
      } catch (error) {
        console.error('Error fetching lessons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [currentUser]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Not Started': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'Improving': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'Declining': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading lesson progress...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Lesson Progress Tracking - Learning Platform</title>
        <meta name="description" content="Track your progress through each lesson" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Lesson Progress Tracking</h1>

          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Lesson Header */}
                <button
                  onClick={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span className={`w-3 h-3 rounded-full ${getStatusColor(lesson.lesson_status)}`}></span>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{lesson.lesson_title}</h3>
                      <p className="text-sm text-gray-600">Lesson {lesson.lesson_number}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-indigo-600">{lesson.overall_lesson_completion_percentage || 0}%</span>
                    {expandedLesson === lesson.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedLesson === lesson.id && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    {/* Completion Status */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Completion Status</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          {lesson.video_watched ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Circle className="w-5 h-5 text-gray-400" />}
                          <span className="text-sm">Video ({lesson.video_completion_percentage || 0}%)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {lesson.study_guide_completed ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Circle className="w-5 h-5 text-gray-400" />}
                          <span className="text-sm">Study Guide</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {lesson.glossary_reviewed ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Circle className="w-5 h-5 text-gray-400" />}
                          <span className="text-sm">Glossary</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {lesson.case_study_completed ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Circle className="w-5 h-5 text-gray-400" />}
                          <span className="text-sm">Case Study</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {lesson.reading_list_reviewed ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Circle className="w-5 h-5 text-gray-400" />}
                          <span className="text-sm">Reading List</span>
                        </div>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Lesson Performance</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl">
                          <p className="text-sm text-gray-600 mb-1">Quiz Score</p>
                          <p className="text-2xl font-bold text-indigo-600">{lesson.quiz_score || 0}/50</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                          <p className="text-sm text-gray-600 mb-1">Attempts</p>
                          <p className="text-2xl font-bold text-purple-600">{lesson.quiz_attempts || 0}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                          <p className="text-sm text-gray-600 mb-1">Time Spent</p>
                          <p className="text-2xl font-bold text-pink-600">{lesson.time_spent_on_quiz_minutes || 0}m</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                          <p className="text-sm text-gray-600 mb-1">Trend</p>
                          <div className="flex items-center">
                            {getTrendIcon(lesson.quiz_performance_trend)}
                            <span className="ml-2 text-sm font-semibold">{lesson.quiz_performance_trend || 'Stable'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Learning Metrics */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Learning Metrics</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <p className="text-sm text-blue-700 mb-1">Video Time</p>
                          <p className="text-xl font-bold text-blue-900">{lesson.video_watch_time_minutes || 0}m</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl">
                          <p className="text-sm text-green-700 mb-1">Study Guide</p>
                          <p className="text-xl font-bold text-green-900">{lesson.study_guide_time_minutes || 0}m</p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-xl">
                          <p className="text-sm text-yellow-700 mb-1">Glossary</p>
                          <p className="text-xl font-bold text-yellow-900">{lesson.glossary_review_time_minutes || 0}m</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-xl">
                          <p className="text-sm text-purple-700 mb-1">Case Study</p>
                          <p className="text-xl font-bold text-purple-900">{lesson.case_study_time_minutes || 0}m</p>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-xl">
                          <p className="text-sm text-pink-700 mb-1">Total Time</p>
                          <p className="text-xl font-bold text-pink-900">{lesson.total_lesson_time_minutes || 0}m</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-xl">
                          <p className="text-sm text-indigo-700 mb-1">Daily Avg</p>
                          <p className="text-xl font-bold text-indigo-900">{lesson.average_daily_engagement_minutes || 0}m</p>
                        </div>
                      </div>
                    </div>

                    {/* Knowledge Assessment */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Knowledge Assessment</h4>
                      <div className="bg-white p-4 rounded-xl">
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-2">Estimated Mastery Level</p>
                          <div className="flex items-center">
                            <div className="flex-1 bg-gray-200 rounded-full h-4">
                              <div
                                className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all"
                                style={{ width: `${lesson.estimated_mastery_level_percentage || 0}%` }}
                              ></div>
                            </div>
                            <span className="ml-4 text-lg font-bold text-gray-900">{lesson.estimated_mastery_level_percentage || 0}%</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600 mb-1">Mastered</p>
                            <p className="font-semibold text-green-600">{lesson.key_concepts_mastered || 'None yet'}</p>
                          </div>
                          <div>
                            <p className="text-gray-600 mb-1">In Progress</p>
                            <p className="font-semibold text-yellow-600">{lesson.key_concepts_in_progress || 'None'}</p>
                          </div>
                          <div>
                            <p className="text-gray-600 mb-1">Not Addressed</p>
                            <p className="font-semibold text-red-600">{lesson.key_concepts_not_addressed || 'None'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonProgressTracking;