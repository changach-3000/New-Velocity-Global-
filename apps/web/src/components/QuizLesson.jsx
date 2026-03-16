import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext';
import { CheckCircle, XCircle, AlertCircle, ArrowRight, RefreshCw, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuizLesson = ({ lessonId, onComplete }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    loadQuiz();
  }, [lessonId]);

  const loadQuiz = async () => {
    try {
      setLoading(true);
      // 1. Get Quiz
      const quizzes = await pb.collection('quizzes').getList(1, 1, {
        filter: `lesson_id = "${lessonId}"`,
        $autoCancel: false
      });
      
      if (quizzes.items.length === 0) {
        setLoading(false);
        return;
      }
      
      const quizData = quizzes.items[0];
      setQuiz(quizData);

      // 2. Get Questions
      const questionsData = await pb.collection('quiz_questions').getList(1, 50, {
        filter: `quiz_id = "${quizData.id}"`,
        sort: 'order',
        $autoCancel: false
      });
      setQuestions(questionsData.items);

      // 3. Check previous attempts
      if (currentUser) {
        const attempts = await pb.collection('quiz_attempts').getList(1, 1, {
          filter: `student_id = "${currentUser.id}" && quiz_id = "${quizData.id}"`,
          sort: '-created',
          $autoCancel: false
        });
        
        if (attempts.items.length > 0) {
          const lastAttempt = attempts.items[0];
          if (lastAttempt.passed) {
            setPassed(true);
            setScore(lastAttempt.score);
            setSubmitted(true);
            // Parse answers if stored as JSON string
            try {
              setAnswers(JSON.parse(lastAttempt.answers));
            } catch (e) {
              // ignore
            }
          }
        }
      }

    } catch (error) {
      console.error("Error loading quiz:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (questionId, value) => {
    if (submitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = async () => {
    if (!quiz || !currentUser) return;

    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct_answer) {
        correctCount++;
      }
    });

    const calculatedScore = Math.round((correctCount / questions.length) * 100);
    const isPassed = calculatedScore >= quiz.passing_score;

    setScore(calculatedScore);
    setPassed(isPassed);
    setSubmitted(true);

    try {
      await pb.collection('quiz_attempts').create({
        student_id: currentUser.id,
        quiz_id: quiz.id,
        answers: JSON.stringify(answers),
        score: calculatedScore,
        passed: isPassed
      });

      if (isPassed) {
        onComplete();
      }
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const handleRetry = () => {
    setSubmitted(false);
    setAnswers({});
    setScore(0);
    setPassed(false);
  };

  const handleViewAnswerKey = () => {
    if (quiz) {
      navigate(`/quiz/${quiz.id}/answer-key`);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading quiz...</div>;
  if (!quiz) return <div className="p-8 text-center text-gray-500">No quiz available for this lesson.</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-bold text-gray-900">{quiz.title}</h2>
        <p className="text-sm text-gray-500 mt-1">
          Passing Score: {quiz.passing_score}% • {questions.length} Questions
        </p>
      </div>

      <div className="p-6 space-y-8">
        {questions.map((q, index) => {
          const isCorrect = submitted && answers[q.id] === q.correct_answer;
          const isWrong = submitted && answers[q.id] !== q.correct_answer;
          
          return (
            <div key={q.id} className="space-y-4">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-[#1e3a8a] rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-lg mb-3">{q.question_text}</h3>
                  
                  {q.question_type === 'multiple_choice' || q.question_type === 'true_false' ? (
                    <div className="space-y-2">
                      {q.options.split(',').map(opt => {
                        const option = opt.trim();
                        const isSelected = answers[q.id] === option;
                        let optionClass = "border-gray-200 hover:bg-gray-50";
                        
                        if (submitted) {
                          if (option === q.correct_answer) optionClass = "bg-green-50 border-green-200 text-green-800";
                          else if (isSelected && option !== q.correct_answer) optionClass = "bg-red-50 border-red-200 text-red-800";
                          else optionClass = "opacity-50";
                        } else if (isSelected) {
                          optionClass = "bg-blue-50 border-blue-300 text-blue-800 ring-1 ring-blue-300";
                        }

                        return (
                          <div 
                            key={option}
                            onClick={() => handleOptionSelect(q.id, option)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${optionClass}`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option}</span>
                              {submitted && option === q.correct_answer && <CheckCircle className="w-5 h-5 text-green-600" />}
                              {submitted && isSelected && option !== q.correct_answer && <XCircle className="w-5 h-5 text-red-600" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <input 
                      type="text"
                      disabled={submitted}
                      value={answers[q.id] || ''}
                      onChange={(e) => handleOptionSelect(q.id, e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="Type your answer..."
                    />
                  )}

                  {submitted && (
                    <div className={`mt-3 p-3 rounded-lg text-sm ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      <p className="font-bold mb-1">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
                      <p>{q.explanation || (isWrong && `Correct answer: ${q.correct_answer}`)}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        {submitted ? (
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1">
              <p className="text-sm text-gray-500">Your Score</p>
              <p className={`text-2xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                {score}% {passed ? '(Passed)' : '(Failed)'}
              </p>
            </div>
            <div className="flex gap-2">
              {/* View Answer Key Button - Only shown after completion */}
              <Button
                onClick={handleViewAnswerKey}
                variant="outline"
                className="gap-2"
              >
                <BookOpen className="w-4 h-4" />
                View Answer Key
              </Button>
              {!passed && (
                <Button onClick={handleRetry} variant="outline" className="gap-2">
                  <RefreshCw className="w-4 h-4" /> Retry Quiz
                </Button>
              )}
              {passed && (
                <Button onClick={onComplete} className="bg-green-600 hover:bg-green-700 gap-2">
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        ) : (
          <Button 
            onClick={handleSubmit} 
            className="w-full bg-[#1e3a8a] hover:bg-[#3b82f6] text-lg py-6"
            disabled={Object.keys(answers).length < questions.length}
          >
            Submit Quiz
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizLesson;