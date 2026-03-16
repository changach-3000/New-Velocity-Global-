import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SyllabusDocument from './SyllabusPDF';
import pb from '@/lib/pocketbaseClient';

const DownloadSyllabusButton = ({ course, lessons: providedLessons, className = "" }) => {
  const [lessons, setLessons] = useState(providedLessons || []);
  const [loading, setLoading] = useState(!providedLessons);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchLessons = async () => {
      if (providedLessons) {
        setLessons(providedLessons);
        setLoading(false);
        setReady(true);
        return;
      }

      if (!course || course.title !== 'Introduction to Leasing') {
        setLoading(false);
        setReady(true);
        return;
      }

      try {
        setLoading(true);
        const records = await pb.collection('lessons').getFullList({
          filter: `course_id = "${course.id}"`,
          sort: 'order',
          $autoCancel: false
        });
        setLessons(records);
      } catch (err) {
        console.error("Error fetching lessons for syllabus:", err);
      } finally {
        setLoading(false);
        setReady(true);
      }
    };

    fetchLessons();
  }, [course?.id, providedLessons]);

  // Only show for "Introduction to Leasing"
  if (!course || course.title !== 'Introduction to Leasing') {
    return null;
  }

  if (loading || !ready) {
    return (
      <Button variant="outline" disabled className={`gap-2 ${className}`}>
        <Loader2 className="w-4 h-4 animate-spin" />
        Preparing Syllabus...
      </Button>
    );
  }

  return (
    <PDFDownloadLink
      document={<SyllabusDocument course={course} lessons={lessons} />}
      fileName="Introduction-to-Leasing-Syllabus.pdf"
      className="text-decoration-none"
    >
      {({ blob, url, loading: pdfLoading, error }) => (
        <Button 
          variant="outline" 
          disabled={pdfLoading}
          className={`gap-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-blue-50 ${className}`}
        >
          {pdfLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          {pdfLoading ? 'Generating...' : 'Download Syllabus'}
        </Button>
      )}
    </PDFDownloadLink>
  );
};

export default DownloadSyllabusButton;