import { useState, useCallback } from 'react';

export const useSmartLeadCapture = () => {
  const [shouldShowPrompt, setShouldShowPrompt] = useState(false);
  const [hasShownForm, setHasShownForm] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);

  const checkLeadCaptureTiming = useCallback((intent, isGenuineInterest) => {
    if (leadCaptured || hasShownForm) return false;

    // Increment interaction count
    setInteractionCount(prev => prev + 1);

    // Logic for triggering capture
    // 1. Genuine interest in pricing or action
    if (isGenuineInterest && (intent === 'pricing' || intent === 'action')) {
      setShouldShowPrompt(true);
      return true;
    }

    // 2. Sustained engagement (e.g., 4+ interactions)
    if (interactionCount > 4) {
      setShouldShowPrompt(true);
      return true;
    }

    return false;
  }, [leadCaptured, hasShownForm, interactionCount]);

  const dismissPrompt = useCallback(() => {
    setShouldShowPrompt(false);
    setHasShownForm(true); // Don't show again this session
  }, []);

  const acceptPrompt = useCallback(() => {
    setShouldShowPrompt(false);
    // Form will be shown by parent component based on this flow
  }, []);

  const markLeadCaptured = useCallback(() => {
    setLeadCaptured(true);
    setShouldShowPrompt(false);
  }, []);

  return {
    shouldShowPrompt,
    hasShownForm,
    leadCaptured,
    checkLeadCaptureTiming,
    dismissPrompt,
    acceptPrompt,
    markLeadCaptured
  };
};