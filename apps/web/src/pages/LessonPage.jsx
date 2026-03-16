import React from 'react';
import { useParams } from 'react-router-dom';
import LessonContentViewer from '@/components/LessonContentViewer.jsx';
import Header from '@/components/Header.jsx';

const LessonPage = () => {
  const { courseId, lessonId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-4">
        <LessonContentViewer courseId={courseId} lessonId={lessonId} />
      </div>
    </div>
  );
};

export default LessonPage;