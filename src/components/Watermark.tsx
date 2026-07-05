import React from 'react';
import { motion } from 'framer-motion';

export const Watermark: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-[9999]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      {/* iOS Glassmorphism Badge */}
      <div className="group relative">
        <div className="px-3 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/15 transition-all duration-300">
          <p className="text-[9px] font-english tracking-wider text-white/70 uppercase leading-tight text-center">
            created by
          </p>
          <p className="text-[11px] font-english font-semibold tracking-wide text-white/90 leading-tight text-center mt-0.5">
            Kshitij Kamble
          </p>
        </div>
      </div>
    </motion.div>
  );
};
