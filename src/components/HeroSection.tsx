import React from 'react';
import { motion } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { FloralCorner } from './DecorativeElements';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={coupleConfig.photo1}
          alt="Rahul and Shilpa"
          className="w-full h-full object-cover"
          style={{ objectPosition: coupleConfig.photo1Position }}
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.className += ' bg-maroon-gradient';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-wine/90 via-deep-wine/40 to-deep-wine/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,201,109,0.08)_0%,transparent_70%)]" />
      </div>
      <div className="absolute inset-4 border border-antique-gold/20 rounded-lg pointer-events-none" />
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />
      <div className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-marathi text-soft-haldi text-lg sm:text-lg sm:text-xl md:text-2xl mb-4 tracking-wide">
            पहिलं वर्ष…<br />
            <span className="text-warm-ivory">एक सुंदर आठवण</span>
          </p>
          <div className="my-8">
            <h1 className="font-english text-warm-ivory text-4xl sm:text-5xl md:text-7xl font-bold leading-none">
              {coupleConfig.groomNameEnglish}
            </h1>
            <p className="font-english text-kesari-gold text-2xl sm:text-2xl sm:text-3xl md:text-4xl my-2">&</p>
            <h1 className="font-english text-warm-ivory text-4xl sm:text-5xl md:text-7xl font-bold leading-none">
              {coupleConfig.brideNameEnglish}
            </h1>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto my-6" />
          <p className="font-marathi text-warm-cream/90 text-base sm:text-base sm:text-lg md:text-xl leading-relaxed mb-4">
            सहजीवनाच्या सुंदर प्रवासाला<br />
            आज एक वर्ष पूर्ण…
          </p>
          <p className="font-english text-soft-haldi/80 text-base sm:text-base sm:text-lg md:text-xl italic tracking-wide">
            Happy First Wedding Anniversary
          </p>
        </motion.div>
      </div>
      {/* Scroll Hint - Bottom of first slide */}
      <motion.div 
        className="absolute bottom-12 left-0 right-0 z-30 flex flex-col items-center pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="relative flex flex-col items-center">
          <motion.div 
            className="absolute inset-0 w-14 h-14 -top-1 -left-1 rounded-full bg-antique-gold/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <svg className="w-10 h-10 text-antique-gold drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
        <motion.p 
          className="font-marathi text-warm-cream/90 text-sm mt-3 bg-deep-wine/40 backdrop-blur-sm px-3 py-1 rounded-full border border-antique-gold/30"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          खाली स्क्रोल करा
        </motion.p>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-ivory to-transparent" />
    </section>
  );
};
