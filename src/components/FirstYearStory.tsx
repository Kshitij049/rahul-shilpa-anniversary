import React from 'react';
import { motion } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { DecorativeDivider, GoldOrnamentalFrame, MogaraGarland } from './DecorativeElements';

export const FirstYearStory: React.FC = () => {
  return (
    <section className="relative py-20 px-6 bg-warm-ivory">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-marathi text-royal-maroon text-2xl md:text-3xl font-semibold mb-2">
            आपलं पहिलं वर्ष
          </h2>
          <p className="font-marathi text-deep-charcoal/70 text-base">
            काही क्षण कॅमऱ्यात साठले…<br />
            आणि काही कायम मनात…
          </p>
        </motion.div>
        <motion.div
          className="relative max-w-sm mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-warm-cream rounded-xl shadow-2xl transform rotate-1" />
          <div className="absolute inset-3 border-2 border-antique-gold/30 rounded-lg" />
          <div className="relative bg-warm-ivory p-3 rounded-xl">
            <img
              src={coupleConfig.photo2}
              alt="First year memory"
              className="w-full aspect-[4/5] object-cover rounded-lg"
              style={{ objectPosition: coupleConfig.photo2Position }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML += `
                  <div class="w-full aspect-[4/5] flex items-center justify-center bg-warm-cream rounded-lg">
                    <p class="font-marathi text-royal-maroon text-center px-4">सुंदर आठवण</p>
                  </div>
                `;
              }}
            />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-10 bg-gradient-to-b from-antique-gold/20 to-transparent" />
          </div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GoldOrnamentalFrame className="bg-warm-cream/50 rounded-xl">
            <p className="font-marathi text-deep-charcoal text-base md:text-lg leading-relaxed mb-6">
              <span className="text-royal-maroon font-semibold">{coupleConfig.marriageDateMarathi}</span> रोजी
              सुरू झालेला हा सुंदर प्रवास,
              आज असंख्य आठवणींनी भरून गेला आहे.
            </p>
            <p className="font-marathi text-deep-charcoal/80 text-base md:text-lg leading-relaxed mb-6">
              कधी हसू,<br />
              कधी रुसवे-फुगवे,<br />
              कधी शांत संवाद,<br />
              कधी न बोलताही समजलेली मनं…
            </p>
            <p className="font-marathi text-deep-charcoal text-base md:text-lg leading-relaxed mb-6">
              या सगळ्यांतून<br />
              <span className="text-royal-maroon font-semibold">‘मी’</span> आणि{' '}
              <span className="text-royal-maroon font-semibold">‘तू’</span><br />
              हळूहळू <span className="text-kesari-gold font-semibold">‘आपण’</span> झालो.
            </p>
            <DecorativeDivider className="my-4" />
            <p className="font-marathi text-royal-maroon/80 text-lg md:text-xl italic leading-relaxed">
              "तुझ्यासोबतीने,<br />
              साधे क्षणही खास झाले."
            </p>
          </GoldOrnamentalFrame>
          <p className="font-marathi text-antique-gold text-sm mt-6 tracking-wider">
            पहिलं पर्व — आपल्या सहजीवनाचं
          </p>
        </motion.div>
      </div>
    </section>
  );
};
