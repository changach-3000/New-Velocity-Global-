import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus, AlertCircle, CheckCircle } from 'lucide-react';

const PerformanceMetrics = ({ metrics }) => {
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-white shadow-sm border-l-4 border-l-blue-500">
        <CardContent className="p-4">
          <div className="text-sm text-gray-500 mb-1">Avg. Quiz Score</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-bold text-slate-800">{metrics.avgQuizScore}%</div>
            <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
              {getTrendIcon('up')} +2.5%
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-l-4 border-l-purple-500">
        <CardContent className="p-4">
          <div className="text-sm text-gray-500 mb-1">Study Guide Completion</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-bold text-slate-800">{metrics.studyGuideCompletion}%</div>
            <div className="text-xs text-gray-400 mb-1">6/8 Guides</div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-l-4 border-l-orange-500">
        <CardContent className="p-4">
          <div className="text-sm text-gray-500 mb-1">Case Study Score</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-bold text-slate-800">{metrics.caseStudyScore}%</div>
            <div className="flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded">
              {getTrendIcon('flat')} Stable
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-l-4 border-l-green-500">
        <CardContent className="p-4">
          <div className="text-sm text-gray-500 mb-1">Overall Rating</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-bold text-green-600">Good</div>
            <div className="text-xs text-gray-400 mb-1">Top 20%</div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2 bg-red-50 border border-red-100 shadow-none">
        <CardContent className="p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-red-700 text-sm">Needs Improvement</h4>
            <p className="text-xs text-red-600 mt-1">
              Your performance in <strong>Lease Classification</strong> is below average. Review Lesson 4 materials.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2 bg-green-50 border border-green-100 shadow-none">
        <CardContent className="p-4 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-green-700 text-sm">Strongest Area</h4>
            <p className="text-xs text-green-600 mt-1">
              You're excelling in <strong>Tax Compliance</strong> with a 95% average score! Keep it up.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceMetrics;