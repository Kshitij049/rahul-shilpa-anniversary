import React from 'react';
import { motion } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { DecorativeDivider, MogaraGarland, GoldOrnamentalFrame } from './DecorativeElements';

export const BlessingSection: React.FC = () => {
  return (
    <section className="relative py-20 px-6 bg-warm-cream">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-marathi text-royal-maroon text-2xl md:text-3xl font-semibold mb-8">
            या सुंदर प्रवासासाठी…
          </h2>
          <GoldOrnamentalFrame className="bg-warm-ivory/50 rounded-xl mb-8">
            <div className="font-marathi text-deep-charcoal text-base md:text-lg leading-relaxed space-y-4">
              <p>
                प्रेम, विश्वास, समजूतदारपणा<br />
                आणि एकमेकांची साथ…
              </p>
              <p>
                याच सुंदर नात्याने<br />
                आयुष्याची प्रत्येक वाट<br />
                आनंदाने फुलत राहो.
              </p>
            </div>
          </GoldOrnamentalFrame>
          <DecorativeDivider />
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <MogaraGarland className="mb-6" />
            <p className="font-marathi text-royal-maroon text-xl md:text-2xl font-semibold leading-relaxed">
              {coupleConfig.groomNameMarathi} आणि {coupleConfig.brideNameMarathi} यांना
            </p>
            <p className="font-marathi text-deep-charcoal text-lg md:text-xl mt-3 leading-relaxed">
              सहजीवनाच्या पहिल्या वर्षगाठीच्या<br />
              मनःपूर्वक शुभेच्छा!
            </p>
            <MogaraGarland className="mt-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
