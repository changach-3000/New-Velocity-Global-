import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { PlayCircle, Clock, CheckCircle } from 'lucide-react';

const CourseProgressCard = ({ enrollment }) => {
  const { course, progress_percentage, lessons_completed, estimated_completion_hours } = enrollment;
  
  if (!course) return null;

  const isCompleted = progress_percentage === 100;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
    >
      <div className="relative h-40">
        <img
          src={course.image_url || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600'}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg line-clamp-1">{course.title}</h3>
          <p className="text-gray-200 text-sm">{course.instructor_name}</p>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className={isCompleted ? "text-green-600" : "text-[#1e3a8a]"}>
              {isCompleted ? "Completed" : "In Progress"}
            </span>
            <span className="text-gray-600">{progress_percentage || 0}%</span>
          </div>
          <Progress value={progress_percentage || 0} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-gray-400" />
            <span>{lessons_completed || 0} Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>~{estimated_completion_hours || course.duration_hours || 0}h Left</span>
          </div>
        </div>

        <Link
          to={`/course/${course.id}`}
          className={`mt-auto w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
            isCompleted
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-[#1e3a8a] text-white hover:bg-[#3b82f6]'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Review Course
            </>
          ) : (
            <>
              <PlayCircle className="w-4 h-4" />
              Continue Learning
            </>
          )}
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseProgressCard;