import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Loader2, AlertCircle, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { logDataFlow } from '@/utils/DataFlowLogger';

const LessonContentViewer = ({ lessonId }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      if (!lessonId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Fetch content by lesson_id
        const records = await pb.collection('lesson_content').getList(1, 1, {
          filter: `lesson_id="${lessonId}"`,
          $autoCancel: false
        });

        const contentData = records.items.length > 0 ? records.items[0] : null;
        setContent(contentData);
        logDataFlow('LessonContentViewer:Loaded', contentData, { lessonId });
      } catch (err) {
        console.error('Error loading lesson content:', err);
        setError('Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [lessonId]);

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
        <AlertCircle className="w-5 h-5" />
        <span>{error}</span>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="p-8 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <FileText className="w-10 h-10 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">No content available for this lesson yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {content.video_url && (
        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={content.video_url.replace('watch?v=', 'embed/')}
            title="Lesson Video"
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      )}

      {content.content_body && (
        <Card>
          <CardContent className="p-6 prose max-w-none">
            <div className="whitespace-pre-wrap text-gray-900 leading-relaxed">
              {content.content_body}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LessonContentViewer;