import { useState, useRef, useCallback, useEffect } from 'react';

interface UseAudioReturn {
  isPlaying: boolean;
  volume: number;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => Promise<void>;
  setVolume: (vol: number) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  hasError: boolean;
}

export function useAudio(src: string): UseAudioReturn {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.4);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = volume;
    audio.loop = true;
    
    const handleError = () => setHasError(true);
    audio.addEventListener('error', handleError);
    
    return () => {
      audio.removeEventListener('error', handleError);
    };
  }, [volume]);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;
    
    try {
      audio.volume = 0;
      await audio.play();
      
      let currentVol = 0;
      const targetVol = volume;
      const fadeInterval = setInterval(() => {
        currentVol += 0.02;
        if (currentVol >= targetVol) {
          currentVol = targetVol;
          clearInterval(fadeInterval);
        }
        if (audio) audio.volume = currentVol;
      }, 50);
      
      setIsPlaying(true);
    } catch (err) {
      console.log('Audio play failed:', err);
      setHasError(true);
    }
  }, [volume, hasError]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    let currentVol = audio.volume;
    const fadeInterval = setInterval(() => {
      currentVol -= 0.05;
      if (currentVol <= 0) {
        currentVol = 0;
        audio.pause();
        clearInterval(fadeInterval);
      }
      audio.volume = currentVol;
    }, 50);
    
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(async () => {
    if (isPlaying) {
      pause();
    } else {
      await play();
    }
  }, [isPlaying, play, pause]);

  const setVolume = useCallback((vol: number) => {
    setVolumeState(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  }, []);

  return { isPlaying, volume, play, pause, toggle, setVolume, audioRef, hasError };
}
