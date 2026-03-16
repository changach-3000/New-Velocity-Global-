// import React, { useState, useEffect } from 'react';
// import pb from '@/lib/pocketbaseClient';
// import { useAuth } from '@/contexts/AuthContext';
// import { generateCertificate } from '@/utils/certificateGenerator';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';
// import { Button } from '@/components/ui/button';
// import { CheckCircle, Circle, Award, Download, Loader2 } from 'lucide-react';
// import { useToast } from '@/components/ui/use-toast';

// const CourseProgress = ({ courseId, courseName }) => {
//   const { currentUser } = useAuth();
//   const { toast } = useToast();

//   const [loading, setLoading] = useState(true);
//   const [lessons, setLessons] = useState([]);
//   const [progressMap, setProgressMap] = useState({});
//   const [stats, setStats] = useState({
//     total: 0,
//     completed: 0,
//     percentage: 0,
//     averageGrade: 0
//   });
//   const [certificateLoading, setCertificateLoading] = useState(false);

//   const loadData = async () => {
//     if (!courseId || !currentUser) return;

//     try {
//       // 1. Fetch Lessons
//       const lessonsData = await pb.collection('lessons').getFullList({
//         filter: `course_id = "${courseId}"`,
//         sort: 'order',
//         $autoCancel: false
//       });
//       setLessons(lessonsData);

//       // 2. Fetch Progress
//       const progressData = await pb.collection('lesson_progress').getFullList({
//         filter: `user_id = "${currentUser.id}"`,
//         $autoCancel: false
//       });

//       // Map progress by lesson_id
//       const pMap = {};
//       progressData.forEach(p => {
//         pMap[p.lesson_id] = p;
//       });
//       setProgressMap(pMap);

//       // Calculate Stats
//       const total = lessonsData.length;
//       const completed = lessonsData.filter(l => pMap[l.id]?.completed).length;
//       const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

//       // Calculate Average Grade (only for completed lessons with scores)
//       const scores = lessonsData
//         .map(l => pMap[l.id]?.quiz_score)
//         .filter(s => s !== undefined && s !== null);

//       const averageGrade = scores.length > 0 
//         ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) 
//         : 0;

//       setStats({ total, completed, percentage, averageGrade });

//     } catch (err) {
//       console.error("Error loading progress:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadData();

//     // Subscribe to realtime updates
//     pb.collection('lesson_progress').subscribe('*', (e) => {
//       if (e.record.user_id === currentUser?.id) {
//         loadData();
//       }
//     });

//     return () => {
//       pb.collection('lesson_progress').unsubscribe('*');
//     };
//   }, [courseId, currentUser]);

//   const handleDownloadCertificate = async () => {
//     if (!currentUser) return;
//     setCertificateLoading(true);

//     try {
//       // 1. Create/Update Course Completion Record
//       try {
//         const existing = await pb.collection('course_completion').getFirstListItem(
//           `user_id="${currentUser.id}" && course_id="${courseId}"`,
//           { $autoCancel: false }
//         );
//         // Update if needed
//         await pb.collection('course_completion').update(existing.id, {
//           overall_grade: stats.averageGrade,
//           completion_date: new Date().toISOString()
//         }, { $autoCancel: false });
//       } catch (e) {
//         // Create new
//         await pb.collection('course_completion').create({
//           user_id: currentUser.id,
//           course_id: courseId,
//           completion_date: new Date().toISOString(),
//           overall_grade: stats.averageGrade,
//           certificate_issued: true
//         }, { $autoCancel: false });
//       }

//       // 2. Generate PDF
//       generateCertificate(
//         currentUser.name || currentUser.email,
//         courseName,
//         new Date(),
//         stats.averageGrade
//       );

//       toast({
//         title: "Certificate Downloaded",
//         description: "Your certificate has been generated successfully."
//       });

//     } catch (err) {
//       console.error("Certificate error:", err);
//       toast({
//         title: "Error",
//         description: "Failed to generate certificate. Please try again.",
//         variant: "destructive"
//       });
//     } finally {
//       setCertificateLoading(false);
//     }
//   };

//   if (loading) {
//     return <div className="animate-pulse h-24 bg-gray-100 rounded-lg"></div>;
//   }

//   return (
//     <Card className="mb-8 border-blue-100 shadow-sm">
//       <CardHeader className="pb-2">
//         <div className="flex justify-between items-center">
//           <CardTitle className="text-lg font-bold text-gray-800">Course Progress</CardTitle>
//           <span className="text-sm font-medium text-blue-600">
//             {stats.completed} / {stats.total} Lessons
//           </span>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <div className="flex justify-between text-sm">
//               <span>Completion</span>
//               <span className="font-bold">{stats.percentage}%</span>
//             </div>
//             <Progress value={stats.percentage} className="h-2" />
//           </div>

//           {stats.percentage === 100 && (
//             <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
//               <div className="flex items-center gap-3">
//                 <div className="bg-green-100 p-2 rounded-full">
//                   <Award className="w-6 h-6 text-green-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-green-900">Course Completed!</h4>
//                   <p className="text-sm text-green-700">Final Grade: {stats.averageGrade}%</p>
//                 </div>
//               </div>
//               <Button 
//                 onClick={handleDownloadCertificate} 
//                 disabled={certificateLoading}
//                 className="bg-green-600 hover:bg-green-700 text-white shadow-sm w-full sm:w-auto"
//               >
//                 {certificateLoading ? (
//                   <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                 ) : (
//                   <Download className="w-4 h-4 mr-2" />
//                 )}
//                 Download Certificate
//               </Button>
//             </div>
//           )}

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
//             {lessons.map((lesson, idx) => {
//               const progress = progressMap[lesson.id];
//               const isCompleted = progress?.completed;

//               return (
//                 <div 
//                   key={lesson.id} 
//                   className={`flex items-center gap-2 p-2 rounded text-sm ${
//                     isCompleted ? 'bg-blue-50 text-blue-900' : 'bg-gray-50 text-gray-500'
//                   }`}
//                 >
//                   {isCompleted ? (
//                     <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
//                   ) : (
//                     <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
//                   )}
//                   <span className="truncate flex-1">{idx + 1}. {lesson.title}</span>
//                   {isCompleted && progress.quiz_score !== null && (
//                     <span className="text-xs font-bold bg-white px-1.5 py-0.5 rounded border border-blue-100">
//                       {progress.quiz_score}%
//                     </span>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CourseProgress;


import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext';
import { generateCertificate } from '@/utils/certificateGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, Award, Download, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CourseProgress = ({ courseId, courseName }) => {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(true);
  const [lessons, setLessons] = useState([]);
  const [progressMap, setProgressMap] = useState({});
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    percentage: 0,
    averageGrade: 0
  });
  const [certificateLoading, setCertificateLoading] = useState(false);

  const loadData = async () => {
    if (!courseId || !currentUser) return;

    try {
      // 1. Fetch Lessons
      const lessonsData = await pb.collection('lessons').getFullList({
        filter: `course_id = "${courseId}"`,
        sort: 'order',
        $autoCancel: false
      });
      setLessons(lessonsData);

      // 2. Fetch Progress
      const progressData = await pb.collection('lesson_progress').getFullList({
        filter: `user_id = "${currentUser.id}"`,
        $autoCancel: false
      });

      // Map progress by lesson_id
      const pMap = {};
      progressData.forEach(p => {
        pMap[p.lesson_id] = p;
      });
      setProgressMap(pMap);

      // Calculate Stats
      const total = lessonsData.length;
      const completed = lessonsData.filter(l => pMap[l.id]?.completed).length;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      
      // Calculate Average Grade (only for completed lessons with scores)
      const scores = lessonsData
        .map(l => pMap[l.id]?.quiz_score)
        .filter(s => s !== undefined && s !== null);
      
      const averageGrade = scores.length > 0 
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) 
        : 0;

      setStats({ total, completed, percentage, averageGrade });

    } catch (err) {
      console.error("Error loading progress:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    
    // Subscribe to realtime updates
    pb.collection('lesson_progress').subscribe('*', (e) => {
      if (e.record.user_id === currentUser?.id) {
        loadData();
      }
    });

    return () => {
      pb.collection('lesson_progress').unsubscribe('*');
    };
  }, [courseId, currentUser]);

  const handleDownloadCertificate = async () => {
    if (!currentUser) return;
    setCertificateLoading(true);
    
    try {
      // Generate PDF certificate directly — no course_completion collection needed
      generateCertificate(
        currentUser.name || currentUser.email,
        courseName,
        new Date(),
        stats.averageGrade
      );

      toast({
        title: "Certificate Downloaded",
        description: "Your certificate has been generated successfully."
      });

    } catch (err) {
      console.error("Certificate error:", err);
      toast({
        title: "Error",
        description: "Failed to generate certificate. Please try again.",
        variant: "destructive"
      });
    } finally {
      setCertificateLoading(false);
    }
  };

  if (loading) {
    return <div className="animate-pulse h-24 bg-gray-100 rounded-lg"></div>;
  }

  return (
    <Card className="mb-8 border-blue-100 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold text-gray-800">Course Progress</CardTitle>
          <span className="text-sm font-medium text-blue-600">
            {stats.completed} / {stats.total} Lessons
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Completion</span>
              <span className="font-bold">{stats.percentage}%</span>
            </div>
            <Progress value={stats.percentage} className="h-2" />
          </div>

          {stats.percentage === 100 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Course Completed!</h4>
                  <p className="text-sm text-green-700">Final Grade: {stats.averageGrade}%</p>
                </div>
              </div>
              <Button 
                onClick={handleDownloadCertificate} 
                disabled={certificateLoading}
                className="bg-green-600 hover:bg-green-700 text-white shadow-sm w-full sm:w-auto"
              >
                {certificateLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                Download Certificate
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {lessons.map((lesson, idx) => {
              const progress = progressMap[lesson.id];
              const isCompleted = progress?.completed;
              
              return (
                <div 
                  key={lesson.id} 
                  className={`flex items-center gap-2 p-2 rounded text-sm ${
                    isCompleted ? 'bg-blue-50 text-blue-900' : 'bg-gray-50 text-gray-500'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  )}
                  <span className="truncate flex-1">{idx + 1}. {lesson.title}</span>
                  {isCompleted && progress.quiz_score !== null && (
                    <span className="text-xs font-bold bg-white px-1.5 py-0.5 rounded border border-blue-100">
                      {progress.quiz_score}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseProgress;