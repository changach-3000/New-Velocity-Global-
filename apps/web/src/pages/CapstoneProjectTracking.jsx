import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { Award, Calendar, CheckCircle, Circle, MessageSquare } from 'lucide-react';

const CapstoneProjectTracking = () => {
  const { currentUser } = useAuth();
  const [capstoneData, setCapstoneData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const records = await pb.collection('capstone_project_tracking').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          $autoCancel: false
        });
        
        if (records.length > 0) setCapstoneData(records[0]);
      } catch (error) {
        console.error('Error fetching capstone data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Graded': return 'bg-green-500';
      case 'Submitted': return 'bg-blue-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Not Started': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading capstone project data...</p>
        </div>
      </div>
    );
  }

  if (!capstoneData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-gray-600 text-lg">No capstone project data available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Capstone Project Tracking - Learning Platform</title>
        <meta name="description" content="Track your capstone project progress and deliverables" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="w-10 h-10 mr-4 text-indigo-600" />
            Capstone Project Tracking
          </h1>

          {/* Overall Status */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Overall Capstone Status</h2>
              <span className={`px-4 py-2 rounded-full text-white font-semibold ${getStatusColor(capstoneData.project_status)}`}>
                {capstoneData.project_status || 'Not Started'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                <p className="text-sm text-indigo-700 font-medium mb-2">Overall Completion</p>
                <p className="text-4xl font-bold text-indigo-900">{capstoneData.overall_completion_percentage || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <p className="text-sm text-purple-700 font-medium mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Est. Completion
                </p>
                <p className="text-lg font-bold text-purple-900">
                  {capstoneData.estimated_completion_date ? new Date(capstoneData.estimated_completion_date).toLocaleDateString() : 'Not set'}
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <p className="text-sm text-pink-700 font-medium mb-2">Days Remaining</p>
                <p className="text-4xl font-bold text-pink-900">{capstoneData.days_remaining || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <p className="text-sm text-green-700 font-medium mb-2">On Schedule</p>
                <div className="flex items-center">
                  {capstoneData.on_schedule ? (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  ) : (
                    <Circle className="w-8 h-8 text-red-600" />
                  )}
                  <span className="ml-2 text-xl font-bold text-green-900">{capstoneData.on_schedule ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deliverable Completion Status */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Deliverable Completion Status</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((part) => (
                <div key={part} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <p className="text-sm text-blue-700 font-medium mb-2">Part {part}</p>
                  <div className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-blue-600">Completion</span>
                      <span className="text-xs font-bold text-blue-900">{capstoneData[`part_${part}_completion_percentage`] || 0}%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${capstoneData[`part_${part}_completion_percentage`] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Scoring */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Capstone Scoring</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-blue-700 mb-1">Part 1 Score</p>
                <p className="text-3xl font-bold text-blue-900">{capstoneData.part_1_score || 0}/20</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-green-700 mb-1">Part 2 Score</p>
                <p className="text-3xl font-bold text-green-900">{capstoneData.part_2_score || 0}/20</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl">
                <p className="text-sm text-yellow-700 mb-1">Part 3 Score</p>
                <p className="text-3xl font-bold text-yellow-900">{capstoneData.part_3_score || 0}/20</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-sm text-purple-700 mb-1">Part 4 Score</p>
                <p className="text-3xl font-bold text-purple-900">{capstoneData.part_4_score || 0}/15</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl">
                <p className="text-sm text-pink-700 mb-1">Part 5 Score</p>
                <p className="text-3xl font-bold text-pink-900">{capstoneData.part_5_score || 0}/15</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl">
                <p className="text-sm text-indigo-700 mb-1">Part 6 Score</p>
                <p className="text-3xl font-bold text-indigo-900">{capstoneData.part_6_score || 0}/10</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                <p className="text-sm text-indigo-700 font-medium mb-2">Total Capstone Score</p>
                <p className="text-5xl font-bold text-indigo-900">{capstoneData.total_capstone_score || 0}/100</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <p className="text-sm text-green-700 font-medium mb-2">Capstone Grade</p>
                <p className="text-5xl font-bold text-green-900">{capstoneData.capstone_grade || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Capstone Timeline Progress */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Capstone Timeline Progress (16 Weeks)</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { weeks: '1-2', field: 'week_1_2_completion_percentage' },
                { weeks: '3-4', field: 'week_3_4_completion_percentage' },
                { weeks: '5-6', field: 'week_5_6_completion_percentage' },
                { weeks: '7-8', field: 'week_7_8_completion_percentage' },
                { weeks: '9-10', field: 'week_9_10_completion_percentage' },
                { weeks: '11-12', field: 'week_11_12_completion_percentage' },
                { weeks: '13-14', field: 'week_13_14_completion_percentage' },
                { weeks: '15', field: 'week_15_completion_percentage' },
                { weeks: '16', field: 'week_16_completion_percentage' }
              ].map((week) => (
                <div key={week.weeks} className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700 mb-2">Week {week.weeks}</p>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-indigo-600 h-3 rounded-full transition-all"
                      style={{ width: `${capstoneData[week.field] || 0}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 text-right">{capstoneData[week.field] || 0}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Feedback */}
          {capstoneData.instructor_feedback_received && (
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-indigo-600" />
                Capstone Feedback
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-sm text-blue-700 font-medium mb-2">Feedback Date</p>
                  <p className="text-lg font-bold text-blue-900">
                    {capstoneData.feedback_date ? new Date(capstoneData.feedback_date).toLocaleDateString() : 'Not available'}
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <p className="text-sm text-green-700 font-medium mb-2">Revision Deadline</p>
                  <p className="text-lg font-bold text-green-900">
                    {capstoneData.revision_deadline ? new Date(capstoneData.revision_deadline).toLocaleDateString() : 'Not set'}
                  </p>
                </div>
              </div>
              {capstoneData.feedback_summary && (
                <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-700 font-medium mb-2">Feedback Summary</p>
                  <p className="text-gray-900">{capstoneData.feedback_summary}</p>
                </div>
              )}
              {capstoneData.revision_requests && (
                <div className="mt-4 bg-yellow-50 p-6 rounded-xl">
                  <p className="text-sm text-yellow-700 font-medium mb-2">Revision Requests</p>
                  <p className="text-gray-900">{capstoneData.revision_requests}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CapstoneProjectTracking;