import React from 'react';
import {
  Globe,
  Share2,
  TrendingUp,
  Palette,
  Video,
  MessageCircle,
  ArrowUpRight,
  Cpu,
  Zap,
} from 'lucide-react';
import Video3DCoverflow from '../components/Video3DCoverflow';
import ArtPortfolioGallery from '../components/ArtPortfolioGallery';
import WebsitesShowcase from '../components/WebsitesShowcase';
import SystemsShowcase from '../components/SystemsShowcase';

interface PitchDeckPageProps {
  onGoHome?: () => void;
}

const SERVICES = [
  { icon: <Share2 className="w-5 h-5 text-[#FF6B00]" />, title: '01. Gestão de Redes Sociais', desc: 'Linha editorial autoral, design estratégico e presença diária no Instagram/TikTok.' },
  { icon: <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />, title: '02. Tráfego Pago (Google & Meta Ads)', desc: 'Campanhas focadas em ROAS e geração diária de leads qualificados.' },
  { icon: <Globe className="w-5 h-5 text-[#FF6B00]" />, title: '03. Criação de Websites & Landing Pages', desc: 'Sites ultra-rápidos, responsivos e otimizados para mecanismos de busca (SEO).' },
  { icon: <Cpu className="w-5 h-5 text-[#8B5CF6]" />, title: '04. Automação B2B & CRM WhatsApp', desc: 'Atendimento automatizado inteligente, integração de CRM e controle de leads.' },
  { icon: <Palette className="w-5 h-5 text-[#FF6B00]" />, title: '05. Design Gráfico & Painéis LED', desc: 'Criação visual profissional para mídias digitais, impressos e painéis de LED comerciais.' },
  { icon: <Video className="w-5 h-5 text-[#8B5CF6]" />, title: '06. Vídeos & Drone 4K', desc: 'Gravações institucionais em estúdio ou campo combinadas com filmagens aéreas de drone em 4K.' },
  { icon: <Zap className="w-5 h-5 text-[#FF6B00]" />, title: '07. Automação de Blogs & SEO', desc: 'Sistemas automatizados de publicação contínua de conteúdo otimizado para o Google.' },
];

export default function PitchDeckPage({ onGoHome }: PitchDeckPageProps) {
  const whatsappUrl = "https://wa.me/5517991951381?text=Ol%C3%A1%2C%20acessei%20o%20portf%C3%B3lio%20da%20Amplifica%20Group%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!";

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#FF6B00] selection:text-white pt-10 pb-20">
      {/* Ambient Glow Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#FF6B00]/15 via-[#8B5CF6]/15 to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16">
        
        {/* Clean Direct Top Bar (NO Menu) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl neu-well flex items-center justify-center p-1.5">
              <img src="/logo-new.png" alt="Amplifica Group" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-widest text-white block">AMPLIFICA GROUP</span>
              <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider block">Portfólio Oficial & Lista de Serviços</span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 1. Lista Pura dos 7 Serviços */}
        <div className="space-y-6">
          <div className="border-l-4 border-[#FF6B00] pl-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wider">Lista de Serviços</h2>
            <p className="text-zinc-400 text-xs sm:text-sm">Nossas 7 soluções de marketing, design, tecnologia e audiovisual</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i} className="p-5 rounded-2xl neu-well space-y-2 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-white/10">{s.icon}</div>
                  <h3 className="font-bold text-sm text-white">{s.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pl-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Nossos Sistemas Proprietários (Planner & AdPilot) */}
        <div className="border-t border-white/10 pt-12">
          <SystemsShowcase />
        </div>

        {/* 3. Portfólio Completo dos 5 Websites Entregues */}
        <div className="border-t border-white/10 pt-12">
          <WebsitesShowcase />
        </div>

        {/* 4. Portfólio de Design Gráfico (14 Artes Autorais) */}
        <div className="border-t border-white/10 pt-12">
          <ArtPortfolioGallery />
        </div>

        {/* 5. Portfólio Audiovisual Completo (67 Vídeos & Drone 4K) */}
        <div className="border-t border-white/10 pt-12 space-y-4">
          <div className="border-l-4 border-[#8B5CF6] pl-4 mb-6">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wider">Portfólio Audiovisual & Drone 4K</h2>
            <p className="text-zinc-400 text-xs sm:text-sm">67 produções de vídeo de alta definição por @recwerikoliveira</p>
          </div>
          <Video3DCoverflow />
        </div>

        {/* Clean Direct Bottom Action */}
        <div className="text-center pt-10 border-t border-white/10 space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Solicite um Orçamento Direto</h2>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-[0_10px_35px_rgba(37,211,102,0.4)] transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Conversar no WhatsApp: (17) 99195-1381</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
