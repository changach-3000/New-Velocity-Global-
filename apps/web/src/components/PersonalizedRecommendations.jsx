import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, ArrowRight, BookOpen, RefreshCw } from 'lucide-react';

const PersonalizedRecommendations = () => {
  return (
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/15 transition-colors cursor-pointer group">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">Review: Depreciation Methods</h4>
              <p className="text-xs text-gray-300">Based on your recent quiz performance in Lesson 2.</p>
            </div>
            <RefreshCw className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/15 transition-colors cursor-pointer group">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">Next Up: Lesson 6</h4>
              <p className="text-xs text-gray-300">Pass-Through Entity Considerations. Est. time: 1h.</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/15 transition-colors cursor-pointer group">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">Try Case Study #4</h4>
              <p className="text-xs text-gray-300">Apply your knowledge of Lease Classification.</p>
            </div>
            <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2">
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  );
};

export default PersonalizedRecommendations;