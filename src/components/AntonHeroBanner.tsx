import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function AntonHeroBanner() {
  return (
    <section className="relative w-full h-screen min-h-screen bg-[#171e19] text-[#E0E5EC] flex flex-col justify-between p-8 md:p-16 overflow-hidden">
      {/* Two floating, blurred circles (Sage & Soft Blue) at 20% opacity */}
      <div className="absolute top-1/6 left-12 w-96 h-96 bg-[#8A9A86] opacity-20 blur-[120px] rounded-full pointer-events-none animate-float" />
      <div className="absolute bottom-1/6 right-12 w-96 h-96 bg-[#7A9A9E] opacity-20 blur-[120px] rounded-full pointer-events-none animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Top Header Placeholder / Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8AF9F]">
          AMPLIFICA MARKETING • MANIFESTO
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A86]">
          EST. 2026
        </div>
      </div>

      {/* Central Text: Anton font, size 18vw, leading 0.85, uppercase */}
      <div className="relative z-10 my-auto flex flex-col justify-center select-none py-4">
        <h1 className="font-['Anton'] font-normal text-[18vw] leading-[0.85] uppercase tracking-tight text-white transition-all">
          AMPLIFICA
        </h1>
        <h1 className="font-['Anton'] font-normal text-[18vw] leading-[0.85] uppercase tracking-tight text-outline transition-all">
          MARKETING
        </h1>
      </div>

      {/* Bottom Row */}
      <div className="relative z-10 flex items-end justify-between gap-6 pt-6 border-t border-[#8A9A86]/20">
        {/* Left: Small uppercase Taupe text (max-width 320px) */}
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#B8AF9F] max-w-[320px] leading-relaxed">
          Transformando empresas em marcas fortes e dominantes através de estratégia, tráfego e performance visual.
        </p>

        {/* Right: Bouncing arrow icon in a circular border */}
        <a
          href="#sobre"
          className="w-14 h-14 rounded-full border border-[#8A9A86]/40 flex items-center justify-center text-[#8A9A86] hover:text-white hover:border-[#8A9A86] transition-colors shrink-0 group"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
}
