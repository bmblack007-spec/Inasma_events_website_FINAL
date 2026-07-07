import clink2 from '../assets/clink2.png';
import logoWhite from '../assets/Logo_white_transparentBG.png';

interface HeroProps {
  onViewCatalogue: () => void;
}

export default function Hero({}: HeroProps) {
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
            className="w-auto h-auto max-w-[300px] md:max-w-[500px] object-contain mb-6"
          />
          <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.4em] pl-[0.4em] uppercase">
            CATALOGUE
          </h1>
          <p className="text-gold-50 text-l md:text-l uppercase tracking-widest mt-3">
            Decor Hire
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold-400 to-transparent" />
      </div>
    </section>
  );
}
