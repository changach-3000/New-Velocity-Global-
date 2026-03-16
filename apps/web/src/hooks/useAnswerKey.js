import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useAnswerKey = (quizId) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!quizId) {
      setLoading(false);
      return;
    }
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const questionsData = await pb.collection('quiz_questions').getList(1, 100, {
        filter: `quiz_id = "${quizId}"`,
        sort: 'order',
        $autoCancel: false
      });
      
      setQuestions(questionsData.items);
    } catch (err) {
      console.error('Error fetching questions:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatAnswers = () => {
    return questions.map((q, index) => ({
      number: index + 1,
      question: q.question_text,
      answer: q.correct_answer,
      explanation: q.explanation,
      type: q.question_type
    }));
  };

  const generatePDFData = () => {
    return {
      title: 'Quiz Answer Key',
      totalQuestions: questions.length,
      questions: formatAnswers(),
      generatedAt: new Date().toISOString()
    };
  };

  const getQuestionStats = async (quizId) => {
    try {
      // Fetch all quiz attempts for this quiz
      const attempts = await pb.collection('quiz_attempts').getList(1, 1000, {
        filter: `quiz_id = "${quizId}"`,
        $autoCancel: false
      });

      // Track which questions students struggled with
      const questionDifficulty = {};
      
      attempts.items.forEach(attempt => {
        try {
          const answers = JSON.parse(attempt.answers);
          questions.forEach(q => {
            if (!questionDifficulty[q.id]) {
              questionDifficulty[q.id] = { correct: 0, total: 0 };
            }
            questionDifficulty[q.id].total++;
            if (answers[q.id] === q.correct_answer) {
              questionDifficulty[q.id].correct++;
            }
          });
        } catch (e) {
          // Skip invalid JSON
        }
      });

      // Calculate difficulty percentages
      const stats = Object.entries(questionDifficulty).map(([questionId, data]) => ({
        questionId,
        correctRate: data.total > 0 ? (data.correct / data.total) * 100 : 0,
        totalAttempts: data.total
      }));

      return stats;
    } catch (err) {
      console.error('Error fetching question stats:', err);
      return [];
    }
  };

  return {
    questions,
    loading,
    error,
    formatAnswers,
    generatePDFData,
    getQuestionStats,
    refresh: fetchQuestions
  };
};