import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { Users, TrendingUp } from 'lucide-react';

const PeerComparisonAnalytics = () => {
  const { currentUser } = useAuth();
  const [comparisonData, setComparisonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const records = await pb.collection('peer_comparison_analytics').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          $autoCancel: false
        });
        
        if (records.length > 0) setComparisonData(records[0]);
      } catch (error) {
        console.error('Error fetching comparison data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading peer comparison data...</p>
        </div>
      </div>
    );
  }

  if (!comparisonData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-gray-600 text-lg">No peer comparison data available yet.</p>
        </div>
      </div>
    );
  }

  const lessons = [
    { number: 1, student: comparisonData.lesson_1_student_percentage || 0, classAvg: comparisonData.lesson_1_class_average_percentage || 0 },
    { number: 2, student: comparisonData.lesson_2_student_percentage || 0, classAvg: comparisonData.lesson_2_class_average_percentage || 0 },
    { number: 3, student: comparisonData.lesson_3_student_percentage || 0, classAvg: comparisonData.lesson_3_class_average_percentage || 0 },
    { number: 4, student: comparisonData.lesson_4_student_percentage || 0, classAvg: comparisonData.lesson_4_class_average_percentage || 0 },
    { number: 5, student: comparisonData.lesson_5_student_percentage || 0, classAvg: comparisonData.lesson_5_class_average_percentage || 0 }
  ];

  return (
    <>
      <Helmet>
        <title>Peer Comparison Analytics - Learning Platform</title>
        <meta name="description" content="Compare your performance with class peers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <Users className="w-10 h-10 mr-4 text-indigo-600" />
            Peer Comparison Analytics
          </h1>

          {/* Class Performance Comparison */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Class Performance Comparison</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Your Score</p>
                <p className="text-5xl font-bold text-indigo-600">{comparisonData.student_current_score || 0}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Class Average</p>
                <p className="text-5xl font-bold text-purple-600">{comparisonData.class_average_score || 0}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Class Median</p>
                <p className="text-5xl font-bold text-green-600">{comparisonData.class_median_score || 0}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Your Percentile</p>
                <p className="text-5xl font-bold text-yellow-600">{comparisonData.student_percentile_rank || 0}%</p>
              </div>
            </div>
          </div>

          {/* Lesson Performance Comparison */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Lesson Performance Comparison</h2>
            <div className="space-y-6">
              {lessons.map((lesson) => (
                <div key={lesson.number}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Lesson {lesson.number}</span>
                    <div className="flex space-x-4">
                      <span className="text-sm text-indigo-600 font-semibold">You: {lesson.student}%</span>
                      <span className="text-sm text-gray-600">Class: {lesson.classAvg}%</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-6">
                      <div
                        className="bg-gray-400 h-6 rounded-full"
                        style={{ width: `${lesson.classAvg}%` }}
                      ></div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-6">
                      <div
                        className="bg-indigo-600 h-6 rounded-full"
                        style={{ width: `${lesson.student}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Type Comparison */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment Type Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-sm text-blue-700 font-medium mb-2">Quizzes</p>
                <p className="text-3xl font-bold text-blue-900 mb-1">{comparisonData.quizzes_student_percentage || 0}%</p>
                <p className="text-sm text-gray-600">Class: {comparisonData.quizzes_class_average_percentage || 0}%</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-sm text-green-700 font-medium mb-2">Practice</p>
                <p className="text-3xl font-bold text-green-900 mb-1">{comparisonData.practice_student_percentage || 0}%</p>
                <p className="text-sm text-gray-600">Class: {comparisonData.practice_class_average_percentage || 0}%</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-sm text-yellow-700 font-medium mb-2">Case Studies</p>
                <p className="text-3xl font-bold text-yellow-900 mb-1">{comparisonData.case_studies_student_percentage || 0}%</p>
                <p className="text-sm text-gray-600">Class: {comparisonData.case_studies_class_average_percentage || 0}%</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="text-sm text-purple-700 font-medium mb-2">Capstone</p>
                <p className="text-3xl font-bold text-purple-900 mb-1">{comparisonData.capstone_student_score || 0}%</p>
                <p className="text-sm text-gray-600">Class: {comparisonData.capstone_class_average_score || 0}%</p>
              </div>
            </div>
          </div>

          {/* Engagement Comparison */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-indigo-600" />
              Engagement Comparison
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-indigo-50 p-6 rounded-xl">
                <p className="text-sm text-indigo-700 font-medium mb-2">Total Hours</p>
                <p className="text-3xl font-bold text-indigo-900 mb-1">{comparisonData.student_total_hours || 0}h</p>
                <p className="text-sm text-gray-600">Class: {comparisonData.class_average_hours || 0}h</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="text-sm text-purple-700 font-medium mb-2">Daily Engagement</p>
                <p className="text-3xl font-bold text-purple-900 mb-1">{comparisonData.student_daily_engagement_minutes || 0}m</p>
                <p className="text-sm text-gray-600">Class: {comparisonData.class_average_daily_engagement_minutes || 0}m</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <p className="text-sm text-pink-700 font-medium mb-2">Activity Days</p>
                <p className="text-3xl font-bold text-pink-900 mb-1">{comparisonData.student_activity_days || 0}</p>
                <p className="text-sm text-gray-600">Class: {comparisonData.class_average_activity_days || 0}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-sm text-green-700 font-medium mb-2">Engagement Percentile</p>
                <p className="text-3xl font-bold text-green-900">{comparisonData.student_engagement_percentile || 0}%</p>
              </div>
            </div>
          </div>

          {/* Performance Distribution */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Distribution</h2>
            <div className="space-y-4">
              {[
                { grade: 'A', percentage: comparisonData.a_grade_percentage_of_class || 0, color: 'bg-green-500' },
                { grade: 'B', percentage: comparisonData.b_grade_percentage_of_class || 0, color: 'bg-blue-500' },
                { grade: 'C', percentage: comparisonData.c_grade_percentage_of_class || 0, color: 'bg-yellow-500' },
                { grade: 'D', percentage: comparisonData.d_grade_percentage_of_class || 0, color: 'bg-orange-500' },
                { grade: 'F', percentage: comparisonData.f_grade_percentage_of_class || 0, color: 'bg-red-500' }
              ].map((grade) => (
                <div key={grade.grade}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Grade {grade.grade}</span>
                    <span className="text-sm font-bold text-gray-900">{grade.percentage}% of class</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`${grade.color} h-4 rounded-full transition-all`}
                      style={{ width: `${grade.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {comparisonData.student_position_in_class && (
              <div className="mt-6 bg-indigo-50 p-6 rounded-xl">
                <p className="text-sm text-indigo-700 font-medium mb-2">Your Position in Class</p>
                <p className="text-2xl font-bold text-indigo-900">{comparisonData.student_position_in_class}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PeerComparisonAnalytics;