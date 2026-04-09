import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "EcoSphere Dashboard",
    category: "SaaS / Analytics",
    image: "https://picsum.photos/seed/eco/1200/800",
    description: "A high-performance real-time monitoring system for sustainable energy grids.",
    tags: ["React", "Node.js", "D3.js", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Nexus E-Commerce",
    category: "E-Commerce / Retail",
    image: "https://picsum.photos/seed/nexus/1200/800",
    description: "A premium headless commerce platform with lightning-fast search and checkout.",
    tags: ["Next.js", "Shopify", "Tailwind", "Framer Motion"],
    link: "#",
    github: "#"
  },
  {
    title: "Vanguard Admin",
    category: "Enterprise / Tooling",
    image: "https://picsum.photos/seed/vanguard/1200/800",
    description: "Custom internal management system for large-scale logistics operations.",
    tags: ["TypeScript", "Express", "MongoDB", "Redis"],
    link: "#",
    github: "#"
  },
  {
    title: "Aura Social",
    category: "Social Media / Mobile",
    image: "https://picsum.photos/seed/aura/1200/800",
    description: "A privacy-focused social network with end-to-end encrypted messaging.",
    tags: ["React Native", "Firebase", "WebRTC"],
    link: "#",
    github: "#"
  }
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="projects" className="overflow-hidden bg-primary">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative">
          {/* Section Header */}
          <div className="h-screen w-screen flex flex-col justify-center px-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-8xl md:text-[12rem] font-display font-black leading-none tracking-tighter mb-8">
                SELECTED<br />
                <span className="text-accent">WORKS</span>
              </h2>
              <p className="max-w-xl text-xl text-white/50 font-light">
                A collection of premium digital products built with precision, 
                performance, and user experience at the core.
              </p>
            </motion.div>
          </div>

          {/* Project Panels */}
          {projects.map((project, index) => (
            <div key={index} className="h-screen w-screen flex items-center justify-center p-10 md:p-20">
              <div className="relative w-full h-full max-w-6xl group overflow-hidden rounded-3xl">
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row items-end justify-between gap-8">
                  <div className="max-w-2xl">
                    <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
                      {project.category}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-display font-bold mb-6">
                      {project.title}
                    </h3>
                    <p className="text-lg text-white/70 mb-8 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href={project.github} className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                      <Github size={24} />
                    </a>
                    <a href={project.link} className="w-14 h-14 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-all">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
