import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

const DiagnosticSummary = ({ summary }) => {
  const { total, passed, failed, firstFailedTest } = summary;
  
  const isSuccess = failed === 0;
  
  const getSuggestions = () => {
    if (isSuccess) return null;
    
    const suggestions = [];
    if (firstFailedTest?.includes('Environment')) {
      suggestions.push('Check apps/api/.env file for missing variables.');
      suggestions.push('Ensure POCKETBASE_URL matches your running instance.');
    } else if (firstFailedTest?.includes('Network') || firstFailedTest?.includes('Health')) {
      suggestions.push('Ensure PocketBase is running (./pocketbase serve).');
      suggestions.push('Check if the port (8090) is accessible.');
    } else if (firstFailedTest?.includes('Auth')) {
      suggestions.push('Verify POCKETBASE_ADMIN_EMAIL and PASSWORD in .env.');
      suggestions.push('Ensure the admin account actually exists in PocketBase.');
    } else if (firstFailedTest?.includes('Collection')) {
      suggestions.push('Check if the "courses" collection exists in PocketBase.');
      suggestions.push('Verify API rules allow admin access (usually unrestricted for admins).');
    }
    
    return suggestions;
  };

  const suggestions = getSuggestions();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`p-6 rounded-2xl shadow-sm border mb-8 ${
        isSuccess ? 'bg-green-50 border-green-100' : 'bg-orange-50 border-orange-100'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        {isSuccess ? (
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        ) : (
          <AlertTriangle className="w-8 h-8 text-orange-600" />
        )}
        <h2 className={`text-xl font-bold ${isSuccess ? 'text-green-800' : 'text-orange-800'}`}>
          {isSuccess ? 'All Systems Operational' : 'Issues Detected'}
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white/60 p-3 rounded-lg text-center">
          <div className="text-sm text-gray-500 uppercase font-bold tracking-wider">Total Tests</div>
          <div className="text-2xl font-bold text-gray-800">{total}</div>
        </div>
        <div className="bg-green-100/60 p-3 rounded-lg text-center">
          <div className="text-sm text-green-700 uppercase font-bold tracking-wider">Passed</div>
          <div className="text-2xl font-bold text-green-700">{passed}</div>
        </div>
        <div className={`p-3 rounded-lg text-center ${failed > 0 ? 'bg-red-100/60' : 'bg-gray-100/60'}`}>
          <div className={`text-sm uppercase font-bold tracking-wider ${failed > 0 ? 'text-red-700' : 'text-gray-500'}`}>Failed</div>
          <div className={`text-2xl font-bold ${failed > 0 ? 'text-red-700' : 'text-gray-500'}`}>{failed}</div>
        </div>
      </div>

      {suggestions && suggestions.length > 0 && (
        <div className="bg-white p-4 rounded-xl border border-orange-100">
          <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
            <XCircle className="w-4 h-4" /> Troubleshooting Suggestions:
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default DiagnosticSummary;