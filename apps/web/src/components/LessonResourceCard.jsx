import React from 'react';
import { FileText, File, Video, Download, FileSpreadsheet, FileCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LessonResourceCard = ({ resource_name, resource_type, fileUrl, description }) => {
  
  const getIcon = (type) => {
    const t = type?.toLowerCase() || '';
    if (t.includes('pdf')) return <FileText className="w-8 h-8 text-red-500" />;
    if (t.includes('sheet') || t.includes('excel') || t.includes('csv')) return <FileSpreadsheet className="w-8 h-8 text-green-500" />;
    if (t.includes('video')) return <Video className="w-8 h-8 text-blue-500" />;
    if (t.includes('code') || t.includes('json')) return <FileCode className="w-8 h-8 text-yellow-500" />;
    return <File className="w-8 h-8 text-gray-500" />;
  };

  const handleDownload = () => {
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-blue-500">
      <CardContent className="p-4 flex items-start gap-4">
        <div className="mt-1 flex-shrink-0">
          {getIcon(resource_type)}
        </div>
        <div className="flex-grow min-w-0">
          <h4 className="font-semibold text-gray-900 truncate" title={resource_name}>
            {resource_name}
          </h4>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            {resource_type || 'Resource'}
          </p>
          {description && (
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
              {description}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 self-center">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDownload}
            className="gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonResourceCard;