import React, { useState, useEffect } from 'react';
import { runComprehensiveAudit } from '@/utils/ComprehensiveAuditEngine';
import { runComprehensiveFix } from '@/utils/ComprehensiveAuditFixer';
import AuditProgressTracker from '@/components/AuditProgressTracker.jsx';
import AuditResultsDisplay from '@/components/AuditResultsDisplay.jsx';
import FixProgressTracker from '@/components/FixProgressTracker.jsx';
import BulkLessonPopulator from '@/components/BulkLessonPopulator.jsx';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  RefreshCw,
  CheckCircle2,
  Loader2,
  Database
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AuditReportPage = () => {
  const [auditResults, setAuditResults] = useState(null);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);
  const [auditStatus, setAuditStatus] = useState('');
  
  const [isFixing, setIsFixing] = useState(false);
  const [fixProgress, setFixProgress] = useState(0);
  const [fixReport, setFixReport] = useState(null);
  
  // Detailed fix state tracking
  const [courseFixStates, setCourseFixStates] = useState({});
  const [fixLogs, setFixLogs] = useState([]);
  
  // Bulk Population Modal State
  const [isBulkPopulatorOpen, setIsBulkPopulatorOpen] = useState(false);
  
  const { toast } = useToast();

  const startAudit = async () => {
    setIsAuditing(true);
    setAuditResults(null);
    setAuditProgress(0);
    setAuditStatus('Initializing audit...');
    setFixReport(null); // Clear previous fix reports
    setCourseFixStates({});
    setFixLogs([]);
    
    try {
      const results = await runComprehensiveAudit((msg, pct) => {
        setAuditStatus(msg);
        setAuditProgress(pct);
      });
      setAuditResults(results);
      
      // Initialize fix states for courses needing work
      const initialStates = {};
      results.courses.forEach(c => {
        if (c.completionPercentage < 100) {
          initialStates[c.id] = {
            name: c.name,
            status: 'pending',
            logs: []
          };
        }
      });
      setCourseFixStates(initialStates);
      
      toast({
        title: "Audit Complete",
        description: "System scan finished successfully.",
        className: "bg-green-50 border-green-200 text-green-800",
      });
    } catch (error) {
      toast({
        title: "Audit Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsAuditing(false);
    }
  };

  useEffect(() => {
    startAudit();
  }, []);

  const handleRunFixes = async (retryCourseId = null) => {
    if (!auditResults) return;
    
    // If not a retry, confirm with user
    if (!retryCourseId && !window.confirm("This will automatically create missing components (quizzes, glossaries, etc.) for all incomplete courses. Are you sure?")) {
      return;
    }

    setIsFixing(true);
    setFixProgress(0);
    
    // If retrying specific course, reset its state
    if (retryCourseId) {
      setCourseFixStates(prev => ({
        ...prev,
        [retryCourseId]: { ...prev[retryCourseId], status: 'pending', logs: [] }
      }));
    }

    try {
      const results = await runComprehensiveFix(
        auditResults, 
        (msg, pct) => {
          if (!retryCourseId) setFixProgress(pct);
        },
        (courseId, status, logEntry) => {
          setCourseFixStates(prev => {
            const currentState = prev[courseId] || { name: 'Unknown Course', logs: [] };
            const newLogs = logEntry ? [...(currentState.logs || []), logEntry] : currentState.logs;
            
            if (logEntry) {
              setFixLogs(prevLogs => [...prevLogs, logEntry]);
            }

            return {
              ...prev,
              [courseId]: {
                ...currentState,
                status: status || currentState.status,
                logs: newLogs
              }
            };
          });
        }
      );
      
      setFixReport(results);
      
      const successCount = results.fixedItems.length;
      const errorCount = results.errors.length;

      if (errorCount > 0) {
        toast({
          title: "Fix Process Completed with Errors",
          description: `Fixed ${successCount} items, but encountered ${errorCount} errors. Check details below.`,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Fixes Applied Successfully",
          description: `Fixed ${successCount} items across the system.`,
          className: "bg-green-50 border-green-200 text-green-800",
        });
      }
      
    } catch (error) {
      toast({
        title: "Fix Process Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsFixing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              System Audit & Repair
            </h1>
            <p className="text-gray-600 mt-1">
              Comprehensive diagnostic tool for course content and data integrity.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={() => setIsBulkPopulatorOpen(true)}
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 flex items-center gap-2"
            >
              <Database className="h-5 w-5" />
              Bulk Populate Lessons
            </Button>

            <Button 
              onClick={startAudit}
              disabled={isAuditing || isFixing}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg h-auto shadow-sm transition-colors flex items-center gap-2"
            >
              {isAuditing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Running Audit...
                </>
              ) : (
                <>
                  <RefreshCw className="h-5 w-5" />
                  Run System Audit
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Audit Progress */}
        {isAuditing && (
          <AuditProgressTracker 
            progress={auditProgress} 
            statusMessage={auditStatus}
            isPaused={false}
          />
        )}

        {/* Fix Progress & Detailed Tracker */}
        {(isFixing || fixReport || Object.keys(courseFixStates).length > 0) && !isAuditing && (
          <div className="animate-in fade-in slide-in-from-top-4 mb-8">
            <FixProgressTracker 
              progress={fixProgress}
              courseStates={courseFixStates}
              logs={fixLogs}
              isFixing={isFixing}
              onRetry={(courseId) => handleRunFixes(courseId || null)}
            />
          </div>
        )}

        {/* Results Display */}
        {!isAuditing && auditResults && (
          <AuditResultsDisplay 
            results={auditResults} 
            onFixAll={() => handleRunFixes()}
            isFixing={isFixing}
          />
        )}

        {/* Bulk Populator Modal */}
        <BulkLessonPopulator 
          isOpen={isBulkPopulatorOpen} 
          onClose={() => setIsBulkPopulatorOpen(false)} 
        />

      </div>
    </div>
  );
};

export default AuditReportPage;