import React from 'react';
import { TrendingUp, DollarSign, Award, Zap } from 'lucide-react';

const STATS = [
  {
    icon: <TrendingUp className="w-6 h-6 text-[#FF6B00]" />,
    count: 340,
    suffix: '%',
    label: 'Aumento médio em engajamento',
    desc: 'Crescimento comprovado na interação e alcance orgânico.',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#8B5CF6]" />,
    count: 2,
    suffix: 'M+',
    label: 'Reais gerenciados em anúncios',
    desc: 'Investimento otimizado com foco em retorno sobre investimento.',
  },
  {
    icon: <Award className="w-6 h-6 text-[#FF6B00]" />,
    count: 150,
    suffix: '+',
    label: 'Clientes satisfeitos',
    desc: 'Empresas de diversos segmentos impulsionadas com sucesso.',
  },
  {
    icon: <Zap className="w-6 h-6 text-[#8B5CF6]" />,
    count: 5,
    suffix: 'x',
    label: 'ROI médio dos clientes',
    desc: 'Multiplicação real de faturamento através de estratégias validadas.',
  },
];

export default function ResultsStats() {
  return (
    <section id="resultados" className="relative py-32 bg-[var(--bg)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-4">
            NOSSOS RESULTADOS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] mb-6">
            Números que <span className="text-gradient">falam por si</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            Acreditamos na transparência e no compromisso com métricas reais que impactam diretamente o faturamento.
          </p>
        </div>

        {/* Stats Neumorphic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((st, idx) => (
            <div key={idx} className="neu-card p-8 text-center flex flex-col items-center justify-between">
              <div className="w-14 h-14 rounded-2xl neu-well flex items-center justify-center mb-6">
                {st.icon}
              </div>
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-gradient mb-2">
                {st.count}{st.suffix}
              </div>
              <h4 className="font-display font-bold text-[var(--text)] text-base mb-2">{st.label}</h4>
              <p className="text-xs text-[var(--text-muted)] leading-normal">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
