import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { FloralCorner, ParticleLayer, ToranLine, MogaraGarland } from './DecorativeElements';

interface IntroWelcomeProps {
  onStart: () => void;
  isLoading: boolean;
}

export const IntroWelcome: React.FC<IntroWelcomeProps> = ({ onStart, isLoading }) => {
  const [showLoader, setShowLoader] = useState(true);
  
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowLoader(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="fixed inset-0 z-50 bg-maroon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-royal-maroon/50 via-deep-wine/80 to-deep-wine" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(183,134,58,0.15)_0%,transparent_60%)]" />
      <ParticleLayer count={20} />
      
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />
      
      <div className="absolute inset-3 border border-antique-gold/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-5 border border-antique-gold/10 rounded-lg pointer-events-none" />
      
      <div className="absolute top-6 left-0 right-0">
        <ToranLine />
      </div>
      
      <AnimatePresence mode="wait">
        {showLoader ? (
          <motion.div
            key="loader"
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-12 h-12 border-2 border-antique-gold/30 border-t-antique-gold rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <p className="mt-6 font-marathi text-warm-cream/80 text-lg">
              आठवणी सजत आहेत… ♡
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="font-marathi text-soft-haldi/90 text-sm md:text-base tracking-widest mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              एक खास आठवण…
            </motion.p>
            
            <motion.h1
              className="font-marathi text-warm-ivory text-2xl md:text-4xl lg:text-5xl leading-relaxed mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="block">आपल्या सहजीवनाचं</span>
              <span className="block text-gold-gradient mt-1">पहिलं सुंदर वर्ष</span>
            </motion.h1>
            
            <motion.div
              className="my-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <MogaraGarland className="mb-4" />
              <p className="font-marathi text-3xl md:text-5xl text-soft-haldi font-semibold tracking-wide">
                {coupleConfig.coupleNameMarathi}
              </p>
              <MogaraGarland className="mt-4" />
            </motion.div>
            
            <motion.p
              className="font-marathi text-warm-cream/80 text-lg md:text-xl mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              प्रथम विवाह वर्षगाठ
            </motion.p>
            
            <motion.p
              className="font-marathi text-kesari-gold text-xl md:text-2xl font-semibold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {coupleConfig.anniversaryDateMarathi}
            </motion.p>
            
            <motion.div
              className="w-24 h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            />
            
            <motion.button
              onClick={onStart}
              className="relative px-8 py-4 bg-gradient-to-r from-antique-gold/20 to-kesari-gold/20 
                         border border-antique-gold/60 rounded-full font-marathi text-warm-ivory 
                         text-lg md:text-xl shadow-lg shadow-royal-maroon/50
                         active:scale-95 transition-transform touch-manipulation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">आठवणींचा प्रवास सुरू करा ♡</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-antique-gold/10 to-kesari-gold/10 blur-md" />
            </motion.button>
            
            <motion.p
              className="mt-4 font-marathi text-warm-cream/50 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
            >
              संगीतासह अनुभवण्यासाठी स्पर्श करा
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
