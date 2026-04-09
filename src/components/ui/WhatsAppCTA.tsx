import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppCTA = () => {
  const phoneNumber = "+917379972119";
  const message = "Hi Abhishek, I'd like to discuss a project with you.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group"
    >
      <MessageCircle className="text-white w-8 h-8 group-hover:rotate-12 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-4 py-2 bg-white text-primary rounded-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Chat with me instantly
      </div>
    </motion.a>
  );
};
