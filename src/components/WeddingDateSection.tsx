import React from 'react';
import { motion } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { MogaraGarland, DecorativeDivider, GoldOrnamentalFrame } from './DecorativeElements';

export const WeddingDateSection: React.FC = () => {
  return (
    <section className="relative py-20 px-6 bg-warm-ivory">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MogaraGarland className="mb-6" />
          <h2 className="font-marathi text-royal-maroon text-2xl md:text-3xl font-semibold mb-6">
            तो खास दिवस
          </h2>
          <GoldOrnamentalFrame>
            <motion.p
              className="font-marathi text-kesari-gold text-4xl md:text-6xl font-bold my-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {coupleConfig.marriageDateMarathi}
            </motion.p>
          </GoldOrnamentalFrame>
          <DecorativeDivider />
          <p className="font-marathi text-deep-charcoal/80 text-lg md:text-xl leading-relaxed">
            ज्या दिवशी दोन वाटा<br />
            एका सुंदर प्रवासात बदलल्या…
          </p>
          <MogaraGarland className="mt-6" />
        </motion.div>
      </div>
    </section>
  );
};
