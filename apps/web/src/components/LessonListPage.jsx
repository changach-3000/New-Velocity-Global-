import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { useCourseLessons } from '@/hooks/useCourseLessons';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PlayCircle, FileText, CheckCircle, Lock, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { logDataFlow } from '@/utils/DataFlowLogger';

const LessonListPage = ({ courseId: propCourseId }) => {
  const { courseId: paramCourseId } = useParams();
  const courseId = propCourseId || paramCourseId;
  
  const { fetchCourseById, fetchLessonsByCourse, loading: hookLoading, error: hookError } = useCourseLessons();

  const [lessons, setLessons] = useState([]);
  const [course, setCourse] = useState(null);
  const [localError, setLocalError] = useState(null);

  const fetchCourseAndLessons = async () => {
    setLocalError(null);
    console.log('LessonListPage: Starting fetch...');
    
    try {
      let targetCourseId = courseId;

      // If no ID provided, try to find the Tax Optimization course by title as fallback
      if (!targetCourseId) {
        console.log('LessonListPage: No ID provided, searching for Tax Optimization course...');
        try {
          const courseRecord = await pb.collection('courses').getFirstListItem('title ~ "Tax Optimization"', { $autoCancel: false });
          if (courseRecord) {
            targetCourseId = courseRecord.id;
            setCourse(courseRecord);
            console.log('LessonListPage: Found fallback course', courseRecord.id);
          }
        } catch (e) {
          console.warn("Could not find fallback course", e);
        }
      } else {
         // Fetch course details if we have ID
         try {
           const courseRecord = await fetchCourseById(targetCourseId);
           setCourse(courseRecord);
         } catch (e) {
           console.warn("Could not fetch course details", e);
         }
      }

      if (!targetCourseId) {
        throw new Error("Course ID not found and could not be resolved.");
      }

      const records = await fetchLessonsByCourse(targetCourseId);
      setLessons(records);
      logDataFlow('LessonListPage:Loaded', { courseId: targetCourseId, lessons: records });

    } catch (err) {
      console.error("Error fetching lessons:", err);
      setLocalError(err.message);
    }
  };

  useEffect(() => {
    fetchCourseAndLessons();
  }, [courseId]); // Removed fetch functions from dependency array

  if (hookLoading && !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (localError || hookError) {
    return (
      <div className="p-8 text-center bg-red-50 rounded-lg border border-red-100 m-4">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-red-700">Failed to load lessons</h3>
        <p className="text-black mb-4">{localError || hookError?.message}</p>
        <Button onClick={fetchCourseAndLessons} variant="outline" className="gap-2 border-red-200 hover:bg-red-100 text-red-700">
          <RefreshCw className="w-4 h-4" /> Retry
        </Button>
      </div>
    );
  }

  if (lessons.length === 0 && !hookLoading) {
    return (
      <div className="p-12 text-center bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-lg">No lessons found for this course yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>{course ? `${course.title} - Curriculum` : 'Course Curriculum'}</title>
      </Helmet>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <Link to={course ? `/courses/${course.id}` : '/courses'} className="text-sm text-blue-600 hover:underline mb-2 inline-block">
            &larr; Back to Course Overview
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">{course ? course.title : 'Course Curriculum'}</h1>
          <div className="flex items-center gap-4 mt-4">
            <Progress value={0} className="w-64 h-2" />
            <span className="text-sm text-gray-500">0% Complete</span>
          </div>
        </div>

        <div className="grid gap-6">
          {lessons.map((lesson, index) => (
            <Card key={lesson.id} className="transition-all hover:shadow-md border-l-4 border-l-blue-500">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Lesson {lesson.order || index + 1}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <PlayCircle className="w-4 h-4" /> {lesson.duration || 0} min
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {lesson.description || "Master the key concepts and strategies in this comprehensive lesson."}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-normal capitalize">{lesson.content_type}</Badge>
                  </div>
                </div>
                
                <div className="p-6 md:border-l flex flex-col justify-center items-center md:w-48 bg-gray-50/50">
                  <Button className="w-full" asChild>
                    <Link to={`/lesson/${lesson.id}`}>
                      Start Lesson
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonListPage;