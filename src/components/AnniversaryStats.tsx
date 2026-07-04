import React from 'react';
import { motion } from 'framer-motion';
import { DecorativeDivider, RangoliPattern } from './DecorativeElements';

export const AnniversaryStats: React.FC = () => {
  const stats = [
    { number: '३६५', label: 'दिवसांची सोबत' },
    { number: '१२', label: 'महिन्यांच्या आठवणी' },
    { number: '५२', label: 'आठवड्यांचा प्रवास' },
    { number: '∞', label: 'सोबत राहण्याची कारणं' },
  ];

  return (
    <section className="relative py-20 px-6 bg-maroon-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <RangoliPattern />
      </div>
      <div className="relative max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-marathi text-warm-ivory text-2xl md:text-3xl font-semibold mb-10">
            ३६५ दिवस… आणि असंख्य आठवणी
          </h2>
          <div className="grid grid-cols-2 gap-6 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative p-6 rounded-xl bg-deep-wine/40 border border-antique-gold/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <p className="font-marathi text-gold-gradient text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </p>
                <p className="font-marathi text-warm-cream/80 text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
          <DecorativeDivider />
          <p className="font-marathi text-warm-cream/90 text-lg md:text-xl leading-relaxed">
            एक वर्ष पूर्ण…<br />
            आयुष्यभराची साथ अजून बाकी आहे.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
