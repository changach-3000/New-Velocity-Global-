import { faqs } from './faqKnowledgeBase.js';
import { calculateSimilarity, calculateKeywordScore } from './stringSimilarity.js';

/**
 * Finds the best matching FAQs for a user query using a hybrid approach
 * of keyword matching and string similarity on phrasings.
 */
export const findMatches = (userQuery) => {
  if (!userQuery) return [];

  const matches = faqs.map(faq => {
    // 1. Calculate similarity with main question
    const questionScore = calculateSimilarity(userQuery, faq.question);
    
    // 2. Calculate similarity with all phrasings (take best)
    let maxPhrasingScore = 0;
    faq.phrasings.forEach(phrase => {
      const score = calculateSimilarity(userQuery, phrase);
      if (score > maxPhrasingScore) maxPhrasingScore = score;
    });

    // 3. Calculate keyword overlap
    const keywordScore = calculateKeywordScore(userQuery, faq.keywords);

    // 4. Weighted final score
    // Phrasing match is most important, then question, then keywords
    const finalScore = (maxPhrasingScore * 0.5) + (questionScore * 0.3) + (keywordScore * 0.2);

    return {
      faq,
      score: finalScore,
      matchType: maxPhrasingScore > 0.7 ? 'exact' : (finalScore > 0.4 ? 'semantic' : 'keyword')
    };
  });

  // Filter out very low scores and sort by score descending
  return matches
    .filter(m => m.score > 0.25)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3); // Return top 3
};