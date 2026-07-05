import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { coupleConfig } from '../coupleConfig';
import { MogaraGarland, DecorativeDivider } from './DecorativeElements';

const photos = [
  { 
    src: coupleConfig.photo1, 
    caption: 'साध्या क्षणांत सापडलेलं खरं सुख…',
    subCaption: '०६ • ०७ • २०२५',
    position: coupleConfig.photo1Position 
  },
  { 
    src: coupleConfig.photo2, 
    caption: 'जिथून आपल्या आठवणींना नवी ओळख मिळाली…',
    subCaption: 'पहिलं वर्ष',
    position: coupleConfig.photo2Position 
  },
  { 
    src: coupleConfig.photo3, 
    caption: 'आणि ही तर फक्त सुरुवात आहे…',
    subCaption: 'आयुष्यभराचं लाभलं',
    position: coupleConfig.photo3Position 
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

  // Keyboard navigation for lightbox
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
    <section className="relative py-20 px-4 md:px-6 bg-warm-ivory overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-royal-maroon" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-kesari-gold" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <MogaraGarland className="mb-6 mx-auto" />
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-antique-gold" />
            <Camera className="w-5 h-5 text-antique-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-antique-gold" />
          </div>

          <h2 className="font-marathi text-royal-maroon text-3xl md:text-5xl font-bold mb-3 tracking-wide">
            तीन छायाचित्रं…
          </h2>
          <p className="font-marathi text-deep-charcoal/70 text-xl md:text-2xl font-medium">
            हजार आठवणी…
          </p>
          <p className="font-marathi text-kesari-gold/80 text-lg mt-2 italic">
            आणि आयुष्यभराचं लाभलं…
          </p>
          
          <DecorativeDivider className="mt-8 mx-auto" />
        </motion.div>

        {/* Photo Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onClick={() => openLightbox(index)}
              whileTap={{ scale: 0.97 }}
            >
              {/* Photo Card */}
              <div className={`
                relative overflow-hidden rounded-2xl shadow-lg 
                hover:shadow-2xl transition-all duration-500 ease-out
                ${index === 1 ? 'md:mt-8' : ''}
                ${index === 2 ? 'md:mt-4' : ''}
              `}>
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-warm-cream">
                  <img
                    src={photo.src}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ objectPosition: photo.position }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay - Always visible at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-deep-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Caption Overlay - Always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-500">
                    <p className="font-marathi text-warm-ivory text-base md:text-lg leading-relaxed font-medium text-center drop-shadow-lg">
                      {photo.caption}
                    </p>
                    <p className="font-marathi text-kesari-gold/90 text-sm mt-2 text-center tracking-wider">
                      {photo.subCaption}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-kesari-gold/40 rounded-2xl transition-colors duration-500" />
                </div>
              </div>

              {/* Decorative dot below each photo */}
              <motion.div 
                className="flex justify-center mt-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
              >
                <div className="w-2 h-2 rounded-full bg-antique-gold/60" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Date Stamp */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-warm-cream/80 border border-antique-gold/20">
            <div className="w-8 h-px bg-antique-gold/40" />
            <p className="font-marathi text-royal-maroon text-lg tracking-[0.4em] font-semibold">
              ०६ • ०७ • २०२५
            </p>
            <div className="w-8 h-px bg-antique-gold/40" />
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-deep-charcoal/95 backdrop-blur-sm"
              onClick={closeLightbox}
            />
            
            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-warm-ivory/10 flex items-center justify-center hover:bg-warm-ivory/25 transition-colors duration-300 border border-warm-ivory/20"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-warm-ivory" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-warm-ivory/10 flex items-center justify-center hover:bg-warm-ivory/25 transition-colors duration-300 border border-warm-ivory/20"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 text-warm-ivory" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-warm-ivory/10 flex items-center justify-center hover:bg-warm-ivory/25 transition-colors duration-300 border border-warm-ivory/20"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 text-warm-ivory" />
            </button>

            {/* Lightbox Content */}
            <motion.div
              className="relative max-w-lg mx-4 md:mx-8"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-deep-charcoal">
                <img
                  src={photos[lightboxIndex].src}
                  alt={`Memory ${lightboxIndex + 1}`}
                  className="w-full max-h-[70vh] object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              
              {/* Lightbox Caption */}
              <div className="mt-6 text-center">
                <p className="font-marathi text-warm-ivory text-xl md:text-2xl leading-relaxed">
                  {photos[lightboxIndex].caption}
                </p>
                <p className="font-marathi text-kesari-gold text-base mt-2 tracking-wider">
                  {photos[lightboxIndex].subCaption}
                </p>
                <p className="text-warm-cream/40 text-sm mt-4">
                  {lightboxIndex + 1} / {photos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
