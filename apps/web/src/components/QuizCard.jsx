import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, ArrowRight, ArrowLeft, RotateCcw, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';

const QuizCard = ({ quizData, courseName, onMarkComplete }) => {
  const { currentUser } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return (
      <Card className="bg-white border border-gray-200 text-gray-800">
        <CardContent className="p-8 text-center">
          <p className="text-gray-500">Quiz data is currently unavailable for this course.</p>
        </CardContent>
      </Card>
    );
  }

  const questions = quizData.questions;
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const allAnswered = Object.keys(answers).length === totalQuestions;

  const handleOptionSelect = (optionKey) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionKey
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correctCount++;
    });
    const finalScore = Math.round((correctCount / totalQuestions) * 100);
    setScore(finalScore);
    setIsSubmitted(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentIndex(0);
    setIsSubmitted(false);
    setScore(0);
  };

  const passMark = 80;
  const passed = score >= passMark;

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 50 : -50, opacity: 0 })
  };

  // ── Results screen ───────────────────────────────────────
  if (isSubmitted) {
    return (
      <Card className="bg-white border border-gray-200 shadow-lg overflow-hidden">
        <div className={`h-2 w-full ${passed ? 'bg-green-500' : 'bg-red-400'}`} />
        <CardContent className="p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="mb-6"
          >
            {passed ? (
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-green-600" />
              </div>
            ) : (
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-12 h-12 text-red-500" />
              </div>
            )}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {passed ? 'Congratulations!' : 'Keep Trying!'}
            </h2>
            <p className="text-gray-600 text-lg">
              You scored{' '}
              <span className={`font-bold ${passed ? 'text-green-600' : 'text-red-500'}`}>
                {score}%
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-2">Passing score is {passMark}%</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {passed ? (
                <Button
                  onClick={onMarkComplete}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-md"
                >
                  Mark Course Complete
                </Button>
            ) : (
              <Button
                onClick={handleRetake}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-8 py-6 text-lg rounded-full"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Retake Quiz
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // ── Quiz screen ──────────────────────────────────────────
  return (
    <Card className="bg-white border border-gray-200 shadow-lg overflow-hidden">
      <CardHeader className="border-b border-gray-100 bg-gray-50 pb-6">
        <div className="flex justify-between items-center mb-4">
          <CardTitle className="text-xl font-bold text-blue-600">Course Final Quiz</CardTitle>
          <span className="text-sm font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-200" indicatorClassName="bg-blue-600" />
      </CardHeader>

      <CardContent className="p-6 md:p-8 min-h-[300px] relative">
        <AnimatePresence mode="wait" custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="absolute inset-0 p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-gray-900">
              {currentQuestion.text}
            </h3>

            <div className="space-y-3">
              {Object.entries(currentQuestion.options).map(([key, value]) => {
                const isSelected = answers[currentQuestion.id] === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleOptionSelect(key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-4 group
                      ${isSelected
                        ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-sm'
                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors
                      ${isSelected
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300 group-hover:border-gray-400'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className="text-base leading-relaxed">{value}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>

      <CardFooter className="border-t border-gray-100 bg-gray-50 p-6 flex justify-between items-center mt-[300px] sm:mt-[250px]">
        <Button
          variant="ghost"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-40"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        {isLastQuestion ? (
          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Quiz
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizCard;