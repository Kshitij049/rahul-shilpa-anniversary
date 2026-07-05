import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { coupleConfig } from '../coupleConfig';
import { MogaraGarland } from './DecorativeElements';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={coupleConfig.photo1}
          alt="Rahul and Shilpa"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-wine/40 via-transparent to-deep-wine/90" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-deep-wine via-deep-wine/80 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-kesari-gold/50"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${10 + Math.random() * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* ALL Content pinned to BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* English Names — BIG & BOLD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="font-english text-5xl md:text-7xl font-bold text-warm-ivory drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] tracking-wide">
              {coupleConfig.groomNameEnglish}
            </h1>
            <div className="flex items-center justify-center gap-4 my-2">
              <div className="h-px w-16 bg-kesari-gold/70" />
              <span className="text-kesari-gold text-3xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">♡</span>
              <div className="h-px w-16 bg-kesari-gold/70" />
            </div>
            <h1 className="font-english text-5xl md:text-7xl font-bold text-warm-ivory drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] tracking-wide">
              {coupleConfig.brideNameEnglish}
            </h1>
          </motion.div>

          {/* Marathi names — small, below */}
          <motion.p
            className="font-marathi text-kesari-gold/80 text-lg md:text-xl mt-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {coupleConfig.groomNameMarathi} ♡ {coupleConfig.brideNameMarathi}
          </motion.p>

          {/* Garland */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="my-3"
          >
            <MogaraGarland className="mx-auto" />
          </motion.div>

          {/* Date & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <p className="font-marathi text-warm-ivory text-base md:text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] mb-1">
              प्रथम विवाह वर्षगाठ
            </p>
            <p className="font-marathi text-kesari-gold text-2xl md:text-3xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {coupleConfig.anniversaryDateMarathi}
            </p>
          </motion.div>

          {/* Scroll Indicator — MOVED UP */}
          <motion.div
            className="mt-8 flex flex-col items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <span className="text-warm-ivory/50 text-[10px] tracking-widest uppercase font-english">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-kesari-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
