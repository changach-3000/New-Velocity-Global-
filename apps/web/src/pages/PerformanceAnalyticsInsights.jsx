import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { TrendingUp, TrendingDown, Minus, Award, AlertCircle, Lightbulb } from 'lucide-react';

const PerformanceAnalyticsInsights = () => {
  const { currentUser } = useAuth();
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const records = await pb.collection('performance_analytics_insights').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          $autoCancel: false
        });
        
        if (records.length > 0) setAnalyticsData(records[0]);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
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

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'High': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading performance analytics...</p>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-gray-600 text-lg">No analytics data available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Performance Analytics & Insights - Learning Platform</title>
        <meta name="description" content="Comprehensive performance analytics and insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="w-10 h-10 mr-4 text-indigo-600" />
            Performance Analytics & Insights
          </h1>

          {/* Overall Performance Metrics */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overall Performance Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Current GPA</p>
                <p className="text-5xl font-bold text-indigo-600">{analyticsData.current_gpa || 0}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Course Grade</p>
                <p className="text-5xl font-bold text-purple-600">{analyticsData.course_grade || 'N/A'}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Percentile</p>
                <p className="text-5xl font-bold text-green-600">{analyticsData.performance_percentile || 0}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">vs Class Avg</p>
                <p className="text-5xl font-bold text-yellow-600">{analyticsData.performance_vs_class_average_percentage || 0}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Trend</p>
                <div className="flex items-center justify-center mt-2">
                  {getTrendIcon(analyticsData.performance_trend)}
                  <span className="ml-2 text-xl font-bold text-gray-900">{analyticsData.performance_trend || 'Stable'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Strength Areas */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-green-600" />
              Strength Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-sm text-green-700 font-medium mb-2">Strongest Lesson</p>
                <p className="text-xl font-bold text-green-900 mb-1">{analyticsData.strongest_lesson || 'N/A'}</p>
                <p className="text-3xl font-bold text-green-600">{analyticsData.strongest_lesson_mastery_percentage || 0}% Mastery</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-sm text-green-700 font-medium mb-2">Strongest Assessment Type</p>
                <p className="text-xl font-bold text-green-900 mb-1">{analyticsData.strongest_assessment_type || 'N/A'}</p>
                <p className="text-3xl font-bold text-green-600">{analyticsData.strongest_assessment_average_percentage || 0}% Average</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-sm text-green-700 font-medium mb-2">Strongest Skill</p>
                <p className="text-xl font-bold text-green-900 mb-1">{analyticsData.strongest_skill || 'N/A'}</p>
                <p className="text-3xl font-bold text-green-600">{analyticsData.strongest_skill_mastery_percentage || 0}% Mastery</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-sm text-green-700 font-medium mb-2">Strongest Performance Area</p>
                <p className="text-xl font-bold text-green-900">{analyticsData.strongest_performance_area || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Areas for Improvement */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-yellow-600" />
              Areas for Improvement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-sm text-yellow-700 font-medium mb-2">Weakest Lesson</p>
                <p className="text-xl font-bold text-yellow-900 mb-1">{analyticsData.weakest_lesson || 'N/A'}</p>
                <p className="text-3xl font-bold text-yellow-600">{analyticsData.weakest_lesson_mastery_percentage || 0}% Mastery</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-sm text-yellow-700 font-medium mb-2">Weakest Assessment Type</p>
                <p className="text-xl font-bold text-yellow-900 mb-1">{analyticsData.weakest_assessment_type || 'N/A'}</p>
                <p className="text-3xl font-bold text-yellow-600">{analyticsData.weakest_assessment_average_percentage || 0}% Average</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-sm text-yellow-700 font-medium mb-2">Weakest Skill</p>
                <p className="text-xl font-bold text-yellow-900 mb-1">{analyticsData.weakest_skill || 'N/A'}</p>
                <p className="text-3xl font-bold text-yellow-600">{analyticsData.weakest_skill_mastery_percentage || 0}% Mastery</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-sm text-yellow-700 font-medium mb-2">Weakest Performance Area</p>
                <p className="text-xl font-bold text-yellow-900">{analyticsData.weakest_performance_area || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Performance Insights */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Lightbulb className="w-6 h-6 mr-3 text-indigo-600" />
              Performance Insights
            </h2>
            <div className="space-y-4">
              {analyticsData.key_insight_1 && (
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <p className="text-gray-900">{analyticsData.key_insight_1}</p>
                </div>
              )}
              {analyticsData.key_insight_2 && (
                <div className="bg-purple-50 p-6 rounded-xl">
                  <p className="text-gray-900">{analyticsData.key_insight_2}</p>
                </div>
              )}
              {analyticsData.key_insight_3 && (
                <div className="bg-pink-50 p-6 rounded-xl">
                  <p className="text-gray-900">{analyticsData.key_insight_3}</p>
                </div>
              )}
              {analyticsData.recommended_action && (
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-sm text-blue-700 font-medium mb-2">Recommended Action</p>
                  <p className="text-gray-900 font-semibold">{analyticsData.recommended_action}</p>
                </div>
              )}
            </div>
          </div>

          {/* Predictive Analytics */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Predictive Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                <p className="text-sm text-indigo-700 font-medium mb-2">Projected Final Grade</p>
                <p className="text-5xl font-bold text-indigo-900">{analyticsData.projected_final_course_grade || 'N/A'}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <p className="text-sm text-green-700 font-medium mb-2">Probability of Passing</p>
                <p className="text-5xl font-bold text-green-900">{analyticsData.probability_of_passing_percentage || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                <p className="text-sm text-yellow-700 font-medium mb-2">Probability of A Grade</p>
                <p className="text-5xl font-bold text-yellow-900">{analyticsData.probability_of_achieving_a_percentage || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                <p className="text-sm text-red-700 font-medium mb-2">Risk Level</p>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full ${getRiskColor(analyticsData.risk_level)} mr-3`}></span>
                  <p className="text-3xl font-bold text-red-900">{analyticsData.risk_level || 'Low'}</p>
                </div>
              </div>
            </div>
            {analyticsData.recommended_interventions && (
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <p className="text-sm text-gray-700 font-medium mb-2">Recommended Interventions</p>
                <p className="text-gray-900">{analyticsData.recommended_interventions}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceAnalyticsInsights;