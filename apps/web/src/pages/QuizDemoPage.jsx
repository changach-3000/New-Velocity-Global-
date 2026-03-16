import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext';
import LessonQuiz from '@/components/Quiz/LessonQuiz';
import CourseProgress from '@/components/Progress/CourseProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const QuizDemoPage = () => {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [lessons, setLessons] = useState([]);
  const [selectedLessonId, setSelectedLessonId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const records = await pb.collection('courses').getFullList({ $autoCancel: false });
        setCourses(records);
        if (records.length > 0) setSelectedCourseId(records[0].id);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchLessons = async () => {
      if (!selectedCourseId) return;
      try {
        const records = await pb.collection('lessons').getFullList({
          filter: `course_id = "${selectedCourseId}"`,
          sort: 'order',
          $autoCancel: false
        });
        setLessons(records);
        if (records.length > 0) setSelectedLessonId(records[0].id);
      } catch (err) {
        console.error("Error fetching lessons:", err);
      }
    };
    fetchLessons();
  }, [selectedCourseId]);

  const handlePopulateSampleData = async () => {
    if (!selectedLessonId) {
      toast({ title: "Select a lesson first", variant: "destructive" });
      return;
    }
    
    setLoading(true);
    try {
      // Check if quiz exists
      try {
        await pb.collection('lesson_quizzes').getFirstListItem(`lesson_id="${selectedLessonId}"`, { $autoCancel: false });
        toast({ title: "Quiz already exists for this lesson" });
      } catch (e) {
        // Create sample quiz
        await pb.collection('lesson_quizzes').create({
          lesson_id: selectedLessonId,
          passing_grade: 70,
          questions: [
            {
              question: "What is the primary benefit of equipment leasing?",
              options: ["Ownership transfer", "Cash flow management", "Higher taxes", "None of the above"],
              correctAnswer: 1,
              explanation: "Leasing allows businesses to manage cash flow by avoiding large upfront capital expenditures."
            },
            {
              question: "Which type of lease typically transfers ownership at the end?",
              options: ["Operating Lease", "Capital/Finance Lease", "Rental Agreement", "Short-term Lease"],
              correctAnswer: 1,
              explanation: "Capital or Finance leases are designed to transfer ownership to the lessee at the end of the term."
            },
            {
              question: "What does FMV stand for in leasing?",
              options: ["Full Market Value", "Fair Market Value", "Future Money Value", "Fixed Monthly Value"],
              correctAnswer: 1,
              explanation: "FMV stands for Fair Market Value."
            }
          ]
        }, { $autoCancel: false });
        
        toast({ title: "Sample Quiz Created!", description: "You can now test the quiz below." });
        // Force reload of quiz component by toggling ID briefly or just let user interact
        const current = selectedLessonId;
        setSelectedLessonId('');
        setTimeout(() => setSelectedLessonId(current), 100);
      }
    } catch (err) {
      console.error("Error creating sample data:", err);
      toast({ title: "Error creating data", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const selectedCourse = courses.find(c => c.id === selectedCourseId);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Helmet>
        <title>Quiz System Demo</title>
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Quiz System Demo</h1>
          <Button onClick={handlePopulateSampleData} disabled={loading || !selectedLessonId}>
            {loading ? "Creating..." : "Populate Sample Quiz Data"}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Test Configuration</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Select Course</label>
              <Select value={selectedCourseId} onValueChange={setSelectedCourseId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map(c => (
                    <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Select Lesson</label>
              <Select value={selectedLessonId} onValueChange={setSelectedLessonId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a lesson" />
                </SelectTrigger>
                <SelectContent>
                  {lessons.map(l => (
                    <SelectItem key={l.id} value={l.id}>{l.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {selectedCourseId && (
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">Component: CourseProgress</h2>
              <CourseProgress 
                courseId={selectedCourseId} 
                courseName={selectedCourse?.title || "Demo Course"} 
              />
            </section>

            {selectedLessonId && (
              <section>
                <h2 className="text-xl font-bold mb-4">Component: LessonQuiz</h2>
                <LessonQuiz 
                  lessonId={selectedLessonId} 
                  onComplete={(score) => console.log("Quiz completed with score:", score)} 
                />
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDemoPage;