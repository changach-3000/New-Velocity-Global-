import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, EyeOff, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnswerKey = ({ questions, showInstructorTools = false, onMarkForReview, onAddNote }) => {
  const [showExplanations, setShowExplanations] = useState(true);
  const [filterText, setFilterText] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const filteredQuestions = questions.filter(q => {
    if (!filterText) return true;
    const searchLower = filterText.toLowerCase();
    return (
      q.question_text.toLowerCase().includes(searchLower) ||
      q.correct_answer.toLowerCase().includes(searchLower) ||
      (q.explanation && q.explanation.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#1e3a8a]" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Answer Key</h1>
              <p className="text-sm text-gray-600">{questions.length} Questions</p>
            </div>
          </div>
          <Button
            onClick={() => setShowExplanations(!showExplanations)}
            variant="outline"
            className="gap-2"
          >
            {showExplanations ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showExplanations ? 'Hide' : 'Show'} Explanations
          </Button>
        </div>

        {/* Filter */}
        <input
          type="text"
          placeholder="Filter by question number, topic, or keyword..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
        />
      </div>

      {/* Questions List */}
      <div className="divide-y divide-gray-200">
        {filteredQuestions.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No questions match your filter criteria.
          </div>
        ) : (
          filteredQuestions.map((question, index) => {
            const isExpanded = expandedQuestions[question.id];
            const questionNumber = questions.findIndex(q => q.id === question.id) + 1;

            return (
              <div key={question.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex gap-4">
                  {/* Question Number */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                      {questionNumber}
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="flex-1 space-y-3">
                    {/* Question Text */}
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {question.question_text}
                    </h3>

                    {/* Question Type Badge */}
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {question.question_type.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>

                    {/* Options (for multiple choice) */}
                    {(question.question_type === 'multiple_choice' || question.question_type === 'true_false') && question.options && (
                      <div className="space-y-2 mt-3">
                        {question.options.split(',').map(opt => {
                          const option = opt.trim();
                          const isCorrect = option === question.correct_answer;
                          return (
                            <div
                              key={option}
                              className={`p-3 rounded-lg border ${
                                isCorrect
                                  ? 'bg-green-50 border-green-300 text-green-900'
                                  : 'bg-gray-50 border-gray-200 text-gray-700'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{option}</span>
                                {isCorrect && (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Correct Answer (for short answer) */}
                    {question.question_type === 'short_answer' && (
                      <div className="p-3 bg-green-50 border border-green-300 rounded-lg">
                        <p className="text-sm font-medium text-green-800 mb-1">Correct Answer:</p>
                        <p className="text-green-900">{question.correct_answer}</p>
                      </div>
                    )}

                    {/* Explanation Toggle */}
                    {question.explanation && (
                      <div className="mt-3">
                        <button
                          onClick={() => toggleQuestion(question.id)}
                          className="flex items-center gap-2 text-[#1e3a8a] hover:text-[#3b82f6] font-medium text-sm"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                          {isExpanded ? 'Hide' : 'Show'} Explanation
                        </button>

                        {(isExpanded || showExplanations) && (
                          <div className="mt-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm font-medium text-blue-900 mb-1">Explanation:</p>
                            <p className="text-blue-800 leading-relaxed">{question.explanation}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Instructor Tools */}
                    {showInstructorTools && (
                      <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
                        <Button
                          onClick={() => onMarkForReview && onMarkForReview(question.id)}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          Mark for Review
                        </Button>
                        <Button
                          onClick={() => onAddNote && onAddNote(question.id)}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          Add Note
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AnswerKey;