import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Loader2, PlayCircle } from 'lucide-react';

const VideoLesson = ({ content, onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const playerRef = useRef(null);

  const handleProgress = (state) => {
    // Mark as complete when 90% watched
    if (!completed && state.played > 0.9) {
      setCompleted(true);
      onComplete();
    }
  };

  if (!content?.video_url) {
    return (
      <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
        <div className="text-center">
          <PlayCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>No video URL provided</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-900 text-white">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        )}
        <ReactPlayer
          ref={playerRef}
          url={content.video_url}
          width="100%"
          height="100%"
          controls
          onReady={() => setLoading(false)}
          onProgress={handleProgress}
          config={{
            youtube: {
              playerVars: { showinfo: 1 }
            }
          }}
        />
      </div>
      
      {content.content_body && (
        <div className="prose max-w-none text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: content.content_body }} />
        </div>
      )}
    </div>
  );
};

export default VideoLesson;