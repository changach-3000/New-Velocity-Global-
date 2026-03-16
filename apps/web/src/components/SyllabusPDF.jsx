import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts if needed, otherwise use standard fonts
// Font.register({ family: 'Roboto', src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf' });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#1e3a8a',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 5,
  },
  text: {
    fontSize: 11,
    lineHeight: 1.5,
    color: '#374151',
    marginBottom: 5,
  },
  infoGrid: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f3f4f6',
    padding: 15,
    borderRadius: 5,
  },
  infoItem: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 10,
    color: '#6b7280',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 12,
    color: '#111827',
    fontWeight: 'bold',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bullet: {
    width: 10,
    fontSize: 11,
    color: '#1e3a8a',
  },
  bulletText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 1.5,
    color: '#374151',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#f9fafb',
  },
  tableCol1: {
    width: '15%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#e5e7eb',
  },
  tableCol2: {
    width: '85%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#e5e7eb',
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#374151',
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
    color: '#4b5563',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 9,
    color: '#9ca3af',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 10,
  },
});

const SyllabusDocument = ({ course, lessons = [] }) => {
  const learningOutcomes = course.learning_outcomes
    ? course.learning_outcomes.split('\n').filter(item => item.trim())
    : [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.subtitle}>Course Syllabus & Curriculum</Text>
        </View>

        {/* Info Grid */}
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Duration</Text>
            <Text style={styles.infoValue}>{course.duration_hours || 4.5} Hours</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Level</Text>
            <Text style={styles.infoValue}>Beginner</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Instructor</Text>
            <Text style={styles.infoValue}>{course.instructor_name}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Certification</Text>
            <Text style={styles.infoValue}>Included</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Description</Text>
          <Text style={styles.text}>{course.description}</Text>
        </View>

        {/* Learning Objectives */}
        {learningOutcomes.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Learning Objectives</Text>
            {learningOutcomes.map((outcome, index) => (
              <View key={index} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{outcome.replace(/^[•-]\s*/, '')}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Course Schedule */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Schedule</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCellHeader}>Lesson</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCellHeader}>Topic</Text>
              </View>
            </View>
            {lessons.length > 0 ? (
              lessons.map((lesson, index) => (
                <View key={lesson.id} style={styles.tableRow}>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>{index + 1}</Text>
                  </View>
                  <View style={styles.tableCol2}>
                    <Text style={styles.tableCell}>{lesson.title}</Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.tableRow}>
                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>-</Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell}>Detailed schedule available in course view.</Text>
                </View>
              </View>
            )}
          </View>
        </View>

        {/* Requirements & Resources */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements & Resources</Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>Completion Requirements: </Text>
            Complete all video lessons and pass the final quiz with a score of 80% or higher to receive your certification.
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>Resources Provided: </Text>
            Downloadable PDF guides, leasing agreement templates, and checklist documents are provided within the course modules.
          </Text>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact & Support</Text>
          <Text style={styles.text}>
            For technical support or course-related questions, please contact our support team at:
          </Text>
          <Text style={[styles.text, { color: '#1e3a8a' }]}>support@leasingacademy.com</Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          © {new Date().getFullYear()} Leasing Academy. All rights reserved. | Introduction to Leasing Syllabus
        </Text>
      </Page>
    </Document>
  );
};

export default SyllabusDocument;