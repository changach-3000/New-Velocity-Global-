import { useState, useCallback } from 'react';

export const useConversationContext = () => {
  const [history, setHistory] = useState([]);
  const [context, setContext] = useState({
    topics: new Set(),
    lastIntent: null,
    userName: null,
    userEmail: null,
    leadScore: 0
  });

  const addToHistory = useCallback((message) => {
    setHistory(prev => [...prev, {
      ...message,
      timestamp: new Date().toISOString()
    }]);
  }, []);

  const updateContext = useCallback((newContext) => {
    setContext(prev => ({
      ...prev,
      ...newContext,
      topics: newContext.topic ? new Set(prev.topics).add(newContext.topic) : prev.topics
    }));
  }, []);

  const resetContext = useCallback(() => {
    setHistory([]);
    setContext({
      topics: new Set(),
      lastIntent: null,
      userName: null,
      userEmail: null,
      leadScore: 0
    });
  }, []);

  return {
    history,
    context,
    addToHistory,
    updateContext,
    resetContext
  };
};