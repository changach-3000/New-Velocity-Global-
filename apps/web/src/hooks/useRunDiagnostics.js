import { useState, useCallback } from 'react';
import apiServerClient from '@/lib/apiServerClient';

export const useRunDiagnostics = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const runTests = useCallback(async () => {
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await apiServerClient.fetch('/diagnostic', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error(`Diagnostic request failed: ${response.statusText}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error('Diagnostic error:', err);
      setError(err.message || 'Failed to run diagnostics');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    results,
    error,
    runTests
  };
};

export default useRunDiagnostics;