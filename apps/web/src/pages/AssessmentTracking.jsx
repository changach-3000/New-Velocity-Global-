import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { TrendingUp, TrendingDown, Minus, Award, Target } from 'lucide-react';

const AssessmentTracking = () => {
  const { currentUser } = useAuth();
  const [quizData, setQuizData] = useState(null);
  const [practiceData, setPracticeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const quizRecords = await pb.collection('quiz_performance_tracking').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          $autoCancel: false
        });
        
        const practiceRecords = await pb.collection('practice_problems_tracking').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          $autoCancel: false
        });
        
        if (quizRecords.length > 0) setQuizData(quizRecords[0]);
        if (practiceRecords.length > 0) setPracticeData(practiceRecords[0]);
      } catch (error) {
        console.error('Error fetching assessment data:', error);
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
          <p className="mt-4 text-gray-600 font-medium">Loading assessment data...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Assessment Tracking - Learning Platform</title>
        <meta name="description" content="Track your quiz and practice performance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Assessment Tracking</h1>

          {/* Quiz Performance */}
          {quizData && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-7 h-7 mr-3 text-indigo-600" />
                Quiz Performance
              </h2>

              {/* Overall Quiz Performance */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Overall Performance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Total Quizzes</p>
                    <p className="text-4xl font-bold text-indigo-600">{quizData.total_quizzes_completed || 0}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Average Score</p>
                    <p className="text-4xl font-bold text-purple-600">{quizData.average_quiz_score || 0}/50</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Highest Score</p>
                    <p className="text-4xl font-bold text-green-600">{quizData.highest_quiz_score || 0}/50</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Completion Rate</p>
                    <p className="text-4xl font-bold text-yellow-600">{quizData.quiz_completion_rate_percentage || 0}%</p>
                  </div>
                </div>
              </div>

              {/* Quiz Performance Trend */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Trend</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <p className="text-sm text-blue-700 font-medium mb-2">Trend</p>
                    <div className="flex items-center">
                      {getTrendIcon(quizData.performance_trend)}
                      <span className="ml-2 text-xl font-bold text-blue-900">{quizData.performance_trend || 'Stable'}</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <p className="text-sm text-green-700 font-medium mb-2">Improvement Rate</p>
                    <p className="text-3xl font-bold text-green-900">{quizData.improvement_rate_percentage || 0}%</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                    <p className="text-sm text-purple-700 font-medium mb-2">Projected Final Score</p>
                    <p className="text-3xl font-bold text-purple-900">{quizData.projected_final_quiz_score || 0}/50</p>
                  </div>
                </div>
              </div>

              {/* Question-Level Analysis */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Question-Level Analysis</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <p className="text-sm text-green-700 mb-1">Correct Answers</p>
                    <p className="text-3xl font-bold text-green-900">{quizData.correct_answers || 0}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl">
                    <p className="text-sm text-red-700 mb-1">Incorrect Answers</p>
                    <p className="text-3xl font-bold text-red-900">{quizData.incorrect_answers || 0}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <p className="text-sm text-yellow-700 mb-1">Skipped Questions</p>
                    <p className="text-3xl font-bold text-yellow-900">{quizData.skipped_questions || 0}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-blue-700 mb-1">Avg Time/Question</p>
                    <p className="text-3xl font-bold text-blue-900">{quizData.average_time_per_question_seconds || 0}s</p>
                  </div>
                </div>
              </div>

              {/* Difficulty Analysis */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Difficulty Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Easy Questions</span>
                      <span className="text-sm font-bold text-green-600">{quizData.easy_questions_correct_percentage || 0}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all"
                        style={{ width: `${quizData.easy_questions_correct_percentage || 0}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Medium Questions</span>
                      <span className="text-sm font-bold text-yellow-600">{quizData.medium_questions_correct_percentage || 0}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-yellow-500 h-3 rounded-full transition-all"
                        style={{ width: `${quizData.medium_questions_correct_percentage || 0}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Hard Questions</span>
                      <span className="text-sm font-bold text-red-600">{quizData.hard_questions_correct_percentage || 0}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-red-500 h-3 rounded-full transition-all"
                        style={{ width: `${quizData.hard_questions_correct_percentage || 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Practice Problems Performance */}
          {practiceData && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-7 h-7 mr-3 text-purple-600" />
                Practice Problems Performance
              </h2>

              {/* Overall Practice Performance */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Overall Performance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Total Problems</p>
                    <p className="text-4xl font-bold text-indigo-600">{practiceData.total_practice_problems || 0}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Completed</p>
                    <p className="text-4xl font-bold text-purple-600">{practiceData.problems_completed || 0}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Average Score</p>
                    <p className="text-4xl font-bold text-green-600">{practiceData.average_score_percentage || 0}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Completion Rate</p>
                    <p className="text-4xl font-bold text-yellow-600">{practiceData.completion_percentage || 0}%</p>
                  </div>
                </div>
              </div>

              {/* Problem Type Analysis */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Problem Type Analysis</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-blue-700 mb-1">Calculation</p>
                    <p className="text-3xl font-bold text-blue-900">{practiceData.calculation_problems_correct_percentage || 0}%</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <p className="text-sm text-green-700 mb-1">Conceptual</p>
                    <p className="text-3xl font-bold text-green-900">{practiceData.conceptual_problems_correct_percentage || 0}%</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <p className="text-sm text-yellow-700 mb-1">Application</p>
                    <p className="text-3xl font-bold text-yellow-900">{practiceData.application_problems_correct_percentage || 0}%</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <p className="text-sm text-purple-700 mb-1">Analysis</p>
                    <p className="text-3xl font-bold text-purple-900">{practiceData.analysis_problems_correct_percentage || 0}%</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AssessmentTracking;