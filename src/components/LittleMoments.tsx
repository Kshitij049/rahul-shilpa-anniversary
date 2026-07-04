import React from 'react';
import { motion } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { DecorativeDivider, MogaraGarland } from './DecorativeElements';

export const LittleMoments: React.FC = () => {
  const moments = [
    'काही हसू मनात साठलं…',
    'काही रुसवे क्षणात विरले…',
    'काही स्वप्नं एकत्र पाहिली…',
    'काही वाटा हातात हात घेऊन चाललो…',
  ];

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
            या एका वर्षात…
          </h2>
          <div className="space-y-4 mb-8">
            {moments.map((moment, index) => (
              <motion.p
                key={index}
                className="font-marathi text-deep-charcoal text-lg md:text-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {moment}
              </motion.p>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="font-marathi text-deep-charcoal/70 text-lg mb-4">आणि नकळत…</p>
            <MogaraGarland className="my-6" />
            <p className="font-marathi text-royal-maroon text-2xl md:text-3xl font-semibold leading-relaxed">
              {coupleConfig.groomNameMarathi} आणि {coupleConfig.brideNameMarathi}…
            </p>
            <p className="font-marathi text-kesari-gold text-2xl md:text-3xl font-bold mt-2">
              ‘आपण’ झाले.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
