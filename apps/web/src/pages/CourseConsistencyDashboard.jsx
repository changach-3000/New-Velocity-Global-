import React, { useState } from 'react';
import { useCourseValidator } from '@/hooks/useCourseValidator';
import CourseConsistencyAudit from '@/components/CourseConsistencyAudit';
import CourseConsistencyDetails from '@/components/CourseConsistencyDetails';
import CourseCreationChecklist from '@/components/CourseCreationChecklist';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { 
  LayoutDashboard, 
  ListChecks, 
  RefreshCw, 
  Download,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseConsistencyDashboard = () => {
  const { courses, stats, loading, error, lastRun, refresh } = useCourseValidator();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setIsDetailsOpen(true);
  };

  const handleExportAll = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Course ID,Title,Status,Completion %,Missing Items Count\n"
      + courses.map(c => `${c.id},"${c.title}",${c.status},${c.completionPercentage},${c.missingComponents.length}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "all_courses_audit.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-medium text-gray-900">Course Consistency Dashboard</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              Quality Assurance Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Monitor course structure compliance and content completeness.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {lastRun && (
              <span className="text-xs text-gray-500 hidden md:inline">
                Last updated: {lastRun.toLocaleTimeString()}
              </span>
            )}
            <Button variant="outline" onClick={refresh} disabled={loading} className="gap-2">
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Auditing...' : 'Run Audit'}
            </Button>
            <Button onClick={handleExportAll} className="gap-2">
              <Download className="h-4 w-4" /> Export Summary
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="audit" className="space-y-6">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="audit" className="gap-2">
              <LayoutDashboard className="h-4 w-4" /> Audit Results
            </TabsTrigger>
            <TabsTrigger value="checklist" className="gap-2">
              <ListChecks className="h-4 w-4" /> New Course Checklist
            </TabsTrigger>
          </TabsList>

          <TabsContent value="audit" className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                Error running audit: {error}
              </div>
            )}
            
            <CourseConsistencyAudit 
              data={courses} 
              stats={stats} 
              onViewDetails={handleViewDetails} 
            />
          </TabsContent>

          <TabsContent value="checklist">
            <CourseCreationChecklist />
          </TabsContent>
        </Tabs>

        {/* Details Dialog */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Course Audit Details</DialogTitle>
            </DialogHeader>
            {selectedCourse && <CourseConsistencyDetails course={selectedCourse} />}
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
};

export default CourseConsistencyDashboard;