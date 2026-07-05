import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Heart } from 'lucide-react';
import { coupleConfig } from '../coupleConfig';
import { MogaraGarland, DecorativeDivider } from './DecorativeElements';

const photos = [
  { 
    src: coupleConfig.photo1, 
    caption: 'साध्या क्षणांत सापडलेलं खरं सुख…',
    subCaption: 'पहिलं वर्ष',
    position: coupleConfig.photo1Position,
    rotate: -2
  },
  { 
    src: coupleConfig.photo2, 
    caption: 'जिथून आपल्या आठवणींना नवी ओळख मिळाली…',
    subCaption: '०६ · ०७ · २०२५',
    position: coupleConfig.photo2Position,
    rotate: 1
  },
  { 
    src: coupleConfig.photo3, 
    caption: 'आणि ही तर फक्त सुरुवात आहे…',
    subCaption: 'आयुष्यभराचं लाभलं',
    position: coupleConfig.photo3Position,
    rotate: -1
  },
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

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="relative py-24 px-4 md:px-6 bg-warm-ivory overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-royal-maroon blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-kesari-gold blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <MogaraGarland className="mb-6 mx-auto" />
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-antique-gold" />
            <div className="w-10 h-10 rounded-full bg-warm-cream border-2 border-antique-gold/30 flex items-center justify-center">
              <Camera className="w-5 h-5 text-antique-gold" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-antique-gold" />
          </div>

          <h2 className="font-marathi text-royal-maroon text-4xl md:text-5xl font-bold mb-3 tracking-wide">
            तीन छायाचित्रं…
          </h2>
          <p className="font-marathi text-deep-charcoal/70 text-xl md:text-2xl font-medium mb-2">
            हजार आठवणी…
          </p>
          <p className="font-marathi text-kesari-gold/80 text-lg italic">
            आणि आयुष्यभराचं लाभलं…
          </p>
          
          <DecorativeDivider className="mt-8 mx-auto" />
        </motion.div>

        {/* Polaroid Photo Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotate: photo.rotate 
              }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                delay: index * 0.25, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              onClick={() => openLightbox(index)}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                y: -10,
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Polaroid Frame — LONGER for photo 1 */}
              <div className={`bg-warm-cream p-3 pb-20 rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-500 relative ${index === 0 ? 'pt-4' : ''}`}>
                {/* Tape Effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-warm-ivory/80 rotate-1 shadow-sm z-10" 
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255,248,231,0.9) 0%, rgba(247,232,207,0.8) 100%)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                  }}
                />
                
                {/* Photo — TALLER for photo 1 to prevent head cut */}
                <div className="relative overflow-hidden bg-white">
                  <img
                    src={photo.src}
                    alt={`Memory ${index + 1}`}
                    className={`w-full object-cover ${index === 0 ? 'aspect-[3/5]' : 'aspect-[3/4]'}`}
                    style={{ objectPosition: index === 0 ? 'center 15%' : photo.position }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    loading="lazy"
                  />
                </div>

                {/* Caption below photo (Polaroid style) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <p className="font-marathi text-royal-maroon text-sm leading-relaxed font-medium">
                    {photo.caption}
                  </p>
                  <p className="font-marathi text-kesari-gold text-xs mt-1 tracking-wider">
                    {photo.subCaption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Date Stamp */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/60 border-2 border-antique-gold/20 shadow-lg">
            <Heart className="w-4 h-4 text-muted-rose fill-muted-rose" />
            <p className="font-marathi text-royal-maroon text-lg tracking-[0.3em] font-semibold">
              ०६ · ०७ · २०२५
            </p>
            <Heart className="w-4 h-4 text-muted-rose fill-muted-rose" />
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-deep-charcoal/95 backdrop-blur-md"
              onClick={closeLightbox}
            />
            
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-warm-ivory/10 flex items-center justify-center hover:bg-warm-ivory/25 transition-colors border border-warm-ivory/20"
            >
              <X className="w-6 h-6 text-warm-ivory" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-warm-ivory/10 flex items-center justify-center hover:bg-warm-ivory/25 transition-colors border border-warm-ivory/20"
            >
              <ChevronLeft className="w-6 h-6 text-warm-ivory" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-warm-ivory/10 flex items-center justify-center hover:bg-warm-ivory/25 transition-colors border border-warm-ivory/20"
            >
              <ChevronRight className="w-6 h-6 text-warm-ivory" />
            </button>

            <motion.div
              className="relative max-w-2xl w-full mx-4"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-warm-cream p-4 pb-12 rounded-lg shadow-2xl">
                <img
                  src={photos[lightboxIndex].src}
                  alt={`Memory ${lightboxIndex + 1}`}
                  className="w-full max-h-[60vh] object-contain rounded"
                />
                <div className="mt-4 text-center">
                  <p className="font-marathi text-royal-maroon text-xl">
                    {photos[lightboxIndex].caption}
                  </p>
                  <p className="font-marathi text-kesari-gold text-sm mt-1">
                    {photos[lightboxIndex].subCaption}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
