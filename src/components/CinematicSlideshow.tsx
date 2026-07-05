import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coupleConfig } from '../coupleConfig';
import { FloralCorner, ParticleLayer, MogaraGarland } from './DecorativeElements';

interface CinematicSlideshowProps {
  onComplete: () => void;
  onSkip: () => void;
}

const TOTAL_DURATION = 28000;
const scenes = [
  { id: 0, duration: 2500 },
  { id: 1, duration: 3500 },
  { id: 2, duration: 4500 },
  { id: 3, duration: 5000 },
  { id: 4, duration: 5000 },
  { id: 5, duration: 4000 },
  { id: 6, duration: 3500 },
];

export const CinematicSlideshow: React.FC<CinematicSlideshowProps> = ({ onComplete, onSkip }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = [coupleConfig.photo1, coupleConfig.photo2, coupleConfig.photo3, coupleConfig.photo4];
    let loaded = 0;
    images.forEach((src) => {
      const img = new Image();
      img.onload = () => { loaded++; if (loaded === images.length) setImagesLoaded(true); };
      img.onerror = () => { loaded++; if (loaded === images.length) setImagesLoaded(true); };
      img.src = src;
    });
    const timeout = setTimeout(() => setImagesLoaded(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += 100;
      const totalProgress = (elapsed / TOTAL_DURATION) * 100;
      setProgress(Math.min(totalProgress, 100));
      let sceneElapsed = 0;
      for (let i = 0; i < scenes.length; i++) {
        if (elapsed < sceneElapsed + scenes[i].duration) {
          setCurrentScene(i);
          break;
        }
        sceneElapsed += scenes[i].duration;
      }
      if (elapsed >= TOTAL_DURATION) {
        clearInterval(interval);
        onComplete();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [imagesLoaded, onComplete]);

  const handleSkip = useCallback(() => { onSkip(); }, [onSkip]);

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 z-40 bg-maroon-gradient flex items-center justify-center">
        <motion.div className="w-12 h-12 border-2 border-antique-gold/30 border-t-antique-gold rounded-full"
          animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
        <p className="absolute mt-20 font-marathi text-warm-cream/80">आठवणी सजत आहेत… ♡</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-40 bg-deep-wine overflow-hidden">
      <ParticleLayer count={12} />
      <button onClick={handleSkip}
        className="absolute top-4 right-4 z-50 font-marathi text-warm-cream/70 text-xs px-3 py-1.5 border border-warm-cream/20 rounded-full backdrop-blur-sm active:scale-95 transition-transform touch-manipulation">
        पुढे जा
      </button>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-deep-wine/50 z-50">
        <motion.div className="h-full bg-gradient-to-r from-antique-gold via-kesari-gold to-antique-gold"
          style={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
      </div>
      <AnimatePresence mode="wait">
        {currentScene === 0 && <Scene1 key="scene1" />}
        {currentScene === 1 && <Scene2 key="scene2" />}
        {currentScene === 2 && <Scene3 key="scene3" />}
        {currentScene === 3 && <Scene4 key="scene4" />}
        {currentScene === 4 && <Scene5 key="scene5" />}
        {currentScene === 5 && <Scene6 key="scene6" />}
        {currentScene === 6 && <Scene7 key="scene7" />}
      </AnimatePresence>
    </div>
  );
};

const Scene1: React.FC = () => (
  <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-maroon-gradient"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(183,134,58,0.2)_0%,transparent_60%)]" />
    <FloralCorner position="top-left" /><FloralCorner position="top-right" />
    <FloralCorner position="bottom-left" /><FloralCorner position="bottom-right" />
    <motion.div className="text-center z-10 px-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
      <p className="font-marathi text-soft-haldi text-xl sm:text-3xl mb-3">एक वर्षापूर्वी…</p>
      <motion.p className="font-marathi text-kesari-gold text-lg sm:text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        {coupleConfig.marriageDateMarathi}
      </motion.p>
    </motion.div>
  </motion.div>
);

const Scene2: React.FC = () => (
  <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
    <motion.div className="absolute inset-0" initial={{ scale: 1.05 }} animate={{ scale: 1.1 }} transition={{ duration: 3.5, ease: 'linear' }}>
      <img src={coupleConfig.photo4} alt="Couple hands" className="w-full h-full object-cover" style={{ objectPosition: coupleConfig.photo4Position }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-wine/90 via-deep-wine/50 to-deep-wine/40" />
    </motion.div>
    <div className="absolute inset-0 flex flex-col items-center justify-end z-10 px-6 pb-24 text-center">
      <motion.p className="font-marathi text-warm-ivory text-lg sm:text-2xl mb-2 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>हातात हात घेऊन…</motion.p>
      <motion.p className="font-marathi text-soft-haldi text-base sm:text-xl drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>एक नवीन प्रवास सुरू केला…</motion.p>
    </div>
  </motion.div>
);

const Scene3: React.FC = () => (
  <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
    <motion.div className="absolute inset-0" initial={{ scale: 1.1 }} animate={{ scale: 1.2 }} transition={{ duration: 4.5, ease: 'linear' }}>
      <img src={coupleConfig.photo1} alt="Couple" className="w-full h-full object-cover" style={{ objectPosition: coupleConfig.photo1Position }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-wine/90 via-deep-wine/60 to-deep-wine/50" />
    </motion.div>
    <div className="absolute inset-0 flex flex-col items-center justify-end z-10 px-6 pb-20 text-center">
      <motion.p className="font-marathi text-warm-ivory text-xl sm:text-3xl mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>दोन वाटांनी…</motion.p>
      <motion.p className="font-marathi text-soft-haldi text-lg sm:text-2xl mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>एक सुंदर प्रवास सुरू केला…</motion.p>
      <motion.div className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3 }}>
        <p className="font-marathi text-gold-gradient text-2xl sm:text-4xl font-bold">{coupleConfig.coupleNameMarathi}</p>
        <p className="font-english text-warm-cream/80 text-sm sm:text-base mt-1 tracking-widest">{coupleConfig.coupleNameEnglish}</p>
      </motion.div>
    </div>
  </motion.div>
);

const Scene4: React.FC = () => {
  const lines = ["हसण्यात…", "रुसव्या-फुगव्यात…", "छोट्या छोट्या आठवणींत…"];
  return (
    <motion.div className="absolute inset-0 bg-warm-ivory" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8">
        <motion.div className="relative w-full max-w-[280px] aspect-[3/4] mb-4"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="absolute inset-0 bg-warm-cream rounded-lg shadow-2xl transform rotate-1" />
          <div className="absolute inset-2 border-2 border-antique-gold/40 rounded-lg" />
          <img src={coupleConfig.photo2} alt="Couple memory" className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover rounded"
            style={{ objectPosition: coupleConfig.photo2Position }}
            onError={(e) => { (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="absolute inset-3 flex items-center justify-center bg-warm-cream rounded"><p class="font-marathi text-royal-maroon text-center px-4">सुंदर आठवण</p></div>`; }} />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-antique-gold/20 to-transparent" />
        </motion.div>
        <div className="text-center space-y-1">
          {lines.map((line, i) => (
            <motion.p key={i} className="font-marathi text-royal-maroon text-base sm:text-xl"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.6 }}>{line}</motion.p>
          ))}
          <motion.div className="mt-3 pt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
            <p className="font-marathi text-deep-wine text-base sm:text-lg leading-relaxed">
              <span className="text-royal-maroon font-semibold">‘मी’</span> आणि <span className="text-royal-maroon font-semibold">‘तू’</span>…
            </p>
            <p className="font-marathi text-kesari-gold text-lg sm:text-xl font-semibold mt-1">हळूहळू ‘आपण’ झालो.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Scene5: React.FC = () => (
  <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
    <motion.div className="absolute inset-0" initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 5, ease: 'linear' }}>
      <img src={coupleConfig.photo3} alt="Couple journey" className="w-full h-full object-cover" style={{ objectPosition: coupleConfig.photo3Position }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-wine/50 via-transparent to-deep-wine/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,201,109,0.1)_0%,transparent_70%)]" />
    </motion.div>
    <div className="absolute inset-0 flex flex-col items-center justify-end z-10 px-6 pb-20 text-center">
      <motion.p className="font-marathi text-warm-ivory text-lg sm:text-2xl mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}> आणि पाहता पाहता…</motion.p>
      <motion.p className="font-marathi text-gold-gradient text-2xl sm:text-4xl font-bold mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>एक सुंदर वर्ष पूर्ण झालं.</motion.p>
      <motion.div className="font-marathi text-soft-haldi text-base sm:text-lg space-y-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <p>३६५ दिवस…</p><p>असंख्य आठवणी…</p>
      </motion.div>
    </div>
  </motion.div>
);

const Scene6: React.FC = () => (
  <motion.div className="absolute inset-0 bg-warm-ivory" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6">
      <div className="relative w-full max-w-[280px] h-64 mb-4">
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-52 z-20"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <div className="absolute inset-0 bg-warm-cream rounded-lg shadow-xl" />
          <div className="absolute inset-2 border border-antique-gold/30 rounded" />
          <img src={coupleConfig.photo1} alt="Memory 1" className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        </motion.div>
        <motion.div className="absolute left-0 top-4 w-28 h-36 z-10"
          initial={{ opacity: 0, x: -30, rotate: -5 }} animate={{ opacity: 1, x: 0, rotate: -8 }} transition={{ delay: 0.6 }}>
          <div className="absolute inset-0 bg-warm-cream rounded-lg shadow-lg" />
          <img src={coupleConfig.photo2} alt="Memory 2" className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        </motion.div>
        <motion.div className="absolute right-0 top-8 w-28 h-36 z-10"
          initial={{ opacity: 0, x: 30, rotate: 5 }} animate={{ opacity: 1, x: 0, rotate: 6 }} transition={{ delay: 1 }}>
          <div className="absolute inset-0 bg-warm-cream rounded-lg shadow-lg" />
          <img src={coupleConfig.photo3} alt="Memory 3" className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        </motion.div>
      </div>
      <div className="text-center">
        <motion.p className="font-marathi text-royal-maroon text-base sm:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>तीन छायाचित्रं…</motion.p>
        <motion.p className="font-marathi text-deep-wine text-sm sm:text-base mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>हजार आठवणी…</motion.p>
        <motion.p className="font-marathi text-kesari-gold text-base sm:text-lg font-semibold mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}> आणि आयुष्यभराची सोबत…</motion.p>
        <motion.p className="font-marathi text-antique-gold text-xs sm:text-sm mt-2 tracking-widest" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>०६ • ०७ • २०२५</motion.p>
      </div>
    </div>
  </motion.div>
);

const Scene7: React.FC = () => (
  <motion.div className="absolute inset-0 bg-maroon-gradient" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(183,134,58,0.2)_0%,transparent_60%)]" />
    <ParticleLayer count={15} />
    <FloralCorner position="top-left" /><FloralCorner position="top-right" />
    <FloralCorner position="bottom-left" /><FloralCorner position="bottom-right" />
    <div className="absolute inset-0 flex flex-col items-center justify-end z-10 px-6 pb-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <p className="font-marathi text-warm-ivory text-base sm:text-xl mb-1">आपल्या सहजीवनाचं</p>
        <p className="font-marathi text-gold-gradient text-xl sm:text-2xl font-semibold mb-3">पहिलं सुंदर वर्ष</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
        <MogaraGarland className="mb-2" />
        <p className="font-marathi text-soft-haldi text-2xl sm:text-4xl font-bold leading-tight">{coupleConfig.groomNameMarathi}</p>
        <p className="font-marathi text-kesari-gold text-xl sm:text-3xl my-1">♡</p>
        <p className="font-marathi text-soft-haldi text-2xl sm:text-4xl font-bold leading-tight">{coupleConfig.brideNameMarathi}</p>
        <p className="font-english text-warm-cream/70 text-xs sm:text-sm mt-1 tracking-widest">{coupleConfig.coupleNameEnglish}</p>
        <MogaraGarland className="mt-2" />
      </motion.div>
      <motion.div className="mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <p className="font-marathi text-warm-cream/80 text-sm sm:text-base">प्रथम विवाह वर्षगाठ</p>
        <p className="font-marathi text-kesari-gold text-base sm:text-lg font-semibold mt-1">{coupleConfig.anniversaryDateMarathi}</p>
      </motion.div>
      <motion.div className="mt-2 flex flex-col items-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>
        <div className="animate-bounce mb-1">
          <svg className="w-10 h-10 text-antique-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <p className="font-marathi text-soft-haldi text-base sm:text-lg font-bold animate-pulse">खाली स्क्रोल करा</p>
        <p className="font-marathi text-warm-cream/60 text-xs sm:text-sm mt-1">अधिक आठवणी पाहण्यासाठी</p>
      </motion.div>
      <motion.div className="mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto mb-1" />
        <p className="font-marathi text-warm-cream/70 text-sm leading-relaxed">हातात हात…<br /> आणि सोबत आयुष्यभराची.</p>
      </motion.div>
    </div>
  </motion.div>
);
