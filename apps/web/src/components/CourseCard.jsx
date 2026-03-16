// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Clock, BarChart, ArrowRight, CheckCircle } from 'lucide-react';
// import { Progress } from '@/components/ui/progress';
// import { motion } from 'framer-motion';

// const CourseCard = ({ course, progress, actionLabel = "Start Course", variant = "default" }) => {
//   // Handle both direct course objects and expanded progress objects
//   const courseData = progress ? progress.expand?.courseId : course;
  
//   if (!courseData) return null;

//   const isCompleted = progress?.status === 'completed';
//   const isInProgress = progress?.status === 'in_progress';
  
//   // Ensure we have a valid ID for the link
//   const courseId = courseData.id;
//   const linkTarget = courseId ? `/courses/${courseId}` : '#';

//   return (
//     <motion.div 
//       whileHover={{ y: -8 }}
//       transition={{ duration: 0.3 }}
//       className="h-full"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//     >
//       <Card className="group h-full flex flex-col overflow-hidden border-slate-800/20 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 bg-white">
//         {/* Image Container with Overlay */}
//         <div className="relative h-48 overflow-hidden bg-slate-800">
//           <img 
//             src={courseData.image_url || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60"} 
//             alt={courseData.title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
//           />
//           {/* Dark overlay for text readability */}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
          
//           {/* Badge positioned on image */}
//         </div>

//         {/* Header Section */}
//         <CardHeader className="pb-2 bg-white">
//           <CardTitle className="line-clamp-2 text-lg font-bold text-black group-hover:text-blue-400 transition-colors">
//             {courseData.title}
//           </CardTitle>
//         </CardHeader>

//         {/* Content Section */}
//         <CardContent className="flex-grow pb-4 bg-white text-black">
//           <p className="text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
//             {courseData.description}
//           </p>
          
//           {/* Stats */}
//           <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
//             <div className="flex items-center gap-1.5">
//               <Clock className="w-3.5 h-3.5 text-blue-400" />
//               <span className="font-medium">{courseData.duration_hours || 10}h</span>
//             </div>
//             <div className="flex items-center gap-1.5">
//               <BarChart className="w-3.5 h-3.5 text-blue-400" />
//               <span className="font-medium">{courseData.lessons_count || 'Multiple'} Lessons</span>
//             </div>
//           </div>

//           {/* Progress Bar Section */}
//           {progress && (
//             <div className="space-y-2 pt-2 border-t border-slate-800">
//               <div className="flex justify-between text-xs font-semibold">
//                 <span className="text-slate-400">Progress</span>
//                 <span className="text-blue-400">{progress.progressPercentage || 0}%</span>
//               </div>
//               <Progress value={progress.progressPercentage || 0} className="h-1.5 bg-slate-800" />
//             </div>
//           )}
//         </CardContent>

//         {/* Footer Section */}
//         <CardFooter className="pt-0 border-t border-slate-800/10 mt-auto">
//           {isCompleted ? (
//             <Button 
//               disabled
//               className="w-full gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold mt-4"
//             >
//               <CheckCircle className="w-4 h-4" />
//               Completed
//             </Button>
//           ) : (
//             <Link to={linkTarget} className="w-full mt-4">
//               <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/20 transition-all duration-300 group-hover:translate-x-1">
//                 {isInProgress ? "Continue Learning" : actionLabel}
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//           )}
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// };

// export default CourseCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, BarChart, ArrowRight, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const CourseCard = ({ course, progress, actionLabel = "Start Course", variant = "default" }) => {
  const courseData = progress ? progress.expand?.courseId : course;
  
  if (!courseData) return null;

  const isCompleted = progress?.status === 'completed';
  const isInProgress = progress?.status === 'in_progress';
  
  const courseId = courseData.id;
  const linkTarget = courseId ? `/courses/${courseId}` : '#';

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Card className="group h-full flex flex-col overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white">
        
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img 
            src={courseData.image_url || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60"} 
            alt={courseData.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
        </div>

        {/* Header */}
        <CardHeader className="pb-2">
          <CardTitle className="line-clamp-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {courseData.title}
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="flex-grow pb-4">
          <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
            {courseData.description}
          </p>
          
          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-medium">{courseData.duration_hours || 10}h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-medium">{courseData.lessons_count || 'Multiple'} Lessons</span>
            </div>
          </div>

          {/* Progress Bar */}
          {progress && (
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-500">Progress</span>
                <span className="text-blue-600">{progress.progressPercentage || 0}%</span>
              </div>
              <Progress value={progress.progressPercentage || 0} className="h-1.5 bg-gray-200" />
            </div>
          )}
        </CardContent>

        {/* Footer */}
        <CardFooter className="pt-0 border-t border-gray-100 mt-auto">
          {isCompleted ? (
            <Button 
              disabled
              className="w-full gap-2 bg-emerald-50 text-emerald-600 border border-emerald-200 font-semibold mt-4 cursor-default"
            >
              <CheckCircle className="w-4 h-4" />
              Completed
            </Button>
          ) : (
            <Link to={linkTarget} className="w-full mt-4">
              <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm transition-all duration-300">
                {isInProgress ? "Continue Learning" : actionLabel}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;