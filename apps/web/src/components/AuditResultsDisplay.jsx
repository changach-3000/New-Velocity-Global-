import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  BookOpen, 
  FileText, 
  Award,
  Activity,
  Wrench,
  Loader2
} from 'lucide-react';

const AuditResultsDisplay = ({ results, onFixAll, isFixing }) => {
  if (!results) return null;

  const { summary, courses, healthScore } = results;
  const hasIssues = summary.coursesNeedingWork > 0;

  return (
    <div className="space-y-6 pb-8">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-t-4 border-t-blue-600 shadow-sm">
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500">System Health Score</div>
            <div className="flex items-baseline gap-2">
              <div className={`text-3xl font-bold ${healthScore >= 80 ? 'text-green-600' : 'text-red-600'}`}>
                {healthScore}%
              </div>
              <span className="text-xs text-gray-400">compliance</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-green-600 shadow-sm">
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500">Fully Complete Courses</div>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-green-700">{summary.coursesFullyComplete}</div>
              <span className="text-xs text-gray-400">/ {summary.totalCourses} total</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-amber-500 shadow-sm">
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500">Courses Needing Work</div>
            <div className="text-3xl font-bold text-amber-600">{summary.coursesNeedingWork}</div>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-red-500 shadow-sm">
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500">Total Missing Components</div>
            <div className="text-3xl font-bold text-red-600">{summary.totalMissingComponents}</div>
          </CardContent>
        </Card>
      </div>

      {/* Course Breakdown */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Detailed Course Audit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {courses.map((course) => (
              <AccordionItem key={course.id} value={course.id} className="border-b border-gray-100">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full pr-4 gap-4">
                    <div className="flex items-center gap-3 min-w-[250px]">
                      {course.completionPercentage === 100 ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                      ) : course.completionPercentage >= 70 ? (
                        <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                      )}
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">{course.name}</div>
                        <div className="text-xs text-gray-500">ID: {course.id}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1 max-w-md flex flex-col gap-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Completion</span>
                        <span className="font-bold">{course.completionPercentage}%</span>
                      </div>
                      <Progress value={course.completionPercentage} className="h-2" />
                    </div>

                    <div className="flex gap-2 text-xs flex-wrap justify-end">
                      <Badge variant="outline" className="bg-gray-50">{course.lessonCount} Lessons</Badge>
                      {course.missingComponents.length > 0 && (
                        <Badge variant="destructive">
                          {course.missingComponents.length} Issues
                        </Badge>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4 pb-2 px-2">
                    {/* Course Level Status */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className={`p-3 rounded border flex items-center gap-3 ${course.hasBadges ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                        <Award className={`h-5 w-5 ${course.hasBadges ? 'text-green-600' : 'text-red-500'}`} />
                        <div>
                          <div className="text-sm font-semibold">Badge System</div>
                          <div className="text-xs text-gray-500">{course.hasBadges ? 'Active' : 'Missing'}</div>
                        </div>
                      </div>
                      <div className={`p-3 rounded border flex items-center gap-3 ${course.hasProgressTracking ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                        <Activity className={`h-5 w-5 ${course.hasProgressTracking ? 'text-green-600' : 'text-red-500'}`} />
                        <div>
                          <div className="text-sm font-semibold">Progress Tracking</div>
                          <div className="text-xs text-gray-500">{course.hasProgressTracking ? 'Active' : 'Inactive'}</div>
                        </div>
                      </div>
                      <div className={`p-3 rounded border flex items-center gap-3 ${course.lessonCount >= 5 ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                        <BookOpen className={`h-5 w-5 ${course.lessonCount >= 5 ? 'text-green-600' : 'text-red-500'}`} />
                        <div>
                          <div className="text-sm font-semibold">Lesson Count</div>
                          <div className="text-xs text-gray-500">{course.lessonCount} / 5 Required</div>
                        </div>
                      </div>
                    </div>

                    {/* Missing Components List */}
                    {course.missingComponents.length > 0 && (
                      <div className="bg-red-50 p-4 rounded-md border border-red-100">
                        <h4 className="text-sm font-bold text-red-800 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" /> Priority Fixes Needed:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {course.missingComponents.map((issue, i) => (
                            <li key={i} className="text-sm text-red-700 flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Lesson Grid */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Lesson Breakdown</h4>
                      <div className="space-y-2">
                        {course.lessons.map((lesson) => (
                          <div key={lesson.id} className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-gray-50 rounded border hover:bg-gray-100 transition-colors">
                            <div className="flex items-center gap-3 mb-2 md:mb-0">
                              <div className={`h-2 w-2 rounded-full ${lesson.issues.length === 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                              <span className="text-sm font-medium text-gray-700">{lesson.title}</span>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <Badge variant={lesson.hasQuiz ? "outline" : "destructive"} className={`text-xs ${lesson.hasQuiz ? 'bg-white text-green-700 border-green-200' : ''}`}>
                                Quiz (10+ Qs)
                              </Badge>
                              <Badge variant={lesson.hasGlossary ? "outline" : "destructive"} className={`text-xs ${lesson.hasGlossary ? 'bg-white text-green-700 border-green-200' : ''}`}>
                                Glossary (10+ Terms)
                              </Badge>
                              <Badge variant={lesson.hasCaseStudy ? "outline" : "destructive"} className={`text-xs ${lesson.hasCaseStudy ? 'bg-white text-green-700 border-green-200' : ''}`}>
                                Case Study
                              </Badge>
                              <Badge variant={lesson.resourceCount > 0 ? "outline" : "destructive"} className={`text-xs ${lesson.resourceCount > 0 ? 'bg-white text-green-700 border-green-200' : ''}`}>
                                Resources ({lesson.resourceCount})
                              </Badge>
                            </div>
                          </div>
                        ))}
                        {course.lessons.length === 0 && (
                          <div className="text-center py-4 text-gray-500 italic text-sm">
                            No lessons found in this course.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Auto-Fix All Button Section */}
      {hasIssues && onFixAll && (
        <div className="flex justify-center pt-4 pb-8">
          <Button 
            onClick={onFixAll}
            disabled={isFixing}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg h-auto text-lg shadow-md transition-all transform hover:scale-105 flex items-center gap-3 my-4"
          >
            {isFixing ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Applying Fixes...
              </>
            ) : (
              <>
                <Wrench className="h-5 w-5" />
                Auto-Fix All Issues
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuditResultsDisplay;