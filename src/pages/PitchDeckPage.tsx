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
  ShoppingBag,
  Search,
  Tag,
  Sparkles,
  Camera,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import Video3DCoverflow from '../components/Video3DCoverflow';
import ArtPortfolioGallery from '../components/ArtPortfolioGallery';
import WebsitesShowcase from '../components/WebsitesShowcase';
import SystemsShowcase from '../components/SystemsShowcase';

interface PitchDeckPageProps {
  onGoHome?: () => void;
}

const REVENTA_SERVICES = [
  {
    num: '01',
    icon: <Share2 className="w-5 h-5 text-[#FF6B00]" />,
    title: 'Gestão de Redes Sociais',
    price: 'a partir de R$ 200,00',
    desc: 'Linha editorial autoral, criação de artes estratégicas e presença diária para seus clientes.',
    tag: 'Mensal por Cliente',
  },
  {
    num: '02',
    icon: <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />,
    title: 'Tráfego Pago (Google & Meta Ads)',
    price: 'a partir de R$ 500,00',
    desc: 'Gestão e otimização de anúncios com foco em conversão e geração diária de leads qualificados.',
    tag: 'Mensal por Cliente',
  },
  {
    num: '03',
    icon: <Globe className="w-5 h-5 text-[#FF6B00]" />,
    title: 'Website Simples (Estilo Landing Page)',
    price: 'R$ 1.000,00',
    desc: 'Landing page responsiva de alta velocidade, ultra-moderna e otimizada para conversão.',
    tag: 'Projeto Único',
  },
  {
    num: '04',
    icon: <ShoppingBag className="w-5 h-5 text-[#8B5CF6]" />,
    title: 'Website E-Commerce ou Site Completo',
    price: 'R$ 2.000,00',
    desc: 'Loja virtual completa ou website institucional robusto com múltiplos módulos e páginas.',
    tag: 'Projeto Único',
  },
  {
    num: '05',
    icon: <Cpu className="w-5 h-5 text-[#FF6B00]" />,
    title: 'Automação B2B e CRM de WhatsApp',
    price: 'a partir de R$ 500,00',
    desc: 'Atendimento automatizado inteligente via WhatsApp, integração de CRM e funil de atendimento.',
    tag: 'Implementação / Mensal',
  },
  {
    num: '06',
    icon: <Palette className="w-5 h-5 text-[#8B5CF6]" />,
    title: 'Artes para Redes Sociais ou Painéis de LED',
    price: 'a partir de R$ 50,00',
    desc: 'Design gráfico autoral em alta resolução para feed, stories, impressos e painéis de LED comerciais.',
    tag: 'Por Unidade / Pacote',
  },
  {
    num: '07',
    icon: <Video className="w-5 h-5 text-[#FF6B00]" />,
    title: 'Vídeo Celular ou Drone 4K',
    price: 'a partir de R$ 250,00',
    desc: 'Gravações em alta definição para reels/comerciais e capturas aéreas institucionais em drone 4K.',
    tag: 'Por Produção',
  },
  {
    num: '08',
    icon: <Search className="w-5 h-5 text-[#8B5CF6]" />,
    title: 'SEO & Otimização no Google (Sites IA)',
    price: 'R$ 450,00',
    desc: 'Indexação profissional no Google, estrutura de sitemap, metadados e correção de SEO para sites criados com IA.',
    tag: 'Otimização Única',
  },
];

const PACOTES_ARTE = [
  { freq: '1 por semana', price: 'R$ 100,00', period: '/mês', detail: '4 artes profissionais por mês para feed/stories' },
  { freq: '2 por semana', price: 'R$ 200,00', period: '/mês', detail: '8 artes profissionais por mês para feed/stories' },
  { freq: '3 por semana', price: 'R$ 300,00', period: '/mês', detail: '12 artes profissionais por mês para feed/stories' },
];

const PACOTES_VIDEO = [
  {
    title: 'Pacote Drone',
    price: 'R$ 300,00',
    desc: 'Até 40min de gravação com 1 único drone (somente ambiente externo).',
    tag: 'Filmagem Aérea',
  },
  {
    title: 'Pacote Storymaker (Reels)',
    price: 'R$ 200,00',
    desc: '1 vídeo gravado e editado para Reels (não cobre eventos).',
    tag: '1 Vídeo Reels',
  },
  {
    title: 'Pacote Storymaker Evento (Por Hora)',
    price: 'R$ 100,00 / hora',
    desc: 'Mínimo de 4 horas de cobertura em eventos. (Abaixo de 4h = valor fixo de R$ 300,00).',
    tag: 'Cobertura de Evento',
  },
];

export default function PitchDeckPage({ onGoHome }: PitchDeckPageProps) {
  const whatsappUrl = "https://wa.me/5517991951381?text=Ol%C3%A1%2C%20sou%20de%20uma%20ag%C3%AAncia%20e%20gostaria%20de%20revender%20os%20servi%C3%A7os%20da%20Amplifica%20Group!";

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#FF6B00] selection:text-white pt-10 pb-20">
      {/* Ambient Glow Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-r from-[#FF6B00]/15 via-[#8B5CF6]/15 to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl neu-well flex items-center justify-center p-1.5">
              <img src="/logo-new.png" alt="Amplifica Group" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-widest text-white block">AMPLIFICA GROUP</span>
              <span className="text-[10px] font-extrabold text-[#FF6B00] uppercase tracking-wider block">Tabela B2B de Revenda para Agências</span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-white text-[#25D366]" />
            <span>Quero Revender (Falar no WhatsApp)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Pricing Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-well text-xs text-[#FF6B00] font-bold uppercase tracking-wider">
            <Tag className="w-4 h-4 text-[#FF6B00]" /> PARCERIA & REVENDA WHITE LABEL PARA AGÊNCIAS
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Tabela de Serviços & Preços <br />
            <span className="text-gradient">para Agências Revenderem</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Terceirize a execução de redes sociais, tráfego pago, desenvolvimento web, vídeos e SEO com a infraestrutura da Amplifica Group e aumente a margem da sua agência.
          </p>
        </div>

        {/* 1. Tabela Principal de Serviços & Valores */}
        <div className="space-y-6">
          <div className="border-l-4 border-[#FF6B00] pl-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wider">Tabela Principal de Serviços</h2>
            <p className="text-zinc-400 text-xs sm:text-sm">Valores exclusivos para parceiros e revendedores B2B</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVENTA_SERVICES.map((s) => (
              <div
                key={s.num}
                className="p-6 rounded-2xl neu-well flex flex-col justify-between space-y-4 border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10">
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 neu-well px-2.5 py-0.5 rounded-md uppercase">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-white group-hover:text-[#FF8A33] transition-colors leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Preço de Revenda:</span>
                  <span className="font-display font-extrabold text-lg sm:text-xl text-[#FF6B00] block mt-0.5">
                    {s.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. PACOTES DE ARTES */}
        <div className="space-y-6 border-t border-white/10 pt-12">
          <div className="border-l-4 border-[#8B5CF6] pl-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wider">Pacote de Artes (Mensal)</h2>
            <p className="text-zinc-400 text-xs sm:text-sm">Pacotes recorrentes de design gráfico para redes sociais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACOTES_ARTE.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl neu-well space-y-4 border border-white/10 hover:border-[#8B5CF6]/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-[#8B5CF6]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full neu-well text-[10px] font-bold text-[#8B5CF6] uppercase">
                    Recorrência Mensal
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-white">{p.freq}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{p.detail}</p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-2xl text-[#8B5CF6]">{p.price}</span>
                  <span className="text-xs text-zinc-400">{p.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PACOTES DE VÍDEOS & STORYMAKER */}
        <div className="space-y-6 border-t border-white/10 pt-12">
          <div className="border-l-4 border-[#FF6B00] pl-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wider">Pacotes de Vídeos & Storymaker</h2>
            <p className="text-zinc-400 text-xs sm:text-sm">Filmagens de drone, reels avulsos e cobertura de eventos por hora</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACOTES_VIDEO.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl neu-well space-y-4 border border-white/10 hover:border-[#FF6B00]/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-[#FF6B00]">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full neu-well text-[10px] font-bold text-[#FF8A33] uppercase">
                    {v.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-white">{v.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{v.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="font-display font-extrabold text-2xl text-[#FF6B00]">{v.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Sistema Proprietário (Amplifica Planner a partir de R$ 15,00) */}
        <div className="border-t border-white/10 pt-12">
          <SystemsShowcase />
        </div>

        {/* 5. Portfólio Completo dos 5 Websites Entregues */}
        <div className="border-t border-white/10 pt-12">
          <WebsitesShowcase />
        </div>

        {/* 6. Portfólio Audiovisual Completo (67 Vídeos & Drone 4K) */}
        <div className="border-t border-white/10 pt-12 space-y-4">
          <div className="border-l-4 border-[#8B5CF6] pl-4 mb-6">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wider">Portfólio Audiovisual & Drone 4K</h2>
            <p className="text-zinc-400 text-xs sm:text-sm">67 produções de vídeo de alta definição por @recwerikoliveira para comprovar a qualidade aos seus clientes</p>
          </div>
          <Video3DCoverflow />
        </div>

        {/* 7. Portfólio de Design Gráfico (14 Artes Autorais) */}
        <div className="border-t border-white/10 pt-12">
          <ArtPortfolioGallery />
        </div>

        {/* Bottom CTA for Agencies */}
        <div className="text-center pt-10 border-t border-white/10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-well text-xs text-[#25D366] font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#25D366]" /> SEJA UMA AGÊNCIA PARCEIRA DA AMPLIFICA GROUP
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">Pronto para revender e escalar sua agência?</h2>
          
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-[0_10px_35px_rgba(37,211,102,0.4)] transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Falar com Comercial no WhatsApp: (17) 99195-1381</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
