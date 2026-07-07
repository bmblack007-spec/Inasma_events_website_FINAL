import { useEffect, useState } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import logoWhite from '../assets/Logo_white_transparentBG.png';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', action: 'home' },
    { label: 'Services', action: 'services' },
    { label: 'Catalogue', action: 'catalogue' },
    { label: 'Contact', action: 'contact' },
  ];

  const handleNav = (action: string) => {
    onNavigate(action);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('home')}
          className="flex flex-col items-center group focus:outline-none"
        >
          <div
            className="flex items-center gap-2 font-serif text-xl sm:text-2xl md:text-3xl tracking-widest font-medium transition-colors duration-300"
            style={{ color: scrolled ? '#1f2123' : '#ffffff' }}
          >
            <img
              src={logoWhite}
              alt="INASMA Logo"
              className="h-6 md:h-8 w-auto object-contain transition-all duration-300"
              style={{ filter: scrolled ? 'invert(1) brightness(0.2)' : 'none' }}
            />
            <span className="leading-none select-none">INASMA</span>
          </div>
          <span
            className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] pl-[0.4em] font-light mt-1.5 transition-colors duration-300"
            style={{ color: scrolled ? '#6b7280' : 'rgba(255, 255, 255, 0.65)' }}
          >
            Johannesburg
          </span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.action)}
              className="text-xs uppercase tracking-widest font-medium transition-colors duration-300 hover:text-gold-400"
              style={{ color: scrolled ? '#3d3f45' : '#ffffff' }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://www.instagram.com/inasma._decor?igsh=YzF6OWI3czFsMGxs&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-gold-400 hover:text-gold-300 transition-colors"
          >
            <Instagram size={14} />
            inasma._decor
          </a>
          <a
            href="https://wa.me/27813566058"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-gold-400 hover:text-gold-300 transition-colors"
          >
            <MessageCircle size={14} />
            081 356 6058
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: scrolled ? '#1f2123' : '#ffffff' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-cream/98 backdrop-blur-md px-6 py-6 flex flex-col gap-5 shadow-lg">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.action)}
              className="text-sm uppercase tracking-widest font-medium text-charcoal-700 text-left hover:text-gold-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://www.instagram.com/inasma._decor?igsh=YzF6OWI3czFsMGxs&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-gold-500 hover:text-gold-450 transition-colors"
          >
            <Instagram size={16} />
            inasma._decor
          </a>
          <a
            href="https://wa.me/27813566058"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-gold-500 hover:text-gold-450 transition-colors"
          >
            <MessageCircle size={16} />
            081 356 6058
          </a>
        </div>
      </div>
    </header>
  );
}
