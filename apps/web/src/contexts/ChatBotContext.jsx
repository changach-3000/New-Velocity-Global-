import React, { createContext, useState, useContext, useEffect } from 'react';

const ChatBotContext = createContext();

export const useChatBotContext = () => useContext(ChatBotContext);

export const ChatBotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      text: "Hi there! 👋 I'm the Velocity Global Leasing assistant.",
      sender: 'bot',
      timestamp: new Date().toISOString()
    },
    {
      id: 'welcome-2',
      text: "How can I help you with your equipment financing needs today?",
      sender: 'bot',
      timestamp: new Date().toISOString()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCapturedLead, setHasCapturedLead] = useState(false);

  const toggleChat = () => setIsOpen(prev => !prev);

  const addMessage = (message) => {
    setMessages(prev => [...prev, {
      ...message,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString()
    }]);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-1',
        text: "Hi there! 👋 I'm the Velocity Global Leasing assistant.",
        sender: 'bot',
        timestamp: new Date().toISOString()
      },
      {
        id: 'welcome-2',
        text: "How can I help you with your equipment financing needs today?",
        sender: 'bot',
        timestamp: new Date().toISOString()
      }
    ]);
    setHasCapturedLead(false);
  };

  return (
    <ChatBotContext.Provider value={{
      isOpen,
      toggleChat,
      messages,
      addMessage,
      isLoading,
      setIsLoading,
      hasCapturedLead,
      setHasCapturedLead,
      resetChat
    }}>
      {children}
    </ChatBotContext.Provider>
  );
};