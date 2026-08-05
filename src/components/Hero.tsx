import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';
import TubesBackground from './TubesBackground';
import GlowButton from './GlowButton';

const SPECIALTIES = [
  'Marketing de Conteúdo',
  'Gestão de Redes Sociais',
  'Tráfego Pago (Google & Meta)',
  'Criação de Landing Pages',
  'Gravação de Vídeo Solo & Drone',
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [specIndex, setSpecIndex] = useState(0);

  // Ensure video plays smoothly
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }, []);

  // Cycling Specialty Words
  useEffect(() => {
    const interval = setInterval(() => {
      setSpecIndex((prev) => (prev + 1) % SPECIALTIES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.hero-badge-el',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    ).fromTo(
      '.hero-title-el',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.4'
    ).fromTo(
      '.hero-sub-el',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <TubesBackground className="min-h-screen">
        {/* Motion Video Layer with Theme Adaptive Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              opacity: 'var(--video-opacity)',
              filter: 'var(--video-filter)',
            }}
            className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-105 transition-all duration-500"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: 'linear-gradient(to bottom, var(--hero-overlay-start), var(--hero-overlay-mid), var(--hero-overlay-end))',
            }}
          />
        </div>

        {/* Hero Glow Orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#FF6B00]/15 rounded-full blur-[120px] pointer-events-none animate-orb-1" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[120px] pointer-events-none animate-orb-2" />

        {/* Center Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-between text-center px-4 pt-28 pb-12 max-w-4xl mx-auto">
          {/* Main Hero Elements */}
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Badge */}
            <div className="hero-badge-el pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-xs font-bold text-[var(--orange)] tracking-wider uppercase">
                Agência de Marketing Digital Completa
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-title-el font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight text-[var(--text)] mb-6">
              Amplifique seus <br />
              <span className="text-gradient">resultados digitais</span>
            </h1>

            {/* Cycling Specialty */}
            <div className="hero-sub-el text-base sm:text-lg md:text-xl text-[var(--text-muted)] mb-6 h-8 flex items-center justify-center gap-2 font-medium">
              <span>Especialistas em</span>
              <span
                key={specIndex}
                className="text-gradient font-bold animate-[role-fade-in_0.4s_ease-out] inline-block"
              >
                {SPECIALTIES[specIndex]}
              </span>
            </div>

            {/* Subtitle */}
            <p className="hero-sub-el text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed">
              Transformamos marcas em referências no mercado através de estratégias orientadas a dados, marketing de conteúdo magnético e gestão de anúncios focada em ROI.
            </p>

            {/* CTA Buttons */}
            <div className="hero-sub-el pointer-events-auto flex flex-wrap items-center justify-center gap-4 mb-12">
              <GlowButton asAnchor href="https://wa.me/5517991951381?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Amplifica%20Marketing%20e%20quero%20solicitar%20um%20or%C3%A7amento!">
                Falar no WhatsApp
              </GlowButton>

              <a
                href="#servicos"
                className="neu-btn px-8 py-4 font-semibold text-[var(--text)] flex items-center gap-2"
              >
                <span>Nossos Serviços</span>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="hero-sub-el pointer-events-auto grid grid-cols-3 gap-6 sm:gap-12 px-8 py-5 neu-card">
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient">150+</div>
                <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium mt-1">Clientes Atendidos</div>
              </div>
              <div className="border-x border-zinc-400/20 px-4 sm:px-8">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient">500+</div>
                <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium mt-1">Projetos Entregues</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient">98%</div>
                <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium mt-1">Satisfação Garantida</div>
              </div>
            </div>
          </div>

          {/* Interactive Hint & Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 pt-6">
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium animate-pulse">
              <MousePointer2 className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Mova o cursor • Clique para alternar cores dos tubos 3D</span>
            </div>
            <div className="w-px h-6 bg-zinc-400/30 relative overflow-hidden mt-1">
              <div className="absolute w-full h-3 accent-gradient animate-scroll-down" />
            </div>
          </div>
        </div>
      </TubesBackground>
    </section>
  );
}
