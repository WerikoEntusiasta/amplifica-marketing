import React from 'react';
import {
  Globe,
  Share2,
  TrendingUp,
  Palette,
  Video,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Clock,
  HelpCircle,
} from 'lucide-react';
import Video3DCoverflow from '../components/Video3DCoverflow';
import ArtPortfolioGallery from '../components/ArtPortfolioGallery';
import WebsitesShowcase from '../components/WebsitesShowcase';
import SystemsShowcase from '../components/SystemsShowcase';

interface PitchDeckPageProps {
  onGoHome?: () => void;
}

const SERVICES = [
  { icon: <Share2 className="w-5 h-5 text-[#FF6B00]" />, title: 'Gestão de Redes Sociais', desc: 'Linha editorial autoral, design estratégico e presença diária no Instagram/TikTok.' },
  { icon: <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />, title: 'Tráfego Pago (Google & Meta Ads)', desc: 'Campanhas focadas em ROAS e geração diária de leads qualificados.' },
  { icon: <Globe className="w-5 h-5 text-[#FF6B00]" />, title: 'Criação de Websites & Landing Pages', desc: 'Sites ultra-rápidos, responsivos e otimizados para mecanismos de busca (SEO).' },
  { icon: <Cpu className="w-5 h-5 text-[#8B5CF6]" />, title: 'Automação B2B & CRM WhatsApp', desc: 'Atendimento automatizado inteligente, integração de CRM e controle de leads.' },
  { icon: <Palette className="w-5 h-5 text-[#FF6B00]" />, title: 'Design Gráfico & Painéis LED', desc: 'Criação visual profissional para mídias digitais, impressos e painéis de LED comerciais.' },
  { icon: <Video className="w-5 h-5 text-[#8B5CF6]" />, title: 'Vídeos & Drone 4K', desc: 'Gravações institucionais em estúdio ou campo combinadas com filmagens aéreas de drone em 4K.' },
  { icon: <Zap className="w-5 h-5 text-[#FF6B00]" />, title: 'Automação de Blogs & SEO', desc: 'Sistemas automatizados de publicação contínua de conteúdo otimizado para o Google.' },
];

const METRICS = [
  { value: '+150', label: 'Clientes Atendidos', icon: <Users className="w-5 h-5 text-[#FF6B00]" /> },
  { value: '+500', label: 'Projetos Entregues', icon: <Award className="w-5 h-5 text-[#8B5CF6]" /> },
  { value: '98%', label: 'Taxa de Retenção & Satisfação', icon: <ShieldCheck className="w-5 h-5 text-[#FF6B00]" /> },
  { value: '< 5min', label: 'Tempo Médio de Atendimento', icon: <Clock className="w-5 h-5 text-[#8B5CF6]" /> },
];

const FAQS = [
  {
    q: 'Como funciona o processo de contratação e início dos projetos?',
    a: 'Após a reunião inicial de alinhamento e envio da proposta personalizada, iniciamos a etapa de onboarding em até 48 horas úteis para coleta de acessos e briefing.',
  },
  {
    q: 'Os websites desenvolvidos possuem otimização de SEO e velocidade?',
    a: 'Sim! Todos os nossos websites e landing pages são desenvolvidos com tecnologia React / Vite de ultra velocidade, metadados SEO, Schema.org em JSON-LD e pontuação alta no Google PageSpeed.',
  },
  {
    q: 'Qual é o diferencial das plataformas Amplifica Planner e AdPilot?',
    a: 'São softwares proprietários desenvolvidos pela nossa própria equipe. O Amplifica Planner facilita a organização e aprovação de conteúdo, enquanto o Amplifica AdPilot acompanha o tráfego pago com automação de métricas.',
  },
  {
    q: 'Atendem empresas de quais regiões do Brasil?',
    a: 'Atendemos clientes em todo o Brasil (São Paulo, estado de SP e demais capitais/regiões), com reuniões virtuais, atendimento WhatsApp direto e gravações presenciais conforme o projeto.',
  },
];

export default function PitchDeckPage({ onGoHome }: PitchDeckPageProps) {
  const whatsappUrl = "https://wa.me/5517991951381?text=Ol%C3%A1%2C%20acessei%20a%20landing%20page%20de%20apresenta%C3%A7%C3%A3o%20da%20Amplifica%20Group%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!";

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#FF6B00] selection:text-white pt-24 pb-20">
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#FF6B00]/15 via-[#8B5CF6]/15 to-transparent blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-24">
        
        {/* Hero Section — Landing Page Pitch */}
        <div className="text-center space-y-8 max-w-4xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#FF6B00]" /> APRESENTAÇÃO INSTITUCIONAL & LANDING PAGE DE CASES
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-tight">
            Ecossistema Completo de <br />
            <span className="text-gradient">Marketing, Performance & Tecnologia</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Aceleramos o crescimento de marcas e indústrias através de tráfego pago, desenvolvimento web de alta conversão, produções audiovisuais com drone 4K e software proprietário.
          </p>

          {/* Direct Hero CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-[0_10px_35px_rgba(37,211,102,0.45)] transition-all hover:scale-105 flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Falar no WhatsApp com o Especialista</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            {onGoHome && (
              <button
                onClick={onGoHome}
                className="px-7 py-4.5 rounded-full neu-btn text-xs sm:text-sm font-bold text-zinc-300 hover:text-white flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-[#FF6B00]" />
                <span>Ver Site Institucional</span>
              </button>
            )}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            {METRICS.map((m, i) => (
              <div key={i} className="p-5 rounded-2xl neu-well flex flex-col items-center justify-center space-y-1">
                <div className="mb-1">{m.icon}</div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-white">{m.value}</span>
                <span className="text-[11px] font-semibold text-zinc-400 text-center">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 1. Soluções & Serviços */}
        <div className="space-y-8 pt-6">
          <div className="border-l-4 border-[#FF6B00] pl-4">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">Nossos 7 Pilares de Atuação</h2>
            <p className="text-zinc-400 text-sm">Soluções integradas executadas por equipe multidisciplinar</p>
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

        {/* 2. Sistemas Proprietários (Amplifica Planner & Amplifica AdPilot) */}
        <div className="space-y-6 border-t border-white/10 pt-16">
          <SystemsShowcase />
        </div>

        {/* 3. Portfólio Audiovisual Completo (67 Vídeos & Drone 4K) */}
        <div className="space-y-6 border-t border-white/10 pt-16">
          <div className="border-l-4 border-[#8B5CF6] pl-4 mb-8">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">Portfólio Audiovisual & Drone 4K</h2>
            <p className="text-zinc-400 text-sm">Produções de alta definição por @recwerikoliveira para campanhas e institucionais</p>
          </div>
          <Video3DCoverflow />
        </div>

        {/* 4. Portfólio de Design Gráfico Completo (14 Artes + Filtros + Lightbox Zoom) */}
        <div className="space-y-6 border-t border-white/10 pt-16">
          <ArtPortfolioGallery />
        </div>

        {/* 5. Showcase Completo dos 5 Websites Entregues */}
        <div className="space-y-6 border-t border-white/10 pt-16">
          <WebsitesShowcase />
        </div>

        {/* 6. FAQ — Perguntas Frequentes */}
        <div className="space-y-8 border-t border-white/10 pt-16">
          <div className="border-l-4 border-[#FF6B00] pl-4">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">Dúvidas Frequentes (FAQ)</h2>
            <p className="text-zinc-400 text-sm">Respostas para as principais perguntas sobre contratação e execução</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl neu-well space-y-2">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-sm text-white">{faq.q}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Conversion CTA Bar */}
        <div className="text-center space-y-6 pt-16 border-t border-white/10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#25D366] font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> DIAGNÓSTICO E PROPOSTA EM ATÉ 24 HORAS
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">Pronto para amplificar seus resultados?</h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Entre em contato direto via WhatsApp e converse com nossa equipe estratégica para receber um planejamento personalizado.
          </p>
          
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-[0_10px_40px_rgba(37,211,102,0.45)] transition-all hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
              <span>Solicitar Atendimento no WhatsApp: (17) 99195-1381</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
