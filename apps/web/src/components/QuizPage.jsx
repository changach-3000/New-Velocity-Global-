import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const QuizPage = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Mock quiz data
  const questions = [
    {
      id: 1,
      text: "Which depreciation system is currently used for tangible property placed in service after 1986 in the United States?",
      options: [
        "ACRS (Accelerated Cost Recovery System)",
        "MACRS (Modified Accelerated Cost Recovery System)",
        "Straight-Line Only System",
        "Sum-of-Years-Digits System"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "Under Section 179, what is the maximum deduction limit for tax year 2024?",
      options: [
        "$1,000,000",
        "$1,160,000",
        "$1,220,000",
        "$2,890,000"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "For a lease to be classified as a Finance Lease under ASC 842, the lease term must be for what portion of the asset's remaining economic life?",
      options: [
        "Major part (typically ≥ 75%)",
        "Substantial part (typically ≥ 50%)",
        "Entire life (100%)",
        "Minor part (typically < 25%)"
      ],
      correctAnswer: 0
    }
  ];

  const handleOptionSelect = (index) => {
    if (!isSubmitted) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <Card className="w-full max-w-md text-center p-6">
          <CardHeader>
            <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              {percentage >= 70 ? (
                <CheckCircle className="w-10 h-10 text-blue-600" />
              ) : (
                <AlertCircle className="w-10 h-10 text-orange-500" />
              )}
            </div>
            <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold text-slate-900 mb-2">{percentage}%</div>
            <p className="text-gray-500 mb-6">
              You scored {score} out of {questions.length} questions correctly.
            </p>
            {percentage >= 70 ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg text-sm">
                Great job! You've passed this lesson's quiz.
              </div>
            ) : (
              <div className="bg-orange-50 text-orange-700 p-4 rounded-lg text-sm">
                You need 70% to pass. Review the study guide and try again.
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full" asChild>
              <Link to={`/course/tax-optimization/lesson/${id}`}>Return to Lesson</Link>
            </Button>
            <Button variant="outline" className="w-full" onClick={() => window.location.reload()}>
              Retake Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Lesson Quiz - Tax Optimization</title>
      </Helmet>

      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-6">
          <Link to={`/course/tax-optimization/lesson/${id}`} className="flex items-center text-gray-600 hover:text-blue-600 mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" /> Exit Quiz
          </Link>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm font-medium text-blue-600">{Math.round(((currentQuestion) / questions.length) * 100)}% Progress</span>
          </div>
          <Progress value={((currentQuestion) / questions.length) * 100} className="h-2" />
        </div>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {questions[currentQuestion].text}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <div 
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`
                  p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center justify-between
                  ${selectedOption === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'}
                  ${isSubmitted && index === questions[currentQuestion].correctAnswer ? 'border-green-500 bg-green-50' : ''}
                  ${isSubmitted && selectedOption === index && index !== questions[currentQuestion].correctAnswer ? 'border-red-500 bg-red-50' : ''}
                `}
              >
                <span className={`font-medium ${selectedOption === index ? 'text-blue-700' : 'text-gray-700'}`}>
                  {option}
                </span>
                {isSubmitted && index === questions[currentQuestion].correctAnswer && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {isSubmitted && selectedOption === index && index !== questions[currentQuestion].correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex justify-end pt-4">
            {!isSubmitted ? (
              <Button 
                onClick={handleSubmit} 
                disabled={selectedOption === null}
                className="w-full md:w-auto"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNext} className="w-full md:w-auto">
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default QuizPage;