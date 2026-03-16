// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { useCourseLessons } from '@/hooks/useCourseLessons';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Loader2, BookOpen, AlertCircle, RefreshCw, Clock, BarChart } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';

// const CourseLessonsOverview = () => {
//   const { fetchAllCourses, loading, error } = useCourseLessons();
//   const [courses, setCourses] = useState([]);

//   const loadCourses = async () => {
//     console.log('CourseLessonsOverview: Starting fetch...');
//     const data = await fetchAllCourses();
//     if (data) {
//       setCourses(data);
//       console.log('CourseLessonsOverview: Courses loaded', data);
//     }
//   };

//   useEffect(() => {
//     loadCourses();
//   }, [fetchAllCourses]);

//   if (loading && courses.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
//           <p className="text-gray-600">Loading courses...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//         <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
//           <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-bold text-gray-900 mb-2">Unable to Load Courses</h2>
//           <p className="text-gray-600 mb-6">
//             {error.message || "We encountered an error while fetching the course list. Please check your connection and try again."}
//           </p>
//           <div className="bg-gray-100 p-3 rounded text-xs text-left mb-6 overflow-auto max-h-32 font-mono">
//             {JSON.stringify(error, null, 2)}
//           </div>
//           <Button onClick={loadCourses} className="gap-2">
//             <RefreshCw className="w-4 h-4" /> Retry
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <Helmet>
//         <title>Course Lessons Overview - Master the Art of Leasing</title>
//       </Helmet>

//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Courses</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Select a course to view its lessons, curriculum, and learning materials.
//           </p>
//         </div>

//         {courses.length === 0 ? (
//           <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-dashed border-gray-300">
//             <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-lg font-medium text-gray-900">No courses available</h3>
//             <p className="text-gray-500 mt-1">Check back later for new content.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.map((course) => (
//               <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
//                 <div className="relative h-48 overflow-hidden rounded-t-xl">
//                   <img 
//                     src={course.image_url || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"} 
//                     alt={course.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 right-4">
//                     <Badge className="bg-white/90 text-blue-700 hover:bg-white">
//                       {course.price > 0 ? `$${course.price}` : 'Free'}
//                     </Badge>
//                   </div>
//                 </div>
                
//                 <CardHeader>
//                   <CardTitle className="line-clamp-2 text-xl">{course.title}</CardTitle>
//                   <CardDescription className="line-clamp-2 mt-2">
//                     {course.description}
//                   </CardDescription>
//                 </CardHeader>
                
//                 <CardContent className="flex-grow">
//                   <div className="flex items-center gap-4 text-sm text-gray-500">
//                     <div className="flex items-center gap-1">
//                       <Clock className="w-4 h-4" />
//                       <span>{course.duration_hours || 'Self-paced'}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <BarChart className="w-4 h-4" />
//                       <span>{course.difficulty_level || 'Intermediate'}</span>
//                     </div>
//                   </div>
//                 </CardContent>
                
//                 <CardFooter className="pt-0">
//                   <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
//                     <Link to={`/course/${course.id}`}>
//                       View Lessons
//                     </Link>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CourseLessonsOverview;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useCourseLessons } from '@/hooks/useCourseLessons';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, BookOpen, AlertCircle, RefreshCw, Clock, BarChart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CourseLessonsOverview = () => {
  const { fetchAllCourses, loading, error } = useCourseLessons();
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const data = await fetchAllCourses();
    if (data) setCourses(data);
  };

  useEffect(() => {
    loadCourses();
  }, [fetchAllCourses]);

  if (loading && courses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Unable to Load Courses</h2>
          <p className="text-gray-600 mb-6">
            {error.message || "We encountered an error while fetching the course list."}
          </p>
          <div className="bg-gray-100 p-3 rounded text-xs text-left mb-6 overflow-auto max-h-32 font-mono">
            {JSON.stringify(error, null, 2)}
          </div>
          <Button onClick={loadCourses} className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
            <RefreshCw className="w-4 h-4" /> Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Course Lessons Overview - Master the Art of Leasing</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a course to view its lessons, curriculum, and learning materials.
          </p>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-dashed border-gray-300">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No courses available</h3>
            <p className="text-gray-500 mt-1">Check back later for new content.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="flex flex-col bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={course.image_url || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-blue-700 border border-blue-100 shadow-sm">
                      {course.price > 0 ? `$${course.price}` : 'Free'}
                    </Badge>
                  </div>
                </div>

                {/* Header */}
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-2 text-xl text-gray-900">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-1 text-gray-500">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                {/* Stats */}
                <CardContent className="flex-grow pb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{course.duration_hours || 'Self-paced'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BarChart className="w-4 h-4 text-blue-600" />
                      <span>{course.difficulty_level || 'Intermediate'}</span>
                    </div>
                  </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="pt-0 border-t border-gray-100">
                  <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    <Link to={`/course/${course.id}`}>
                      View Lessons
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseLessonsOverview;