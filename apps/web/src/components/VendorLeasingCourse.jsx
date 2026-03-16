import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import VendorLeasingDashboard from './VendorLeasingDashboard';
import LessonContentViewer from './LessonContentViewer';
import { Loader2 } from 'lucide-react';

const VendorLeasingCourse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lessonId = searchParams.get('lessonId');
  const tab = searchParams.get('tab');
  
  const [allLessons, setAllLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllLessons = async () => {
      try {
        // Fetch all lessons including the new advanced modules (7 & 8)
        const records = await pb.collection('vendor_leasing_lessons').getFullList({
          sort: 'lessonNumber',
          $autoCancel: false,
        });
        setAllLessons(records);
      } catch (err) {
        console.error("Error fetching course structure:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllLessons();
  }, []);

  const handleSelectLesson = (id, selectedTab = 'content') => {
    setSearchParams({ lessonId: id, tab: selectedTab });
    window.scrollTo(0, 0);
  };

  const handleBackToDashboard = () => {
    setSearchParams({});
    window.scrollTo(0, 0);
  };

  const handleNextLesson = () => {
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);
    if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
      handleSelectLesson(allLessons[currentIndex + 1].id);
    }
  };

  const handlePreviousLesson = () => {
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);
    if (currentIndex > 0) {
      handleSelectLesson(allLessons[currentIndex - 1].id);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  const currentIndex = allLessons.findIndex(l => l.id === lessonId);
  const hasNext = currentIndex !== -1 && currentIndex < allLessons.length - 1;
  const hasPrevious = currentIndex > 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {lessonId ? (
          <LessonContentViewer 
            lessonId={lessonId} 
            initialTab={tab || 'content'}
            onBack={handleBackToDashboard}
            onNext={handleNextLesson}
            onPrevious={handlePreviousLesson}
            hasNext={hasNext}
            hasPrevious={hasPrevious}
          />
        ) : (
          <VendorLeasingDashboard onSelectLesson={handleSelectLesson} />
        )}
      </div>
    </div>
  );
};

export default VendorLeasingCourse;