import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

const stats = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 10, suffix: "+" },
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Lines of Code", value: 100, suffix: "K+" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const displayValue = useTransform(spring, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="text-6xl md:text-8xl font-display font-black tracking-tighter">
      <motion.span>{displayValue}</motion.span>
      <span className="text-accent">{suffix}</span>
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
        TRUSTED BY MANY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-sm font-mono uppercase tracking-widest text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
