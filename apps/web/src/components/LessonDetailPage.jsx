import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useCourseLessons } from '@/hooks/useCourseLessons';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, BookOpen, HelpCircle, Briefcase, Download } from 'lucide-react';
import { logDataFlow } from '@/utils/DataFlowLogger';

const LessonDetailPageComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchLessonById, fetchLessonContent } = useCourseLessons();
  
  const [lesson, setLesson] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessonData = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        // Fetch lesson details
        const lessonRecord = await fetchLessonById(id);
        setLesson(lessonRecord);

        // Fetch associated content using lesson ID
        const contentRecord = await fetchLessonContent(id);
        setContent(contentRecord);
        
        logDataFlow('LessonDetailPageComponent:Loaded', { lesson: lessonRecord, content: contentRecord });
      } catch (error) {
        console.error("Error fetching lesson:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLessonData();
  }, [id, fetchLessonById, fetchLessonContent]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading lesson content...</div>;
  if (!lesson) return <div className="min-h-screen flex items-center justify-center">Lesson not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>{`${lesson.title} - Lesson View`}</title>
      </Helmet>

      {/* Top Navigation Bar */}
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to={`/course/${lesson.course_id}`} className="text-gray-500 hover:text-gray-900">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-slate-900 truncate max-w-md">{lesson.title}</h1>
            <p className="text-xs text-gray-500">Lesson {lesson.order}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => navigate(`/course/${lesson.course_id}`)}>
            Course Menu
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Mark Complete
          </Button>
        </div>
      </div>

      <div className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Player Placeholder */}
            <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden shadow-lg group cursor-pointer">
              {content?.video_url ? (
                <iframe 
                  src={content.video_url.replace('watch?v=', 'embed/')} 
                  className="w-full h-full" 
                  title={lesson.title}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">Video Lecture</p>
                    <p className="text-sm opacity-80">{lesson.duration || 0} minutes</p>
                  </div>
                </>
              )}
            </div>

            {/* Lesson Content Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
                <TabsTrigger value="notes">My Notes</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6 bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Lesson Overview</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">{lesson.description}</p>
                  {content && content.content_body && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-2">Key Topics Covered:</h3>
                      <div className="bg-blue-50 p-4 rounded-md border border-blue-100 text-sm text-blue-800 whitespace-pre-line">
                        {content.content_body}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="transcript" className="mt-6 bg-white p-6 rounded-lg border shadow-sm">
                <p className="text-gray-500 italic">Transcript available after video completion.</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar Resources */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lesson Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-3 h-auto py-3" asChild>
                  <Link to={`/course/tax-optimization/study-guide/${id}`}>
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <div className="text-left">
                      <div className="font-medium">Study Guide</div>
                      <div className="text-xs text-gray-500">Practice problems & notes</div>
                    </div>
                  </Link>
                </Button>
                <Separator />
                <Separator />
                <Button variant="ghost" className="w-full justify-start gap-3 h-auto py-3" asChild>
                  <Link to={`/course/case-study/${id}`}>
                    <Briefcase className="w-5 h-5 text-orange-500" />
                    <div className="text-left">
                      <div className="font-medium">Case Study</div>
                      <div className="text-xs text-gray-500">Real-world application</div>
                    </div>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetailPageComponent;