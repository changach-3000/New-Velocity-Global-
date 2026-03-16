import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { TrendingUp, TrendingDown, Minus, FileText, Clock } from 'lucide-react';

const CaseStudyTracking = () => {
  const { currentUser } = useAuth();
  const [caseStudyData, setCaseStudyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const records = await pb.collection('case_study_tracking').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          $autoCancel: false
        });
        
        if (records.length > 0) setCaseStudyData(records[0]);
      } catch (error) {
        console.error('Error fetching case study data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'Improving': return <TrendingUp className="w-5 h-5 text-green-600" />;
      case 'Declining': return <TrendingDown className="w-5 h-5 text-red-600" />;
      default: return <Minus className="w-5 h-5 text-gray-600" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading case study data...</p>
        </div>
      </div>
    );
  }

  if (!caseStudyData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-gray-600 text-lg">No case study data available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Case Study Tracking - Learning Platform</title>
        <meta name="description" content="Track your case study performance and progress" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <FileText className="w-10 h-10 mr-4 text-indigo-600" />
            Case Study Tracking
          </h1>

          {/* Overall Performance */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overall Case Study Performance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Total Case Studies</p>
                <p className="text-4xl font-bold text-indigo-600">{caseStudyData.total_case_studies || 0}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Completed</p>
                <p className="text-4xl font-bold text-purple-600">{caseStudyData.case_studies_completed || 0}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Average Score</p>
                <p className="text-4xl font-bold text-green-600">{caseStudyData.average_score || 0}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Completion Rate</p>
                <p className="text-4xl font-bold text-yellow-600">{caseStudyData.completion_percentage || 0}%</p>
              </div>
            </div>
          </div>

          {/* Case Study by Lesson Breakdown */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Study Scores by Lesson</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <p className="text-sm text-blue-700 font-medium mb-2">Lesson 1</p>
                <p className="text-4xl font-bold text-blue-900">{caseStudyData.lesson_1_case_study_score || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <p className="text-sm text-green-700 font-medium mb-2">Lesson 2</p>
                <p className="text-4xl font-bold text-green-900">{caseStudyData.lesson_2_case_study_score || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                <p className="text-sm text-yellow-700 font-medium mb-2">Lesson 3</p>
                <p className="text-4xl font-bold text-yellow-900">{caseStudyData.lesson_3_case_study_score || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <p className="text-sm text-purple-700 font-medium mb-2">Lesson 4</p>
                <p className="text-4xl font-bold text-purple-900">{caseStudyData.lesson_4_case_study_score || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <p className="text-sm text-pink-700 font-medium mb-2">Lesson 5</p>
                <p className="text-4xl font-bold text-pink-900">{caseStudyData.lesson_5_case_study_score || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                <p className="text-sm text-indigo-700 font-medium mb-2">Master Case Study</p>
                <p className="text-4xl font-bold text-indigo-900">{caseStudyData.master_case_study_score || 0}%</p>
              </div>
            </div>
          </div>

          {/* Performance Trend */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Trend</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <p className="text-sm text-blue-700 font-medium mb-2">Trend</p>
                <div className="flex items-center">
                  {getTrendIcon(caseStudyData.performance_trend)}
                  <span className="ml-2 text-xl font-bold text-blue-900">{caseStudyData.performance_trend || 'Stable'}</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <p className="text-sm text-green-700 font-medium mb-2">Improvement Rate</p>
                <p className="text-3xl font-bold text-green-900">{caseStudyData.improvement_rate_percentage || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <p className="text-sm text-purple-700 font-medium mb-2">Projected Final Score</p>
                <p className="text-3xl font-bold text-purple-900">{caseStudyData.projected_final_case_study_score || 0}%</p>
              </div>
            </div>
          </div>

          {/* Exercise-Level Analysis */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exercise-Level Analysis</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-blue-700 mb-1">Exercises Completed</p>
                <p className="text-3xl font-bold text-blue-900">{caseStudyData.practical_exercises_completed || 0}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-green-700 mb-1">Avg Exercise Score</p>
                <p className="text-3xl font-bold text-green-900">{caseStudyData.average_exercise_score || 0}%</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl">
                <p className="text-sm text-yellow-700 mb-1">Questions Answered</p>
                <p className="text-3xl font-bold text-yellow-900">{caseStudyData.discussion_questions_answered || 0}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-sm text-purple-700 mb-1">Solutions Reviewed</p>
                <p className="text-3xl font-bold text-purple-900">{caseStudyData.solutions_reviewed || 0}</p>
              </div>
            </div>
          </div>

          {/* Time Analysis */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-indigo-600" />
              Time Analysis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                <p className="text-sm text-indigo-700 font-medium mb-2">Total Time</p>
                <p className="text-3xl font-bold text-indigo-900">{caseStudyData.total_time_on_case_studies_hours || 0}h</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <p className="text-sm text-purple-700 font-medium mb-2">Avg Time/Case Study</p>
                <p className="text-3xl font-bold text-purple-900">{caseStudyData.average_time_per_case_study_hours || 0}h</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <p className="text-sm text-pink-700 font-medium mb-2">Time Trend</p>
                <div className="flex items-center">
                  {getTrendIcon(caseStudyData.time_trend)}
                  <span className="ml-2 text-xl font-bold text-pink-900">{caseStudyData.time_trend || 'Stable'}</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <p className="text-sm text-blue-700 font-medium mb-2">Est. Time to Complete</p>
                <p className="text-3xl font-bold text-blue-900">{caseStudyData.estimated_time_to_completion_hours || 0}h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyTracking;