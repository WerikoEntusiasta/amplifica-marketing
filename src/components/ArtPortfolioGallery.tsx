import React, { useState } from 'react';
import { Palette, X, ZoomIn, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import BorderGlow from './BorderGlow';

export interface ArtItem {
  id: string;
  title: string;
  category: 'Social Media' | 'Flyers & Eventos' | 'Design Conceitual' | 'Branding';
  image: string;
  description: string;
}

const ART_ITEMS: ArtItem[] = [
  {
    id: 'burger-chopp',
    title: 'Design Gastronômico — Burger & Chopp',
    category: 'Social Media',
    image: '/portfolio-art/burger-chopp.png',
    description: 'Post comercial de alta conversão para hamburgueria e pub.',
  },
  {
    id: 'post-monster',
    title: 'Publicidade de Produto — Monster Energy',
    category: 'Social Media',
    image: '/portfolio-art/post-monster.png',
    description: 'Composição publicitária de impacto visual dinâmico com iluminação 3D.',
  },
  {
    id: 'flyer-douglas-andrade',
    title: 'Flyer Oficial — Douglas Andrade na Vila Bohêmia',
    category: 'Flyers & Eventos',
    image: '/portfolio-art/flyer-douglas-andrade.png',
    description: 'Design de evento para show ao vivo com tipografia e iluminação premium.',
  },
  {
    id: 'happy-hour-bohemia',
    title: 'Campanha Happy Hour — Vila Bohêmia',
    category: 'Social Media',
    image: '/portfolio-art/happy-hour-bohemia.png',
    description: 'Arte promocional semanal para bar e restaurante.',
  },
  {
    id: 'flyer-pagode-alegria',
    title: 'Flyer Comercial — Pagode da Alegria',
    category: 'Flyers & Eventos',
    image: '/portfolio-art/flyer-pagode-alegria.png',
    description: 'Arte publicitária para evento musical de grande público.',
  },
  {
    id: 'superman-design',
    title: 'Arte Conceitual — Superman Art',
    category: 'Design Conceitual',
    image: '/portfolio-art/superman-design.png',
    description: 'Composição de arte digital avançada e manipulação de imagem.',
  },
  {
    id: 'dodge-challenger',
    title: 'Design Automotivo — Dodge Challenger',
    category: 'Design Conceitual',
    image: '/portfolio-art/dodge-challenger.png',
    description: 'Arte publicitária automotiva com efeitos visuais e iluminação de contraste.',
  },
  {
    id: 'post-acai-marnolia',
    title: 'Design Comercial — Açaí Marnolia',
    category: 'Social Media',
    image: '/portfolio-art/post-acai-marnolia.png',
    description: 'Postagem publicitária com foco em apetite appeal e conversão.',
  },
  {
    id: 'rock-kiki-style',
    title: 'Design de Evento — Rock Estilo Kiki',
    category: 'Flyers & Eventos',
    image: '/portfolio-art/rock-kiki-style.png',
    description: 'Identidade visual para festival de rock autoral.',
  },
  {
    id: 'natal-happy-hour',
    title: 'Campanha de Natal — Happy Hour Especial',
    category: 'Flyers & Eventos',
    image: '/portfolio-art/natal-happy-hour.png',
    description: 'Arte comemorativa sazonal para restaurante.',
  },
  {
    id: 'flyer-pagode-eli',
    title: 'Flyer Evento — Niver Wendell & Pagode',
    category: 'Flyers & Eventos',
    image: '/portfolio-art/flyer-pagode-eli.png',
    description: 'Flyer comemorativo de show ao vivo.',
  },
  {
    id: 'terno-design',
    title: 'Design Editorial & Moda Masculina',
    category: 'Branding',
    image: '/portfolio-art/terno-design.png',
    description: 'Design elegante para vestuário e alfaiataria.',
  },
];

const CATEGORIES = ['Todas', 'Social Media', 'Flyers & Eventos', 'Design Conceitual', 'Branding'] as const;

export default function ArtPortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [selectedArt, setSelectedArt] = useState<ArtItem | null>(null);

  const filteredArts = ART_ITEMS.filter((item) =>
    activeCategory === 'Todas' ? true : item.category === activeCategory
  );

  return (
    <section className="relative py-24 bg-[var(--bg)] overflow-hidden">
      {/* Mesh Orbs */}
      <div className="mesh-orb-orange top-1/3 -left-20" />
      <div className="mesh-orb-purple bottom-10 -right-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-4">
              <Palette className="w-4 h-4 text-[#FF6B00]" /> PORTFÓLIO DE DESIGN GRÁFICO
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] leading-tight">
              Artes & Mídias <br />
              <span className="text-gradient">de Alto Impacto Visual</span>
            </h2>
          </div>

          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-md leading-relaxed">
            Criamos artes autorais para redes sociais, flyers promocionais para eventos, manipulação de imagem e identidade visual com foco em conversão e autoridade de marca.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#FF6B00] text-white shadow-[0_0_20px_rgba(255,107,0,0.4)] scale-105'
                  : 'neu-well text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Art Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArts.map((art) => (
            <BorderGlow
              key={art.id}
              edgeSensitivity={30}
              glowColor="24 100 50"
              backgroundColor="var(--bg)"
              borderRadius={24}
              glowRadius={30}
              glowIntensity={1.1}
              colors={['#FF6B00', '#8B5CF6', '#FF8A33']}
            >
              <div
                onClick={() => setSelectedArt(art)}
                className="group relative rounded-[22px] overflow-hidden cursor-pointer h-[380px] bg-zinc-900/60 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full backdrop-blur-md bg-black/60 border border-white/10 text-[10px] font-bold text-[#FF8A33] uppercase tracking-wider">
                      {art.category}
                    </span>
                  </div>

                  {/* Zoom Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 pointer-events-none">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#FF8A33] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-2 leading-relaxed">
                    {art.description}
                  </p>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedArt && (
          <div
            onClick={() => setSelectedArt(null)}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-zinc-950 rounded-3xl border border-white/15 overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(255,107,0,0.25)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArt(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:text-[#FF6B00] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image View */}
              <div className="md:w-3/5 bg-black/50 flex items-center justify-center p-4 min-h-[300px] max-h-[60vh] md:max-h-[85vh]">
                <img
                  src={selectedArt.image}
                  alt={selectedArt.title}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Detail Info Panel */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-well text-[10px] font-bold text-[#FF8A33] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#FF6B00]" /> {selectedArt.category}
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white leading-snug">
                    {selectedArt.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                    {selectedArt.description}
                  </p>

                  <div className="p-4 rounded-2xl neu-well space-y-1 text-xs text-zinc-400">
                    <span className="font-bold text-white block">Serviço de Design Gráfico inclui:</span>
                    <ul className="list-disc list-inside space-y-1 text-zinc-300">
                      <li>Artes em alta resolução para redes sociais</li>
                      <li>Flyers comerciais e promocionais</li>
                      <li>Identidade visual & branding exclusivo</li>
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <a
                  href={`https://wa.me/5517991951381?text=Ol%C3%A1%2C%20gostei%20da%20arte%20"${encodeURIComponent(selectedArt.title)}"%20no%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20design!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Pedir Orçamento Desta Arte</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
