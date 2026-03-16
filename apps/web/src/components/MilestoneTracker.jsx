import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const MilestoneTracker = ({ currentMilestone = 1 }) => {
  const milestones = [
    { id: 1, title: 'Fundamentals', description: 'Basic concepts & terminology' },
    { id: 2, title: 'Accounting', description: 'Lease classification & reporting' },
    { id: 3, title: 'Advanced Topics', description: 'Sale-leaseback & optimization' },
    { id: 4, title: 'Compliance', description: 'Tax forms & audit prep' },
    { id: 5, title: 'Certification', description: 'Final exam & capstone' },
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">Learning Path Milestones</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
          
          <div className="space-y-6 relative">
            {milestones.map((milestone, index) => {
              const isCompleted = index + 1 < currentMilestone;
              const isCurrent = index + 1 === currentMilestone;
              
              return (
                <div key={milestone.id} className="flex items-start gap-4 relative">
                  <div className={cn(
                    "z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors",
                    isCompleted ? "bg-green-500 border-green-500 text-white" :
                    isCurrent ? "bg-white border-blue-500 text-blue-500 ring-4 ring-blue-100" :
                    "bg-white border-gray-300 text-gray-300"
                  )}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-sm font-bold">{index + 1}</span>}
                  </div>
                  
                  <div className={cn(
                    "flex-1 p-4 rounded-lg border transition-all",
                    isCurrent ? "bg-blue-50 border-blue-200 shadow-sm" : "bg-white border-gray-100"
                  )}>
                    <div className="flex justify-between items-center">
                      <h4 className={cn("font-semibold", isCurrent ? "text-blue-700" : "text-slate-700")}>
                        {milestone.title}
                      </h4>
                      {isCurrent && <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Current</span>}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{milestone.description}</p>
                    
                    {isCurrent && (
                      <div className="mt-3 flex items-center text-xs text-blue-600 font-medium cursor-pointer hover:underline">
                        Continue <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MilestoneTracker;