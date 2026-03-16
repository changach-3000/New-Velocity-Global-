import React from 'react';
import { ChatBotProvider as ContextProvider } from '@/contexts/ChatBotContext.jsx';
import ChatBot from './ChatBot.jsx';

const ChatBotProvider = ({ children }) => {
  return (
    <ContextProvider>
      {children}
      <ChatBot />
    </ContextProvider>
  );
};

export default ChatBotProvider;