import React from 'react';
import { motion } from 'framer-motion';

export const Watermark: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-[9999]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
    >
      <div className="group relative">
        {/* Creative Diamond/Stamp Badge */}
        <div className="relative w-12 h-12">
          {/* Rotated square background */}
          <div className="absolute inset-0 bg-royal-maroon border-2 border-kesari-gold rotate-45 shadow-2xl" />
          {/* K text centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-kesari-gold text-lg font-bold font-english">K</span>
          </div>
          {/* Tiny corner dots */}
          <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-kesari-gold" />
          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-kesari-gold" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-kesari-gold" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-kesari-gold" />
        </div>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-royal-maroon rounded-lg text-warm-ivory text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-kesari-gold/40 shadow-xl">
          Crafted with love by Kshitij Kamble
        </div>
      </div>
    </motion.div>
  );
};
