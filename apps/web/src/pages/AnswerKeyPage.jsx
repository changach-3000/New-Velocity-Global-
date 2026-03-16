import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import { useAnswerKey } from '@/hooks/useAnswerKey';
import AnswerKey from '@/components/AnswerKey';
import AnswerKeyResource from '@/components/AnswerKeyResource';
import pb from '@/lib/pocketbaseClient';
import { ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnswerKeyPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { questions, loading, error } = useAnswerKey(quizId);
  const [quiz, setQuiz] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [isInstructor, setIsInstructor] = useState(false);

  useEffect(() => {
    checkAccess();
  }, [quizId, currentUser]);

  const checkAccess = async () => {
    if (!currentUser) {
      setCheckingAccess(false);
      setHasAccess(false);
      return;
    }

    try {
      setCheckingAccess(true);

      // Fetch quiz details
      const quizData = await pb.collection('quizzes').getOne(quizId, { $autoCancel: false });
      setQuiz(quizData);

      // Check if user is instructor (simplified - you may have a role field)
      // For now, we'll check if they created any courses
      const createdCourses = await pb.collection('courses').getList(1, 1, {
        filter: `instructor_name != ""`,
        $autoCancel: false
      });
      const userIsInstructor = createdCourses.items.length > 0;
      setIsInstructor(userIsInstructor);

      // Check if student has completed the quiz
      const attempts = await pb.collection('quiz_attempts').getList(1, 1, {
        filter: `student_id = "${currentUser.id}" && quiz_id = "${quizId}" && passed = true`,
        $autoCancel: false
      });

      const hasCompletedQuiz = attempts.items.length > 0;

      // Grant access if instructor OR completed quiz
      setHasAccess(userIsInstructor || hasCompletedQuiz);
    } catch (err) {
      console.error('Error checking access:', err);
      setHasAccess(false);
    } finally {
      setCheckingAccess(false);
    }
  };

  const handleMarkForReview = (questionId) => {
    console.log('Mark for review:', questionId);
    // Implement marking logic here
  };

  const handleAddNote = (questionId) => {
    const note = window.prompt('Add a note for this question:');
    if (note) {
      console.log('Note added:', questionId, note);
      // Implement note storage logic here
    }
  };

  if (checkingAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a] mx-auto mb-4"></div>
          <p className="text-gray-600">Checking access...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Helmet>
          <title>Login Required - Answer Key</title>
        </Helmet>
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Login Required</h2>
          <p className="text-gray-600 mb-6">You must be logged in to view the answer key.</p>
          <Button onClick={() => navigate('/login')} className="bg-[#1e3a8a] hover:bg-[#3b82f6]">
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Helmet>
          <title>Access Denied - Answer Key</title>
        </Helmet>
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <Lock className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-6">
            You must complete and pass the quiz to view the answer key.
          </p>
          <Button onClick={() => navigate(-1)} variant="outline">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading answer key...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <Button onClick={() => navigate(-1)} variant="outline">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>{`Answer Key - ${quiz?.title || 'Quiz'}`}</title>
        <meta name="description" content="Comprehensive answer key with detailed explanations for all quiz questions" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        {/* Download/Print Actions */}
        <div className="mb-6">
          <AnswerKeyResource questions={questions} quizTitle={quiz?.title} />
        </div>

        {/* Answer Key Component */}
        <AnswerKey
          questions={questions}
          showInstructorTools={isInstructor}
          onMarkForReview={handleMarkForReview}
          onAddNote={handleAddNote}
        />
      </div>
    </div>
  );
};

export default AnswerKeyPage;