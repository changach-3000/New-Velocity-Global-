import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clock, CheckCircle2, Circle, PlayCircle, FileText, Download, ChevronRight, AlertCircle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const LessonProgressCard = ({ lesson, progress }) => {
  const status = progress?.completionStatus || 'not_started';
  const quizScore = progress?.quizScore || 0;
  const timeSpent = progress?.timeSpentMinutes || 0;
  const resourcesCount = progress?.resourcesDownloaded || 0;

  const getStatusColor = (s) => {
    switch (s) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'in_progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getStatusIcon = (s) => {
    switch (s) {
      case 'completed': return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'in_progress': return <PlayCircle className="w-4 h-4 text-blue-600" />;
      default: return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatStatus = (s) => {
    return s.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  return (
    <Card className="hover:shadow-md transition-all duration-300 border-l-4 border-l-transparent hover:border-l-blue-500 group">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className={cn("gap-1.5", getStatusColor(status))}>
            {getStatusIcon(status)}
            {formatStatus(status)}
          </Badge>
          <span className="text-xs font-mono text-gray-400">Module {lesson.lessonNumber}</span>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-blue-700 transition-colors">
          {lesson.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-3 space-y-4">
        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-medium text-gray-500">
            <span>Completion</span>
            <span>{status === 'completed' ? 100 : status === 'in_progress' ? 50 : 0}%</span>
          </div>
          <Progress value={status === 'completed' ? 100 : status === 'in_progress' ? 50 : 0} className="h-2" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="bg-gray-50 p-2 rounded-lg text-center border border-gray-100">
            <div className="flex justify-center mb-1">
              <Clock className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-xs text-gray-500">Time</p>
            <p className="text-sm font-bold text-gray-700">{timeSpent}m</p>
          </div>
          
          <div className="bg-gray-50 p-2 rounded-lg text-center border border-gray-100">
            <div className="flex justify-center mb-1">
              {quizScore >= 70 ? (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              ) : quizScore > 0 ? (
                <AlertCircle className="w-4 h-4 text-amber-500" />
              ) : (
                <HelpCircle className="w-4 h-4 text-gray-400" />
              )}
            </div>
            <p className="text-xs text-gray-500">Quiz</p>
            <p className={cn("text-sm font-bold", quizScore >= 70 ? "text-green-600" : "text-gray-700")}>
              {quizScore > 0 ? `${quizScore}%` : '-'}
            </p>
          </div>

          <div className="bg-gray-50 p-2 rounded-lg text-center border border-gray-100">
            <div className="flex justify-center mb-1">
              <Download className="w-4 h-4 text-purple-500" />
            </div>
            <p className="text-xs text-gray-500">Files</p>
            <p className="text-sm font-bold text-gray-700">{resourcesCount}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Button asChild variant="ghost" className="w-full justify-between hover:bg-blue-50 hover:text-blue-700 group/btn">
          <Link to={`/vendor-leasing-course?lessonId=${lesson.id}`}>
            View Details
            <ChevronRight className="w-4 h-4 opacity-50 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LessonProgressCard;