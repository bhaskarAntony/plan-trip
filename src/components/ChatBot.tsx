import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import { Send, Bot, User, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize the API with error handling
let genAI: GoogleGenerativeAI;
try {
  genAI = new GoogleGenerativeAI('AIzaSyAEuTaYSBz3qHNjBT0-s4omOZBTs2OKS5s');
} catch (error) {
  console.error('Error initializing Gemini AI:', error);
}

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: "Hi! I'm your SVHS Reunion Assistant. Ask me anything about the reunion event! 😊"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !genAI) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }
      );
      
      const prompt = `You are a helpful assistant for the SVHS 2009 Batch Reunion event.
        Event details:
        - Date: May 18, 2025 (Sunday)
        - Time: 9:00 AM - 5:30 PM
        - Venue: GK Hill View Resort
        - Contribution options: Starting from ₹500 (Flexible)
        
        Available activities:
        - Indoor games (Table Tennis, Carrom, Chess, etc.)
        - Outdoor games (Cricket, Volleyball, Swimming)
        - Special events (Rain Dance, Musical Chair)
        - Kids area with dedicated activities
        
        Package includes:
        - Welcome drink
        - Lunch buffet
        - Evening hi-tea
        - Access to all activities

        -location:https://maps.app.goo.gl/5P9qN71zrLufTEKdA => give un href
        
        Please provide friendly, concise responses focused on the reunion details.
        
        Question: ${userMessage}`;

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'bot', content: text }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: "I apologize, but I'm having trouble connecting right now. Please try asking your question again in a moment." 
      }]);
    }

    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            style={{bottom:"0px", zIndex:"1020"}}
            className="fixed  right-0 w-full md:w-100 h-[600px] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl z-50 md:bottom-24 md:right-8 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <Bot className="h-6 w-6 text-primary-600 mr-2" />
                <h3 className="font-bold text-primary-700">Reunion Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary-500 hover:text-secondary-700"
              >
                <X size={24} />
              </button>
            </div>

            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' ? 'bg-primary-100' : 'bg-accent-100'
                    }`}>
                      {message.role === 'user' ? (
                        <User size={20} className="text-primary-600" />
                      ) : (
                        <Bot size={20} className="text-accent-600" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-secondary-800'
                      }`}
                    >
                      <ReactMarkdown 
                        className="prose prose-sm max-w-none"
                        components={{
                          p: ({node, ...props}) => <p className="m-0" {...props} />,
                          a: ({node, ...props}) => <a className="text-primary-600 hover:underline" {...props} />
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200" style={{marginTop:"50px"}}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about the reunion..."
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary-600 text-white rounded-lg px-4 py-2 hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;