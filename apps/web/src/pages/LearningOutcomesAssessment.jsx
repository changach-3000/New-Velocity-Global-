import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { Target, Award } from 'lucide-react';

const LearningOutcomesAssessment = () => {
  const { currentUser } = useAuth();
  const [outcomesData, setOutcomesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        const records = await pb.collection('learning_outcomes_assessment').getFullList({
          filter: `dashboard_id = "${currentUser.id}"`,
          $autoCancel: false
        });
        
        if (records.length > 0) setOutcomesData(records[0]);
      } catch (error) {
        console.error('Error fetching learning outcomes data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  const getMasteryColor = (percentage) => {
    if (percentage >= 75) return 'text-green-600 bg-green-50';
    if (percentage >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getMasteryBarColor = (percentage) => {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading learning outcomes data...</p>
        </div>
      </div>
    );
  }

  if (!outcomesData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-gray-600 text-lg">No learning outcomes data available yet.</p>
        </div>
      </div>
    );
  }

  const lessons = [
    {
      number: 1,
      title: 'Lease Accounting Fundamentals',
      outcomes: [
        { name: 'Lease Accounting', mastery: outcomesData.lesson_1_lease_accounting_mastery_percentage || 0 },
        { name: 'ROU Calculation', mastery: outcomesData.lesson_1_rou_calculation_mastery_percentage || 0 },
        { name: 'Financial Statements', mastery: outcomesData.lesson_1_financial_statements_mastery_percentage || 0 },
        { name: 'Documentation', mastery: outcomesData.lesson_1_documentation_mastery_percentage || 0 }
      ],
      overall: outcomesData.lesson_1_overall_mastery_percentage || 0
    },
    {
      number: 2,
      title: 'Lease vs Buy Analysis',
      outcomes: [
        { name: 'Lease Analysis', mastery: outcomesData.lesson_2_lease_analysis_mastery_percentage || 0 },
        { name: 'NPV & IRR', mastery: outcomesData.lesson_2_npv_irr_mastery_percentage || 0 },
        { name: 'Sensitivity Analysis', mastery: outcomesData.lesson_2_sensitivity_analysis_mastery_percentage || 0 },
        { name: 'Decision Making', mastery: outcomesData.lesson_2_decision_making_mastery_percentage || 0 }
      ],
      overall: outcomesData.lesson_2_overall_mastery_percentage || 0
    },
    {
      number: 3,
      title: 'Financial Reporting',
      outcomes: [
        { name: 'Adjusted Statements', mastery: outcomesData.lesson_3_adjusted_statements_mastery_percentage || 0 },
        { name: 'Financial Ratios', mastery: outcomesData.lesson_3_financial_ratios_mastery_percentage || 0 },
        { name: 'Lease Disclosures', mastery: outcomesData.lesson_3_lease_disclosures_mastery_percentage || 0 },
        { name: 'Communication', mastery: outcomesData.lesson_3_communication_mastery_percentage || 0 }
      ],
      overall: outcomesData.lesson_3_overall_mastery_percentage || 0
    },
    {
      number: 4,
      title: 'Tax Implications',
      outcomes: [
        { name: 'Tax Implications', mastery: outcomesData.lesson_4_tax_implications_mastery_percentage || 0 },
        { name: 'Tax Strategies', mastery: outcomesData.lesson_4_tax_strategies_mastery_percentage || 0 },
        { name: 'Deferred Tax', mastery: outcomesData.lesson_4_deferred_tax_mastery_percentage || 0 },
        { name: 'Tax Compliance', mastery: outcomesData.lesson_4_tax_compliance_mastery_percentage || 0 }
      ],
      overall: outcomesData.lesson_4_overall_mastery_percentage || 0
    },
    {
      number: 5,
      title: 'Implementation & Management',
      outcomes: [
        { name: 'Implementation', mastery: outcomesData.lesson_5_implementation_mastery_percentage || 0 },
        { name: 'Internal Controls', mastery: outcomesData.lesson_5_internal_controls_mastery_percentage || 0 },
        { name: 'Systems', mastery: outcomesData.lesson_5_systems_mastery_percentage || 0 },
        { name: 'Portfolio Management', mastery: outcomesData.lesson_5_portfolio_management_mastery_percentage || 0 }
      ],
      overall: outcomesData.lesson_5_overall_mastery_percentage || 0
    }
  ];

  const competencies = [
    { name: 'Lease Accounting', mastery: outcomesData.lease_accounting_competency_percentage || 0 },
    { name: 'Financial Analysis', mastery: outcomesData.financial_analysis_competency_percentage || 0 },
    { name: 'Financial Reporting', mastery: outcomesData.financial_reporting_competency_percentage || 0 },
    { name: 'Tax Planning', mastery: outcomesData.tax_planning_competency_percentage || 0 },
    { name: 'Implementation', mastery: outcomesData.implementation_competency_percentage || 0 }
  ];

  return (
    <>
      <Helmet>
        <title>Learning Outcomes Assessment - Learning Platform</title>
        <meta name="description" content="Track your competency and mastery of learning outcomes" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="w-10 h-10 mr-4 text-indigo-600" />
            Learning Outcomes Assessment
          </h1>

          {/* Lesson-by-Lesson Outcomes */}
          <div className="space-y-6 mb-8">
            {lessons.map((lesson) => (
              <div key={lesson.number} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Lesson {lesson.number}: {lesson.title}</h2>
                  <span className={`px-4 py-2 rounded-full font-bold ${getMasteryColor(lesson.overall)}`}>
                    {lesson.overall}% Mastery
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lesson.outcomes.map((outcome) => (
                    <div key={outcome.name} className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{outcome.name}</span>
                        <span className={`text-sm font-bold ${getMasteryColor(outcome.mastery).split(' ')[0]}`}>
                          {outcome.mastery}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`${getMasteryBarColor(outcome.mastery)} h-3 rounded-full transition-all`}
                          style={{ width: `${outcome.mastery}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Overall Course Competency */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-7 h-7 mr-3 text-indigo-600" />
              Overall Course Competency
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Competency Breakdown */}
              <div className="space-y-4">
                {competencies.map((competency) => (
                  <div key={competency.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{competency.name}</span>
                      <span className={`text-sm font-bold ${getMasteryColor(competency.mastery).split(' ')[0]}`}>
                        {competency.mastery}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className={`${getMasteryBarColor(competency.mastery)} h-4 rounded-full transition-all`}
                        style={{ width: `${competency.mastery}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Overall Competency Score */}
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Overall Course Competency</p>
                  <div className="relative w-48 h-48 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="8"
                        strokeDasharray={`${(outcomesData.overall_course_competency_percentage || 0) * 2.51} 251`}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-indigo-600">
                        {outcomesData.overall_course_competency_percentage || 0}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningOutcomesAssessment;