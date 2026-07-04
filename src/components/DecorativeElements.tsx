import React from 'react';
import { motion } from 'framer-motion';

export const FloralCorner: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({ position, className = '' }) => {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-x-[-1] scale-y-[-1]',
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-24 h-24 md:w-32 md:h-32 pointer-events-none ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
        <path d="M0 0 Q30 5 50 30 Q70 5 100 0" stroke="#B8873A" strokeWidth="1.5" fill="none" />
        <path d="M0 0 Q5 30 30 50 Q5 70 0 100" stroke="#B8873A" strokeWidth="1.5" fill="none" />
        <circle cx="15" cy="15" r="3" fill="#D79A2B" opacity="0.4" />
        <circle cx="25" cy="8" r="2" fill="#F2C96D" opacity="0.5" />
        <circle cx="8" cy="25" r="2" fill="#F2C96D" opacity="0.5" />
        <path d="M20 5 Q25 15 35 20" stroke="#C9828C" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M5 20 Q15 25 20 35" stroke="#C9828C" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
};

export const DecorativeDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
    <div className="h-px w-12 bg-gradient-to-r from-transparent to-antique-gold" />
    <div className="flex gap-1">
      <div className="w-1.5 h-1.5 rounded-full bg-kesari-gold" />
      <div className="w-2 h-2 rounded-full bg-antique-gold" />
      <div className="w-1.5 h-1.5 rounded-full bg-kesari-gold" />
    </div>
    <div className="h-px w-12 bg-gradient-to-l from-transparent to-antique-gold" />
  </div>
);

export const ParticleLayer: React.FC<{ count?: number; className?: string }> = ({ count = 15, className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            backgroundColor: i % 3 === 0 ? '#D79A2B' : i % 3 === 1 ? '#F2C96D' : '#C9828C',
            opacity: Math.random() * 0.4 + 0.1,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 30 - 15, Math.random() * 60 - 30],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export const MogaraGarland: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex justify-center ${className}`}>
    <svg viewBox="0 0 200 30" className="w-full max-w-md h-8" fill="none">
      <path d="M0 15 Q25 5 50 15 Q75 25 100 15 Q125 5 150 15 Q175 25 200 15" stroke="#B8873A" strokeWidth="1" fill="none" opacity="0.6" />
      {Array.from({ length: 9 }).map((_, i) => (
        <g key={i}>
          <circle cx={20 + i * 22} cy={15 + Math.sin(i * 0.8) * 5} r="4" fill="#FFF8E7" stroke="#D79A2B" strokeWidth="0.5" />
          <circle cx={20 + i * 22} cy={15 + Math.sin(i * 0.8) * 5} r="2" fill="#F2C96D" opacity="0.6" />
        </g>
      ))}
    </svg>
  </div>
);

export const GoldOrnamentalFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative p-6 md:p-8 ${className}`}>
    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-antique-gold rounded-tl-lg" />
    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-antique-gold rounded-tr-lg" />
    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-antique-gold rounded-bl-lg" />
    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-antique-gold rounded-br-lg" />
    {children}
  </div>
);

export const RangoliPattern: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full opacity-10 ${className}`} fill="none">
    <circle cx="50" cy="50" r="45" stroke="#B8873A" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="35" stroke="#D79A2B" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="25" stroke="#B8873A" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="15" stroke="#D79A2B" strokeWidth="0.5" />
    {Array.from({ length: 8 }).map((_, i) => (
      <line key={i} x1="50" y1="5" x2="50" y2="95" stroke="#B8873A" strokeWidth="0.3" transform={`rotate(${i * 45} 50 50)`} />
    ))}
  </svg>
);

export const ToranLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg viewBox="0 0 400 20" className="w-full h-5" preserveAspectRatio="none">
      <path d="M0 10 Q20 0 40 10 Q60 20 80 10 Q100 0 120 10 Q140 20 160 10 Q180 0 200 10 Q220 20 240 10 Q260 0 280 10 Q300 20 320 10 Q340 0 360 10 Q380 20 400 10" 
            stroke="#B8873A" strokeWidth="1" fill="none" opacity="0.7" />
      {Array.from({ length: 11 }).map((_, i) => (
        <circle key={i} cx={i * 40} cy="10" r="3" fill="#D79A2B" opacity="0.5" />
      ))}
    </svg>
  </div>
);

export const MarigoldAccent: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex gap-2 justify-center ${className}`}>
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-br from-kesari-gold to-soft-haldi opacity-70" />
    ))}
  </div>
);
