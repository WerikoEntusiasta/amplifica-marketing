import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Mariana Costa',
    role: 'CEO, Bella Moda',
    avatar: 'MC',
    text: 'A Amplifica transformou completamente nossa presença digital. Em apenas 3 meses, triplicamos nosso engajamento e as vendas vindas do Instagram cresceram 280%. A equipe é incrivelmente profissional!',
    stars: 5,
  },
  {
    name: 'Ricardo Santos',
    role: 'Diretor de Marketing, TechSolution',
    avatar: 'RS',
    text: 'O tráfego pago gerenciado pela Amplifica nos trouxe um ROI de 7x nos primeiros 60 dias. Os relatórios semanais são extremamente claros e a otimização diária faz toda a diferença.',
    stars: 5,
  },
  {
    name: 'Ana Ferreira',
    role: 'Fundadora, Espaço Zen',
    avatar: 'AF',
    text: 'As landing pages criadas converteram 3x mais que o nosso site anterior. E o vídeo institucional gravado com drone ficou simplesmente espetacular! Qualidade de cinema.',
    stars: 5,
  },
  {
    name: 'Pedro Lima',
    role: 'Proprietário, Sabor & Arte',
    avatar: 'PL',
    text: 'Contratamos a Amplifica para gestão completa das redes sociais e criação de conteúdo. Nosso perfil saltou de 2k para 45k seguidores em 6 meses com leads qualificados todo dia.',
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev >= TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="relative py-32 bg-[var(--bg)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#FF6B00] uppercase tracking-wider font-semibold mb-4">
            DEPOIMENTOS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] mb-6">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            A satisfação das empresas que atendemos é a nossa maior conquista.
          </p>
        </div>

        {/* Neumorphic Extruded Testimonial Card */}
        <div className="neu-card p-8 sm:p-14 relative overflow-hidden">
          <Quote className="absolute top-6 right-6 w-20 h-20 text-[var(--text)]/5 pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1 text-[#FF6B00] mb-6">
            {Array.from({ length: TESTIMONIALS[current].stars }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF6B00]" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="font-display font-medium text-lg sm:text-2xl text-[var(--text)] leading-relaxed mb-8 italic">
            "{TESTIMONIALS[current].text}"
          </blockquote>

          {/* Author info */}
          <div className="flex items-center justify-between pt-6 border-t border-[var(--border-subtle)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full neu-well flex items-center justify-center font-bold text-white text-sm">
                <div className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center">
                  {TESTIMONIALS[current].avatar}
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-[var(--text)] text-base">{TESTIMONIALS[current].name}</div>
                <div className="text-xs text-[var(--text-muted)]">{TESTIMONIALS[current].role}</div>
              </div>
            </div>

            {/* Neumorphic Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl neu-btn flex items-center justify-center text-[var(--text)]"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl neu-btn flex items-center justify-center text-[var(--text)]"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === idx ? 'w-8 accent-gradient' : 'w-2.5 neu-well'
              }`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
