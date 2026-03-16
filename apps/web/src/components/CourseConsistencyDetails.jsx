import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Briefcase, 
  Download,
  ChevronRight
} from 'lucide-react';

const StatusIcon = ({ isComplete }) => {
  return isComplete ? (
    <CheckCircle2 className="h-5 w-5 text-green-500" />
  ) : (
    <XCircle className="h-5 w-5 text-red-500" />
  );
};

const CourseConsistencyDetails = ({ course }) => {
  if (!course) return null;

  const handleExport = () => {
    const report = JSON.stringify(course, null, 2);
    const blob = new Blob([report], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${course.title.replace(/\s+/g, '_')}_audit_report.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
          <p className="text-gray-500">{course.description?.substring(0, 100)}...</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline">{course.instructor}</Badge>
            <Badge className={
              course.status === 'Complete' ? 'bg-green-100 text-green-800' :
              course.status === 'At Risk' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }>
              {course.status}
            </Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-blue-600">{course.completionPercentage}%</div>
          <div className="text-sm text-gray-500">Overall Health</div>
          <Button variant="outline" size="sm" onClick={handleExport} className="mt-2 gap-2">
            <Download className="h-4 w-4" /> Export Report
          </Button>
        </div>
      </div>

      <Progress value={course.completionPercentage} className="h-2" />

      {/* Missing Components Summary */}
      {course.missingComponents.length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-red-800 text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> Action Required
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-32 pr-4">
              <ul className="space-y-2">
                {course.missingComponents.map((item, idx) => (
                  <li key={idx} className="text-sm text-red-700 flex items-start gap-2">
                    <span className="font-semibold min-w-[120px]">{item.type}:</span>
                    <span>{item.name} (Found: {item.current}, Needed: {item.required})</span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>
      )}

      {/* Lesson Breakdown */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Lesson Breakdown</h3>
        {course.lessons.length === 0 ? (
          <div className="p-8 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <BookOpen className="h-10 w-10 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">No lessons found for this course.</p>
            <p className="text-sm text-red-500 mt-1">Minimum 5 lessons required.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {course.lessons.map((lesson) => (
              <Card key={lesson.id} className={`overflow-hidden ${lesson.isComplete ? 'border-green-200' : 'border-red-200'}`}>
                <div className={`h-1 w-full ${lesson.isComplete ? 'bg-green-500' : 'bg-red-500'}`} />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <StatusIcon isComplete={lesson.isComplete} />
                      <div>
                        <h4 className="font-semibold text-gray-900">{lesson.title}</h4>
                        <p className="text-xs text-gray-500">ID: {lesson.id}</p>
                      </div>
                    </div>
                    <Badge variant={lesson.isComplete ? 'default' : 'destructive'}>
                      {lesson.isComplete ? 'Verified' : 'Issues Found'}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <HelpCircle className={`h-4 w-4 ${lesson.quizzes.some(q => q.questionCount >= 10) ? 'text-green-600' : 'text-red-500'}`} />
                      <div>
                        <span className="block font-medium">Quiz</span>
                        <span className="text-xs text-gray-500">
                          {lesson.quizzes.length > 0 ? `${lesson.quizzes[0].questionCount}/10 Qs` : 'Missing'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <BookOpen className={`h-4 w-4 ${lesson.termCount >= 10 ? 'text-green-600' : 'text-red-500'}`} />
                      <div>
                        <span className="block font-medium">Glossary</span>
                        <span className="text-xs text-gray-500">{lesson.termCount}/10 Terms</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <Briefcase className={`h-4 w-4 ${lesson.caseStudies.length >= 1 ? 'text-green-600' : 'text-red-500'}`} />
                      <div>
                        <span className="block font-medium">Case Study</span>
                        <span className="text-xs text-gray-500">{lesson.caseStudies.length}/1 Found</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <FileText className={`h-4 w-4 ${lesson.resources.length >= 3 ? 'text-green-600' : 'text-red-500'}`} />
                      <div>
                        <span className="block font-medium">Resources</span>
                        <span className="text-xs text-gray-500">{lesson.resources.length}/3 Files</span>
                      </div>
                    </div>
                  </div>

                  {lesson.issues.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs font-semibold text-red-600 mb-1">Issues:</p>
                      <ul className="list-disc list-inside text-xs text-red-500">
                        {lesson.issues.map((issue, i) => (
                          <li key={i}>{issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseConsistencyDetails;