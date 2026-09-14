import React from 'react';
import { Cpu, ArrowUpRight, Calendar, Zap, ShieldCheck } from 'lucide-react';
import BorderGlow from './BorderGlow';

export interface SystemItem {
  id: string;
  name: string;
  url: string;
  domain: string;
  badge: string;
  price: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accent: string;
}

const SYSTEMS: SystemItem[] = [
  {
    id: 'planner',
    name: 'Amplifica Planner',
    url: 'https://planner.amplificagroup.com/',
    domain: 'planner.amplificagroup.com',
    badge: 'Planejador de Conteúdo',
    price: 'A partir de R$ 15,00',
    title: 'Gestão Editorial & Organização de Conteúdo para Agências',
    description: 'Plataforma completa para planejamento de postagens, aprovação de materiais visuais e organização da linha editorial para marcas e agências parceiras.',
    features: ['Calendário Editorial Inteligente', 'Aprovação de Artes em 1 Clique', 'Organização por Cliente', 'Plano para Revenda de Agências'],
    icon: <Calendar className="w-6 h-6 text-[#FF6B00]" />,
    accent: '#FF6B00',
  },
];

export default function SystemsShowcase() {
  return (
    <section id="sistemas" className="relative py-16 bg-[var(--bg)] overflow-hidden">
      {/* Mesh Orbs */}
      <div className="mesh-orb-orange top-1/4 -left-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-4">
              <Cpu className="w-4 h-4 text-[#FF6B00]" /> SISTEMA DE GESTÃO PARA AGÊNCIAS
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text)] leading-tight">
              Amplifica Planner <br />
              <span className="text-gradient">a partir de R$ 15,00</span>
            </h2>
          </div>

          <p className="text-[var(--text-muted)] text-sm max-w-md leading-relaxed">
            Plataforma própria criada para agências parceiras organizarem entregas, cronogramas e aprovações de clientes com máxima eficiência.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="max-w-3xl">
          {SYSTEMS.map((sys) => (
            <BorderGlow
              key={sys.id}
              edgeSensitivity={35}
              glowColor="24 100 50"
              backgroundColor="var(--bg)"
              borderRadius={24}
              glowRadius={35}
              glowIntensity={1.1}
              colors={['#FF6B00', '#FF8A33', '#8B5CF6']}
            >
              <div className="p-8 sm:p-10 h-full flex flex-col justify-between space-y-8 bg-zinc-900/50 rounded-[22px] group">
                <div className="space-y-6">
                  {/* Top Badge & Icon */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl neu-well flex items-center justify-center">
                        {sys.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#FF8A33] transition-colors">
                          {sys.name}
                        </h3>
                        <span className="text-xs font-semibold text-zinc-400 block">
                          {sys.domain}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">
                        {sys.price}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-bold text-base text-zinc-200 leading-snug">
                    {sys.title}
                  </h4>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {sys.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {sys.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-300">
                        <ShieldCheck className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit Button */}
                <a
                  href={sys.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-6 py-4 rounded-2xl neu-btn text-xs font-bold text-white hover:text-[#FF6B00] transition-all group/btn"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#FF6B00]" />
                    <span>Acessar {sys.name} ({sys.domain})</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
