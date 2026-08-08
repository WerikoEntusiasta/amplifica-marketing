import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenBlog?: () => void;
  onGoHome?: () => void;
  currentPage?: 'home' | 'blog';
}

const NAV_ITEMS = [
  { label: 'Início', href: '#hero', page: 'home' },
  { label: 'Serviços', href: '#servicos', page: 'home' },
  { label: 'Portfólio', href: '#portfolio', page: 'home' },
  { label: 'Sobre', href: '#sobre', page: 'home' },
  { label: 'Planner ↗', href: 'https://planner.amplificagroup.com/', page: 'external' },
  { label: 'Blog', href: '#blog', page: 'blog' },
  { label: 'Contato', href: '#contato', page: 'home' },
];

export default function Navbar({ onOpenBlog, onGoHome, currentPage = 'home' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Início');
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isLight;
    setIsLight(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  const handleNavClick = (item: typeof NAV_ITEMS[0]) => {
    setActiveNav(item.label);
    if (item.page === 'external') {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      setMobileOpen(false);
      return;
    }
    if (item.page === 'blog') {
      if (onOpenBlog) onOpenBlog();
    } else {
      if (currentPage === 'blog' && onGoHome) {
        onGoHome();
        setTimeout(() => {
          const el = document.querySelector(item.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
        <div
          className={`pointer-events-auto inline-flex items-center rounded-full bg-[var(--bg)] px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'shadow-[14px_14px_28px_var(--shadow-dark),-10px_-10px_24px_var(--shadow-light)] border border-white/5'
              : 'shadow-[10px_10px_20px_var(--shadow-dark),-8px_-8px_18px_var(--shadow-light)]'
          }`}
        >
          {/* Prominent Enlarged Logo Symbol & Brand Name */}
          <button
            onClick={() => {
              if (onGoHome) onGoHome();
              setActiveNav('Início');
            }}
            className="flex items-center gap-3 pl-1 pr-2 group text-left"
          >
            <div className="w-11 h-11 rounded-2xl neu-well flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110 shadow-sm">
              <img
                src="/logo-new.png"
                alt="Amplifica Marketing"
                className={`w-full h-full object-contain transition-all ${
                  isLight ? 'filter invert brightness-0' : ''
                }`}
              />
            </div>
            <span className="font-display font-extrabold text-base md:text-lg tracking-widest text-[var(--text)] group-hover:text-[#FF6B00] transition-colors">
              AMPLIFICA
            </span>
          </button>

          <div className="w-px h-6 bg-zinc-400/20 mx-4 hidden md:block" />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.page === 'blog') {
                    e.preventDefault();
                  }
                  handleNavClick(item);
                }}
                className={`text-xs sm:text-sm rounded-full px-4 py-2 font-medium transition-all duration-300 ${
                  (currentPage === 'blog' && item.page === 'blog') || (currentPage === 'home' && activeNav === item.label)
                    ? 'text-[var(--text)] neu-well font-semibold text-[#FF6B00]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-black/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="w-px h-6 bg-zinc-400/20 mx-4 hidden md:block" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar Tema Claro/Escuro"
            className="neu-btn p-2.5 rounded-full text-zinc-400 hover:text-[#FF6B00] mr-2"
          >
            {isLight ? <Moon className="w-4 h-4 text-[#8B5CF6]" /> : <Sun className="w-4 h-4 text-[#FF6B00]" />}
          </button>

          {/* CTA Button */}
          <a
            href="#contato"
            onClick={() => {
              if (currentPage === 'blog' && onGoHome) onGoHome();
            }}
            className="neu-btn-primary px-6 py-2.5 text-xs sm:text-sm font-bold text-white flex items-center gap-1.5"
          >
            <span>Fale Conosco</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-3 p-2.5 rounded-xl neu-btn text-zinc-400 hover:text-[var(--text)]"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:hidden">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-14 h-14 rounded-2xl neu-well flex items-center justify-center p-2">
              <img
                src="/logo-new.png"
                alt="Amplifica Marketing"
                className={`w-full h-full object-contain ${isLight ? 'filter invert brightness-0' : ''}`}
              />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-widest text-[var(--text)]">
              AMPLIFICA
            </span>
          </div>
          <nav className="flex flex-col items-center space-y-6 text-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.page === 'blog') e.preventDefault();
                  handleNavClick(item);
                }}
                className="text-2xl font-display font-semibold text-[var(--text)] hover:text-[#FF6B00] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => {
                if (currentPage === 'blog' && onGoHome) onGoHome();
                setMobileOpen(false);
              }}
              className="mt-4 neu-btn-primary px-8 py-3.5 font-bold text-white shadow-lg"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
