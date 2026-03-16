/**
 * Calculates the similarity between two strings using the Sørensen–Dice coefficient
 * based on bigrams. This is effective for matching short text phrases.
 */
export const calculateSimilarity = (str1, str2) => {
  if (!str1 || !str2) return 0;
  
  const s1 = str1.toLowerCase().replace(/[^\w\s]/g, '');
  const s2 = str2.toLowerCase().replace(/[^\w\s]/g, '');

  if (s1 === s2) return 1;
  if (s1.length < 2 || s2.length < 2) return 0;

  const bigrams1 = new Map();
  for (let i = 0; i < s1.length - 1; i++) {
    const bigram = s1.substring(i, i + 2);
    const count = bigrams1.has(bigram) ? bigrams1.get(bigram) + 1 : 1;
    bigrams1.set(bigram, count);
  }

  let intersection = 0;
  for (let i = 0; i < s2.length - 1; i++) {
    const bigram = s2.substring(i, i + 2);
    if (bigrams1.has(bigram) && bigrams1.get(bigram) > 0) {
      bigrams1.set(bigram, bigrams1.get(bigram) - 1);
      intersection++;
    }
  }

  return (2.0 * intersection) / (s1.length - 1 + s2.length - 1);
};

/**
 * Simple keyword overlap score
 */
export const calculateKeywordScore = (query, keywords) => {
  if (!query || !keywords || keywords.length === 0) return 0;
  
  const normalizedQuery = query.toLowerCase();
  const queryTokens = normalizedQuery.split(/\s+/);
  
  let matches = 0;
  keywords.forEach(keyword => {
    if (normalizedQuery.includes(keyword.toLowerCase())) {
      matches++;
    }
  });
  
  return matches / Math.max(keywords.length, queryTokens.length * 0.5);
};