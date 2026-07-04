import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { DecorativeDivider, RangoliPattern } from './DecorativeElements';

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeElapsed(): TimeElapsed {
  const marriageDate = new Date(coupleConfig.marriageDateISO);
  const now = new Date();
  const diff = now.getTime() - marriageDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export const TogetherCounter: React.FC = () => {
  const [time, setTime] = useState<TimeElapsed>(calculateTimeElapsed());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeElapsed());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const counters = [
    { value: time.days, label: 'दिवस' },
    { value: time.hours, label: 'तास' },
    { value: time.minutes, label: 'मिनिटे' },
    { value: time.seconds, label: 'सेकंद' },
  ];

  return (
    <section className="relative py-20 px-6 bg-warm-cream overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <RangoliPattern />
      </div>
      <div className="relative max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-marathi text-royal-maroon text-2xl md:text-3xl font-semibold mb-2">
            आपल्या सोबतीचा हिशोब
          </h2>
          <p className="font-marathi text-deep-charcoal/70 text-base md:text-lg mb-8">
            वेळ पुढे सरकत राहिली…<br />
            आणि आठवणी वाढत राहिल्या…
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {counters.map((counter, index) => (
              <motion.div
                key={counter.label}
                className="relative bg-warm-ivory rounded-xl p-4 shadow-lg border border-antique-gold/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-antique-gold/40 rounded-tl" />
                <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-antique-gold/40 rounded-tr" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-antique-gold/40 rounded-bl" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-antique-gold/40 rounded-br" />
                <motion.p
                  className="font-english text-royal-maroon text-3xl md:text-4xl font-bold"
                  key={counter.value}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {counter.value.toString().padStart(2, '0')}
                </motion.p>
                <p className="font-marathi text-deep-charcoal/70 text-sm mt-1">{counter.label}</p>
              </motion.div>
            ))}
          </div>
          <DecorativeDivider />
          <p className="font-marathi text-royal-maroon/80 text-lg md:text-xl leading-relaxed">
            प्रत्येक दिवस खास…<br />
            कारण सोबत तू आहेस.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
