import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-none tracking-tighter">
                LET'S BUILD<br />
                <span className="text-accent">SOMETHING</span><br />
                GREAT.
              </h2>
              <p className="text-xl text-white/50 font-light mb-12 max-w-md">
                Have a project in mind? Or just want to say hi? 
                I'm always open to discussing new opportunities and creative ideas.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <Mail className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Email Me</p>
                    <p className="text-lg font-medium">pandeyabhishekmkp1423@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <Phone className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Call Me</p>
                    <p className="text-lg font-medium">+91 7379972119</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <MapPin className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Location</p>
                    <p className="text-lg font-medium">Lucknow, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-20 bg-accent flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                  <Send className="text-accent w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Message Sent!</h3>
                <p className="text-white/80">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-8 py-3 bg-white text-accent font-bold rounded-full hover:scale-105 transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-4">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-4">Your Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full py-5 bg-accent text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
