import React from 'react';
import { motion } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { DecorativeDivider, GoldOrnamentalFrame } from './DecorativeElements';

export const MarathiLoveLetter: React.FC = () => {
  return (
    <section className="relative py-20 px-6 bg-warm-ivory">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-marathi text-royal-maroon text-2xl md:text-3xl font-semibold">
            माझ्यासाठी खास…
          </h2>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="cream-paper rounded-xl shadow-xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E')]" />
            <div className="relative z-10">
              <p className="font-marathi text-royal-maroon text-lg md:text-xl font-semibold mb-6">
                माझ्या आयुष्याच्यासोबतीस…
              </p>
              <div className="font-marathi text-deep-charcoal text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  एक वर्षापूर्वी,<br />
                  <span className="text-royal-maroon font-semibold">{coupleConfig.marriageDateMarathi}</span> रोजी,<br />
                  आपण आयुष्याचा हा सुंदर प्रवास<br />
                  एकत्र सुरू केला.
                </p>
                <p>
                  या एका वर्षात जाणवलं,<br />
                  की प्रेम फक्त मोठ्या क्षणांत नसतं…
                </p>
                <p>
                  ते असतं सकाळच्या साध्या बोलण्यात,<br />
                  अचानक आलेल्या हसण्यात,<br />
                  छोट्याशा रुसण्यात,<br />
                  एकमेकांची काळजी घेण्यात,<br />
                  शांतपणे सोबत बसण्यात,<br />
                  आणि न बोलताही एकमेकांना समजून घेण्यात.
                </p>
                <p>
                  या पहिल्या वर्षाला<br />
                  इतकं सुंदर बनवल्याबद्दल धन्यवाद.
                </p>
                <p>
                  आयुष्याने पुन्हा एकदा<br />
                  निवड करण्याची संधी दिली,<br />
                  तरी प्रत्येक वेळी…
                </p>
                <p className="text-royal-maroon font-semibold text-lg md:text-xl">
                  मी तुलाच निवडेन.
                </p>
                <p>
                  आजही.<br />
                  उद्याही.<br />
                  आणि कायम.
                </p>
              </div>
              <DecorativeDivider className="my-6" />
              <div className="text-center">
                <p className="font-marathi text-deep-charcoal/80 text-base italic">
                  कायम तुझाच / तुझी,
                </p>
                <p className="font-marathi text-royal-maroon text-lg font-semibold mt-1">
                  {coupleConfig.signatureFrom} / {coupleConfig.signatureTo} ♡
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
