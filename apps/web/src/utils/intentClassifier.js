/**
 * Classifies user intent based on keywords and patterns.
 */
export const classifyIntent = (text) => {
  if (!text) return { type: 'general', confidence: 0 };
  
  const lowerText = text.toLowerCase();
  
  const intents = {
    // --- New Platform Intents ---
    platform_certificates: {
      keywords: ['certificate', 'certification', 'diploma', 'completion', 'certified', 'document'],
      weight: 0
    },
    platform_courses: {
      keywords: ['courses', 'catalog', 'available', 'list', 'topics', 'learn', 'subjects', 'curriculum'],
      weight: 0
    },
    platform_beginner: {
      keywords: ['beginner', 'start', 'intro', 'introduction', 'new', 'basic', '101', 'scratch'],
      weight: 0
    },
    platform_features: {
      keywords: ['features', 'platform', 'dashboard', 'tools', 'badges', 'tracking', 'progress', 'enroll', 'register', 'sign up', 'price', 'cost', 'fee'],
      weight: 0
    },
    // --- Existing Intents ---
    pricing: {
      keywords: ['price', 'cost', 'rate', 'interest', 'fee', 'payment', 'expensive', 'cheap', 'dollar', 'money', 'quote', 'afford'],
      weight: 0
    },
    technical: {
      keywords: ['error', 'bug', 'broken', 'fail', 'login', 'password', 'reset', 'account', 'access', 'website', 'slow', 'crash'],
      weight: 0
    },
    educational: {
      keywords: ['what is', 'how to', 'explain', 'definition', 'mean', 'understand', 'learn', 'guide', 'help me'],
      weight: 0
    },
    action: {
      keywords: ['apply', 'start', 'sign up', 'register', 'buy', 'lease', 'get', 'create', 'submit'],
      weight: 0
    },
    contact: {
      keywords: ['talk', 'speak', 'person', 'human', 'support', 'call', 'email', 'phone', 'contact', 'representative', 'agent'],
      weight: 0
    }
  };

  // Calculate weights
  Object.keys(intents).forEach(key => {
    intents[key].keywords.forEach(word => {
      if (lowerText.includes(word)) {
        intents[key].weight += 1;
      }
    });
  });

  // Find max weight
  let maxIntent = 'general';
  let maxWeight = 0;

  Object.keys(intents).forEach(key => {
    if (intents[key].weight > maxWeight) {
      maxWeight = intents[key].weight;
      maxIntent = key;
    }
  });

  // Determine confidence
  let confidence = 'low';
  if (maxWeight >= 2) confidence = 'high';
  else if (maxWeight === 1) confidence = 'medium';

  // Detect genuine interest (simple heuristic)
  const isGenuineInterest = (maxIntent === 'pricing' || maxIntent === 'action') && lowerText.length > 10;

  return {
    type: maxIntent,
    confidence,
    isGenuineInterest
  };
};