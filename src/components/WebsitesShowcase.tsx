import React, { useState } from 'react';
import { Globe, ArrowUpRight, ShieldCheck, ExternalLink, X, Eye } from 'lucide-react';
import BorderGlow from './BorderGlow';

export interface WebsiteProject {
  id: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
}

const WEBSITES: WebsiteProject[] = [
  {
    id: 'panossi',
    name: 'Panossi Estruturas Metálicas',
    url: 'https://panossiestruturasmetalicas.com.br/',
    domain: 'panossiestruturasmetalicas.com.br',
    category: 'Engenharia & Estruturas Metálicas',
    description: 'Website institucional premium para engenharia de estruturas metálicas e galpões industriais com chamada direta para Catanduva SP e região.',
    tags: ['Engenharia', 'Estruturas Metálicas', 'Conversão B2B', 'Catanduva SP'],
    image: '/websites/panossi.png',
  },
  {
    id: 'amplificagroup',
    name: 'Amplifica Group',
    url: 'https://amplificagroup.com/',
    domain: 'amplificagroup.com',
    category: 'Agência de Marketing & Performance',
    description: 'Plataforma oficial da agência com animações 3D, galeria audiovisual, blog dinâmico e integração com REST API.',
    tags: ['React 19', 'Vite', 'REST API', 'Design Ultra-Moderno'],
    image: '/websites/amplificagroup.png',
  },
  {
    id: 'agropasi',
    name: 'Agro Pasi',
    url: 'https://agropasi.com.br/',
    domain: 'agropasi.com.br',
    category: 'Agronegócio & Soluções Agrícolas',
    description: 'Portal institucional para o setor do agronegócio, destacando produtos, linhas de atendimento e captação de clientes.',
    tags: ['Agronegócio', 'Alta Velocidade', 'SEO Otimizado'],
    image: '/websites/agropasi.png',
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
];

export default function WebsitesShowcase() {
  const [selectedPreview, setSelectedPreview] = useState<WebsiteProject | null>(null);

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
              <div className="h-full flex flex-col justify-between overflow-hidden rounded-[22px] bg-zinc-900/40 group">
                
                {/* Site Screenshot Header (if available) */}
                {site.image ? (
                  <div
                    onClick={() => setSelectedPreview(site)}
                    className="relative w-full h-48 bg-zinc-950 overflow-hidden cursor-pointer border-b border-white/10 group/img"
                  >
                    <img
                      src={site.image}
                      alt={`Preview do site ${site.name}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                    
                    {/* View Preview Badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B00] text-white text-xs font-bold shadow-lg">
                        <Eye className="w-4 h-4" /> Ampliar Captura
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-24 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border-b border-white/10 p-6 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl neu-well flex items-center justify-center text-[#FF6B00]">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">PROJETO WEB</span>
                  </div>
                )}

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full neu-well text-[10px] font-bold text-[#FF8A33] uppercase tracking-wider">
                        {site.category}
                      </span>
                      <div className="w-7 h-7 rounded-full neu-well flex items-center justify-center text-zinc-400 group-hover:text-[#FF6B00] transition-colors">
                        <ShieldCheck className="w-3.5 h-3.5" />
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

                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                      {site.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {site.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-medium text-zinc-400 neu-well px-2.5 py-0.5 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visit External Button */}
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl neu-btn text-xs font-bold text-white hover:text-[#FF6B00] transition-all group/btn mt-4"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#FF6B00]" />
                      <span>Acessar {site.domain}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>

        {/* Modal Screenshot Zoom */}
        {selectedPreview && (
          <div
            onClick={() => setSelectedPreview(null)}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-zinc-950 rounded-3xl border border-white/15 overflow-hidden flex flex-col shadow-[0_0_80px_rgba(139,92,246,0.3)]"
            >
              {/* Modal Bar */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-zinc-900/80">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-bold text-white ml-2">{selectedPreview.name} — {selectedPreview.domain}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedPreview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF6B00] text-white text-xs font-bold hover:bg-[#ff7b1a] transition-colors"
                  >
                    <span>Visitar Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedPreview(null)}
                    className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-[#FF6B00] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Preview Image */}
              <div className="overflow-y-auto p-4 max-h-[80vh] flex justify-center bg-black/60">
                <img
                  src={selectedPreview.image}
                  alt={`Screenshot do site ${selectedPreview.name}`}
                  className="max-w-full rounded-xl border border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
