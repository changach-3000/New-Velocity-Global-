import React from 'react';
import { Download, FileText, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnswerKeyResource = ({ questions, quizTitle }) => {
  const generatePDF = () => {
    // Create formatted HTML content for PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Answer Key - ${quizTitle || 'Quiz'}</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              max-width: 800px;
              margin: 40px auto;
              padding: 20px;
              color: #1f2937;
              line-height: 1.6;
            }
            h1 {
              color: #1e3a8a;
              border-bottom: 3px solid #1e3a8a;
              padding-bottom: 10px;
              margin-bottom: 30px;
            }
            .question {
              margin-bottom: 30px;
              page-break-inside: avoid;
            }
            .question-header {
              display: flex;
              align-items: center;
              margin-bottom: 10px;
            }
            .question-number {
              background: #1e3a8a;
              color: white;
              width: 35px;
              height: 35px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              margin-right: 15px;
            }
            .question-text {
              font-weight: 600;
              font-size: 16px;
              flex: 1;
            }
            .question-type {
              background: #dbeafe;
              color: #1e40af;
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 10px;
              display: inline-block;
            }
            .options {
              margin: 15px 0;
              padding-left: 20px;
            }
            .option {
              padding: 8px 12px;
              margin: 5px 0;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
            }
            .option.correct {
              background: #dcfce7;
              border-color: #86efac;
              font-weight: 600;
            }
            .answer-box {
              background: #dcfce7;
              border: 2px solid #86efac;
              padding: 12px;
              border-radius: 6px;
              margin: 10px 0;
            }
            .answer-label {
              font-weight: 600;
              color: #166534;
              margin-bottom: 5px;
            }
            .explanation-box {
              background: #eff6ff;
              border: 1px solid #bfdbfe;
              padding: 12px;
              border-radius: 6px;
              margin-top: 10px;
            }
            .explanation-label {
              font-weight: 600;
              color: #1e40af;
              margin-bottom: 5px;
            }
            .footer {
              margin-top: 40px;
              padding-top: 20px;
              border-top: 2px solid #e5e7eb;
              text-align: center;
              color: #6b7280;
              font-size: 12px;
            }
            @media print {
              body { margin: 20px; }
              .question { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <h1>Answer Key: ${quizTitle || 'Quiz'}</h1>
          <p style="color: #6b7280; margin-bottom: 30px;">Total Questions: ${questions.length}</p>
          
          ${questions.map((q, index) => `
            <div class="question">
              <div class="question-header">
                <div class="question-number">${index + 1}</div>
                <div class="question-text">${q.question_text}</div>
              </div>
              
              <div class="question-type">${q.question_type.replace('_', ' ')}</div>
              
              ${(q.question_type === 'multiple_choice' || q.question_type === 'true_false') && q.options ? `
                <div class="options">
                  ${q.options.split(',').map(opt => {
                    const option = opt.trim();
                    const isCorrect = option === q.correct_answer;
                    return `<div class="option ${isCorrect ? 'correct' : ''}">${option}${isCorrect ? ' ✓' : ''}</div>`;
                  }).join('')}
                </div>
              ` : `
                <div class="answer-box">
                  <div class="answer-label">Correct Answer:</div>
                  <div>${q.correct_answer}</div>
                </div>
              `}
              
              ${q.explanation ? `
                <div class="explanation-box">
                  <div class="explanation-label">Explanation:</div>
                  <div>${q.explanation}</div>
                </div>
              ` : ''}
            </div>
          `).join('')}
          
          <div class="footer">
            Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
          </div>
        </body>
      </html>
    `;

    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `answer-key-${quizTitle?.replace(/\s+/g, '-').toLowerCase() || 'quiz'}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Answer Key - ${quizTitle || 'Quiz'}</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              max-width: 800px;
              margin: 40px auto;
              padding: 20px;
              color: #1f2937;
              line-height: 1.6;
            }
            h1 {
              color: #1e3a8a;
              border-bottom: 3px solid #1e3a8a;
              padding-bottom: 10px;
              margin-bottom: 30px;
            }
            .question {
              margin-bottom: 30px;
              page-break-inside: avoid;
            }
            .question-header {
              display: flex;
              align-items: center;
              margin-bottom: 10px;
            }
            .question-number {
              background: #1e3a8a;
              color: white;
              width: 35px;
              height: 35px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              margin-right: 15px;
            }
            .question-text {
              font-weight: 600;
              font-size: 16px;
              flex: 1;
            }
            .question-type {
              background: #dbeafe;
              color: #1e40af;
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 10px;
              display: inline-block;
            }
            .options {
              margin: 15px 0;
              padding-left: 20px;
            }
            .option {
              padding: 8px 12px;
              margin: 5px 0;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
            }
            .option.correct {
              background: #dcfce7;
              border-color: #86efac;
              font-weight: 600;
            }
            .answer-box {
              background: #dcfce7;
              border: 2px solid #86efac;
              padding: 12px;
              border-radius: 6px;
              margin: 10px 0;
            }
            .answer-label {
              font-weight: 600;
              color: #166534;
              margin-bottom: 5px;
            }
            .explanation-box {
              background: #eff6ff;
              border: 1px solid #bfdbfe;
              padding: 12px;
              border-radius: 6px;
              margin-top: 10px;
            }
            .explanation-label {
              font-weight: 600;
              color: #1e40af;
              margin-bottom: 5px;
            }
            @media print {
              body { margin: 20px; }
              .question { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <h1>Answer Key: ${quizTitle || 'Quiz'}</h1>
          <p style="color: #6b7280; margin-bottom: 30px;">Total Questions: ${questions.length}</p>
          
          ${questions.map((q, index) => `
            <div class="question">
              <div class="question-header">
                <div class="question-number">${index + 1}</div>
                <div class="question-text">${q.question_text}</div>
              </div>
              
              <div class="question-type">${q.question_type.replace('_', ' ')}</div>
              
              ${(q.question_type === 'multiple_choice' || q.question_type === 'true_false') && q.options ? `
                <div class="options">
                  ${q.options.split(',').map(opt => {
                    const option = opt.trim();
                    const isCorrect = option === q.correct_answer;
                    return `<div class="option ${isCorrect ? 'correct' : ''}">${option}${isCorrect ? ' ✓' : ''}</div>`;
                  }).join('')}
                </div>
              ` : `
                <div class="answer-box">
                  <div class="answer-label">Correct Answer:</div>
                  <div>${q.correct_answer}</div>
                </div>
              `}
              
              ${q.explanation ? `
                <div class="explanation-box">
                  <div class="explanation-label">Explanation:</div>
                  <div>${q.explanation}</div>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </body>
      </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <div className="flex gap-3">
      <Button
        onClick={generatePDF}
        className="bg-[#1e3a8a] hover:bg-[#3b82f6] gap-2"
      >
        <Download className="w-4 h-4" />
        Download as HTML
      </Button>
      <Button
        onClick={handlePrint}
        variant="outline"
        className="gap-2"
      >
        <Printer className="w-4 h-4" />
        Print Answer Key
      </Button>
    </div>
  );
};

export default AnswerKeyResource;