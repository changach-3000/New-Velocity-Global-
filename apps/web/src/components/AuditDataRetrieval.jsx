import React, { useState, useEffect, useMemo } from 'react';
import { runComprehensiveAudit } from '@/utils/ComprehensiveAuditEngine';
import { generatePDF, generateCSV } from '@/utils/AuditExportUtility';
import AuditProgressTracker from '@/components/AuditProgressTracker';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  FileText, 
  Download,
  BarChart3,
  ListChecks,
  AlertOctagon,
  ArrowRight
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';

const AuditDataRetrieval = ({ onAuditComplete }) => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const executeAudit = async () => {
      setLoading(true);
      try {
        const auditData = await runComprehensiveAudit((msg, pct) => {
          setStatusMessage(msg);
          setProgress(pct);
        });
        setResults(auditData);
        if (onAuditComplete) {
          onAuditComplete(auditData);
        }
      } catch (error) {
        console.error("Audit failed:", error);
        setStatusMessage(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    executeAudit();
  }, []); // Run once on mount

  // Derived Statistics
  const stats = useMemo(() => {
    if (!results) return null;
    
    const courses = results.courses;
    const totalCourses = courses.length;
    const completeCourses = courses.filter(c => c.completionPercentage === 100).length;
    const incompleteCourses = totalCourses - completeCourses;
    const totalMissing = results.summary.totalMissingComponents;
    const health = results.healthScore;

    // Critical Issues Analysis
    const sortedByCompletion = [...courses].sort((a, b) => a.completionPercentage - b.completionPercentage);
    const lowestCompletion = sortedByCompletion.slice(0, 3);
    
    const immediateAttention = courses.filter(c => c.lessonCount < 5 || c.completionPercentage < 50);

    // Common Missing Components
    const missingCounts = {
      'Quizzes': 0,
      'Glossaries': 0,
      'Case Studies': 0,
      'Resources': 0,
      'Badges': 0,
      'Progress Tracking': 0
    };

    courses.forEach(c => {
      if (!c.hasBadges) missingCounts['Badges']++;
      if (!c.hasProgressTracking) missingCounts['Progress Tracking']++;
      c.lessons.forEach(l => {
        if (!l.hasQuiz) missingCounts['Quizzes']++;
        if (!l.hasGlossary) missingCounts['Glossaries']++;
        if (!l.hasCaseStudy) missingCounts['Case Studies']++;
        if (l.resourceCount === 0) missingCounts['Resources']++;
      });
    });

    const commonMissing = Object.entries(missingCounts)
      .sort(([,a], [,b]) => b - a)
      .filter(([,count]) => count > 0)
      .slice(0, 3);

    return {
      totalCourses,
      completeCourses,
      incompleteCourses,
      totalMissing,
      health,
      lowestCompletion,
      immediateAttention,
      commonMissing
    };
  }, [results]);

  if (loading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Running System Audit</CardTitle>
            <CardDescription>Please wait while we analyze all courses and components...</CardDescription>
          </CardHeader>
          <CardContent>
            <AuditProgressTracker 
              progress={progress} 
              statusMessage={statusMessage} 
              isPaused={false} 
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!results || !stats) return <div className="text-red-500">Failed to load audit results.</div>;

  return (
    <div className="space-y-8">
      {/* Header Actions */}
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={() => generatePDF(results)}>
          <FileText className="h-4 w-4 mr-2" /> Export PDF
        </Button>
        <Button variant="outline" size="sm" onClick={() => generateCSV(results)}>
          <Download className="h-4 w-4 mr-2" /> Export CSV
        </Button>
      </div>

      {/* 1. Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-blue-700">Total Courses</div>
            <div className="text-3xl font-bold text-blue-900">{stats.totalCourses}</div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-green-700">Fully Complete</div>
            <div className="text-3xl font-bold text-green-900">{stats.completeCourses}</div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-yellow-700">Needs Work</div>
            <div className="text-3xl font-bold text-yellow-900">{stats.incompleteCourses}</div>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-red-700">Missing Items</div>
            <div className="text-3xl font-bold text-red-900">{stats.totalMissing}</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-50 border-gray-200">
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-700">System Health</div>
            <div className={`text-3xl font-bold ${stats.health >= 80 ? 'text-green-600' : 'text-red-600'}`}>
              {stats.health}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 4. Critical Issues Section (Moved up for visibility) */}
      <Card className="border-red-200 shadow-sm">
        <CardHeader className="bg-red-50/50 pb-4">
          <CardTitle className="flex items-center gap-2 text-red-800">
            <AlertOctagon className="h-5 w-5" /> Critical Issues Report
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-red-500" /> Lowest Completion
            </h4>
            <ul className="space-y-2">
              {stats.lowestCompletion.map(c => (
                <li key={c.id} className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                  <span className="truncate max-w-[150px]" title={c.name}>{c.name}</span>
                  <Badge variant="destructive">{c.completionPercentage}%</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" /> Most Common Missing
            </h4>
            <ul className="space-y-2">
              {stats.commonMissing.map(([type, count]) => (
                <li key={type} className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                  <span>{type}</span>
                  <Badge variant="secondary">{count} missing</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <AlertOctagon className="h-4 w-4 text-red-600" /> Immediate Attention
            </h4>
            <ScrollArea className="h-[120px]">
              <ul className="space-y-2">
                {stats.immediateAttention.length > 0 ? (
                  stats.immediateAttention.map(c => (
                    <li key={c.id} className="text-sm text-red-700 flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{c.name} ({c.completionPercentage}%)</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-green-600 italic">No critical courses found.</li>
                )}
              </ul>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>

      {/* 2. Course-by-Course Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-blue-600" /> Course Breakdown
          </CardTitle>
          <CardDescription>Detailed status of all required components per course</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-[200px]">Course Name</TableHead>
                  <TableHead className="w-[150px]">Completion</TableHead>
                  <TableHead className="text-center">Lessons</TableHead>
                  <TableHead className="text-center">Quizzes</TableHead>
                  <TableHead className="text-center">Glossary</TableHead>
                  <TableHead className="text-center">Case Studies</TableHead>
                  <TableHead className="text-center">Resources</TableHead>
                  <TableHead className="text-center">Badges</TableHead>
                  <TableHead className="text-center">Tracking</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.courses.map((course) => {
                  const quizCount = course.lessons.filter(l => l.hasQuiz).length;
                  const glossaryCount = course.lessons.filter(l => l.hasGlossary).length;
                  const caseStudyCount = course.lessons.filter(l => l.hasCaseStudy).length;
                  const resourceCount = course.lessons.filter(l => l.resourceCount > 0).length;
                  const totalLessons = course.lessons.length;

                  return (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">
                        {course.name}
                        {course.missingComponents.length > 0 && (
                          <div className="text-xs text-red-500 mt-1">{course.missingComponents.length} issues</div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className={`font-bold ${course.completionPercentage === 100 ? 'text-green-600' : 'text-amber-600'}`}>
                            {course.completionPercentage}%
                          </span>
                          <Progress value={course.completionPercentage} className="h-1.5" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={course.lessonCount >= 5 ? 'outline' : 'destructive'}>
                          {course.lessonCount}/5
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={`text-xs font-medium ${quizCount === totalLessons && totalLessons > 0 ? 'text-green-600' : 'text-red-500'}`}>
                          {quizCount}/{totalLessons}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={`text-xs font-medium ${glossaryCount === totalLessons && totalLessons > 0 ? 'text-green-600' : 'text-red-500'}`}>
                          {glossaryCount}/{totalLessons}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={`text-xs font-medium ${caseStudyCount === totalLessons && totalLessons > 0 ? 'text-green-600' : 'text-red-500'}`}>
                          {caseStudyCount}/{totalLessons}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={`text-xs font-medium ${resourceCount === totalLessons && totalLessons > 0 ? 'text-green-600' : 'text-red-500'}`}>
                          {resourceCount}/{totalLessons}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        {course.hasBadges ? <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" /> : <XCircle className="h-4 w-4 text-red-500 mx-auto" />}
                      </TableCell>
                      <TableCell className="text-center">
                        {course.hasProgressTracking ? <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" /> : <XCircle className="h-4 w-4 text-red-500 mx-auto" />}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* 3. Lesson-by-Lesson Details (Only for incomplete courses) */}
      {stats.incompleteCourses > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> Action Items: Incomplete Courses
            </CardTitle>
            <CardDescription>Specific missing components by lesson for courses needing work</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {results.courses.filter(c => c.completionPercentage < 100).map(course => (
                <div key={course.id} className="border rounded-lg p-4 bg-gray-50/50">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-gray-900">{course.name}</h4>
                    <Badge variant="outline" className="bg-white">Completion: {course.completionPercentage}%</Badge>
                  </div>
                  
                  {/* Course Level Issues */}
                  {course.missingComponents.length > 0 && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded text-sm text-red-800">
                      <strong>Course Issues:</strong>
                      <ul className="list-disc list-inside mt-1">
                        {course.missingComponents.map((issue, i) => (
                          <li key={i}>{issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Lesson Level Issues */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.lessons.filter(l => l.issues.length > 0).map(lesson => (
                      <div key={lesson.id} className="bg-white p-3 rounded border shadow-sm">
                        <div className="font-medium text-sm mb-1 border-b pb-1">{lesson.title}</div>
                        <ul className="space-y-1 mt-2">
                          {lesson.issues.map((issue, idx) => (
                            <li key={idx} className="text-xs text-red-600 flex items-start gap-1.5">
                              <XCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  {course.lessons.filter(l => l.issues.length > 0).length === 0 && course.missingComponents.length === 0 && (
                    <p className="text-sm text-gray-500 italic">No specific lesson issues found, check course-level configuration.</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AuditDataRetrieval;