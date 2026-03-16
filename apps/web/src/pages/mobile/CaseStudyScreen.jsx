import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Download, Briefcase, Clock } from 'lucide-react';

const CaseStudyScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white p-4 border-b sticky top-0 z-10 flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-bold text-lg">Case Study</h1>
      </div>

      <div className="p-4 space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-orange-600">TechGrowth Inc.</span>
            </div>
            <CardTitle className="text-xl">Lease vs. Buy Analysis</CardTitle>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
              <Clock className="w-4 h-4" />
              <span>Est. Time: 45 mins</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              TechGrowth Inc. is considering acquiring a $2M server cluster. Analyze the tax implications of purchasing vs. leasing under current tax laws.
            </p>
            <Button variant="outline" className="w-full gap-2">
              <Download className="w-4 h-4" /> Download PDF Brief
            </Button>
          </CardContent>
        </Card>

        <div>
          <h3 className="font-bold text-lg mb-3">Analysis Questions</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <label className="block font-medium mb-2 text-sm">1. Calculate the NPV of the purchase option.</label>
              <textarea className="w-full p-3 border rounded-md text-sm h-32" placeholder="Enter your calculation steps..."></textarea>
            </div>
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <label className="block font-medium mb-2 text-sm">2. What is the impact of Bonus Depreciation?</label>
              <textarea className="w-full p-3 border rounded-md text-sm h-32" placeholder="Explain the impact..."></textarea>
            </div>
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">Submit Analysis</Button>
      </div>
    </div>
  );
};

export default CaseStudyScreen;