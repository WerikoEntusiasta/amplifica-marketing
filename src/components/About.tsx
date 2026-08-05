import { Target, Eye, Heart, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import BorderGlow from './BorderGlow';

const VALUES = [
  'Compromisso com resultados',
  'Transparência em todas as etapas',
  'Criatividade com propósito',
  'Inovação constante',
  'Ética e profissionalismo',
  'Foco no sucesso do cliente',
];

const SPECIALTIES = [
  { name: 'Gerenciamento de Redes Sociais', percent: 95 },
  { name: 'Gestão de Tráfego Pago (Google & Meta)', percent: 92 },
  { name: 'Criação de Websites & Landing Pages', percent: 90 },
  { name: 'Sistemas de Gestão & Atendimento B2B', percent: 88 },
  { name: 'Automação de Blogs & Ranqueamento SEO', percent: 85 },
  { name: 'Design Gráfico (Redes, Painéis LED & Impressão)', percent: 85 },
  { name: 'Vídeos Solos & Filmagens Aéreas com Drone 4K', percent: 90 },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-28 bg-[var(--bg)] overflow-hidden">
      {/* Ambient Mesh Glow Orbs */}
      <div className="mesh-orb-purple top-20 -right-20" />
      <div className="mesh-orb-orange bottom-20 -left-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32 relative z-10">

        {/* ===================================================
           BLOCO 1: SOBRE A AMPLIFICA MARKETING (A EMPRESA)
           =================================================== */}
        <div>
          {/* Header Institucional */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-6">
              SOBRE A AMPLIFICA MARKETING
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] leading-tight mb-6">
              Transformamos empresas em <br />
              <span className="text-gradient">marcas fortes e reconhecidas</span>
            </h2>

            <p className="text-[var(--text)] text-base sm:text-lg leading-relaxed mb-6 font-medium">
              A <strong>Amplifica Marketing</strong> é uma agência especializada em transformar empresas em marcas fortes, competitivas e reconhecidas no mercado. Nosso trabalho vai além da divulgação — desenvolvemos estratégias personalizadas para aumentar a visibilidade da sua empresa, fortalecer sua marca e gerar resultados consistentes.
            </p>

            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Cada projeto é conduzido com planejamento, criatividade e foco em performance, sempre alinhado aos objetivos de cada cliente. Nosso compromisso é construir relacionamentos duradouros que impulsionam o crescimento sustentável dos negócios.
            </p>
          </div>

          {/* Missão, Visão e Valores (Cards React Bits BorderGlow) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <BorderGlow
              edgeSensitivity={35}
              glowColor="24 100 50"
              backgroundColor="var(--bg)"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.2}
              coneSpread={30}
              colors={['#FF6B00', '#FF8A33', '#8B5CF6']}
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl neu-well flex items-center justify-center text-[#FF6B00] mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[var(--text)] mb-3">Nossa Missão</h3>
                  <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    Impulsionar empresas por meio de estratégias de marketing inteligentes, fortalecendo marcas e conectando negócios ao público certo.
                  </p>
                </div>
              </div>
            </BorderGlow>

            {/* Visão */}
            <BorderGlow
              edgeSensitivity={35}
              glowColor="260 85 65"
              backgroundColor="var(--bg)"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.2}
              coneSpread={30}
              colors={['#8B5CF6', '#A78BFA', '#FF6B00']}
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl neu-well flex items-center justify-center text-[#8B5CF6] mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[var(--text)] mb-3">Nossa Visão</h3>
                  <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    Ser reconhecida como uma agência referência em estratégia, inovação e resultados, ajudando empresas a crescer de forma consistente e sustentável.
                  </p>
                </div>
              </div>
            </BorderGlow>

            {/* Valores */}
            <BorderGlow
              edgeSensitivity={35}
              glowColor="24 100 50"
              backgroundColor="var(--bg)"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.2}
              coneSpread={30}
              colors={['#FF6B00', '#8B5CF6', '#FF8A33']}
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl neu-well flex items-center justify-center text-[#FF6B00] mb-6">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[var(--text)] mb-3">Nossos Valores</h3>
                  <ul className="space-y-2.5">
                    {VALUES.map((val, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                        <span>{val}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>

        {/* ===================================================
           BLOCO 2: SOBRE O FUNDADOR (WERIK OLIVEIRA)
           =================================================== */}
        <div className="pt-8 border-t border-[var(--border-subtle)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Texto do Fundador */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#8B5CF6] uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00]" /> FUNDADOR & ESTRATEGISTA
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] leading-tight">
                Conheça quem lidera as <br />
                <span className="text-gradient">estratégias da Amplifica</span>
              </h2>

              <p className="text-[var(--text)] text-base sm:text-lg leading-relaxed font-medium">
                A Amplifica Marketing foi fundada por <strong>Werik Oliveira</strong> (@recwerikoliveira), profissional apaixonado por estratégia, posicionamento de marca e crescimento empresarial.
              </p>

              <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                Sua atuação é baseada na construção de estratégias personalizadas que unem criatividade, planejamento e análise de mercado para gerar resultados reais e mensuráveis para cada parceiro.
              </p>

              {/* Citação do Fundador */}
              <div className="p-6 rounded-2xl neu-well border-l-4 border-l-[#FF6B00]">
                <p className="text-sm sm:text-base text-[#FF8A33] font-semibold italic leading-relaxed">
                  "Acreditamos que o marketing deve ser um investimento capaz de fortalecer marcas, criar oportunidades e contribuir diretamente para o crescimento sustentável das empresas."
                </p>
                <span className="block mt-3 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  — Werik Oliveira, Fundador
                </span>
              </div>

              {/* Redes do Fundador */}
              <div className="pt-2">
                <a
                  href="https://instagram.com/recwerikoliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full neu-btn text-xs font-bold text-white hover:text-[#FF6B00] transition-colors shadow-lg"
                >
                  <svg className="w-4 h-4 text-[#FF6B00] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Siga @recwerikoliveira no Instagram</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Foto do Fundador com Backlight Glow & Shadow */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-[#FF6B00]/25 via-[#8B5CF6]/25 to-[#FF6B00]/25 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                <img
                  src="/founder.jpg"
                  alt="Werik Oliveira - Fundador da Amplifica Marketing"
                  className="w-full h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-80" />

                {/* Crachá de Identificação do Fundador */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl neu-well backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-xl text-[var(--text)]">Werik Oliveira</h3>
                      <p className="text-xs text-[#FF6B00] font-semibold uppercase tracking-wider">Fundador & Estrategista • @recwerikoliveira</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
           BLOCO 3: NOSSAS ESPECIALIDADES (BARRAS DE PROGRESSO)
           =================================================== */}
        <div className="neu-card p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-4">
              NOSSAS ESPECIALIDADES
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-[var(--text)]">
              Domínio técnico & <span className="text-gradient">expertise comprovada</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECIALTIES.map((spec, idx) => (
              <div key={idx} className="neu-well p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-[var(--text)]">{spec.name}</span>
                  <span className="text-[#FF6B00] font-display font-bold">{spec.percent}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full neu-well overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full accent-gradient transition-all duration-1000"
                    style={{ width: `${spec.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
