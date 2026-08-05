import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Video } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VideoExplorations: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;

    if (!section || !content || !leftCol || !rightCol) return;

    // Pin center text
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      pin: content,
      start: 'top top',
      end: 'bottom bottom',
      pinSpacing: false,
    });

    // Parallax movement for left column
    const leftTrigger = gsap.fromTo(
      leftCol,
      { y: 150 },
      {
        y: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    // Parallax movement for right column
    const rightTrigger = gsap.fromTo(
      rightCol,
      { y: -150 },
      {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    return () => {
      pinTrigger.kill();
      leftTrigger.kill();
      rightTrigger.kill();
    };
  }, []);

  const items = [
    {
      id: 1,
      title: 'Gravação de Vídeo Solo',
      category: 'Produção Audiovisual',
      image: '/assets/images/video-production.jpg',
      fallback: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?w=800&q=80',
      rotation: -2,
      badge: '4K Studio',
    },
    {
      id: 2,
      title: 'Tomadas Aéreas com Drone',
      category: 'Vídeo Aéreo',
      image: '/assets/images/hero-bg.jpg',
      fallback: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80',
      rotation: 3,
      badge: 'Drone FP V',
    },
    {
      id: 3,
      title: 'Gestão de Redes Sociais',
      category: 'Design & Reels',
      image: '/assets/images/social-media.jpg',
      fallback: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      rotation: -1,
      badge: 'Instagram & TikTok',
    },
    {
      id: 4,
      title: 'Landing Pages de Alta Conversão',
      category: 'UI/UX Design',
      image: '/assets/images/landing-page.jpg',
      fallback: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
      rotation: 2,
      badge: 'Conversion Rate',
    },
    {
      id: 5,
      title: 'Marketing de Conteúdo',
      category: 'Copywriting',
      image: '/assets/images/content-marketing.jpg',
      fallback: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
      rotation: -3,
      badge: 'SEO & Copy',
    },
    {
      id: 6,
      title: 'Gestão de Tráfego Pago',
      category: 'Performance Ads',
      image: '/assets/images/traffic-management.jpg',
      fallback: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      rotation: 1,
      badge: 'Google & Meta Ads',
    },
  ];

  return (
    <section ref={sectionRef} className="min-h-[250vh] relative bg-[var(--bg)] overflow-hidden">
      {/* Background glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Layer 1: Pinned Center Content */}
      <div
        ref={contentRef}
        className="h-screen flex items-center justify-center text-center z-10 relative pointer-events-none px-4"
      >
        <div className="pointer-events-auto max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-[0.2em] font-medium mb-4">
            <Video className="w-3.5 h-3.5" /> Showreel & Produções
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--text)] mb-4 leading-tight">
            Produção Visual <br />& <span className="text-gradient">Vídeo Aéreo</span>
          </h2>

          <p className="text-sm md:text-base text-[var(--text-muted)] max-w-md mx-auto mb-8 leading-relaxed font-medium">
            Capturamos a essência da sua marca sob ângulos impressionantes. Do estúdio às tomadas aéreas com drone, produzimos conteúdo que engaja e vende.
          </p>

          <a
            href="#contato"
            className="neu-btn-primary py-3.5 px-6 font-bold text-white text-sm inline-flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" /> Solicitar Orçamento de Vídeo
          </a>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:gap-24 pt-[80vh]">
            {/* Left Column */}
            <div ref={leftColRef} className="pointer-events-auto flex flex-col items-center">
              {items.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[4/3] w-full max-w-[360px] rounded-3xl overflow-hidden cursor-pointer group mb-20 neu-card p-3"
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                      src={item.image}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = item.fallback;
                      }}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md border border-white/10 text-white">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="text-[11px] text-[#FF6B00] font-semibold uppercase tracking-wider block mb-0.5">
                        {item.category}
                      </span>
                      <h3 className="text-base font-display font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div ref={rightColRef} className="pointer-events-auto flex flex-col items-center mt-24">
              {items.slice(3, 6).map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[4/3] w-full max-w-[360px] rounded-3xl overflow-hidden cursor-pointer group mb-20 neu-card p-3"
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                      src={item.image}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = item.fallback;
                      }}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md border border-white/10 text-white">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="text-[11px] text-[#8B5CF6] font-semibold uppercase tracking-wider block mb-0.5">
                        {item.category}
                      </span>
                      <h3 className="text-base font-display font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExplorations;
