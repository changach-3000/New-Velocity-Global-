import React from 'react';
import pb from '@/lib/pocketbaseClient';
import { FileText, Download, FileSpreadsheet, File, Loader2 } from 'lucide-react';
import { useState } from 'react';

const LessonResources = ({ resources = [], lessonContentRecord }) => {
  const [downloading, setDownloading] = useState(null);

  if (!resources || resources.length === 0) return null;

  const handleDownload = async (filename) => {
    try {
      setDownloading(filename);
      // In PocketBase, we can just open the URL
      const url = pb.files.getUrl(lessonContentRecord, filename);
      
      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setDownloading(null);
    }
  };

  const getFileIcon = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    if (['xls', 'xlsx', 'csv'].includes(ext)) return <FileSpreadsheet className="w-5 h-5 text-green-600" />;
    if (['pdf'].includes(ext)) return <FileText className="w-5 h-5 text-red-600" />;
    return <File className="w-5 h-5 text-gray-500" />;
  };

  return (
    <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Download className="w-5 h-5 text-[#1e3a8a]" />
        Downloadable Resources
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.map((filename, index) => (
          <div 
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2 bg-gray-50 rounded-lg">
                {getFileIcon(filename)}
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm text-gray-900 truncate" title={filename}>
                  {filename}
                </p>
                <p className="text-xs text-gray-500 uppercase">
                  {filename.split('.').pop()} File
                </p>
              </div>
            </div>

            <button
              onClick={() => handleDownload(filename)}
              disabled={downloading === filename}
              className="p-2 text-gray-400 hover:text-[#1e3a8a] hover:bg-blue-50 rounded-full transition-colors"
              title="Download"
            >
              {downloading === filename ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Download className="w-5 h-5" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonResources;