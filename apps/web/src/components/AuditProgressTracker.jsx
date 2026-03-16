import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, CheckCircle2 } from 'lucide-react';

const AuditProgressTracker = ({ progress, statusMessage, isPaused, onTogglePause }) => {
  return (
    <Card className="w-full mb-6 border-blue-100 bg-blue-50">
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-blue-900 flex items-center gap-2">
            {progress < 100 ? (
              <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
            ) : (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            )}
            {progress < 100 ? 'Audit in Progress' : 'Audit Complete'}
          </h3>
          <span className="text-sm font-bold text-blue-700">{progress}%</span>
        </div>
        
        <Progress value={progress} className="h-2 mb-4" />
        
        <div className="flex justify-between items-center">
          <p className="text-sm text-blue-700 font-medium">{statusMessage}</p>
          {progress < 100 && (
            <button 
              onClick={onTogglePause}
              className="text-xs bg-white border border-blue-200 px-3 py-1 rounded hover:bg-blue-50 text-blue-600"
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AuditProgressTracker;