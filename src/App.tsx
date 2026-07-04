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
          </footer>
          
          <MusicControl audioHook={audioHook} />
        </motion.div>
      )}
    </div>
  );
}

export default App;
