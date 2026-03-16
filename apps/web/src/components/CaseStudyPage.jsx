import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Download, Briefcase, TrendingUp, Calculator } from 'lucide-react';

const CaseStudyPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Case Study - Tax Optimization</title>
      </Helmet>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <Link to={`/course/tax-optimization/lesson/${id}`} className="flex items-center text-gray-600 hover:text-blue-600">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Lesson
          </Link>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" /> Download Workbook PDF
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card className="border-t-4 border-t-orange-500 shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    Intermediate Difficulty
                  </Badge>
                  <span className="text-sm text-gray-500">Est. Time: 45 mins</span>
                </div>
                <CardTitle className="text-2xl">TechGrowth Inc. - Lease vs. Buy Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Scenario</h3>
                  <p className="text-gray-700 leading-relaxed">
                    TechGrowth Inc., a software development firm with $15M in annual revenue, is considering acquiring a new server cluster valued at $2,000,000. They are profitable with $3M in taxable income projected for the current year. They have a 21% corporate tax rate and a weighted average cost of capital (WACC) of 8%.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg border">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-blue-500" /> Option A: Purchase
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li>Cash purchase: $2,000,000</li>
                      <li>Eligible for 60% Bonus Depreciation</li>
                      <li>Remaining basis depreciated over 5 years (MACRS)</li>
                      <li>Maintenance costs: $50,000/year</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-green-500" /> Option B: Lease
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li>Term: 36 months</li>
                      <li>Monthly Payment: $60,000</li>
                      <li>Fair Market Value purchase option</li>
                      <li>Lessor covers maintenance</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Analysis Requirements</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Calculate the Net Present Value (NPV) of the after-tax cash flows for both options.</li>
                    <li>Determine the impact of Bonus Depreciation on the Year 1 tax liability for the purchase option.</li>
                    <li>Analyze the impact on the company's EBITDA and debt covenants under ASC 842 for the lease option.</li>
                    <li>Recommend the optimal strategy based on both quantitative (NPV) and qualitative factors.</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Analysis Workspace</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea 
                  className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter your calculations and recommendations here..."
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <Button>Save Draft</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-blue-50 border-blue-100">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Key Concepts Applied</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>Time Value of Money (NPV Analysis)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>Bonus Depreciation Tax Shield</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>After-Tax Cost of Debt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>ASC 842 Balance Sheet Impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="#" className="block text-sm text-blue-600 hover:underline">MACRS Depreciation Tables</Link>
                <Link to="#" className="block text-sm text-blue-600 hover:underline">PV of Annuity Calculator</Link>
                <Link to="#" className="block text-sm text-blue-600 hover:underline">Section 179 Limits (2024)</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;