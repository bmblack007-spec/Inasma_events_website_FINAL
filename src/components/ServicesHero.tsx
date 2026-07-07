import { ArrowRight } from 'lucide-react';
import clink2 from '../assets/clink2.png';
import logoWhite from '../assets/Logo_white_transparentBG.png';

interface ServicesHeroProps {
  onExplore: () => void;
  onViewCatalogue?: () => void;
}

export default function ServicesHero({ onExplore, onViewCatalogue }: ServicesHeroProps) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${clink2})`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <div className="flex flex-col items-center justify-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <img
            src={logoWhite}
            alt="INASMA Logo"
            className="w-auto h-auto max-w-[300px] md:max-w-[500px] object-contain mb-4"
          />
          <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.6em] pl-[0.6em]">
            INASMA
          </h1>
          <p className="text-gold-50 text-l md:text-l uppercase tracking-widest mt-3">
            Events
          </p>
        </div>
        <div className="w-16 h-px bg-gold-400 mx-auto mb-6 animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }} />
        <p className="font-serif italic text-white/90 text-lg md:text-2xl font-light tracking-wide mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          Transforming Space For Lifetime Memories
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.55s', opacity: 0 }}>
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-3 bg-gold-400 text-charcoal-900 border border-gold-400 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-300 hover:border-gold-300 transition-all duration-500"
          >
            Explore Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          {onViewCatalogue && (
            <button
              onClick={onViewCatalogue}
              className="group inline-flex items-center gap-3 bg-transparent border border-gold-400 text-gold-300 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-500"
            >
              View Catalogue
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold-400 to-transparent" />
      </div>
    </section>
  );
}
