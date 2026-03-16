
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Target, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import AssessmentResults from './AssessmentResults';

// Comprehensive question bank (5 per role to simulate a 20-question test structure)
const QUESTION_BANK = {
  Lessor: [
    { id: 'l1', text: 'Which financial ratio is most critical for evaluating a leasing company\'s leverage?', options: [
      { text: 'Return on Assets (ROA)', isCorrect: false, gap: 'Understanding of lessor-specific leverage metrics' },
      { text: 'Debt-to-Equity Ratio', isCorrect: true, gap: null },
      { text: 'Current Ratio', isCorrect: false, gap: 'Understanding of lessor-specific leverage metrics' },
      { text: 'Inventory Turnover', isCorrect: false, gap: 'Understanding of lessor-specific leverage metrics' }
    ]},
    { id: 'l2', text: 'In a true lease (operating lease), who claims the depreciation tax benefit?', options: [
      { text: 'The Lessee', isCorrect: false, gap: 'Knowledge of tax ownership in operating leases' },
      { text: 'The Lessor', isCorrect: true, gap: null },
      { text: 'Both split it 50/50', isCorrect: false, gap: 'Knowledge of tax ownership in operating leases' },
      { text: 'Neither party', isCorrect: false, gap: 'Knowledge of tax ownership in operating leases' }
    ]},
    { id: 'l3', text: 'What is the primary purpose of securitization for a leasing company?', options: [
      { text: 'To increase the residual value of assets', isCorrect: false, gap: 'Understanding of funding and securitization strategies' },
      { text: 'To convert illiquid lease receivables into tradable securities for funding', isCorrect: true, gap: null },
      { text: 'To avoid paying corporate taxes', isCorrect: false, gap: 'Understanding of funding and securitization strategies' },
      { text: 'To transfer maintenance responsibilities to the lessee', isCorrect: false, gap: 'Understanding of funding and securitization strategies' }
    ]},
    { id: 'l4', text: 'How is residual value risk typically mitigated by a lessor?', options: [
      { text: 'By offering only short-term leases', isCorrect: false, gap: 'Asset management and residual risk mitigation' },
      { text: 'Through conservative forecasting, insurance, and secondary market planning', isCorrect: true, gap: null },
      { text: 'By charging higher interest rates', isCorrect: false, gap: 'Asset management and residual risk mitigation' },
      { text: 'By ignoring it until the end of the lease', isCorrect: false, gap: 'Asset management and residual risk mitigation' }
    ]},
    { id: 'l5', text: 'Under ASC 842 / IFRS 16, how does a lessor account for a sales-type lease?', options: [
      { text: 'Keep the asset on the balance sheet and recognize rental income straight-line', isCorrect: false, gap: 'Lessor accounting standards (ASC 842/IFRS 16)' },
      { text: 'Derecognize the asset and record a net investment in the lease', isCorrect: true, gap: null },
      { text: 'Record it as an off-balance sheet transaction', isCorrect: false, gap: 'Lessor accounting standards (ASC 842/IFRS 16)' },
      { text: 'Only record the interest portion of the payments', isCorrect: false, gap: 'Lessor accounting standards (ASC 842/IFRS 16)' }
    ]}
  ],
  Sales: [
    { id: 's1', text: 'When pitching a lease to a client, what is the most effective value proposition?', options: [
      { text: 'Focusing solely on having the lowest interest rate', isCorrect: false, gap: 'Value-based selling vs. rate-based selling' },
      { text: 'Highlighting cash flow preservation, tax benefits, and lifecycle management', isCorrect: true, gap: null },
      { text: 'Explaining the complex accounting rules of ASC 842', isCorrect: false, gap: 'Value-based selling vs. rate-based selling' },
      { text: 'Promising guaranteed approval regardless of credit', isCorrect: false, gap: 'Value-based selling vs. rate-based selling' }
    ]},
    { id: 's2', text: 'If a client is concerned about technology obsolescence, which product should you recommend?', options: [
      { text: 'A 10-year Capital Lease', isCorrect: false, gap: 'Matching lease products to customer needs' },
      { text: 'A Fair Market Value (FMV) Operating Lease', isCorrect: true, gap: null },
      { text: 'A Cash Purchase', isCorrect: false, gap: 'Matching lease products to customer needs' },
      { text: 'A Sale-Leaseback', isCorrect: false, gap: 'Matching lease products to customer needs' }
    ]},
    { id: 's3', text: 'What is a "Sale-Leaseback" transaction?', options: [
      { text: 'Selling equipment to a vendor and leasing it to a third party', isCorrect: false, gap: 'Understanding specialized lease structures' },
      { text: 'A company sells its owned asset to a lessor and immediately leases it back to free up capital', isCorrect: true, gap: null },
      { text: 'Returning leased equipment early to buy a new one', isCorrect: false, gap: 'Understanding specialized lease structures' },
      { text: 'A lease that automatically converts to a sale at the end', isCorrect: false, gap: 'Understanding specialized lease structures' }
    ]},
    { id: 's4', text: 'During negotiations, the client asks for a lower monthly payment. What is a structural way to achieve this without cutting your yield?', options: [
      { text: 'Reduce the equipment cost', isCorrect: false, gap: 'Lease structuring and negotiation tactics' },
      { text: 'Extend the lease term or increase the assumed residual value', isCorrect: true, gap: null },
      { text: 'Waive the documentation fee', isCorrect: false, gap: 'Lease structuring and negotiation tactics' },
      { text: 'Change it to a daily payment schedule', isCorrect: false, gap: 'Lease structuring and negotiation tactics' }
    ]},
    { id: 's5', text: 'What is the primary purpose of a Master Lease Agreement (MLA)?', options: [
      { text: 'To lease multiple properties in different countries', isCorrect: false, gap: 'Knowledge of lease documentation' },
      { text: 'To establish overarching terms so future equipment schedules can be added easily without renegotiating legal terms', isCorrect: true, gap: null },
      { text: 'To guarantee the lowest possible interest rate for life', isCorrect: false, gap: 'Knowledge of lease documentation' },
      { text: 'To allow the lessee to cancel at any time without penalty', isCorrect: false, gap: 'Knowledge of lease documentation' }
    ]}
  ],
  Financier: [
    { id: 'f1', text: 'When evaluating a lessee\'s creditworthiness, which metric indicates their ability to service debt?', options: [
      { text: 'Return on Equity (ROE)', isCorrect: false, gap: 'Credit analysis and risk assessment' },
      { text: 'Debt Service Coverage Ratio (DSCR)', isCorrect: true, gap: null },
      { text: 'Gross Profit Margin', isCorrect: false, gap: 'Credit analysis and risk assessment' },
      { text: 'Days Sales Outstanding (DSO)', isCorrect: false, gap: 'Credit analysis and risk assessment' }
    ]},
    { id: 'f2', text: 'What does the Internal Rate of Return (IRR) of a lease represent?', options: [
      { text: 'The total cash collected over the term', isCorrect: false, gap: 'Financial modeling and yield calculation' },
      { text: 'The annualized effective compounded return rate earned on the invested capital', isCorrect: true, gap: null },
      { text: 'The depreciation rate of the asset', isCorrect: false, gap: 'Financial modeling and yield calculation' },
      { text: 'The central bank\'s base interest rate', isCorrect: false, gap: 'Financial modeling and yield calculation' }
    ]},
    { id: 'f3', text: 'In lease pricing, what is a "spread"?', options: [
      { text: 'The difference between the asset cost and residual value', isCorrect: false, gap: 'Pricing strategies and cost of funds' },
      { text: 'The difference between the yield charged to the customer and the lessor\'s cost of funds', isCorrect: true, gap: null },
      { text: 'The physical distance between the lessor and lessee', isCorrect: false, gap: 'Pricing strategies and cost of funds' },
      { text: 'The time between lease approval and funding', isCorrect: false, gap: 'Pricing strategies and cost of funds' }
    ]},
    { id: 'f4', text: 'Why is collateral valuation critical in equipment finance?', options: [
      { text: 'It determines the color of the equipment', isCorrect: false, gap: 'Asset valuation and collateral risk' },
      { text: 'It establishes the recovery value in case of default and supports residual assumptions', isCorrect: true, gap: null },
      { text: 'It is required by the marketing department', isCorrect: false, gap: 'Asset valuation and collateral risk' },
      { text: 'It dictates the lessee\'s tax rate', isCorrect: false, gap: 'Asset valuation and collateral risk' }
    ]},
    { id: 'f5', text: 'What is the impact of a "hell or high water" clause in a lease contract?', options: [
      { text: 'It requires the lessee to buy flood insurance', isCorrect: false, gap: 'Legal compliance and contract structuring' },
      { text: 'It mandates that the lessee must make payments regardless of equipment performance or disputes', isCorrect: true, gap: null },
      { text: 'It allows the lessee to return the equipment if it breaks', isCorrect: false, gap: 'Legal compliance and contract structuring' },
      { text: 'It limits the lessor\'s liability for environmental damage', isCorrect: false, gap: 'Legal compliance and contract structuring' }
    ]}
  ],
  'Business Owner': [
    { id: 'c1', text: 'What is the main difference between a Capital Lease and an Operating Lease for a business?', options: [
      { text: 'Capital leases are only for real estate', isCorrect: false, gap: 'Understanding lease classifications' },
      { text: 'A capital lease transfers ownership risks/rewards to the lessee, while an operating lease is treated more like a rental', isCorrect: true, gap: null },
      { text: 'Operating leases always have higher interest rates', isCorrect: false, gap: 'Understanding lease classifications' },
      { text: 'Capital leases do not require monthly payments', isCorrect: false, gap: 'Understanding lease classifications' }
    ]},
    { id: 'c2', text: 'How does leasing typically impact a company\'s cash flow compared to a cash purchase?', options: [
      { text: 'It drains cash reserves immediately', isCorrect: false, gap: 'Financial planning and cash flow management' },
      { text: 'It preserves working capital by spreading the cost over time', isCorrect: true, gap: null },
      { text: 'It has no impact on cash flow', isCorrect: false, gap: 'Financial planning and cash flow management' },
      { text: 'It increases the total cash available on day one', isCorrect: false, gap: 'Financial planning and cash flow management' }
    ]},
    { id: 'c3', text: 'Under the new ASC 842 accounting standard, how must a lessee report an operating lease?', options: [
      { text: 'Only in the footnotes of the financial statements', isCorrect: false, gap: 'Lessee accounting standards (ASC 842)' },
      { text: 'By recognizing a Right-of-Use (ROU) asset and a corresponding lease liability on the balance sheet', isCorrect: true, gap: null },
      { text: 'As a direct reduction of equity', isCorrect: false, gap: 'Lessee accounting standards (ASC 842)' },
      { text: 'Operating leases are exempt from reporting', isCorrect: false, gap: 'Lessee accounting standards (ASC 842)' }
    ]},
    { id: 'c4', text: 'What happens at the end of a Fair Market Value (FMV) lease?', options: [
      { text: 'The lessee automatically owns the equipment for $1', isCorrect: false, gap: 'End-of-lease options and obligations' },
      { text: 'The lessee can return the equipment, renew the lease, or purchase it at its current market value', isCorrect: true, gap: null },
      { text: 'The equipment must be destroyed', isCorrect: false, gap: 'End-of-lease options and obligations' },
      { text: 'The lessor pays the lessee a bonus', isCorrect: false, gap: 'End-of-lease options and obligations' }
    ]},
    { id: 'c5', text: 'Which of the following is a common "soft cost" that can often be included in an equipment lease?', options: [
      { text: 'The raw materials used to build the equipment', isCorrect: false, gap: 'Understanding total cost of ownership and lease inclusions' },
      { text: 'Software, installation, and training fees', isCorrect: true, gap: null },
      { text: 'The CEO\'s salary', isCorrect: false, gap: 'Understanding total cost of ownership and lease inclusions' },
      { text: 'Real estate taxes', isCorrect: false, gap: 'Understanding total cost of ownership and lease inclusions' }
    ]}
  ]
};

const SkillsAssessmentGapTest = () => {
  const [role, setRole] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setCurrentIdx(0);
    setAnswers({});
    setIsComplete(false);
  };

  const handleAnswer = (optionIdx) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const handleNext = () => {
    if (currentIdx < QUESTION_BANK[role].length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const resetTest = () => {
    setRole(null);
    setCurrentIdx(0);
    setAnswers({});
    setIsComplete(false);
  };

  if (isComplete) {
    const questions = QUESTION_BANK[role];
    let correctCount = 0;
    const gaps = [];

    questions.forEach((q, idx) => {
      const selectedOptionIdx = answers[idx];
      if (selectedOptionIdx !== undefined) {
        const option = q.options[selectedOptionIdx];
        if (option.isCorrect) {
          correctCount++;
        } else if (option.gap) {
          gaps.push(option.gap);
        }
      }
    });

    // Scale score to 100% (since we use 5 questions to represent a full test)
    const score = Math.round((correctCount / questions.length) * 100);

    return <AssessmentResults score={score} role={role} gaps={gaps} onRetake={resetTest} />;
  }

  if (!role) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Target className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Skills Gap Assessment</h2>
          <p className="text-slate-400">Select your role to begin a tailored evaluation of your leasing knowledge.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(QUESTION_BANK).map((r) => (
            <motion.div
              key={r}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="glass-panel cursor-pointer hover:border-blue-500/50 transition-colors h-full"
                onClick={() => handleRoleSelect(r)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <h3 className="text-xl font-semibold text-slate-200">{r}</h3>
                  <p className="text-sm text-slate-500">Take the {r.toLowerCase()} specific assessment</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const questions = QUESTION_BANK[role];
  const currentQuestion = questions[currentIdx];
  const progress = ((currentIdx) / questions.length) * 100;
  const hasAnsweredCurrent = answers[currentIdx] !== undefined;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">{role} Assessment</span>
        <span className="text-sm font-medium text-blue-400">Question {currentIdx + 1} of {questions.length}</span>
      </div>
      
      <Progress value={progress} className="h-2 bg-slate-800" indicatorClassName="bg-blue-500" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[300px]"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 leading-snug">
            {currentQuestion.text}
          </h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = answers[currentIdx] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected 
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <span className="text-base pr-4">{option.text}</span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'border-blue-400 bg-blue-500' : 'border-slate-600 group-hover:border-slate-500'
                  }`}>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between pt-6 border-t border-slate-800">
        <Button
          variant="ghost"
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className="text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        <Button
          onClick={handleNext}
          disabled={!hasAnsweredCurrent}
          className="bg-blue-600 hover:bg-blue-500 text-white px-8"
        >
          {currentIdx === questions.length - 1 ? 'Submit Assessment' : 'Next Question'}
          {currentIdx !== questions.length - 1 && <ChevronRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>
    </div>
  );
};

export default SkillsAssessmentGapTest;
