import React, { useState } from 'react';
import {
  Globe,
  Share2,
  TrendingUp,
  Palette,
  Video,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Zap,
  Phone,
  ShieldCheck,
  Eye,
  X,
  FileText,
} from 'lucide-react';
import BorderGlow from '../components/BorderGlow';

interface PitchDeckPageProps {
  onGoHome?: () => void;
}

const WEBSITES = [
  {
    name: 'Panossi Estruturas Metálicas',
    url: 'https://panossiestruturasmetalicas.com.br/',
    domain: 'panossiestruturasmetalicas.com.br',
    category: 'Engenharia & Estruturas Metálicas',
    description: 'Website de alta conversão para engenharia industrial com foco em captação B2B.',
    image: '/websites/panossi.png',
  },
  {
    name: 'Amplifica Group',
    url: 'https://amplificagroup.com/',
    domain: 'amplificagroup.com',
    category: 'Agência de Marketing & Performance',
    description: 'Plataforma oficial da agência com animações 3D, blog dinâmico e REST API.',
    image: '/websites/amplificagroup.png',
  },
  {
    name: 'Agro Pasi',
    url: 'https://agropasi.com.br/',
    domain: 'agropasi.com.br',
    category: 'Agronegócio & Soluções Agrícolas',
    description: 'Portal institucional para o setor agro, destacando catálogo de implementos.',
    image: '/websites/agropasi.png',
  },
  {
    name: 'Pasilux',
    url: 'https://pasilux.com.br/',
    domain: 'pasilux.com.br',
    category: 'Iluminação & Soluções Elétricas',
    description: 'Apresentação de catálogo corporativo e iluminação de alto padrão.',
  },
  {
    name: 'Fundiferro Formas',
    url: 'https://fundiferroformas.com.br/',
    domain: 'fundiferroformas.com.br',
    category: 'Indústria & Metalurgia',
    description: 'Plataforma industrial para formas metálicas e estruturas com captação direta de leads.',
  },
];

const SERVICES = [
  { icon: <Share2 className="w-5 h-5 text-[#FF6B00]" />, title: 'Gestão de Redes Sociais', desc: 'Linha editorial autoral, design estratégico e presença diária no Instagram/TikTok.' },
  { icon: <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />, title: 'Tráfego Pago (Google & Meta Ads)', desc: 'Campanhas focadas em ROAS e geração diária de leads qualificados.' },
  { icon: <Globe className="w-5 h-5 text-[#FF6B00]" />, title: 'Criação de Websites & Landing Pages', desc: 'Sites ultra-rápidos, responsivos e otimizados para mecanismos de busca (SEO).' },
  { icon: <Cpu className="w-5 h-5 text-[#8B5CF6]" />, title: 'Automação B2B & CRM WhatsApp', desc: 'Atendimento automatizado inteligente, integração de CRM e controle de leads.' },
  { icon: <Palette className="w-5 h-5 text-[#FF6B00]" />, title: 'Design Gráfico & Painéis LED', desc: 'Criação visual profissional para mídias digitais, impressos e painéis de LED comerciais.' },
  { icon: <Video className="w-5 h-5 text-[#8B5CF6]" />, title: 'Vídeos & Drone 4K', desc: 'Gravações institucionais em estúdio ou campo combinadas com filmagens aéreas de drone em 4K.' },
  { icon: <Zap className="w-5 h-5 text-[#FF6B00]" />, title: 'Automação de Blogs & SEO', desc: 'Sistemas automatizados de publicação contínua de conteúdo otimizado para o Google.' },
];

const ART_HIGHLIGHTS = [
  { title: 'Burger & Chopp', category: 'Gastronomia', image: '/portfolio-art/burger-chopp.png' },
  { title: 'Publicidade Monster', category: 'Social Media', image: '/portfolio-art/post-monster.png' },
  { title: 'Flyer Show ao Vivo', category: 'Eventos', image: '/portfolio-art/flyer-douglas-andrade.png' },
  { title: 'Arte Dodge Challenger', category: 'Design Conceitual', image: '/portfolio-art/dodge-challenger.png' },
];

export default function PitchDeckPage({ onGoHome }: PitchDeckPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const whatsappUrl = "https://wa.me/5517991951381?text=Ol%C3%A1%2C%20recebi%20a%20apresenta%C3%A7%C3%A3o%20da%20Amplifica%20Group%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!";

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#FF6B00] selection:text-white pt-24 pb-20">
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#FF6B00]/15 via-[#8B5CF6]/15 to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 space-y-20">
        
        {/* Header / Hero Pitch */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#FF6B00]" /> APRESENTAÇÃO EXECUTIVA & CASES
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-tight">
            Ecossistema de Marketing & <br />
            <span className="text-gradient">Performance Digital Completa</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Transformamos empresas em referências no mercado através de posicionamento estratégico, tráfego pago, desenvolvimento web de alta conversão e produções audiovisuais.
          </p>

          {/* Direct Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-105 flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            {onGoHome && (
              <button
                onClick={onGoHome}
                className="px-6 py-4 rounded-full neu-btn text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-[#FF6B00]" />
                <span>Ver Site Institucional</span>
              </button>
            )}
          </div>
        </div>

        {/* 1. Soluções & Serviços */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#FF6B00] pl-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Nossos 7 Pilares de Atuação</h2>
            <p className="text-zinc-400 text-sm">Soluções integradas executadas por especialistas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl neu-well space-y-3 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10">{s.icon}</div>
                  <h3 className="font-bold text-sm text-white">{s.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Showcase dos 5 Websites Entregues */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#8B5CF6] pl-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Websites & Plataformas Entregues</h2>
            <p className="text-zinc-400 text-sm">Cases reais desenvolvidos para indústrias, agronegócio e varejo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEBSITES.map((site, i) => (
              <BorderGlow key={i} backgroundColor="var(--bg)" borderRadius={20} glowColor="260 85 65">
                <div className="p-6 h-full flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {site.image && (
                      <div
                        onClick={() => setSelectedImage(site.image!)}
                        className="relative w-full h-36 rounded-xl overflow-hidden cursor-pointer border border-white/10 group"
                      >
                        <img src={site.image} alt={site.name} className="w-full h-full object-cover object-top transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    )}
                    <span className="text-[10px] font-bold text-[#FF8A33] uppercase tracking-wider">{site.category}</span>
                    <h3 className="font-bold text-lg text-white">{site.name}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{site.description}</p>
                  </div>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl neu-btn text-xs font-bold text-white hover:text-[#FF6B00] transition-colors"
                  >
                    <span>Acessar {site.domain}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FF6B00]" />
                  </a>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

        {/* 3. Portfólio de Design & Mídias */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#FF6B00] pl-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Design Gráfico & Artes Autorais</h2>
            <p className="text-zinc-400 text-sm">Criatividade de alta definição para campanhas e mídias</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ART_HIGHLIGHTS.map((art, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(art.image)}
                className="group relative h-56 rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              >
                <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[9px] font-bold text-[#FF8A33] uppercase">{art.category}</span>
                  <h4 className="font-bold text-xs text-white">{art.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Plataformas Própria */}
        <div className="p-8 rounded-3xl neu-well border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold uppercase">SISTEMA PRÓPRIO</span>
            <h3 className="font-display font-bold text-2xl text-white">Amplifica Planner — Planejador de Conteúdo</h3>
            <p className="text-zinc-300 text-sm max-w-xl">
              Plataforma desenvolvida para agências e marcas planejarem linhas editoriais e cronogramas de publicação.
            </p>
          </div>

          <a
            href="https://planner.amplificagroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#ff7b1a] text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg flex items-center gap-2"
          >
            <span>Conhecer o Planner</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Final CTA Bar */}
        <div className="text-center space-y-6 pt-10 border-t border-white/10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Vamos construir o futuro da sua marca?</h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Fale diretamente com nossa equipe e receba uma proposta personalizada para o seu segmento.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-[0_10px_40px_rgba(37,211,102,0.45)] transition-all hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
            <span>Falar no WhatsApp: (17) 99195-1381</span>
          </a>
        </div>

      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <img src={selectedImage} alt="Preview" className="max-w-full max-h-[90vh] rounded-2xl border border-white/20 shadow-2xl object-contain" />
        </div>
      )}
    </div>
  );
}
