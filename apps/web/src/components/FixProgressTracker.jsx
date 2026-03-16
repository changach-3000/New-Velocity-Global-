import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp,
  RefreshCw
} from 'lucide-react';
import { cn } from '@/lib/utils';

const FixProgressTracker = ({ 
  progress, 
  courseStates, 
  logs, 
  isFixing, 
  onRetry 
}) => {
  const [showLogs, setShowLogs] = useState(false);
  const [expandedCourses, setExpandedCourses] = useState({});

  const toggleCourse = (courseId) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'error': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'fixing': return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />;
      default: return <div className="h-5 w-5 rounded-full border-2 border-gray-200" />;
    }
  };

  const failedCount = Object.values(courseStates).filter(s => s.status === 'error').length;
  const successCount = Object.values(courseStates).filter(s => s.status === 'success').length;
  const totalCount = Object.keys(courseStates).length;

  return (
    <Card className="w-full border-blue-100 shadow-md">
      <CardHeader className="bg-gray-50/50 pb-4">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              {isFixing ? (
                <>
                  <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
                  Applying Fixes...
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Fix Process Complete
                </>
              )}
            </CardTitle>
            <CardDescription className="mt-1">
              {successCount} successful, {failedCount} failed out of {totalCount} courses processed
            </CardDescription>
          </div>
          {failedCount > 0 && !isFixing && onRetry && (
            <Button 
              onClick={onRetry} 
              variant="outline" 
              className="border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry Failed Items
            </Button>
          )}
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Overall Progress</span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-6">
        {/* Course List */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Course Status</h3>
          <div className="grid gap-3">
            {Object.entries(courseStates).map(([courseId, state]) => (
              <div 
                key={courseId} 
                className={cn(
                  "border rounded-lg transition-all duration-200",
                  state.status === 'error' ? "border-red-200 bg-red-50/30" : 
                  state.status === 'success' ? "border-green-200 bg-green-50/30" : 
                  "border-gray-200"
                )}
              >
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleCourse(courseId)}
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(state.status)}
                    <div>
                      <div className="font-medium text-gray-900">{state.name}</div>
                      <div className="text-xs text-gray-500">
                        {state.status === 'fixing' ? 'Processing...' : 
                         state.status === 'success' ? 'All issues resolved' : 
                         state.status === 'error' ? 'Fixes failed' : 'Pending'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {state.status === 'error' && (
                      <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">
                        Action Required
                      </span>
                    )}
                    {expandedCourses[courseId] ? (
                      <ChevronUp className="h-4 w-4 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                </div>
                
                {expandedCourses[courseId] && (
                  <div className="px-4 pb-4 pt-0 border-t border-gray-100 mt-2">
                    <div className="mt-3 space-y-2">
                      {state.logs?.map((log, idx) => (
                        <div key={idx} className={cn(
                          "text-xs flex items-start gap-2",
                          log.type === 'error' ? "text-red-600" : "text-gray-600"
                        )}>
                          {log.type === 'error' ? (
                            <AlertCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                          )}
                          <span>{log.message}</span>
                        </div>
                      ))}
                      {(!state.logs || state.logs.length === 0) && (
                        <div className="text-xs text-gray-400 italic">No details available</div>
                      )}
                    </div>
                    {state.status === 'error' && !isFixing && onRetry && (
                      <div className="mt-3 flex justify-end">
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50 h-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRetry(courseId);
                          }}
                        >
                          Retry this course
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Global Logs Toggle */}
        <div className="pt-4 border-t">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowLogs(!showLogs)}
            className="text-gray-500 hover:text-gray-900"
          >
            {showLogs ? 'Hide System Logs' : 'Show System Logs'}
          </Button>
          
          {showLogs && (
            <ScrollArea className="h-48 w-full rounded-md border bg-slate-950 text-slate-50 p-4 mt-2 font-mono text-xs">
              {logs.map((log, i) => (
                <div key={i} className="mb-1">
                  <span className="text-slate-500">[{new Date(log.timestamp).toLocaleTimeString()}]</span>{' '}
                  <span className={cn(
                    log.type === 'error' ? "text-red-400" : 
                    log.type === 'success' ? "text-green-400" : "text-slate-300"
                  )}>
                    {log.message}
                  </span>
                </div>
              ))}
            </ScrollArea>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FixProgressTracker;