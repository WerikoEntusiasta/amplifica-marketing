import React, { useState } from 'react';
import { Calculator, ArrowRight, AlertCircle, Info, Sliders } from 'lucide-react';

const SEGMENTS = [
  {
    name: 'Serviços & B2B',
    cpc: 2.10,
    cvr: 0.0825, // 8.25% WordStream Meta Lead Gen benchmark
    closeRate: 0.08, // 8% fechamento
    label: 'Meta Ads Lead Gen B2B',
  },
  {
    name: 'E-commerce & Varejo',
    cpc: 1.40,
    cvr: 0.025, // 2.5% e-commerce CVR
    closeRate: 1.0, // 100% direta no checkout
    label: 'Meta Ads Conversão Direta',
  },
  {
    name: 'Saúde, Estética & Clínicas',
    cpc: 1.80,
    cvr: 0.105, // 10.5% agendamentos
    closeRate: 0.12, // 12% conversão em consulta
    label: 'Meta Ads Agendamento Local',
  },
  {
    name: 'Imobiliário & Alto Padrão',
    cpc: 2.80,
    cvr: 0.065, // 6.5% cadastros qualificados
    closeRate: 0.04, // 4% venda imobiliária
    label: 'Meta Ads Leads de Alto Ticket',
  },
];

export default function RoiCalculator() {
  const [budget, setBudget] = useState(5000);
  const [ticket, setTicket] = useState(1500);
  const [selectedSegmentIdx, setSelectedSegmentIdx] = useState(0);

  const activeSegment = SEGMENTS[selectedSegmentIdx];

  // Mathematical Calculation based on official Meta Ads & WordStream Benchmarks
  const estimatedClicks = Math.round(budget / activeSegment.cpc);
  const estimatedLeads = Math.round(estimatedClicks * activeSegment.cvr);
  const estimatedSales = Math.max(1, Math.round(estimatedLeads * activeSegment.closeRate));
  const estimatedRevenue = estimatedSales * ticket;
  const estimatedRoi = budget > 0 ? (estimatedRevenue / budget).toFixed(1) : '0';
  const estimatedCpl = estimatedLeads > 0 ? (budget / estimatedLeads).toFixed(2) : '0';

  return (
    <section className="relative py-28 bg-[var(--bg)] overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-bold mb-4">
            SIMULADOR BASEADO EM BENCHMARKS META ADS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] mb-6 leading-tight">
            Simule a projeção de <br />
            <span className="text-gradient">crescimento do seu negócio</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            Nossa calculadora utiliza métricas reais de **CPC, CTR e CVR** extraídas dos relatórios oficiais do **Meta Ads & WordStream 2026**.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="neu-card p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls Left */}
          <div className="lg:col-span-6 space-y-8">
            {/* Segment Selector */}
            <div>
              <label className="text-xs font-bold text-[var(--text)] uppercase tracking-wider block mb-3 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#FF6B00]" />
                <span>Selecione o Segmento do Seu Negócio</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {SEGMENTS.map((seg, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSegmentIdx(idx)}
                    className={`p-3 rounded-2xl text-xs font-semibold text-left transition-all ${
                      selectedSegmentIdx === idx
                        ? 'neu-well border-2 border-[#FF6B00] text-[#FF6B00]'
                        : 'neu-btn text-[var(--text-muted)] hover:text-[var(--text)]'
                    }`}
                  >
                    <div className="font-bold">{seg.name}</div>
                    <div className="text-[10px] opacity-75 font-normal">{seg.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">
                  Investimento Mensal em Anúncios
                </label>
                <span className="font-display font-extrabold text-xl text-[#FF6B00]">
                  R$ {budget.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={100000}
                step={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-3 rounded-lg accent-[#FF6B00] cursor-pointer neu-well"
              />
              <div className="flex justify-between text-xs text-[var(--text-muted)] font-medium mt-2">
                <span>R$ 1.000</span>
                <span>R$ 50.000</span>
                <span>R$ 100.000</span>
              </div>
            </div>

            {/* Ticket Slider (Up to R$ 10.000.000) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">
                  Ticket Médio da Sua Venda (Preço Médio)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 font-bold">R$</span>
                  <input
                    type="number"
                    min={100}
                    max={10000000}
                    value={ticket}
                    onChange={(e) => setTicket(Math.min(10000000, Math.max(100, Number(e.target.value))))}
                    className="w-36 px-3 py-1 text-right font-display font-extrabold text-lg text-[#8B5CF6] neu-input rounded-xl"
                  />
                </div>
              </div>
              <input
                type="range"
                min={100}
                max={10000000}
                step={ticket > 100000 ? 50000 : 500}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full h-3 rounded-lg accent-[#8B5CF6] cursor-pointer neu-well"
              />
              <div className="flex justify-between text-xs text-[var(--text-muted)] font-medium mt-2">
                <span>R$ 100</span>
                <span>R$ 1.000.000</span>
                <span>R$ 10.000.000</span>
              </div>
            </div>

            {/* Benchmark Explanation Box */}
            <div className="p-4 rounded-2xl neu-well space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--text)]">
                <Info className="w-4 h-4 text-[#FF6B00]" />
                <span>Métricas de Calibragem para {activeSegment.name}:</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-[var(--text-muted)] pt-1 border-t border-[var(--border-subtle)]">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-zinc-500">CPC Médio</span>
                  <span className="font-bold text-[var(--text)]">R$ {activeSegment.cpc.toFixed(2)}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-zinc-500">Taxa Conv. Form</span>
                  <span className="font-bold text-[var(--text)]">{(activeSegment.cvr * 100).toFixed(1)}%</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-zinc-500">Custo p/ Lead</span>
                  <span className="font-bold text-[#FF6B00]">R$ {estimatedCpl}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display Right */}
          <div className="lg:col-span-6 neu-well-deep p-8 sm:p-10 text-center flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest block mb-2">
                PROJEÇÃO ESTIMADA DE RETORNO BRUTO*
              </span>
              <div className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-gradient mb-6 break-words">
                R$ {estimatedRevenue.toLocaleString('pt-BR')}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--border-subtle)] mb-8">
                <div>
                  <span className="text-xs text-[var(--text-muted)] block mb-1">Cliques Estimados</span>
                  <span className="font-display font-bold text-[var(--text)] text-base sm:text-xl">{estimatedClicks.toLocaleString('pt-BR')}</span>
                </div>
                <div className="border-x border-[var(--border-subtle)]">
                  <span className="text-xs text-[var(--text-muted)] block mb-1">Leads / Vendas</span>
                  <span className="font-display font-bold text-[var(--text)] text-base sm:text-xl">{estimatedLeads}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--text-muted)] block mb-1">ROI Projetado</span>
                  <span className="font-display font-bold text-[#FF8A33] text-base sm:text-xl">{estimatedRoi}x</span>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="neu-btn-primary py-4 px-6 text-sm font-bold text-white flex items-center justify-center gap-2 mb-4"
            >
              <span>Solicitar Diagnóstico para Seu Negócio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Explicit Legal Disclaimer & Market Variation Note */}
          <div className="lg:col-span-12 p-5 rounded-2xl neu-well border border-amber-500/20 bg-amber-500/5 flex items-start gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                Aviso legal e ressalva de variabilidade de mercado:
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Este simulador é uma <strong>ferramenta exclusiva de projeção matemática estimativa</strong> baseada na média de dados públicos e estudos de mercado do <em>Meta Ads & WordStream 2026</em>. Os resultados finais variam de acordo com o nicho de atuação, maturidade da marca, qualidade do anúncio, oferta comercial, sazonalidade e região geográfica do cliente. A Amplifica Marketing não garante nem promete faturamento futuro ou resultados fixos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
