import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
}

export default function GlowButton({
  children,
  className = '',
  icon = <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />,
  asAnchor = false,
  href,
  onClick,
  ...props
}: GlowButtonProps) {
  const btnRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--x', `${x}px`);
    btnRef.current.style.setProperty('--y', `${y}px`);
  };

  const sharedClasses = `
    relative group inline-flex items-center justify-center gap-2.5 
    px-8 py-4 rounded-2xl font-bold text-white text-sm sm:text-base 
    overflow-hidden transition-all duration-300 transform active:scale-95
    bg-gradient-to-r from-[#FF6B00] to-[#8B5CF6]
    shadow-[0_4px_20px_rgba(255,107,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)]
    ${className}
  `;

  const innerContent = (
    <>
      {/* Dynamic Cursor-Position Radial Glow Layer */}
      <span
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(160px circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.4), rgba(255, 107, 0, 0.25) 40%, transparent 80%)`,
        }}
      />

      {/* Ambient Pulsing Aura */}
      <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#8B5CF6] blur-md opacity-30 group-hover:opacity-80 transition-opacity duration-500 -z-10" />

      {/* Button Text & Icon */}
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
        {children}
        {icon}
      </span>
    </>
  );

  if (asAnchor && href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        className={sharedClasses}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={sharedClasses}
      {...props}
    >
      {innerContent}
    </button>
  );
}
