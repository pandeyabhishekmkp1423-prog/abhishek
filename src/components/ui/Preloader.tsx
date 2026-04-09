import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center"
        >
          <div className="container max-w-md px-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-display font-black text-2xl">
                A
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">
                Abhishek<span className="text-accent">.</span>
              </span>
            </motion.div>

            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex justify-between mt-4 font-mono text-[10px] uppercase tracking-widest text-white/40">
              <span>Initializing Experience</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
