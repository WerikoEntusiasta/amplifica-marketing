import React from 'react';
import { Search, Compass, Rocket, BarChart2 } from 'lucide-react';

const STEPS = [
  {
    num: '1',
    icon: <Search className="w-5 h-5 text-[#FF6B00]" />,
    title: 'Diagnóstico & Imersão',
    desc: 'Analisamos em profundidade o seu modelo de negócio, público-alvo, concorrência e histórico para identificar oportunidades ocultas.',
  },
  {
    num: '2',
    icon: <Compass className="w-5 h-5 text-[#8B5CF6]" />,
    title: 'Estratégia Sob Medida',
    desc: 'Desenhamos um plano de ação completo com definição de canais, linha editorial, arquitetura de campanhas e metas de KPIs.',
  },
  {
    num: '3',
    icon: <Rocket className="w-5 h-5 text-[#FF6B00]" />,
    title: 'Execução & Produção',
    desc: 'Nossa equipe de especialistas cria os conteúdos, desenvolve as páginas, produz os vídeos/tomadas de drone e lança os anúncios.',
  },
  {
    num: '4',
    icon: <BarChart2 className="w-5 h-5 text-[#8B5CF6]" />,
    title: 'Otimização Contínua',
    desc: 'Monitoramos dados em tempo real, testamos variações e ajustamos as estratégias diariamente para maximizar o ROI.',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="processo" className="relative py-32 bg-[var(--bg)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-4">
            COMO TRABALHAMOS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] mb-6">
            Nosso processo é <span className="text-gradient">simples e eficiente</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            Uma metodologia estruturada de 4 etapas que garante previsibilidade e alta performance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Gradient Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 accent-gradient -translate-x-1/2 opacity-30 hidden sm:block" />

          <div className="space-y-12">
            {STEPS.map((st, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-start sm:items-center ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse text-left sm:text-right' : 'text-left'
                } gap-8 relative`}
              >
                {/* Content Box */}
                <div className="flex-1 w-full">
                  <div className="neu-card p-6 border border-[var(--border-subtle)]">
                    <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block mb-1">
                      ETAPA 0{st.num}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[var(--text)] mb-2">{st.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">{st.desc}</p>
                  </div>
                </div>

                {/* Dot Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full neu-well flex items-center justify-center font-display font-bold text-lg text-[var(--text)] shrink-0">
                  {st.icon}
                </div>

                {/* Spacer for 2-column layout */}
                <div className="flex-1 hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
