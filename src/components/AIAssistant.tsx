import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Sparkles, MessageCircle, Zap, Shield, Wrench } from 'lucide-react';

const suggestedQuestions = [
  'What buildings need maintenance?',
  'Show energy consumption report',
  'Report a facility issue',
  'Check sensor status',
];

const chatHistory = [
  { role: 'assistant', content: 'Hello! I\'m your AI Maintenance Assistant. How can I help you manage your campus today?' },
  { role: 'user', content: 'What buildings need maintenance?' },
  { role: 'assistant', content: 'Based on sensor data, Building C (Engineering Block) has 3 pending maintenance alerts. The HVAC system needs filter replacement, and there\'s a potential water leak detected in Room 205. Would you like me to create a maintenance ticket?' },
];

export default function AIAssistant() {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
      setMessage('');
    }
  };

  return (
    <section id="assistant" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-card text-secondary text-sm font-medium mb-4"
          >
            AI Powered
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Your <span className="gradient-text">AI Assistant</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get instant answers about campus maintenance, facility status, and resource management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl overflow-hidden neon-border">
              <div className="glass-card border-b border-white/10 px-6 py-4 flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#050B1A]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Maintenance Assistant</h3>
                  <p className="text-xs text-green-400">Online and ready to help</p>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                    <Shield className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4 max-h-80 overflow-y-auto">
                <AnimatePresence>
                  {chatHistory.map((chat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`flex gap-3 ${chat.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          chat.role === 'user'
                            ? 'bg-secondary/20'
                            : 'bg-gradient-to-br from-primary to-secondary'
                        }`}
                      >
                        {chat.role === 'user' ? (
                          <MessageCircle className="w-4 h-4 text-secondary" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`glass-card rounded-2xl px-4 py-3 max-w-md ${
                          chat.role === 'user' ? 'bg-primary/20' : ''
                        }`}
                      >
                        <p className="text-sm text-gray-300 leading-relaxed">{chat.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="glass-card rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                            className="w-2 h-2 rounded-full bg-secondary"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="border-t border-white/10 p-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about campus maintenance..."
                    className="flex-1 bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    className="px-4 py-3 rounded-xl btn-primary"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Suggested Questions</h4>
            {suggestedQuestions.map((question, index) => (
              <motion.button
                key={question}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="w-full glass-card rounded-xl px-4 py-3 text-left flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Sparkles className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {question}
                </span>
              </motion.button>
            ))}

            <div className="glass-card rounded-xl p-5 mt-6">
              <h4 className="font-semibold text-white mb-3">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="glass-card rounded-lg p-3 flex items-center gap-2 hover:bg-primary/10 transition-colors">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-gray-300">Report Issue</span>
                </button>
                <button className="glass-card rounded-lg p-3 flex items-center gap-2 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-300">Maintenance</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
