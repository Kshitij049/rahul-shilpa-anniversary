import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAudio } from './components/hooks/useAudio';
import { IntroWelcome } from './components/IntroWelcome';
import { CinematicSlideshow } from './components/CinematicSlideshow';
import { MusicControl } from './components/MusicControl';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { WeddingDateSection } from './components/WeddingDateSection';
import { TogetherCounter } from './components/TogetherCounter';
import { FirstYearStory } from './components/FirstYearStory';
import { AnniversaryStats } from './components/AnniversaryStats';
import { MemoryGallery } from './components/MemoryGallery';
import { LittleMoments } from './components/LittleMoments';
import { MarathiLoveLetter } from './components/MarathiLoveLetter';
import { SurpriseEnvelope } from './components/SurpriseEnvelope';
import { BlessingSection } from './components/BlessingSection';
import { FinalCinematicSection } from './components/FinalCinematicSection';
import { ShareSection } from './components/ShareSection';
import { coupleConfig } from './coupleConfig';

type AppState = 'intro' | 'loading' | 'slideshow' | 'main';

function App() {
  const [appState, setAppState] = useState<AppState>('intro');
  const [isLoading, setIsLoading] = useState(true);
  const audioHook = useAudio(coupleConfig.audioSource);

  // Preload images on mount
  useEffect(() => {
    const images = [coupleConfig.photo1, coupleConfig.photo2, coupleConfig.photo3];
    let loaded = 0;
    
    images.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loaded++;
        if (loaded === images.length) setIsLoading(false);
      };
      img.onerror = () => {
        loaded++;
        if (loaded === images.length) setIsLoading(false);
      };
      img.src = src;
    });
    
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const handleStart = useCallback(async () => {
    await audioHook.play();
    setAppState('slideshow');
  }, [audioHook]);

  const handleSlideshowComplete = useCallback(() => {
    setAppState('main');
    window.scrollTo(0, 0);
  }, []);

  const handleSkipSlideshow = useCallback(() => {
    setAppState('main');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-warm-ivory min-h-screen">
      {/* Creator Watermark - Top Right TV Channel Style */}
      <div className="fixed top-3 right-3 z-50 flex items-center gap-1.5 bg-royal-maroon/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-antique-gold/40 shadow-lg">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-antique-gold to-kesari-gold flex items-center justify-center">
          <span className="text-[8px] font-bold text-deep-wine">KK</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[8px] font-english text-warm-cream/90 tracking-wide">Created by</span>
          <span className="text-[9px] font-english font-semibold text-antique-gold">Kshitij Kamble</span>
        </div>
      </div>

      <audio ref={audioHook.audioRef} src={coupleConfig.audioSource} preload="auto" />
      <AnimatePresence mode="wait">
        {appState === 'intro' && (
          <IntroWelcome
            key="intro"
            onStart={handleStart}
            isLoading={isLoading}
          />
        )}
        
        {appState === 'slideshow' && (
          <CinematicSlideshow
            key="slideshow"
            onComplete={handleSlideshowComplete}
            onSkip={handleSkipSlideshow}
          />
        )}
      </AnimatePresence>
      
      {appState === 'main' && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ScrollProgress />
          <HeroSection />
          <WeddingDateSection />
          <TogetherCounter />
          <FirstYearStory />
          <AnniversaryStats />
          <MemoryGallery />
          <LittleMoments />
          <MarathiLoveLetter />
          <SurpriseEnvelope />
          <BlessingSection />
          <FinalCinematicSection />
          <ShareSection />
          
          
          <footer className="py-8 bg-deep-wine text-center">
            <p className="font-marathi text-warm-cream/60 text-sm">
              {coupleConfig.coupleNameMarathi} — प्रथम विवाह वर्षगाठ
            </p>
            <p className="font-marathi text-warm-cream/40 text-xs mt-1">
              {coupleConfig.anniversaryDateMarathi}
            </p>
            <p className="font-marathi text-warm-cream/30 text-xs mt-2">
              Created with love by {coupleConfig.creatorName} | {coupleConfig.creatorEmail}
            </p>
          </footer>
          
          <MusicControl audioHook={audioHook} />
        </motion.div>
      )}
    </div>
  );
}

export default App;




