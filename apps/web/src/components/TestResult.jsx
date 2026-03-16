import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock, MinusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const TestResult = ({ test, index }) => {
  const { name, status, message, error, duration } = test;

  const getStatusIcon = () => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'failed':
        return <XCircle className="w-6 h-6 text-red-500" />;
      case 'skipped':
        return <MinusCircle className="w-6 h-6 text-gray-400" />;
      default:
        return <AlertCircle className="w-6 h-6 text-yellow-500" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'passed':
        return 'bg-green-50 border-green-200';
      case 'failed':
        return 'bg-red-50 border-red-200';
      case 'skipped':
        return 'bg-gray-50 border-gray-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "p-4 rounded-xl border mb-3 transition-all duration-200",
        getStatusColor()
      )}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 flex-shrink-0">
          {getStatusIcon()}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            {duration > 0 && (
              <div className="flex items-center text-xs text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                <Clock className="w-3 h-3 mr-1" />
                {duration}ms
              </div>
            )}
          </div>
          
          <p className={cn("text-sm", status === 'failed' ? "text-red-700" : "text-gray-600")}>
            {message}
          </p>
          
          {error && (
            <div className="mt-3 p-3 bg-white rounded-lg border border-red-100 text-xs font-mono text-red-600 overflow-x-auto">
              <strong>Error Details:</strong> {error}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestResult;