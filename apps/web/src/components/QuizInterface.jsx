import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle2, XCircle, AlertCircle, Loader2, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuizInterface = ({ lessonId }) => {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [parsedQuestions, setParsedQuestions] = useState([]);
  const [parsedAnswers, setParsedAnswers] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const records = await pb.collection('vendor_leasing_quizzes').getList(1, 1, {
          filter: `lessonId="${lessonId}"`,
          $autoCancel: false,
        });

        if (records.items.length > 0) {
          const quizData = records.items[0];
          setQuiz(quizData);
          
          // Parse questions and answers safely
          let q = [];
          let a = [];
          try {
            q = typeof quizData.questions === 'string' ? JSON.parse(quizData.questions) : quizData.questions;
            a = typeof quizData.answers === 'string' ? JSON.parse(quizData.answers) : quizData.answers;
          } catch (e) {
            console.error("Error parsing quiz data", e);
            // Fallback for text format if not JSON
            q = [{ text: "Error loading questions. Please contact support.", options: [] }];
          }
          setParsedQuestions(q || []);
          setParsedAnswers(a || []);
        }
      } catch (err) {
        console.error("Error fetching quiz:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [lessonId]);

  const handleAnswerSelect = (value) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: value
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < parsedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    parsedQuestions.forEach((_, index) => {
      // Assuming parsedAnswers is array of correct option indices or strings
      // Adjust comparison based on your data structure. 
      // Here assuming parsedAnswers[index] holds the correct option string or index
      if (selectedAnswers[index] === parsedAnswers[index]) {
        correctCount++;
      }
    });
    const finalScore = (correctCount / parsedQuestions.length) * 100;
    setScore(finalScore);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;
  if (!quiz || parsedQuestions.length === 0) return <div className="text-center p-8">No quiz available for this lesson.</div>;

  if (showResults) {
    const passed = score >= (quiz.passingScore || 70);
    return (
      <Card className="max-w-2xl mx-auto mt-8 border-t-4 border-t-blue-600">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl mb-2">Quiz Results</CardTitle>
          <div className="flex justify-center mb-4">
            {passed ? (
              <CheckCircle2 className="h-24 w-24 text-green-500" />
            ) : (
              <XCircle className="h-24 w-24 text-red-500" />
            )}
          </div>
          <p className="text-2xl font-bold mb-2">{score.toFixed(0)}%</p>
          <p className="text-muted-foreground">
            {passed ? "Congratulations! You passed." : "Keep studying and try again."}
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Correct Answers:</span>
              <span className="font-medium">{Math.round((score / 100) * parsedQuestions.length)} / {parsedQuestions.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Passing Score:</span>
              <span className="font-medium">{quiz.passingScore || 70}%</span>
            </div>
            <Progress value={score} className={`h-3 ${passed ? "bg-green-100" : "bg-red-100"}`} indicatorClassName={passed ? "bg-green-500" : "bg-red-500"} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button onClick={resetQuiz} variant="outline" className="gap-2">
            <RotateCcw className="h-4 w-4" /> Retake Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const currentQuestion = parsedQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / parsedQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{quiz.title}</h2>
        <span className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {parsedQuestions.length}
        </span>
      </div>
      <Progress value={progress} className="h-2" />

      <Card className="mt-6 min-h-[300px] flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg font-medium leading-relaxed">
            {currentQuestion.question || currentQuestion.text || "Question text missing"}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <RadioGroup 
            value={selectedAnswers[currentQuestionIndex]} 
            onValueChange={handleAnswerSelect}
            className="space-y-3"
          >
            {(currentQuestion.options || []).map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                <RadioGroupItem value={option} id={`q${currentQuestionIndex}-opt${idx}`} />
                <Label htmlFor={`q${currentQuestionIndex}-opt${idx}`} className="flex-grow cursor-pointer font-normal">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6 bg-gray-50/50 rounded-b-xl">
          <Button 
            variant="outline" 
            onClick={handlePrevious} 
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          <Button 
            onClick={handleNext}
            disabled={!selectedAnswers[currentQuestionIndex]}
          >
            {currentQuestionIndex === parsedQuestions.length - 1 ? "Submit Quiz" : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizInterface;