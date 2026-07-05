import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { coupleConfig } from '../coupleConfig';
import { MogaraGarland } from './DecorativeElements';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={coupleConfig.photo1}
          alt="Rahul and Shilpa"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-wine/60 via-royal-maroon/30 to-deep-wine/80" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-kesari-gold/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content — Pushed DOWN so faces are visible */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-auto pt-40">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-marathi text-kesari-gold text-lg md:text-xl tracking-wider mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            एक सुंदर वर्ष…
          </p>
          <p className="font-marathi text-warm-ivory/90 text-base md:text-lg mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            असंख्य आठवणी…
          </p>
          <p className="font-marathi text-kesari-gold/90 text-base md:text-lg mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            आणि आयुष्यभराची सोबत…
          </p>
        </motion.div>

        {/* Mogara Garland */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MogaraGarland className="mx-auto mb-3" />
        </motion.div>

        {/* Names — ENGLISH PRIMARY (clearly visible) + Marathi secondary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-3"
        >
          <h1 className="font-english text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-warm-ivory drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            {coupleConfig.groomNameEnglish}
          </h1>
          <div className="flex items-center justify-center gap-3 my-1">
            <div className="h-px w-12 md:w-20 bg-kesari-gold/80" />
            <span className="text-kesari-gold text-2xl md:text-3xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">♡</span>
            <div className="h-px w-12 md:w-20 bg-kesari-gold/80" />
          </div>
          <h1 className="font-english text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-warm-ivory drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            {coupleConfig.brideNameEnglish}
          </h1>
          <p className="font-marathi text-kesari-gold/90 text-lg md:text-xl mt-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] tracking-widest">
            {coupleConfig.groomNameMarathi} ♡ {coupleConfig.brideNameMarathi}
          </p>
        </motion.div>

        {/* Second Garland */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <MogaraGarland className="mx-auto mb-3 rotate-180" />
        </motion.div>

        {/* Anniversary Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-1"
        >
          <p className="font-marathi text-warm-ivory text-lg md:text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            प्रथम विवाह वर्षगाठ
          </p>
          <p className="font-marathi text-kesari-gold text-2xl md:text-3xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {coupleConfig.anniversaryDateMarathi}
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-kesari-gold to-transparent mx-auto my-2" />
          <p className="font-marathi text-warm-ivory/80 text-base md:text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            हातात हात…
          </p>
          <p className="font-marathi text-warm-ivory/80 text-base md:text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            आणि सोबत आयुष्यभराची.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator — BIG & VISIBLE */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-warm-ivory/60 text-[10px] tracking-widest uppercase font-english">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-kesari-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
