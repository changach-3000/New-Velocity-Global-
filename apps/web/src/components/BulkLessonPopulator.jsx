import React, { useState, useEffect, useRef } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Play, 
  XCircle,
  Database
} from 'lucide-react';
import apiServerClient from '@/lib/apiServerClient';
import { useToast } from '@/components/ui/use-toast';

const BulkLessonPopulator = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle, running, completed, failed
  const [progress, setProgress] = useState(0);
  const [stats, setStats] = useState({ total: 0, completed: 0, errors: 0 });
  const [logs, setLogs] = useState([]);
  const [batchSize, setBatchSize] = useState(10);
  const [isPolling, setIsPolling] = useState(false);
  const pollInterval = useRef(null);
  const { toast } = useToast();

  const fetchStatus = async () => {
    try {
      const res = await apiServerClient.fetch('/bulk-lessons/status');
      if (!res.ok) throw new Error('Failed to fetch status');
      const data = await res.json();
      
      setStatus(data.status);
      setProgress(data.progress.percentage);
      setStats({
        total: data.progress.total,
        completed: data.progress.completed,
        errors: data.progress.errors
      });
      setLogs(data.logs || []);

      if (data.status === 'completed' || data.status === 'failed') {
        stopPolling();
      }
    } catch (err) {
      console.error("Polling error:", err);
      // Don't stop polling immediately on one error, but maybe warn
    }
  };

  const startPolling = () => {
    if (pollInterval.current) return;
    setIsPolling(true);
    fetchStatus(); // Initial fetch
    pollInterval.current = setInterval(fetchStatus, 2000);
  };

  const stopPolling = () => {
    if (pollInterval.current) {
      clearInterval(pollInterval.current);
      pollInterval.current = null;
    }
    setIsPolling(false);
  };

  useEffect(() => {
    if (isOpen) {
      // Check status on open in case job is already running
      fetchStatus();
    } else {
      stopPolling();
    }
    return () => stopPolling();
  }, [isOpen]);

  const handleStart = async () => {
    try {
      const res = await apiServerClient.fetch('/bulk-lessons/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ batchSize: parseInt(batchSize) })
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to start job');
      }

      toast({
        title: "Job Started",
        description: "Bulk population process has begun.",
      });
      
      setStatus('running');
      startPolling();
    } catch (err) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            Bulk Lesson Population
          </DialogTitle>
          <DialogDescription>
            Automatically generate lessons, quizzes, glossaries, and resources for all courses.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-6 flex-1 overflow-hidden flex flex-col">
          {/* Configuration */}
          {status === 'idle' && (
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-yellow-800">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Warning: Large Operation</p>
                  <p>This process will create approximately <strong>1,925 records</strong> (77 courses × 5 lessons × 5 content types).</p>
                  <p className="mt-2">Please ensure the database is backed up if necessary.</p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="batchSize" className="text-yellow-900">Batch Size</Label>
                  <Input 
                    type="number" 
                    id="batchSize" 
                    value={batchSize} 
                    onChange={(e) => setBatchSize(e.target.value)}
                    min={1}
                    max={50}
                    className="bg-white"
                  />
                  <p className="text-xs text-yellow-700">Lower batch size reduces server load.</p>
                </div>
              </div>
            </div>
          )}

          {/* Progress UI */}
          {(status === 'running' || status === 'completed' || status === 'failed') && (
            <div className="space-y-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress: {stats.completed} / {stats.total || '?'} courses</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-3" />
              
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="bg-gray-50 p-2 rounded border">
                  <div className="text-gray-500">Completed</div>
                  <div className="font-bold text-green-600">{stats.completed}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded border">
                  <div className="text-gray-500">Errors</div>
                  <div className="font-bold text-red-600">{stats.errors}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded border">
                  <div className="text-gray-500">Status</div>
                  <div className="font-bold capitalize">{status}</div>
                </div>
              </div>
            </div>
          )}

          {/* Logs */}
          <div className="flex-1 min-h-[200px] border rounded-md bg-slate-950 text-slate-50 font-mono text-xs overflow-hidden flex flex-col">
            <div className="p-2 border-b border-slate-800 bg-slate-900 font-semibold text-slate-400">
              Process Logs
            </div>
            <ScrollArea className="flex-1 p-4">
              {logs.length === 0 ? (
                <div className="text-slate-500 italic">Waiting to start...</div>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className="mb-1">
                    <span className="text-slate-500">[{new Date(log.timestamp).toLocaleTimeString()}]</span>{' '}
                    <span className={
                      log.type === 'error' ? 'text-red-400' : 
                      log.type === 'success' ? 'text-green-400' : 
                      log.type === 'skip' ? 'text-yellow-400' : 'text-slate-300'
                    }>
                      {log.message}
                    </span>
                  </div>
                ))
              )}
            </ScrollArea>
          </div>
        </div>

        <DialogFooter>
          {status === 'idle' ? (
            <Button onClick={handleStart} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
              <Play className="w-4 h-4 mr-2" /> Start Population
            </Button>
          ) : status === 'running' ? (
            <Button disabled className="w-full sm:w-auto">
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...
            </Button>
          ) : (
            <Button onClick={onClose} variant="outline" className="w-full sm:w-auto">
              Close
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BulkLessonPopulator;