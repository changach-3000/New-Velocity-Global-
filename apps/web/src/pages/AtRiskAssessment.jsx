import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { AlertTriangle, TrendingUp, TrendingDown, Minus, CheckCircle, XCircle, Calendar } from 'lucide-react';

const AtRiskAssessment = () => {
  const { currentUser } = useAuth();
  const [riskData, setRiskData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const records = await pb.collection('at_risk_assessment').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          $autoCancel: false
        });
        
        if (records.length > 0) setRiskData(records[0]);
      } catch (error) {
        console.error('Error fetching risk assessment data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'High': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'Increasing': return <TrendingUp className="w-5 h-5 text-red-600" />;
      case 'Decreasing': return <TrendingDown className="w-5 h-5 text-green-600" />;
      default: return <Minus className="w-5 h-5 text-gray-600" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading risk assessment...</p>
        </div>
      </div>
    );
  }

  if (!riskData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-gray-600 text-lg">No risk assessment data available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>At-Risk Assessment - Learning Platform</title>
        <meta name="description" content="Comprehensive risk assessment and intervention recommendations" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <AlertTriangle className="w-10 h-10 mr-4 text-yellow-600" />
            At-Risk Assessment
          </h1>

          {/* Overall Risk Level */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Overall Risk Level</h2>
              <span className={`px-6 py-3 rounded-full text-white font-bold text-xl ${getRiskColor(riskData.overall_risk_level)}`}>
                {riskData.overall_risk_level || 'Low'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                <p className="text-sm text-red-700 font-medium mb-2">Risk Score</p>
                <div className="flex items-center">
                  <p className="text-5xl font-bold text-red-900">{riskData.risk_score || 0}</p>
                  <span className="text-2xl text-red-700 ml-2">/100</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                <p className="text-sm text-yellow-700 font-medium mb-2">Risk Trend</p>
                <div className="flex items-center">
                  {getTrendIcon(riskData.risk_trend)}
                  <span className="ml-2 text-xl font-bold text-yellow-900">{riskData.risk_trend || 'Stable'}</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <p className="text-sm text-blue-700 font-medium mb-2">Recommended Action</p>
                <p className="text-xl font-bold text-blue-900">{riskData.recommended_action || 'None'}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={riskData.risk_score >= 70 ? '#ef4444' : riskData.risk_score >= 40 ? '#eab308' : '#22c55e'}
                      strokeWidth="8"
                      strokeDasharray={`${(riskData.risk_score || 0) * 2.51} 251`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-900">{riskData.risk_score || 0}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Factors */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Factors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${riskData.low_engagement_risk ? 'bg-red-50 border-2 border-red-300' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Low Engagement Risk</p>
                  {riskData.low_engagement_risk ? <XCircle className="w-6 h-6 text-red-600" /> : <CheckCircle className="w-6 h-6 text-green-600" />}
                </div>
                <p className="text-sm text-gray-600">Days without activity: {riskData.days_without_activity || 0}</p>
              </div>

              <div className={`p-6 rounded-xl ${riskData.low_performance_risk ? 'bg-red-50 border-2 border-red-300' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Low Performance Risk</p>
                  {riskData.low_performance_risk ? <XCircle className="w-6 h-6 text-red-600" /> : <CheckCircle className="w-6 h-6 text-green-600" />}
                </div>
                <p className="text-sm text-gray-600">Current score: {riskData.current_score_percentage || 0}%</p>
              </div>

              <div className={`p-6 rounded-xl ${riskData.declining_performance_risk ? 'bg-red-50 border-2 border-red-300' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Declining Performance Risk</p>
                  {riskData.declining_performance_risk ? <XCircle className="w-6 h-6 text-red-600" /> : <CheckCircle className="w-6 h-6 text-green-600" />}
                </div>
                <p className="text-sm text-gray-600">Trend: {riskData.performance_trend_percentage_per_week || 0}% per week</p>
              </div>

              <div className={`p-6 rounded-xl ${riskData.incomplete_assignments_risk ? 'bg-red-50 border-2 border-red-300' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Incomplete Assignments Risk</p>
                  {riskData.incomplete_assignments_risk ? <XCircle className="w-6 h-6 text-red-600" /> : <CheckCircle className="w-6 h-6 text-green-600" />}
                </div>
                <p className="text-sm text-gray-600">Deliverables completed: {riskData.deliverables_completed || 0}</p>
              </div>

              <div className={`p-6 rounded-xl ${riskData.low_quiz_scores_risk ? 'bg-red-50 border-2 border-red-300' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Low Quiz Scores Risk</p>
                  {riskData.low_quiz_scores_risk ? <XCircle className="w-6 h-6 text-red-600" /> : <CheckCircle className="w-6 h-6 text-green-600" />}
                </div>
                <p className="text-sm text-gray-600">Average quiz score: {riskData.average_quiz_score_percentage || 0}%</p>
              </div>

              <div className={`p-6 rounded-xl ${riskData.missed_deadlines_risk ? 'bg-red-50 border-2 border-red-300' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Missed Deadlines Risk</p>
                  {riskData.missed_deadlines_risk ? <XCircle className="w-6 h-6 text-red-600" /> : <CheckCircle className="w-6 h-6 text-green-600" />}
                </div>
                <p className="text-sm text-gray-600">Missed deadlines: {riskData.missed_deadlines_count || 0}</p>
              </div>
            </div>
          </div>

          {/* Risk Indicators */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Indicators</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Engagement Risk</p>
                <span className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${getRiskColor(riskData.engagement_risk_level)}`}>
                  {riskData.engagement_risk_level || 'Low'}
                </span>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Performance Risk</p>
                <span className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${getRiskColor(riskData.performance_risk_level)}`}>
                  {riskData.performance_risk_level || 'Low'}
                </span>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Completion Risk</p>
                <span className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${getRiskColor(riskData.completion_risk_level)}`}>
                  {riskData.completion_risk_level || 'Low'}
                </span>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Motivation Risk</p>
                <span className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${getRiskColor(riskData.motivation_risk_level)}`}>
                  {riskData.motivation_risk_level || 'Low'}
                </span>
              </div>
            </div>
          </div>

          {/* Intervention Recommendations */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intervention Recommendations</h2>
            <div className="space-y-4">
              {riskData.intervention_recommendation_1 && (
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-gray-900 font-semibold">{riskData.intervention_recommendation_1}</p>
                </div>
              )}
              {riskData.intervention_recommendation_2 && (
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <p className="text-gray-900 font-semibold">{riskData.intervention_recommendation_2}</p>
                </div>
              )}
              {riskData.intervention_recommendation_3 && (
                <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500">
                  <p className="text-gray-900 font-semibold">{riskData.intervention_recommendation_3}</p>
                </div>
              )}
            </div>

            {riskData.support_resources && (
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <p className="text-sm text-gray-700 font-medium mb-2">Support Resources</p>
                <p className="text-gray-900">{riskData.support_resources}</p>
              </div>
            )}

            {riskData.follow_up_date && (
              <div className="mt-6 bg-indigo-50 p-6 rounded-xl flex items-center">
                <Calendar className="w-6 h-6 text-indigo-600 mr-3" />
                <div>
                  <p className="text-sm text-indigo-700 font-medium">Follow-up Date</p>
                  <p className="text-lg font-bold text-indigo-900">{new Date(riskData.follow_up_date).toLocaleDateString()}</p>
                </div>
              </div>
            )}
          </div>

          {/* Support Resources Availability */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Resources Availability</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className={`p-4 rounded-xl text-center ${riskData.tutoring_available ? 'bg-green-50' : 'bg-gray-50'}`}>
                {riskData.tutoring_available ? <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" /> : <XCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />}
                <p className="text-sm font-medium text-gray-700">Tutoring</p>
              </div>
              <div className={`p-4 rounded-xl text-center ${riskData.office_hours_available ? 'bg-green-50' : 'bg-gray-50'}`}>
                {riskData.office_hours_available ? <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" /> : <XCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />}
                <p className="text-sm font-medium text-gray-700">Office Hours</p>
              </div>
              <div className={`p-4 rounded-xl text-center ${riskData.study_groups_available ? 'bg-green-50' : 'bg-gray-50'}`}>
                {riskData.study_groups_available ? <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" /> : <XCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />}
                <p className="text-sm font-medium text-gray-700">Study Groups</p>
              </div>
              <div className={`p-4 rounded-xl text-center ${riskData.counseling_available ? 'bg-green-50' : 'bg-gray-50'}`}>
                {riskData.counseling_available ? <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" /> : <XCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />}
                <p className="text-sm font-medium text-gray-700">Counseling</p>
              </div>
              <div className={`p-4 rounded-xl text-center ${riskData.technical_support_available ? 'bg-green-50' : 'bg-gray-50'}`}>
                {riskData.technical_support_available ? <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" /> : <XCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />}
                <p className="text-sm font-medium text-gray-700">Tech Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AtRiskAssessment;