import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FileText, Target, Lightbulb, CheckSquare, Loader2 } from 'lucide-react';

const CaseStudyViewer = ({ lessonId }) => {
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const records = await pb.collection('vendor_leasing_case_studies').getList(1, 1, {
          filter: `lessonId="${lessonId}"`,
          $autoCancel: false,
        });

        if (records.items.length > 0) {
          setCaseStudy(records.items[0]);
        }
      } catch (err) {
        console.error("Error fetching case study:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [lessonId]);

  const handleDownload = () => {
    // Mock download functionality
    alert("Case study PDF download started...");
  };

  if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;
  if (!caseStudy) return <div className="text-center p-8">No case study available for this lesson.</div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900 text-white p-8 rounded-xl shadow-lg">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-500 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
              {caseStudy.difficulty || 'Intermediate'}
            </span>
            <span className="text-slate-400 text-sm">Case Study</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{caseStudy.title}</h1>
          <p className="text-slate-300 max-w-2xl">Analyze real-world scenarios to apply your vendor leasing knowledge.</p>
        </div>
        <Button onClick={handleDownload} className="bg-white text-slate-900 hover:bg-slate-100">
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
      </div>

      <Tabs defaultValue="scenario" className="w-full">
        <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-slate-100 rounded-lg">
          <TabsTrigger value="scenario" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <FileText className="w-4 h-4 mr-2" /> Scenario
          </TabsTrigger>
          <TabsTrigger value="requirements" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Target className="w-4 h-4 mr-2" /> Requirements
          </TabsTrigger>
          <TabsTrigger value="analysis" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Lightbulb className="w-4 h-4 mr-2" /> Analysis
          </TabsTrigger>
          <TabsTrigger value="outcome" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <CheckSquare className="w-4 h-4 mr-2" /> Outcome
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="scenario">
            <Card>
              <CardHeader>
                <CardTitle>The Scenario</CardTitle>
                <CardDescription>Read the background information carefully.</CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                {caseStudy.scenario}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle>Key Requirements</CardTitle>
                <CardDescription>What needs to be solved or addressed?</CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                {caseStudy.requirements}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis">
            <Card>
              <CardHeader>
                <CardTitle>Analysis Framework</CardTitle>
                <CardDescription>Use this framework to structure your solution.</CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                {caseStudy.analysisFramework}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outcome">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle>Expected Outcome</CardTitle>
                <CardDescription>Compare your solution with the expert recommendation.</CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed bg-green-50/50 p-6 rounded-lg">
                {caseStudy.expectedOutcome}
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CaseStudyViewer;