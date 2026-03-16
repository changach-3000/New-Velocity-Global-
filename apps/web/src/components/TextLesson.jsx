import React, { useEffect } from 'react';
import Markdown from 'react-markdown';

const TextLesson = ({ content, onComplete }) => {
  
  // Auto-complete text lessons after a short delay or immediately
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Mark complete after 3 seconds of reading
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="prose prose-lg prose-blue max-w-none prose-p:text-gray-900 prose-li:text-gray-900">
        <Markdown>{content?.content_body || '*No content available*'}</Markdown>
      </div>
    </div>
  );
};

export default TextLesson;