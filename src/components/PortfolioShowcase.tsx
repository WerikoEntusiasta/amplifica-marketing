import React from 'react';
import { ArrowUpRight, TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';

const PORTFOLIO_CASES = [
  {
    num: 'CASE 01',
    client: 'Bella Moda',
    segment: 'E-commerce de Moda & Varejo',
    metric: '+280%',
    metricLabel: 'Crescimento em Vendas',
    desc: 'Reestruturação completa de posicionamento no Instagram, criação de linha editorial com peças visuais autorais e estratégia de tráfego pago focado em remarketing.',
    results: [
      '3x de aumento em engajamento orgânico',
      'Custo por Aquisição (CPA) reduzido em 42%',
      '+15 mil novos seguidores qualificados',
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    color: '#FF6B00',
  },
  {
    num: 'CASE 02',
    client: 'TechSolution B2B',
    segment: 'Tecnologia & Softwares',
    metric: '7.2x',
    metricLabel: 'ROI Comprovado em Ads',
    desc: 'Campanhas de anúncios aceleradas no Google Search e Meta Ads focadas na geração diária de leads B2B qualificados para a equipe comercial.',
    results: [
      'Mais de 450 demos agendadas em 60 dias',
      'Taxa de conversão de landing page de 18.5%',
      'R$ 1.2M em pipeline gerado',
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    color: '#8B5CF6',
  },
  {
    num: 'CASE 03',
    client: 'Espaço Zen & Bem-Estar',
    segment: 'Saúde & Serviços de Luxo',
    metric: '3.4x',
    metricLabel: 'Conversão em Landing Page',
    desc: 'Desenvolvimento de Landing Page Neumórfica ultra-rápida combinada com produção audiovisual em estúdio e filmagens aéreas de drone em 4K.',
    results: [
      'Vídeo institucional com mais de 250k views',
      'Tempo de carregamento da página inferior a 1.2s',
      'Agenda de atendimento lotada por 4 meses',
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    color: '#FF6B00',
  },
  {
    num: 'CASE 04',
    client: 'Sabor & Arte Gastronomia',
    segment: 'Restaurante & Franquias',
    metric: '45k',
    metricLabel: 'Comunidade no Instagram',
    desc: 'Gestão contínua de redes sociais, produção de conteúdo em Reels de alta retenção e tráfego local geo-localizado para atração de clientes presenciais.',
    results: [
      'Crescimento de 2k para 45k seguidores em 6 meses',
      'Média de 80k alcance diário por publicação',
      'Filas de espera nos finais de semana',
    ],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    color: '#8B5CF6',
  },
];

export default function PortfolioShowcase() {
  return (
    <section id="portfolio" className="relative py-32 bg-[var(--bg)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-4">
            PORTFÓLIO & CASOS DE SUCESSO
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] mb-6">
            Empresas que <br />
            <span className="text-gradient">amplificaram seus resultados</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            Role para baixo e navegue pelo baralho interativo de casos de sucesso.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative space-y-8">
          {PORTFOLIO_CASES.map((item, idx) => {
            const topOffset = 110 + idx * 10;

            return (
              <div
                key={idx}
                className="sticky neu-card p-8 md:p-12 transition-all duration-500 overflow-hidden group border border-white/5"
                style={{
                  top: `${topOffset}px`,
                  zIndex: (idx + 1) * 10,
                }}
              >
                {/* Background Ambient Glow */}
                <div
                  className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-25 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: item.color }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Client Info & Results */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] px-3 py-1 rounded-full neu-well">
                        {item.num} • {item.segment}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full accent-gradient animate-pulse" />
                        <span className="text-xs font-semibold text-[var(--text-muted)]">Projeto Ativo</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text)] group-hover:text-[#FF6B00] transition-colors">
                      {item.client}
                    </h3>

                    <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Key Results Checklist */}
                    <div className="space-y-2.5 pt-2">
                      {item.results.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-3 neu-well p-3 rounded-xl text-xs font-semibold text-[var(--text)]">
                          <ShieldCheck className="w-4 h-4 text-[#FF6B00] shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Metric Highlight Card & Image Preview */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Big Metric Box */}
                    <div className="neu-well-deep p-6 text-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                        {item.metricLabel}
                      </span>
                      <div className="font-display font-extrabold text-5xl text-gradient">
                        {item.metric}
                      </div>
                    </div>

                    {/* Image Preview */}
                    <div className="neu-well p-2 rounded-2xl overflow-hidden group/img relative aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.client}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                        <a
                          href="#contato"
                          className="neu-btn-primary py-2.5 px-4 text-xs font-bold text-white flex items-center justify-between w-full"
                        >
                          <span>Quero Resultados Assim</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
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
