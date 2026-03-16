import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, BarChart, Award, BookOpen, Users, Loader2 } from 'lucide-react';
import PocketBase from 'pocketbase';
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
// import pb from '@/lib/pocketbaseClient';

import { logDataFlow } from '@/utils/DataFlowLogger';

const CourseLandingPage = ({ courseId: propCourseId }) => {
  const { courseId: paramCourseId } = useParams();
  const courseId = propCourseId || paramCourseId;

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        let record = null;

        if (courseId) {
          record = await pb.collection('courses').getOne(courseId, { $autoCancel: false });
        } else {
          // Fallback: Try to find "Tax Optimization" course if no ID provided (backward compatibility)
          record = await pb.collection('courses').getFirstListItem('title ~ "Tax Optimization"', { $autoCancel: false });
        }

        setCourse(record);
        logDataFlow('CourseLandingPage:Loaded', record);
      } catch (error) {
        console.error("Error fetching course for landing page:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-blue-400 hover:underline">Browse Catalog</Link>
        </div>
      </div>
    );
  }

  const learningOutcomes = course.learning_outcomes 
    ? course.learning_outcomes.split('\n').filter(i => i.trim()) 
    : [
        "Master key concepts and strategies",
        "Apply practical knowledge to real-world scenarios",
        "Understand industry standards and compliance",
        "Optimize workflows for better efficiency"
      ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>{`${course.title} - Course Landing`}</title>
        <meta name="description" content={course.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border-blue-500/50">
              Intermediate - Advanced Level
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {course.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>{course.duration_hours || 8} Hours Content</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>Comprehensive Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span>Certificate of Completion</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg shadow-blue-900/20" asChild>
                <Link to={`/course/${course.id}`}>Enroll Now - ${course.price}</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Course Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {course.description}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {learningOutcomes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Target Audience</h2>
              <div className="flex flex-wrap gap-3">
                {['Professionals', 'Managers', 'Specialists', 'Business Owners'].map((role) => (
                  <Badge key={role} variant="secondary" className="px-3 py-1 text-sm bg-slate-100 text-slate-700 hover:bg-slate-200">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-t-4 border-t-blue-600">
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                    <Users className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{course.instructor_name}</h4>
                    <p className="text-sm text-gray-500">Course Instructor</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {course.instructor_bio || "Expert instructor with years of industry experience."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 text-white border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Ready to Start?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-gray-300">Price</span>
                  <span className="text-2xl font-bold">${course.price}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-gray-300">Duration</span>
                  <span className="font-medium">{course.duration_hours || 8} Hours</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-gray-300">Access</span>
                  <span className="font-medium">Lifetime</span>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-4" size="lg" asChild>
                  <Link to={`/course/${course.id}`}>Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseLandingPage;