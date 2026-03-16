import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LessonNavigation = ({ prevLesson, nextLesson, courseId }) => {
  // Keyboard navigation could be added here with useEffect listening for ArrowLeft/ArrowRight
  
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
      {prevLesson ? (
        <Link
          to={`/courses/${courseId}/lessons/${prevLesson.id}`}
          className="group flex items-center gap-3 text-gray-600 hover:text-[#1e3a8a] transition-colors max-w-[45%]"
        >
          <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-xs text-gray-500 uppercase font-semibold">Previous</div>
            <div className="font-medium truncate">{prevLesson.title}</div>
          </div>
        </Link>
      ) : (
        <div className="flex-1" /> // Spacer
      )}

      {nextLesson ? (
        <Link
          to={`/courses/${courseId}/lessons/${nextLesson.id}`}
          className="group flex items-center gap-3 text-gray-600 hover:text-[#1e3a8a] transition-colors max-w-[45%] text-right justify-end"
        >
          <div className="text-right">
            <div className="text-xs text-gray-500 uppercase font-semibold">Next</div>
            <div className="font-medium truncate">{nextLesson.title}</div>
          </div>
          <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </div>
        </Link>
      ) : (
        <div className="flex-1" /> // Spacer
      )}
    </div>
  );
};

export default LessonNavigation;