import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
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
            Get in Touch
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our Campus Digital Twin solution? We're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 neon-border"
          >
            <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl btn-primary text-white font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl overflow-hidden h-64">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <p className="text-gray-400">Interactive Map</p>
                  <p className="text-sm text-gray-500 mt-1">Coming Soon</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-white">Address</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Smart Campus Research Center<br />
                  University Road, Tech City<br />
                  Innovation District, 560001
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium text-white">Phone</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  +1 (555) 123-4567<br />
                  Mon - Fri, 9am - 6pm
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-white">Email</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  contact@campustwin.edu<br />
                  support@campustwin.edu
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="font-medium text-white">Support Hours</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  24/7 AI Assistant<br />
                  Human: Mon-Fri 9-5
                </p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                </div>
                <span className="font-medium text-white">Quick Response</span>
              </div>
              <p className="text-sm text-gray-400">
                Our AI-powered support system ensures responses within 2 minutes for all inquiries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
