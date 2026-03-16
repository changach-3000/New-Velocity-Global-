// import { useState, useCallback, useEffect } from 'react';
// import { useChatBotContext } from '@/contexts/ChatBotContext.jsx';
// import { useConversationContext } from '@/hooks/useConversationContext.js';
// import { useSmartLeadCapture } from '@/hooks/useSmartLeadCapture.js';
// import { findMatches } from '@/utils/semanticMatcher.js';
// import { classifyIntent } from '@/utils/intentClassifier.js';
// import { generateResponse, generateFallbackResponse } from '@/utils/responseGenerator.js';
// import pb from '@/lib/pocketbaseClient';

// export const useChatBot = () => {
//   const {
//     isOpen,
//     toggleChat,
//     messages,
//     addMessage,
//     isLoading,
//     setIsLoading,
//     resetChat: resetUI
//   } = useChatBotContext();

//   const { context, updateContext, resetContext } = useConversationContext();
//   const { 
//     checkLeadCaptureTiming, 
//     shouldShowPrompt, 
//     dismissPrompt, 
//     markLeadCaptured 
//   } = useSmartLeadCapture();

//   // Effect to handle lead prompt triggering
//   useEffect(() => {
//     if (shouldShowPrompt) {
//       // Check if the last message is already a prompt to avoid duplicates
//       const lastMsg = messages[messages.length - 1];
//       if (lastMsg?.type !== 'lead-prompt') {
//         addMessage({
//           text: null, // No text, just the component
//           sender: 'bot',
//           type: 'lead-prompt'
//         });
//       }
//     }
//   }, [shouldShowPrompt, messages, addMessage]);

//   const handleUserMessage = useCallback(async (text) => {
//     if (!text.trim()) return;

//     // 1. Add User Message
//     addMessage({ text, sender: 'user' });
//     setIsLoading(true);

//     // 2. Analyze Intent
//     const intentData = classifyIntent(text);
//     updateContext({ 
//       lastIntent: intentData.type,
//       topic: intentData.type 
//     });

//     // Simulate network delay for "thinking"
//     setTimeout(async () => {
//       try {
//         // 3. Semantic Matching
//         const matches = findMatches(text);
//         const bestMatch = matches[0];

//         // 4. Response Generation Logic
//         if (bestMatch && bestMatch.score > 0.65) {
//           // High Confidence Match
//           const response = generateResponse(bestMatch, context);
//           addMessage({ 
//             text: response.text, 
//             prefix: response.prefix,
//             suggestions: response.suggestions,
//             sender: 'bot' 
//           });

//           // Check for lead capture opportunity
//           checkLeadCaptureTiming(intentData.type, intentData.isGenuineInterest);

//         } else if (bestMatch && bestMatch.score > 0.4) {
//           // Medium Confidence - Clarification Needed
//           addMessage({
//             text: "I'm not 100% sure, but I found a few things that might help. Are you asking about:",
//             sender: 'bot',
//             type: 'clarification',
//             options: matches.slice(0, 3).map(m => ({ id: m.faq.id, text: m.faq.question }))
//           });

//         } else {
//           // Low Confidence - Fallback
//           const fallback = generateFallbackResponse();
//           addMessage({ 
//             text: fallback.text, 
//             prefix: fallback.prefix,
//             suggestions: fallback.suggestions,
//             sender: 'bot' 
//           });
//         }

//       } catch (error) {
//         console.error("ChatBot Error:", error);
//         addMessage({ text: "I'm having a bit of trouble connecting right now. Please try again later.", sender: 'bot' });
//       } finally {
//         setIsLoading(false);
//       }
//     }, 800);
//   }, [addMessage, setIsLoading, context, updateContext, checkLeadCaptureTiming]);

//   const saveLead = useCallback(async (leadData) => {
//     try {
//       const history = JSON.stringify(messages.map(m => ({
//         sender: m.sender,
//         text: m.text,
//         time: m.timestamp
//       })));

//       const data = {
//         name: leadData.name,
//         email: leadData.email,
//         phone: leadData.phone,
//         conversation_history: history
//       };

//       await pb.collection('leads').create(data);
//       markLeadCaptured();
//       return { success: true };
//     } catch (error) {
//       console.error("Error saving lead:", error);
//       return { success: false, error: error.message };
//     }
//   }, [messages, markLeadCaptured]);

//   const resetChat = useCallback(() => {
//     resetUI();
//     resetContext();
//   }, [resetUI, resetContext]);

//   return {
//     isOpen,
//     toggleChat,
//     messages,
//     isLoading,
//     handleUserMessage,
//     saveLead,
//     resetChat
//   };
// };

import { useState, useCallback, useEffect } from 'react';
import { useChatBotContext } from '@/contexts/ChatBotContext.jsx';
import { useConversationContext } from '@/hooks/useConversationContext.js';
import { useSmartLeadCapture } from '@/hooks/useSmartLeadCapture.js';
import pb from '@/lib/pocketbaseClient';

// ═══════════════════════════════════════════════════════════════════════
// FAQ KNOWLEDGE BASE - Your Platform's Information
// ═══════════════════════════════════════════════════════════════════════

const FAQ_DATABASE = [
  // COURSES
  {
    id: 'courses-1',
    question: "What courses do you offer?",
    keywords: ["courses", "classes", "available", "offer", "what courses", "list of courses", "course catalog"],
    answer: "We offer 15 comprehensive equipment leasing courses covering:\n\n• Mastering Creative Financing\n• Sales Strategies for Equipment Leasing\n• Accounting Standards (ASC 842, IFRS 16)\n• Negotiation Mastery\n• Risk Management & Credit Analysis\n• Portfolio Management\n• Legal & Compliance\n• And 8 more specialized courses!\n\nEach course includes video lessons, quizzes, and downloadable resources.",
    suggestions: ["How much do courses cost?", "Do I get a certificate?", "How long are the courses?"]
  },
  {
    id: 'courses-2',
    question: "How long are the courses?",
    keywords: ["duration", "how long", "time", "hours", "weeks", "course length"],
    answer: "Course lengths vary:\n\n• Most courses have 4-6 lessons\n• Each lesson takes 15-30 minutes\n• Complete at your own pace\n• Lifetime access to all materials\n\nYou can finish a course in a weekend or spread it over weeks - totally up to you!",
    suggestions: ["Can I access courses on mobile?", "What courses do you offer?"]
  },
  {
    id: 'courses-3',
    question: "Do I get a certificate?",
    keywords: ["certificate", "certification", "credential", "proof", "completion"],
    answer: "Yes! Upon completing a course (100% of lessons + passing quizzes), you'll receive:\n\n✓ Professional PDF certificate with your name\n✓ Course title and completion date\n✓ Your overall grade\n✓ Downloadable and shareable\n\nPerfect for your LinkedIn profile or resume!",
    suggestions: ["How do I enroll?", "What courses do you offer?"]
  },

  // PRICING
  {
    id: 'pricing-1',
    question: "How much does it cost?",
    keywords: ["price", "cost", "how much", "pricing", "fee", "payment", "expensive", "cheap"],
    answer: "Our pricing is simple and transparent:All courses have individual prices listed.\n\nWe accept M-Pesa, credit/debit cards, and mobile money. No hidden fees, no subscriptions.",
    suggestions: ["What payment methods?", "Is there a refund policy?", "How do I enroll?"]
  },
  {
    id: 'pricing-2',
    question: "What payment methods do you accept?",
    keywords: ["payment", "pay", "mpesa", "card", "visa", "mastercard", "mobile money", "how to pay"],
    answer: "We support multiple payment options:\n\n✓ M-Pesa (Safaricom)\n✓ Credit/Debit Cards (Visa, Mastercard)\n✓ Mobile Money\n✓ Bank Transfer\n\nPayments are processed securely through Paystack. You'll get instant access after payment!",
    suggestions: ["How much does it cost?", "How do I enroll?"]
  },
  {
    id: 'pricing-3',
    question: "Is there a refund policy?",
    keywords: ["refund", "money back", "return", "cancel", "guarantee", "satisfaction"],
    answer: "Yes, we have a 7-day money-back guarantee!\n\nIf you're not satisfied within 7 days of purchase, email us at support@velocitygloballeasing.com for a full refund. No questions asked.\n\nAfter 7 days, all sales are final.",
    suggestions: ["How much does it cost?", "How do I contact support?"]
  },

  // ENROLLMENT
  {
    id: 'enroll-1',
    question: "How do I enroll in a course?",
    keywords: ["enroll", "register", "sign up", "join", "start", "get started", "how to enroll"],
    answer: "Enrolling is easy! Just 3 steps:\n\n1. Browse courses and click 'Enroll Now'\n2. Create an account (or log in)\n3. Complete payment via M-Pesa or card\n\n✓ Instant access after payment\n✓ Start learning immediately\n✓ Lifetime access to your courses\n\nReady to start? Check out our course catalog!",
    suggestions: ["What courses do you offer?", "How much does it cost?", "What payment methods?"]
  },
  {
    id: 'enroll-2',
    question: "Do I need to create an account?",
    keywords: ["account", "create account", "sign up", "registration", "username", "login"],
    answer: "Yes, you'll need a free account to:\n\n• Enroll in courses\n• Track your progress\n• Access quizzes and certificates\n• Download course materials\n\nCreating an account takes just 30 seconds - all we need is your name and email!",
    suggestions: ["How do I enroll?", "I forgot my password"]
  },

  // TECHNICAL
  {
    id: 'tech-1',
    question: "Can I access courses on mobile?",
    keywords: ["mobile", "phone", "tablet", "ipad", "android", "ios", "app"],
    answer: "Absolutely! Our platform is fully mobile-responsive:\n\n✓ Works on any device (phone, tablet, laptop)\n✓ Watch videos on the go\n✓ Take quizzes anywhere\n✓ Download materials for offline viewing\n\nNo app needed - just use your mobile browser!",
    suggestions: ["How long are the courses?", "Can I download materials?"]
  },
  {
    id: 'tech-2',
    question: "Can I download course materials?",
    keywords: ["download", "offline", "save", "materials", "resources", "slides", "pdfs"],
    answer: "Yes! Most courses include downloadable resources:\n\n• PDF slides and notes\n• Excel worksheets\n• Case study templates\n• Checklists and guides\n\nYou can download and keep these forever, even if you complete the course.",
    suggestions: ["Can I access courses on mobile?", "Do I get a certificate?"]
  },
  {
    id: 'tech-3',
    question: "I forgot my password",
    keywords: ["forgot password", "reset password", "can't login", "password reset", "locked out"],
    answer: "No worries! Here's how to reset your password:\n\n1. Go to the login page\n2. Click 'Forgot Password?'\n3. Enter your email address\n4. Check your email for reset link\n5. Create a new password\n\nStill having trouble? Email us at support@velocitygloballeasing.com",
    suggestions: ["How do I contact support?", "Do I need to create an account?"]
  },
  {
    id: 'tech-4',
    question: "How do I track my progress?",
    keywords: ["progress", "track", "complete", "status", "dashboard", "how far"],
    answer: "Your progress is tracked automatically:\n\n• Dashboard shows % complete for each course\n• Checkmarks appear on completed lessons\n• Quiz scores are saved\n• Overall course grade is calculated\n\nJust log in and visit 'My Courses' to see your progress!",
    suggestions: ["Do I get a certificate?", "How long are the courses?"]
  },

  // SUPPORT
  {
    id: 'support-1',
    question: "How do I contact support?",
    keywords: ["contact", "support", "help", "email", "phone", "reach", "talk to someone"],
    answer: "We're here to help!\n\n📧 Email: support@velocitygloballeasing.com\n📱 Phone: +254 123 456 789\n💬 Live Chat: Right here!\n\nUsual response time: Within 24 hours (often faster!)",
    suggestions: ["I forgot my password", "Is there a refund policy?"]
  },

  // ABOUT
  {
    id: 'about-1',
    question: "What is equipment leasing?",
    keywords: ["what is leasing", "explain leasing", "leasing basics", "what is equipment leasing"],
    answer: "Equipment leasing is a way for businesses to use equipment without buying it outright.\n\nInstead of paying full price upfront, you make monthly payments to use the equipment. Think of it like renting, but with more flexibility and tax benefits!\n\nOur courses teach you how to structure deals, manage risks, and succeed in this industry.",
    suggestions: ["What courses do you offer?", "How do I enroll?"]
  },
  {
    id: 'about-2',
    question: "Who are these courses for?",
    keywords: ["who", "audience", "for me", "beginner", "professional", "right for me"],
    answer: "Our courses are perfect for:\n\n• Sales professionals in equipment leasing\n• Finance and accounting teams\n• Business owners considering leasing\n• Career changers entering the industry\n• Anyone interested in commercial finance\n\nNo prior experience needed - we start from the basics!",
    suggestions: ["What courses do you offer?", "How do I enroll?"]
  }
];

// ═══════════════════════════════════════════════════════════════════════
// SMART MATCHING LOGIC
// ═══════════════════════════════════════════════════════════════════════

/**
 * Finds matching FAQs based on user input
 * Uses keyword matching with fuzzy logic
 */
function findBestMatch(userInput) {
  const input = userInput.toLowerCase().trim();
  const words = input.split(/\s+/);
  
  const scores = FAQ_DATABASE.map(faq => {
    let score = 0;
    
    // Check if question matches closely
    if (faq.question.toLowerCase().includes(input)) {
      score += 100;
    }
    
    // Check keywords
    for (const keyword of faq.keywords) {
      if (input.includes(keyword)) {
        score += 50;
      }
      
      // Partial keyword match
      for (const word of words) {
        if (keyword.includes(word) && word.length > 3) {
          score += 20;
        }
      }
    }
    
    // Boost score for common question patterns
    if (input.startsWith('how') || input.startsWith('what') || input.startsWith('can') || input.startsWith('do')) {
      score += 10;
    }
    
    return { faq, score };
  });
  
  // Sort by score
  scores.sort((a, b) => b.score - a.score);
  
  return scores;
}

/**
 * Classifies user intent
 */
function classifyIntent(text) {
  const lower = text.toLowerCase();
  
  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
    return { type: 'pricing', isGenuineInterest: true };
  }
  if (lower.includes('enroll') || lower.includes('sign up') || lower.includes('start')) {
    return { type: 'enrollment', isGenuineInterest: true };
  }
  if (lower.includes('course') || lower.includes('class')) {
    return { type: 'courses', isGenuineInterest: true };
  }
  if (lower.includes('help') || lower.includes('support') || lower.includes('problem')) {
    return { type: 'support', isGenuineInterest: false };
  }
  
  return { type: 'general', isGenuineInterest: false };
}

// ═══════════════════════════════════════════════════════════════════════
// MAIN HOOK
// ═══════════════════════════════════════════════════════════════════════

export const useChatBot = () => {
  const {
    isOpen,
    toggleChat,
    messages,
    addMessage,
    isLoading,
    setIsLoading,
    resetChat: resetUI
  } = useChatBotContext();

  const { context, updateContext, resetContext } = useConversationContext();
  const { 
    checkLeadCaptureTiming, 
    shouldShowPrompt, 
    dismissPrompt, 
    markLeadCaptured 
  } = useSmartLeadCapture();

  // Effect to handle lead prompt triggering
  useEffect(() => {
    if (shouldShowPrompt) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg?.type !== 'lead-prompt') {
        addMessage({
          text: null,
          sender: 'bot',
          type: 'lead-prompt'
        });
      }
    }
  }, [shouldShowPrompt, messages, addMessage]);

  const handleUserMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    // Add user message
    addMessage({ text, sender: 'user' });
    setIsLoading(true);

    // Classify intent
    const intentData = classifyIntent(text);
    updateContext({ 
      lastIntent: intentData.type,
      topic: intentData.type 
    });

    // Simulate typing delay
    setTimeout(() => {
      try {
        // Find best matching FAQ
        const matches = findBestMatch(text);
        const bestMatch = matches[0];

        console.log('User input:', text);
        console.log('Best match score:', bestMatch.score);
        console.log('Best match FAQ:', bestMatch.faq.question);

        if (bestMatch.score >= 50) {
          // GOOD MATCH - Return the answer
          addMessage({ 
            text: bestMatch.faq.answer,
            suggestions: bestMatch.faq.suggestions,
            sender: 'bot' 
          });
          
          // Check for lead capture opportunity
          checkLeadCaptureTiming(intentData.type, intentData.isGenuineInterest);

        } else if (bestMatch.score >= 20 && matches.length >= 3) {
          // MEDIUM MATCH - Ask for clarification
          const topMatches = matches.slice(0, 3).filter(m => m.score > 0);
          
          addMessage({
            text: "I found a few topics that might help. Which one are you asking about?",
            sender: 'bot',
            type: 'clarification',
            options: topMatches.map(m => ({ 
              id: m.faq.id, 
              text: m.faq.question 
            }))
          });

        } else {
          // LOW MATCH - Helpful fallback
          const fallbackOptions = [
            "What courses do you offer?",
            "How much does it cost?",
            "How do I enroll?"
          ];
          
          addMessage({ 
            text: "I'm not quite sure about that. Here are some things I can help with:",
            suggestions: fallbackOptions.map((q, i) => ({ id: `fallback-${i}`, text: q })),
            sender: 'bot' 
          });
          
          addMessage({
            text: "Or feel free to rephrase your question! You can also email us at support@velocitygloballeasing.com for more help.",
            sender: 'bot'
          });
        }

      } catch (error) {
        console.error("ChatBot Error:", error);
        addMessage({ 
          text: "I'm having trouble right now. Please try again or email support@velocitygloballeasing.com", 
          sender: 'bot' 
        });
      } finally {
        setIsLoading(false);
      }
    }, 600);
  }, [addMessage, setIsLoading, context, updateContext, checkLeadCaptureTiming]);

  const saveLead = useCallback(async (leadData) => {
    try {
      const history = JSON.stringify(messages.map(m => ({
        sender: m.sender,
        text: m.text,
        time: m.timestamp
      })));

      const data = {
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        conversation_history: history
      };

      await pb.collection('leads').create(data);
      markLeadCaptured();
      return { success: true };
    } catch (error) {
      console.error("Error saving lead:", error);
      return { success: false, error: error.message };
    }
  }, [messages, markLeadCaptured]);

  const resetChat = useCallback(() => {
    resetUI();
    resetContext();
  }, [resetUI, resetContext]);

  return {
    isOpen,
    toggleChat,
    messages,
    isLoading,
    handleUserMessage,
    saveLead,
    resetChat
  };
};