import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, AlertCircle, Loader2, Trophy, RotateCcw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const LessonQuiz = ({ lessonId, onComplete }) => {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [previousScore, setPreviousScore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuiz = async () => {
      if (!lessonId || !currentUser) return;
      
      try {
        setLoading(true);
        setError(null);

        // 1. Check for existing progress
        try {
          const progress = await pb.collection('lesson_progress').getFirstListItem(
            `user_id="${currentUser.id}" && lesson_id="${lessonId}"`,
            { $autoCancel: false }
          );
          if (progress && progress.quiz_score !== null) {
            setPreviousScore(progress.quiz_score);
          }
        } catch (e) {
          // No progress found, that's fine
        }

        // 2. Fetch Quiz
        try {
          const quizRecord = await pb.collection('lesson_quizzes').getFirstListItem(
            `lesson_id="${lessonId}"`,
            { $autoCancel: false }
          );
          setQuiz(quizRecord);
        } catch (e) {
          if (e.status === 404) {
            setQuiz(null); // No quiz for this lesson
          } else {
            throw e;
          }
        }
      } catch (err) {
        console.error("Error loading quiz:", err);
        setError("Failed to load quiz. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, [lessonId, currentUser]);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    if (results) return; // Prevent changing answers after submission
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const handleSubmit = async () => {
    if (!quiz || !currentUser) return;
    
    // Validate all questions answered
    const questionCount = quiz.questions.length;
    if (Object.keys(answers).length < questionCount) {
      toast({
        title: "Incomplete Quiz",
        description: "Please answer all questions before submitting.",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    
    try {
      // Calculate Score
      let correctCount = 0;
      const gradedResults = quiz.questions.map((q, index) => {
        const isCorrect = answers[index] === q.correctAnswer;
        if (isCorrect) correctCount++;
        return {
          ...q,
          userAnswer: answers[index],
          isCorrect
        };
      });

      const score = Math.round((correctCount / questionCount) * 100);
      const passed = score >= (quiz.passing_grade || 70);

      setResults({
        score,
        passed,
        details: gradedResults
      });

      // Save Progress
      // Check if record exists first
      let progressId;
      try {
        const existing = await pb.collection('lesson_progress').getFirstListItem(
          `user_id="${currentUser.id}" && lesson_id="${lessonId}"`,
          { $autoCancel: false }
        );
        progressId = existing.id;
      } catch (e) {
        // Doesn't exist
      }

      const progressData = {
        user_id: currentUser.id,
        lesson_id: lessonId,
        quiz_score: score,
        // Only mark completed if passed
        completed: passed || (previousScore >= (quiz.passing_grade || 70)),
        completed_at: passed ? new Date().toISOString() : undefined
      };

      if (progressId) {
        // Only update score if it's higher or if it wasn't set
        const shouldUpdate = !previousScore || score > previousScore;
        if (shouldUpdate) {
          await pb.collection('lesson_progress').update(progressId, progressData, { $autoCancel: false });
        }
      } else {
        await pb.collection('lesson_progress').create(progressData, { $autoCancel: false });
      }

      if (passed) {
        toast({
          title: "Quiz Passed!",
          description: `You scored ${score}%. Great job!`,
          className: "bg-green-50 border-green-200"
        });
        if (onComplete) onComplete(score);
      } else {
        toast({
          title: "Quiz Failed",
          description: `You scored ${score}%. You need ${quiz.passing_grade || 70}% to pass.`,
          variant: "destructive"
        });
      }

    } catch (err) {
      console.error("Error submitting quiz:", err);
      toast({
        title: "Error",
        description: "Failed to submit quiz results. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetry = () => {
    setResults(null);
    setAnswers({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
        <AlertCircle className="w-5 h-5" />
        {error}
      </div>
    );
  }

  if (!quiz) {
    return null; // No quiz for this lesson
  }

  // If previously passed and not currently reviewing results
  if (previousScore >= (quiz.passing_grade || 70) && !results) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-900 mb-2">Quiz Completed!</h3>
          <p className="text-green-700 mb-4">
            You have already passed this quiz with a score of {previousScore}%.
          </p>
          <Button onClick={() => setResults({ score: previousScore, passed: true, details: null, reviewMode: true })}>
            Retake for Practice
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-8 border-t-4 border-t-blue-600 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Lesson Quiz</span>
          {results && (
            <span className={cn(
              "text-lg px-3 py-1 rounded-full",
              results.passed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            )}>
              Score: {results.score}%
            </span>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {quiz.questions.map((q, qIndex) => {
          const isAnswered = answers[qIndex] !== undefined;
          const result = results?.details ? results.details[qIndex] : null;
          
          return (
            <div key={qIndex} className="space-y-4">
              <div className="flex gap-3">
                <span className="font-bold text-gray-500">{qIndex + 1}.</span>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 mb-3">{q.question}</p>
                  
                  <RadioGroup 
                    value={answers[qIndex]?.toString()} 
                    onValueChange={(val) => handleOptionSelect(qIndex, parseInt(val))}
                    disabled={!!results}
                  >
                    {q.options.map((option, oIndex) => {
                      let itemClass = "flex items-center space-x-2 p-3 rounded-lg border border-gray-200 transition-colors";
                      
                      if (results) {
                        if (oIndex === q.correctAnswer) {
                          itemClass = "flex items-center space-x-2 p-3 rounded-lg border-2 border-green-500 bg-green-50";
                        } else if (answers[qIndex] === oIndex && oIndex !== q.correctAnswer) {
                          itemClass = "flex items-center space-x-2 p-3 rounded-lg border-2 border-red-500 bg-red-50";
                        }
                      } else if (answers[qIndex] === oIndex) {
                        itemClass = "flex items-center space-x-2 p-3 rounded-lg border-2 border-blue-500 bg-blue-50";
                      }

                      return (
                        <div key={oIndex} className={itemClass}>
                          <RadioGroupItem value={oIndex.toString()} id={`q${qIndex}-o${oIndex}`} />
                          <Label htmlFor={`q${qIndex}-o${oIndex}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                          {results && oIndex === q.correctAnswer && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                          {results && answers[qIndex] === oIndex && oIndex !== q.correctAnswer && (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                      );
                    })}
                  </RadioGroup>

                  {results && (
                    <div className={cn(
                      "mt-3 p-3 rounded-lg text-sm",
                      result?.isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                    )}>
                      <p className="font-bold mb-1">
                        {result?.isCorrect ? "Correct!" : "Incorrect"}
                      </p>
                      <p>{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>

      <CardFooter className="bg-gray-50 p-6 flex justify-end">
        {!results ? (
          <Button 
            onClick={handleSubmit} 
            disabled={submitting || Object.keys(answers).length < quiz.questions.length}
            className="w-full sm:w-auto"
          >
            {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Submit Quiz
          </Button>
        ) : (
          <div className="flex gap-3 w-full sm:w-auto">
            {!results.passed && (
              <Button onClick={handleRetry} variant="outline" className="flex-1 sm:flex-none">
                <RotateCcw className="w-4 h-4 mr-2" />
                Retry Quiz
              </Button>
            )}
            {results.reviewMode && (
               <Button onClick={handleRetry} variant="outline" className="flex-1 sm:flex-none">
                Restart
              </Button>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default LessonQuiz;