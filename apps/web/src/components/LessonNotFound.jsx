import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LessonNotFound = ({ 
  title = "Content Not Found", 
  message = "The lesson or course you are looking for does not exist or has been removed.",
  backLink = "/courses-lessons",
  backLabel = "Back to Courses"
}) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <FileQuestion className="w-12 h-12 text-gray-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 max-w-md mb-8">{message}</p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to={backLink}>
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Button>
        </Link>
        <Link to="/">
          <Button className="gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
            <Home className="w-4 h-4" />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LessonNotFound;