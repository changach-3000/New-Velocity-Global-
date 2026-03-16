import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext';
import { Upload, FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AssignmentLesson = ({ lessonId, onComplete }) => {
  const { currentUser } = useAuth();
  const [assignment, setAssignment] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    loadAssignment();
  }, [lessonId]);

  const loadAssignment = async () => {
    try {
      setLoading(true);
      // 1. Get Assignment
      const assignments = await pb.collection('assignments').getList(1, 1, {
        filter: `lesson_id = "${lessonId}"`,
        $autoCancel: false
      });
      
      if (assignments.items.length === 0) {
        setLoading(false);
        return;
      }
      
      const assignmentData = assignments.items[0];
      setAssignment(assignmentData);

      // 2. Check submission
      if (currentUser) {
        const submissions = await pb.collection('assignment_submissions').getList(1, 1, {
          filter: `student_id = "${currentUser.id}" && assignment_id = "${assignmentData.id}"`,
          sort: '-created',
          $autoCancel: false
        });
        
        if (submissions.items.length > 0) {
          setSubmission(submissions.items[0]);
          onComplete(); // Mark as complete if submitted
        }
      }
    } catch (error) {
      console.error("Error loading assignment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text && !file) return;

    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append('assignment_id', assignment.id);
      formData.append('student_id', currentUser.id);
      formData.append('submission_text', text);
      if (file) {
        formData.append('submitted_files', file);
      }

      const record = await pb.collection('assignment_submissions').create(formData);
      setSubmission(record);
      onComplete();
    } catch (error) {
      console.error("Error submitting assignment:", error);
      alert("Failed to submit assignment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading assignment...</div>;
  if (!assignment) return <div className="p-8 text-center text-gray-500">No assignment for this lesson.</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{assignment.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {assignment.due_date && (
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> Due: {new Date(assignment.due_date).toLocaleDateString()}
                </span>
              )}
              <span className="flex items-center gap-1">
                <AlertCircle className="w-4 h-4" /> Max Score: {assignment.max_score || 100}
              </span>
            </div>
          </div>
          {submission && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <CheckCircle className="w-4 h-4" /> Submitted
            </span>
          )}
        </div>

        <div className="prose max-w-none text-gray-700 mb-8">
          <p>{assignment.description}</p>
          {assignment.instructions && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
              <h4 className="text-blue-900 font-bold mb-2">Instructions</h4>
              <p className="text-blue-800 text-sm">{assignment.instructions}</p>
            </div>
          )}
        </div>

        {submission ? (
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Your Submission</h3>
            <div className="bg-white p-4 rounded border border-gray-200 mb-4">
              <p className="text-gray-700 whitespace-pre-wrap">{submission.submission_text}</p>
              {submission.submitted_files && submission.submitted_files.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-500 mb-2">Attached Files:</p>
                  <div className="flex items-center gap-2 text-blue-600 text-sm">
                    <FileText className="w-4 h-4" />
                    <span>File uploaded</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Submitted on {new Date(submission.created).toLocaleString()}</span>
              {submission.grade ? (
                <span className="font-bold text-green-600">Grade: {submission.grade}/{assignment.max_score || 100}</span>
              ) : (
                <span className="text-amber-600 font-medium">Pending Grade</span>
              )}
            </div>
            {submission.feedback && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-900 mb-1">Instructor Feedback:</p>
                <p className="text-gray-700">{submission.feedback}</p>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Response
              </label>
              <textarea
                required
                rows={6}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your answer here..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attach File (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">
                    {file ? file.name : "Click to upload a file"}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">Max 5MB</span>
                </label>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={submitting}
              className="w-full bg-[#1e3a8a] hover:bg-[#3b82f6] py-6 text-lg"
            >
              {submitting ? 'Submitting...' : 'Submit Assignment'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AssignmentLesson;