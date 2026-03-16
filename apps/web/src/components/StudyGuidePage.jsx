import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Download, CheckCircle2 } from 'lucide-react';

const StudyGuidePage = () => {
  const { id } = useParams();
  
  // Mock data - in real app would fetch based on lesson ID
  const problems = [
    {
      id: 1,
      question: "Calculate the first-year depreciation for a $100,000 asset using 5-year MACRS with half-year convention.",
      difficulty: "Intermediate",
      solution: "Year 1 Rate for 5-year MACRS (Half-Year) is 20%. Calculation: $100,000 × 20% = $20,000."
    },
    {
      id: 2,
      question: "Determine if a lease with a 4-year term for an asset with a 10-year useful life meets the 'major part of economic life' criterion under ASC 842.",
      difficulty: "Beginner",
      solution: "The criterion is generally ≥75% of useful life. 4 years / 10 years = 40%. This is less than 75%, so it does NOT meet this specific criterion for finance lease classification."
    },
    {
      id: 3,
      question: "A company has $2M in adjusted taxable income. What is their maximum business interest deduction limit under Section 163(j)?",
      difficulty: "Intermediate",
      solution: "The limit is generally 30% of Adjusted Taxable Income (ATI). Calculation: $2,000,000 × 30% = $600,000."
    },
    {
      id: 4,
      question: "Explain the tax impact of a sale-leaseback transaction where the sale price is less than the adjusted basis.",
      difficulty: "Advanced",
      solution: "If the sale price is less than adjusted basis, the seller-lessee may recognize a loss. However, if the transaction is between related parties, the loss may be disallowed or deferred."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Study Guide - Tax Optimization</title>
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <Link to={`/course/tax-optimization/lesson/${id}`} className="flex items-center text-gray-600 hover:text-blue-600">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Lesson
          </Link>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" /> Download PDF Guide
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Lesson Study Guide</h1>
              <p className="text-gray-500">Practice Problems & Solutions</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Work through these practice problems to reinforce your understanding of the lesson concepts. 
            Try to solve them before revealing the solutions.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {problems.map((problem, index) => (
              <AccordionItem key={problem.id} value={`item-${index}`} className="border rounded-lg px-4 bg-gray-50/50">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-start text-left gap-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-xs font-bold text-slate-700 shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <span className="font-medium text-slate-900">{problem.question}</span>
                      <div className="mt-2">
                        <Badge variant="secondary" className={
                          problem.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          problem.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }>
                          {problem.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 pl-10 pr-4">
                  <div className="bg-white p-4 rounded border border-blue-100 text-slate-700">
                    <span className="font-semibold text-blue-600 block mb-1">Solution:</span>
                    {problem.solution}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default StudyGuidePage;