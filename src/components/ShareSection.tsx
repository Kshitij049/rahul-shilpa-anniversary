import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Check } from 'lucide-react';
import { coupleConfig } from '../coupleConfig';
import { MogaraGarland } from './DecorativeElements';

export const ShareSection: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${coupleConfig.coupleNameEnglish} — First Wedding Anniversary`,
      text: 'आठवणींचं एक वर्ष… सोबतीची आयुष्यभराची वाट… ♡',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      } catch (err) {
        console.log('Copy failed');
      }
    }
  };

  return (
    <section className="relative py-16 px-6 bg-warm-ivory">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MogaraGarland className="mb-6" />
          <h2 className="font-marathi text-royal-maroon text-xl md:text-2xl font-semibold mb-6">
            ही आठवण आपल्या माणसांसोबत शेअर करा
          </h2>
          <motion.button
            onClick={handleShare}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-royal-maroon to-deep-wine 
                       text-warm-ivory rounded-full font-marathi text-lg shadow-lg
                       active:scale-95 transition-transform touch-manipulation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-5 h-5" />
            <span>आपली गोष्ट शेअर करा ♡</span>
          </motion.button>
          <MogaraGarland className="mt-6" />
        </motion.div>
      </div>
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-deep-charcoal/90 text-warm-ivory 
                       px-6 py-3 rounded-full font-marathi text-sm flex items-center gap-2 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Check className="w-4 h-4 text-soft-haldi" />
            लिंक कॉपी झाली ♡
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
