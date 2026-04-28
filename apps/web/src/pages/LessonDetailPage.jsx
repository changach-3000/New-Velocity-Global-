// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useCourseLessons } from "@/hooks/useCourseLessons";
// import { useProgressTracking } from "@/hooks/useProgressTracking";
// import {
//   Loader2,
//   ArrowLeft,
//   Download,
//   ChevronLeft,
//   ChevronRight,
//   FileText,
//   Award,
//   FileVideo 
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
// import LessonNotFound from "@/components/LessonNotFound";
// import LessonResourceCard from "@/components/LessonResourceCard";
// import { useAuth } from "@/contexts/AuthContext";
// import { generateCertificate } from "@/utils/certificateGenerator";
// import QuizCard from "@/components/QuizCard";
// import { quizData } from "@/data/quizData";

// // Helper function to decode HTML entities
// const decodeHtmlEntities = (html) => {
//   if (!html) return "";
//   if (typeof document === "undefined") return html;
//   const txt = document.createElement("textarea");
//   txt.innerHTML = html;
//   return txt.value;
// };

// const formatLessonContent = (html) => {
//   if (!html) return "";

//   let content = decodeHtmlEntities(html);


//   if (!content.includes("<") && !content.includes(">")) {
//     const lines = content.split("\n");
//     let formattedLines = [];
//     let inList = false;
//     let listType = null;

//     lines.forEach((line) => {
//       const trimmedLine = line.trim();
//       if (!trimmedLine) {
//         if (inList) {
//           formattedLines.push(listType === "ul" ? "</ul>" : "</ol>");
//           inList = false;
//           listType = null;
//         }
//         return;
//       }

//       const isAllCaps =
//         trimmedLine === trimmedLine.toUpperCase() && trimmedLine.length > 3;
//       const endsWithColon = trimmedLine.endsWith(":");
//       const isShortLine = trimmedLine.length < 50;
//       const hasNoPunctuation =
//         !trimmedLine.includes(".") && !trimmedLine.includes(",");

//       if (
//         (isAllCaps || (endsWithColon && isShortLine)) &&
//         isShortLine &&
//         hasNoPunctuation
//       ) {
//         if (inList) {
//           formattedLines.push(listType === "ul" ? "</ul>" : "</ol>");
//           inList = false;
//           listType = null;
//         }
//         const headerText = trimmedLine.replace(/:$/, "");
//         formattedLines.push(`<h2 class="section-header">${headerText}</h2>`);
//       } else if (
//         trimmedLine.startsWith("•") ||
//         trimmedLine.startsWith("- ") ||
//         trimmedLine.match(/^\d+\./)
//       ) {
//         if (trimmedLine.match(/^\d+\./)) {
//           if (!inList || listType !== "ol") {
//             if (inList) formattedLines.push("</ul>");
//             formattedLines.push("<ol>");
//             inList = true;
//             listType = "ol";
//           }
//           formattedLines.push(
//             `<li>${trimmedLine.replace(/^\d+\.\s*/, "")}</li>`,
//           );
//         } else {
//           if (!inList || listType !== "ul") {
//             if (inList) formattedLines.push("</ol>");
//             formattedLines.push("<ul>");
//             inList = true;
//             listType = "ul";
//           }
//           formattedLines.push(
//             `<li>${trimmedLine.replace(/^[•-]\s*/, "")}</li>`,
//           );
//         }
//       } else if (
//         trimmedLine.includes("|") &&
//         trimmedLine.split("|").length > 2
//       ) {
//         if (inList) {
//           formattedLines.push(listType === "ul" ? "</ul>" : "</ol>");
//           inList = false;
//           listType = null;
//         }
//         formattedLines.push(`<p class="table-content">${trimmedLine}</p>`);
//       } else if (trimmedLine.includes(":")) {
//         if (inList) {
//           formattedLines.push(listType === "ul" ? "</ul>" : "</ol>");
//           inList = false;
//           listType = null;
//         }
//         const parts = trimmedLine.split(":");
//         if (parts[0].trim().match(/^[A-Z\s]+$/)) {
//           formattedLines.push(
//             `<p><strong>${parts[0].trim()}:</strong>${parts.slice(1).join(":")}</p>`,
//           );
//         } else {
//           formattedLines.push(`<p>${trimmedLine}</p>`);
//         }
//       } else {
//         if (inList) {
//           formattedLines.push(listType === "ul" ? "</ul>" : "</ol>");
//           inList = false;
//           listType = null;
//         }
//         formattedLines.push(`<p>${trimmedLine}</p>`);
//       }
//     });

//     if (inList) {
//       formattedLines.push(listType === "ul" ? "</ul>" : "</ol>");
//     }

//     content = formattedLines.join("");
//   }

//   return content;
// };

// const splitContentIntoPages = (html) => {
//   if (!html) return [];

//   const div = document.createElement("div");
//   div.innerHTML = html;

//   const pages = [];
//   let currentPage = [];
//   let currentPageTitle = "Start";

//   const children = Array.from(div.childNodes);

//   children.forEach((node, index) => {
//     let isSectionStart = false;
//     let sectionTitle = "";

//     if (node.nodeType === 1) {
//       const nodeText = node.textContent?.trim() || "";
//       const isHeading = ["H1", "H2", "H3", "H4"].includes(node.tagName);
//       const isLikelyHeader =
//         !isHeading &&
//         node.tagName === "P" &&
//         ((nodeText.length > 3 &&
//           nodeText
//             .split("")
//             .filter((c) => c === c.toUpperCase() && c.match(/[A-Z]/)).length /
//             nodeText.split("").filter((c) => c.match(/[A-Za-z]/)).length >
//             0.6) ||
//           (nodeText.endsWith(":") && nodeText.length > 4) ||
//           (nodeText.length < 30 &&
//             nodeText === nodeText.toUpperCase() &&
//             nodeText.length > 3));

//       if (isHeading || isLikelyHeader) {
//         isSectionStart = true;
//         sectionTitle = nodeText.replace(/:$/, "").trim();
//       }
//     }

//     if (isSectionStart && currentPage.length > 0) {
//       const pageDiv = document.createElement("div");
//       currentPage.forEach((n) => pageDiv.appendChild(n.cloneNode(true)));
//       pages.push({ content: pageDiv.innerHTML, title: currentPageTitle });
//       currentPage = [node];
//       currentPageTitle = sectionTitle;
//     } else {
//       currentPage.push(node);
//       if (pages.length === 0 && currentPage.length === 1 && !currentPageTitle) {
//         if (
//           node.nodeType === 1 &&
//           node.textContent?.trim().match(/^[A-Z\s]{4,}/)
//         ) {
//           currentPageTitle = node.textContent.trim().replace(/:$/, "");
//         }
//       }
//     }

//     if (index === children.length - 1 && currentPage.length > 0) {
//       const pageDiv = document.createElement("div");
//       currentPage.forEach((n) => pageDiv.appendChild(n.cloneNode(true)));
//       pages.push({
//         content: pageDiv.innerHTML,
//         title: currentPageTitle || `Page ${pages.length + 1}`,
//       });
//     }
//   });

//   if (pages.length === 0) {
//     pages.push({ content: html, title: "Lesson Content" });
//   }

//   return pages;
// };

// const LessonDetailPage = () => {
//   const { lesson_id } = useParams();
//   const navigate = useNavigate();
//   const {
//     fetchLessonById,
//     fetchLessonContent,
//     fetchLessonResources,
//     fetchCourseById,
//     fetchLessonsByCourse,
//   } = useCourseLessons();
//   const { currentUser } = useAuth();

//   const {
//     savePagePosition,
//     markLessonComplete,
//     getResumePoint,
//     isLessonCompleted,
//     addTimeSpent,
//   } = useProgressTracking();

//   const [lesson, setLesson] = useState(null);
//   const [course, setCourse] = useState(null);
//   const [content, setContent] = useState(null);
//   const [resources, setResources] = useState([]);
//   const [courseLessons, setCourseLessons] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Page navigation
//   const [pages, setPages] = useState([]);
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState("video");
//   const contentRef = useRef(null);
//   const timeTrackerRef = useRef(null);


//   // Derived progress values
//   const completedCount = courseLessons.filter((l) =>
//     isLessonCompleted(course?.id, l.id),
//   ).length;
//   const totalLessons = courseLessons.length;
//   const isLastLesson =
//     courseLessons.length > 0 &&
//     courseLessons[courseLessons.length - 1]?.id === lesson_id;
//   const allLessonsComplete =
//     courseLessons.length > 0 &&
//     courseLessons.every((l) => isLessonCompleted(course?.id, l.id));

//   // Find matching quiz data for this course
//   const courseQuizData = course
//     ? quizData.find(
//         (q) => q.title.toLowerCase() === course.title.toLowerCase(),
//       ) || quizData[0]
//     : null;

//   const handleMarkCourseComplete = () => {
//     if (course) {
//       courseLessons.forEach((l) => markLessonComplete(course.id, l.id));
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };
//   // Load initial data
//   useEffect(() => {
//     const loadData = async () => {
//       if (!lesson_id) return;
//       setLoading(true);
//       setError(null);
//       try {
//         const lessonData = await fetchLessonById(lesson_id);
//         setLesson(lessonData);

//         if (lessonData.course_id) {
//           const [courseData, allLessons] = await Promise.all([
//             fetchCourseById(lessonData.course_id),
//             fetchLessonsByCourse(lessonData.course_id),
//           ]);
//           setCourse(courseData);
//           setCourseLessons(allLessons);
//         }

//         const [contentData, resourcesData] = await Promise.all([
//           fetchLessonContent(lesson_id),
//           fetchLessonResources(lesson_id),
//         ]);
//         setContent(contentData);
//         setResources(resourcesData);
//       } catch (err) {
//         console.error("Failed to load lesson data:", err);
//         setError("Failed to load lesson content.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [
//     lesson_id,
//     fetchLessonById,
//     fetchLessonContent,
//     fetchLessonResources,
//     fetchCourseById,
//     fetchLessonsByCourse,
//   ]);

//   // Process content into pages when content loads
//   useEffect(() => {
//     if (content?.content_body) {
//       const formattedContent = formatLessonContent(content.content_body);
//       const contentPages = splitContentIntoPages(formattedContent);
//       setPages(contentPages);

//       // Resume from saved position if available
//       if (course?.id) {
//         const resumePoint = getResumePoint(course.id);
//         if (
//           resumePoint &&
//           resumePoint.lessonId === lesson_id &&
//           resumePoint.pageNumber < contentPages.length
//         ) {
//           setCurrentPageIndex(resumePoint.pageNumber);
//         } else {
//           setCurrentPageIndex(0);
//         }
//       } else {
//         setCurrentPageIndex(0);
//       }
//     }
//   }, [content, course?.id, lesson_id, getResumePoint]);

//   // Track time spent
//   useEffect(() => {
//     if (!course?.id || !lesson_id) return;

//     // Add 0.5 minutes every 30 seconds
//     timeTrackerRef.current = setInterval(() => {
//       addTimeSpent(course.id, lesson_id, 0.5);
//     }, 30000);

//     return () => {
//       if (timeTrackerRef.current) {
//         clearInterval(timeTrackerRef.current);
//       }
//     };
//   }, [course?.id, lesson_id, addTimeSpent]);

//   const handleNavigation = (direction) => {
//     if (!courseLessons.length) return;
//     const currentIndex = courseLessons.findIndex((l) => l.id === lesson_id);
//     if (currentIndex === -1) return;
//     console.log('CurrentIndex:', currentIndex);
//     // Mark current lesson complete when navigating away if not already
//     if (course?.id && !isLessonCompleted(course.id, lesson_id)) {
//       markLessonComplete(course.id, lesson_id);
//     }

//     let targetLessonId;
//     if (direction === "next" && currentIndex < courseLessons.length - 1) {
//       targetLessonId = courseLessons[currentIndex + 1].id;
//     } else if (direction === "prev" && currentIndex > 0) {
//       targetLessonId = courseLessons[currentIndex - 1].id;
//     }

//     if (targetLessonId) {
//       navigate(`/lesson/${targetLessonId}`);
//       window.scrollTo(0, 0);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPageIndex < pages.length - 1) {
//       const nextPageIndex = currentPageIndex + 1;
//       setCurrentPageIndex(nextPageIndex);
//       if (course?.id) {
//         savePagePosition(course.id, lesson_id, nextPageIndex);
//       }
//       contentRef.current?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPageIndex > 0) {
//       const prevPageIndex = currentPageIndex - 1;
//       setCurrentPageIndex(prevPageIndex);
//       if (course?.id) {
//         savePagePosition(course.id, lesson_id, prevPageIndex);
//       }
//       contentRef.current?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
//           <p className="text-gray-600">Loading lesson...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !lesson) {
//     return (
//       <LessonNotFound
//         title="Lesson Not Found"
//         message="This lesson content is currently unavailable."
//       />
//     );
//   }

//   const breadcrumbs = [
//     { label: "Courses", path: "/courses-lessons" },
//     {
//       label: course?.title || "Course",
//       path: course ? `/course/${course.id}` : null,
//     },
//     { label: lesson.title, path: null },
//   ];

//   const currentIndex = courseLessons.findIndex((l) => l.id === lesson_id);
//   const hasNext = currentIndex < courseLessons.length - 1;
//   const hasPrev = currentIndex > 0;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 pb-24">
//       <div className="max-w-7xl mx-auto">
//         <BreadcrumbNavigation breadcrumbs={breadcrumbs} />

//         {/* Header */}
//         <div className="mb-8">
//           <Link to={course ? `/course/${course.id}` : "/courses-lessons"}>
//             <Button
//               variant="ghost"
//               className="gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Back to Course
//             </Button>
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* Main Content */}
//           <div
//             className="lg:col-span-8 xl:col-span-9 space-y-6"
//             ref={contentRef}
//           >
//             {/* Title Card */}
//             <Card className="bg-white border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <div className="flex justify-between items-start gap-4">
//                   <div>
//                     <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
//                       {lesson.title}
//                     </h1>
//                     {lesson.description && (
//                       <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-blue-500 pl-4">
//                         {lesson.description}
//                       </p>
//                     )}
//                   </div>
//                   {course?.id && isLessonCompleted(course.id, lesson_id) && (
//                     <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shrink-0">
//                       <Award className="w-4 h-4" /> Completed
//                     </div>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Content Section */}
//             {!content ? (
//               <Card className="bg-white border-0 shadow-lg">
//                 <CardContent className="text-center py-16 text-gray-500">
//                   <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
//                   <p className="text-lg font-medium">
//                     No content available for this lesson.
//                   </p>
//                 </CardContent>
//               </Card>
//             ) : (
//               <div className="space-y-6">
//                 {/* {content?.video_url && (
//                   <Card className="bg-white border-0 shadow-lg overflow-hidden mb-8">
//                     <div className="aspect-video bg-black rounded-lg overflow-hidden">
//                       <iframe
//                         src={content.video_url}
//                         frameBorder="0"
//                         allowFullScreen
//                         className="w-full h-full"
//                         title={lesson.title}
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         referrerPolicy="strict-origin-when-cross-origin"
//                         loading="lazy"
//                         sandbox="allow-scripts allow-same-origin allow-presentation"
//                       />
//                     </div>
//                   </Card>
//                 )} */}
//                 {/* Content Body with Page Navigation */}

//                 {/* Tabbed Video/Content */}
//                 <Card className="bg-white border-0 shadow-lg">
//                   <CardContent className="p-8 md:p-10">
//                     {/* Tab Buttons */}
//                     <div className="flex bg-gray-100 rounded-lg p-1 mb-6 -mx-2 md:-mx-0 text-black">
//                       <Button
//                         variant={activeTab === "video" ? "default" : "ghost"}
//                         className="flex-1 rounded-lg h-12 font-medium"
//                         onClick={() => setActiveTab("video")}
//                       >
//                         📺 Video
//                       </Button>
//                       <Button
//                         variant={activeTab === "content" ? "default" : "ghost"}
//                         className="flex-1 rounded-lg h-12 font-medium text-black"
//                         onClick={() => setActiveTab("content")}
//                       >
//                         📖 Read
//                       </Button>
//                     </div>

//                     {/* VIDEO TAB */}
//                     {activeTab === "video" && (
//                       <>
//                         {content?.video_url ? (
//                           <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
//                             <iframe
//                               src={content.video_url}
//                               frameBorder="0"
//                               allowFullScreen
//                               className="w-full h-full"
//                               title={lesson.title}
//                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                               referrerPolicy="strict-origin-when-cross-origin"
//                               loading="lazy"
//                               sandbox="allow-scripts allow-same-origin allow-presentation"
//                             />
//                           </div>
//                         ) : (
//                           <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-gray-300">
//                             <FileVideo className="w-16 h-16 text-gray-400 mb-4" />
//                             <h3 className="text-xl font-bold text-gray-900 mb-2">
//                               Video Coming Soon
//                             </h3>
//                             <p className="text-gray-600 mb-4">
//                               This lesson video will be available shortly.
//                             </p>
//                             <Button
//                               variant="outline"
//                               onClick={() => setActiveTab("content")}
//                               className="gap-2"
//                             >
//                               📖 Read Content Instead
//                             </Button>
//                           </div>
//                         )}
//                       </>
//                     )}

//                     {/* CONTENT TAB - Your Existing Code */}
//                     {activeTab === "content" && pages.length > 0 && (
//                       <>
//                         {/* Page Navigation Header - COPY YOUR EXISTING CODE */}
//                         <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
//                           <div className="flex items-center gap-2">
//                             <span className="text-sm font-medium text-gray-500">
//                               Page {currentPageIndex + 1} of {pages.length}
//                             </span>
//                             <span className="text-sm text-gray-400">•</span>
//                             {/* <span className="text-sm font-medium text-blue-600">
//                               {pages[currentPageIndex].title}
//                             </span> */}
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <Button
//                               variant="outline"
//                               size="sm"
//                               onClick={handlePrevPage}
//                               disabled={currentPageIndex === 0}
//                               className="gap-1 bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 disabled:opacity-50"
//                             >
//                               <ChevronLeft className="w-4 h-4" />
//                               Prev Page
//                             </Button>
//                             <Button
//                               variant="outline"
//                               size="sm"
//                               onClick={handleNextPage}
//                               disabled={currentPageIndex === pages.length - 1}
//                               className="gap-1 bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 disabled:opacity-50"
//                             >
//                               Next Page
//                               <ChevronRight className="w-4 h-4" />
//                             </Button>
//                           </div>
//                         </div>

//                         {/* Your Existing Content Display */}
//                         {/* <div className="lesson-content-display">
                         
//                           <div
//                             dangerouslySetInnerHTML={{
//                               __html: pages[currentPageIndex].content,
//                             }}
//                           />
//                         </div> */}

//                          {/* Page Content */}
//                       <div className="lesson-content-display">
//                         <style>{`
//                           .lesson-content-display { color: #1f2937; line-height: 1.75; }
//                           .lesson-content-display * { color: inherit; }
//                           .lesson-content-display h1 { color: #111827 !important; font-size: 2rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb; }
//                           .lesson-content-display h2 { color: #111827 !important; font-size: 1.75rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; }
//                           .lesson-content-display h2.section-header { color: #111827 !important; font-size: 1.75rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6; letter-spacing: -0.01em; }
//                           .lesson-content-display h3 { color: #374151 !important; font-size: 1.5rem; font-weight: 600; margin-top: 1.75rem; margin-bottom: 0.75rem; }
//                           .lesson-content-display h4 { color: #374151 !important; font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; }
//                           .lesson-content-display h5, .lesson-content-display h6 { color: #4b5563 !important; font-size: 1.125rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.5rem; }
//                           .lesson-content-display p { color: #374151 !important; font-size: 1.0625rem; line-height: 1.8; margin-bottom: 1.25rem; }
//                           .lesson-content-display p.table-content { font-family: monospace; background-color: #f8fafc; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0; }
//                           .lesson-content-display ul, .lesson-content-display ol { color: #374151 !important; margin-bottom: 1.5rem; padding-left: 1.75rem; }
//                           .lesson-content-display ul { list-style-type: disc; }
//                           .lesson-content-display ol { list-style-type: decimal; }
//                           .lesson-content-display li { color: #374151 !important; font-size: 1.0625rem; line-height: 1.75; margin-bottom: 0.75rem; padding-left: 0.5rem; }
//                           .lesson-content-display li::marker { color: #3b82f6 !important; font-weight: 600; }
//                           .lesson-content-display strong, .lesson-content-display b { color: #111827 !important; font-weight: 700; }
//                           .lesson-content-display em, .lesson-content-display i { color: #374151 !important; font-style: italic; }
//                           .lesson-content-display a { color: #2563eb !important; text-decoration: underline; font-weight: 500; transition: color 0.2s; }
//                           .lesson-content-display a:hover { color: #1d4ed8 !important; }
//                           .lesson-content-display code { background-color: #f3f4f6; color: #dc2626 !important; padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.9em; font-family: 'Courier New', monospace; }
//                           .lesson-content-display pre { background-color: #1f2937; color: #f9fafb !important; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin-bottom: 1.5rem; }
//                           .lesson-content-display pre code { background-color: transparent; color: #f9fafb !important; padding: 0; }
//                           .lesson-content-display blockquote { border-left: 4px solid #3b82f6; padding-left: 1rem; margin-left: 0; margin-bottom: 1.5rem; font-style: italic; color: #4b5563 !important; }
//                           .lesson-content-display table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
//                           .lesson-content-display th, .lesson-content-display td { color: #374151 !important; border: 1px solid #e5e7eb; padding: 0.75rem; text-align: left; }
//                           .lesson-content-display th { background-color: #f9fafb; font-weight: 600; color: #111827 !important; }
//                           .lesson-content-display hr { border: none; border-top: 2px solid #e5e7eb; margin: 2rem 0; }
//                         `}</style>
//                         <div dangerouslySetInnerHTML={{ __html: pages[currentPageIndex].content }} />
//                       </div>

//                         {/* Page Navigation Footer - COPY YOUR EXISTING FOOTER */}
//                         {pages.length > 1 && (
//                           <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-200">
//                             <Button
//                               variant="outline"
//                               onClick={handlePrevPage}
//                               disabled={currentPageIndex === 0}
//                               className="gap-1 bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 disabled:opacity-50"
//                             >
//                               <ChevronLeft className="w-4 h-4" />
//                               Previous Page
//                             </Button>
//                             <span className="text-sm text-gray-500">
//                               Page {currentPageIndex + 1} of {pages.length}
//                             </span>
//                             <Button
//                               variant="outline"
//                               onClick={handleNextPage}
//                               disabled={currentPageIndex === pages.length - 1}
//                               className="gap-1 bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 disabled:opacity-50"
//                             >
//                               Next Page
//                               <ChevronRight className="w-4 h-4" />
//                             </Button>
//                           </div>
//                         )}
//                       </>
//                     )}
//                   </CardContent>
//                 </Card>
//               </div>
//             )}

//             {/* Quiz Section - Only show on last lesson if not complete */}
//             {isLastLesson && courseQuizData && (
//               <div className="mt-12 pt-8 border-t border-gray-200">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                   Final Assessment
//                 </h2>
//                 <QuizCard
//                   quizData={courseQuizData}
//                   courseName={course?.title}
//                   onMarkComplete={handleMarkCourseComplete}
//                 />
//               </div>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-4 xl:col-span-3 space-y-6">
//             {/* Certificate — shown once course is marked complete */}
//             {allLessonsComplete && (
//               <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg">
//                 <CardContent className="pt-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="bg-green-100 p-2 rounded-full">
//                       <Award className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-green-900">
//                         Course Complete!
//                       </h3>
//                       <p className="text-sm text-green-700">
//                         Download your certificate
//                       </p>
//                     </div>
//                   </div>
//                   <Button
//                     onClick={() =>
//                       generateCertificate(
//                         currentUser?.name || currentUser?.email || "Student",
//                         course?.title,
//                         new Date(),
//                         100,
//                       )
//                     }
//                     className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white"
//                   >
//                     <Download className="w-4 h-4" />
//                     Download Certificate
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Resources */}
//             {resources.length > 0 && (
//               <Card className="bg-white border-0 shadow-lg">
//                 <CardHeader className="pb-4 border-b border-gray-100">
//                   <CardTitle className="text-lg font-semibold flex items-center gap-2 text-gray-900">
//                     <Download className="w-5 h-5 text-blue-600" />
//                     Resources
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4 space-y-3">
//                   {resources.map((resource) => (
//                     <LessonResourceCard key={resource.id} resource={resource} />
//                   ))}
//                 </CardContent>
//               </Card>
//             )}

//             {/* Course Info */}
//             {course && (
//               <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
//                 <CardContent className="pt-6">
//                   <p className="text-xs uppercase tracking-wider text-blue-700 font-semibold mb-2">
//                     Part of Course
//                   </p>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">
//                     {course.title}
//                   </h3>
//                   <p className="text-sm text-gray-700 mb-4">
//                     {courseLessons.length} lessons total
//                   </p>
//                   <Link to={`/course/${course.id}`}>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="w-full bg-white hover:bg-gray-50 text-blue-700 border-blue-200"
//                     >
//                       View All Lessons
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Lesson Navigation */}
//             {courseLessons.length > 1 && (
//               <Card className="bg-white border-0 shadow-lg">
//                 <CardHeader className="pb-4">
//                   <CardTitle className="text-lg font-semibold text-gray-900">
//                     Lesson Navigation
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <Button
//                     onClick={() => handleNavigation("prev")}
//                     disabled={!hasPrev}
//                     variant="outline"
//                     className="w-full gap-2 justify-start bg-gray-50 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <ChevronLeft className="w-4 h-4" />
//                     <span className="flex-1 text-left">Previous Lesson</span>
//                   </Button>

//                   <div className="text-center py-2 text-sm text-gray-500">
//                     Lesson {currentIndex + 1} of {courseLessons.length}
//                   </div>

//                   <Button
//                     onClick={() => handleNavigation("next")}
//                     disabled={!hasNext}
//                     className="w-full gap-2 justify-start bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <span className="flex-1 text-left">Next Lesson</span>
//                     <ChevronRight className="w-4 h-4" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LessonDetailPage;


import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCourseLessons } from "@/hooks/useCourseLessons";
import { useProgressTracking } from "@/hooks/useProgressTracking";
import {
  Loader2, ArrowLeft, Download, ChevronLeft, ChevronRight,
  FileText, Award, FileVideo, BookOpen, PlayCircle, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import LessonNotFound from "@/components/LessonNotFound";
import LessonResourceCard from "@/components/LessonResourceCard";
import { useAuth } from "@/contexts/AuthContext";
import { generateCertificate } from "@/utils/certificateGenerator";
import QuizCard from "@/components/QuizCard";
import { quizData } from "@/data/quizData";

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — clean the raw HTML that comes from the backend.
// The backend wraps every table in empty <div> spacers like:
//   <div><div><div>&nbsp;</div><div>&nbsp;</div></div>[table]</div>
// These cause large blank gaps. We strip them out completely.
// ─────────────────────────────────────────────────────────────────────────────
const cleanBackendHtml = (html) => {
  if (!html) return "";

  // Replace named HTML entities
  let out = html
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&nbsp;/g, " ")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&")
    .replace(/&minus;/g, "−");

  // Remove <div> elements that contain only whitespace / single space children
  // Repeat a few times because they can be nested 3 levels deep
  for (let i = 0; i < 4; i++) {
    out = out.replace(/<div[^>]*>\s*(<div[^>]*>\s*<\/div>\s*)+\s*<\/div>/gi, "");
    out = out.replace(/<div[^>]*>\s*<\/div>/gi, "");
  }

  // Unwrap <div> wrappers that only contain a <table>
  out = out.replace(/<div[^>]*>\s*(<table[\s\S]*?<\/table>)\s*<\/div>/gi, "$1");

  // Remove empty <p> tags
  out = out.replace(/<p[^>]*>\s*<\/p>/gi, "");

  // Remove <hr> — we use it only as a split marker, not visually
  // (we'll handle it in the splitter)

  return out.trim();
};

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2 — split the cleaned HTML into logical pages.
// A new page starts at every <h3> or <hr> tag.
// ─────────────────────────────────────────────────────────────────────────────
// const splitHtmlIntoPages = (html) => {
//   if (!html || typeof document === "undefined") return [];

//   const container = document.createElement("div");
//   container.innerHTML = html;
//   const children = Array.from(container.childNodes);
//   if (children.length === 0) return [{ content: html, title: "Content" }];

//   const pages = [];
//   let currentNodes = [];
//   let currentTitle = "";

//   const flush = () => {
//     const meaningful = currentNodes.filter(
//       (n) => !(n.nodeType === 3 && n.textContent.trim() === "")
//     );
//     if (meaningful.length === 0) return;
//     const wrap = document.createElement("div");
//     meaningful.forEach((n) => wrap.appendChild(n.cloneNode(true)));
//     pages.push({ content: wrap.innerHTML, title: currentTitle });
//     currentNodes = [];
//   };

//   children.forEach((node) => {
//     const tag = node.nodeType === 1 ? node.tagName.toUpperCase() : "";

//     if (tag === "HR") {
//       flush();
//       return; // don't include the <hr> itself
//     }

//     if (tag === "H3") {
//       flush();
//       currentTitle = node.textContent?.trim() || "Section";
//       currentNodes.push(node);
//       return;
//     }

//     currentNodes.push(node);
//   });

//   flush();

//   return pages.length > 0 ? pages : [{ content: html, title: "Lesson Content" }];
// };

const splitHtmlIntoPages = (html) => {
  if (!html || typeof document === "undefined") return [];

  const container = document.createElement("div");
  container.innerHTML = html;
  const children = Array.from(container.childNodes);
  if (children.length === 0) return [{ content: html, title: "Content" }];

  const pages = [];
  let currentNodes = [];
  let currentTitle = "";

  // Detect if a node is a section header (h3, hr, or <p><strong>ALL CAPS</strong></p>)
  const isSectionBreak = (node) => {
    if (node.nodeType !== 1) return false;
    const tag = node.tagName.toUpperCase();
    if (tag === "HR") return { isHr: true };
    if (tag === "H3") return { title: node.textContent?.trim() };

    // <p><strong>ALL CAPS TEXT</strong></p>  — backend's section header pattern
    if (tag === "P") {
      const children = Array.from(node.childNodes).filter(
        (n) => !(n.nodeType === 3 && n.textContent.trim() === "")
      );
      if (children.length === 1 && children[0].tagName === "STRONG") {
        const text = children[0].textContent.trim();
        const isAllCaps = text === text.toUpperCase() && text.length > 3 && /[A-Z]/.test(text);
        if (isAllCaps) return { title: text };
      }
    }

    return false;
  };

  const flush = () => {
    const meaningful = currentNodes.filter(
      (n) => !(n.nodeType === 3 && n.textContent.trim() === "")
    );
    if (meaningful.length === 0) return;
    const wrap = document.createElement("div");
    meaningful.forEach((n) => wrap.appendChild(n.cloneNode(true)));
    pages.push({ content: wrap.innerHTML, title: currentTitle });
    currentNodes = [];
  };

  children.forEach((node) => {
    const breakResult = isSectionBreak(node);

    if (breakResult) {
      flush();
      if (breakResult.isHr) return; // discard <hr>
      currentTitle = breakResult.title || "Section";
      currentNodes.push(node); // keep the header in the page
      return;
    }

    currentNodes.push(node);
  });

  flush();

  return pages.length > 0 ? pages : [{ content: html, title: "Lesson Content" }];
};

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  .lc {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 0.9625rem;
    line-height: 1.8;
    color: #374151;
  }

  .lc > * + * { margin-top: 1.1rem; }
  .lc > *:first-child { margin-top: 0; }

  /* Headings */
  .lc h3 {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #2563eb;
    padding-bottom: 0.6rem;
    border-bottom: 2px solid #dbeafe;
    margin-bottom: 1rem !important;
    margin-top: 0 !important;
  }

  .lc h4 {
    font-size: 0.95rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
  }

  /* Paragraphs */
  .lc p {
    color: #374151;
    font-size: 0.9625rem;
    line-height: 1.8;
    margin: 0 0 0.9rem 0;
  }
  .lc p:last-child { margin-bottom: 0; }

  .lc strong, .lc b { color: #111827; font-weight: 700; }

  /* Lists — remove the extra <p> margin inside <li> */
  .lc ul, .lc ol {
    padding-left: 0;
    margin: 0 0 0.9rem 0;
    list-style: none;
  }
  .lc li {
    margin-bottom: 0.5rem;
    font-size: 0.9625rem;
    line-height: 1.75;
    padding-left: 1.75rem;
    position: relative;
  }
  .lc li p { margin: 0 !important; }
  .lc li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 0.85rem;
    height: 0.85rem;
    background-color: #2563eb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Checkmark drawn with clip-path */
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='%232563eb'/%3E%3Cpath d='M3 6l2 2 4-4' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-size: cover;
    background-color: transparent;
  }
  .lc ol { list-style: decimal; padding-left: 1.35rem; }
  .lc ol li { padding-left: 0.25rem; }
  .lc ol li::before { display: none; }
  .lc ol li::marker { color: #2563eb; font-weight: 700; }

  /* Tables */
  .lc table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
    margin: 0.1rem 0 1rem 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 8px rgba(0,0,0,0.08);
  }
  .lc thead tr { background: #1e40af; }
  .lc th {
    padding: 0.7rem 1rem;
    text-align: left;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #fff !important;
    border: none;
  }
  .lc tbody tr:nth-child(even) { background: #f8fafc; }
  .lc tbody tr:nth-child(odd)  { background: #ffffff; }
  .lc tbody tr:hover { background: #eff6ff; transition: background 0.12s; }
  .lc td {
    padding: 0.6rem 1rem;
    color: #374151;
    border-bottom: 1px solid #e2e8f0;
    vertical-align: top;
    line-height: 1.6;
  }
  .lc td:first-child { font-weight: 600; color: #111827; }

  /* HR hidden — used only as split marker */
  .lc hr { display: none; }

  /* Links */
  .lc a { color: #2563eb; text-decoration: underline; }
  .lc a:hover { color: #1d4ed8; }
`;

// ─────────────────────────────────────────────────────────────────────────────
// DOT NAV — small pill dots showing section progress
// ─────────────────────────────────────────────────────────────────────────────
const DotNav = ({ pages, current, onSelect }) => {
  if (pages.length <= 1) return null;
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {pages.map((p, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          title={p.title}
          className={`rounded-full transition-all duration-200 focus:outline-none ${
            i === current
              ? "w-5 h-2 bg-blue-600"
              : "w-2 h-2 bg-slate-200 hover:bg-blue-300"
          }`}
        />
      ))}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const LessonDetailPage = () => {
  const { lesson_id } = useParams();
  const navigate = useNavigate();
  const {
    fetchLessonById, fetchLessonContent, fetchLessonResources,
    fetchCourseById, fetchLessonsByCourse,
  } = useCourseLessons();
  const { currentUser } = useAuth();
  const {
    savePagePosition, markLessonComplete, getResumePoint,
    isLessonCompleted, addTimeSpent,
  } = useProgressTracking();

  const [lesson, setLesson]                     = useState(null);
  const [course, setCourse]                     = useState(null);
  const [content, setContent]                   = useState(null);
  const [resources, setResources]               = useState([]);
  const [courseLessons, setCourseLessons]       = useState([]);
  const [loading, setLoading]                   = useState(true);
  const [error, setError]                       = useState(null);
  const [pages, setPages]                       = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [activeTab, setActiveTab]               = useState("video");

  const contentRef     = useRef(null);
  const timeTrackerRef = useRef(null);

  // Derived state
  const completedCount    = courseLessons.filter((l) => isLessonCompleted(course?.id, l.id)).length;
  const totalLessons      = courseLessons.length;
  const isLastLesson      = totalLessons > 0 && courseLessons[totalLessons - 1]?.id === lesson_id;
  const allLessonsComplete= totalLessons > 0 && courseLessons.every((l) => isLessonCompleted(course?.id, l.id));
  const courseQuizData    = course ? quizData.find((q) => q.title.toLowerCase() === course.title.toLowerCase()) || quizData[0] : null;
  const currentIndex      = courseLessons.findIndex((l) => l.id === lesson_id);
  const hasNext           = currentIndex < totalLessons - 1;
  const hasPrev           = currentIndex > 0;
  const lessonIsComplete  = !!(course?.id && isLessonCompleted(course.id, lesson_id));
  const progressPct       = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const handleMarkCourseComplete = () => {
    if (course) { courseLessons.forEach((l) => markLessonComplete(course.id, l.id)); window.scrollTo({ top: 0, behavior: "smooth" }); }
  };

  // Load data
  useEffect(() => {
    const loadData = async () => {
      if (!lesson_id) return;
      setLoading(true); setError(null);
      try {
        const lessonData = await fetchLessonById(lesson_id);
        setLesson(lessonData);
        if (lessonData.course_id) {
          const [courseData, allLessons] = await Promise.all([fetchCourseById(lessonData.course_id), fetchLessonsByCourse(lessonData.course_id)]);
          setCourse(courseData); setCourseLessons(allLessons);
        }
        const [contentData, resourcesData] = await Promise.all([fetchLessonContent(lesson_id), fetchLessonResources(lesson_id)]);
        setContent(contentData); setResources(resourcesData);
      } catch (err) { console.error(err); setError("Failed to load lesson content."); }
      finally { setLoading(false); }
    };
    loadData();
  }, [lesson_id, fetchLessonById, fetchLessonContent, fetchLessonResources, fetchCourseById, fetchLessonsByCourse]);

  // Process HTML into pages
  useEffect(() => {
    if (content?.content_body) {
      const cleaned = cleanBackendHtml(content.content_body);
      const contentPages = splitHtmlIntoPages(cleaned);
      setPages(contentPages);
      if (course?.id) {
        const rp = getResumePoint(course.id);
        setCurrentPageIndex(rp?.lessonId === lesson_id && rp.pageNumber < contentPages.length ? rp.pageNumber : 0);
      } else { setCurrentPageIndex(0); }
    }
  }, [content, course?.id, lesson_id, getResumePoint]);

  // Auto-switch to Read if no video
  useEffect(() => { if (content && !content.video_url) setActiveTab("content"); }, [content]);

  // Time tracking
  useEffect(() => {
    if (!course?.id || !lesson_id) return;
    timeTrackerRef.current = setInterval(() => addTimeSpent(course.id, lesson_id, 0.5), 30000);
    return () => clearInterval(timeTrackerRef.current);
  }, [course?.id, lesson_id, addTimeSpent]);

  const handleNavigation = (dir) => {
    if (!courseLessons.length) return;
    const idx = courseLessons.findIndex((l) => l.id === lesson_id);
    if (idx === -1) return;
    if (course?.id && !isLessonCompleted(course.id, lesson_id)) markLessonComplete(course.id, lesson_id);
    const targetId = dir === "next" && idx < totalLessons - 1
      ? courseLessons[idx + 1].id
      : dir === "prev" && idx > 0 ? courseLessons[idx - 1].id : null;
    if (targetId) { navigate(`/lesson/${targetId}`); window.scrollTo(0, 0); }
  };

  const goToPage = (idx) => {
    setCurrentPageIndex(idx);
    if (course?.id) savePagePosition(course.id, lesson_id, idx);
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNextPage = () => { if (currentPageIndex < pages.length - 1) goToPage(currentPageIndex + 1); };
  const handlePrevPage = () => { if (currentPageIndex > 0) goToPage(currentPageIndex - 1); };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center space-y-3">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin mx-auto" />
        <p className="text-slate-500 text-sm font-medium">Loading lesson…</p>
      </div>
    </div>
  );

  if (error || !lesson) return <LessonNotFound title="Lesson Not Found" message="This lesson content is currently unavailable." />;

  const breadcrumbs = [
    { label: "Courses", path: "/courses-lessons" },
    { label: course?.title || "Course", path: course ? `/course/${course.id}` : null },
    { label: lesson.title, path: null },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-6 px-4 sm:px-6 lg:px-8 pb-24">
      <style>{STYLES}</style>

      <div className="max-w-7xl mx-auto">
        <BreadcrumbNavigation breadcrumbs={breadcrumbs} />

        <div className="mb-5">
          <Link to={course ? `/course/${course.id}` : "/courses-lessons"}>
            <Button variant="ghost" size="sm" className="gap-2 text-slate-600 hover:text-blue-700 hover:bg-blue-50">
              <ArrowLeft className="w-4 h-4" /> Back to Course
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ══ MAIN ══ */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-5" ref={contentRef}>

            {/* Title */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h1 className="text-2xl md:text-[1.6rem] font-bold text-slate-900 leading-snug mb-2">
                    {lesson.title}
                  </h1>
                  {lesson.description && (
                    <p className="text-slate-500 text-[0.9375rem] leading-relaxed border-l-4 border-blue-500 pl-4">
                      {lesson.description}
                    </p>
                  )}
                </div>
                {lessonIsComplete && (
                  <div className="shrink-0 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            {!content ? (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-16 text-center">
                <FileText className="w-12 h-12 mx-auto mb-3 text-slate-200" />
                <p className="text-slate-400 font-medium text-sm">No content available for this lesson.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

                {/* Tab bar */}
                <div className="flex border-b border-slate-100">
                  {[
                    { key: "content", icon: <BookOpen   className="w-4 h-4" />, label: "Read"  },
                    { key: "video",   icon: <PlayCircle className="w-4 h-4" />, label: "Video" },
                 
                  ].map(({ key, icon, label }) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex items-center gap-2 px-7 py-4 text-sm font-semibold border-b-2 transition-all ${
                        activeTab === key
                          ? "border-blue-600 text-blue-700 bg-white"
                          : "border-transparent text-slate-400 hover:text-slate-700 bg-slate-50/80"
                      }`}
                    >
                      {icon}{label}
                      {key === "content" && pages.length > 1 && (
                        <span className="text-[11px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full font-medium">
                          {pages.length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Video */}
                {activeTab === "video" && (
                  <div className="p-6">
                    {content?.video_url ? (
                      <div className="aspect-video bg-black rounded-xl overflow-hidden">
                        <iframe
                          src={content.video_url} frameBorder="0" allowFullScreen
                          className="w-full h-full" title={lesson.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin" loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-presentation"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-3 text-center p-8">
                        <FileVideo className="w-12 h-12 text-slate-300" />
                        <div>
                          <p className="font-bold text-slate-600 mb-1">Video Coming Soon</p>
                          <p className="text-slate-400 text-sm">This lesson video will be available shortly.</p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setActiveTab("content")} className="gap-2 mt-1">
                          <BookOpen className="w-4 h-4" /> Read Content Instead
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* Read */}
                {activeTab === "content" && (
                  pages.length > 0 ? (
                    <>
                      {/* Section nav strip */}
                      <div className="flex items-center justify-between gap-4 px-7 py-3.5 border-b border-slate-100 bg-slate-50/50">
                        <div className="flex flex-col gap-1 min-w-0">
                          <DotNav pages={pages} current={currentPageIndex} onSelect={goToPage} />
                          <p className="text-xs text-slate-400 truncate">
                            <span className="font-semibold text-slate-600">{pages[currentPageIndex]?.title}</span>
                            <span className="mx-1.5 text-slate-300">·</span>
                            Section {currentPageIndex + 1} of {pages.length}
                          </p>
                        </div>
                        {pages.length > 1 && (
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={handlePrevPage} disabled={currentPageIndex === 0}
                              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" /> Prev
                            </button>
                            <button
                              onClick={handleNextPage} disabled={currentPageIndex === pages.length - 1}
                              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            >
                              Next <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Page body */}
                      <div className="px-7 py-7 lc">
                        <div dangerouslySetInnerHTML={{ __html: pages[currentPageIndex]?.content }} />
                      </div>

                      {/* Bottom nav */}
                      {pages.length > 1 && (
                        <div className="flex items-center justify-between px-7 py-4 border-t border-slate-100 bg-slate-50/50">
                          <button
                            onClick={handlePrevPage} disabled={currentPageIndex === 0}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                          >
                            <ChevronLeft className="w-4 h-4" /> Previous Section
                          </button>
                          <span className="text-xs text-slate-400 font-medium">
                            {currentPageIndex + 1} / {pages.length}
                          </span>
                          <button
                            onClick={handleNextPage} disabled={currentPageIndex === pages.length - 1}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                          >
                            Next Section <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-12 text-center">
                      <FileText className="w-10 h-10 mx-auto mb-3 text-slate-200" />
                      <p className="text-slate-400 text-sm">No readable content found.</p>
                    </div>
                  )
                )}
              </div>
            )}

            {/* Quiz */}
            {isLastLesson && courseQuizData && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-5">Final Assessment</h2>
                <QuizCard quizData={courseQuizData} courseName={course?.title} onMarkComplete={handleMarkCourseComplete} />
              </div>
            )}
          </div>

          {/* ══ SIDEBAR ══ */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-4">

            {/* Certificate */}
            {allLessonsComplete && (
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-5 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">Course Complete!</p>
                    <p className="text-emerald-100 text-xs">Download your certificate</p>
                  </div>
                </div>
                <button
                  onClick={() => generateCertificate(currentUser?.name || currentUser?.email || "Student", course?.title, new Date(), 100)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-emerald-700 font-bold text-sm py-2.5 rounded-xl hover:bg-emerald-50 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Certificate
                </button>
              </div>
            )}

            {/* Course progress */}
            {course && totalLessons > 0 && (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-[10px] uppercase tracking-widest text-blue-600 font-bold mb-1">Course Progress</p>
                <h3 className="font-bold text-slate-800 text-sm mb-3 leading-snug line-clamp-2">{course.title}</h3>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-400">{completedCount} / {totalLessons} lessons</span>
                  <span className="font-bold text-slate-600">{progressPct}%</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
                </div>
                <Link to={`/course/${course.id}`}>
                  <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-semibold py-2 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors">
                    View All Lessons
                  </button>
                </Link>
              </div>
            )}

            {/* Resources */}
            {resources.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-600" />
                  <h3 className="font-semibold text-slate-800 text-sm">Resources</h3>
                </div>
                <div className="p-4 space-y-2">
                  {resources.map((r) => <LessonResourceCard key={r.id} resource={r} />)}
                </div>
              </div>
            )}

            {/* Lesson navigation */}
            {totalLessons > 1 && (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Lesson</p>
                <p className="text-xs text-slate-400 mb-4">{currentIndex + 1} of {totalLessons}</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleNavigation("prev")} disabled={!hasPrev}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Prev
                  </button>
                  <button
                    onClick={() => handleNavigation("next")} disabled={!hasNext}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetailPage;