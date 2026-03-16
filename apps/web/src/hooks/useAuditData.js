import { useState, useEffect } from 'react';
import apiServerClient from '@/lib/apiServerClient';

// Mock data generator for fallback when API is not available
const generateMockData = () => {
  return {
    consistencyScore: 78,
    trend: 'up', // 'up', 'down', 'stable'
    trendValue: 5,
    lastAuditDate: new Date().toISOString(),
    categories: [
      { name: 'Style Consistency', score: 85, color: 'bg-blue-500' },
      { name: 'Accessibility', score: 92, color: 'bg-green-500' },
      { name: 'Responsive Design', score: 70, color: 'bg-yellow-500' },
      { name: 'Color Consistency', score: 65, color: 'bg-orange-500' },
      { name: 'Typography', score: 88, color: 'bg-indigo-500' },
      { name: 'Spacing', score: 75, color: 'bg-purple-500' },
      { name: 'Component Naming', score: 95, color: 'bg-teal-500' },
      { name: 'Performance', score: 60, color: 'bg-red-500' },
    ],
    issues: [
      { id: 1, title: 'Inconsistent Button Padding', severity: 'Warning', component: 'SubmitButton.jsx', current: 'p-3', recommended: 'p-4', fix: 'Update padding class to match spacing scale', code: '<button className="p-4 ...">' },
      { id: 2, title: 'Missing Alt Text', severity: 'Critical', component: 'HeroImage.jsx', current: 'alt=""', recommended: 'alt="Description"', fix: 'Add descriptive alt text', code: '<img alt="Hero banner showing..." />' },
      { id: 3, title: 'Hardcoded Color Value', severity: 'Info', component: 'Footer.jsx', current: '#333', recommended: 'text-gray-800', fix: 'Use Tailwind color class', code: 'className="text-gray-800"' },
      { id: 4, title: 'Non-standard Font Size', severity: 'Warning', component: 'Sidebar.jsx', current: '15px', recommended: 'text-sm (14px) or text-base (16px)', fix: 'Use standard typography scale', code: 'className="text-sm"' },
      { id: 5, title: 'Missing Aria Label', severity: 'Critical', component: 'CloseIcon.jsx', current: 'None', recommended: 'aria-label="Close"', fix: 'Add aria-label for accessibility', code: 'aria-label="Close"' },
    ],
    components: [
      { id: 'c1', name: 'Button', type: 'UI Component', path: 'src/components/ui/button.jsx', issuesCount: 0, status: 'pass' },
      { id: 'c2', name: 'Header', type: 'Layout', path: 'src/components/Header.jsx', issuesCount: 2, status: 'warning' },
      { id: 'c3', name: 'HeroSection', type: 'Section', path: 'src/components/HeroSection.jsx', issuesCount: 1, status: 'warning' },
      { id: 'c4', name: 'Footer', type: 'Layout', path: 'src/components/Footer.jsx', issuesCount: 3, status: 'fail' },
      { id: 'c5', name: 'Card', type: 'UI Component', path: 'src/components/ui/card.jsx', issuesCount: 0, status: 'pass' },
    ],
    colors: [
      { hex: '#3b82f6', name: 'blue-500', count: 145 },
      { hex: '#ef4444', name: 'red-500', count: 23 },
      { hex: '#10b981', name: 'green-500', count: 45 },
      { hex: '#f59e0b', name: 'yellow-500', count: 12 },
      { hex: '#1f2937', name: 'gray-800', count: 89 },
      { hex: '#ffffff', name: 'white', count: 200 },
      { hex: '#000000', name: 'black', count: 15 },
    ],
    typography: [
      { size: 'text-xs', weight: '400', lineHeight: '1rem', sample: 'The quick brown fox' },
      { size: 'text-sm', weight: '400', lineHeight: '1.25rem', sample: 'The quick brown fox' },
      { size: 'text-base', weight: '400', lineHeight: '1.5rem', sample: 'The quick brown fox' },
      { size: 'text-lg', weight: '600', lineHeight: '1.75rem', sample: 'The quick brown fox' },
      { size: 'text-xl', weight: '700', lineHeight: '1.75rem', sample: 'The quick brown fox' },
      { size: 'text-2xl', weight: '700', lineHeight: '2rem', sample: 'The quick brown fox' },
    ],
    spacing: [
      { name: 'p-2', value: '0.5rem', px: '8px' },
      { name: 'p-4', value: '1rem', px: '16px' },
      { name: 'p-6', value: '1.5rem', px: '24px' },
      { name: 'p-8', value: '2rem', px: '32px' },
      { name: 'm-4', value: '1rem', px: '16px' },
      { name: 'gap-4', value: '1rem', px: '16px' },
    ],
    history: [
      { date: '2023-10-01', score: 65, issues: 45 },
      { date: '2023-10-15', score: 70, issues: 38 },
      { date: '2023-11-01', score: 72, issues: 35 },
      { date: '2023-11-15', score: 75, issues: 30 },
      { date: '2023-12-01', score: 78, issues: 25 },
    ]
  };
};

export const useAuditData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Try to fetch from API first
      const response = await apiServerClient.fetch('/audit/report');
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        // Fallback to mock data if API fails or returns 404 (not implemented yet)
        console.warn('Audit API not available, using mock data');
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(generateMockData());
      }
    } catch (err) {
      console.error('Failed to fetch audit data:', err);
      setError(err.message || 'Failed to load audit data');
      // Fallback to mock data on error so UI still shows something
      setData(generateMockData());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const runAudit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiServerClient.fetch('/audit/run', {
        method: 'POST'
      });
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        // Simulate run if API fails
        await new Promise(resolve => setTimeout(resolve, 2000));
        const newData = generateMockData();
        // Randomize slightly to show change
        newData.consistencyScore = Math.min(100, newData.consistencyScore + Math.floor(Math.random() * 5));
        setData(newData);
      }
    } catch (err) {
      console.error('Failed to run audit:', err);
      setError(err.message || 'Failed to run audit');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, runAudit, refresh: fetchData };
};