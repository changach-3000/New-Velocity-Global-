import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Book, FileSpreadsheet, ExternalLink, Briefcase } from 'lucide-react';

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Course Resources - Tax Optimization</title>
      </Helmet>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <Link to="/course/tax-optimization" className="text-sm text-blue-600 hover:underline mb-2 inline-block">
            &larr; Back to Course Overview
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Course Resources Library</h1>
          <p className="text-gray-600 mt-2">Access all downloadable materials, templates, and reading lists.</p>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="guides">Study Guides</TabsTrigger>
            <TabsTrigger value="templates">Templates & Tools</TabsTrigger>
            <TabsTrigger value="readings">Reading Lists</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-4">
            <div className="flex justify-end mb-4">
              <Button className="gap-2">
                <Download className="w-4 h-4" /> Download All Guides (ZIP)
              </Button>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Card key={num} className="flex items-center p-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-50 rounded-lg mr-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Lesson {num} Study Guide</h3>
                  <p className="text-sm text-gray-500">Practice problems, key concepts summary, and notes.</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </Card>
            ))}
            <Card className="flex items-center p-4 bg-slate-900 text-white mt-6">
              <div className="p-3 bg-white/10 rounded-lg mr-4">
                <Book className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Master Study Guide</h3>
                <p className="text-sm text-gray-300">Comprehensive guide covering all 8 lessons with 20 practice exam questions.</p>
              </div>
              <Button variant="secondary" size="sm">
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-green-600" /> Lease vs. Buy Analyzer
                </CardTitle>
                <CardDescription>Excel model for comparing NPV of leasing vs. purchasing.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Download .XLSX</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-green-600" /> MACRS Depreciation Schedule
                </CardTitle>
                <CardDescription>Automated calculator for 3, 5, 7, and 10-year property classes.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Download .XLSX</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-green-600" /> Section 163(j) Calculator
                </CardTitle>
                <CardDescription>Tool to determine business interest deduction limitations.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Download .XLSX</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="readings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Core Regulatory Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                    <span className="text-blue-600 hover:underline cursor-pointer">IRS Publication 946: How to Depreciate Property</span>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                    <span className="text-blue-600 hover:underline cursor-pointer">FASB ASC 842: Leases</span>
                  </div>
                  <Badge variant="outline">Web</Badge>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                    <span className="text-blue-600 hover:underline cursor-pointer">IRS Publication 535: Business Expenses</span>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="case-studies" className="space-y-4">
             <Card className="bg-orange-50 border-orange-100">
              <CardHeader>
                <CardTitle className="text-orange-900">Master Case Study Workbook</CardTitle>
                <CardDescription className="text-orange-700">
                  4 integrated exercises covering comprehensive analysis, optimization, and planning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Download className="w-4 h-4 mr-2" /> Download Master Workbook
                </Button>
              </CardContent>
            </Card>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Card key={num} className="flex items-center p-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <Briefcase className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Lesson {num} Case Study</h3>
                  <p className="text-sm text-gray-500">Real-world scenario analysis and solution.</p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResourcesPage;