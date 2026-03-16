import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, PlayCircle, FileText, HelpCircle, FileEdit, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const CurriculumSidebar = ({ 
  course, 
  lessons = [], 
  currentLessonId, 
  completedLessonIds = [],
  progress = 0
}) => {
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentLessonId]);

  const getIcon = (type) => {
    switch (type) {
      case 'video': return <PlayCircle className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      case 'quiz': return <HelpCircle className="w-4 h-4" />;
      case 'assignment': return <FileEdit className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200 w-80 flex-shrink-0">
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-bold text-gray-900 mb-2 truncate" title={course?.title}>
          {course?.title || 'Course Curriculum'}
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-500">
            <span>{Math.round(progress)}% Complete</span>
            <span>{completedLessonIds.length}/{lessons.length} Lessons</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1">
          {lessons.map((lesson, index) => {
            const isActive = lesson.id === currentLessonId;
            const isCompleted = completedLessonIds.includes(lesson.id);
            
            return (
              <Link
                key={lesson.id}
                to={`/courses/${course?.id}/lessons/${lesson.id}`}
                ref={isActive ? activeRef : null}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 text-sm transition-colors relative",
                  isActive 
                    ? "bg-blue-50 text-[#1e3a8a] font-medium border-r-4 border-[#1e3a8a]" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <div className={cn(
                  "flex-shrink-0",
                  isCompleted ? "text-green-500" : isActive ? "text-[#1e3a8a]" : "text-gray-400"
                )}>
                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : getIcon(lesson.content_type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="truncate">{index + 1}. {lesson.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {lesson.duration ? `${lesson.duration} min` : lesson.content_type}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSidebar;