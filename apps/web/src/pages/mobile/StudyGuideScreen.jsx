import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronLeft, Lightbulb, CheckCircle2, HelpCircle } from 'lucide-react';

const StudyGuideScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showHint, setShowHint] = useState({});
  const [showSolution, setShowSolution] = useState({});

  const problems = [
    {
      id: 1,
      title: "MACRS Depreciation Calculation",
      difficulty: "Medium",
      status: "In Progress",
      question: "Calculate the first-year depreciation for a $100,000 asset using 5-year MACRS with half-year convention.",
      hint: "Check the MACRS table for 5-year property. The first year rate is 20%.",
      solution: "$100,000 × 20% = $20,000"
    },
    {
      id: 2,
      title: "Section 179 Eligibility",
      difficulty: "Easy",
      status: "Not Attempted",
      question: "Is a used machine purchased from an unrelated party eligible for Section 179 expensing?",
      hint: "Review the rules for 'new to you' property under TCJA.",
      solution: "Yes, under the TCJA, used property is eligible for Section 179 as long as it is new to the taxpayer."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white p-4 border-b sticky top-0 z-10 flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-bold text-lg">Study Guide: Lesson {id}</h1>
      </div>

      <div className="p-4 space-y-4">
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
              50%
            </div>
            <div>
              <p className="font-semibold text-blue-900">Progress</p>
              <p className="text-sm text-blue-700">1 of 2 Problems Completed</p>
            </div>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="space-y-4">
          {problems.map((problem, index) => (
            <AccordionItem key={problem.id} value={`item-${index}`} className="bg-white border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-start text-left gap-3 w-full">
                  <div className="mt-1">
                    {problem.status === 'Completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-slate-900">Problem {index + 1}</span>
                      <Badge variant="outline" className={
                        problem.difficulty === 'Easy' ? 'text-green-600 bg-green-50' : 'text-yellow-600 bg-yellow-50'
                      }>{problem.difficulty}</Badge>
                    </div>
                    <p className="text-sm text-gray-500">{problem.title}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-slate-800 font-medium">
                    {problem.question}
                  </div>
                  
                  <textarea 
                    className="w-full p-3 border rounded-lg text-sm" 
                    rows="3" 
                    placeholder="Type your answer here..."
                  ></textarea>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 gap-2"
                      onClick={() => setShowHint({...showHint, [problem.id]: !showHint[problem.id]})}
                    >
                      <Lightbulb className="w-4 h-4 text-yellow-500" /> Hint
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 gap-2"
                      onClick={() => setShowSolution({...showSolution, [problem.id]: !showSolution[problem.id]})}
                    >
                      <HelpCircle className="w-4 h-4 text-blue-500" /> Solution
                    </Button>
                  </div>

                  {showHint[problem.id] && (
                    <div className="bg-yellow-50 p-3 rounded text-sm text-yellow-800 border border-yellow-100">
                      <strong>Hint:</strong> {problem.hint}
                    </div>
                  )}

                  {showSolution[problem.id] && (
                    <div className="bg-blue-50 p-3 rounded text-sm text-blue-800 border border-blue-100">
                      <strong>Solution:</strong> {problem.solution}
                    </div>
                  )}

                  <Button className="w-full bg-green-600 hover:bg-green-700">Mark as Complete</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default StudyGuideScreen;