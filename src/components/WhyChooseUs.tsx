import React from 'react';
import { Check, Shield, TrendingUp, Target, Users, Zap } from 'lucide-react';

const REASONS = [
  'Estratégias personalizadas para cada empresa.',
  'Foco em resultados e crescimento sustentável.',
  'Atendimento próximo e transparente.',
  'Planejamento baseado em objetivos reais.',
  'Acompanhamento contínuo das ações.',
  'Compromisso com a evolução constante do negócio.',
];

const NUMBERS_PILLARS = [
  { icon: <TrendingUp className="w-5 h-5 text-[#FF6B00]" />, title: 'Estratégias orientadas por resultados' },
  { icon: <Target className="w-5 h-5 text-[#8B5CF6]" />, title: 'Planejamento focado em crescimento' },
  { icon: <Users className="w-5 h-5 text-[#FF6B00]" />, title: 'Atendimento próximo e consultivo' },
  { icon: <Shield className="w-5 h-5 text-[#8B5CF6]" />, title: 'Soluções personalizadas para cada negócio' },
  { icon: <Zap className="w-5 h-5 text-[#FF6B00]" />, title: 'Melhoria contínua baseada em análise e desempenho' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-[#07070B] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20 relative z-10">

        {/* Top: Por que escolher & Nosso Diferencial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Por que escolher */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold">
              POR QUE ESCOLHER A AMPLIFICA?
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Construímos <span className="text-gradient">marcas fortes</span> e geramos oportunidades reais
            </h2>

            <div className="space-y-3 pt-2">
              {REASONS.map((item, idx) => (
                <div key={idx} className="neu-well p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full accent-gradient flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Nosso Diferencial */}
          <div className="lg:col-span-6">
            <div className="neu-card p-8 sm:p-10 border-l-4 border-l-[#8B5CF6] space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-well text-xs text-[#8B5CF6] uppercase tracking-wider font-bold">
                NOSSO DIFERENCIAL
              </div>

              <h3 className="font-display font-bold text-2xl text-white">
                Não trabalhamos com soluções genéricas
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Na Amplifica Marketing acreditamos que cada empresa possui sua própria história, seus desafios e seus objetivos. Por isso, antes de qualquer ação, buscamos compreender profundamente o mercado, o público e as metas do cliente para desenvolver estratégias alinhadas à realidade do negócio.
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed italic">
                "Mais do que entregar campanhas ou conteúdos, nosso propósito é construir marcas fortes, gerar oportunidades e contribuir para o crescimento consistente de cada empresa que confia em nosso trabalho."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Pilares da Amplifica */}
        <div className="neu-card p-8 sm:p-12">
          <h3 className="font-display font-bold text-2xl text-white text-center mb-8">
            Pilares da nossa <span className="text-gradient">atuação estratégica</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {NUMBERS_PILLARS.map((pil, idx) => (
              <div key={idx} className="neu-well p-5 rounded-2xl text-center flex flex-col items-center justify-center space-y-3">
                <div className="p-3 rounded-xl bg-white/5 neu-well">
                  {pil.icon}
                </div>
                <p className="text-xs font-semibold text-zinc-200 leading-snug">{pil.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
