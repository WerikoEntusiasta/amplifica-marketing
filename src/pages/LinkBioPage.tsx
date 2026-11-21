import React, { useState } from 'react';
import {
  MessageCircle,
  Globe,
  TrendingUp,
  Calendar,
  Video,
  Palette,
  BookOpen,
  Phone,
  Share2,
  Check,
  Sparkles,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Copy,
  ExternalLink,
} from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface LinkBioPageProps {
  onGoHome?: () => void;
}

interface BioLinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: React.ReactNode;
  badge?: string;
  highlight?: boolean;
  external?: boolean;
  color: string;
}

export default function LinkBioPage({ onGoHome }: LinkBioPageProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = 'https://amplificagroup.com/linkbio';
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Amplifica Marketing | Links & Contatos Oficiais',
          text: 'Fale com a Amplifica Marketing: Tráfego Pago, Redes Sociais, Sites, Vídeos e Automação.',
          url,
        });
      } catch {
        // Fallback to clipboard
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const LINKS: BioLinkItem[] = [
    {
      id: 'whatsapp-principal',
      title: 'WhatsApp Oficial • Orçamento Rápido',
      subtitle: 'Fale diretamente com nossa equipe e solicite sua proposta comercial',
      url: 'https://wa.me/5517991951381?text=Ol%C3%A1%2C%20vim%20pelo%20Link%20da%20Bio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!',
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      badge: 'Atendimento Rápido',
      highlight: true,
      external: true,
      color: '#25D366',
    },
    {
      id: 'website-oficial',
      title: 'Website Oficial da Agência',
      subtitle: 'Conheça nossa estrutura, equipe, soluções e autoridade no mercado',
      url: 'https://amplificagroup.com/',
      icon: <Globe className="w-5 h-5 text-[#FF6B00]" />,
      badge: 'Site Principal',
      external: false,
      color: '#FF6B00',
    },
    {
      id: 'tabela-agencias',
      title: 'Tabela de Revenda para Agências',
      subtitle: 'Preços especiais B2B (white-label) para sua agência terceirizar com lucro',
      url: 'https://amplificagroup.com/#apresentacao',
      icon: <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />,
      badge: 'Para Agências',
      external: false,
      color: '#8B5CF6',
    },
    {
      id: 'planner-proprio',
      title: 'Amplifica Planner • Sistema de Conteúdo',
      subtitle: 'Nossa plataforma de organização editorial e aprovação de artes (a partir de R$ 15,00)',
      url: 'https://planner.amplificagroup.com/',
      icon: <Calendar className="w-5 h-5 text-[#FF8A33]" />,
      badge: 'A partir de R$ 15,00',
      external: true,
      color: '#FF8A33',
    },
    {
      id: 'portfolio-videos',
      title: 'Portfólio de Vídeos & Drone 4K',
      subtitle: 'Confira nossas produções audiovisuais, filmagens de eventos e reels reais',
      url: 'https://amplificagroup.com/#portfolio',
      icon: <Video className="w-5 h-5 text-[#8B5CF6]" />,
      badge: 'Audiovisual 4K',
      external: false,
      color: '#8B5CF6',
    },
    {
      id: 'portfolio-artes',
      title: 'Portfólio de Design Gráfico & Artes',
      subtitle: 'Criativos de alta conversão, flyers para eventos e painéis de LED',
      url: 'https://amplificagroup.com/#artes',
      icon: <Palette className="w-5 h-5 text-[#FF6B00]" />,
      badge: 'Design Visual',
      external: false,
      color: '#FF6B00',
    },
    {
      id: 'blog-artigos',
      title: 'Blog & Artigos Estratégicos',
      subtitle: '30 artigos práticos sobre tráfego pago, SEO, IA e escala de vendas',
      url: 'https://amplificagroup.com/#blog',
      icon: <BookOpen className="w-5 h-5 text-[#8B5CF6]" />,
      badge: 'Conteúdo Gratuito',
      external: false,
      color: '#8B5CF6',
    },
    {
      id: 'instagram-agencia',
      title: 'Instagram da Agência (@amplificamarketing)',
      subtitle: 'Acompanhe novidades, cases de sucesso e dicas diárias no feed',
      url: 'https://instagram.com/amplificamarketing',
      icon: <InstagramIcon className="w-5 h-5 text-[#E1306C]" />,
      badge: 'Instagram',
      external: true,
      color: '#E1306C',
    },
    {
      id: 'instagram-fundador',
      title: 'Instagram do Fundador (@recwerikoliveira)',
      subtitle: 'Bastidores, rotina de gravações com drone e direção de projetos por Werik Oliveira',
      url: 'https://instagram.com/recwerikoliveira',
      icon: <InstagramIcon className="w-5 h-5 text-[#FF8A33]" />,
      badge: 'Fundador',
      external: true,
      color: '#FF8A33',
    },
    {
      id: 'telefone-direto',
      title: 'Ligação Telefônica Direta',
      subtitle: 'Ligue agora para nosso atendimento comercial: (17) 99195-1381',
      url: 'tel:+5517991951381',
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      badge: 'Telefone',
      external: true,
      color: '#10B981',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white flex flex-col items-center justify-between relative overflow-x-hidden selection:bg-[#FF6B00] selection:text-white px-4 py-8 sm:py-12">
      {/* Background Glow Orbs */}
      <div className="fixed top-[-100px] left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-b from-[#FF6B00]/15 via-[#8B5CF6]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-[40%] left-[-150px] w-[350px] h-[350px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container (Mobile Max Width ~480px, exactly like modern Bio Links) */}
      <main className="w-full max-w-lg mx-auto relative z-10 flex flex-col items-center">
        {/* Top Floating Share / Return Actions */}
        <div className="w-full flex items-center justify-between mb-6">
          <button
            onClick={() => {
              if (onGoHome) {
                onGoHome();
              } else {
                window.location.href = 'https://amplificagroup.com/';
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-300 hover:text-white transition-all backdrop-blur-md shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Site Principal</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-300 hover:text-white transition-all backdrop-blur-md shadow-sm active:scale-95"
            title="Compartilhar Link da Bio"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Link Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Compartilhar</span>
              </>
            )}
          </button>
        </div>

        {/* Profile Card / Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8 w-full">
          {/* Avatar / Logo with Pulsing Glow Ring */}
          <div className="relative group cursor-pointer" onClick={() => (window.location.href = 'https://amplificagroup.com/')}>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B00] via-[#FF8A33] to-[#8B5CF6] rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse duration-1000" />
            
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-zinc-950 p-3 border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-xl">
              <img
                src="/logo-new.png"
                alt="Amplifica Marketing"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,107,0,0.5)] transform transition-transform group-hover:scale-105"
              />
            </div>

            {/* Online Status Dot */}
            <div className="absolute bottom-0 right-0 translate-x-1 translate-y-1 bg-zinc-950 p-1 rounded-full border border-white/10 shadow-lg">
              <span className="flex h-3.5 w-3.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-1.5 pt-1">
            <div className="inline-flex items-center gap-1.5 justify-center">
              <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide">
                Amplifica Marketing
              </h1>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B00] text-white shadow-[0_0_10px_rgba(255,107,0,0.5)]" title="Verificado Oficial">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A33] via-[#FF6B00] to-[#8B5CF6]">
              @amplificamarketing • @recwerikoliveira
            </p>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed pt-1">
              Agência de Marketing Digital & Performance • Tráfego Pago • Criação de Sites • Videomaker & Drone 4K • Automação B2B • Catanduva & SJRP (Raio 100km).
            </p>
          </div>

          {/* Location & Status Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px] font-semibold">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
              <MapPin className="w-3 h-3 text-[#FF6B00]" />
              Catanduva - SP (Raio 100km)
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Sparkles className="w-3 h-3" />
              Projetos & Consultorias Abertos
            </span>
          </div>

          {/* Quick Icon Links Row */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/5517991951381?text=Ol%C3%A1%2C%20vim%20pelo%20Link%20da%20Bio!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 flex items-center justify-center text-zinc-300 hover:text-[#25D366] transition-all hover:scale-110 shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/amplificamarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-[#E1306C]/20 border border-white/10 hover:border-[#E1306C]/40 flex items-center justify-center text-zinc-300 hover:text-[#E1306C] transition-all hover:scale-110 shadow-sm"
              aria-label="Instagram da Agência"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href="tel:+5517991951381"
              className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-zinc-300 hover:text-emerald-400 transition-all hover:scale-110 shadow-sm"
              aria-label="Ligar"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => copyToClipboard('https://amplificagroup.com/linkbio')}
              className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-[#FF6B00]/20 border border-white/10 hover:border-[#FF6B00]/40 flex items-center justify-center text-zinc-300 hover:text-[#FF6B00] transition-all hover:scale-110 shadow-sm"
              title="Copiar Link da Bio"
              aria-label="Copiar link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Links Stack List */}
        <div className="w-full space-y-3.5 mb-10">
          {LINKS.map((item) => {
            const isHighlight = item.highlight;

            return (
              <a
                key={item.id}
                href={item.url}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (!item.external && onGoHome && item.url.includes('#')) {
                    // Internal anchor jump
                    const hashPart = item.url.split('#')[1];
                    if (hashPart) {
                      window.location.hash = hashPart;
                    }
                  }
                }}
                className={`
                  group relative w-full flex items-center justify-between p-4 sm:p-4.5 rounded-2xl
                  border transition-all duration-300 ease-out transform hover:-translate-y-1 active:scale-[0.99]
                  ${
                    isHighlight
                      ? 'bg-gradient-to-r from-[#25D366] via-[#20bd5a] to-[#128C7E] text-white border-[#25D366] shadow-[0_10px_28px_rgba(37,211,102,0.35)]'
                      : 'bg-zinc-900/70 hover:bg-zinc-800/80 border-white/10 hover:border-white/20 text-white shadow-lg backdrop-blur-md'
                  }
                `}
              >
                {/* Glow layer on hover for non-highlight */}
                {!isHighlight && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${item.color}15, transparent 70%)`,
                    }}
                  />
                )}

                {/* Left Side: Icon + Text */}
                <div className="flex items-center gap-3.5 relative z-10 text-left min-w-0 pr-2">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                      isHighlight
                        ? 'bg-black/20'
                        : 'bg-white/5 border border-white/10 text-zinc-200'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-display font-bold text-sm sm:text-base leading-snug tracking-tight ${isHighlight ? 'text-white' : 'text-zinc-100 group-hover:text-white'}`}>
                        {item.title}
                      </span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider shrink-0 ${
                            isHighlight
                              ? 'bg-black/30 text-white'
                              : 'bg-[#FF6B00]/15 text-[#FF8A33] border border-[#FF6B00]/30'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs mt-0.5 truncate leading-tight ${isHighlight ? 'text-white/85' : 'text-zinc-400'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Arrow Icon */}
                <div className="relative z-10 pl-2 shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isHighlight
                        ? 'bg-white/20 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        : 'bg-white/5 text-zinc-400 group-hover:text-white group-hover:bg-white/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Direct Contact & Key Information Card */}
        <div className="w-full p-5 rounded-3xl bg-zinc-900/50 border border-white/10 text-left space-y-4 mb-8 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A33] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
              Atendimento Comercial Verificado
            </span>
            <span className="text-[10px] text-zinc-400">Catanduva • SP</span>
          </div>

          <div className="space-y-2 text-xs text-zinc-300">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Telefone / WhatsApp:</span>
              <a href="https://wa.me/5517991951381" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#FF6B00] flex items-center gap-1">
                <span>+55 (17) 99195-1381</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Horário de Atendimento:</span>
              <span className="font-medium text-white">Segunda a Sexta, 08h às 18h</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Raio de Atendimento Presencial:</span>
              <span className="font-medium text-white">100km em torno de Catanduva (SP)</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Atendimento Online:</span>
              <span className="font-medium text-emerald-400">Todo o Brasil</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => copyToClipboard('https://amplificagroup.com/linkbio')}
              className="w-full py-2.5 rounded-xl neu-btn text-xs font-bold text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">URL Copiada para a Área de Transferência!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#FF6B00]" />
                  <span>Copiar Link desta Página (amplificagroup.com/linkbio)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center space-y-2 pb-6">
          <p className="text-xs font-medium text-zinc-500">
            © 2026 Amplifica Marketing (Amplifica Group)
          </p>
          <p className="text-[11px] text-zinc-600">
            Desenvolvido com alta performance para conversão de leads.
          </p>
        </footer>
      </main>
    </div>
  );
}
