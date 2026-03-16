import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCourseLessons } from '@/hooks/useCourseLessons';
import { useProgressTracking } from '@/hooks/useProgressTracking';
import { Loader2, ArrowLeft, Download, ChevronLeft, ChevronRight, FileText, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import LessonNotFound from '@/components/LessonNotFound';
import LessonResourceCard from '@/components/LessonResourceCard';
import { useAuth } from '@/contexts/AuthContext';
import { generateCertificate } from '@/utils/certificateGenerator';
import QuizCard from '@/components/QuizCard';
import { quizData } from '@/data/quizData';

// Helper function to decode HTML entities
const decodeHtmlEntities = (html) => {
  if (!html) return '';
  if (typeof document === 'undefined') return html;
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const formatLessonContent = (html) => {
  if (!html) return '';

  let content = decodeHtmlEntities(html);

  if (!content.includes('<') && !content.includes('>')) {
    const lines = content.split('\n');
    let formattedLines = [];
    let inList = false;
    let listType = null;

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (!trimmedLine) {
        if (inList) {
          formattedLines.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
          listType = null;
        }
        return;
      }

      const isAllCaps = trimmedLine === trimmedLine.toUpperCase() && trimmedLine.length > 3;
      const endsWithColon = trimmedLine.endsWith(':');
      const isShortLine = trimmedLine.length < 50;
      const hasNoPunctuation = !trimmedLine.includes('.') && !trimmedLine.includes(',');

      if ((isAllCaps || (endsWithColon && isShortLine)) && isShortLine && hasNoPunctuation) {
        if (inList) {
          formattedLines.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
          listType = null;
        }
        const headerText = trimmedLine.replace(/:$/, '');
        formattedLines.push(`<h2 class="section-header">${headerText}</h2>`);
      } else if (trimmedLine.startsWith('•') || trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\./)) {
        if (trimmedLine.match(/^\d+\./)) {
          if (!inList || listType !== 'ol') {
            if (inList) formattedLines.push('</ul>');
            formattedLines.push('<ol>');
            inList = true;
            listType = 'ol';
          }
          formattedLines.push(`<li>${trimmedLine.replace(/^\d+\.\s*/, '')}</li>`);
        } else {
          if (!inList || listType !== 'ul') {
            if (inList) formattedLines.push('</ol>');
            formattedLines.push('<ul>');
            inList = true;
            listType = 'ul';
          }
          formattedLines.push(`<li>${trimmedLine.replace(/^[•-]\s*/, '')}</li>`);
        }
      } else if (trimmedLine.includes('|') && trimmedLine.split('|').length > 2) {
        if (inList) {
          formattedLines.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
          listType = null;
        }
        formattedLines.push(`<p class="table-content">${trimmedLine}</p>`);
      } else if (trimmedLine.includes(':')) {
        if (inList) {
          formattedLines.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
          listType = null;
        }
        const parts = trimmedLine.split(':');
        if (parts[0].trim().match(/^[A-Z\s]+$/)) {
          formattedLines.push(`<p><strong>${parts[0].trim()}:</strong>${parts.slice(1).join(':')}</p>`);
        } else {
          formattedLines.push(`<p>${trimmedLine}</p>`);
        }
      } else {
        if (inList) {
          formattedLines.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
          listType = null;
        }
        formattedLines.push(`<p>${trimmedLine}</p>`);
      }
    });

    if (inList) {
      formattedLines.push(listType === 'ul' ? '</ul>' : '</ol>');
    }

    content = formattedLines.join('');
  }

  return content;
};

const splitContentIntoPages = (html) => {
  if (!html) return [];

  const div = document.createElement('div');
  div.innerHTML = html;

  const pages = [];
  let currentPage = [];
  let currentPageTitle = 'Start';

  const children = Array.from(div.childNodes);

  children.forEach((node, index) => {
    let isSectionStart = false;
    let sectionTitle = '';

    if (node.nodeType === 1) {
      const nodeText = node.textContent?.trim() || '';
      const isHeading = ['H1', 'H2', 'H3', 'H4'].includes(node.tagName);
      const isLikelyHeader = !isHeading && node.tagName === 'P' && (
        (nodeText.length > 3 &&
          (nodeText.split('').filter(c => c === c.toUpperCase() && c.match(/[A-Z]/)).length /
            nodeText.split('').filter(c => c.match(/[A-Za-z]/)).length > 0.6))
        || (nodeText.endsWith(':') && nodeText.length > 4)
        || (nodeText.length < 30 && nodeText === nodeText.toUpperCase() && nodeText.length > 3)
      );

      if (isHeading || isLikelyHeader) {
        isSectionStart = true;
        sectionTitle = nodeText.replace(/:$/, '').trim();
      }
    }

    if (isSectionStart && currentPage.length > 0) {
      const pageDiv = document.createElement('div');
      currentPage.forEach(n => pageDiv.appendChild(n.cloneNode(true)));
      pages.push({ content: pageDiv.innerHTML, title: currentPageTitle });
      currentPage = [node];
      currentPageTitle = sectionTitle;
    } else {
      currentPage.push(node);
      if (pages.length === 0 && currentPage.length === 1 && !currentPageTitle) {
        if (node.nodeType === 1 && node.textContent?.trim().match(/^[A-Z\s]{4,}/)) {
          currentPageTitle = node.textContent.trim().replace(/:$/, '');
        }
      }
    }

    if (index === children.length - 1 && currentPage.length > 0) {
      const pageDiv = document.createElement('div');
      currentPage.forEach(n => pageDiv.appendChild(n.cloneNode(true)));
      pages.push({
        content: pageDiv.innerHTML,
        title: currentPageTitle || `Page ${pages.length + 1}`
      });
    }
  });

  if (pages.length === 0) {
    pages.push({ content: html, title: 'Lesson Content' });
  }

  return pages;
};

const LessonDetailPage = () => {
  const { lesson_id } = useParams();
  const navigate = useNavigate();
  const { fetchLessonById, fetchLessonContent, fetchLessonResources, fetchCourseById, fetchLessonsByCourse } = useCourseLessons();
  const { currentUser } = useAuth();
  
  const { 
    savePagePosition, 
    markLessonComplete, 
    getResumePoint, 
    isLessonCompleted, 
    addTimeSpent 
  } = useProgressTracking();

  const [lesson, setLesson] = useState(null);
  const [course, setCourse] = useState(null);
  const [content, setContent] = useState(null);
  const [resources, setResources] = useState([]);
  const [courseLessons, setCourseLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Page navigation
  const [pages, setPages] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const contentRef = useRef(null);
  const timeTrackerRef = useRef(null);

  // Derived progress values
  const completedCount = courseLessons.filter(l => isLessonCompleted(course?.id, l.id)).length;
  const totalLessons = courseLessons.length;
  const isLastLesson = courseLessons.length > 0 && courseLessons[courseLessons.length - 1]?.id === lesson_id;
  const allLessonsComplete = courseLessons.length > 0 && courseLessons.every(l => isLessonCompleted(course?.id, l.id));

  // Find matching quiz data for this course
  const courseQuizData = course ? (quizData.find(q => q.title.toLowerCase() === course.title.toLowerCase()) || quizData[0]) : null;

  const handleMarkCourseComplete = () => {
    if (course) {
      courseLessons.forEach(l => markLessonComplete(course.id, l.id));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      if (!lesson_id) return;
      setLoading(true);
      setError(null);
      try {
        const lessonData = await fetchLessonById(lesson_id);
        setLesson(lessonData);

        if (lessonData.course_id) {
          const [courseData, allLessons] = await Promise.all([
            fetchCourseById(lessonData.course_id),
            fetchLessonsByCourse(lessonData.course_id)
          ]);
          setCourse(courseData);
          setCourseLessons(allLessons);
        }

        const [contentData, resourcesData] = await Promise.all([
          fetchLessonContent(lesson_id),
          fetchLessonResources(lesson_id)
        ]);
        setContent(contentData);
        setResources(resourcesData);

      } catch (err) {
        console.error('Failed to load lesson data:', err);
        setError('Failed to load lesson content.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [lesson_id, fetchLessonById, fetchLessonContent, fetchLessonResources, fetchCourseById, fetchLessonsByCourse]);

  // Process content into pages when content loads
  useEffect(() => {
    if (content?.content_body) {
      const formattedContent = formatLessonContent(content.content_body);
      const contentPages = splitContentIntoPages(formattedContent);
      setPages(contentPages);
      
      // Resume from saved position if available
      if (course?.id) {
        const resumePoint = getResumePoint(course.id);
        if (resumePoint && resumePoint.lessonId === lesson_id && resumePoint.pageNumber < contentPages.length) {
          setCurrentPageIndex(resumePoint.pageNumber);
        } else {
          setCurrentPageIndex(0);
        }
      } else {
        setCurrentPageIndex(0);
      }
    }
  }, [content, course?.id, lesson_id, getResumePoint]);

  // Track time spent
  useEffect(() => {
    if (!course?.id || !lesson_id) return;

    // Add 0.5 minutes every 30 seconds
    timeTrackerRef.current = setInterval(() => {
      addTimeSpent(course.id, lesson_id, 0.5);
    }, 30000);

    return () => {
      if (timeTrackerRef.current) {
        clearInterval(timeTrackerRef.current);
      }
    };
  }, [course?.id, lesson_id, addTimeSpent]);

  const handleNavigation = (direction) => {
    if (!courseLessons.length) return;
    const currentIndex = courseLessons.findIndex(l => l.id === lesson_id);
    if (currentIndex === -1) return;

    // Mark current lesson complete when navigating away if not already
    if (course?.id && !isLessonCompleted(course.id, lesson_id)) {
      markLessonComplete(course.id, lesson_id);
    }

    let targetLessonId;
    if (direction === 'next' && currentIndex < courseLessons.length - 1) {
      targetLessonId = courseLessons[currentIndex + 1].id;
    } else if (direction === 'prev' && currentIndex > 0) {
      targetLessonId = courseLessons[currentIndex - 1].id;
    }

    if (targetLessonId) {
      navigate(`/lesson/${targetLessonId}`);
      window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      const nextPageIndex = currentPageIndex + 1;
      setCurrentPageIndex(nextPageIndex);
      if (course?.id) {
        savePagePosition(course.id, lesson_id, nextPageIndex);
      }
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      const prevPageIndex = currentPageIndex - 1;
      setCurrentPageIndex(prevPageIndex);
      if (course?.id) {
        savePagePosition(course.id, lesson_id, prevPageIndex);
      }
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading lesson...</p>
        </div>
      </div>
    );
  }

  if (error || !lesson) {
    return <LessonNotFound title="Lesson Not Found" message="This lesson content is currently unavailable." />;
  }

  const breadcrumbs = [
    { label: 'Courses', path: '/courses-lessons' },
    { label: course?.title || 'Course', path: course ? `/course/${course.id}` : null },
    { label: lesson.title, path: null }
  ];

  const currentIndex = courseLessons.findIndex(l => l.id === lesson_id);
  const hasNext = currentIndex < courseLessons.length - 1;
  const hasPrev = currentIndex > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <BreadcrumbNavigation breadcrumbs={breadcrumbs} />

        {/* Header */}
        <div className="mb-8">
          <Link to={course ? `/course/${course.id}` : '/courses-lessons'}>
            <Button variant="ghost" className="gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all">
              <ArrowLeft className="w-4 h-4" />
              Back to Course
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6" ref={contentRef}>
            {/* Title Card */}
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">{lesson.title}</h1>
                    {lesson.description && (
                      <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-blue-500 pl-4">{lesson.description}</p>
                    )}
                  </div>
                  {course?.id && isLessonCompleted(course.id, lesson_id) && (
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shrink-0">
                      <Award className="w-4 h-4" /> Completed
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Content Section */}
            {!content ? (
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="text-center py-16 text-gray-500">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium">No content available for this lesson.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Video */}
                {content.video_url && (
                  <Card className="bg-white border-0 shadow-lg overflow-hidden">
                    <div className="aspect-video bg-black">
                      <iframe
                        src={content.video_url.replace('watch?v=', 'embed/')}
                        className="w-full h-full"
                        title={lesson.title}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </div>
                  </Card>
                )}

                {/* Content Body with Page Navigation */}
                {pages.length > 0 && (
                  <Card className="bg-white border-0 shadow-lg">
                    <CardContent className="p-8 md:p-10">
                      {/* Page Navigation Header */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-500">
                            Page {currentPageIndex + 1} of {pages.length}
                          </span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm font-medium text-blue-600">
                            {pages[currentPageIndex].title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handlePrevPage}
                            disabled={currentPageIndex === 0}
                            className="gap-1 bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 disabled:opacity-50"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            Prev Page
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleNextPage}
                            disabled={currentPageIndex === pages.length - 1}
                            className="gap-1 bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 disabled:opacity-50"
                          >
                            Next Page
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Page Content */}
                      <div className="lesson-content-display">
                        <style>{`
                          .lesson-content-display { color: #1f2937; line-height: 1.75; }
                          .lesson-content-display * { color: inherit; }
                          .lesson-content-display h1 { color: #111827 !important; font-size: 2rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb; }
                          .lesson-content-display h2 { color: #111827 !important; font-size: 1.75rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; }
                          .lesson-content-display h2.section-header { color: #111827 !important; font-size: 1.75rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6; letter-spacing: -0.01em; }
                          .lesson-content-display h3 { color: #374151 !important; font-size: 1.5rem; font-weight: 600; margin-top: 1.75rem; margin-bottom: 0.75rem; }
                          .lesson-content-display h4 { color: #374151 !important; font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; }
                          .lesson-content-display h5, .lesson-content-display h6 { color: #4b5563 !important; font-size: 1.125rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.5rem; }
                          .lesson-content-display p { color: #374151 !important; font-size: 1.0625rem; line-height: 1.8; margin-bottom: 1.25rem; }
                          .lesson-content-display p.table-content { font-family: monospace; background-color: #f8fafc; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0; }
                          .lesson-content-display ul, .lesson-content-display ol { color: #374151 !important; margin-bottom: 1.5rem; padding-left: 1.75rem; }
                          .lesson-content-display ul { list-style-type: disc; }
                          .lesson-content-display ol { list-style-type: decimal; }
                          .lesson-content-display li { color: #374151 !important; font-size: 1.0625rem; line-height: 1.75; margin-bottom: 0.75rem; padding-left: 0.5rem; }
                          .lesson-content-display li::marker { color: #3b82f6 !important; font-weight: 600; }
                          .lesson-content-display strong, .lesson-content-display b { color: #111827 !important; font-weight: 700; }
                          .lesson-content-display em, .lesson-content-display i { color: #374151 !important; font-style: italic; }
                          .lesson-content-display a { color: #2563eb !important; text-decoration: underline; font-weight: 500; transition: color 0.2s; }
                          .lesson-content-display a:hover { color: #1d4ed8 !important; }
                          .lesson-content-display code { background-color: #f3f4f6; color: #dc2626 !important; padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.9em; font-family: 'Courier New', monospace; }
                          .lesson-content-display pre { background-color: #1f2937; color: #f9fafb !important; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin-bottom: 1.5rem; }
                          .lesson-content-display pre code { background-color: transparent; color: #f9fafb !important; padding: 0; }
                          .lesson-content-display blockquote { border-left: 4px solid #3b82f6; padding-left: 1rem; margin-left: 0; margin-bottom: 1.5rem; font-style: italic; color: #4b5563 !important; }
                          .lesson-content-display table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
                          .lesson-content-display th, .lesson-content-display td { color: #374151 !important; border: 1px solid #e5e7eb; padding: 0.75rem; text-align: left; }
                          .lesson-content-display th { background-color: #f9fafb; font-weight: 600; color: #111827 !important; }
                          .lesson-content-display hr { border: none; border-top: 2px solid #e5e7eb; margin: 2rem 0; }
                        `}</style>
                        <div dangerouslySetInnerHTML={{ __html: pages[currentPageIndex].content }} />
                      </div>

                      {/* Page Navigation Footer */}
                      {pages.length > 1 && (
                        <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-200">
                          <Button
                            variant="outline"
                            onClick={handlePrevPage}
                            disabled={currentPageIndex === 0}
                            className="gap-1 bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 disabled:opacity-50"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            Previous Page
                          </Button>
                          <span className="text-sm text-gray-500">
                            Page {currentPageIndex + 1} of {pages.length}
                          </span>
                          <Button
                            variant="outline"
                            onClick={handleNextPage}
                            disabled={currentPageIndex === pages.length - 1}
                            className="gap-1 bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 disabled:opacity-50"
                          >
                            Next Page
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Quiz Section - Only show on last lesson if not complete */}
            {isLastLesson && !allLessonsComplete && courseQuizData && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Assessment</h2>
                <QuizCard 
                  quizData={courseQuizData} 
                  courseName={course?.title} 
                  onMarkComplete={handleMarkCourseComplete} 
                />
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">

            {/* Certificate — shown once course is marked complete */}
            {allLessonsComplete && (
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-900">Course Complete!</h3>
                      <p className="text-sm text-green-700">Download your certificate</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => generateCertificate(
                      currentUser?.name || currentUser?.email || 'Student',
                      course?.title,
                      new Date(),
                      100
                    )}
                    className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Download className="w-4 h-4" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Resources */}
            {resources.length > 0 && (
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader className="pb-4 border-b border-gray-100">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                    <Download className="w-5 h-5 text-blue-600" />
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  {resources.map((resource) => (
                    <LessonResourceCard key={resource.id} resource={resource} />
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Course Info */}
            {course && (
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-xs uppercase tracking-wider text-blue-700 font-semibold mb-2">Part of Course</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-700 mb-4">{courseLessons.length} lessons total</p>
                  <Link to={`/course/${course.id}`}>
                    <Button variant="outline" size="sm" className="w-full bg-white hover:bg-gray-50 text-blue-700 border-blue-200">
                      View All Lessons
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Lesson Navigation */}
            {courseLessons.length > 1 && (
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-gray-900">Lesson Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={() => handleNavigation('prev')}
                    disabled={!hasPrev}
                    variant="outline"
                    className="w-full gap-2 justify-start text-gray-700 hover:bg-gray-50 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="flex-1 text-left">Previous Lesson</span>
                  </Button>

                  <div className="text-center py-2 text-sm text-gray-500">
                    Lesson {currentIndex + 1} of {courseLessons.length}
                  </div>

                  <Button
                    onClick={() => handleNavigation('next')}
                    disabled={!hasNext}
                    className="w-full gap-2 justify-start bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex-1 text-left">Next Lesson</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetailPage;