import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Activity, RefreshCw, Server, ShieldCheck, Database, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useRunDiagnostics from '@/hooks/useRunDiagnostics';
import TestResult from '@/components/TestResult';
import DiagnosticSummary from '@/components/DiagnosticSummary';

const DiagnosticPage = () => {
  const { loading, results, error, runTests } = useRunDiagnostics();

  // Run tests automatically on mount
  useEffect(() => {
    runTests();
  }, [runTests]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>System Diagnostics - Hostinger Horizons</title>
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-4">
            <Activity className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">System Diagnostics</h1>
          <p className="text-slate-600">
            Verify connectivity between Frontend, API Server, and PocketBase Database.
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8 flex items-center gap-3"
          >
            <Server className="w-6 h-6 flex-shrink-0" />
            <div>
              <h3 className="font-bold">Connection Error</h3>
              <p className="text-sm">{error}</p>
              <p className="text-xs mt-1 text-red-500">Is the API server running?</p>
            </div>
          </motion.div>
        )}

        {results && results.summary && (
          <DiagnosticSummary summary={results.summary} />
        )}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Test Results
            </h2>
            <Button 
              onClick={runTests} 
              disabled={loading}
              variant="outline"
              className="gap-2"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              {loading ? 'Running Tests...' : 'Run Tests Again'}
            </Button>
          </div>

          <div className="p-6">
            {loading && !results && (
              <div className="py-12 text-center">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                <p className="text-slate-500">Establishing connection and running diagnostics...</p>
              </div>
            )}

            {results && results.tests && (
              <div className="space-y-2">
                {results.tests.map((test, index) => (
                  <TestResult key={index} test={test} index={index} />
                ))}
              </div>
            )}
            
            {!loading && !results && !error && (
              <div className="text-center py-12 text-slate-400">
                <Database className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p>Ready to run diagnostics.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-slate-400">
          <p>Hostinger Horizons Diagnostic Tool v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticPage;