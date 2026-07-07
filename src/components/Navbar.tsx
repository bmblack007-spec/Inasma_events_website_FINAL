import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  variant?: 'home' | 'services';
}

export default function Navbar({ onNavigate, variant = 'home' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links =
    variant === 'services'
      ? [
          { label: 'Home', action: 'home' },
          { label: 'Services', action: 'services' },
          { label: 'Catalogue', action: 'catalogue' },
          { label: 'Contact', action: 'contact' },
        ]
      : [
          { label: 'Catalogue', action: 'catalogue' },
          { label: 'Categories', action: 'categories' },
          { label: 'Services', action: 'services' },
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
          onClick={() => handleNav(variant === 'services' ? 'home' : 'hero')}
          className="font-serif text-2xl md:text-3xl tracking-widest font-medium transition-colors duration-300"
          style={{ color: scrolled ? '#1f2123' : '#ffffff' }}
        >
          INASMA
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
            href="tel:0813566058"
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-gold-400 hover:text-gold-300 transition-colors"
          >
            <Phone size={14} />
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
            href="tel:0813566058"
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-gold-500"
          >
            <Phone size={16} />
            081 356 6058
          </a>
        </div>
      </div>
    </header>
  );
}
