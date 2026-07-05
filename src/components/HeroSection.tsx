import React from 'react';
import { motion } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { MogaraGarland } from './DecorativeElements';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={coupleConfig.photo1}
          alt="Rahul and Shilpa"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-wine/70 via-royal-maroon/50 to-deep-wine/80" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

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

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-marathi text-kesari-gold text-lg md:text-xl tracking-wider mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            एक सुंदर वर्ष…
          </p>
          <p className="font-marathi text-warm-ivory/90 text-base md:text-lg mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            असंख्य आठवणी…
          </p>
          <p className="font-marathi text-kesari-gold/90 text-base md:text-lg mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            आणि आयुष्यभराची सोबत…
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MogaraGarland className="mx-auto mb-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-4"
        >
          <h1 className="font-english text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide text-warm-ivory drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            {coupleConfig.groomNameEnglish}
          </h1>
          <div className="flex items-center justify-center gap-3 my-1">
            <div className="h-px w-12 md:w-20 bg-kesari-gold/80" />
            <span className="text-kesari-gold text-2xl md:text-4xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">♡</span>
            <div className="h-px w-12 md:w-20 bg-kesari-gold/80" />
          </div>
          <h1 className="font-english text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide text-warm-ivory drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            {coupleConfig.brideNameEnglish}
          </h1>
          <p className="font-marathi text-kesari-gold/90 text-xl md:text-2xl mt-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] tracking-widest">
            {coupleConfig.groomNameMarathi} ♡ {coupleConfig.brideNameMarathi}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <MogaraGarland className="mx-auto mb-4 rotate-180" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-2"
        >
          <p className="font-marathi text-warm-ivory text-xl md:text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            प्रथम विवाह वर्षगाठ
          </p>
          <p className="font-marathi text-kesari-gold text-3xl md:text-4xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {coupleConfig.anniversaryDateMarathi}
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-kesari-gold to-transparent mx-auto my-3" />
          <p className="font-marathi text-warm-ivory/80 text-lg md:text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            हातात हात…
          </p>
          <p className="font-marathi text-warm-ivory/80 text-lg md:text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            आणि सोबत आयुष्यभराची.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-warm-ivory/40 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-kesari-gold"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

