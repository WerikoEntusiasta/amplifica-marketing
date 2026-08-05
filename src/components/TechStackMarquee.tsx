import React from 'react';
import {
  TrendingUp,
  Globe,
  Video,
  MessageCircle,
  Share2,
  Zap,
  CheckCircle,
} from 'lucide-react';

const TECH_ITEMS = [
  { name: 'Google Ads', category: 'Tráfego Pago', icon: <TrendingUp className="w-4 h-4 text-[#FF6B00]" /> },
  { name: 'Meta Ads (Instagram & FB)', category: 'Anúncios de Alta Performance', icon: <Share2 className="w-4 h-4 text-[#8B5CF6]" /> },
  { name: 'Drone 4K Filmagens', category: 'Audiovisual Aéreo', icon: <Video className="w-4 h-4 text-[#FF8A33]" /> },
  { name: 'Sistemas React & Web', category: 'Websites Ultra-Rápidos', icon: <Globe className="w-4 h-4 text-[#8B5CF6]" /> },
  { name: 'Automação WhatsApp', category: 'Atendimento B2B', icon: <MessageCircle className="w-4 h-4 text-[#25D366]" /> },
  { name: 'TikTok Ads', category: 'Vídeos Virais', icon: <Zap className="w-4 h-4 text-[#FF6B00]" /> },
  { name: 'Google SEO Organico', category: 'Ranqueamento no Topo', icon: <CheckCircle className="w-4 h-4 text-[#8B5CF6]" /> },
];

export default function TechStackMarquee() {
  return (
    <div className="relative w-full py-8 bg-[#050507] border-y border-[var(--border-subtle)] overflow-hidden">
      {/* Subtle Side Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {[...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 py-3 mx-3 rounded-full neu-well border border-white/5 whitespace-nowrap group hover:border-[#FF6B00]/40 transition-colors"
          >
            <div className="p-1.5 rounded-full bg-white/5 flex items-center justify-center">
              {item.icon}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-medium">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
