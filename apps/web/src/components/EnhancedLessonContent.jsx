import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Card } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const EnhancedLessonContent = ({ lesson, content }) => {
  // Custom paragraph renderer to detect and style specific paragraphs
  // We keep this for specific logic, but the CSS wrapper will enforce visibility globally
  const customRenderers = {
    p: ({ children }) => {
      const text = children && children[0] ? String(children[0]) : '';
      const isTargetParagraph = text.startsWith('INTRODUCTION TO CFO LANGUAGE');
      
      return (
        <p className={isTargetParagraph ? 'font-medium' : ''}>
          {children}
        </p>
      );
    }
  };

  if (!content) {
    return (
      <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
        <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
        <p>No content available for this lesson.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Video Section */}
      {content.video_url && (
        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src={content.video_url.replace('watch?v=', 'embed/')} 
            className="w-full h-full" 
            title={lesson.title}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      )}

      {/* Content Body */}
      {content.content_body && (
        <Card className="p-6 md:p-8 shadow-sm border-gray-100">
          {/* 
            Scoped CSS to forcefully override any inherited styles or Tailwind conflicts.
            Using !important to ensure text is always visible (dark gray #111827) regardless of theme.
          */}
          <style>{`
            .lesson-content-wrapper {
              color: #111827 !important;
              font-family: inherit;
              line-height: 1.75 !important;
              font-size: 1rem !important;
            }
            
            .lesson-content-wrapper p {
              color: #111827 !important;
              margin-bottom: 1.5em !important;
              margin-top: 0 !important;
            }
            
            .lesson-content-wrapper h1, 
            .lesson-content-wrapper h2, 
            .lesson-content-wrapper h3, 
            .lesson-content-wrapper h4, 
            .lesson-content-wrapper h5, 
            .lesson-content-wrapper h6 {
              color: #111827 !important;
              font-weight: 700 !important;
              margin-top: 2em !important;
              margin-bottom: 1em !important;
              line-height: 1.3 !important;
            }
            
            .lesson-content-wrapper h1 { font-size: 2.25em !important; }
            .lesson-content-wrapper h2 { font-size: 1.75em !important; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.3em; }
            .lesson-content-wrapper h3 { font-size: 1.5em !important; }
            
            .lesson-content-wrapper ul, 
            .lesson-content-wrapper ol {
              color: #111827 !important;
              margin-top: 0 !important;
              margin-bottom: 1.5em !important;
              padding-left: 1.625em !important;
              list-style-position: outside !important;
            }
            
            .lesson-content-wrapper ul {
              list-style-type: disc !important;
            }
            
            .lesson-content-wrapper ol {
              list-style-type: decimal !important;
            }
            
            .lesson-content-wrapper li {
              color: #111827 !important;
              margin-bottom: 0.5em !important;
              padding-left: 0.375em !important;
            }
            
            .lesson-content-wrapper li::marker {
              color: #4b5563 !important;
            }
            
            .lesson-content-wrapper strong, 
            .lesson-content-wrapper b {
              color: #111827 !important;
              font-weight: 700 !important;
            }
            
            .lesson-content-wrapper a {
              color: #2563eb !important;
              text-decoration: underline !important;
              font-weight: 500 !important;
            }
            
            .lesson-content-wrapper a:hover {
              color: #1d4ed8 !important;
            }
            
            .lesson-content-wrapper blockquote {
              border-left: 4px solid #e5e7eb !important;
              padding-left: 1em !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
              font-style: italic !important;
              color: #4b5563 !important;
              margin-bottom: 1.5em !important;
            }
            
            .lesson-content-wrapper code {
              background-color: #f3f4f6 !important;
              color: #111827 !important;
              padding: 0.2em 0.4em !important;
              border-radius: 0.25em !important;
              font-size: 0.875em !important;
              font-family: monospace !important;
            }
            
            .lesson-content-wrapper pre {
              background-color: #1f2937 !important;
              padding: 1em !important;
              border-radius: 0.5em !important;
              overflow-x: auto !important;
              margin-bottom: 1.5em !important;
            }
            
            .lesson-content-wrapper pre code {
              background-color: transparent !important;
              color: #e5e7eb !important;
              padding: 0 !important;
            }
          `}</style>
          
          <div className="lesson-content-wrapper">
            <ReactMarkdown components={customRenderers}>
              {content.content_body}
            </ReactMarkdown>
          </div>
        </Card>
      )}
    </div>
  );
};

export default EnhancedLessonContent;