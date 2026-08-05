import React, { useState } from 'react';
import {
  Share2,
  TrendingUp,
  Globe,
  Cpu,
  Zap,
  Palette,
  Video,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

const SOLUTIONS = [
  {
    num: '01',
    icon: <Share2 className="w-6 h-6" />,
    title: 'Gerenciamento de Redes Sociais',
    tag: 'Engajamento & Presença Digital',
    desc: 'Planejamento estratégico, linha editorial autoral, criação visual e gestão completa da presença da sua marca no Instagram, TikTok e Facebook.',
    features: ['Design Visual Autoral', 'Linha Editorial Estratégica', 'Gestão de Comunidade'],
    accent: '#FF6B00',
    gradientFrom: 'from-[#FF6B00]/10',
    span: 'col-span-1',
  },
  {
    num: '02',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Tráfego Pago (Google & Meta Ads)',
    tag: 'Anúncios & Alta Performance',
    desc: 'Campanhas de anúncios otimizadas diariamente no Google Ads e Meta Ads focadas na captação diária de clientes qualificados.',
    features: ['Google Search & Display Ads', 'Meta Ads (Instagram & Facebook)', 'Otimização Diária de ROAS'],
    accent: '#8B5CF6',
    gradientFrom: 'from-[#8B5CF6]/10',
    span: 'col-span-1',
  },
  {
    num: '03',
    icon: <Globe className="w-6 h-6" />,
    title: 'Criação de Website',
    tag: 'Presença Digital Robusta',
    desc: 'Websites institucionais e landing pages modernas, ultra-rápidas e com foco em conversão.',
    features: ['Design Responsivo', 'Carregamento Ultra-rápido', 'SEO de Ponta'],
    accent: '#FF6B00',
    gradientFrom: 'from-[#FF6B00]/10',
    span: 'col-span-1',
  },
  {
    num: '04',
    icon: <Cpu className="w-6 h-6" />,
    title: 'Sistemas & Automação B2B',
    tag: 'Gestão & Atendimento Inteligente',
    desc: 'Sistemas sob medida para automação de atendimento via WhatsApp, CRM e gestão de pequenos negócios.',
    features: ['Automação WhatsApp & Chatbots', 'CRM & Controle de Leads', 'Painel de Gestão'],
    accent: '#8B5CF6',
    gradientFrom: 'from-[#8B5CF6]/10',
    span: 'col-span-1',
  },
  {
    num: '05',
    icon: <Palette className="w-6 h-6" />,
    title: 'Design Gráfico & Painéis LED',
    tag: 'Artes Profissionais & Mídias de Impacto',
    desc: 'Criação visual profissional para mídias digitais, materiais impressos e artes para painéis de LED de alta resolução.',
    features: ['Artes para Feed & Stories', 'Painéis LED Comerciais', 'Material Gráfico & Impressão'],
    accent: '#FF6B00',
    gradientFrom: 'from-[#FF6B00]/10',
    span: 'col-span-1',
  },
  {
    num: '06',
    icon: <Video className="w-6 h-6" />,
    title: 'Vídeos & Drone 4K',
    tag: 'Produção Audiovisual Completa',
    desc: 'Gravações institucionais em estúdio ou campo, combinadas com filmagens aéreas de drone em 4K e edição profissional.',
    features: ['Gravações Institucionais', 'Imagens Aéreas Drone 4K', 'Edição & Color Grading'],
    accent: '#8B5CF6',
    gradientFrom: 'from-[#8B5CF6]/10',
    span: 'col-span-1',
  },
  {
    num: '07',
    icon: <Zap className="w-6 h-6" />,
    title: 'Automação de Blogs & SEO',
    tag: 'Conteúdo Inteligente & Google',
    desc: 'Sistemas automatizados de produção e publicação contínua de artigos otimizados para posicionar sua empresa no topo do Google.',
    features: ['Publicação Automática', 'Conteúdo Estratégico', 'Ranqueamento Orgânico'],
    accent: '#FF6B00',
    gradientFrom: 'from-[#FF6B00]/10',
    span: 'col-span-1',
  },
];

export default function ServicesBento() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="relative py-28 bg-[var(--bg)] overflow-hidden">
      {/* Ambient Mesh Glow Orbs */}
      <div className="mesh-orb-orange top-10 -left-20" />
      <div className="mesh-orb-purple bottom-10 -right-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-5">
            NOSSOS SERVIÇOS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[var(--text)] mb-5 leading-tight">
            Soluções completas para <br />
            <span className="text-gradient">impulsionar sua empresa</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Passe o mouse sobre cada serviço para descobrir como podemos transformar o seu negócio.
          </p>
        </div>

        {/* Bento Grid 3-col Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {SOLUTIONS.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                className={`${item.span} relative group cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`
                    relative h-full rounded-3xl overflow-hidden
                    glass-card
                    transition-all duration-500 ease-out
                    ${isHovered ? 'scale-[1.02] shadow-2xl' : 'scale-100'}
                  `}
                  style={{
                    borderColor: isHovered ? `${item.accent}40` : 'rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Hover Reveal Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradientFrom} to-transparent transition-opacity duration-500 pointer-events-none`}
                    style={{ opacity: isHovered ? 1 : 0 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between min-h-[260px]">
                    <div>
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500"
                          style={{
                            backgroundColor: isHovered ? `${item.accent}20` : 'rgba(255,255,255,0.04)',
                            color: isHovered ? item.accent : '#9CA3AF',
                          }}
                        >
                          {item.icon}
                        </div>
                        <span
                          className="font-display font-extrabold text-2xl transition-colors duration-500"
                          style={{ color: isHovered ? `${item.accent}60` : 'rgba(255,255,255,0.08)' }}
                        >
                          {item.num}
                        </span>
                      </div>

                      {/* Tag Badge */}
                      <div
                        className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 transition-all duration-500"
                        style={{
                          backgroundColor: isHovered ? `${item.accent}20` : 'rgba(255,255,255,0.04)',
                          color: isHovered ? item.accent : '#9CA3AF',
                        }}
                      >
                        {item.tag}
                      </div>

                      {/* Title */}
                      <h3
                        className="font-display font-bold text-lg sm:text-xl text-white mb-2 transition-colors duration-500 leading-snug"
                        style={{ color: isHovered ? '#FFFFFF' : '#E5E7EB' }}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                        {item.desc}
                      </p>

                      {/* Features — Revealed on Hover */}
                      <div
                        className="space-y-2 overflow-hidden transition-all duration-500 ease-out"
                        style={{
                          maxHeight: isHovered ? '200px' : '0px',
                          opacity: isHovered ? 1 : 0,
                          marginBottom: isHovered ? '16px' : '0px',
                        }}
                      >
                        <div className="pt-3 border-t border-white/10 space-y-2">
                          {item.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2 text-xs font-medium text-white"
                              style={{
                                transitionDelay: `${fIdx * 80}ms`,
                                transform: isHovered ? 'translateX(0)' : 'translateX(-12px)',
                                opacity: isHovered ? 1 : 0,
                                transition: 'all 400ms ease-out',
                              }}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: item.accent }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer CTA — Revealed on Hover */}
                    <div
                      className="flex items-center justify-between pt-4 border-t transition-all duration-500"
                      style={{
                        borderColor: isHovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
                        opacity: isHovered ? 1 : 0.5,
                      }}
                    >
                      <a
                        href={`https://wa.me/5517991951381?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20servi%C3%A7o%3A%20${encodeURIComponent(item.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-300"
                        style={{ color: isHovered ? item.accent : '#6B7280' }}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Solicitar Orçamento</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
