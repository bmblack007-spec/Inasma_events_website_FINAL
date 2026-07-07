import { ArrowRight } from 'lucide-react';

interface ServicesHeroProps {
  onExplore: () => void;
}

export default function ServicesHero({ onExplore }: ServicesHeroProps) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-900/50 to-charcoal-950/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-gold-300 text-xs md:text-sm uppercase tracking-widest mb-6 animate-fade-in-up">
          Luxury Décor Hire
        </p>
        <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
          INASMA
        </h1>
        <div className="w-16 h-px bg-gold-400 mx-auto mb-6 animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }} />
        <p className="font-serif italic text-white/90 text-lg md:text-2xl font-light tracking-wide mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          Transforming Space For Lifetime Memories
        </p>
        <button
          onClick={onExplore}
          className="group inline-flex items-center gap-3 bg-transparent border border-gold-400 text-gold-300 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-500 animate-fade-in-up"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          Explore Services
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold-400 to-transparent" />
      </div>
    </section>
  );
}
