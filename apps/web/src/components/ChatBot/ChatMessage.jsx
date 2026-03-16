import React from 'react';
import { cn } from '@/lib/utils';
import { Bot, User, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm.jsx';
import ClarifyingQuestion from './ClarifyingQuestion.jsx';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const ChatMessage = ({ message, onSuggestionClick }) => {
  const isBot = message.sender === 'bot';
  const isLeadPrompt = message.type === 'lead-prompt';
  const isClarification = message.type === 'clarification';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex w-full mb-6",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div className={cn(
        "flex max-w-[90%]",
        isBot ? "flex-row" : "flex-row-reverse"
      )}>
        {/* Avatar */}
        <div className={cn(
          "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mt-1 shadow-md",
          isBot ? "bg-gradient-to-br from-blue-600 to-blue-700 mr-3" : "bg-slate-600 ml-3"
        )}>
          {isBot ? <Bot className="h-5 w-5 text-white" /> : <User className="h-5 w-5 text-white" />}
        </div>

        {/* Message Content */}
        <div className="flex flex-col">
          {/* Text Bubble */}
          {message.text && (
            <div className={cn(
              "p-3.5 rounded-2xl text-sm shadow-md leading-relaxed",
              isBot 
                ? "bg-white text-slate-800 rounded-tl-none border border-slate-100" 
                : "bg-blue-600 text-white rounded-tr-none"
            )}>
              {/* Prefix for context awareness */}
              {message.prefix && (
                <span className="font-semibold text-blue-600 block mb-1">{message.prefix}</span>
              )}
              
              {/* Main Text with line breaks */}
              <div className="whitespace-pre-wrap">{message.text}</div>
            </div>
          )}
          
          {/* Lead Capture Prompt or Form */}
          {isLeadPrompt && (
            <div className="mt-2">
              <LeadCaptureForm mode="prompt" onDismiss={() => {}} />
            </div>
          )}

          {/* Clarifying Questions */}
          {isClarification && message.options && (
            <ClarifyingQuestion 
              options={message.options} 
              onSelect={onSuggestionClick} 
            />
          )}

          {/* Related Suggestions Chips */}
          {isBot && message.suggestions && message.suggestions.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {message.suggestions.map((suggestion) => (
                <Badge 
                  key={suggestion.id}
                  variant="secondary"
                  className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors py-1 px-2 text-xs font-normal bg-slate-100 text-slate-600 border border-slate-200"
                  onClick={() => onSuggestionClick(suggestion.text)}
                >
                  <Sparkles className="w-3 h-3 mr-1 text-blue-400 inline" />
                  {suggestion.text}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Timestamp & Feedback (Bot only) */}
          <div className={cn(
            "flex items-center mt-1.5 gap-2",
            isBot ? "justify-start ml-1" : "justify-end mr-1"
          )}>
            <span className="text-[10px] text-slate-400">
              {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            
            {isBot && !isLeadPrompt && !isClarification && (
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-0.5 hover:text-blue-500 text-slate-300 transition-colors">
                  <ThumbsUp className="w-3 h-3" />
                </button>
                <button className="p-0.5 hover:text-red-500 text-slate-300 transition-colors">
                  <ThumbsDown className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;