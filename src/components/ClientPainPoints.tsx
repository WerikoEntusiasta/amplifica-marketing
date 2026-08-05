import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const PAIN_POINTS = [
  {
    problem: 'Sua empresa investe em anúncios mas não vê retorno em vendas (ROI baixo)?',
    solution: 'Criamos campanhas segmentadas com rastreamento de conversão de ponta a ponta e otimização diária de tráfego.',
    tag: 'Tráfego Pago & Performance',
  },
  {
    problem: 'Suas redes sociais parecem fantasma e não geram novos leads todos os dias?',
    solution: 'Desenvolvemos conteúdo magnético, artes autorais e linha editorial alinhada aos desejos do seu comprador.',
    tag: 'Gestão de Redes Sociais',
  },
  {
    problem: 'Seu site antigo é lento, não transmite confiança e os visitantes saem sem comprar?',
    solution: 'Desenhamos Landing Pages Neumórficas de alta conversão otimizadas para carregamento instantâneo e vendas.',
    tag: 'Criação de Landing Pages',
  },
  {
    problem: 'Sua marca não se destaca da concorrência e não possui vídeos profissionais?',
    solution: 'Produzimos conteúdo audiovisual com gravações em estúdio e filmagens aéreas impressionantes com drone 4K.',
    tag: 'Gravação Solo & Drone',
  },
];

export default function ClientPainPoints() {
  return (
    <section className="relative py-28 bg-[var(--bg)] overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-bold mb-4">
            ENTENDA SUA NECESSIDADE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] mb-6 leading-tight">
            Quais destes desafios <br />
            <span className="text-gradient">estão travando seu negócio?</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            Identificamos os gargalos de marketing que impedem sua empresa de escalar e aplicamos a solução exata.
          </p>
        </div>

        {/* Grid of Pain vs Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PAIN_POINTS.map((item, idx) => (
            <div key={idx} className="neu-card p-8 flex flex-col justify-between group">
              <div>
                {/* Header Tag */}
                <div className="inline-block px-3 py-1 rounded-full neu-well text-[11px] font-semibold text-[#FF8A33] mb-6">
                  {item.tag}
                </div>

                {/* Problem */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl neu-well flex items-center justify-center shrink-0 text-red-500">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-red-500 font-bold uppercase tracking-wider block mb-1">O Problema</span>
                    <h3 className="font-display font-bold text-lg text-[var(--text)] leading-snug">{item.problem}</h3>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-4 p-5 rounded-2xl neu-well">
                  <div className="w-10 h-10 rounded-xl neu-well flex items-center justify-center shrink-0 text-emerald-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-500 font-bold uppercase tracking-wider block mb-1">Solução Amplifica</span>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-end">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B00] hover:text-[#FF8A33] transition-colors"
                >
                  <span>Resolver este problema</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
