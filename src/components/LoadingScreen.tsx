import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ['CRIAR', 'AMPLIFICAR', 'CONVERTER'];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    const duration = 2500;

    const updateCounter = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(Math.floor((progress / duration) * 100), 100);
      
      setCount(percentage);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setTimeout(onComplete, 300);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[var(--bg)] flex flex-col justify-between overflow-hidden">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-8 left-8 flex items-center gap-2"
      >
        <img src="/logo-new.png" alt="Amplifica Marketing" className="h-8 w-auto object-contain light:invert" />
        <span className="font-display font-bold text-base tracking-widest text-[var(--text)]">
          AMPLIFICA
        </span>
      </motion.div>

      <div className="flex-1 flex items-center justify-center relative">
        <div className="h-24 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient"
            >
              {WORDS[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 md:right-12">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold text-[var(--text)] tabular-nums">
          {String(count).padStart(3, '0')}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-zinc-400/20">
        <div
          className="h-full origin-left accent-gradient shadow-[0_0_12px_rgba(255,107,0,0.4)]"
          style={{ transform: `scaleX(${count / 100})` }}
        />
      </div>
    </div>
  );
}
