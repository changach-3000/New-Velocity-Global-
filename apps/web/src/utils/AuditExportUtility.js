import { pdf } from '@react-pdf/renderer';
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// PDF Styles
const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 10, marginTop: 20 },
  text: { fontSize: 12, marginBottom: 5 },
  row: { flexDirection: 'row', marginBottom: 5 },
  col: { flex: 1 },
  header: { fontSize: 10, color: 'grey', marginBottom: 20 },
});

// PDF Document Component
const AuditPDFDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Generated: {new Date().toLocaleString()}</Text>
      <Text style={styles.title}>System Audit Report</Text>
      
      <Text style={styles.subtitle}>Summary</Text>
      <Text style={styles.text}>Total Courses: {data.summary?.totalCourses || 0}</Text>
      <Text style={styles.text}>Health Score: {data.healthScore || 0}%</Text>
      <Text style={styles.text}>Total Issues: {data.summary?.totalIssues || 0}</Text>

      <Text style={styles.subtitle}>Course Breakdown</Text>
      {data.courses?.map((course, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{course.name}</Text>
          <Text style={styles.text}>Lessons: {course.lessonCount}</Text>
          <Text style={styles.text}>Status: {course.isHealthy ? 'Healthy' : 'Needs Attention'}</Text>
          {course.missingComponents?.length > 0 && (
            <Text style={{ fontSize: 10, color: 'red' }}>
              Missing: {course.missingComponents.join(', ')}
            </Text>
          )}
        </View>
      ))}
    </Page>
  </Document>
);

export const generatePDF = async (auditData) => {
  const blob = await pdf(<AuditPDFDocument data={auditData} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `audit-report-${new Date().toISOString().split('T')[0]}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const generateCSV = (auditData) => {
  const headers = ['Course Name', 'ID', 'Lessons', 'Quizzes', 'Glossaries', 'Case Studies', 'Resources', 'Badges', 'Progress Tracking', 'Status'];
  const rows = auditData.courses.map(c => [
    `"${c.name}"`,
    c.id,
    c.lessonCount,
    c.quizCount,
    c.glossaryCount,
    c.caseStudyCount,
    c.resourceCount,
    c.hasBadges ? 'Yes' : 'No',
    c.hasProgressTracking ? 'Yes' : 'No',
    c.isHealthy ? 'Healthy' : 'Issues Found'
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(r => r.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `audit-data-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const generateJSON = (auditData) => {
  const jsonContent = JSON.stringify(auditData, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `audit-export-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};