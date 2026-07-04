import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from './hooks/useAudio';
import { coupleConfig } from '../coupleConfig';

interface MusicControlProps {
  audioHook: ReturnType<typeof useAudio>;
  className?: string;
}

export const MusicControl: React.FC<MusicControlProps> = ({ audioHook, className = '' }) => {
  const { isPlaying, toggle, hasError } = audioHook;
  
  if (hasError) return null;
  
  return (
    <motion.button
      onClick={() => toggle()}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-royal-maroon/90 backdrop-blur-sm 
                  border border-antique-gold/50 flex items-center justify-center shadow-lg
                  touch-manipulation ${className}`}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-soft-haldi" />
      ) : (
        <VolumeX className="w-5 h-5 text-warm-cream/70" />
      )}
      <audio ref={audioHook.audioRef} src={coupleConfig.audioSource} preload="none" />
    </motion.button>
  );
};
