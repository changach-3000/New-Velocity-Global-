import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const EngagementMetrics = ({ activityData }) => {
  // Generate a mock heatmap for the last 28 days (4 weeks)
  const generateHeatmapData = () => {
    const days = [];
    for (let i = 0; i < 28; i++) {
      const intensity = Math.floor(Math.random() * 5); // 0-4
      days.push({ day: i, intensity });
    }
    return days;
  };

  const heatmapData = generateHeatmapData();

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 0: return 'bg-gray-100';
      case 1: return 'bg-blue-200';
      case 2: return 'bg-blue-400';
      case 3: return 'bg-blue-600';
      case 4: return 'bg-blue-800';
      default: return 'bg-gray-100';
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">Engagement Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm text-gray-500">Activity Heatmap (Last 4 Weeks)</span>
              <span className="text-xs text-gray-400">Less &rarr; More</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              <TooltipProvider>
                {heatmapData.map((d, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <div 
                        className={`w-full aspect-square rounded-sm ${getIntensityColor(d.intensity)} hover:opacity-80 transition-opacity cursor-pointer`}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Activity Level: {d.intensity}/4</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-lg p-3">
              <div className="text-xs text-gray-500">Consistency Score</div>
              <div className="text-xl font-bold text-slate-800">85/100</div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="border rounded-lg p-3">
              <div className="text-xs text-gray-500">Most Active Day</div>
              <div className="text-xl font-bold text-slate-800">Tuesday</div>
              <div className="text-xs text-green-600 mt-1">High Activity</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EngagementMetrics;