import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { label: 'प्रारंभ', position: 0 },
  { label: 'आठवणी', position: 25 },
  { label: 'सोबत', position: 50 },
  { label: 'शुभेच्छा', position: 75 },
];

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-1 bg-warm-ivory/20 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-antique-gold via-kesari-gold to-antique-gold"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="hidden sm:flex justify-between px-4 mt-1">
        {milestones.map((milestone) => (
          <div
            key={milestone.label}
            className={`font-marathi text-xs transition-colors duration-300 ${
              progress >= milestone.position ? 'text-kesari-gold' : 'text-transparent'
            }`}
          >
            {milestone.label}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
