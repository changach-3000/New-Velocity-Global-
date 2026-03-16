import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProgressTrackingBoard from '@/components/ProgressTrackingBoard';

const ProgressTrackingPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8 print:bg-white print:p-0">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header - Hidden when printing */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
          <div>
            <Link to="/vendor-leasing-course" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-2">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Course
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">My Learning Progress</h1>
            <p className="text-gray-600 mt-1">
              Track your journey through the Vendor Leasing Masterclass.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2" onClick={handlePrint}>
              <Printer className="h-4 w-4" /> Print Report
            </Button>
            <Button className="gap-2" onClick={handlePrint}>
              <Download className="h-4 w-4" /> Export PDF
            </Button>
          </div>
        </div>

        {/* Print Header - Only visible when printing */}
        <div className="hidden print:block mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Vendor Leasing Masterclass - Progress Report</h1>
          <p className="text-gray-500">Generated on {new Date().toLocaleDateString()}</p>
        </div>

        {/* Main Board */}
        <ProgressTrackingBoard />
      </div>
    </div>
  );
};

export default ProgressTrackingPage;