// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { useAuth } from '@/contexts/AuthContext';
// import { useEnrollmentCheck } from '@/hooks/useEnrollmentCheck';
// import PocketBase from 'pocketbase';
// const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
// const pb = new PocketBase(POCKETBASE_URL);
// // import pb from '@/lib/pocketbaseClient';
// import { Loader2, Lock, PlayCircle, CheckCircle, BookOpen, AlertCircle, ShoppingCart } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

// const CourseLessonsPage = () => {
//   const { course_id } = useParams();
//   const navigate = useNavigate();
//   const { currentUser, isAuthenticated } = useAuth();

//   const [course, setCourse] = useState(null);
//   const [lessons, setLessons] = useState([]);
//   const [dataLoading, setDataLoading] = useState(true);
//   const [completedLessonIds, setCompletedLessonIds] = useState(() => {
//     try {
//       const stored = localStorage.getItem('completedLessons');
//       return new Set(stored ? JSON.parse(stored) : []);
//     } catch {
//       return new Set();
//     }
//   });
//   const [isCourseCompleted, setIsCourseCompleted] = useState(false);

//   // Use enrollment check hook
//   const {
//     isEnrolled,
//     loading: enrollmentLoading,
//     error: enrollmentError,
//     enrollmentData,
//     checkEnrollment
//   } = useEnrollmentCheck(course_id, currentUser);

//   useEffect(() => {
//     const loadData = async () => {
//       if (!course_id) return;

//       try {
//         setDataLoading(true);

//         // 1. Fetch Course Details
//         const courseData = await pb.collection('courses').getOne(course_id, { $autoCancel: false });
//         setCourse(courseData);

//         // 2. Fetch Lessons
//         try {
//           const lessonsData = await pb.collection('lessons').getFullList({
//             filter: `course_id = "${course_id}"`,
//             sort: 'order',
//             $autoCancel: false,
//           });
//           setLessons(lessonsData);
//         } catch (err) {
//           console.warn("Could not fetch lessons:", err);
//           setLessons([]);
//         }

//       } catch (err) {
//         console.error("Error loading course page:", err);
//       } finally {
//         setDataLoading(false);
//       }
//     };

//     loadData();
//   }, [course_id]);

//   useEffect(() => {
//     if (lessons.length > 0) {
//       // Check if course is completed
//       setIsCourseCompleted(
//         lessons.length > 0 && lessons.every(lesson => completedLessonIds.has(lesson.id))
//       );
//     }
//   }, [completedLessonIds, lessons.length]);

//   // Add this function near your other functions (around line 60-70)
//   const markLessonComplete = (lessonId) => {
//     const newCompletedIds = new Set(completedLessonIds);
//     newCompletedIds.add(lessonId);
//     setCompletedLessonIds(newCompletedIds);

//     // Save to localStorage
//     const storageKey = `course_progress_${course_id}`;
//     localStorage.setItem(storageKey, JSON.stringify([...newCompletedIds]));

//     // Update course completion status
//     setIsCourseCompleted(newCompletedIds.size === lessons.length);
//   };

//   const markLessonIncomplete = (lessonId) => {
//     const newCompletedIds = new Set(completedLessonIds);
//     newCompletedIds.delete(lessonId);
//     setCompletedLessonIds(newCompletedIds);

//     // Save to localStorage
//     const storageKey = `course_progress_${course_id}`;
//     localStorage.setItem(storageKey, JSON.stringify([...newCompletedIds]));

//     // Update course completion status
//     setIsCourseCompleted(newCompletedIds.size === lessons.length);
//   };

//   if (dataLoading || enrollmentLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
//           <p className="text-gray-600">Loading course details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <h2 className="text-xl font-bold text-gray-900">Course not found</h2>
//           <Button onClick={() => navigate('/courses')} className="mt-4">Back to Courses</Button>
//         </div>
//       </div>
//     );
//   }

//   const breadcrumbs = [
//     { label: 'Courses', path: '/courses' },
//     { label: course.title, path: null }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <Helmet>
//         <title>{`${course.title} - Lessons`}</title>
//       </Helmet>

//       <div className="max-w-5xl mx-auto">
//         <BreadcrumbNavigation breadcrumbs={breadcrumbs} />

//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
//           <p className="text-gray-600">{course.description}</p>
//         </div>

//         {/* Enrollment Gate / Call to Action */}
//         {!isEnrolled && (
//           <Card className="mb-8 border-blue-200 bg-blue-50 shadow-md">
//             <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
//               <div className="flex items-center gap-4">
//                 <div className="bg-blue-100 p-3 rounded-full">
//                   <Lock className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-blue-900">
//                     {isAuthenticated ? "Unlock Full Access" : "Login to Access"}
//                   </h3>
//                   <p className="text-blue-700">
//                     {isAuthenticated
//                       ? "Purchase this course to access all lessons and materials."
//                       : "Please log in or create an account to view this course."}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 {isAuthenticated ? (
//                   <Link to={`/checkout?courseId=${course.id}`}>
//                     <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg">
//                       Buy Course - ${course.price?.toFixed(2)}
//                     </Button>
//                   </Link>
//                 ) : (
//                   <Link to={`/login?redirect=/course/${course.id}`}>
//                     <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg">
//                       Log In
//                     </Button>
//                   </Link>
//                 )}

//                 {enrollmentError && (
//                   <Button variant="outline" onClick={checkEnrollment} className="border-red-200 text-red-600 hover:bg-red-50">
//                     Retry Check
//                   </Button>
//                 )}
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* Course Progress Component - Only visible if enrolled */}
//         {isEnrolled && isCourseCompleted && (
//           <Card className="mb-8 border-green-200 bg-green-50">
//             <CardContent className="p-4">
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="w-6 h-6 text-green-600" />
//                 <div>
//                   <h3 className="font-semibold text-green-900">Course Completed!</h3>
//                   <p className="text-green-700">Congratulations on finishing this course.</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Lessons List */}
//           <div className="lg:col-span-2 space-y-4">
//             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//               <BookOpen className="w-5 h-5" />
//               Course Curriculum
//             </h2>

//             {lessons.length > 0 ? (
//               lessons.map((lesson, index) => {
//                 const isCompleted = completedLessonIds.has(lesson.id);
//                 const isLocked = !isEnrolled;

//                 return (
//                   <Card key={lesson.id} className={`transition-all ${isLocked ? 'opacity-80 bg-gray-50' : 'hover:shadow-md'}`}>
//                     <CardContent className="p-4 flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <div className="flex-shrink-0">
//                           {isCompleted ? (
//                             <CheckCircle className="w-6 h-6 text-green-500" />
//                           ) : isLocked ? (
//                             <Lock className="w-6 h-6 text-gray-400" />
//                           ) : (
//                             <PlayCircle className="w-6 h-6 text-blue-600" />
//                           )}
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-gray-900">
//                             {index + 1}. {lesson.title}
//                           </h3>
//                           <p className="text-sm text-gray-500">
//                             {lesson.duration_minutes ? `${lesson.duration_minutes} min` : 'Lesson content'}
//                           </p>
//                         </div>
//                       </div>

//                       {isLocked ? (
//                         <Button variant="ghost" size="sm" disabled className="text-gray-400">
//                           <Lock className="w-4 h-4 mr-2" /> Locked
//                         </Button>
//                       ) : (
//                         <Link to={`/lesson/${lesson.id}`}>
//                           <Button variant="outline" size="sm" className='text-blue-500 border border-blue-500/20 hover:text-blue-700'>
//                             {isCompleted ? 'Review' : 'Start'}
//                           </Button>
//                         </Link>
//                       )}
//                     </CardContent>
//                   </Card>
//                 );
//               })
//             ) : (
//               <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
//                 <p className="text-gray-500">No lessons available yet.</p>
//               </div>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1 space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">Instructor</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
//                     {course.instructor_name?.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-medium">{course.instructor_name}</p>
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-600">{course.instructor_bio}</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseLessonsPage;


import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import { useEnrollmentCheck } from '@/hooks/useEnrollmentCheck';
import PocketBase from 'pocketbase';
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
import { Loader2, Lock, PlayCircle, CheckCircle, BookOpen, AlertCircle, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const CourseLessonsPage = () => {
  const { course_id } = useParams();
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = useAuth();

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [completedLessonIds, setCompletedLessonIds] = useState(() => {
    try {
      const stored = localStorage.getItem('completedLessons');
      return new Set(stored ? JSON.parse(stored) : []);
    } catch {
      return new Set();
    }
  });
  const [isCourseCompleted, setIsCourseCompleted] = useState(false);

  const {
    isEnrolled,
    loading: enrollmentLoading,
    error: enrollmentError,
    enrollmentData,
    checkEnrollment
  } = useEnrollmentCheck(course_id, currentUser);

  useEffect(() => {
    const loadData = async () => {
      if (!course_id) return;
      try {
        setDataLoading(true);
        const courseData = await pb.collection('courses').getOne(course_id, { $autoCancel: false });
        setCourse(courseData);
        try {
          const lessonsData = await pb.collection('lessons').getFullList({
            filter: `course_id = "${course_id}"`,
            sort: 'order',
            $autoCancel: false,
          });
          setLessons(lessonsData);
        } catch (err) {
          console.warn("Could not fetch lessons:", err);
          setLessons([]);
        }
      } catch (err) {
        console.error("Error loading course page:", err);
      } finally {
        setDataLoading(false);
      }
    };
    loadData();
  }, [course_id]);

  useEffect(() => {
    if (lessons.length > 0) {
      setIsCourseCompleted(
        lessons.length > 0 && lessons.every(lesson => completedLessonIds.has(lesson.id))
      );
    }
  }, [completedLessonIds, lessons.length]);

  const markLessonComplete = (lessonId) => {
    const newCompletedIds = new Set(completedLessonIds);
    newCompletedIds.add(lessonId);
    setCompletedLessonIds(newCompletedIds);
    localStorage.setItem(`course_progress_${course_id}`, JSON.stringify([...newCompletedIds]));
    setIsCourseCompleted(newCompletedIds.size === lessons.length);
  };

  const markLessonIncomplete = (lessonId) => {
    const newCompletedIds = new Set(completedLessonIds);
    newCompletedIds.delete(lessonId);
    setCompletedLessonIds(newCompletedIds);
    localStorage.setItem(`course_progress_${course_id}`, JSON.stringify([...newCompletedIds]));
    setIsCourseCompleted(newCompletedIds.size === lessons.length);
  };

  if (dataLoading || enrollmentLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">Course not found</h2>
          <Button onClick={() => navigate('/courses')} className="mt-4">Back to Courses</Button>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Courses', path: '/courses' },
    { label: course.title, path: null }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{`${course.title} - Lessons`}</title>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <BreadcrumbNavigation breadcrumbs={breadcrumbs} />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
          <p className="text-gray-600">{course.description}</p>
        </div>

        {/* Enrollment Gate */}
        {!isEnrolled && (
          <Card className="mb-8 border-blue-200 bg-blue-50 shadow-md">
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {isAuthenticated ? "Unlock Full Access" : "Login to Access"}
                  </h3>
                  <p className="text-blue-700">
                    {isAuthenticated
                      ? "Purchase this course to access all lessons and materials."
                      : "Please log in or create an account to view this course."}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                {isAuthenticated ? (
                  <Link to={`/checkout?courseId=${course.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg">
                      Buy Course — ${course.price?.toFixed(2)}
                    </Button>
                  </Link>
                ) : (
                  <Link to={`/login?redirect=/course/${course.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg">
                      Log In
                    </Button>
                  </Link>
                )}
                {enrollmentError && (
                  <Button
                    variant="outline"
                    onClick={checkEnrollment}
                    className="bg-white border-red-200 text-red-600 hover:bg-red-50"
                  >
                    Retry Check
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Course Completed Banner */}
        {isEnrolled && isCourseCompleted && (
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-900">Course Completed!</h3>
                  <p className="text-green-700">Congratulations on finishing this course.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lessons List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Course Curriculum
            </h2>

            {lessons.length > 0 ? (
              lessons.map((lesson, index) => {
                const isCompleted = completedLessonIds.has(lesson.id);
                const isLocked = !isEnrolled;

                return (
                  <Card
                    key={lesson.id}
                    className={`transition-all bg-white ${
                      isLocked ? 'opacity-80' : 'hover:shadow-md'
                    }`}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          {isCompleted ? (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          ) : isLocked ? (
                            <Lock className="w-6 h-6 text-gray-400" />
                          ) : (
                            <PlayCircle className="w-6 h-6 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {index + 1}. {lesson.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {lesson.duration_minutes
                              ? `${lesson.duration_minutes} min`
                              : 'Lesson content'}
                          </p>
                        </div>
                      </div>

                      {isLocked ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          disabled
                          className="text-gray-400 cursor-not-allowed"
                        >
                          <Lock className="w-4 h-4 mr-2" /> Locked
                        </Button>
                      ) : (
                        <Link to={`/lesson/${lesson.id}`}>
                          <Button
                            size="sm"
                            className={
                              isCompleted
                                ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }
                          >
                            {isCompleted ? 'Review' : 'Start'}
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">No lessons available yet.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                    {course.instructor_name?.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{course.instructor_name}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{course.instructor_bio}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLessonsPage;