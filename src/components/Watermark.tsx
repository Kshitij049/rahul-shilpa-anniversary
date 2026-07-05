import React from 'react';
import { motion } from 'framer-motion';

export const Watermark: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.6, type: "spring" }}
    >
      <div className="group relative">
        {/* Visible K badge with gold border */}
        <div className="w-10 h-10 rounded-full bg-deep-wine/80 backdrop-blur-md border-2 border-kesari-gold/50 flex items-center justify-center shadow-xl hover:bg-deep-wine hover:border-kesari-gold transition-all duration-300 cursor-help">
          <span className="text-kesari-gold text-sm font-bold font-english">K</span>
        </div>
        {/* Tooltip on hover */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-deep-wine/95 backdrop-blur-sm rounded-lg text-warm-ivory text-xs font-medium tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-kesari-gold/30 shadow-2xl">
          Crafted with love by Kshitij Kamble
        </div>
      </div>
    </motion.div>
  );
};
