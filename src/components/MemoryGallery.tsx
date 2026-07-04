import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { coupleConfig } from '../coupleConfig';
import { MogaraGarland, DecorativeDivider } from './DecorativeElements';

const photos = [
  { src: coupleConfig.photo1, caption: 'जिथून आपल्या आठवणींना नवी ओळख मिळाली…', position: coupleConfig.photo1Position },
  { src: coupleConfig.photo2, caption: 'साध्या क्षणांत सापडलेलं खरं सुख…', position: coupleConfig.photo2Position },
  { src: coupleConfig.photo3, caption: 'आणि ही तर फक्त सुरुवात आहे…', position: coupleConfig.photo3Position },
];

export const MemoryGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % photos.length);
    }
  };
  
  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="relative py-20 px-6 bg-warm-ivory">
      <div className="max-w-lg mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MogaraGarland className="mb-6" />
          <h2 className="font-marathi text-royal-maroon text-2xl md:text-3xl font-semibold mb-2">
            तीन छायाचित्रं…
          </h2>
          <p className="font-marathi text-deep-charcoal/70 text-lg">
            हजार आठवणी…
          </p>
        </motion.div>
        <div className="relative h-[500px] md:h-[600px]">
          <motion.div
            className="absolute left-1/2 top-8 -translate-x-1/2 w-64 md:w-72 z-20 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => openLightbox(0)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-warm-cream p-2 rounded-lg shadow-xl">
              <img
                src={photos[0].src}
                alt="Memory 1"
                className="w-full aspect-[3/4] object-cover rounded"
                style={{ objectPosition: photos[0].position }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <p className="font-marathi text-deep-charcoal/70 text-xs mt-2 px-1">{photos[0].caption}</p>
            </div>
          </motion.div>
          <motion.div
            className="absolute left-0 top-32 w-40 md:w-48 z-10 cursor-pointer"
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => openLightbox(1)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-warm-cream p-2 rounded-lg shadow-lg">
              <img
                src={photos[1].src}
                alt="Memory 2"
                className="w-full aspect-square object-cover rounded"
                style={{ objectPosition: photos[1].position }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <p className="font-marathi text-deep-charcoal/70 text-xs mt-2 px-1">{photos[1].caption}</p>
            </div>
          </motion.div>
          <motion.div
            className="absolute right-0 top-40 w-40 md:w-48 z-10 cursor-pointer"
            initial={{ opacity: 0, x: 30, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onClick={() => openLightbox(2)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-warm-cream p-2 rounded-lg shadow-lg">
              <img
                src={photos[2].src}
                alt="Memory 3"
                className="w-full aspect-square object-cover rounded"
                style={{ objectPosition: photos[2].position }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <p className="font-marathi text-deep-charcoal/70 text-xs mt-2 px-1">{photos[2].caption}</p>
            </div>
          </motion.div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 500">
            <path
              d="M200 50 Q100 200 80 350 Q200 400 320 350 Q300 200 200 50"
              stroke="#B8873A"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
              strokeDasharray="5,5"
            />
          </svg>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-marathi text-antique-gold text-sm tracking-widest">
            ०६ • ०७ • २०२५
          </div>
        </div>
      </div>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-deep-charcoal/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-warm-ivory/10 flex items-center justify-center"
            >
              <X className="w-5 h-5 text-warm-ivory" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-warm-ivory/10 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-warm-ivory" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-warm-ivory/10 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-warm-ivory" />
            </button>
            <motion.div
              className="max-w-sm mx-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightboxIndex].src}
                alt={`Memory ${lightboxIndex + 1}`}
                className="w-full max-h-[70vh] object-contain rounded-lg"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <p className="font-marathi text-warm-ivory text-center mt-4 text-lg">
                {photos[lightboxIndex].caption}
              </p>
              <p className="text-warm-cream/50 text-center text-sm mt-2">
                {lightboxIndex + 1} / {photos.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
