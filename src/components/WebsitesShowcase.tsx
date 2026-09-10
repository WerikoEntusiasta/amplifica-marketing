import React from 'react';
import { Globe, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import BorderGlow from './BorderGlow';

export interface WebsiteProject {
  id: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  description: string;
  tags: string[];
}

const WEBSITES: WebsiteProject[] = [
  {
    id: 'amplificagroup',
    name: 'Amplifica Group',
    url: 'https://amplificagroup.com/',
    domain: 'amplificagroup.com',
    category: 'Agência de Marketing & Performance',
    description: 'Plataforma oficial da agência com animações 3D, galeria audiovisual, blog dinâmico e integração com REST API.',
    tags: ['React 19', 'Vite', 'REST API', 'Design Ultra-Moderno'],
  },
  {
    id: 'agropasi',
    name: 'Agro Pasi',
    url: 'https://agropasi.com.br/',
    domain: 'agropasi.com.br',
    category: 'Agronegócio & Soluções Agrícolas',
    description: 'Portal institucional para o setor do agronegócio, destacando produtos, linhas de atendimento e captação de clientes.',
    tags: ['Agronegócio', 'Alta Velocidade', 'SEO Otimizado'],
  },
  {
    id: 'pasilux',
    name: 'Pasilux',
    url: 'https://pasilux.com.br/',
    domain: 'pasilux.com.br',
    category: 'Iluminação & Soluções Elétricas',
    description: 'Website de apresentação de catálogo corporativo e soluções em iluminação de alto padrão.',
    tags: ['Catálogo Digital', 'Design Responsivo', 'WhatsApp CTA'],
  },
  {
    id: 'fundiferroformas',
    name: 'Fundiferro Formas',
    url: 'https://fundiferroformas.com.br/',
    domain: 'fundiferroformas.com.br',
    category: 'Indústria & Metalurgia',
    description: 'Plataforma industrial para formas metálicas e estruturas, focada na geração de leads B2B.',
    tags: ['Indústria B2B', 'Geração de Leads', 'SEO'],
  },
  {
    id: 'panossi',
    name: 'Panossi Estruturas Metálicas',
    url: 'https://panossiestruturasmetalicas.com.br/',
    domain: 'panossiestruturasmetalicas.com.br',
    category: 'Engenharia & Estruturas Metálicas',
    description: 'Website institucional para engenharia de estruturas metálicas e galpões industriais com portfólio de obras.',
    tags: ['Engenharia', 'Portfólio de Obras', 'Conversão B2B'],
  },
];

export default function WebsitesShowcase() {
  return (
    <section id="cases-sites" className="relative py-24 bg-[var(--bg)] overflow-hidden">
      {/* Ambient Mesh Orbs */}
      <div className="mesh-orb-purple top-10 -right-20" />
      <div className="mesh-orb-orange bottom-10 -left-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#8B5CF6] uppercase tracking-wider font-semibold mb-4">
              <Globe className="w-4 h-4 text-[#8B5CF6]" /> WEBSITES DESENVOLVIDOS POR NÓS
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] leading-tight">
              Projetos Web <br />
              <span className="text-gradient">Entregues com Excelência</span>
            </h2>
          </div>

          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-md leading-relaxed">
            Desenvolvemos ecossistemas digitais completos, websites institucionais rápidos e plataformas focadas na geração contínua de negócios.
          </p>
        </div>

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEBSITES.map((site) => (
            <BorderGlow
              key={site.id}
              edgeSensitivity={35}
              glowColor="260 85 65"
              backgroundColor="var(--bg)"
              borderRadius={24}
              glowRadius={35}
              glowIntensity={1.1}
              colors={['#8B5CF6', '#FF6B00', '#A78BFA']}
            >
              <div className="p-8 h-full flex flex-col justify-between space-y-6 group">
                {/* Header Card */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full neu-well text-[10px] font-bold text-[#FF8A33] uppercase tracking-wider">
                      {site.category}
                    </span>
                    <div className="w-8 h-8 rounded-full neu-well flex items-center justify-center text-zinc-400 group-hover:text-[#FF6B00] transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl text-[var(--text)] group-hover:text-white transition-colors">
                      {site.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#8B5CF6] block mt-1">
                      {site.domain}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {site.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {site.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-medium text-zinc-400 neu-well px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Button */}
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl neu-btn text-xs font-bold text-white hover:text-[#FF6B00] transition-all group/btn"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#FF6B00]" />
                    <span>Acessar {site.domain}</span>
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
