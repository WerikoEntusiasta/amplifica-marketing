import React, { useEffect, useRef, useState } from 'react';

// Brand color palette helper
const BRAND_TUBE_PALETTES = [
  ['#FF6B00', '#8B5CF6', '#FF8A33'],
  ['#8B5CF6', '#D946EF', '#FF6B00'],
  ['#FF8A33', '#A78BFA', '#3B82F6'],
  ['#FF6B00', '#EC4899', '#8B5CF6'],
];

const BRAND_LIGHT_PALETTES = [
  ['#FF6B00', '#8B5CF6', '#A78BFA', '#FF8A33'],
  ['#FF8A33', '#D946EF', '#8B5CF6', '#3B82F6'],
  ['#8B5CF6', '#FF6B00', '#F43F5E', '#10B981'],
];

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({
  children,
  className = '',
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const tubesRef = useRef<any>(null);
  const paletteIndexRef = useRef(0);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    // Detect mobile / small screen for performance optimization
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024);
      setIsMobile(mobile);
      return mobile;
    };

    if (checkMobile()) {
      return; // Skip heavy 3D ThreeJS canvas initialization on mobile for 60fps performance
    }

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // Dynamic import from CDN for threejs-components tubes1 cursor with timeout
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('CDN timeout')), 3500)
        );

        // @ts-ignore
        const importPromise = import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');

        const module: any = await Promise.race([importPromise, timeoutPromise]);
        const TubesCursor = module.default;

        if (!mounted) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: BRAND_TUBE_PALETTES[0],
            lights: {
              intensity: 220,
              colors: BRAND_LIGHT_PALETTES[0],
            },
          },
        });

        tubesRef.current = app;

        const handleResize = () => {
          if (window.innerWidth < 768) {
            setIsMobile(true);
            return;
          }
          if (tubesRef.current && tubesRef.current.resize) {
            tubesRef.current.resize();
          }
        };

        window.addEventListener('resize', handleResize);

        cleanup = () => {
          window.removeEventListener('resize', handleResize);
        };
      } catch (error) {
        console.warn('TubesCursor fallback to ambient gradient:', error);
        setIsMobile(true);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    // Only randomize if clicking canvas/background directly or if enableClickInteraction is true
    if (!enableClickInteraction || !tubesRef.current) return;

    paletteIndexRef.current = (paletteIndexRef.current + 1) % BRAND_TUBE_PALETTES.length;
    const colors = BRAND_TUBE_PALETTES[paletteIndexRef.current];
    const lightColors = BRAND_LIGHT_PALETTES[paletteIndexRef.current % BRAND_LIGHT_PALETTES.length];

    if (tubesRef.current.tubes) {
      if (typeof tubesRef.current.tubes.setColors === 'function') {
        tubesRef.current.tubes.setColors(colors);
      }
      if (typeof tubesRef.current.tubes.setLightsColors === 'function') {
        tubesRef.current.tubes.setLightsColors(lightColors);
      }
    }
  };

  return (
    <div
      className={`relative w-full h-full min-h-[400px] overflow-hidden bg-[#050507] ${className}`}
      onClick={handleClick}
    >
      {!isMobile ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block z-0"
          style={{ touchAction: 'none' }}
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-radial from-[#FF6B00]/10 via-[#8B5CF6]/5 to-[#050507] pointer-events-none" />
      )}

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
