import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { MogaraGarland } from './DecorativeElements';

export const SurpriseEnvelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-20 px-6 bg-maroon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(183,134,58,0.1)_0%,transparent_60%)]" />
      <div className="relative max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-marathi text-warm-ivory text-2xl md:text-3xl font-semibold mb-8">
            तुझ्यासाठी अजून काही शब्द…
          </h2>
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="envelope"
                className="relative inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="relative w-64 h-44 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon to-deep-wine rounded-lg shadow-2xl border border-antique-gold/30" />
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-deep-wine to-royal-maroon rounded-t-lg origin-top"
                       style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }} />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-wine to-royal-maroon rounded-b-lg"
                       style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-kesari-gold to-antique-gold shadow-lg flex items-center justify-center">
                    <span className="text-royal-maroon text-xl">♡</span>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(true)}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-antique-gold/20 to-kesari-gold/20 
                             border border-antique-gold/60 rounded-full font-marathi text-warm-ivory 
                             text-lg shadow-lg active:scale-95 transition-transform touch-manipulation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  हळूच उघडून पाहा ♡
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="card"
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <div className="relative bg-warm-ivory rounded-xl shadow-2xl p-6 md:p-8 max-w-sm mx-auto border-2 border-antique-gold/20">
                  <MogaraGarland className="mb-4" />
                  <div className="font-marathi text-deep-charcoal text-base md:text-lg leading-relaxed space-y-3">
                    <p className="text-royal-maroon font-semibold">
                      पहिल्या विवाह वर्षगाठीच्या मनःपासून शुभेच्छा.
                    </p>
                    <p>एक वर्ष पूर्ण झालं…</p>
                    <p>
                      पण {coupleConfig.groomNameMarathi} आणि {coupleConfig.brideNameMarathi} च्या या सुंदर गोष्टीची
                    </p>
                    <p className="text-royal-maroon font-semibold">
                      ही तर फक्त सुरुवात आहे.
                    </p>
                    <p>
                      आज,<br />
                      उद्या,<br />
                      आणि येणाऱ्या प्रत्येक दिवशी…
                    </p>
                    <p className="text-kesari-gold font-semibold text-lg">
                      ही सोबत अशीच राहो. ♡
                    </p>
                  </div>
                  <MogaraGarland className="mt-4" />
                </div>
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-kesari-gold/60"
                    style={{ left: `${20 + Math.random() * 60}%`, top: '0' }}
                    animate={{
                      y: [0, -100, -200],
                      x: [0, Math.random() * 40 - 20],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
