import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMobileAuth } from '@/contexts/MobileAuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import { 
  ChevronLeft, ChevronRight, Bookmark, BookmarkCheck, 
  StickyNote, Highlighter, Type, Moon, Sun, ChevronDown, ChevronUp 
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Progress } from '@/components/ui/progress.jsx';
import { useToast } from '@/components/ui/use-toast.js';

const MobileLessonDetail = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useMobileAuth();
  const { toast } = useToast();

  const [lesson, setLesson] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [darkMode, setDarkMode] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [showNotes, setShowNotes] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser && lessonId) {
      loadLessonData();
      loadNotes();
      loadProgress();
    }
  }, [currentUser, lessonId]);

  const loadLessonData = async () => {
    try {
      const record = await pb.collection('vendor_leasing_lessons').getOne(lessonId, {
        $autoCancel: false
      });
      setLesson(record);
      
      // Initialize all sections as expanded
      const sections = {};
      if (record.contentBody) {
        const sectionCount = record.contentBody.split('\n\n').length;
        for (let i = 0; i < sectionCount; i++) {
          sections[i] = true;
        }
      }
      setExpandedSections(sections);
    } catch (error) {
      console.error('Failed to load lesson:', error);
      toast({
        title: 'Error',
        description: 'Failed to load lesson content',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const loadNotes = async () => {
    try {
      const records = await pb.collection('mobile_user_notes').getFullList({
        filter: `userId = "${currentUser.id}" && lessonId = "${lessonId}"`,
        sort: '-created',
        $autoCancel: false
      });
      setNotes(records);
    } catch (error) {
      console.error('Failed to load notes:', error);
    }
  };

  const loadProgress = async () => {
    if (!lesson) return;
    
    try {
      const records = await pb.collection('vendor_leasing_progress_tracking').getFullList({
        filter: `studentId = "${currentUser.id}" && lessonNumber = ${lesson.lessonNumber}`,
        $autoCancel: false
      });

      if (records.length > 0) {
        const status = records[0].completionStatus;
        setProgress(status === 'completed' ? 100 : status === 'in_progress' ? 50 : 0);
        setIsBookmarked(status !== 'not_started');
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  };

  const toggleBookmark = async () => {
    try {
      const records = await pb.collection('vendor_leasing_progress_tracking').getFullList({
        filter: `studentId = "${currentUser.id}" && lessonNumber = ${lesson.lessonNumber}`,
        $autoCancel: false
      });

      const data = {
        studentId: currentUser.id,
        lessonNumber: lesson.lessonNumber,
        completionStatus: isBookmarked ? 'not_started' : 'in_progress',
        lastAccessedDate: new Date().toISOString()
      };

      if (records.length > 0) {
        await pb.collection('vendor_leasing_progress_tracking').update(records[0].id, data, {
          $autoCancel: false
        });
      } else {
        await pb.collection('vendor_leasing_progress_tracking').create(data, {
          $autoCancel: false
        });
      }

      setIsBookmarked(!isBookmarked);
      toast({
        title: isBookmarked ? 'Bookmark removed' : 'Lesson bookmarked',
        description: isBookmarked ? 'Removed from your bookmarks' : 'Added to your bookmarks'
      });
    } catch (error) {
      console.error('Failed to toggle bookmark:', error);
      toast({
        title: 'Error',
        description: 'Failed to update bookmark',
        variant: 'destructive'
      });
    }
  };

  const addNote = async () => {
    if (!newNote.trim()) return;

    try {
      const data = {
        userId: currentUser.id,
        lessonId: lessonId,
        noteContent: newNote,
        createdDate: new Date().toISOString(),
        updatedDate: new Date().toISOString()
      };

      await pb.collection('mobile_user_notes').create(data, { $autoCancel: false });
      setNewNote('');
      await loadNotes();
      
      toast({
        title: 'Note added',
        description: 'Your note has been saved'
      });
    } catch (error) {
      console.error('Failed to add note:', error);
      toast({
        title: 'Error',
        description: 'Failed to save note',
        variant: 'destructive'
      });
    }
  };

  const deleteNote = async (noteId) => {
    try {
      await pb.collection('mobile_user_notes').delete(noteId, { $autoCancel: false });
      await loadNotes();
      
      toast({
        title: 'Note deleted',
        description: 'Your note has been removed'
      });
    } catch (error) {
      console.error('Failed to delete note:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete note',
        variant: 'destructive'
      });
    }
  };

  const markAsComplete = async () => {
    try {
      const records = await pb.collection('vendor_leasing_progress_tracking').getFullList({
        filter: `studentId = "${currentUser.id}" && lessonNumber = ${lesson.lessonNumber}`,
        $autoCancel: false
      });

      const data = {
        studentId: currentUser.id,
        lessonNumber: lesson.lessonNumber,
        completionStatus: 'completed',
        completionDate: new Date().toISOString(),
        lastAccessedDate: new Date().toISOString()
      };

      if (records.length > 0) {
        await pb.collection('vendor_leasing_progress_tracking').update(records[0].id, data, {
          $autoCancel: false
        });
      } else {
        await pb.collection('vendor_leasing_progress_tracking').create(data, {
          $autoCancel: false
        });
      }

      setProgress(100);
      toast({
        title: 'Lesson completed! 🎉',
        description: 'Great job! Keep up the momentum.'
      });
    } catch (error) {
      console.error('Failed to mark as complete:', error);
      toast({
        title: 'Error',
        description: 'Failed to update progress',
        variant: 'destructive'
      });
    }
  };

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Lesson not found</p>
      </div>
    );
  }

  const contentSections = lesson.contentBody ? lesson.contentBody.split('\n\n') : [];

  return (
    <div className={`min-h-screen pb-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4`}>
        <div className="flex items-center justify-between mb-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/mobile/dashboard')}
            className="p-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleBookmark}
              className="p-2"
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-5 h-5 text-blue-600" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        <h1 className="text-lg font-bold mb-2">
          Lesson {lesson.lessonNumber}: {lesson.title}
        </h1>
        
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-gray-500 mt-1">{progress}% complete</p>
      </div>

      {/* Font Size Control */}
      <div className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Font Size</span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFontSize(Math.max(12, fontSize - 2))}
              className="p-2"
            >
              <Type className="w-4 h-4" />
              <span className="text-xs ml-1">-</span>
            </Button>
            <span className="text-sm">{fontSize}px</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFontSize(Math.min(24, fontSize + 2))}
              className="p-2"
            >
              <Type className="w-4 h-4" />
              <span className="text-xs ml-1">+</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4" style={{ fontSize: `${fontSize}px` }}>
        {lesson.description && (
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{lesson.description}</p>
          </div>
        )}

        {contentSections.map((section, index) => (
          <div key={index} className={`rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
            <button
              onClick={() => toggleSection(index)}
              className="w-full p-4 flex items-center justify-between text-left"
            >
              <span className="font-medium">Section {index + 1}</span>
              {expandedSections[index] ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            
            {expandedSections[index] && (
              <div className="p-4 pt-0">
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {section}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Notes Section */}
      <div className="p-4">
        <Button
          variant="outline"
          onClick={() => setShowNotes(!showNotes)}
          className="w-full mb-4"
        >
          <StickyNote className="w-4 h-4 mr-2" />
          {showNotes ? 'Hide Notes' : 'Show Notes'} ({notes.length})
        </Button>

        {showNotes && (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a note..."
                className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                rows={3}
              />
              <Button onClick={addNote} className="mt-2 w-full">
                Add Note
              </Button>
            </div>

            {notes.map((note) => (
              <div key={note.id} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{note.noteContent}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">
                    {new Date(note.createdDate).toLocaleDateString()}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteNote(note.id)}
                    className="text-red-600"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className={`fixed bottom-16 left-0 right-0 p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        {progress < 100 && (
          <Button onClick={markAsComplete} className="w-full mb-2">
            Mark as Complete
          </Button>
        )}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button variant="outline" className="flex-1">
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileLessonDetail;