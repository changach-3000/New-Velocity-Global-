import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMobileAuth } from '@/contexts/MobileAuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import { ChevronLeft, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Progress } from '@/components/ui/progress.jsx';
import { useToast } from '@/components/ui/use-toast.js';

const MobileQuizScreen = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useMobileAuth();
  const { toast } = useToast();

  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizHistory, setQuizHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser && lessonId) {
      loadQuizData();
      loadQuizHistory();
    }
  }, [currentUser, lessonId]);

  const loadQuizData = async () => {
    try {
      const quizRecords = await pb.collection('vendor_leasing_quizzes').getFullList({
        filter: `lessonId = "${lessonId}"`,
        $autoCancel: false
      });

      if (quizRecords.length > 0) {
        const quizData = quizRecords[0];
        setQuiz(quizData);
        
        // Parse questions
        const parsedQuestions = JSON.parse(quizData.questions || '[]');
        const parsedAnswers = JSON.parse(quizData.answers || '[]');
        
        const questionsWithAnswers = parsedQuestions.map((q, index) => ({
          ...q,
          correctAnswer: parsedAnswers[index]
        }));
        
        setQuestions(questionsWithAnswers);
      }
    } catch (error) {
      console.error('Failed to load quiz:', error);
      toast({
        title: 'Error',
        description: 'Failed to load quiz',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const loadQuizHistory = async () => {
    try {
      const lesson = await pb.collection('vendor_leasing_lessons').getOne(lessonId, {
        $autoCancel: false
      });

      const records = await pb.collection('vendor_leasing_quiz_history').getFullList({
        filter: `studentId = "${currentUser.id}" && lessonNumber = ${lesson.lessonNumber}`,
        sort: '-attemptDate',
        $autoCancel: false
      });

      setQuizHistory(records);
    } catch (error) {
      console.error('Failed to load quiz history:', error);
    }
  };

  const handleAnswerSelect = (answer) => {
    if (showFeedback) return;
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setAnswers({
      ...answers,
      [currentQuestionIndex]: {
        selected: selectedAnswer,
        correct: isCorrect
      }
    });

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = async () => {
    const finalScore = Math.round((score / questions.length) * 100);
    const passed = finalScore >= (quiz?.passingScore || 70);

    try {
      const lesson = await pb.collection('vendor_leasing_lessons').getOne(lessonId, {
        $autoCancel: false
      });

      const data = {
        studentId: currentUser.id,
        lessonNumber: lesson.lessonNumber,
        quizScore: finalScore,
        attemptDate: new Date().toISOString(),
        passed: passed,
        attemptNumber: quizHistory.length + 1
      };

      await pb.collection('vendor_leasing_quiz_history').create(data, {
        $autoCancel: false
      });

      setQuizCompleted(true);

      toast({
        title: passed ? 'Quiz Passed! 🎉' : 'Quiz Completed',
        description: passed 
          ? `Great job! You scored ${finalScore}%` 
          : `You scored ${finalScore}%. Try again to improve!`
      });
    } catch (error) {
      console.error('Failed to save quiz result:', error);
      toast({
        title: 'Error',
        description: 'Failed to save quiz result',
        variant: 'destructive'
      });
    }
  };

  const retakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswers({});
    setScore(0);
    setQuizCompleted(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!quiz || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No quiz available for this lesson</p>
          <Button onClick={() => navigate('/mobile/dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const finalScore = Math.round((score / questions.length) * 100);
    const passed = finalScore >= (quiz.passingScore || 70);

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-white border-b border-gray-200 p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/mobile/dashboard')}
            className="p-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 text-center">
          <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center ${
            passed ? 'bg-green-100' : 'bg-orange-100'
          }`}>
            {passed ? (
              <Award className="w-12 h-12 text-green-600" />
            ) : (
              <RotateCcw className="w-12 h-12 text-orange-600" />
            )}
          </div>

          <h2 className="text-2xl font-bold mb-2">
            {passed ? 'Congratulations!' : 'Quiz Completed'}
          </h2>
          <p className="text-gray-600 mb-6">
            You scored {finalScore}% ({score} out of {questions.length} correct)
          </p>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
            <h3 className="font-semibold mb-4">Review Your Answers</h3>
            <div className="space-y-3">
              {questions.map((question, index) => {
                const answer = answers[index];
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">Question {index + 1}</span>
                    {answer?.correct ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {quizHistory.length > 0 && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-semibold mb-4">Quiz History</h3>
              <div className="space-y-2">
                {quizHistory.slice(0, 5).map((attempt, index) => (
                  <div key={attempt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">Attempt {attempt.attemptNumber}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${
                        attempt.passed ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        {attempt.quizScore}%
                      </span>
                      {attempt.passed && <CheckCircle className="w-4 h-4 text-green-600" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <Button onClick={retakeQuiz} className="w-full">
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/mobile/dashboard')}
              className="w-full"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/mobile/dashboard')}
            className="p-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      {/* Question */}
      <div className="p-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const showCorrect = showFeedback && isCorrect;
              const showIncorrect = showFeedback && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showFeedback}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    showCorrect
                      ? 'border-green-500 bg-green-50'
                      : showIncorrect
                      ? 'border-red-500 bg-red-50'
                      : isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`p-4 rounded-lg mb-6 ${
            answers[currentQuestionIndex]?.correct
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-start gap-3">
              {answers[currentQuestionIndex]?.correct ? (
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              )}
              <div>
                <p className={`font-semibold mb-1 ${
                  answers[currentQuestionIndex]?.correct ? 'text-green-900' : 'text-red-900'
                }`}>
                  {answers[currentQuestionIndex]?.correct ? 'Correct!' : 'Incorrect'}
                </p>
                {currentQuestion.explanation && (
                  <p className="text-sm text-gray-700">{currentQuestion.explanation}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {!showFeedback ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
              className="w-full"
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="w-full">
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          )}
        </div>

        {/* Score Display */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Current Score: {score} / {currentQuestionIndex + (showFeedback ? 1 : 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileQuizScreen;