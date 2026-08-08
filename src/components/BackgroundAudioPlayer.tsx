import React, { useEffect, useRef, useState } from 'react';
import { VolumeX, Pause, Play } from 'lucide-react';

export default function BackgroundAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPausedForVideo, setIsPausedForVideo] = useState(false);
  const [userWantsPaused, setUserWantsPaused] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume strictly to 20%
    audio.volume = 0.20;

    // Function to attempt audio playback
    const startAudio = () => {
      if (userWantsPaused) return;
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.volume = 0.20;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsPausedForVideo(false);
          })
          .catch((err) => {
            console.warn('Autoplay waiting for user gesture:', err);
          });
      }
    };

    // Listen for user interaction to start background audio unless user manually paused
    const handleUserGesture = () => {
      if (!userWantsPaused) {
        startAudio();
      }
    };

    window.addEventListener('click', handleUserGesture, { once: true });
    window.addEventListener('touchstart', handleUserGesture, { once: true });

    // Monitor all video elements to pause background audio when unmuted video plays
    const checkVideoState = () => {
      if (userWantsPaused) return;

      const videos = Array.from(document.querySelectorAll('video'));
      const activeUnmutedVideo = videos.find(
        (v) => !v.paused && !v.muted && v.volume > 0 && v.readyState >= 2
      );

      if (activeUnmutedVideo) {
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
          setIsPausedForVideo(true);
        }
      } else {
        if (isPausedForVideo && audioRef.current && audioRef.current.paused && !userWantsPaused) {
          audioRef.current.volume = 0.20;
          audioRef.current
            .play()
            .then(() => {
              setIsPausedForVideo(false);
            })
            .catch(() => {});
        }
      }
    };

    const interval = setInterval(checkVideoState, 300);

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', handleUserGesture);
      window.removeEventListener('touchstart', handleUserGesture);
    };
  }, [isPausedForVideo, isPlaying, userWantsPaused]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // User explicitly clicked Pause
      audio.pause();
      setIsPlaying(false);
      setIsPausedForVideo(false);
      setUserWantsPaused(true);
    } else {
      // User explicitly clicked Play
      setUserWantsPaused(false);
      audio.volume = 0.20;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsPausedForVideo(false);
        })
        .catch((err) => {
          console.warn('Playback blocked by browser policy:', err);
        });
    }
  };

  return (
    <>
      {/* Background Music Track (Clean Lofi Chill MP3 at 20% Volume) */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/lofi-chill.mp3"
      />

      {/* Floating Audio Control Pill (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-[900]">
        <button
          onClick={togglePlay}
          className={`flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-2xl ${
            isPlaying && !isPausedForVideo
              ? 'bg-[#0C0C10]/90 border-[#FF6B00] text-white shadow-[0_0_25px_rgba(255,107,0,0.35)] scale-105'
              : 'bg-[#0C0C10]/85 border-white/10 text-zinc-300 hover:text-white hover:border-white/30'
          }`}
          title="Música de Fundo Lofi Chill (20% Volume)"
          aria-label={isPlaying ? 'Pausar música de fundo' : 'Tocar música de fundo'}
        >
          <div className="w-8 h-8 rounded-full neu-well flex items-center justify-center text-[#FF6B00] shrink-0">
            {isPausedForVideo ? (
              <VolumeX className="w-4 h-4 text-amber-400 animate-pulse" />
            ) : isPlaying ? (
              <Pause className="w-4 h-4 text-[#FF6B00]" />
            ) : (
              <Play className="w-4 h-4 text-[#FF6B00] ml-0.5" />
            )}
          </div>

          <div className="flex flex-col text-left pr-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              {isPausedForVideo ? 'Som do Vídeo Ativo' : 'Música Chill Lofi'}
            </span>
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              {isPausedForVideo ? (
                <span className="text-amber-400 font-semibold">Priorizando Vídeo</span>
              ) : isPlaying ? (
                <>
                  <span className="text-[#FF8A33]">TOCANDO • 20%</span>
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 bg-[#FF6B00] h-full animate-pulse" />
                    <span className="w-0.5 bg-[#FF6B00] h-2 animate-pulse" />
                    <span className="w-0.5 bg-[#FF6B00] h-3.5 animate-pulse" />
                  </span>
                </>
              ) : (
                <span>PAUSADO (Clique p/ Ouvir)</span>
              )}
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
