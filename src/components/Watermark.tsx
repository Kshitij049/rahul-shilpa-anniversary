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
        {/* Visible K badge — gold ring, dark bg */}
        <div className="w-12 h-12 rounded-full bg-royal-maroon border-2 border-kesari-gold flex items-center justify-center shadow-2xl">
          <span className="text-kesari-gold text-lg font-bold font-english">K</span>
        </div>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-royal-maroon rounded-lg text-warm-ivory text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-kesari-gold/40 shadow-xl">
          Crafted with love by Kshitij Kamble
        </div>
      </div>
    </motion.div>
  );
};
