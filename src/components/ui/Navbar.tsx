import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Magnetic } from './Magnetic';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className={cn(
        "container mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
        isScrolled ? "glass shadow-2xl shadow-black/50" : "bg-transparent"
      )}>
        {/* Logo */}
        <Magnetic strength={0.2}>
          <a href="#" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-display font-black text-xl group-hover:rotate-[360deg] transition-transform duration-700">
              A
            </div>
            <span className="font-display font-bold text-xl tracking-tighter hidden sm:block">
              Abhishek<span className="text-accent">.</span>
            </span>
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={0.1}>
              <a 
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-accent transition-colors relative group px-2 py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Socials & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-white/50">
            <Magnetic strength={0.3}>
              <a href="#" className="hover:text-accent transition-colors p-2"><Github size={18} /></a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a href="#" className="hover:text-accent transition-colors p-2"><Linkedin size={18} /></a>
            </Magnetic>
          </div>
          <Magnetic strength={0.2}>
            <button className="px-6 py-2 bg-white text-primary font-bold rounded-full text-sm hover:bg-accent hover:text-white transition-all active:scale-95">
              Hire Me
            </button>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 py-4 md:hidden"
          >
            <div className="glass rounded-3xl p-8 flex flex-col gap-6 items-center text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-display font-bold hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="w-full border-white/10" />
              <div className="flex gap-8 text-white/50">
                <Github size={24} />
                <Linkedin size={24} />
                <Twitter size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
