import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { jsPDF } from 'jspdf';

const CertificateDownload = ({ courseName, userName, score, date }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      try {
        // Create landscape PDF
        const doc = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });

        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();

        // Background color
        doc.setFillColor(248, 250, 252); // slate-50
        doc.rect(0, 0, width, height, 'F');

        // Outer Border
        doc.setDrawColor(30, 58, 138); // blue-900
        doc.setLineWidth(4);
        doc.rect(10, 10, width - 20, height - 20);

        // Inner Border
        doc.setDrawColor(59, 130, 246); // blue-500
        doc.setLineWidth(1);
        doc.rect(15, 15, width - 30, height - 30);

        // Header / Logo Area
        doc.setTextColor(30, 58, 138);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('VELOCITY GLOBAL LEASING', width / 2, 40, { align: 'center' });

        doc.setFontSize(12);
        doc.setTextColor(100, 116, 139); // slate-500
        doc.setFont('helvetica', 'normal');
        doc.text('Mastering the Art of Equipment Leasing', width / 2, 48, { align: 'center' });

        // Certificate Title
        doc.setTextColor(15, 23, 42); // slate-900
        doc.setFontSize(40);
        doc.setFont('times', 'italic');
        doc.text('Certificate of Completion', width / 2, 80, { align: 'center' });

        // Awarded to text
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.text('This is to certify that', width / 2, 100, { align: 'center' });

        // Student Name
        doc.setFontSize(32);
        doc.setTextColor(37, 99, 235); // blue-600
        doc.setFont('helvetica', 'bold');
        doc.text(userName || 'Student', width / 2, 115, { align: 'center' });

        // Course text
        doc.setFontSize(14);
        doc.setTextColor(15, 23, 42);
        doc.setFont('helvetica', 'normal');
        doc.text('has successfully completed the course', width / 2, 130, { align: 'center' });

        // Course Name
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.text(courseName || 'Equipment Leasing Course', width / 2, 145, { align: 'center' });

        // Score & Date
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105); // slate-600
        
        const formattedDate = date ? new Date(date).toLocaleDateString('en-US', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        }) : new Date().toLocaleDateString('en-US', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        });

        doc.text(`Achieved Score: ${score}%`, width / 2, 160, { align: 'center' });
        doc.text(`Date of Completion: ${formattedDate}`, width / 2, 168, { align: 'center' });

        // Signatures area
        doc.setDrawColor(100, 116, 139);
        doc.setLineWidth(0.5);
        
        // Left signature
        doc.line(40, 185, 100, 185);
        doc.setFontSize(10);
        doc.text('Course Instructor', 70, 192, { align: 'center' });

        // Right signature
        doc.line(width - 100, 185, width - 40, 185);
        doc.text('Director of Education', width - 70, 192, { align: 'center' });

        // Save the PDF
        doc.save(`Velocity_Certificate_${courseName.replace(/\s+/g, '_')}.pdf`);
      } catch (error) {
        console.error("Error generating PDF:", error);
      } finally {
        setIsGenerating(false);
      }
    }, 500); // Small delay to show loading state
  };

  return (
    <Button 
      onClick={generatePDF} 
      disabled={isGenerating}
      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg gap-2"
    >
      {isGenerating ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {isGenerating ? 'Generating PDF...' : 'Download Certificate'}
    </Button>
  );
};

export default CertificateDownload;