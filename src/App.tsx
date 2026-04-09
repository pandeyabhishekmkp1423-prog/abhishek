import React from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Stats } from './components/sections/Stats';
import { Contact } from './components/sections/Contact';
import { Preloader } from './components/ui/Preloader';
import { WhatsAppCTA } from './components/ui/WhatsAppCTA';

export default function App() {
  return (
    <main className="bg-primary selection:bg-accent/30 selection:text-white">
      <Preloader />
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <Hero />
        
        {/* About Section (Simplified for now) */}
        <section id="about" className="py-32 bg-primary">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden glass p-4">
                  <img 
                    src="https://picsum.photos/seed/abhishek/800/800" 
                    alt="Abhishek Pandey"
                    className="w-full h-full object-cover rounded-[2.5rem]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-neon/10 rounded-full blur-3xl" />
              </div>
              
              <div>
                <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-6 block">The Architect</span>
                <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">
                  Crafting Digital<br />
                  <span className="text-white/40">Excellence.</span>
                </h2>
                <p className="text-xl text-white/60 font-light leading-relaxed mb-8">
                  With over 4 years of experience in full-stack development, I specialize in 
                  building complex web systems that are not only visually stunning but also 
                  highly performant and scalable.
                </p>
                <p className="text-lg text-white/40 font-light leading-relaxed mb-12">
                  My approach combines technical rigor with creative intuition, ensuring 
                  every line of code serves a purpose and every pixel contributes to the 
                  overall narrative.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-accent font-bold mb-2">Frontend</h4>
                    <p className="text-sm text-white/50">React, Next.js, TypeScript, Tailwind, Three.js, GSAP</p>
                  </div>
                  <div>
                    <h4 className="text-accent font-bold mb-2">Backend</h4>
                    <p className="text-sm text-white/50">Node.js, Express, PostgreSQL, MongoDB, Redis, AWS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Stats />
        <Contact />

        {/* Footer */}
        <footer className="py-20 bg-primary border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div>
                <a href="#" className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-display font-black text-xl">
                    A
                  </div>
                  <span className="font-display font-bold text-xl tracking-tighter">
                    Abhishek<span className="text-accent">.</span>
                  </span>
                </a>
                <p className="text-white/30 max-w-xs text-sm">
                  Building the future of the web, one pixel at a time. 
                  Based in Lucknow, India.
                </p>
              </div>

              <div className="flex gap-12">
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/20">Navigation</span>
                  <a href="#" className="text-sm hover:text-accent transition-colors">Home</a>
                  <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
                  <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/20">Social</span>
                  <a href="#" className="text-sm hover:text-accent transition-colors">GitHub</a>
                  <a href="#" className="text-sm hover:text-accent transition-colors">LinkedIn</a>
                  <a href="#" className="text-sm hover:text-accent transition-colors">Twitter</a>
                </div>
              </div>
            </div>
            
            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/20">© 2026 Abhishek Pandey. All rights reserved.</p>
              <p className="text-xs text-white/20 flex items-center gap-2">
                Built with <span className="text-accent">❤</span> using React & Three.js
              </p>
            </div>
          </div>
        </footer>
      </SmoothScroll>
      <WhatsAppCTA />
    </main>
  );
}
