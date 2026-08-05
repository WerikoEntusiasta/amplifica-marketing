import React, { useState, useEffect } from 'react';
import { BlogArticle } from '../data/blogArticles';
import { fetchBlogPosts } from '../api/blogApi';
import BorderGlow from '../components/BorderGlow';
import {
  Search,
  ArrowLeft,
  Clock,
  Calendar,
  User,
  BookOpen,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';

interface BlogPageProps {
  onBackToHome: () => void;
}

const CATEGORIES = [
  'Todas',
  'Tráfego Pago',
  'Redes Sociais',
  'SEO & Content',
  'Automação B2B',
  'Audiovisual & Drone',
  'Estratégia de Marca',
];

export default function BlogPage({ onBackToHome }: BlogPageProps) {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dedicated Full Page Article Reader State
  const [readingArticle, setReadingArticle] = useState<BlogArticle | null>(null);

  const loadArticles = async () => {
    setLoading(true);
    const data = await fetchBlogPosts();
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  // Filter articles by Category & Search query
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'Todas' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // ===================================================
  // FULL DEDICATED ARTICLE READING PAGE VIEW
  // ===================================================
  if (readingArticle) {
    return (
      <article className="min-h-screen bg-[var(--bg)] text-[var(--text)] pt-24 pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Top Article Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[var(--border-subtle)]">
            <button
              onClick={() => setReadingArticle(null)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full neu-btn text-xs font-bold text-white hover:text-[#FF6B00] transition-colors shadow-md"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF6B00]" />
              <span>Voltar para a Lista de Artigos</span>
            </button>

            <a
              href="https://wa.me/5517991951381?text=Ol%C3%A1%2C%20estava%20lendo%20o%20artigo%20sobre%20marketing%20e%20gostaria%20de%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp: (17) 99195-1381</span>
            </a>
          </div>

          {/* Article Header Metadata */}
          <div className="space-y-6 mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full neu-well text-xs font-bold text-[#FF8A33]">
              {readingArticle.category}
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              {readingArticle.title}
            </h1>

            <p className="text-zinc-300 text-base sm:text-xl leading-relaxed font-medium">
              {readingArticle.excerpt}
            </p>

            <div className="flex items-center gap-6 text-xs text-zinc-400 font-medium pt-4 border-t border-[var(--border-subtle)]">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#FF6B00]" />
                Por {readingArticle.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#8B5CF6]" />
                {readingArticle.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FF6B00]" />
                {readingArticle.readTime}
              </span>
            </div>
          </div>

          {/* Main Featured Cover Image */}
          {readingArticle.image && (
            <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/10 max-h-[520px] bg-black">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Full Page Rich Content Body */}
          <div
            className="prose prose-invert max-w-none text-zinc-200 text-base sm:text-lg leading-relaxed space-y-6 font-normal"
            dangerouslySetInnerHTML={{ __html: readingArticle.content }}
          />

          {/* Bottom Article Footer CTA Card */}
          <div className="mt-16 pt-10 border-t border-[var(--border-subtle)] space-y-8">
            <div className="p-8 rounded-3xl neu-well text-center space-y-4 border border-white/10">
              <h3 className="font-display font-bold text-2xl text-white">
                Gostou do artigo e quer aplicar no seu negócio?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                Fale diretamente com o fundador Werik Oliveira e nossa equipe estratégica no WhatsApp.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/5517991951381?text=Ol%C3%A1%2C%20acabei%20de%20ler%20o%20artigo%20no%20blog%20e%20gostaria%20de%20um%20or%C3%A7amento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-sm font-bold text-white shadow-xl transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Conversar no WhatsApp (+55 17 99195-1381)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <button
                onClick={() => {
                  setReadingArticle(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-[#FF6B00] font-bold hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar para a Lista de Artigos</span>
              </button>

              <span>Amplifica Marketing • Conteúdo Estratégico</span>
            </div>
          </div>

        </div>
      </article>
    );
  }

  // ===================================================
  // MAIN BLOG GRID LIST VIEW (CLEAN CLIENT-FACING UI)
  // ===================================================
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full neu-btn text-xs font-bold text-white hover:text-[#FF6B00] transition-colors shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF6B00]" />
            <span>Voltar para o Site Principal</span>
          </button>
        </div>

        {/* Blog Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-[var(--border-subtle)] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-4">
              <BookOpen className="w-3.5 h-3.5" /> BLOG DA AMPLIFICA • CONHECIMENTO PRÁTICO
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-6xl text-[var(--text)] mb-4 leading-tight">
              Estratégias & Insights de <br />
              <span className="text-gradient">Marketing Digital e Vendas</span>
            </h1>
            <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl">
              Conteúdos práticos desenvolvidos para impulsionar o crescimento do seu negócio.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar artigo ou tema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl neu-input text-xs font-medium focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'accent-gradient text-white shadow-lg shadow-[#FF6B00]/20'
                  : 'neu-well text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="text-center py-20 text-zinc-400 text-sm font-semibold animate-pulse">
            Carregando artigos...
          </div>
        ) : filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  setReadingArticle(article);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer group h-full relative"
              >
                <BorderGlow
                  edgeSensitivity={35}
                  glowColor="24 100 50"
                  backgroundColor="var(--bg)"
                  borderRadius={24}
                  glowRadius={35}
                  glowIntensity={1.1}
                  coneSpread={30}
                  colors={['#FF6B00', '#8B5CF6', '#FF8A33']}
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      {/* Image Frame */}
                      <div className="rounded-2xl overflow-hidden mb-5 relative aspect-video bg-zinc-900 border border-white/10">
                        <img
                          src={article.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-black/70 backdrop-blur-md text-[#FF8A33] border border-white/10">
                          {article.category}
                        </span>
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-[11px] text-zinc-400 font-medium mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#FF6B00]" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#8B5CF6]" />
                          {article.date}
                        </span>
                      </div>

                      {/* Title & Excerpt */}
                      <h3 className="font-display font-bold text-xl text-[var(--text)] mb-3 group-hover:text-[#FF6B00] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                      <span className="text-[11px] text-zinc-400 font-semibold flex items-center gap-1">
                        <User className="w-3 h-3 text-[#FF6B00]" />
                        {article.author}
                      </span>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6B00] group-hover:text-[#FF8A33]">
                        <span>Ler Artigo Completo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </BorderGlow>
              </div>
            ))}
          </div>
        ) : (
          /* Clean Empty State for Clients */
          <div className="text-center py-20 neu-well rounded-3xl max-w-lg mx-auto my-8 p-8 space-y-4">
            <BookOpen className="w-12 h-12 text-[#FF6B00] mx-auto animate-bounce" />
            <h3 className="font-display font-bold text-xl text-white">Nenhum artigo publicado no momento</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Novas publicações e estratégias de marketing serão lançadas em breve. Fique atento!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
