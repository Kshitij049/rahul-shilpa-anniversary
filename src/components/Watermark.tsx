import React from 'react';
import { motion } from 'framer-motion';

export const Watermark: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div className="group relative">
        <div className="w-10 h-10 rounded-full bg-deep-wine/60 backdrop-blur-sm border border-antique-gold/20 flex items-center justify-center shadow-lg hover:bg-deep-wine/80 transition-all duration-300 cursor-help">
          <span className="text-kesari-gold text-xs font-bold">K</span>
        </div>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-deep-wine/90 backdrop-blur-sm rounded-lg text-warm-ivory/80 text-[10px] font-medium tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-antique-gold/20 shadow-lg">
          Crafted with love by Kshitij Kamble
        </div>
      </div>
    </motion.div>
  );
};
