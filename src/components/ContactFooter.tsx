import React from 'react';
import { MessageCircle, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function ContactFooter() {
  const whatsappUrl = "https://wa.me/5517991951381?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Amplifica%20Marketing%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!";

  return (
    <footer id="contato" className="relative bg-[#050507] pt-20 pb-12 overflow-hidden border-t border-[var(--border-subtle)]">
      {/* Soft Backlight Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#25D366]/15 via-[#FF6B00]/15 to-[#8B5CF6]/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Clean Frameless WhatsApp CTA Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-well text-xs text-[#25D366] font-semibold tracking-wider uppercase shadow-sm">
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> ATENDIMENTO DIRETO VIA WHATSAPP
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Pronto para amplificar seus <br />
            <span className="text-gradient">resultados digitais?</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Sem formulários ou burocracia. Fale diretamente com o fundador e nossa equipe estratégica no WhatsApp.
          </p>

          {/* Direct WhatsApp Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-[0_10px_35px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Conversar no WhatsApp: (17) 99195-1381</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-5 text-xs text-zinc-400 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Atendimento Ativo Agora
            </span>
            <span>•</span>
            <span>Resposta Média em 5 Minutos</span>
          </div>
        </div>

        {/* Footer Channels & Credits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10 text-xs">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl neu-well flex items-center justify-center p-1.5">
                <img src="/logo-new.png" alt="Amplifica Marketing" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-lg tracking-widest text-white">AMPLIFICA</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
              Agência especializada em estratégias de marketing digital, tráfego pago, SEO, websites e produções audiovisuais com drone 4K.
            </p>
          </div>

          {/* Contact Direct Channels */}
          <div className="space-y-2.5">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">Canais Diretos</h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp: +55 (17) 99195-1381</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>São Paulo & Região (Atendimento Brasil)</span>
              </li>
            </ul>
          </div>

          {/* Official Social & Tools Links */}
          <div className="space-y-2.5">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">Redes & Ferramentas</h4>
            <div className="space-y-2">
              <a
                href="https://planner.amplificagroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl neu-well hover:border-[#FF6B00] transition-colors text-xs text-zinc-300 group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                  <span>Amplifica Planner (Conteúdo)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://instagram.com/amplificamarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl neu-well hover:border-[#FF6B00] transition-colors text-xs text-zinc-300"
              >
                <span>Agência: @amplificamarketing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B00]" />
              </a>

              <a
                href="https://instagram.com/recwerikoliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl neu-well hover:border-[#8B5CF6] transition-colors text-xs text-zinc-300"
              >
                <span>Fundador: @recwerikoliveira</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8B5CF6]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p>© 2026 Amplifica Marketing. Todos os direitos reservados.</p>
          <p>Fundado por Werik Oliveira (@recwerikoliveira)</p>
        </div>

      </div>
    </footer>
  );
}
