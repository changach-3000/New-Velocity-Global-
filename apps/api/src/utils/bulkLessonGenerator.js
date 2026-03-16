/**
 * Utility to generate realistic lesson content based on course titles.
 */

export const generateLessonTitles = (courseTitle) => {
  const baseTitle = courseTitle.replace(/Course|Masterclass|Fundamentals|Introduction to/gi, '').trim();
  return [
    `Introduction to ${baseTitle}`,
    `Core Concepts of ${baseTitle}`,
    `Advanced ${baseTitle} Strategies`,
    `Case Studies in ${baseTitle}`,
    `The Future of ${baseTitle}`
  ];
};

export const generateQuizQuestions = (lessonTitle, courseTitle) => {
  const questions = [];
  for (let i = 1; i <= 10; i++) {
    questions.push({
      question_text: `Question ${i}: What is a key takeaway from ${lessonTitle}?`,
      question_type: 'multiple_choice',
      options: JSON.stringify([
        `Understanding the basics of ${courseTitle}`,
        `Applying ${lessonTitle} in real scenarios`,
        `Ignoring the principles of ${courseTitle}`,
        `None of the above`
      ]),
      correct_answer: `Applying ${lessonTitle} in real scenarios`,
      explanation: `This is the correct answer because it aligns with the learning outcomes of ${lessonTitle}.`,
      order: i
    });
  }
  return questions;
};

export const generateGlossaryTerms = (lessonTitle, courseTitle) => {
  const terms = [];
  const definitions = [];
  
  for (let i = 1; i <= 10; i++) {
    terms.push(`${lessonTitle} Term ${i}`);
    definitions.push(`A specific concept related to ${lessonTitle} within the context of ${courseTitle}.`);
  }
  
  return {
    terms: JSON.stringify(terms),
    definitions: JSON.stringify(definitions),
    examples: `Example usage of terms in ${lessonTitle}.`
  };
};

export const generateCaseStudy = (lessonTitle, courseTitle) => {
  return {
    title: `Case Study: ${lessonTitle} in Practice`,
    scenario: `A fictional company, TechCorp, is facing challenges related to ${lessonTitle}. They need to implement strategies from ${courseTitle} to resolve the issue.`,
    requirements: `Analyze the situation and propose a solution using the frameworks discussed in ${lessonTitle}.`,
    analysis_framework: `SWOT Analysis and ${courseTitle} Principles`,
    expected_outcome: `A comprehensive plan to improve efficiency and compliance.`,
    difficulty_level: 'Intermediate'
  };
};

export const generateResources = (lessonTitle) => {
  return [
    {
      resource_name: `${lessonTitle} Cheat Sheet`,
      resource_type: 'guide',
      description: 'A quick reference guide for key concepts.',
      url: 'https://example.com/guide.pdf'
    },
    {
      resource_name: `${lessonTitle} Worksheet`,
      resource_type: 'worksheet',
      description: 'Practice exercises to reinforce learning.',
      url: 'https://example.com/worksheet.pdf'
    }
  ];
};