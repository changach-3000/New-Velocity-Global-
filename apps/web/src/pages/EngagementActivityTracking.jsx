import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { Activity, Clock, TrendingUp, TrendingDown, Minus, AlertTriangle } from 'lucide-react';

const EngagementActivityTracking = () => {
  const { currentUser } = useAuth();
  const [engagementData, setEngagementData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const records = await pb.collection('engagement_activity_tracking').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          $autoCancel: false
        });
        
        if (records.length > 0) setEngagementData(records[0]);
      } catch (error) {
        console.error('Error fetching engagement data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'Increasing': return <TrendingUp className="w-5 h-5 text-green-600" />;
      case 'Decreasing': return <TrendingDown className="w-5 h-5 text-red-600" />;
      default: return <Minus className="w-5 h-5 text-gray-600" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading engagement data...</p>
        </div>
      </div>
    );
  }

  if (!engagementData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-gray-600 text-lg">No engagement data available yet.</p>
        </div>
      </div>
    );
  }

  const activityData = [
    { name: 'Video Watching', hours: engagementData.video_watching_hours || 0, color: 'bg-blue-500' },
    { name: 'Quiz Taking', hours: engagementData.quiz_taking_hours || 0, color: 'bg-green-500' },
    { name: 'Study Guides', hours: engagementData.study_guide_review_hours || 0, color: 'bg-yellow-500' },
    { name: 'Case Studies', hours: engagementData.case_study_work_hours || 0, color: 'bg-purple-500' },
    { name: 'Capstone Project', hours: engagementData.capstone_project_work_hours || 0, color: 'bg-pink-500' },
    { name: 'Reading Lists', hours: engagementData.reading_list_review_hours || 0, color: 'bg-indigo-500' },
    { name: 'Other Activities', hours: engagementData.other_activities_hours || 0, color: 'bg-gray-500' }
  ];

  const totalActivityHours = activityData.reduce((sum, activity) => sum + activity.hours, 0);

  return (
    <>
      <Helmet>
        <title>Engagement Activity Tracking - Learning Platform</title>
        <meta name="description" content="Track your learning engagement and activity patterns" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <Activity className="w-10 h-10 mr-4 text-indigo-600" />
            Engagement Activity Tracking
          </h1>

          {/* Overall Engagement */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overall Engagement</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                <p className="text-sm text-indigo-700 font-medium mb-2">Total Hours</p>
                <p className="text-4xl font-bold text-indigo-900">{engagementData.total_hours_spent || 0}h</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <p className="text-sm text-purple-700 font-medium mb-2">Daily Engagement</p>
                <p className="text-4xl font-bold text-purple-900">{engagementData.average_daily_engagement_minutes || 0}m</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <p className="text-sm text-pink-700 font-medium mb-2">Days Active</p>
                <p className="text-4xl font-bold text-pink-900">{engagementData.days_active || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <p className="text-sm text-green-700 font-medium mb-2">Engagement Rate</p>
                <p className="text-4xl font-bold text-green-900">{engagementData.engagement_rate_percentage || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <p className="text-sm text-blue-700 font-medium mb-2">Trend</p>
                <div className="flex items-center">
                  {getTrendIcon(engagementData.engagement_trend)}
                  <span className="ml-2 text-xl font-bold text-blue-900">{engagementData.engagement_trend || 'Stable'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-indigo-600" />
              Activity Timeline
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-blue-700 mb-1">First Login</p>
                <p className="text-lg font-bold text-blue-900">
                  {engagementData.first_login ? new Date(engagementData.first_login).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-green-700 mb-1">Last Login</p>
                <p className="text-lg font-bold text-green-900">
                  {engagementData.last_login ? new Date(engagementData.last_login).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl">
                <p className="text-sm text-yellow-700 mb-1">Days Since Last Activity</p>
                <p className="text-3xl font-bold text-yellow-900">{engagementData.days_since_last_activity || 0}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-sm text-purple-700 mb-1">Most Active Day</p>
                <p className="text-lg font-bold text-purple-900">{engagementData.most_active_day_of_week || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Activity Breakdown */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Activity Breakdown</h2>
            <div className="space-y-4">
              {activityData.map((activity) => (
                <div key={activity.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{activity.name}</span>
                    <span className="text-sm font-bold text-gray-900">{activity.hours}h ({totalActivityHours > 0 ? Math.round((activity.hours / totalActivityHours) * 100) : 0}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`${activity.color} h-4 rounded-full transition-all`}
                      style={{ width: `${totalActivityHours > 0 ? (activity.hours / totalActivityHours) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Engagement Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Weekly Engagement</h2>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((week) => (
                <div key={week} className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Week {week}</p>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <p className="text-3xl font-bold text-indigo-600">{engagementData[`week_${week}_hours`] || 0}h</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Alerts */}
          {engagementData.low_engagement_warning && (
            <div className="bg-red-50 border-l-4 border-red-500 rounded-2xl shadow-xl p-8">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-red-900 mb-4">Engagement Alert</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-red-700 font-medium mb-2">Days Without Activity</p>
                      <p className="text-3xl font-bold text-red-900">{engagementData.days_without_activity || 0}</p>
                    </div>
                    <div>
                      <p className="text-sm text-red-700 font-medium mb-2">Recommended Action</p>
                      <p className="text-gray-900">{engagementData.recommended_action || 'Resume learning activities'}</p>
                    </div>
                  </div>
                  {engagementData.support_resources && (
                    <div className="mt-4 bg-white p-4 rounded-xl">
                      <p className="text-sm text-gray-700 font-medium mb-2">Support Resources</p>
                      <p className="text-gray-900">{engagementData.support_resources}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EngagementActivityTracking;