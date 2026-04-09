import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .magnetic')) {
        setIsHovering(true);
        setCursorType('pointer');
      } else {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Cursor Ring/Glow */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-12 h-12 border border-accent/50 rounded-full pointer-events-none z-[9998]",
          isHovering && "w-20 h-20 bg-accent/10 border-accent"
        )}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      />

      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none z-[9997]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};
