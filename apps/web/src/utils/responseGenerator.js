import { faqs } from './faqKnowledgeBase.js';

/**
 * Generates a natural response based on the matched FAQ and context.
 */
export const generateResponse = (match, context = {}) => {
  const { faq, score } = match;
  const { userName } = context;

  // 1. Select base answer (detailed if high confidence, standard otherwise)
  let responseText = score > 0.6 ? faq.detailedAnswer : faq.answer;

  // 2. Add personalization if available
  const greeting = userName ? `${userName}, ` : '';
  
  // 3. Add transitional phrase based on context if needed
  let prefix = '';
  
  // Custom prefixes for platform-specific intents
  if (faq.intent === 'platform_certificates') {
    prefix = "Great question! ";
  } else if (faq.intent === 'platform_beginner') {
    prefix = "Welcome! ";
  } else if (faq.intent === 'platform_courses') {
    prefix = "Here's what we offer: ";
  } else if (faq.intent === 'platform_features') {
    prefix = "Good to know: ";
  } else {
    // Standard prefixes for other intents
    if (score > 0.8) {
      prefix = "Here is exactly what you need to know: ";
    } else if (score > 0.5) {
      prefix = "I think this might help: ";
    } else {
      prefix = "This seems relevant to your question: ";
    }
  }

  // 4. Find related suggestions
  const relatedSuggestions = faq.relatedIds
    .map(id => faqs.find(f => f.id === id))
    .filter(Boolean)
    .map(f => ({ id: f.id, text: f.question }));

  return {
    text: responseText,
    prefix: greeting + prefix,
    suggestions: relatedSuggestions,
    confidence: score,
    faqId: faq.id
  };
};

/**
 * Generates a fallback response when no good match is found.
 * Checks for course-specific keywords to provide a helpful redirection.
 */
export const generateFallbackResponse = (userQuery = '') => {
  const lowerQuery = userQuery.toLowerCase();
  
  // Check for specific course content keywords
  const courseContentKeywords = [
    'lesson', 'module', 'chapter', 'quiz', 'assignment', 'homework', 
    'grade', 'score', 'syllabus', 'content', 'video', 'transcript',
    'requirement', 'prerequisite'
  ];
  
  const isCourseSpecific = courseContentKeywords.some(keyword => lowerQuery.includes(keyword));

  if (isCourseSpecific) {
    return {
      text: "I don't have specific details about lesson content or individual course requirements right here. Please check the specific course page or syllabus for that detailed information.",
      prefix: "I can't help with that specific detail. ",
      suggestions: [
        { id: 'available-courses', text: "View Course Catalog" },
        { id: 'platform-features', text: "Platform Features" }
      ],
      confidence: 0
    };
  }

  return {
    text: "I'm not entirely sure I understand that specific question. Could you rephrase it slightly? I'm best at answering questions about our platform features, courses, certificates, and leasing basics.",
    prefix: "Hmm, ",
    suggestions: [
      { id: 'available-courses', text: "What courses are available?" },
      { id: 'platform-certificates', text: "Do you offer certificates?" },
      { id: 'beginner-courses', text: "Beginner courses" }
    ],
    confidence: 0
  };
};