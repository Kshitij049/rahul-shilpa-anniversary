import React from 'react';
import { motion } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { FloralCorner, ParticleLayer, MogaraGarland } from './DecorativeElements';

export const FinalCinematicSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={coupleConfig.photo3}
          alt="Rahul and Shilpa"
          className="w-full h-full object-cover"
          style={{ objectPosition: coupleConfig.photo3Position }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1.2 }}
          viewport={{ once: true }}
          transition={{ duration: 15, ease: 'linear' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.className += ' bg-maroon-gradient';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-wine/90 via-deep-wine/50 to-deep-wine/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,201,109,0.1)_0%,transparent_70%)]" />
      </div>
      <ParticleLayer count={10} />
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />
      <div className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-marathi text-soft-haldi text-xl md:text-2xl mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            एक सुंदर वर्ष…
          </motion.p>
          <motion.p
            className="font-marathi text-warm-ivory text-xl md:text-2xl mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            असंख्य आठवणी…
          </motion.p>
          <motion.p
            className="font-marathi text-kesari-gold text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            आणि आयुष्यभराची सोबत…
          </motion.p>
          <MogaraGarland className="my-6" />
          <motion.h2
            className="font-marathi text-gold-gradient text-4xl md:text-6xl lg:text-7xl font-bold my-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {coupleConfig.coupleNameMarathi}
          </motion.h2>
          <MogaraGarland className="my-6" />
          <motion.p
            className="font-marathi text-warm-cream/90 text-lg md:text-xl mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
          >
            प्रथम विवाह वर्षगाठ
          </motion.p>
          <motion.p
            className="font-marathi text-kesari-gold text-2xl md:text-3xl font-semibold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
          >
            {coupleConfig.anniversaryDateMarathi}
          </motion.p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto mb-6" />
          <motion.p
            className="font-marathi text-warm-cream/80 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.9 }}
          >
            हातात हात…<br />
            आणि सोबत आयुष्यभराची.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
