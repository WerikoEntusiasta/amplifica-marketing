import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Film, Volume2, VolumeX, Maximize2, X } from 'lucide-react';

const FRESH_PORTFOLIO_VIDEOS_LIST = [
  "recwerikoliveira_2026-07-20_DbBtiN_pcj-_0.mp4",
  "recwerikoliveira_2026-07-20_DbBuFnlpdQ6_0.mp4",
  "recwerikoliveira_2026-07-20_DbBtrvEJrVR_0.mp4",
  "recwerikoliveira_2026-07-20_DbBu-O-pZ9j_0.mp4",
  "recwerikoliveira_2026-02-26_DVPQB3rDUSA_0.mp4",
  "recwerikoliveira_2026-02-25_DVLoRSbjU4t_0.mp4",
  "recwerikoliveira_2026-02-06_DUbXqRAj5KT_0.mp4",
  "recwerikoliveira_2026-01-31_DUJ3fdJjf6g_0.mp4",
  "recwerikoliveira_2026-01-19_DTs61pADwYq_0.mp4",
  "recwerikoliveira_2025-11-27_DRkzzLECYC-_0.mp4",
  "recwerikoliveira_2025-11-07_DQwrTVkkQpM_0.mp4",
  "recwerikoliveira_2025-10-15_DP2GkyWEQ1x_0.mp4",
  "recwerikoliveira_2025-10-11_DPrGx-PDWKs_0.mp4",
  "recwerikoliveira_2025-10-09_DPmLo4qjWeR_0.mp4",
  "recwerikoliveira_2025-08-20_DNl3GF7Ss1L_0.mp4",
  "recwerikoliveira_2025-08-13_DNSnNAbuRTS_0.mp4",
  "recwerikoliveira_2025-08-01_DMz9Y5SusAa_0.mp4",
  "recwerikoliveira_2025-07-28_DMqUwnjRhwK_0.mp4",
  "recwerikoliveira_2025-04-07_DIIAYJPxALq_0.mp4",
  "recwerikoliveira_2025-03-12_DHGsRRox7AX_0.mp4",
  "recwerikoliveira_2025-01-13_DEwlxm9uUM3_0.mp4",
  "recwerikoliveira_2024-11-12_DCSMuw_RpcQloZCncQDuXsU3XGeKF8lAmy8Cv40_0.mp4",
  "recwerikoliveira_2024-11-12_DCRl870xNIr_0.mp4",
  "recwerikoliveira_2024-11-05_DB-TAlDRpyg_0.mp4",
  "recwerikoliveira_2024-10-31_DBzm4XoxgvU_0.mp4",
  "recwerikoliveira_2024-10-30_DBu4VqlxQUm_0.mp4",
  "recwerikoliveira_2024-10-26_DBkn93wRf0V_0.mp4",
  "recwerikoliveira_2024-09-20_DAI8G88u3AW_0.mp4",
  "recwerikoliveira_2024-09-15_C_6sBCsu7i1_0.mp4",
  "recwerikoliveira_2024-08-17_C-xg0R_uMRW_0.mp4",
  "recwerikoliveira_2024-07-15_C9cO7KkueMt_0.mp4",
  "recwerikoliveira_2024-07-13_C9WBpDmuJ8d_0.mp4",
  "recwerikoliveira_2024-07-11_C9Rp2XkurRL_0.mp4",
  "recwerikoliveira_2024-07-07_C9GkURSuOoV_0.mp4",
  "recwerikoliveira_2024-07-04_C9BPQDCuePF_0.mp4",
  "recwerikoliveira_2024-06-26_C8sIFozu_Eo_0.mp4",
  "recwerikoliveira_2024-06-22_C8hu3k7uiu3_0.mp4",
  "recwerikoliveira_2024-06-20_C8dKcqoubNM_0.mp4",
  "recwerikoliveira_2024-06-19_C8Zjy4ZOb2l_0.mp4",
  "recwerikoliveira_2024-06-18_C8XGmoYOr60_0.mp4",
  "recwerikoliveira_2024-06-18_C8XAzB1OH9B_0.mp4",
  "recwerikoliveira_2024-06-09_C7_eDcLOMTp_0.mp4",
  "recwerikoliveira_2024-06-08_C78rnYAO9_6_0.mp4",
  "recwerikoliveira_2024-06-07_C76AJP4OmBT_0.mp4",
  "recwerikoliveira_2024-06-06_C73AF0PuTop_0.mp4",
  "recwerikoliveira_2024-06-05_C72jJ0sORrf_0.mp4",
  "recwerikoliveira_2024-05-30_C7mEFwXOPd9_0.mp4",
  "recwerikoliveira_2024-05-30_C7k0jjfuLRY_0.mp4",
  "recwerikoliveira_2024-05-25_C7YCzLuua6E_0.mp4",
  "recwerikoliveira_2024-05-25_C7aLi7FuU6q_0.mp4",
  "recwerikoliveira_2024-05-25_C7aHIScuebY_0.mp4",
  "recwerikoliveira_2024-05-24_C7XgH-TuLAU_0.mp4",
  "recwerikoliveira_2024-05-19_C7JyYuDueFk_0.mp4",
  "recwerikoliveira_2024-05-16_C7BzGGxuhBC_0.mp4",
  "recwerikoliveira_2024-05-07_C6rt4tqO8GH_0.mp4",
  "recwerikoliveira_2024-04-26_C6NTCpcOjwP_0.mp4",
  "recwerikoliveira_2024-04-21_C6CFenlOVo0_0.mp4",
  "recwerikoliveira_2024-04-20_C5_3nrLOiJY_0.mp4",
  "recwerikoliveira_2024-04-20_C5-ZYtquGGj_0.mp4",
  "recwerikoliveira_2024-04-11_C5oZluYOauV_0.mp4",
  "recwerikoliveira_2024-04-06_C5b08y7uOm0_0.mp4",
  "recwerikoliveira_2024-04-05_C5YTDsKu_TB_0.mp4",
  "recwerikoliveira_2024-03-31_C5MWhc7OFPe_0.mp4",
  "recwerikoliveira_2024-03-29_C5HTdLMuSDQ_0.mp4",
  "recwerikoliveira_2024-03-20_C4t0nfEOvQ2_0.mp4",
  "recwerikoliveira_2024-03-19_C4rbrUbokcT_0.mp4"
];

const ALL_PORTFOLIO_VIDEOS = FRESH_PORTFOLIO_VIDEOS_LIST.map((fileName, index) => {
  const match = fileName.match(/\d{4}-\d{2}-\d{2}/);
  const dateStr = match ? match[0] : '2026';
  
  return {
    id: index + 1,
    title: `Produção Audiovisual #${index + 1}`,
    category: index % 3 === 0 ? 'Gravação Solo & Comercial' : index % 3 === 1 ? 'Filmagens Aéreas 4K' : 'Reels & Produções Sociais',
    tag: `@recwerikoliveira • ${dateStr}`,
    videoSrc: `/portfolio-videos/${fileName}`,
  };
});

export default function Video3DCoverflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [fullscreenVideo, setFullscreenVideo] = useState<typeof ALL_PORTFOLIO_VIDEOS[0] | null>(null);

  // Track dynamic aspect ratio (width/height) for each video ID
  const [aspectRatios, setAspectRatios] = useState<Record<number, number>>({});

  const sectionRef = useRef<HTMLElement>(null);

  // Auto-mute and pause all videos when user scrolls away from the section
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // User scrolled away — mute all and pause non-visible videos
          setIsMuted(true);
          const videos = section.querySelectorAll('video');
          videos.forEach((video) => {
            video.muted = true;
            video.pause();
          });
        } else {
          // User came back — resume autoplay (muted)
          const videos = section.querySelectorAll('video');
          videos.forEach((video) => {
            video.muted = true;
            video.play().catch(() => {});
          });
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const prev = () => {
    setActiveIndex((prev) => (prev <= 0 ? ALL_PORTFOLIO_VIDEOS.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev >= ALL_PORTFOLIO_VIDEOS.length - 1 ? 0 : prev + 1));
  };

  const handleLoadedMetadata = (id: number, e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    if (video.videoWidth && video.videoHeight) {
      const ratio = video.videoWidth / video.videoHeight;
      setAspectRatios((prev) => ({ ...prev, [id]: ratio }));
    }
  };

  // Compute card dimensions dynamically based on video aspect ratio
  const getCardDimensions = (id: number) => {
    const ratio = aspectRatios[id] || 0.5625; // Default 9:16 vertical

    if (ratio > 1.2) {
      // Horizontal / Landscape Video (16:9)
      return {
        width: 420,
        height: 236,
        marginLeft: -210,
        marginTop: -118,
      };
    } else if (ratio >= 0.8 && ratio <= 1.2) {
      // Square Video (1:1)
      return {
        width: 340,
        height: 340,
        marginLeft: -170,
        marginTop: -170,
      };
    } else {
      // Vertical Video (9:16)
      return {
        width: 260,
        height: 462,
        marginLeft: -130,
        marginTop: -231,
      };
    }
  };

  // Helper to calculate exact 3D transform styles
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;

    let transform = 'translate3d(0, 0, -520px) scale(0.4)';
    let opacity = 0;
    let zIndex = 10;
    let filter = 'blur(4px)';

    if (diff === 0) {
      transform = 'translate3d(0, 0, 140px) rotateY(0deg) scale(1)';
      opacity = 1;
      zIndex = 50;
      filter = 'none';
    } else if (diff === 1) {
      transform = 'translate3d(180px, 0, -40px) rotateY(-42deg) scale(0.86)';
      opacity = 0.92;
      zIndex = 40;
      filter = 'blur(0.5px)';
    } else if (diff === -1) {
      transform = 'translate3d(-180px, 0, -40px) rotateY(42deg) scale(0.86)';
      opacity = 0.92;
      zIndex = 40;
      filter = 'blur(0.5px)';
    } else if (diff === 2) {
      transform = 'translate3d(330px, 0, -200px) rotateY(-46deg) scale(0.7)';
      opacity = 0.55;
      zIndex = 30;
      filter = 'blur(1.5px)';
    } else if (diff === -2) {
      transform = 'translate3d(-330px, 0, -200px) rotateY(46deg) scale(0.7)';
      opacity = 0.55;
      zIndex = 30;
      filter = 'blur(1.5px)';
    } else if (diff === 3 || diff > 3) {
      transform = 'translate3d(450px, 0, -360px) rotateY(-48deg) scale(0.56)';
      opacity = 0.22;
      zIndex = 20;
      filter = 'blur(3px)';
    } else if (diff === -3 || diff < -3) {
      transform = 'translate3d(-450px, 0, -360px) rotateY(48deg) scale(0.56)';
      opacity = 0.22;
      zIndex = 20;
      filter = 'blur(3px)';
    }

    return {
      transform,
      opacity,
      zIndex,
      filter,
    };
  };

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-28 bg-[var(--bg)] overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-4">
            <Film className="w-3.5 h-3.5" /> PORTFÓLIO DE VÍDEOS • @RECWERIKOLIVEIRA
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] mb-6">
            Galeria 3D com as nossas <br />
            <span className="text-gradient">produções audiovisuais reais</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            Navegue pelos vídeos originais extraídos diretamente da pasta do fundador. Cada cartão se adapta ao formato nativo. Clique para expandir em tela cheia.
          </p>
        </div>

        {/* Dynamic Video Counter & Progress Indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] px-4 py-1.5 rounded-full neu-well">
            Vídeo {activeIndex + 1} de {ALL_PORTFOLIO_VIDEOS.length}
          </span>
        </div>

        {/* 3D Coverflow Stage Container */}
        <div
          className="relative w-full flex items-center justify-center my-8"
          style={{
            height: '520px',
            perspective: '1600px',
            transformStyle: 'preserve-3d',
          }}
        >
          {ALL_PORTFOLIO_VIDEOS.map((item, idx) => {
            // Render only items near active index for optimal performance
            const diff = Math.abs(idx - activeIndex);
            if (diff > 4) return null;

            const isActive = idx === activeIndex;
            const style = getCardStyle(idx);
            const dims = getCardDimensions(item.id);

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isActive) {
                    setFullscreenVideo(item);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                className="absolute cursor-pointer transition-all duration-550 ease-[cubic-bezier(0.22,0.61,0.36,1)] group"
                style={{
                  top: '50%',
                  left: '50%',
                  width: `${dims.width}px`,
                  height: `${dims.height}px`,
                  marginLeft: `${dims.marginLeft}px`,
                  marginTop: `${dims.marginTop}px`,
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 30px 70px -28px rgba(0, 0, 0, 0.9)',
                  backgroundColor: '#0E141B',
                  willChange: 'transform, opacity, filter',
                  ...style,
                }}
              >
                {/* Real Adaptive Video Element */}
                <div className="w-full h-full relative overflow-hidden bg-black">
                  <video
                    autoPlay
                    loop
                    muted={!isActive || isMuted}
                    playsInline
                    onLoadedMetadata={(e) => handleLoadedMetadata(item.id, e)}
                    src={item.videoSrc}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E141B] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badge & Fullscreen Hint */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md border border-white/10 text-white">
                      {item.tag}
                    </span>

                    {isActive && (
                      <span className="p-1.5 rounded-full bg-[#FF6B00] text-white shadow-lg animate-pulse flex items-center gap-1 text-[10px] font-bold px-2.5">
                        <Maximize2 className="w-3 h-3" />
                        <span>Tela Cheia</span>
                      </span>
                    )}
                  </div>

                  {/* Audio Toggle Button (Active Card Only) */}
                  {isActive && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="absolute top-14 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[#FF6B00] transition-colors"
                      aria-label="Som"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FF6B00]" />}
                    </button>
                  )}

                  {/* Card Footer Text */}
                  <div className="absolute bottom-4 left-4 right-4 text-left z-10 pointer-events-none">
                    <span className="text-[10px] text-[#FF6B00] font-bold uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-display font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls Navigation Bar */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-2xl neu-btn flex items-center justify-center text-[var(--text)] hover:text-[#FF6B00] transition-colors shadow-lg"
            aria-label="Vídeo Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <span className="text-xs font-bold text-[var(--text-muted)] tracking-widest uppercase">
            {activeIndex + 1} / {ALL_PORTFOLIO_VIDEOS.length}
          </span>

          <button
            onClick={next}
            className="w-14 h-14 rounded-2xl neu-btn flex items-center justify-center text-[var(--text)] hover:text-[#FF6B00] transition-colors shadow-lg"
            aria-label="Próximo Vídeo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Fullscreen Video Overlay Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setFullscreenVideo(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF6B00] transition-colors flex items-center justify-center text-white"
            aria-label="Fechar Tela Cheia"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Fullscreen Video Container */}
          <div className="relative max-w-[95vw] max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black flex items-center justify-center">
            <video
              autoPlay
              controls
              src={fullscreenVideo.videoSrc}
              className="max-w-full max-h-[85vh] object-contain rounded-3xl"
            />
            
            {/* Modal Title Overlay */}
            <div className="absolute top-4 left-4 right-16 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 backdrop-blur-md text-[#FF6B00] border border-white/10">
                {fullscreenVideo.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-2 drop-shadow-md">
                {fullscreenVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
