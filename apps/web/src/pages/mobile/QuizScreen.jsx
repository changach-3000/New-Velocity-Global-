import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, Share2, RotateCcw } from 'lucide-react';

const QuizScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock Questions
  const questions = [
    { id: 1, text: "What is the maximum Section 179 deduction for 2024?", options: ["$1,000,000", "$1,220,000", "$2,890,000", "$500,000"], correct: 1 },
    { id: 2, text: "Which depreciation system is used for tangible property?", options: ["ACRS", "MACRS", "Straight-Line", "Sum-of-Years"], correct: 1 },
    { id: 3, text: "Bonus depreciation for 2024 is set at what percentage?", options: ["100%", "80%", "60%", "40%"], correct: 2 },
  ];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: parseInt(value) });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) correct++;
    });
    return correct;
  };

  if (isSubmitted) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Quiz Complete!</h1>
        <p className="text-gray-500 mb-8">You scored {score}/{questions.length}</p>
        
        <div className="text-6xl font-bold text-blue-600 mb-8">{percentage}%</div>
        
        <div className="grid grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600 font-medium">Correct</p>
            <p className="text-2xl font-bold text-green-700">{score}</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-sm text-red-600 font-medium">Incorrect</p>
            <p className="text-2xl font-bold text-red-700">{questions.length - score}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Button className="w-full" onClick={() => navigate('/mobile/lessons')}>Back to Lessons</Button>
          <Button variant="outline" className="w-full gap-2" onClick={() => {
            setIsSubmitted(false);
            setCurrentQuestion(0);
            setAnswers({});
          }}>
            <RotateCcw className="w-4 h-4" /> Retake Quiz
          </Button>
          <Button variant="ghost" className="w-full gap-2">
            <Share2 className="w-4 h-4" /> Share Score
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 border-b flex items-center justify-between sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div className="flex-1 mx-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
        </div>
        <div className="w-8"></div> {/* Spacer */}
      </div>

      {/* Question Area */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-slate-900 leading-relaxed">
              {questions[currentQuestion].text}
            </h2>
          </CardContent>
        </Card>

        <RadioGroup 
          value={answers[currentQuestion]?.toString()} 
          onValueChange={handleAnswer}
          className="space-y-3"
        >
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className={`flex items-center space-x-3 border p-4 rounded-lg bg-white ${answers[currentQuestion] === index ? 'border-blue-500 bg-blue-50' : ''}`}>
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer font-medium text-slate-700">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Footer Navigation */}
      <div className="bg-white p-4 border-t flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        
        {currentQuestion === questions.length - 1 ? (
          <Button 
            className="bg-green-600 hover:bg-green-700 px-8"
            onClick={() => setIsSubmitted(true)}
            disabled={answers[currentQuestion] === undefined}
          >
            Submit
          </Button>
        ) : (
          <Button 
            className="px-8"
            onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
            disabled={answers[currentQuestion] === undefined}
          >
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;