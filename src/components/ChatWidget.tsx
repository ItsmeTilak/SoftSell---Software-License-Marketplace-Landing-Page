import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComment, FaTimes } from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hi there! How can I help you with SoftSell today?' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { sender: 'user', text: inputValue }]);
    setInputValue('');
    
    // Simulate bot response after 1 second
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! Our team will get back to you shortly.",
        "That's a great question about SoftSell. Let me help you with that.",
        "I understand. Could you provide more details so we can assist you better?",
        "SoftSell makes it easy to sell your unused software licenses. Would you like to know more?",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { sender: 'bot', text: randomResponse }]);
    }, 1000);
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages are added
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white dark:bg-secondary-800 rounded-lg shadow-xl w-80 mb-4"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-primary-600 dark:bg-primary-700 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-medium">SoftSell Support</h3>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-secondary-200 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <div 
              id="chat-messages"
              className="p-4 h-80 overflow-y-auto"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 ${message.sender === 'user' ? 'text-right' : ''}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary-100 dark:bg-primary-900 text-secondary-800 dark:text-white'
                        : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-secondary-200 dark:border-secondary-700">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 py-2 px-3 rounded-l-lg border border-secondary-300 dark:border-secondary-600 dark:bg-secondary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-r-lg transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaComment size={24} />
      </motion.button>
    </div>
  );
};

export default ChatWidget;