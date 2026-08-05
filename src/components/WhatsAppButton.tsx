import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/5517991951381?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Amplifica%20Marketing!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[950] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      title="Falar com Especialista no WhatsApp (+55 17 99195-1381)"
    >
      <div className="relative">
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
      </div>
    </a>
  );
}
